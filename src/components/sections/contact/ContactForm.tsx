import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { MagneticWrapper } from '../../ui';

const ContactForm: React.FC = () => {
    return (
        <section className="py-20 relative">
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/3 flex flex-col gap-10"
                    >
                        <div>
                            <h3 className="text-2xl font-medium text-neutral-900 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-0.5">
                                        <Icon icon="solar:letter-bold" className="text-blue-500 text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-neutral-900 mb-1">Customer Support</p>
                                        <a href="mailto:Support@gahiresync.com" className="text-sm text-neutral-500 hover:text-blue-600 transition-colors">Support@gahiresync.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-1 pb-0.5">
                                        <Icon icon="solar:bag-bold" className="text-purple-500 text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-neutral-900 mb-1">Sales Inquiries</p>
                                        <a href="mailto:sales@gahiresync.com" className="text-sm text-neutral-500 hover:text-purple-600 transition-colors">sales@gahiresync.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center flex-shrink-0 mt-1 pb-0.5">
                                        <Icon icon="solar:users-group-rounded-bold" className="text-cyan-500 text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-neutral-900 mb-1">Partnerships</p>
                                        <a href="mailto:info@gahiresync.com" className="text-sm text-neutral-500 hover:text-cyan-600 transition-colors">info@gahiresync.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-neutral-900 mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <MagneticWrapper strength={0.3}>
                                    <a href="https://www.linkedin.com/company/106440537" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-neutral-50 transition-all">
                                        <Icon icon="bi:linkedin" className="text-xl" />
                                    </a>
                                </MagneticWrapper>
                                <MagneticWrapper strength={0.3}>
                                    <a href="https://x.com/hiresyncga" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black hover:bg-neutral-50 transition-all">
                                        <Icon icon="bi:twitter-x" className="text-xl" />
                                    </a>
                                </MagneticWrapper>
                                <MagneticWrapper strength={0.3}>
                                    <a href="https://www.facebook.com/profile.php?id=61574646366813" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-neutral-50 transition-all">
                                        <Icon icon="ic:baseline-facebook" className="text-2xl" />
                                    </a>
                                </MagneticWrapper>
                                <MagneticWrapper strength={0.3}>
                                    <a href="https://www.instagram.com/gahiresync/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-[#E4405F] hover:border-[#E4405F] hover:bg-neutral-50 transition-all">
                                        <Icon icon="bi:instagram" className="text-xl" />
                                    </a>
                                </MagneticWrapper>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-2/3 bg-[#FAFAFA] rounded-[32px] p-8 md:p-12 border border-neutral-100"
                    >
                        <h2 className="text-3xl font-medium text-neutral-900 mb-8 tracking-tight">We are here to help you out</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-700">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-700">Email Address</label>
                                    <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-700">Phone Number</label>
                                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-700">Organization Name</label>
                                <input type="text" placeholder="Acme Corp" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-700">How can we help?</label>
                                <textarea rows={4} placeholder="Describe your requirements or questions..." className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"></textarea>
                            </div>

                            <button type="button" className="w-full py-4 rounded-xl bg-[#171717] text-white font-bold text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/10">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
