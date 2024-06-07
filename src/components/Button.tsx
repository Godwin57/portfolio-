import { FC } from "react";
import { ButtonProps } from "@/types/component-types";

const Button: FC<ButtonProps> = ({
    name,
    onClick,
    type,
    className,
    width = "",
    disabled,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-5 py-3 bg-blue-600 rounded-lg ${className} ${width} hover:bg-blue-500 disabled:opacity-50`}
        >
            {name}
        </button>
    );
};

export default Button;
