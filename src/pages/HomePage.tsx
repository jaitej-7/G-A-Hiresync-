import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hero, TrustedBy, Ecosystem, WhyHireSync } from '../components/sections';
import ModernFeatures from '../components/sections/ModernFeatures';
import Integrations from '../components/sections/Integrations';

const HomePage: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax logic between Hero and Next Sections
    const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.3]);
    const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

    return (
        <div ref={containerRef} className="relative">
            <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="relative z-10 origin-top rounded-b-[40px] pb-12">
                <Hero />
            </motion.div>

            <div className="relative z-0 -mt-12 pt-12">
                <TrustedBy />
                <Ecosystem />
                <WhyHireSync />
                <ModernFeatures />
                <Integrations />
            </div>
        </div>
    );
};

export default HomePage;
