import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const AboutStory: React.FC = () => {
    return (
        <section className="py-24 relative">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    
                    {/* Left Side: Sticky Heading */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32 lg:h-fit">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col"
                        >
                            <span className="text-brand-purple font-semibold tracking-wider uppercase text-sm mb-4">Our History</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple animate-gradient-text">Story</span>
                            </h2>
                            <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mt-6" />
                        </motion.div>
                    </div>

                    {/* Right Side: Scrollable Content Vertical Stack */}
                    <div className="lg:w-2/3 flex flex-col gap-16">
                        {/* The Story Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-neutral-900">
                                Built for Recruiters, Perfected by Engineers
                            </h3>
                            <div className="space-y-4 text-neutral-600 leading-relaxed text-sm md:text-base">
                                <p>
                                    At GA Consulting, we've lived the chaos of recruitment firsthand—juggling multiple roles for multiple clients, tracking endless job descriptions, and ensuring every candidate matched the right opportunity. The process was overwhelming, and we knew there had to be a better way.
                                </p>
                                <p>
                                    That's why we built GA HireSync—not as just another hiring tool, but as a game-changer for recruiters. Unlike platforms created by engineers with no recruitment experience, GA HireSync was born out of our own struggles. Our recruiters outlined the problems, and our engineers ensured the technology worked seamlessly to solve them.
                                </p>
                                <p>
                                    The result? A platform that mentions every detail, streamlines hiring, and lets recruiters focus on what truly matters—finding the perfect talent. No more sifting through spreadsheets or losing track of job requirements.
                                </p>
                                <p className="font-medium text-neutral-900 italic text-lg border-l-4 border-brand-purple pl-6 py-2 bg-neutral-50 rounded-r-xl">
                                    "Recruitment should be about people, not paperwork. With GA HireSync, it finally is."
                                </p>
                            </div>
                        </motion.div>

                        {/* Mission & Vision Stacked Vertically */}
                        <div className="flex flex-col gap-8">
                            {/* Mission Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-neutral-50 p-8 md:p-10 rounded-[32px] border border-neutral-100 hover:border-brand-blue/30 transition-all group"
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    <div className="w-16 h-16  rounded-2xl flex items-center justify-center shadow-sm shrink-0 group-hover:bg-brand-blue transition-colors duration-500">
                                        <Icon icon="solar:target-bold-duotone" className="text-3xl text-brand-blue group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h3>
                                        <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                                            At GA HireSync, our mission is to empower recruiters with intelligent, seamless, and efficient hiring solutions. We strive to eliminate the complexities of recruitment by integrating technology that ensures recruiters can focus on what truly matters—connecting the right talent with the right opportunities.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Vision Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-neutral-50 p-8 md:p-10 rounded-[32px] border border-neutral-100 hover:border-brand-purple/30 transition-all group"
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0 group-hover:bg-brand-purple transition-colors duration-500">
                                        <Icon icon="solar:eye-bold-duotone" className="text-3xl text-brand-purple group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Vision</h3>
                                        <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                                            We envision a future where hiring is effortless, data-driven, and human-centric. GA HireSync aims to be the go-to recruitment platform, revolutionizing the industry by bridging the gap between AI-driven efficiency and recruiter intuition, making every hire smarter and faster.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
