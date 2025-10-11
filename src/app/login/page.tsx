
import H1 from "@/components/ui/H1";
import LoginForm from "@/features/login/components/LoginForm";
import { SquareUserRound, User } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <SquareUserRound className="w-24 h-24 text-blue-500 mb-2" />
      <H1>Login</H1>
      <LoginForm />
    </div>
  );
}
