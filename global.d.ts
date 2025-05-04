// global.d.ts (or any other name ending with .d.ts)
import { User } from '@prisma/client'; // Import the User type from Prisma

declare global {
  namespace NodeJS {
    interface Request {
      user?: User; // Extend the Request interface to include a 'user' property
    }
  }
}
