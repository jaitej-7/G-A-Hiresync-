import React from 'react';
import { motion } from 'framer-motion';
import LogoSvg from '../../../assets/Logo/logo.svg';

const AboutStory: React.FC = () => {
    return (
        <section className="py-24 overflow-clip">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">

                    {/* Logo on the LEFT side (replacing 3D cube) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative flex items-center justify-center"
                    >
                        <div className="relative flex items-center justify-center p-12 w-full">
                            {/* Glowing backdrop behind logo */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-purple-100/20 to-transparent rounded-3xl blur-2xl" />
                            <motion.img
                                src={LogoSvg}
                                alt="GA HireSync Logo"
                                animate={{
                                    y: [0, -12, 0],
                                    filter: [
                                        'drop-shadow(0 20px 60px rgba(86,168,253,0.3))',
                                        'drop-shadow(0 30px 80px rgba(161,106,254,0.4))',
                                        'drop-shadow(0 20px 60px rgba(86,168,253,0.3))',
                                    ]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="relative z-10 w-full max-w-[380px] h-auto"
                            />
                        </div>
                    </motion.div>

                    {/* Text content on the RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-6 leading-tight">
                            The Story Behind GA HireSync – Built for Recruiters, Perfected by Engineers
                        </h2>
                        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
                            <p>
                                At GA Consulting, we've lived the chaos of recruitment firsthand—juggling multiple roles for multiple clients, tracking endless job descriptions, and ensuring every candidate matched the right opportunity. The process was overwhelming, and we knew there had to be a better way.
                            </p>
                            <p>
                                That's why we built GA HireSync—not as just another hiring tool, but as a game-changer for recruiters. Unlike platforms created by engineers with no recruitment experience, GA HireSync was born out of our own struggles. Our recruiters outlined the problems, and our engineers ensured the technology worked seamlessly to solve them.
                            </p>
                            <p>
                                The result? A platform that mentions every detail, streamlines hiring, and lets recruiters focus on what truly matters—finding the perfect talent. No more sifting through spreadsheets or losing track of job requirements.
                            </p>
                            <p className="font-medium text-neutral-900 italic">
                                Recruitment should be about people, not paperwork. With GA HireSync, it finally is.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/60 backdrop-blur-sm p-10 rounded-3xl border border-blue-100/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
                    >
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-4">Our Mission</h3>
                        <p className="text-neutral-600 leading-relaxed text-sm">
                            At GA HireSync, our mission is to empower recruiters with intelligent, seamless, and efficient hiring solutions. We strive to eliminate the complexities of recruitment by integrating technology that ensures recruiters can focus on what truly matters—connecting the right talent with the right opportunities.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/60 backdrop-blur-sm p-10 rounded-3xl border border-blue-100/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
                    >
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-4">Our Vision</h3>
                        <p className="text-neutral-600 leading-relaxed text-sm">
                            We envision a future where hiring is effortless, data-driven, and human-centric. GA HireSync aims to be the go-to recruitment platform, revolutionizing the industry by bridging the gap between AI-driven efficiency and recruiter intuition, making every hire smarter and faster.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
