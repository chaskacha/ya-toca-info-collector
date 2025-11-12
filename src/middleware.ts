// middleware.ts (at project root)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const protectedRoutes = ['/free-message', '/cabildos'];
    const pathname = req.nextUrl.pathname;

    if (protectedRoutes.some(p => pathname === p || pathname.startsWith(`${p}/`))) {
        const onboarded = req.cookies.get('yt_onboarded')?.value === '1';
        if (!onboarded) {
            const url = req.nextUrl.clone();
            url.pathname = '/onboarding';
            return NextResponse.redirect(url);
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/free-message', '/cabildos/:path*'],
};
