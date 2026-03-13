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

    // Apply a springy, liquid-like smoothing effect to the scroll progress itself
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 40,
        damping: 15,
        mass: 1.5
    });

    // The background SVG scales up as you scroll — original desktop range
    const bgScale = useTransform(smoothProgress, [0, .5], [0.5, 1.5]);

    // Top Cube (Image 1) translates straight UP
    const img1X = useTransform(smoothProgress, [0, 1], [0, 0]);
    const img1Y = useTransform(smoothProgress, [0, 1], [-135, -200]);

    // Base (Image 2) stays mostly still or translates slightly DOWN
    const img2X = useTransform(smoothProgress, [0, 1], [0, 0]);
    const img2Y = useTransform(smoothProgress, [0, 1], [0, 20]);

    return (
        <section className="py-24 overflow-x-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col items-center text-center">
                    <StickyHeading
                        badgeText="About G A Hiresync"
                        title={[
                            "AI-Driven platform Design to automate",
                            "the workflow of Recruitment Process"
                        ]}
                        gradientWord="AI-Driven"
                        subtitle={
                            <>
                                Streamline your hiring process with our AI-driven platform. <br />
                                Find the perfect candidate, faster and more efficiently. <br />
                                Get started today!
                            </>
                        }
                    />
                </div>

                <div ref={sectionRef} className="relative h-[150vh] md:h-[200vh] -mt-16">
                    <div className="sticky top-[200px] h-screen flex justify-center">
                        {/* Central 3D Visual with Stack Details */}
                        <div className="relative z-10 w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center p-8 overflow-hidden md:overflow-visible">

                            {/* Background SVG Scaling — clipped on mobile, visible on desktop */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] overflow-hidden md:overflow-visible pointer-events-none -z-50">
                                <motion.img
                                    style={{ scale: bgScale }}
                                    src={BgSvg}
                                    alt="Ecosystem Background"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Stacked Image 2 (Moves Bottom Right) */}
                            <motion.img
                                style={{ x: img2X, y: img2Y }}
                                src={ShapesImage2}
                                alt="Ecosystem Layer 2"
                                className="absolute w-full h-full object-contain drop-shadow-xl z-0"
                            />

                            {/* Stacked Image 1 (Moves Top Left) */}
                            <motion.img
                                style={{ x: img1X, y: img1Y }}
                                src={ShapesImage1}
                                alt="Ecosystem Layer 1"
                                className="absolute w-full h-full object-contain drop-shadow-2xl z-10"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
