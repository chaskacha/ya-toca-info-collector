'use client';
import Composer from '@/components/Composer';
import SafeArea from '@/components/basic/safe-area';
import Wrapper from '@/components/basic/wrapper';
import { useRef } from 'react';
export default function Page() {
    const textareaRefs = {
        0: useRef<HTMLTextAreaElement | null>(null),
        1: useRef<HTMLTextAreaElement | null>(null),
        2: useRef<HTMLTextAreaElement | null>(null),
    };
    return (
        <Wrapper>
            <div className="admin-topics">
                <SafeArea mv={32}>
                    <div className="card space-y-3">
                        <h2 className="thunder-fw-bold-lc fs48 uppercase">Estación 2: Desde nuestras circunstancias y diferencias</h2>
                        <Composer
                            kind="station2"
                            num={2}
                            textareaRef={textareaRefs[1]}
                            markDoneOnFirstSend
                            intro={
                                'Cuéntanos cómo te sentiste después de la conversación. ' +
                                'Puedes hacerlo como quieras: texto, audio, emoji, lo que mejor te salga. ' +
                                'Habla como si se lo contaras a un/a amigo/a.\n' +
                                '- ¿Crees que el lugar y las condiciones en las que nacimos marcan lo que podemos lograr?\n' +
                                '- ¿Cómo podemos convivir y construir con gente que piensa distinto?'
                            }
                        />
                    </div>
                </SafeArea>
            </div>
        </Wrapper>
    );
}