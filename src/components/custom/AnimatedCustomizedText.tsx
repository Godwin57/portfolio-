"use client";
import { useEffect, useState } from "react";

function AnimatedCustomizedText() {
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const [opacityValue, setOpacityValue] = useState(1);
    const Phrases = [
        "Hi. I am Godwin Emeribe",
        "A passionate frontend developer",
        "A lover of chess",
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
                className={`text-red-500 text-6xl tracking-wide sm:tracking-tighter`}
                style={{ opacity: `${opacityValue}` }}
            >
                {Phrases[currentPhrase]}
            </p>
        </div>
    );
}

export default AnimatedCustomizedText;
