import React from 'react';
import { motion } from 'framer-motion';

interface PolicySection {
    heading: string;
    content?: string;
    bullets?: string[];
}

interface PolicyPageProps {
    badge: string;
    title: string;
    effectiveDate?: string;
    description?: string;
    sections: PolicySection[];
}

const PolicyPage: React.FC<PolicyPageProps> = ({ badge, title, effectiveDate, description, sections }) => {
    return (
        <section className="relative pt-32 pb-24 overflow-clip min-h-screen">
            <div className="max-w-[860px] mx-auto px-6 relative z-10">

                {/* Hero */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200/80 bg-white text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-6 shadow-sm"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {badge}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-[36px] sm:text-[48px] md:text-[56px] font-medium leading-[1.1] text-[#171717] mb-4 tracking-tighter"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">{title.split(' ')[0]}</span>{' '}
                        {title.split(' ').slice(1).join(' ')}
                    </motion.h1>

                    {effectiveDate && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-sm text-neutral-400 font-medium"
                        >
                            {effectiveDate}
                        </motion.p>
                    )}

                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="mt-4 text-base md:text-lg text-neutral-500 max-w-2xl leading-relaxed"
                        >
                            {description}
                        </motion.p>
                    )}
                </div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white/70 backdrop-blur-sm border border-neutral-100 rounded-3xl shadow-sm px-8 md:px-12 py-10 space-y-10"
                >
                    {sections.map((section, idx) => (
                        <div key={idx} className="space-y-3">
                            <h2 className="text-lg font-semibold text-neutral-900 tracking-tight border-b border-neutral-100 pb-2">
                                {section.heading}
                            </h2>
                            {section.content && (
                                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">{section.content}</p>
                            )}
                            {section.bullets && section.bullets.length > 0 && (
                                <ul className="space-y-2 mt-2">
                                    {section.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} className="flex items-start gap-3 text-sm md:text-base text-neutral-600 leading-relaxed">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple flex-shrink-0" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* Contact footer note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center text-xs text-neutral-400 mt-8"
                >
                    Questions? Contact us at{' '}
                    <a href="mailto:support@gahiresync.com" className="text-brand-blue underline underline-offset-2 hover:text-brand-purple transition-colors">
                        support@gahiresync.com
                    </a>
                </motion.p>
            </div>
        </section>
    );
};

export default PolicyPage;
