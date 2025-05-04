// lib/auth.ts
import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/jwt';
import { prisma } from '@/lib/prisma';

export async function validateJWT(req: Request) {
  const token = req.cookies.get('token');

  if (!token) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }

  try {
    const decoded = verifyToken(token);

    // Optionally fetch user from database if needed (e.g., to add user info to the request)
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 });
    }

    // Attach user data to the request
    req.user = user; // You can set this data in the `req` to use in the handlers
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
  }
}
