import { FC } from "react";
import { ButtonProps } from "@/types/component-types";

const Button: FC<ButtonProps> = ({
    name,
    onClick,
    type,
    className,
    disabled,
    icon,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-5 py-3 ${className} disabled:opacity-50`}
        >
            {icon ? (
                <p className="flex justify-center items-center gap-2">
                    {icon} <span>{name}</span>
                </p>
            ) : (
                <span>{name}</span>
            )}
        </button>
    );
};

export default Button;
