import React from 'react';
import { motion } from 'framer-motion';

interface ModernFeatureCardProps {
    headerTitle: string;
    heading: string;
    bodyText: string;
    image: string;
    className?: string;
    delay?: number;
}

export const ModernFeatureCard: React.FC<ModernFeatureCardProps> = ({
    headerTitle,
    heading,
    bodyText,
    image,
    className = "",
    delay = 0
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.21, 1.02, 0.73, 1] }}
            className={`group relative flex flex-col w-full h-[400px] rounded-[24px] overflow-hidden border border-neutral-200/50 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(157,144,245,0.15)] transition-all duration-700 ${className}`}
        >
            {/* Card Header - Browser/App Style */}
            <div className="h-9 bg-[#9D90F5] flex-shrink-0 flex items-center px-4 gap-3">
                <div className="flex gap-1.5 text-center">
                    <div className="w-2 h-2 rounded-full bg-white/60" />
                    <div className="w-2 h-2 rounded-full bg-white/60" />
                    <div className="w-2 h-2 rounded-full bg-white/60" />
                </div>
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em] pl-2 border-l border-white/20 ml-1">
                    {headerTitle}
                </span>
            </div>

            {/* Card Content Pane */}
            <div className="relative p-6 flex-1 flex flex-col gap-5 overflow-hidden">
                <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-bold text-neutral-900 tracking-tight group-hover:text-brand-purple transition-colors duration-500">
                        {heading}
                    </h4>
                    <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2">
                        {bodyText}
                    </p>
                </div>

                {/* Image Container */}
                <div className="relative flex-1 rounded-xl overflow-hidden bg-[#F0EEFF]/50 border border-neutral-100">
                    <motion.div
                        className="w-full overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.2, ease: [0.21, 1.02, 0.73, 1] }}
                    >
                        <img
                            src={image}
                            alt={heading}
                            className="w-full object-cover opacity-95 group-hover:opacity-100 transition-opacity"
                        />
                    </motion.div>

                    {/* Inner Shadow / Overlay */}
                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.02)] pointer-events-none" />
                </div>
            </div>

            {/* Subtle Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000 ease-in-out pointer-events-none" />
        </motion.div>
    );
};
