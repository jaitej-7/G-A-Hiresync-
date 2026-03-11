import React from 'react';
import { motion } from 'framer-motion';

const AboutCapabilities: React.FC = () => {
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
                        You can do it all <br />
                        With <span className="text-blue-600">HireSync</span>
                    </h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto">
                        From posting jobs to selecting top candidates, managing tasks, and scheduling interviews, all in one seamless workflow.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* AI Powered Matching */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className=" p-8 rounded-[40px] border border-neutral-100 shadow-sm flex flex-col gap-8 h-full"
                    >
                        <div className="bg-blue-50/50 rounded-3xl p-10 flex items-center justify-center min-h-[240px]">
                            {/* Visual representation placeholder */}
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
                                </div>
                                <div className="w-4 h-0.5 bg-neutral-200" />
                                <div className="w-20 h-20 bg-blue-500 rounded-full shadow-xl shadow-blue-500/20 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className="w-4 h-0.5 bg-neutral-200" />
                                <div className="w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center opacity-50">
                                    <div className="w-8 h-8 bg-neutral-100 rounded-full" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-neutral-800 mb-3">AI-Powered Matching</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">
                                Precisely matches candidates to job postings based on skills and experience.
                            </p>
                        </div>
                    </motion.div>

                    {/* Integrated Work Flow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-[40px] border border-neutral-100 shadow-sm flex flex-col gap-8 h-full"
                    >
                        <div className="bg-blue-50/50 rounded-3xl p-8 flex flex-col gap-4 min-h-[240px] justify-center">
                            <div className="flex justify-between gap-4">
                                <div className="flex-1 p-3 rounded-xl shadow-sm border border-neutral-100">
                                    <div className="h-2 w-12 bg-blue-100 rounded mb-2" />
                                    <div className="h-2 w-full bg-neutral-50 rounded" />
                                </div>
                                <div className="flex-1 p-3 rounded-xl shadow-sm border border-neutral-100">
                                    <div className="h-2 w-12 bg-blue-100 rounded mb-2" />
                                    <div className="h-2 w-full bg-neutral-50 rounded" />
                                </div>
                            </div>
                            <div className="flex items-center gap-2 px-2">
                                <div className="w-4 h-4 rounded-full bg-blue-500 flex-shrink-0" />
                                <div className="h-1 flex-1 bg-blue-100 rounded-full" />
                                <div className="w-4 h-4 rounded-full border-2 border-blue-500 flex-shrink-0" />
                                <div className="h-1 flex-1 bg-neutral-100 rounded-full" />
                                <div className="w-4 h-4 rounded-full bg-neutral-100 flex-shrink-0" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-neutral-800 mb-3">Integrated Work Flow</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">
                                Includes interview scheduling, recruiter task management, and feedback collection.
                            </p>
                        </div>
                    </motion.div>

                    {/* Advanced Privacy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-[40px] border border-neutral-100 shadow-sm flex flex-col gap-8 h-full"
                    >
                        <div className="bg-blue-50/50 rounded-3xl p-10 flex items-center justify-center min-h-[240px]">
                            <div className="relative">
                                <div className="w-32 h-32 bg-blue-500 rounded-[2rem] flex items-center justify-center shadow-xl shadow-blue-500/30">
                                    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute inset-0 bg-blue-500/20 rounded-[2.5rem] -z-10 blur-xl"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-neutral-800 mb-3">Advanced Privacy & Compliance</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">
                                Email proxying, personal contact redaction, and fraud detection ensure legal and ethical hiring practices.
                            </p>
                        </div>
                    </motion.div>

                    {/* Gamified Experience */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-8 rounded-[40px] border border-neutral-100 shadow-sm flex flex-col gap-8 h-full"
                    >
                        <div className="bg-blue-50/50 rounded-3xl p-10 flex items-center justify-center min-h-[240px] gap-3">
                            {[1, 2, 3, 4].map(i => (
                                <motion.div
                                    key={i}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                                    className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
                                >
                                    <div className={`w-6 h-6 rounded ${i % 2 === 0 ? 'bg-blue-500' : 'bg-blue-100'}`} />
                                </motion.div>
                            ))}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-neutral-800 mb-3">Gamified Experience</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">
                                Precisely matches candidates to job postings based on skills and experience.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutCapabilities;
