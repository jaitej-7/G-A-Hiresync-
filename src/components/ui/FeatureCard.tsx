import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
    title: string;
    description: string;
    image?: string;
    icon?: string;
    tags?: string[];
    className?: string;
    variant?: 'main' | 'sub' | 'bento';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    description,
    image,
    icon,
    tags,
    className = ""
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className={`group relative overflow-hidden rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-blue-100/50 ${className}`}
        >
            {/* Ambient Background Gradient */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-50/30 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

            <div className="relative z-10 h-full flex flex-col">
                {tags && tags.length > 0 && (
                    <div className="flex gap-2 mb-6">
                        {tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 rounded-full bg-blue-50 text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <h3 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-8 max-w-[90%]">
                    {description}
                </p>

                {image ? (
                    <div className="mt-auto relative rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100/50 aspect-[16/10] group-hover:border-blue-100 transition-colors">
                        <motion.img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover object-top"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                    </div>
                ) : icon && (
                    <div className="mt-auto flex items-center justify-center h-40 bg-neutral-50 rounded-2xl border border-neutral-100/50 group-hover:bg-blue-50/30 transition-colors">
                        {/* Icon/Small Visual Placeholder */}
                        <div className="text-4xl">{icon}</div>
                    </div>
                )}
            </div>

            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        </motion.div>
    );
};
