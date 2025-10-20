import { authService } from "@/lib/authService";
import { User } from "@/types/user.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AuthState {
  user: User | null;
  loading: boolean;
  fetchUser: () => Promise<void>;
  logoutUser: () => Promise<void>;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>()(  persist((set) => ({
  user: null,
  loading: true,

  fetchUser: async () => {
    try {
      const u = await authService.me();
      set({ user: u, loading: false });
    } catch (e) {
      set({ user: null, loading: false });
    }
  },

  logoutUser: async () => {
    await authService.logout();
    set({ user: null });
  },

  setUser: (user: User | null) => set({ user }),
}),{ name: "auth-storage" }));