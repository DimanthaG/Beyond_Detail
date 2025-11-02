import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./AutomotiveBackground.scss";

function AutomotiveBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduced elements count on mobile for better performance
  const swirlCount = isMobile ? 3 : 8;
  const reflectionCount = isMobile ? 4 : 12;
  const speedLineCount = isMobile ? 6 : 20;

  // Create circular swirl patterns (like buffing/polishing motions)
  const swirls = Array.from({ length: swirlCount }, (_, i) => ({
    id: i,
    cx: 20 + (i * 12.5) % 100, // Distribute across width
    cy: 15 + (i * 15) % 85, // Distribute across height
    r: 15 + (i % 3) * 8, // Varying sizes
    rotation: i * 45, // Rotate each swirl
  }));

  // Create paint reflection lines (horizontal)
  const reflections = Array.from({ length: reflectionCount }, (_, i) => ({
    id: `reflection-${i}`,
    y: 10 + i * 7,
    width: 60 + (i % 3) * 20,
    opacity: 0.03 + (i % 2) * 0.02,
  }));

  // Create speed lines (diagonal)
  const speedLines = Array.from({ length: speedLineCount }, (_, i) => ({
    id: `speed-${i}`,
    x1: -10 + (i * 5) % 120,
    y1: -5 + (i * 3) % 100,
    x2: 10 + (i * 5) % 120,
    y2: 5 + (i * 3) % 100,
    opacity: 0.04 + (i % 3) * 0.01,
  }));

  return (
    <div className="automotive-background">
      <svg
        className="automotive-background__svg"
        viewBox="0 0 100 100"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Paint reflection lines */}
        {reflections.map((reflection) => (
          <motion.line
            key={reflection.id}
            x1="0"
            y1={reflection.y}
            x2={reflection.width}
            y2={reflection.y}
            stroke="currentColor"
            strokeWidth="0.3"
            strokeOpacity={reflection.opacity}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isMobile ? {
              opacity: reflection.opacity * 0.7,
            } : {
              pathLength: [0, 1, 0],
              opacity: [reflection.opacity * 0.5, reflection.opacity, reflection.opacity * 0.5],
              x2: [reflection.width * 0.5, reflection.width, reflection.width * 0.5],
            }}
            transition={isMobile ? {
              duration: 0,
            } : {
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Circular swirl patterns (buffing motions) */}
        {swirls.map((swirl) => {
          const baseRotation = swirl.rotation;
          return (
            <g key={swirl.id}>
              <motion.circle
                cx={swirl.cx}
                cy={swirl.cy}
                r={swirl.r}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeOpacity={0.08}
                initial={{ pathLength: 0, opacity: 0.05 }}
                animate={isMobile ? {
                  opacity: 0.1,
                } : {
                  pathLength: [0, 1, 0],
                  opacity: [0.05, 0.15, 0.05],
                }}
                transition={isMobile ? {
                  duration: 0,
                } : {
                  duration: 15 + Math.random() * 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{
                  transformOrigin: `${swirl.cx}px ${swirl.cy}px`,
                  transform: `rotate(${baseRotation}deg)`,
                }}
              />
              <motion.path
                d={`M ${swirl.cx + swirl.r * 0.3},${swirl.cy} A ${swirl.r * 0.7},${swirl.r * 0.7} 0 0,1 ${swirl.cx - swirl.r * 0.3},${swirl.cy}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeOpacity={0.12}
                initial={{ pathLength: 0 }}
                animate={isMobile ? {
                  pathLength: 0.5,
                } : {
                  pathLength: [0, 1, 0],
                }}
                transition={isMobile ? {
                  duration: 0,
                } : {
                  duration: 12 + Math.random() * 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}

        {/* Speed lines (diagonal) */}
        {speedLines.map((line) => (
          <motion.line
            key={line.id}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="currentColor"
            strokeWidth="0.4"
            strokeOpacity={line.opacity}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isMobile ? {
              opacity: line.opacity * 0.7,
            } : {
              pathLength: [0, 1, 0],
              opacity: [line.opacity * 0.3, line.opacity, line.opacity * 0.3],
            }}
            transition={isMobile ? {
              duration: 0,
            } : {
              duration: 6 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glossy shine effect (elliptical) */}
        {Array.from({ length: 3 }, (_, i) => (
          <motion.ellipse
            key={`shine-${i}`}
            cx={30 + i * 20}
            cy={25 + i * 15}
            rx={12 + i * 3}
            ry={6 + i * 2}
            fill="currentColor"
            fillOpacity={0.03}
            initial={{ scale: 0, opacity: 0 }}
            animate={isMobile ? {
              opacity: 0.04,
              scale: 0.8,
            } : {
              scale: [0, 1.5, 0],
              opacity: [0, 0.08, 0],
              rotate: [0, 180, 360],
            }}
            transition={isMobile ? {
              duration: 0,
            } : {
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default AutomotiveBackground;

