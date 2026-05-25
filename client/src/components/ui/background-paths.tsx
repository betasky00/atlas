"use client";

import { motion } from "framer-motion";

function FloatingPaths() {
    // Create horizontal flowing lines that move left to right
    const paths = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        // Horizontal curves flowing from left to right
        d: `M 0 ${100 + i * 40} Q 250 ${80 + i * 40} 500 ${100 + i * 40} T 1000 ${100 + i * 40}`,
        color: `rgba(255, 167, 0, ${0.1 + i * 0.02})`,
        width: 0.5 + i * 0.05,
        delay: i * 0.1,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none w-full h-full">
            <svg
                className="w-full h-full"
                viewBox="0 0 1000 1000"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="#FFA700"
                        strokeWidth={path.width}
                        strokeOpacity={0.15 + path.id * 0.02}
                        initial={{ pathOffset: 0, opacity: 0.3 }}
                        animate={{
                            pathOffset: [0, 1],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                            delay: path.delay,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-white pointer-events-none">
            <div className="absolute inset-0 w-full h-full">
                <FloatingPaths />
            </div>
        </div>
    );
}
