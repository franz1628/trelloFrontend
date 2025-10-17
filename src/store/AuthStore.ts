import { User } from "@/types/user.type";
import { create } from "zustand";

interface AuthState{
    isAuthenticated: boolean;
    user : User | null;
    setUser : (user: User | null) => void;
    setIsAuthenticated : (isAuthenticated: boolean) => void;
    clearAuth : () => void;
}


export const AuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    user: null,
    setUser: (user) => set({ user }),
    setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
    clearAuth: () => set({ user: null, isAuthenticated: false }),
}));