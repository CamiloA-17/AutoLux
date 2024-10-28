import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.includes('/profile')) {
    const token = request.cookies.get("token");

    if (!token) {
      const url = new URL(`/login`, request.url);
      return NextResponse.redirect(url);
    }
  }

  if (pathname.includes('/login') || pathname.includes('/register')) {
    const token = request.cookies.get("token");

    if (token) {
      const url = new URL(`/home`, request.url);
      return NextResponse.redirect(url);
    }
  }

  const intlResponse = intlMiddleware(request);
  if (intlResponse) return intlResponse;

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*).*)', 
  ],
};