'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { MessagePayload, Result } from '@/lib/types';
import ActionButton from './basic/action-button/page';
import { useRouter } from 'next/navigation';

type ChatMsg = {
    id: string;
    role: 'system' | 'user';
    text: string;
    ts: number; // epoch ms
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
            const first: ChatMsg = { id: crypto.randomUUID(), role: 'system', text: intro, ts: Date.now() };
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

    const submit = async (): Promise<Result> => {
        const raw = text.trim();
        if (!raw) return { status: 'error', message: 'Escribe un mensaje.' };

        // optimistic append
        const mine: ChatMsg = { id: crypto.randomUUID(), role: 'user', text: raw, ts: Date.now() };
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
            return { status: 'error', message: e?.message || 'Error' };
        } finally {
            setBusy(false);
        }
    };
    const back = (): Promise<void> => {
        router.replace(num === 3 ? '/cabildos/final-message' : '/');
        return Promise.resolve();
    };

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
                        {/* <div style={{
                            textAlign: 'center',
                            margin: '12px 0',
                            fontSize: 12,
                            fontWeight: 700,
                            background: '#000',
                            color: '#fff',
                            padding: '4px 10px',
                            borderRadius: 999
                        }}>{g.chip}</div> */}

                        {g.items.map(m => (
                            <div key={m.id} style={{
                                display: 'flex',
                                justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
                                margin: '6px 0'
                            }}>
                                <div style={{
                                    background: m.role === 'user' ? '#d9fdd3' : '#efefef',
                                    color: '#111',
                                    padding: '10px 12px',
                                    borderRadius: 12,
                                    maxWidth: '80%',
                                    minWidth: '80%',
                                    boxShadow: '0 1px 1px rgba(0,0,0,.08)'
                                }}>
                                    <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{m.text}</div>
                                    <div style={{ textAlign: 'right', fontSize: 11, color: '#666', marginTop: 4 }}>
                                        {fmtTime(m.ts)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* COMPOSER */}
            <textarea
                ref={textareaRef}
                className="input w100"
                placeholder={placeholder ?? 'Escribe tu mensaje...'}
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={1}
            />
            <ActionButton
                label="Enviar"
                onAction={submit}
                disabled={busy}
                height={48}
            />
            <ActionButton
                label="Regresar"
                backBtn
                onAction={back}
                disabled={busy}
                height={48}
            />
            {/* Optionally show a separate “Terminar” on the page to call markStationDone(num) */}
        </div>
    );
}
