"use client";
import { useEffect, useState } from "react";

function AnimatedCustomizedText() {
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const [opacityValue, setOpacityValue] = useState(1);
    const Phrases = [
        "Godwin Emeribe",
        "a frontend developer",
        "a lover of chess",
    ];

    useEffect(() => {
        const IntervalId = setInterval(() => {
            setCurrentPhrase((currentPhrase + 1) % Phrases.length);
        }, 4000);

        return () => clearInterval(IntervalId);
    }, [currentPhrase]);

    useEffect(() => {
        if (opacityValue === 0) setOpacityValue(() => 1);
        let intervalId = setInterval(() => {
            setOpacityValue(() => opacityValue - 0.25);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [opacityValue]);

    return (
        <div className="container w-[100%]">
            <p
                className={`text text-3xl text-red-500`}
                style={{ opacity: `${opacityValue}` }}
            >
                I am {Phrases[currentPhrase]}
            </p>
        </div>
    );
}

export default AnimatedCustomizedText;
