"use client";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading, fetchUser } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, user]);

  if (loading) return <p>Valid Sesion...</p>;
  return <>{children}</>;
}
