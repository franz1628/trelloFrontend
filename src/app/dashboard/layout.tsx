
'use client'
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect } from "react";
import ProtectedRoute from "@/config/ProtectedRoute";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ProtectedRoute>
          {children}
      </ProtectedRoute>
  );
}
