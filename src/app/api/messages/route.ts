import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getOrSetSession } from '@/lib/session';
import { getProfile, pushMessage, upsertProfile } from '@/lib/store';


const msgSchema = z.object({
    type: z.enum(['free', 'station1', 'station2', 'station3', 'final']),
    text: z.string().optional(),
    images: z.array(z.object({ filename: z.string(), dataUrl: z.string().startsWith('data:') })).optional(),
    audio: z.object({ mime: z.string(), dataUrl: z.string().startsWith('data:'), durationMs: z.number().optional() }).nullable().optional(),
});


export async function POST(req: Request) {
    const sid = getOrSetSession();
    const profile = getProfile(await sid);
    if (!profile?.demographicsCompleted) return NextResponse.json({ error: 'Onboarding required' }, { status: 403 });


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


    pushMessage(await sid, msg);
    return NextResponse.json({ ok: true });
}