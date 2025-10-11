interface ButtonProps {
    type?: "button" | "submit" | "reset";
    color: "primary" | "secondary" | "danger" | "success";
    onClick?: () => void;
    children: React.ReactNode;
}

export default function Button({ children, color, ...props }: ButtonProps) {
    let bgColor = "bg-blue-500";
    switch (color) {
        case "primary":
            bgColor = "bg-blue-500";
            break;
        case "secondary":
            bgColor = "bg-gray-500";
            break;
        case "danger":
            bgColor = "bg-red-500";
            break;
        case "success":
            bgColor = "bg-green-500";
            break;
    }

    return (
        <button className={`${bgColor} text-white p-2 rounded hover:opacity-80`} {...props}>
            {children}
        </button>
    );
}
