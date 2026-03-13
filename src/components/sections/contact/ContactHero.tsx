import React from 'react';
import { motion } from 'framer-motion';
const ContactHero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 md:pb-32 overflow-clip min-h-[60vh] flex flex-col justify-center">

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200/80 bg-white text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-6 shadow-sm"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        Get In Touch
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[28px] sm:text-[36px] md:text-[64px] font-medium leading-[1.05] text-[#171717] mb-6 tracking-tighter"
                    >
                        Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">professionals</span><br />
                        and forging <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">career paths</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-neutral-500 max-w-2xl font-medium"
                    >
                        One connection at a time. Reach out to our team to discover how GA HireSync can transform your hiring.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
