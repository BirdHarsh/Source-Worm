'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  // Check token on mount
  useEffect(() => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    if (token) {
      setIsAuthenticated(true);
      const userInfo = JSON.parse(atob(token.split('.')[1]));
      setUser(userInfo);
    }
  }, []);

  // Login function
  const login = (token: string) => {
    setIsAuthenticated(true);
    document.cookie = `token=${token}; path=/;`;
    const userInfo = JSON.parse(atob(token.split('.')[1])); // Decode JWT token to get user info
    setUser(userInfo);
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    document.cookie = 'token=; max-age=0; path=/';  // Clear token cookie
    router.push('/signin');  // Redirect to sign-in page
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
