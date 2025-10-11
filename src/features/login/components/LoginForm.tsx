'use client';
import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogInIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function LoginForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormSchemaType) => {
        console.log("Valid!", data);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
        
            <Input {...register("email")} label="Email" type="email" error={errors.email} />
            <Input {...register("password")} label="Password" type="password" error={errors.password} />
            <Button color="primary" type="submit">
                Login
            <LogInIcon className="inline-block ml-2" />
            </Button>
      </Form>
    );
}