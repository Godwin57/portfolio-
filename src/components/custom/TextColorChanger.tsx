"use client";
import React, { useEffect, useState } from "react";

const TextColorChanger = ({
    text,
    className,
}: {
    text?: string;
    className?: string;
}) => {
    const [color, setColor] = useState("#000");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomColor =
                "#" + Math.floor(Math.random() * 16777215).toString(16);
            setColor((color) => (color = randomColor));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <p style={{ color }} className={`${className}`}>
            {text}
        </p>
    );
};

export default TextColorChanger;
