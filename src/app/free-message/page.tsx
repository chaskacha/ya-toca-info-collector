'use client';
import dynamic from 'next/dynamic';
const Composer = dynamic(() => import('@/components/Composer'), { ssr: false });
import Wrapper from '@/components/basic/wrapper';
import SafeArea from '@/components/basic/safe-area';


export default function Page() {
    return (
        <Wrapper>
            <SafeArea mv={32}>
                <div className="card space-y-3">
                    <h2 className="text-xl font-semibold">Mensaje libre</h2>
                    <Composer kind="free" placeholder="Escribe, pega emojis, sube stickers o graba audio…" />
                </div>
            </SafeArea>
        </Wrapper>
    );
}