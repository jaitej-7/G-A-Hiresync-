import React from 'react';
import { motion } from 'framer-motion';
import { ParticlesCanvas } from '../components/ui';
import { Link } from 'react-router-dom';

interface ComingSoonPageProps {
    title?: string;
    description?: string;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ 
    title = "Coming Soon.", 
    description = "We're building the future of AI-powered recruitment. Our team is working hard to bring you a seamless experience. Stay tuned for something amazing." 
}) => {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-x-hidden bg-neutral-50 px-6 py-12">
            {/* Background Animation */}
            <div className="fixed inset-0 z-0">
                <ParticlesCanvas className="opacity-60" />
            </div>

            {/* Spacer for center alignment */}
            <div className="flex-grow flex flex-col items-center justify-center w-full">
                <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-4 py-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200/80 bg-white/50 text-xs font-medium text-neutral-600 mb-6 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span>
                        Exciting things are in the works
                    </motion.div>

                    <h1 className="text-4xl md:text-7xl font-medium tracking-tight text-[#171717] mb-6 leading-tight">
                        {title.includes("Coming Soon") ? (
                            <>
                                {title.split('Soon')[0]}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple animate-gradient-text">Soon.</span>
                            </>
                        ) : (
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple animate-gradient-text">{title}</span>
                        )}
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-500 mb-10 font-normal leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                        
                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="w-full sm:w-auto bg-white border border-neutral-200 text-neutral-900 text-sm font-medium px-8 py-4 rounded-full hover:bg-neutral-50 transition-colors"
                            >
                                Return Home
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Minimal Footer Navigation */}
            <div className="relative w-full flex flex-col items-center gap-6 mt-12 z-10">
                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-neutral-500">
                    <Link to="/" className="hover:text-neutral-900 transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-neutral-900 transition-colors">About</Link>
                    <Link to="/pricing" className="hover:text-neutral-900 transition-colors">Pricing</Link>
                    <Link to="/contact-us" className="hover:text-neutral-900 transition-colors">Contact</Link>
                    <Link to="/privacy-policy" className="hover:text-neutral-900 transition-colors">Privacy</Link>
                </nav>
                
                <div className="text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide flex items-center gap-1">
                    <span>© 2026 G A Hiresync.</span>
                    <span className="hidden sm:inline">All rights reserved.</span>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonPage;
