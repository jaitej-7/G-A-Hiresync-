import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const AboutHero: React.FC = () => {
    return (
        <section className="relative h-[300vh]">
            {/* Sticky Container for Content */}
            <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

                {/* Content Container (Matching Home Hero layout) */}
                <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center flex flex-col items-center w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200/80 bg-white/50 text-xs font-medium text-neutral-600 mb-6 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                        HireSync AI 2.0 is now live
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-[48px] font-medium tracking-tight text-[#171717] mb-2 leading-[1.1] flex flex-wrap justify-center items-center gap-x-3 gap-y-2 max-w-4xl mx-auto">
                        <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>Redefining</motion.span>
                        <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>hiring</motion.span>
                        <div className="basis-full h-0" />
                        <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>with</motion.span>
                        <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56A8FD] to-[#A16AFE]">Intelligence.</span>
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="text-lg md:text-xl text-neutral-500 mb-8 max-w-2xl font-normal leading-relaxed"
                    >
                        HireSync is committed to reshaping recruitment through <span className="text-neutral-900 font-medium">intelligent technology</span>.
                        Our platform is engineered to deliver precision, speed, and ease to the hiring process.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="w-full sm:w-auto bg-neutral-900 text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/10"
                        >
                            Book a Demo
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="w-full sm:w-auto text-neutral-700 text-sm font-medium px-8 py-3.5 rounded-full border border-neutral-200 bg-white/50 hover:bg-white/80 backdrop-blur-sm transition-colors flex items-center justify-center gap-2"
                        >
                            Explore Platform
                            <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                <Icon icon="solar:arrow-right-linear" className="text-base" />
                            </motion.div>
                        </motion.button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ delay: 1, duration: 3, repeat: Infinity }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400"
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to Morph</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-300 to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
