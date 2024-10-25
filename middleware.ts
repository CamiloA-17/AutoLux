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

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';

export default function middleware(req: any) {
  const { pathname } = req.nextUrl;

  const localeMatch = pathname.match(/^\/(es|en)(\/|$)/);

  if (localeMatch) {
    return createMiddleware(routing)(req);
  }

  const url = req.nextUrl.clone();

  const currentLocale = req.cookies.get('NEXT_LOCALE').value || 'en'; 
  

  url.pathname = `/${currentLocale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
