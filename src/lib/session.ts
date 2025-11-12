import { cookies } from 'next/headers';


export async function getOrSetSession(): Promise<string> {
    const c = cookies();
    const existing = (await c).get('ytc_sid')?.value;
    if (existing) return existing;
    const sid = crypto.randomUUID();
    (await c).set('ytc_sid', sid, { httpOnly: true, sameSite: 'lax', path: '/', secure: true });
    return sid;
}