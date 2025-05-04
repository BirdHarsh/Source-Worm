// lib/prisma.ts
import { PrismaClient } from "@/generated/prisma";

// This ensures that we only create one Prisma Client instance throughout the app
const prisma = new PrismaClient();

export { prisma };
