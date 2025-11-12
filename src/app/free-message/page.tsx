'use client';
import dynamic from 'next/dynamic';
const Composer = dynamic(() => import('@/components/Composer'), { ssr: false });
import Wrapper from '@/components/basic/wrapper';
import SafeArea from '@/components/basic/safe-area';
import { useRef } from 'react';


export default function Page() {
    const textareaRefs = {
        0: useRef<HTMLTextAreaElement | null>(null),
        1: useRef<HTMLTextAreaElement | null>(null),
        2: useRef<HTMLTextAreaElement | null>(null),
    };
    return (
        <Wrapper>
            <SafeArea mv={32}>
                <div className="card space-y-3">
                    <h2 className="thunder-fw-bold-lc fs48 uppercase">Mensaje libre</h2>
                    <Composer textareaRef={textareaRefs[0]} kind="free" num={0} placeholder="Escribe, pega emojis, sube stickers o graba audio…" />
                </div>
            </SafeArea>
        </Wrapper>
    );
}