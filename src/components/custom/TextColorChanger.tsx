"use client";
import useChangingColor from "@/hooks/useChangingColor";

const TextColorChanger = ({
    text,
    className,
}: {
    text?: string;
    className?: string;
}) => {
    const color = useChangingColor();

    return (
        <p style={{ color }} className={`${className}`}>
            {text}
        </p>
    );
};

export default TextColorChanger;
