import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  userId: string | null;
  userName: string | null;
  userProfileImage: string | null;
}

interface AuthState {
  accessToken: string;
  refreshToken: string;
  user: User;
  setAuth: (tokens: { accessToken: string; refreshToken: string }) => void;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist<AuthState>(
    (set) => ({
      accessToken: '',
      refreshToken: '',
      user: { userId: null, userName: null, userProfileImage: null },
      setAuth: ({ accessToken, refreshToken }) => set({ accessToken, refreshToken }),
      setUser: (user) => set({ user }),
      logout: () => {
        set({
          accessToken: '',
          refreshToken: '',
          user: { userId: null, userName: null, userProfileImage: null },
        }),
          localStorage.removeItem('auth-storage');
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
