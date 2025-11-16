import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getOrSetSession } from '@/lib/session';
import { upsertProfile, getProfile } from '@/lib/store';
import { query } from '@/lib/db';


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


    const { demographics, consent, phone, cabildoName } = parsed.data;
    // set the data to the DB
    const res = await query(
        `INSERT INTO participantes
           (edad, fechacreacion, nombre_de_cabildo, genero, telefono,
            region, region_actual, poblacion, grupoetnico, rol, nivelinstruccion)
         VALUES
           ($1, CURRENT_DATE, $2, $3, $4,
            $5, $6, $7, $8, $9, $10)
         RETURNING id`,
        [
            demographics.age,
            cabildoName,
            demographics.gender,
            phone,
            demographics.originRegion,
            demographics.cabildoRegion,
            demographics.population,
            demographics.ethnicity,
            demographics.occupation,
            demographics.education,
        ]
    );
    const rowId = res.rows[0]?.id ?? null;
    const updated = upsertProfile(await sid, (p) => {
        p.id = rowId;
        p.phone = phone;
        p.cabildoName = cabildoName;
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
    (await
        // mark cookie to pass middleware gate
        cookies()).set('yt_profile', JSON.stringify(updated), { httpOnly: false, sameSite: 'lax', path: '/', secure: true });


    return NextResponse.json({ ok: true, profile: updated });
}