'use client';
import ActionButton from '@/components/basic/action-button/page';
import SafeArea from '@/components/basic/safe-area';
import Wrapper from '@/components/basic/wrapper';
import { Result } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function Page() {
    const router = useRouter();
    const [word, setWord] = useState('');
    const [busy, setBusy] = useState(false);


    const submit = async (): Promise<Result> => {
        setBusy(true);
        try {
            const res = await fetch('/api/messages', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'final', text: word.trim() }) });
            if (!res.ok) throw new Error('Error');
            setWord('');
            back();
            return { status: 'success', message: '¡Enviado correctamente!' };
        } catch { return { status: 'error', message: 'Vuelve a intentar, por favor.' }; } finally { setBusy(false); }
    };

    const back = (): Promise<void> => {
        router.replace('/');
        return Promise.resolve();
    };


    return (
        <Wrapper>
            <SafeArea mv={32}>
                <div className="card space-y-3">
                    <h2 className="thunder-fw-bold-lc fs48 uppercase">Mensaje final</h2>
                    <p className="help fs24">"YA TOCA..." (escribe una frase)</p>
                    <input className="input w100" value={word} onChange={(e) => setWord(e.target.value)} placeholder="Ej. Escucharnos" />
                    <ActionButton
                        label="Enviar"
                        onAction={submit}
                        disabled={busy}
                        height={48}
                    />
                    <br />
                </div>
            </SafeArea>
        </Wrapper>
    );
}