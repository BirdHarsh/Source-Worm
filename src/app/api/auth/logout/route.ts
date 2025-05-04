import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
  const cookie = serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(0), // Expire the cookie
    path: '/',
  });

  return new NextResponse(JSON.stringify({ message: 'Logged out' }), {
    status: 200,
    headers: { 'Set-Cookie': cookie },
  });
}
