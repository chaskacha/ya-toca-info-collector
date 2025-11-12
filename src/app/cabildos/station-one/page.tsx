'use client';
import Composer from '@/components/Composer';
import SafeArea from '@/components/basic/safe-area';
import Wrapper from '@/components/basic/wrapper';
import { useProfile } from '@/hooks/useProfile';
export default function Page() {
    const { profile } = useProfile();
    return (
        <Wrapper>
            <div className="admin-topics">
                <SafeArea mv={32}>
                    <div className="card space-y-3">
                        <h2 className="text-xl font-semibold">Estación 1: La catarsis</h2>
                        <div>{profile?.waId}</div>
                        <p className="help">Cuéntanos cómo te sentiste después de la conversación...</p>
                        <Composer kind="station1" num={1} />
                    </div>
                </SafeArea>
            </div>
        </Wrapper>
    );
}