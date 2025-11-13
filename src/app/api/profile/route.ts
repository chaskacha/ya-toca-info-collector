import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getOrSetSession } from '@/lib/session';
import { upsertProfile, getProfile } from '@/lib/store';


const schema = z.object({
    cabildoName: z.string().trim().min(1, 'Requerido'),
    demographics: z.object({
        gender: z.string(),
        age: z.string(),
        population: z.string(),
        ethnicity: z.string(),
        occupation: z.string(),
        education: z.string(),
        originRegion: z.string(),
        cabildoRegion: z.string(),
    }),
    consent: z.boolean(),
    phone: z.string().trim().min(1, 'Requerido'),
});


export async function GET() {
    const sid = getOrSetSession();
    const p = getProfile(await sid);
    return NextResponse.json({ sessionId: sid, profile: p });
}


export async function POST(req: Request) {
    const sid = getOrSetSession();
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: parsed.error.format() }, { status: 400 });


    const { demographics, consent, phone } = parsed.data;
    const updated = upsertProfile(await sid, (p) => {
        p.phone = phone;
        p.cabildoName = 'UTEC';
        p.demographics = demographics;
        p.demographicsCompleted = true;
        p.consent = consent;
        p.demographics.originRegion = demographics.originRegion;
        p.demographics.cabildoRegion = demographics.cabildoRegion;
    });


    // mark cookie to pass middleware gate
    (await
        // mark cookie to pass middleware gate
        cookies()).set('ytc_onboarded', '1', { httpOnly: false, sameSite: 'lax', path: '/', secure: true });


    return NextResponse.json({ ok: true, profile: updated });
}