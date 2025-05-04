'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
    });

    if (response.ok) {
      router.push('/signin');  // Redirect to signin page after logout
    } else {
      console.error('Failed to logout');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white p-3 rounded-md hover:bg-red-700 transition"
    >
      Logout
    </button>
  );
}
