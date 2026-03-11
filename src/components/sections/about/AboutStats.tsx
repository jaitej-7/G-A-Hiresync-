import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Loved by 5,000+ Team Members", value: "5,000+" },
    { label: "Trusted by 25,000+ customers", value: "25,000+" },
    { label: "Onboard talent in as little as 48 hours", value: "48 hrs" },
];

const AboutStats: React.FC = () => {
    return (
        <section className="py-20">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col gap-2"
                        >
                            <span className="text-5xl md:text-6xl font-bold text-blue-600 tracking-tight">
                                {stat.value}
                            </span>
                            <span className="text-sm font-medium text-neutral-500 max-w-[200px] uppercase">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutStats;
