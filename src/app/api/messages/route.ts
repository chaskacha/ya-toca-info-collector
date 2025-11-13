import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getOrSetSession } from '@/lib/session';
import { pushMessage, upsertProfile } from '@/lib/store';
import { query } from '@/lib/db';
import { cookies } from 'next/headers';


const msgSchema = z.object({
    type: z.enum(['station1', 'station2', 'station3', 'final']),
    text: z.string().optional(),
    images: z.array(z.object({ filename: z.string(), dataUrl: z.string().startsWith('data:') })).optional(),
    audio: z.object({ mime: z.string(), dataUrl: z.string().startsWith('data:'), durationMs: z.number().optional() }).nullable().optional(),
});

const STATION_ID: Record<string, number> = {
    // your mapping
    station1: 14,    // Estación 1
    station2: 11,    // Estación 2
    station3: 12,    // Estación 3
    final: 15,    // Cierre
};

const ID_CABILDO = 67;


export async function POST(req: Request) {
    const sid = getOrSetSession();
    const raw = (await cookies()).get('yt_profile')?.value;     // string
    let participantId: number | null = null;

    if (raw) {
        try {
            const p = JSON.parse(decodeURIComponent(raw));
            // handle either {id: ...} or {profile: {id: ...}}
            participantId = p?.id ?? p?.profile?.id ?? null;
        } catch {}
    }
    // if (!profile?.demographicsCompleted) return NextResponse.json({ error: 'Onboarding required' }, { status: 403 });


    const body = await req.json();
    const parsed = msgSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
    const msg = parsed.data;

    if (msg.type.startsWith('station')) {
        const stationNum = Number(msg.type.replace('station', ''));

        upsertProfile(await sid, (p) => {
            if (!p.stationsDone.includes(stationNum)) {
                p.stationsDone = [...p.stationsDone, stationNum].sort((a, b) => a - b);
            }
        });
    }

    // final word special case
    if (msg.type === 'final') {
        const word = (msg.text ?? '').trim();
        upsertProfile(await sid, (p) => { p.finalWord = word; p.cabildoCompleted = true; });
    }

    // ---- DB PERSISTENCE ----
    const idEstacion = STATION_ID[msg.type];
    const texto = (msg.text ?? '').trim();

    // Only store when we have a mapped station AND some text
    if (idEstacion && texto) {
        try {
            await query('BEGIN');

            // 1) comentarios
            const insComentario = await query(
                `INSERT INTO comentarios (idestacion, idcabildo, texto)
         VALUES ($1, $2, $3)
         RETURNING id`,
                [idEstacion, ID_CABILDO, texto]
            );
            const idComentario = insComentario.rows[0]?.id as number;

            // 2) comentariosparticipantes
            await query(
                `INSERT INTO comentariosparticipantes (idparticipante, idcomentario)
         VALUES ($1, $2)`,
                [participantId, idComentario]
            );

            await query('COMMIT');
        } catch (e) {
            await query('ROLLBACK');
            console.error('DB error saving comentario:', e);
            return NextResponse.json({ error: 'Error guardando el comentario' }, { status: 500 });
        }
    }


    pushMessage(await sid, msg);
    return NextResponse.json({ ok: true });
}