interface FormProps {
    children?: React.ReactNode;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}
export default function Form({ children, onSubmit }: FormProps) {
    return <form className="flex flex-col space-y-4" onSubmit={onSubmit}>{children}</form>;
}