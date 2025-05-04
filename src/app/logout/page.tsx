'use client';

import { useAuth } from '@/context/AuthContext';

export default function LogoutPage() {
  const { logout } = useAuth();

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={logout}
        className="bg-red-600 text-white p-3 rounded-md hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
}
