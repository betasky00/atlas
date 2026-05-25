"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        d: `M-${500 - i * 8 * position} -${300 + i * 8}C-${
            500 - i * 8 * position
        } -${300 + i * 8} -${400 - i * 8 * position} ${300 - i * 8} ${
            200 - i * 8 * position
        } ${500 - i * 8}C${800 - i * 8 * position} ${700 - i * 8} ${
            900 - i * 8 * position
        } ${1200 - i * 8} ${900 - i * 8 * position} ${1200 - i * 8}`,
        color: `rgba(255, 167, 0, ${0.08 + i * 0.02})`,
        width: 0.7 + i * 0.04,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 1000 1500"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="#FFA700"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
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
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>
        </div>
    );
}
