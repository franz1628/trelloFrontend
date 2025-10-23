
'use client'
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   const fetchUser = useAuthStore((s) => s.fetchUser);
  const loading = useAuthStore((s) => s.loading);

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return <html><body><p>Loading...</p></body></html>;
  return (
      <html lang="en">
        <body className="p-4 bg-gray-100 min-h-screen">
          {children}
          <Toaster
          position="top-center"
          reverseOrder={false}
        />
        </body>
      </html>
  );
}
