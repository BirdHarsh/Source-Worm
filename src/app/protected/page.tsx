'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedPage() {
  const { isAuthenticated, user } = useAuth();  // Access auth state from context
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/signin');  // Redirect to signin page if not authenticated
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
      <p>This is a protected page only visible to authenticated users.</p>
    </div>
  );
}
