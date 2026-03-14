import React from 'react';
import { motion } from 'framer-motion';
import HeroVisual from '../../assets/hero/Hero.svg';

const FloatingCursor = ({ label, color, delay = 0, initialPos = { x: 0, y: 0 }, direction = 'left' }: { label: string, color: string, delay?: number, initialPos?: { x: number, y: number }, direction?: 'left' | 'right' }) => (
    <motion.div
        initial={{ x: initialPos.x, y: initialPos.y, opacity: 0, scale: 0.8 }}
        animate={{
            x: [initialPos.x, initialPos.x + 40, initialPos.x - 30, initialPos.x + 20, initialPos.x],
            y: [initialPos.y, initialPos.y - 60, initialPos.y + 30, initialPos.y - 40, initialPos.y],
            opacity: [0, 1, 1, 1, 0],
            scale: [0.8, 1, 1.1, 1, 0.8],
            rotate: [0, -5, 5, -3, 0]
        }}
        transition={{
            duration: 12,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
            times: [0, 0.1, 0.5, 0.9, 1]
        }}
        className={`absolute z-20 pointer-events-none hidden lg:flex items-center gap-1.5 ${direction === 'right' ? 'flex-row-reverse' : ''}`}
    >
        <div style={{ color }} className={`drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)] ${direction === 'right' ? 'scale-x-[-1]' : ''}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500001 16.8829V0.500001L18.6658 11.0478L13.0314 12.0619L12.9192 12.0821L12.8381 12.1559L5.65376 12.3673Z" stroke="white" strokeWidth="1.5" />
            </svg>
        </div>
        <motion.div
            animate={{
                y: [0, -2, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ backgroundColor: color }}
            className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white shadow-xl whitespace-nowrap border border-white/20"
        >
            {label}
        </motion.div>
    </motion.div>
);

const Hero: React.FC = () => {
    return (
        <section className="relative pt-20 md:pt-32 pb-20 md:pb-32 overflow-clip px-6 max-w-[1440px] mx-auto min-h-[90vh] flex flex-col justify-center">

            <div className="flex flex-col items-center text-center max-w-3xl mx-auto z-10 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200/80 bg-neutral-50/50 text-xs font-medium text-neutral-600 mb-6 backdrop-blur-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                    HireSync AI 2.0 is now live
                </motion.div>

                <h1 className="text-[32px] sm:text-4xl md:text-6xl lg:text-[48px] font-medium tracking-tight text-[#171717] mb-2 leading-[1.1] flex flex-wrap justify-center items-center gap-x-2 gap-y-1 sm:gap-x-3 sm:gap-y-2">
                    <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>Your Next.</motion.span>
                    <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>Great Hire.</motion.span>
                    <div className="basis-full h-0"></div> {/* Line break */}
                    <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>starts.</motion.span>
                    <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple animate-gradient-text">Here.</span>
                    </motion.span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-lg md:text-xl text-neutral-500 mb-8 max-w-2xl font-normal leading-relaxed"
                >
                    The AI-powered recruitment management platform built to unify agency operations and empower HR teams. Hire top talent without the chaos.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center relative"
                >
                    {/* Floating Animated Cursors - Tightened to stay strictly on text */}
                    <FloatingCursor label="Agency" color="#8b5cf6" delay={0} initialPos={{ x: -380, y: -180 }} direction="right" />
                    <FloatingCursor label="Recruiter" color="#3b82f6" delay={2} initialPos={{ x: 400, y: -180 }} />
                    <FloatingCursor label="Organization" color="#06b6d4" delay={5} initialPos={{ x: 380, y: -30 }} />
                    <FloatingCursor label="Candidate" color="#10b981" delay={8} initialPos={{ x: 200, y: 150 }} />
                    <FloatingCursor label="Interviewer" color="#f43f5e" delay={3} initialPos={{ x: -250, y: 90 }} direction="right" />

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="w-full sm:w-auto bg-neutral-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/10"
                    >
                        Book a Demo
                    </motion.button>
                </motion.div>
            </div>

            {/* Hero Visual Container */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-8 md:mt-12 relative w-full mx-auto hidden md:block"
            >

                <div className="w-full h-auto bg-white/40 backdrop-blur-md rounded-3xl overflow-hidden shadow-[0_32px_80px_-20px_rgba(0,0,0,0.1)] border border-neutral-200/50 transition-all duration-500 opacity-90">
                    <img
                        src={HeroVisual}
                        alt="HireSync Dashboard Platform"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
