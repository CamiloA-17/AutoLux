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

export default createMiddleware({
    locales: ['en', 'es'],
    defaultLocale: 'en'
});

export const config = {
    matcher: ['/', '/(en|es)/:path*']
};
