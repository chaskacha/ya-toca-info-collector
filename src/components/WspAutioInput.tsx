'use client';
import React, { useEffect, useRef, useState } from 'react';

type Props = {
    onReady: (file: File, url: string, mime: string) => void;
    maxMs?: number;            // default 120_000 (2 min)
    disabled?: boolean;
    label?: string;            // "Audio" by default
};

type Phase = 'idle' | 'recording' | 'preview';

export default function WhatsAppAudioInput({
    onReady,
    maxMs = 120_000,
    disabled,
    label = 'Audio',
}: Props) {
    const [phase, setPhase] = useState<Phase>('idle');
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState<string | null>(null);
    const [mime, setMime] = useState('audio/webm');
    const [elapsed, setElapsed] = useState(0);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const mediaRec = useRef<MediaRecorder | null>(null);
    const mediaStream = useRef<MediaStream | null>(null);
    const chunks = useRef<BlobPart[]>([]);
    const tickRef = useRef<number | null>(null);

    // waveform
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const audioCtx = useRef<AudioContext | null>(null);
    const analyser = useRef<AnalyserNode | null>(null);
    const source = useRef<MediaStreamAudioSourceNode | null>(null);
    const raf = useRef<number | null>(null);
    const currentBlob = useRef<Blob | null>(null);
    const currentFile = useRef<File | null>(null);

    function pickAudioMime(): string {
        const candidates = [
            'audio/mp4;codecs=mp4a.40.2', // Safari-friendly (m4a)
            'audio/aac',                   // also plays on Safari
            'audio/webm;codecs=opus',      // Chrome/Edge/Firefox
            'audio/webm'
        ];
        if (typeof MediaRecorder === 'undefined') return '';
        return candidates.find(t => MediaRecorder.isTypeSupported(t)) || '';
    }

    const [recMime] = useState(pickAudioMime());


    // choose best mime
    useEffect(() => {
        if (typeof MediaRecorder === 'undefined') return;
        const candidates = [
            'audio/webm;codecs=opus',
            'audio/webm',
            'audio/mp4',
            'audio/aac'
        ];
        const supported = candidates.find(t => (MediaRecorder as any).isTypeSupported?.(t));
        setMime(supported || 'audio/webm');
    }, []);

    useEffect(() => {
        return () => { if (previewUrl) URL.revokeObjectURL(previewUrl); };
    }, [previewUrl]);

    function draw() {
        if (!canvasRef.current || !analyser.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d')!;
        const width = canvas.width = canvas.clientWidth;
        const height = canvas.height = canvas.clientHeight;

        const bufferLength = analyser.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const render = () => {
            analyser.current!.getByteTimeDomainData(dataArray);
            ctx.clearRect(0, 0, width, height);
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#fff';
            ctx.beginPath();
            const slice = width / bufferLength;
            for (let i = 0; i < bufferLength; i++) {
                const v = dataArray[i] / 128.0; // 0..2
                const y = (v * height) / 2;
                const x = i * slice;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            raf.current = requestAnimationFrame(render);
        };
        render();
    }

    async function start() {
        if (disabled || busy || phase === 'recording') return;
        setErr(null);
        setBusy(true);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaStream.current = stream;

            // waveform wiring
            audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            analyser.current = audioCtx.current.createAnalyser();
            analyser.current.fftSize = 1024;
            source.current = audioCtx.current.createMediaStreamSource(stream);
            source.current.connect(analyser.current);
            draw();

            chunks.current = [];
            const rec = new MediaRecorder(stream, recMime ? { mimeType: recMime, audioBitsPerSecond: 128000 } : undefined);
            mediaRec.current = rec;

            rec.ondataavailable = e => { if (e.data.size) chunks.current.push(e.data); };
            rec.onstop = () => { /* handled by stop() */ };

            rec.start(250);
            setPhase('recording');
            setElapsed(0);
            const t0 = Date.now();
            tickRef.current = window.setInterval(() => {
                const ms = Date.now() - t0;
                setElapsed(ms);
                if (ms >= maxMs) stop(); // auto-stop at max
            }, 200) as unknown as number;
        } catch (e: any) {
            setErr(e?.message || 'No se pudo acceder al micrófono');
            cleanup();
            setPhase('idle');
        } finally {
            setBusy(false);
        }
    }

    function mmss(ms: number) {
        const s = Math.floor(ms / 1000);
        const m = Math.floor(s / 60);
        const r = s % 60;
        return `${String(m).padStart(1, '0')}:${String(r).padStart(2, '0')}`;
    }

    function cancel() {
        // discard recording
        if (mediaRec.current && mediaRec.current.state !== 'inactive') {
            mediaRec.current.stop();
        }
        cleanup();
        setPhase('idle');
        setElapsed(0);
    }

    async function stop() {
        const rec = mediaRec.current;
        if (!rec) return;

        // Stop and wait for final 'stop' event
        await new Promise<void>((resolve) => {
            const onStop = () => {
                rec.removeEventListener('stop', onStop);
                resolve();
            };
            rec.addEventListener('stop', onStop);
            try { rec.stop(); } catch { }
        });

        // Build blob from the chunks collected during recording
        const type = rec.mimeType || recMime || 'audio/webm';
        const parts = chunks.current.slice();
        chunks.current = []; // reset for next recording
        const blob = new Blob(parts, { type });

        if (!blob.size) {
            setErr('No se capturó audio. Intenta de nuevo.');
            cancel();
            return;
        }

        // Create a File for uploads and an object URL for preview
        const ext = /mp4|aac/.test(blob.type) ? 'm4a' : 'webm';
        const file = new File([blob], `audio-${Date.now()}.${ext}`, { type: blob.type });
        const url = URL.createObjectURL(blob);

        // Release mic & audio context BEFORE preview (iOS/Safari quirk)
        cleanup();

        setPreviewUrl(prev => { if (prev) URL.revokeObjectURL(prev); return url; });
        currentFile.current = file;
        setMime(blob.type); // keep actual type
        setPhase('preview');
    }

    function cleanup() {
        if (tickRef.current) { clearInterval(tickRef.current); tickRef.current = null; }
        if (raf.current) { cancelAnimationFrame(raf.current); raf.current = null; }
        if (source.current) { try { source.current.disconnect(); } catch { } source.current = null; }
        if (analyser.current) { analyser.current.disconnect(); analyser.current = null; }
        if (audioCtx.current) { try { audioCtx.current.close(); } catch { } audioCtx.current = null; }
        mediaRec.current = null;
        if (mediaStream.current) {
            mediaStream.current.getTracks().forEach(t => t.stop());
            mediaStream.current = null;
        }
    }

    function reRecord() {
        if (previewUrl) { URL.revokeObjectURL(previewUrl); setPreviewUrl(null); }
        setPhase('idle');
        setElapsed(0);
    }
    const audioRef = useRef<HTMLAudioElement>(null);

    const candidates = [
        'audio/webm;codecs=opus',
        'audio/webm',
        'audio/mp4;codecs=mp4a.40.2',
        'audio/aac'
    ];

    function send() {
        if (!currentFile.current || !previewUrl) return;
        onReady(currentFile.current, previewUrl, mime);
    }

    return (
        <div className="wa-audio">
            <label className="wa-audio__label fs24">{label}</label>

            {err && <div className="wa-audio__error">{err}</div>}

            {phase === 'idle' && (
                <div className="wa-audio__row">
                    <button
                        type="button"
                        className="wa-audio__mic"
                        onMouseDown={start}
                        onTouchStart={start}
                        disabled={disabled || busy}
                        aria-label="Grabar"
                        title="Toca y habla"
                    >
                        <span className="wa-audio__mic-icon">🎙️</span>
                    </button>
                    <span className="wa-audio__hint">Toca para grabar</span>
                </div>
            )}

            {phase === 'recording' && (
                <div className="wa-audio__recording">
                    <div className="wa-audio__pulse" aria-hidden />
                    <span className="wa-audio__timer">{mmss(elapsed)}</span>
                    <canvas ref={canvasRef} className="wa-audio__wave" />
                    <div className="wa-audio__actions">
                        <button type="button" className="wa-audio__btn stop" onClick={stop}>Terminar</button>
                        <button type="button" className="wa-audio__btn cancel" onClick={cancel}>Cancelar</button>
                    </div>
                </div>
            )}

            {phase === 'preview' && previewUrl && (
                <div className="wa-audio__preview">
                    <audio
                        key={previewUrl}
                        ref={audioRef}
                        controls
                        playsInline
                        preload="metadata"
                        className="wa-audio__player"
                        onLoadedMetadata={(e) => console.log('duration', e.currentTarget.duration)}
                        onError={(e) => console.warn('audio error', e.currentTarget.error)}
                    >
                        <source src={previewUrl} type={mime || 'audio/mp4'} />
                        Tu navegador no puede reproducir este audio.
                    </audio>
                    <div className="wa-audio__actions">
                        <button type="button" className="wa-audio__btn cancel" onClick={reRecord}>Eliminar</button>
                    </div>
                </div>
            )}
        </div>
    );
}
