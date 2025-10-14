
import { Toaster } from "react-hot-toast";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
