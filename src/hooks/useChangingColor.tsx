"use client";
import { useEffect, useState } from "react";

const useChangingColor = () => {
    const [color, setColor] = useState("#000");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomColor =
                "#" + Math.floor(Math.random() * 16777215).toString(16);
            setColor((color) => (color = randomColor));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return color;
};

export default useChangingColor;
