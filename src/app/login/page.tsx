
'use client'
import H1 from "@/components/ui/H1";
import LoginForm from "@/features/login/components/LoginForm";
import { authService } from "@/lib/authService";
import { User } from "@/types/user.type";
import { SquareUserRound } from "lucide-react";

export default function LoginPage() {
  

  const handleSubmit = async () => {
    const user: User = await authService.login("gualambo@gmail.com", "123456");
      console.log(user);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <SquareUserRound className="w-24 h-24 text-blue-500 mb-2" />
      <H1>Login</H1>
      <LoginForm onSubmit={() => handleSubmit()} />
    </div> 
  );
}  
