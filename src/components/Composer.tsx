'use client';
import React, { useRef, useState } from 'react';
import type { MessagePayload, Result, UploadAudio, UploadImage } from '@/lib/types';
import ActionButton from './basic/action-button/page';
import { useRouter } from 'next/navigation';

function markStationDone(n: number) {
    const raw = localStorage.getItem('yt_stations_done') || '[]';
    const arr = Array.isArray(JSON.parse(raw)) ? JSON.parse(raw) : [];
    const set = new Set<number>(arr);
    set.add(n);
    localStorage.setItem('yt_stations_done', JSON.stringify(Array.from(set).sort()));
}

async function fileToDataUrl(file: File): Promise<string> {
    return new Promise((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(String(r.result));
        r.onerror = rej;
        r.readAsDataURL(file);
    });
}

export default function Composer({ kind, placeholder, num }: { kind: MessagePayload['type']; placeholder?: string; num: number }) {
    const [text, setText] = useState('');
    const [images, setImages] = useState<UploadImage[]>([]);
    const [audio, setAudio] = useState<UploadAudio>(null);
    const [busy, setBusy] = useState(false);
    // Audio recorder
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const chunks = useRef<Blob[]>([]);
    const [recording, setRecording] = useState(false);
    const router = useRouter();

    const startRec = async () => {
        if (recording) return;
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mr = new MediaRecorder(stream);
        mediaRecorder.current = mr;
        chunks.current = [];
        mr.ondataavailable = (e) => { if (e.data.size) chunks.current.push(e.data); };
        mr.onstop = async () => {
            const blob = new Blob(chunks.current, { type: 'audio/webm' });
            const dataUrl = await fileToDataUrl(new File([blob], 'audio.webm'));
            setAudio({ mime: 'audio/webm', dataUrl });
            stream.getTracks().forEach(t => t.stop());
        };
        mr.start();
        setRecording(true);
    };

    const stopRec = () => { mediaRecorder.current?.stop(); setRecording(false); };


    // const onPickImages = async (files: FileList | null) => {
    //     if (!files) return;
    //     const selected: UploadImage[] = [];
    //     for (const f of Array.from(files).slice(0, 5)) {
    //         const dataUrl = await fileToDataUrl(f);
    //         selected.push({ filename: f.name, dataUrl });
    //     }
    //     setImages((prev) => [...prev, ...selected]);
    // };

    const submit = async (): Promise<Result> => {
        setBusy(true);
        try {
            const payload: MessagePayload = { type: kind, text: text.trim() || undefined, images: images.length ? images : undefined, audio };
            const res = await fetch('/api/messages', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            const j = await res.json();
            if (!res.ok) throw new Error(j.error || 'Error');
            setText(''); setImages([]); setAudio(null);
            return { status: 'success', message: '¡Enviado correctamente!' };
        } catch (e: any) {
            return { status: 'error', message: e.message || 'Error' };
        } finally { setBusy(false); markStationDone(num); router.replace('/'); }
    };

    return (
        <div className="space-y-4">
            <textarea className="input w100" placeholder={placeholder ?? 'Escribe aquí… (puedes usar emojis)'} value={text} onChange={(e) => setText(e.target.value)} />


            {/* <div className="space-y-2">
                <label className="label">Stickers/Imágenes (hasta 5)</label>
                <input type="file" accept="image/*" multiple onChange={(e) => onPickImages(e.target.files)} />
                {images.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                        {images.map((img, i) => (
                            <img key={i} src={img.dataUrl} alt="preview" className="w-16 h-16 rounded-lg object-cover border" />
                        ))}
                    </div>
                )}
            </div> */}
            <div className="space-y-2">
                <label className="label mr8">Audio</label>
                {!recording ? (
                    <button type="button" className="btn" onClick={startRec}>🎙️ Grabar</button>
                ) : (
                    <button type="button" className="btn" onClick={stopRec}>⏹️ Terminar</button>
                )}
                {audio && <p className="help">Audio listo para enviar ({audio.mime}).</p>}
            </div>
            <br />
            <ActionButton
                label="Enviar"
                onAction={submit}
                disabled={busy}
                height={48}
            />
            <br />
        </div>
    );
}

