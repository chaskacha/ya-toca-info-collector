'use client';
import { useForm, useFormState } from 'react-hook-form';
import ActionButton from './basic/action-button/page';
import { REGIONES_PERU } from '@/constants/demos';
import { normalizePeruMobile, PERU_MOBILE_REGEX } from '@/helpers/phone';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';


const DEMO = {
    gender: ['Masculino', 'Femenino', 'Otro', 'Prefiero no contestar'],
    age: ['Menos de 16', '16-29', '30-45', '46 a +', 'Prefiero no contestar'],
    population: ['Pueblo afroperuano', 'Comunidad LGTBIQ+', 'Pueblos indígenas u originarios', 'Personas con discapacidad', 'Ninguna de las anteriores', 'Prefiero no contestar'],
    ethnicity: ['Quechua', 'Aimara', 'Indígena de la Amazonía', 'Afroperuano', 'Blanco', 'Mestizo', 'Asiático o nikkei', 'Otro', 'Prefiero no contestar'],
    occupation: ['Estudiante', 'Trabajador dependiente', 'Trabajador independiente', 'Emprendedor', 'Servidor público', 'Representante comunitario', 'Sin ocupación fija', 'Otro', 'Prefiero no contestar'],
    education: ['Sin instrucción', 'Primaria', 'Secundaria', 'Superior técnica o universitaria', 'Postgrado', 'Otro', 'Prefiero no contestar'],
    originRegion: REGIONES_PERU,
    cabildoRegion: REGIONES_PERU,
} as const;


type Form = {
    cabildoName: string;
    phone: string;
    gender: string; age: string; population: string; ethnicity: string; occupation: string; education: string;
    originRegion: string; cabildoRegion: string;
    consent: boolean;
};


export default function OnboardingForm() {
    const router = useRouter();
    const { register, handleSubmit, formState: { isSubmitting, isValid } } = useForm<Form>({ defaultValues: { consent: true } });


    const onSubmit = async (d: Form) => {
        const res = await fetch('/api/profile', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                cabildoName: d.cabildoName,
                phone: d.phone,
                demographics: {
                    gender: d.gender,
                    age: d.age,
                    population: d.population,
                    ethnicity: d.ethnicity,
                    occupation: d.occupation,
                    education: d.education,
                    originRegion: d.originRegion,
                    cabildoRegion: d.cabildoRegion,
                },
                consent: d.consent,
            })
        });
        if (!res.ok) { alert('Error al guardar'); return; }
        localStorage.setItem('yt_profile', JSON.stringify(await res.json()));
        // mark as onboarded for 7 days
        Cookies.set('yt_onboarded', '1', { path: '/', sameSite: 'Lax', expires: 7 });

        // (optional) persist minimal client state you’ll use for the menu
        localStorage.setItem('yt_stations_done', JSON.stringify([])); // start empty

        router.replace('/');
    };

    const isDisabled = () => {
        return !isValid || isSubmitting;
    };


    const Select = ({ name, options, label }: { name: keyof Form; options: readonly string[]; label: string }) => (
        <label className="block space-y-1">
            <span className="label">{label}</span>
            <select className="input" {...register(name as any, { required: true })}>
                <option value="" disabled hidden>Selecciona...</option>
                {options.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
        </label>
    );


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* <label className="block space-y-1">
                <span className="label mb8 mr8">Nombre del Cabildo</span>
                <input className="input" placeholder="Ej. Cabildo San Miguel" {...register('cabildoName', { required: true })} />
            </label> */}
            <div className="help fs18" style={{ margin: 0 }}>Déjanos tu número de teléfono:</div>
            <input
                type="tel"
                className="input w100"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="Ej. 51912345678"
                maxLength={11} // 2 (51) + 9
                {...register('phone', {
                    required: 'El celular es obligatorio',
                    setValueAs: (v: string) => normalizePeruMobile(v),
                    validate: {
                        onlyDigits: (v: string) => /^\d+$/.test(v) || 'Solo números',
                        peruvianMobile: (v: string) =>
                            PERU_MOBILE_REGEX.test(v) || 'Usa 51 + 9 dígitos (ej: 51912345678)',
                    },
                })}
                onInput={(e) => {
                    const input = e.currentTarget;
                    const norm = normalizePeruMobile(input.value);
                    if (norm !== input.value) input.value = norm;
                }}
            />
            <div style={{ minHeight: 4 }} />
            <div className="help fs18" style={{ margin: 0 }}>¿Cómo se llama el Cabildo en el que estás participando? Pon el nombre que tu grupo haya elegido:</div>
            <input
                type="text"
                className="input w100"
                placeholder="Ej. Cabildo San Miguel"
                {...register('cabildoName', { required: true })}
            />
            <div style={{ minHeight: 4 }} />
            <Select name={'gender'} options={DEMO.gender} label="Género" />
            <Select name={'age'} options={DEMO.age} label="Edad" />
            <Select name={'population'} options={DEMO.population} label="Población" />
            <Select name={'ethnicity'} options={DEMO.ethnicity} label="Grupo étnico" />
            <Select name={'occupation'} options={DEMO.occupation} label="Ocupación" />
            <Select name={'education'} options={DEMO.education} label="Nivel de instrucción" />
            <Select
                name={'originRegion'}
                options={DEMO.originRegion}
                label="¿De qué región eres?"
            />
            <Select
                name={'cabildoRegion'}
                options={DEMO.cabildoRegion}
                label="¿En qué región estás haciendo este cabildo?"
            />


            <input type="checkbox" {...register('consent', { required: true })} />
            <label htmlFor="consent" className="help fs18 ml8">He leído y acepto las condiciones de tratamiento de mis datos personales, conforme a la Ley N 29733.</label>

            <ActionButton
                label="Guardar y continuar"
                onAction={handleSubmit(onSubmit)}
                disabled={isDisabled()}
                height={48}
            />
        </form>
    );
}