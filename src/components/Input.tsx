import { FC } from "react";
import { InputProps } from "../types/component-types";

const Input: FC<InputProps> = ({
    type = "text",
    name,
    refHolder,
    className,
    value,
    placeholder,
    error,
    disabled,
    withLabel,
    label,
    width = "",
    labelStyles,
    valueChange,
}) => {
    return (
        <div className="flex flex-col gap-y-5">
            {!withLabel && (
                <input
                    type={type}
                    ref={refHolder}
                    value={value}
                    placeholder={placeholder}
                    onChange={valueChange}
                    className={`border-2 border-blue-400 ${width} rounded-lg px-4 py-4 ${className}`}
                />
            )}
            {withLabel && (
                <label className={`${labelStyles}`}>
                    {label}
                    <input
                        type={type}
                        ref={refHolder}
                        value={value}
                        placeholder={placeholder}
                        onChange={valueChange}
                        className={`border-2 border-blue-400 ${width} rounded-lg px-4 py-4 ${className}`}
                    />
                </label>
            )}
        </div>
    );
};

export default Input;
