// /api/auth/signin.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { signToken } from '@/lib/jwt';
import { serialize } from 'cookie';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Find user by email
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  // Compare password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  // Sign JWT token
  const token = signToken({ id: user.id, email: user.email });

  // Set JWT token in HTTP-only cookie
  const cookie = serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7,  // 7 days
    path: '/',
  });

  return new NextResponse(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Set-Cookie': cookie },
  });
}
