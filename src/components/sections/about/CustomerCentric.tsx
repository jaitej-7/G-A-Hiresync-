import React from 'react';
import { motion } from 'framer-motion';

const points = [
    {
        title: "Built Around Real Needs",
        desc: "We listen to recruiters, employers, and teams to shape solutions that solve real-world hiring challenges—not just theoretical ones.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        )
    },
    {
        title: "Seamless User Experience",
        desc: "Every feature is designed to be intuitive, efficient, and responsive, minimizing friction so users can focus on what matters most.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
        )
    },
    {
        title: "Responsive Support",
        desc: "Whether it's onboarding or day-to-day queries, our dedicated support team ensures users feel heard and helped at every stage.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
        )
    },
    {
        title: "Continuous Improvement",
        desc: "We evolve with user feedback, industry trends, and tech advancements—because your success drives ours.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    }
];

const CustomerCentric: React.FC = () => {
    return (
        <section className="py-24 bg-[#F8FAFF]">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
                        <span className="text-blue-600">Customer-Centric</span> Approach
                    </h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto">
                        Putting our users at the heart of every decision, we design solutions that truly serve, simplify, and support their hiring journey.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {points.map((point, index) => (
                        <motion.div
                            key={point.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[2rem] border border-neutral-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all"
                        >
                            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-6">
                                {point.icon}
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-3">{point.title}</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">
                                {point.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20">
                        Connect Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomerCentric;
