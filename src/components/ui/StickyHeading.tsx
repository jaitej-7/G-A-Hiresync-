import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

interface StickyHeadingProps {
    title: string[];
    badgeText?: string;
    gradientWord?: string;
    subtitle?: string | React.ReactNode;
    className?: string;
}

const Word = ({ children, progress, range, isGradient }: { children: string, progress: MotionValue<number>, range: [number, number], isGradient?: boolean }) => {
    const opacity = useTransform(progress, range, [0, 1]);

    if (isGradient) {
        return (
            <span className="relative inline-block mr-[0.25em]">
                {/* Base color for gradient words before reveal */}
                <span className="text-[#7b7b7b] opacity-100">{children}</span>
                {/* Gradient color revealed on scroll */}
                <motion.span 
                    style={{ opacity }} 
                    className="absolute left-0 top-0 text-gradient text-transparent bg-clip-text w-full h-full"
                >
                    {children}
                </motion.span>
            </span>
        );
    }

    return (
        <span className="relative inline-block mr-[0.25em]">
            <span className="text-[#7b7b7b] opacity-100">{children}</span>
            <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[#171717] w-full h-full">
                {children}
            </motion.span>
        </span>
    );
};

export const StickyHeading: React.FC<StickyHeadingProps> = ({
    title,
    badgeText,
    gradientWord,
    subtitle,
    className = "text-[22px] sm:text-[26px] md:text-[36px] md:leading-[1.15] leading-[1.2] font-medium tracking-tight max-w-4xl mx-auto text-center flex flex-col items-center justify-center"
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // High container allows scrolling while position is sticky.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });

    // Fade subtitle in at the very end of the scroll (80% to 100%)
    const subtitleOpacity = useTransform(smoothProgress, [0.85, 1], [0, 1]);
    const subtitleY = useTransform(smoothProgress, [0.85, 1], [20, 0]);

    // Breakdown title lines into individual words
    const allWords = title.map(line => line.split(" "));
    const totalWords = allWords.reduce((acc, words) => acc + words.length, 0);

    let globalWordIndex = 0;

    return (
        <div ref={containerRef} className="w-full relative h-[100vh] md:h-[150vh] z-20 pointer-events-none mb-8">
            <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full px-6 text-center pointer-events-auto">
                {/* Hardcoded Hero Badge Styling with Dynamic Text */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200/80 bg-white text-xs font-medium text-neutral-600 mb-8 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                    {badgeText || "HireSync AI 2.0 is now live"}
                </div>

                <h2 className={`relative w-full z-10 ${className}`}>
                    {/* Animated AI Background Glowing Orbs (At the Corners) */}
                    <div className="absolute inset-x-[-20%] inset-y-[-50%] -z-10 pointer-events-none">
                        {/* Top Left Orb */}
                        <motion.div
                            animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.5, 0.8, 0.5],
                                rotate: [0, 45, 90],
                                x: [-30, 20, -30],
                                y: [-20, 20, -20]
                            }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-[80%] h-[80%] bg-brand-blue/30 blur-[80px] rounded-full"
                        />
                        {/* Bottom Right Orb */}
                        <motion.div
                            animate={{
                                scale: [1.2, 0.8, 1.2],
                                opacity: [0.4, 0.7, 0.4],
                                x: [30, -20, 30],
                                y: [20, -30, 20],
                                rotate: [180, 225, 270]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-brand-purple/30 blur-[80px] rounded-full"
                        />
                        {/* Bottom Left Orb */}
                        <motion.div
                            animate={{
                                scale: [0.9, 1.3, 0.9],
                                opacity: [0.3, 0.6, 0.3],
                                x: [-20, 30, -20],
                                y: [30, -20, 30]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-1/4 left-1/4 w-[60%] h-[60%] bg-brand-cyan/20 blur-[80px] rounded-full -z-1"
                        />
                    </div>

                    {allWords.map((wordsInLine, lineIndex) => (
                        <div key={lineIndex} className="flex flex-wrap justify-center">
                            {wordsInLine.map((word, wordIndexInLine) => {
                                // Reveal each word sequentially from 10% to 80% scroll
                                const start = 0.1 + (globalWordIndex / totalWords) * 0.7;
                                const end = start + (0.7 / totalWords);
                                globalWordIndex++;

                                const cleanWord = word.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
                                const gradWords = gradientWord ? gradientWord.split(' ').map(w => w.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()) : [];
                                const isGrad = gradWords.includes(cleanWord);

                                return (
                                    <Word key={wordIndexInLine} progress={smoothProgress} range={[start, end]} isGradient={isGrad}>
                                        {word}
                                    </Word>
                                );
                            })}
                        </div>
                    ))}
                </h2>

                {subtitle && (
                    <motion.div
                        style={{ opacity: subtitleOpacity, y: subtitleY }}
                        className="text-lg text-neutral-500 max-w-2xl leading-relaxed font-medium mt-4 text-center"
                    >
                        {subtitle}
                    </motion.div>
                )}
            </div>
        </div>
    );
};
