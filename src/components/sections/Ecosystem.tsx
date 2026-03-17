import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ShapesImage1 from '../../assets/about Hiresync/3d-shapes-glowing-with-bright-holographic-colors 1.png';
import ShapesImage2 from '../../assets/about Hiresync/3d-shapes-glowing-with-bright-holographic-colors 2 (2).png';
import BgSvg from '../../assets/about Hiresync/Back group.svg';
import { StickyHeading } from '../ui/StickyHeading';

const Ecosystem: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"] // Track as it moves through the viewport
    });

    // Apply a refined spring for better responsiveness and smoothness
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 25,
        mass: 1.2
    });

    // The background SVG scales up as you scroll — original desktop range
    const bgScale = useTransform(smoothProgress, [0, .5], [0.2, 1.3]);

    // Top Cube (Image 1) translates straight UP
    const img1X = useTransform(smoothProgress, [0, 1], [0, 0]);
    const img1Y = useTransform(smoothProgress, [0, 1], [-135, -200]);

    // Base (Image 2) stays mostly still or translates slightly DOWN
    const img2X = useTransform(smoothProgress, [0, 1], [0, 0]);
    const img2Y = useTransform(smoothProgress, [0, 1], [0, 20]);

    return (
        <section className="py-24">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col items-center text-center">
                    <StickyHeading
                        badgeText="About G A Hiresync"
                        title={[
                            "Built for Recruiters. Powered by AI.",
                            "Designed for Scale."
                        ]}
                        gradientWord="Powered by AI"
                        subtitle={
                            <>
                                GA HireSync was born out of frustration with disconnected tools, messy spreadsheets, and slow hiring cycles. We built a single platform that handles everything — from sourcing to signed offer — so your team can focus on what actually matters: placing the right people
                            </>
                        }
                    />
                </div>

                <div ref={sectionRef} className="relative h-[200vh] md:h-[250vh] z-10">
                    <div className="sticky top-[20vh] h-[80vh] flex items-center justify-center overflow-visible">
                        {/* Central 3D Visual with Stack Details */}
                        <div className="relative z-10 w-[280px] h-[280px] md:w-[450px] md:h-[450px] flex items-center justify-center p-8">

                            {/* Background SVG Scaling - Responsive based on screen */}
                            <motion.img
                                style={{ scale: bgScale, willChange: 'transform' }}
                                src={BgSvg}
                                alt="Ecosystem Background"
                                className="absolute w-[180%] h-[180%] md:w-[130%] md:h-[130%] max-w-none object-contain -z-50 pointer-events-none opacity-80"
                                loading="lazy"
                            />

                            {/* Stacked Image 2 (Moves Bottom Right) */}
                            <motion.img
                                style={{ x: img2X, y: img2Y, willChange: 'transform' }}
                                src={ShapesImage2}
                                alt="Ecosystem Layer 2"
                                className="absolute w-full h-full object-contain drop-shadow-xl z-0"
                                loading="lazy"
                            />

                            {/* Stacked Image 1 (Moves Top Left) */}
                            <motion.img
                                style={{ x: img1X, y: img1Y, willChange: 'transform' }}
                                src={ShapesImage1}
                                alt="Ecosystem Layer 1"
                                className="absolute w-full h-full object-contain drop-shadow-2xl z-10"
                                loading="lazy"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
