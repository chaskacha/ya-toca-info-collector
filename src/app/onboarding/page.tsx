import SafeArea from '@/components/basic/safe-area';
import Wrapper from '@/components/basic/wrapper';
import OnboardingForm from '@/components/OnboardingForm';


export default function Page() {
    return (
        <Wrapper>
            <div className="admin-topics">
                <SafeArea mv={32}>
                    <div className="card space-y-3">
                        <h2 className="text-xl font-semibold">Onboarding Cabildo UTEC</h2>
                        {/* <p className="help">Completa tus datos para participar del Cabildo.</p> */}
                        <OnboardingForm />
                    </div>
                </SafeArea>
            </div>
        </Wrapper>
    );
}