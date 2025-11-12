// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const { pathname, search } = req.nextUrl;
    const onboarded = req.cookies.get('yt_onboarded')?.value === '1';

    // If not onboarded, force onboarding (but don't loop on /onboarding)
    if (!onboarded && pathname !== '/onboarding') {
        const url = req.nextUrl.clone();
        url.pathname = '/onboarding';
        url.search = ''; // or keep `search` if you want to preserve query
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

/**
 * Guard everything except:
 *  - /onboarding
 *  - /api/*
 *  - Next.js static assets and images
 *  - public files (favicon, robots, etc.)
 *  - static file extensions
 */
export const config = {
    matcher: [
        '/((?!api|onboarding|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|assets|fonts|images|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|mp4|webm|css|js)).*)',
    ],
};
