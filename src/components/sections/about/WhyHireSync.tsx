import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { StickyHeading } from '../../ui/StickyHeading';

const WhyHireSync: React.FC = () => {
    return (
        <section className="pt-4 pb-12  relative font-sans">
            {/* Dynamic Animated Background Gradients */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 40, -20, 0],
                        y: [0, -30, 40, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-blue-400/10 blur-[70px] rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, -50, 30, 0],
                        y: [0, 40, -20, 0],
                        scale: [1.1, 0.9, 1.1, 1.1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-purple-400/10 blur-[80px] rounded-full"
                />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <StickyHeading
                        badgeText="Why G A Hiresync"
                        title={[
                            "Recruitment Process Automation through an",
                            "AI-Powered Platform"
                        ]}
                        gradientWord="AI-Powered"
                        subtitle={
                            <>
                                Streamline your hiring process with our AI-driven platform. <br />
                                Find the perfect candidate, faster and more efficiently. <br />
                                Get started today!
                            </>
                        }
                    />
                </div>

                {/* Refined Bento Grid - 2:1 Top, 1:2 Bottom */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6 auto-rows-[minmax(180px,_auto)]">

                    {/* Bento Card 1: AI-Powered Hiring (Spans 2 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-[#FAFAFA] p-6 rounded-[2rem] border border-neutral-100 flex flex-col group hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all relative overflow-hidden"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 mb-6 mt-1 group-hover:scale-110 transition-transform">
                            <Icon icon="solar:magic-stick-3-bold" className="text-xl" />
                        </div>
                        <h3 className="text-xl font-medium text-neutral-900 mb-2 tracking-tight">AI-Powered Hiring</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed max-w-lg">
                            Let our AI screen resumes, rank candidates based on job descriptions, and draft personalized outreach emails in seconds.
                        </p>
                    </motion.div>

                    {/* Bento Card 2: Resume Intelligence (Spans 1 col) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-1 bg-[#FAFAFA] p-6 rounded-[2rem] border border-neutral-100 flex flex-col group hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all relative overflow-hidden"
                    >
                        <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-500 mb-6 mt-1 group-hover:scale-110 transition-transform">
                            <Icon icon="solar:file-text-bold" className="text-xl" />
                        </div>
                        <h3 className="text-xl font-medium text-neutral-900 mb-2 tracking-tight">Resume Intelligence</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                            Automatically extract skills, experience, and contact info from any format.
                        </p>
                    </motion.div>

                    {/* Bento Card 3: Collaborative Workflow (Spans 1 col) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-1 bg-[#FAFAFA] p-6 rounded-[2rem] border border-neutral-100 flex flex-col group hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all relative overflow-hidden"
                    >
                        <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-500 mb-6 mt-1 group-hover:scale-110 transition-transform">
                            <Icon icon="solar:users-group-rounded-bold" className="text-xl" />
                        </div>
                        <h3 className="text-xl font-medium text-neutral-900 mb-2 tracking-tight">Collaborative Workflow</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                            Share candidate profiles with clients or hiring managers via secure, trackable links.
                        </p>
                    </motion.div>

                    {/* Bento Card 4: Advanced Analytics (Spans 2 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2 bg-[#FAFAFA] p-6 rounded-[2rem] border border-neutral-100 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between group hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all relative overflow-hidden gap-6"
                    >
                        <div className="flex-1 w-full z-10">
                            <div className="w-12 h-12 bg-neutral-200/60 rounded-2xl flex items-center justify-center text-neutral-600 mb-6 mt-1 group-hover:scale-110 transition-transform">
                                <Icon icon="solar:chart-2-bold" className="text-xl" />
                            </div>
                            <h3 className="text-xl font-medium text-neutral-900 mb-2 tracking-tight">Advanced Analytics</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">
                                Track time-to-hire, source quality, and team performance with beautiful, exportable dashboards built for agencies.
                            </p>
                        </div>

                        {/* CSS Graphic for Chart */}
                        <div className="flex-1 w-full min-h-[140px] relative z-0 flex items-end justify-end">
                            <div className="w-[240px] h-[140px] bg-white rounded-xl shadow-sm border border-neutral-100 flex items-end px-5 py-5 gap-2 group-hover:-translate-y-2 transition-transform duration-500 sm:translate-y-0 translate-y-4">
                                {/* Bar 1 */}
                                <motion.div
                                    initial={{ height: "0%" }} whileInView={{ height: "40%" }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} viewport={{ once: true }}
                                    className="flex-1 w-full bg-blue-100 rounded-t-sm origin-bottom"
                                />
                                {/* Bar 2 */}
                                <motion.div
                                    initial={{ height: "0%" }} whileInView={{ height: "60%" }} transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }} viewport={{ once: true }}
                                    className="flex-1 w-full bg-blue-300 rounded-t-sm origin-bottom"
                                />
                                {/* Bar 3 */}
                                <motion.div
                                    initial={{ height: "0%" }} whileInView={{ height: "30%" }} transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }} viewport={{ once: true }}
                                    className="flex-1 w-full bg-blue-200 rounded-t-sm origin-bottom"
                                />
                                {/* Bar 4 */}
                                <motion.div
                                    initial={{ height: "0%" }} whileInView={{ height: "80%" }} transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }} viewport={{ once: true }}
                                    className="flex-1 w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm origin-bottom shadow-lg shadow-blue-500/20"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyHireSync;
