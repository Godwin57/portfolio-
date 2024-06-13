"use client";
import { useEffect, useState } from "react";
import "./AnimatedText.css";

function AnimatedCustomizedText() {
    const [currentPhrase, setCurrentPhrase] = useState(0);
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

    return (
        <div className="container w-[100%]">
            <p className="text text-3xl text-red-500">
                I am {Phrases[currentPhrase]}
            </p>
            {/* <p className="text">I am someone</p> */}
        </div>
    );
}

export default AnimatedCustomizedText;
