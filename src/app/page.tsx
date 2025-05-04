'use client';

import PrivateRoute from '@/components/PrivateRoute';

export default function Home() {
  return (
    <PrivateRoute>
      <h1>Welcome to the Home Page</h1>
      <p>This page is protected and only accessible by authenticated users.</p>
    </PrivateRoute>
  );
}
