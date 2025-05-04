'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function SigninPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { isAuthenticated, login } = useAuth();

  // ✅ Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/'); // Redirect to home or dashboard
    }
  }, [isAuthenticated, router]);

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });

    if (response.ok) {
      login(); // Update state
      router.push('/'); // Redirect to home
    } else {
      const data = await response.json();
      setError(data.error || 'Signin failed');
    }
  };

  // You can optionally show a loading state while checking auth
  return (
    <div className="form-container">
      <h1 className="form-header">Sign In</h1>
      <form onSubmit={handleSignin}>
        <input
          type="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="form-button">
          Sign In
        </button>
      </form>
    </div>
  );
}
