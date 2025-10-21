
'use client'
import H1 from "@/components/ui/H1";
import LoginForm from "@/features/login/components/LoginForm";
import { authService } from "@/lib/authService";
import { loginRequest } from "@/types/loginRequest.type";
import { User } from "@/types/user.type";
import { SquareUserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  
  const handleSubmit = async (data: loginRequest) => {
    const router = useRouter();
    const user: User = await authService.login(data.email, data.password);
    
    if(user){
      router.push('/dashboard');
    }

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <SquareUserRound className="w-24 h-24 text-blue-500 mb-2" />
      <H1>Login</H1>
      <LoginForm onSubmit={handleSubmit} />
      
    </div> 
  );
}  
 