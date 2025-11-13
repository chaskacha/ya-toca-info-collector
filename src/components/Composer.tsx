'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { MessagePayload, Result } from '@/lib/types';
import ActionButton from './basic/action-button/page';
import { useRouter } from 'next/navigation';
import { blobToDataUrl } from '@/helpers/common';

type ChatMsg = {
    id: string;
    role: 'system' | 'user';
    ts: number; // epoch ms
    kind: 'text' | 'audio';
    text?: string;
    audio?: { url: string; mime: string; durMs?: number };
};

function markStationDone(n: number) {
    const raw = localStorage.getItem('yt_stations_done') || '[]';
    const arr = Array.isArray(JSON.parse(raw)) ? JSON.parse(raw) : [];
    const set = new Set<number>(arr);
    set.add(n);
    localStorage.setItem('yt_stations_done', JSON.stringify(Array.from(set).sort()));
}

function fmtTime(ts: number) {
    const d = new Date(ts);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
function sameDay(a: number, b: number) {
    const A = new Date(a), B = new Date(b);
    return A.getFullYear() === B.getFullYear() && A.getMonth() === B.getMonth() && A.getDate() === B.getDate();
}
function chipLabel(ts: number) {
    const d = new Date(ts);
    const today = new Date();
    if (sameDay(ts, today.getTime())) return 'Hoy';
    return d.toLocaleDateString([], { day: '2-digit', month: 'long', year: 'numeric' });
}

export default function Composer({
    kind,
    placeholder,
    num,
    textareaRef,
    intro,                       // NEW: intro bubble text
    storageKey = `yt_chat_station_${num}`, // NEW: persist per station
    markDoneOnFirstSend = false, // optional: mark station done on first message
}: {
    kind: MessagePayload['type'];
    placeholder?: string;
    num: number;
    textareaRef: React.RefObject<HTMLTextAreaElement | null>;
    intro?: string;
    storageKey?: string;
    markDoneOnFirstSend?: boolean;
}) {
    const router = useRouter();
    const [text, setText] = useState('');
    const [busy, setBusy] = useState(false);

    // refs
    const recRef = useRef<MediaRecorder | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const chunksRef = useRef<BlobPart[]>([]);
    const tickRef = useRef<number | null>(null);

    // transcript
    const [msgs, setMsgs] = useState<ChatMsg[]>(() => {
        try {
            const raw = localStorage.getItem(storageKey);
            const arr: ChatMsg[] = raw ? JSON.parse(raw) : [];
            return Array.isArray(arr) ? arr : [];
        } catch { return []; }
    });

    // add intro bubble once if no history
    useEffect(() => {
        if (intro && msgs.length === 0) {
            const first: ChatMsg = { id: crypto.randomUUID(), role: 'system', text: intro, ts: Date.now(), kind: 'text' };
            setMsgs([first]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // persist on change
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(msgs));
    }, [msgs, storageKey]);

    // auto-scroll to bottom
    const scrollRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }, [msgs.length]);

    // split into groups by day to show date chips
    const groups = useMemo(() => {
        const out: { chip: string; items: ChatMsg[] }[] = [];
        for (const m of msgs) {
            const label = chipLabel(m.ts);
            const last = out[out.length - 1];
            if (!last || last.chip !== label) out.push({ chip: label, items: [m] });
            else last.items.push(m);
        }
        return out;
    }, [msgs]);

    // ------------------ AUDIO RECORDER (client-side only) ------------------
    const [recState, setRecState] = useState<'idle' | 'recording'>('idle');
    const [elapsed, setElapsed] = useState(0);
    const rec = useRef<MediaRecorder | null>(null);
    const recChunks = useRef<BlobPart[]>([]);
    const recTimer = useRef<number | null>(null);

    async function startRec() {
        if (recState === 'recording') return;
        setElapsed(0);
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        recChunks.current = [];
        const mime =
            MediaRecorder.isTypeSupported('audio/webm;codecs=opus') ? 'audio/webm;codecs=opus' :
                MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' :
                    MediaRecorder.isTypeSupported('audio/mp4;codecs=mp4a.40.2') ? 'audio/mp4;codecs=mp4a.40.2' :
                        'audio/webm';

        rec.current = new MediaRecorder(stream, { mimeType: mime });
        rec.current.ondataavailable = (e) => { if (e.data.size) recChunks.current.push(e.data); };
        rec.current.start(250);
        setRecState('recording');

        const t0 = Date.now();
        recTimer.current = window.setInterval(() => setElapsed(Date.now() - t0), 200) as unknown as number;
    }

    async function stopRec() {
        if (!rec.current) return;
        const r = rec.current;
        rec.current = null;

        // stop tracks
        r.stream.getTracks().forEach(t => t.stop());
        try { r.stop(); } catch { }

        // build blob
        const blob = new Blob(recChunks.current, { type: r.mimeType || 'audio/webm' });
        recChunks.current = [];
        if (recTimer.current) { clearInterval(recTimer.current); recTimer.current = null; }
        setRecState('idle');

        // persistable data URL + chat bubble
        const url = await blobToDataUrl(blob);
        const msg: ChatMsg = {
            id: crypto.randomUUID(),
            role: 'user',
            ts: Date.now(),
            kind: 'audio',
            audio: { url, mime: blob.type, durMs: elapsed },
        };
        setMsgs(prev => [...prev, msg]);
        setElapsed(0);

        // 2) send to /api/transcribe
        try {
            const file = new File([blob], `audio-${Date.now()}.${/mp4|aac/.test(blob.type) ? 'm4a' : 'webm'}`, { type: blob.type });
            const fd = new FormData();
            fd.append('file', file);
            fd.append('lang', 'es'); // optional hint

            const trRes = await fetch('/api/transcribe', { method: 'POST', body: fd });
            const trJson = await trRes.json();
            const transcript: string = trJson?.text?.trim?.() || '';

            if (!trRes.ok || !transcript) throw new Error('No transcript');

            // 4) Send transcript to your normal /api/messages endpoint
            const payload: MessagePayload = { type: kind, text: transcript };
            const res = await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!res.ok) {
                console.warn('Failed posting transcript to /api/messages');
            } else if (markDoneOnFirstSend) {
                markStationDone(num);
            }
        } catch (err) {
            console.warn('Transcription failed; keeping audio only.', err);
            // You could append a tiny “No se pudo transcribir” system bubble if desired
        }
    }

    const submit = async (): Promise<Result> => {
        const raw = text.trim();
        if (!raw) return { status: 'error', message: 'Escribe un mensaje.' };

        // optimistic append
        const mine: ChatMsg = { id: crypto.randomUUID(), role: 'user', text: raw, ts: Date.now(), kind: 'text' };
        setMsgs(prev => [...prev, mine]);
        setText('');
        setBusy(true);

        try {
            const payload: MessagePayload = { type: kind, text: raw };
            const res = await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const j = await res.json();
            if (!res.ok) throw new Error(j.error || 'Error');
            if (markDoneOnFirstSend) markStationDone(num);
            return { status: 'success', message: '¡Enviado!' };
        } catch (e: any) {
            // rollback on error
            setMsgs(prev => prev.filter(x => x.id !== mine.id));
            setText(raw);
            return { status: 'error', message: e?.message || 'Vuelve a intentar, por favor.' };
        } finally {
            setBusy(false);
        }
    };

    function remainingStations(afterAdding?: number): number[] {
        try {
            const arr = JSON.parse(localStorage.getItem('yt_stations_done') || '[]');
            const set = new Set<number>(Array.isArray(arr) ? arr : []);
            if (afterAdding != null) set.add(afterAdding); // simulate adding current
            return [1, 2, 3].filter(n => !set.has(n));
        } catch {
            return [1, 2, 3]; // on parse error, treat as none done
        }
    }

    const back = (): Promise<void> => {
        const remaining = remainingStations(num); // include this station as done
        router.replace(remaining.length === 0 ? '/cabildos/final-message' : '/');
        return Promise.resolve();
    };

    const hasText = text.trim().length > 0;

    function mmss(ms: number) {
        const s = Math.floor(ms / 1000);
        const m = Math.floor(s / 60);
        return `${m}:${String(s % 60).padStart(2, '0')}`;
    }

    function clearTimers() {
        if (tickRef.current) { clearInterval(tickRef.current); tickRef.current = null; }
    }

    function stopAllTracks() {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(t => t.stop());
            streamRef.current = null;
        }
    }

    function cancelRec() {
        try {
            if (recRef.current && recRef.current.state !== 'inactive') {
                // stop without caring about resulting data
                recRef.current.ondataavailable = null as any;
                recRef.current.onstop = null as any;
                recRef.current.stop();
            }
        } catch { }
        clearTimers();
        stopAllTracks();
        chunksRef.current = [];      // discard any partial audio
        setElapsed(0);
        setRecState('idle');
    }


    return (
        <div className="space-y-4">
            {/* CHAT VIEW */}
            <div
                ref={scrollRef}
                style={{
                    maxHeight: 420,
                    overflowY: 'auto',
                    background: '#fff',
                    padding: 12,
                }}
            >
                {groups.map(g => (
                    <div key={g.chip}>
                        {g.items.map(m => (
                            <div key={m.id} style={{
                                display: 'flex',
                                justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
                                margin: '6px 0'
                            }}>
                                <div style={{
                                    background: m.role === 'user' ? '#EABF00' : '#efefef',
                                    color: '#111',
                                    padding: '10px 12px',
                                    borderRadius: 12,
                                    maxWidth: '80%',
                                    minWidth: '80%',
                                    boxShadow: '0 1px 1px rgba(0,0,0,.08)'
                                }}>
                                    {m.kind === 'text' && (
                                        <div style={{ whiteSpace: 'pre-wrap', color: m.role === 'user' ? '#fff' : '#111', wordBreak: 'break-word' }}>{m.text}</div>
                                    )}
                                    {m.kind === 'audio' && m.audio && (
                                        <audio
                                            controls
                                            src={m.audio.url}     // data: URL, survives refresh
                                            style={{ width: '100%' }}
                                        />
                                    )}
                                    <div style={{ textAlign: 'right', fontSize: 11, color: m.role === 'user' ? '#fff' : '#111', marginTop: 4 }}>
                                        {fmtTime(m.ts)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* COMPOSER ROW (text + mic) */}
            <div style={{ display: 'flex', gap: 8, width: '100%' }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', width: '100%' }}>
                    {recState === 'recording' ? (
                        /* WhatsApp-style record bar */
                        <div className="wa-recbar w100">
                            <button
                                type="button"
                                className="wa-recbar__trash"
                                aria-label="Descartar"
                                onClick={cancelRec}
                            >
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/860/860829.png"
                                    alt="Eliminar"
                                    width={20}
                                    height={20}
                                />
                            </button>

                            <div className="wa-recbar__time">{mmss(elapsed)}</div>

                            {/* the moving dots/line */}
                            <div className="wa-recbar__wave" aria-hidden />

                            {/* big green round stop/send */}
                            <button
                                type="button"
                                className="wa-recbar__send"
                                aria-label="Detener y guardar"
                                onClick={stopRec}
                            >
                                <div className="fs14">Enviar</div>
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                    <path d="M3 21l18-9L3 3v7l12 2-12 2v7z" />
                                </svg>
                            </button>
                        </div>
                    ) : (
                        <div className="wa-recbar w100">
                            <textarea
                                ref={textareaRef}
                                className="input w100"
                                placeholder={placeholder ?? 'Escribe tu mensaje...'}
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                rows={1}
                                style={{ flex: 1 }}
                                disabled={recState !== 'idle'}
                                onKeyDown={(e) => {
                                    if (hasText && (e.key === 'Enter' && !e.shiftKey)) {
                                        e.preventDefault();
                                        if (!busy) submit();
                                    }
                                }}
                            />
                            {hasText ? (
                                /* send text */
                                <button
                                    type="button"
                                    className="btn-send"
                                    onClick={() => !busy && submit()}
                                    disabled={busy}
                                    aria-label="Enviar"
                                    title="Enviar"
                                >
                                    <div className='fs14'>Enviar</div>
                                    <svg style={{ minWidth: '18px', minHeight: '18px' }} viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                        <path d="M3 21l18-9L3 3v7l12 2-12 2v7z" />
                                    </svg>
                                </button>
                            ) : (
                                /* mic (start recording) */
                                <button
                                    type="button"
                                    className="btn-mic"
                                    aria-label="Grabar audio"
                                    title="Grabar audio"
                                    onClick={startRec}
                                    disabled={busy}
                                >
                                    <img
                                        src="https://www.svgrepo.com/show/416937/mic-microphone-podcast.svg"
                                        width={24}
                                        height={24}
                                        alt="Grabar audio"
                                    />
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <ActionButton
                label="Regresar"
                backBtn
                onAction={back}
                disabled={busy}
                height={48}
            />
        </div>
    );
}
