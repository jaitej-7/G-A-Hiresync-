import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-10]">
            {/* Background Orbs with Enhanced Animation */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, -30, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] mix-blend-multiply"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -40, 0],
                    y: [0, 50, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-[120px] mix-blend-multiply"
            />
            <motion.div
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1, 0.8]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[100px] mix-blend-multiply"
            />
        </div>
    );
};

export default AnimatedBackground;
