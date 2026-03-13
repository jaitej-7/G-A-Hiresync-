import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-transparent">
            {/* Soft Gradient Blobs */}
            <motion.div
                animate={{
                    x: [0, 80, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[-5%] left-[10%] w-[45%] h-[45%] bg-blue-400/20 rounded-full blur-[110px]"
            />
            <motion.div
                animate={{
                    x: [0, -60, 0],
                    y: [0, 80, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[-5%] right-[5%] w-[55%] h-[55%] bg-purple-400/15 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[15%] right-[15%] w-[25%] h-[25%] bg-cyan-400/15 rounded-full blur-[90px]"
            />
        </div>
    );
};

export default AnimatedBackground;
