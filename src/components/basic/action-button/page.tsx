'use client';
import { Result } from '@/lib/types';
import React, { useState } from 'react';

type Props = {
    label: string;
    onAction: () => Promise<Result | void>; // return a Result or nothing (defaults to success)
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    height?: number;          // default 48
    autoHideMs?: number;      // default 4000
    backBtn?: boolean;
};

export default function ActionButton({
    label,
    onAction,
    className = '',
    style,
    disabled,
    height = 48,
    autoHideMs = 4000,
    backBtn = false,
}: Props) {
    const [busy, setBusy] = useState(false);
    const [msg, setMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleClick = async () => {
        if (busy || disabled) return;
        setBusy(true);
        try {
            const res = await onAction();
            const r = (res as Result) ?? { status: 'success', message: 'Listo.' };
            setMsg({ type: r.status, text: r.message });
        } catch (err: any) {
            setMsg({ type: 'error', text: err?.message || 'Ocurrió un error.' });
        } finally {
            setTimeout(() => {
                setBusy(false);
                if (autoHideMs) setTimeout(() => setMsg(null), autoHideMs);
            }, 2000);
        }
    };

    return (
        <div className="mb24 mt16">
            <button
                className={`btn ${backBtn ? 'btn-primary' : ''} w100 fw700 fs16 uppercase ${className}`}
                style={{ height, ...style }}
                onClick={handleClick}
                disabled={disabled || busy}
            >
                {backBtn
                    ? label
                    : busy
                        ? 'Enviando...'
                        : label}
            </button>
            {msg && (
                <div className={`alert alert-${msg.type}`}>
                    {msg.text}
                </div>
            )}
        </div>
    );
}
