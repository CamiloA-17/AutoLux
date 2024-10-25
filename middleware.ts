// import { config } from './middleware';
// import { NextResponse } from 'next/server';
// import { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//     const token = request.cookies.get('token');

//     if (!token) {
//         return NextResponse.redirect(new URL('/login', request.url));
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: ['/profile/:path*'], 
// };

import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default function middleware(req: any) {
  const { pathname } = req.nextUrl;
  const localeMatch = pathname.match(/^\/(en|es)(\/|$)/);
  
  if (!localeMatch) {
    const defaultLocale = 'en';
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  } else {
    const currentLocale = localeMatch[1];
    const url = req.nextUrl.clone();

    if (!url.pathname.startsWith(`/${currentLocale}`)) {
      url.pathname = `/${currentLocale}${url.pathname}`;
    }

    return NextResponse.rewrite(url);
  }
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
