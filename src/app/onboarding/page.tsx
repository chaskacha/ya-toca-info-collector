import SafeArea from '@/components/basic/safe-area';
import Wrapper from '@/components/basic/wrapper';
import OnboardingForm from '@/components/OnboardingForm';


export default function Page() {
    return (
        <Wrapper>
            <div className="admin-topics">
                <SafeArea mv={32}>
                    <div className="card space-y-3">
                        <h2 className="thunder-fw-bold-lc fs48 uppercase">Cabildo</h2>
                        <p className="help fs18">Antes de empezar, ayúdanos respondiendo algunas preguntas para conocerte mejor. Siempre puedes marcar “prefiero no contestar” si deseas mantener reservado algún dato.
                        </p>
                        <OnboardingForm />
                    </div>
                </SafeArea>
            </div>
        </Wrapper>
    );
}