import { FieldError } from "react-hook-form";

interface InputProps{
    label?: string;
    type: "text" | "email" | "password" | "number";
    name?: string;
    value?: string;
    placeholder?: string;
    error? : FieldError
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ label, error, ...props }: InputProps) {
    props.placeholder = props.placeholder || 'Write here...';
    props.type = props.type || 'text';

    return (
        <div>
            <div className="grid grid-cols-12 gap-2 items-center">
                {label && <label className="mb-1 col-span-4">{label}</label>}
                <input className="col-span-8 border border-gray-300 p-2 rounded" {...props} />
            </div>
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
    );
}