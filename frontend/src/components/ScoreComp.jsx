import React, { useEffect, useState } from "react";

const SIZE = 120;
const STROKE_WIDTH = 5;
const BACKGROUND_STROKE = 10;
const RADIUS = (SIZE - BACKGROUND_STROKE) / 2;
const PROGRESS_RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * PROGRESS_RADIUS;

export default function ScoreComp({ score = 0 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Math.min(Math.max(score, 0), 100);
    const duration = 1500;
    const increment = 1000 / 60;
    const steps = duration / increment;
    const stepSize = (end - start) / steps;

    let currentProgress = start;
    const timer = setInterval(() => {
      currentProgress += stepSize;
      if (currentProgress >= end) {
        currentProgress = end;
        clearInterval(timer);
      }
      setProgress(currentProgress);
    }, increment);

    return () => clearInterval(timer);
  }, [score]);

  const strokeDashoffset =
    CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <div
      style={{
        width: SIZE,
        height: SIZE,
        backgroundColor: "#444B6F",
        borderRadius: "50%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <svg width={SIZE} height={SIZE} style={{ display: "block" }}>
        {/* Background ring */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="#303858"
          strokeWidth={BACKGROUND_STROKE}
          fill="none"
        />
        {/* Progress arc, rotated to start from bottom */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={PROGRESS_RADIUS}
          stroke="#A6E1FA"
          strokeWidth={STROKE_WIDTH}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset .1s linear" }}
          transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
        />
      </svg>
      {/* Centered score number */}
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 40,
          fontWeight: "bold",
          color: "rgba(255,255,255,0.7)",
          pointerEvents: "none"
        }}
      >
        {Math.round(progress)}
      </span>
    </div>
  );
}
