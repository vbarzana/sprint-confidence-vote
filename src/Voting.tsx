// src/Voting.js
import React, { useRef, useState } from "react";
import "./Voting.css";

const Voting = () => {
    const [stars, setStars] = useState(0);
    const [positions, setPositions] = useState<{ [key: number]: any }>({});
    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

    const handleVote = (value: number) => {
        if (value < 4) {
            setStars(value);
        }
    };

    const handleMouseEnter = (index: number) => {
        if (index === 3 || index === 4) {
            const newPosition = {
                top: `${Math.random() * 60 + 10}%`,
                left: `${Math.random() * 60 + 10}%`,
            };
            setPositions((prevPositions) => ({
                ...prevPositions,
                [index]: newPosition,
            }));
        }
    };

    const basePositions = [
        { top: '10%', left: '10%' },
        { top: '10%', left: '30%' },
        { top: '10%', left: '50%' },
        positions[3] || { top: '10%', left: '70%' },
        positions[4] || { top: '10%', left: '90%' },
    ];

    return (
        <div className="voting-container">
            {[1, 2, 3, 4, 5].map((value: number) => (
                <button
                    key={value}
                    ref={(el) => (buttonsRef.current[value - 1] = el)}
                    style={basePositions[value - 1]}
                    className={`star-button ${value>3 ? "unselectable-star" : ""}`}
                    onClick={() => handleVote(value)}
                    onMouseEnter={() => handleMouseEnter(value - 1)}
                >
                    {value} ⭐
                </button>
            ))}
            <div className="selected-stars">Your confidence level: {stars}</div>
        </div>
    );
};

export default Voting;
