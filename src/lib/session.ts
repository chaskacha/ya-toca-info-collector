// lib/session.ts
import { cookies } from 'next/headers';
import crypto from 'crypto';

export async function getOrSetSession(): Promise<string> {
    const jar = cookies();
    let sid = (await jar).get('yt_sid')?.value;
    if (!sid) {
        sid = crypto.randomUUID();
        (await jar).set('yt_sid', sid, {
            httpOnly: true,
            sameSite: 'lax',
            path: '/',
            secure: process.env.NODE_ENV === 'production', // <— secure only in prod
            maxAge: 60 * 60 * 24 * 7,
        });
    }
    return sid;
}
