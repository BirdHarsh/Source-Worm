// lib/jwt.ts
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your_secret_key'; // Replace with a secure key

// Function to sign a JWT
export function signToken(payload: any) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '7d' }); // Token expires in 7 days
}

// Function to verify a JWT token
export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET_KEY); // Verify the JWT token
  } catch (err) {
    throw new Error('Invalid or expired token');
  }
}
