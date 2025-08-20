import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for API routes, static files, and Next.js internals
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // If already has locale prefix, continue
  if (pathname.startsWith('/pt') || pathname.startsWith('/en')) {
    return NextResponse.next();
  }

  // For root path, redirect to Portuguese
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/pt', request.url));
  }

  // For other paths without locale, add Portuguese prefix
  return NextResponse.redirect(new URL(`/pt${pathname}`, request.url));
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};