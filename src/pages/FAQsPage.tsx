import React from 'react';
import { motion } from 'framer-motion';
import ContactFAQ from '../components/sections/contact/ContactFAQ';

const FAQsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-transparent">
            <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden min-h-[60vh] flex flex-col justify-center bg-transparent">
                <div className="max-w-[1200px] mx-auto px-6 relative z-10 mt-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200/80 bg-white text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-6 shadow-sm"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            Knowledge Base
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-[42px] md:text-[64px] font-medium leading-[1.05] text-[#171717] mb-6 tracking-tighter"
                        >
                            Frequently Asked <br />
                            Questions
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-neutral-500 max-w-2xl font-medium"
                        >
                            Find answers to the most common questions about GA HireSync's platform, features, and integrations.
                        </motion.p>
                    </div>
                </div>
            </section>

            <ContactFAQ />
        </div>
    );
};

export default FAQsPage;
