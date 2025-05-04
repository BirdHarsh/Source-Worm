// app/api/test-db/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Database test error:', error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
