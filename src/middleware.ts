// middleware.ts (or middleware.js)
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/jwt';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  try {
    verifyToken(token);  // Validate the token
    return NextResponse.next();  // Continue the request
  } catch {
    return NextResponse.redirect(new URL('/signin', req.url));  // Invalid token, redirect to signin
  }
}

export const config = {
  matcher: ['/protected/:path*'],
};
