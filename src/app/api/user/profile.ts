// pages/api/user/profile.ts
import { NextResponse } from 'next/server';
import { validateJWT } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  // Validate JWT token
  const authResult = await validateJWT(req);
  
  // If authentication fails, `validateJWT` will return an error response
  if (authResult instanceof NextResponse) {
    return authResult; // Return early if authentication failed
  }

  // If authentication is successful, proceed with fetching user profile
  const user = req.user; // The `user` object is attached to `req` by `validateJWT`

  return NextResponse.json({ user });
}
