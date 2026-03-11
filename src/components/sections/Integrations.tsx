import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { StickyHeading, MagneticWrapper } from '../ui';

const integrations = [
    { name: 'WhatsApp', icon: 'logos:whatsapp-icon', color: '#25D366', live: true },
    { name: 'SMS', icon: 'solar:chat-square-like-bold', color: '#6366F1', live: true },
    { name: 'LinkedIn', icon: 'logos:linkedin-icon', color: '#0077B5', live: false },
    { name: 'Gmail', icon: 'logos:google-gmail', color: '#EA4335', live: false },
    { name: 'Zoom', icon: 'logos:zoom-icon', color: '#2D8CFF', live: false },
    { name: 'Teams', icon: 'logos:microsoft-teams', color: '#6264A7', live: false },
    { name: 'Trello', icon: 'logos:trello', color: '#0079BF', live: false },
    { name: 'Jira', icon: 'logos:jira', color: '#0052CC', live: false },
];

const Integrations: React.FC = () => {
    return (
        <section className="py-12  relative">
            {/* Background elements container with overflow-hidden */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Moving Circle Background */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-100/30 rounded-full pointer-events-none"
                />

                {/* Added Creative Atmosphere Blobs */}
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-br from-blue-50/20 to-transparent blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-purple-50/20 to-transparent blur-[120px] -z-10" />
            </div>
            <div className="max-w-[1440px] mx-auto px-6 text-center">
                <StickyHeading
                    badgeText="Ecosystem"
                    title={["Seamlessly Integrated with", "Your Favorite Tools"]}
                    gradientWord="Favorite Tools"
                    subtitle="GA HireSync lives where you work. Connect with the tools your team already loves."
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-8 relative z-30">
                    {integrations.map((item, idx) => (
                        <MagneticWrapper key={idx} strength={item.live ? 0.2 : 0}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className={`relative group bg-white p-8 rounded-3xl border flex flex-col items-center justify-center gap-4 transition-all duration-300 overflow-hidden
                                    ${item.live
                                        ? 'border-neutral-100 hover:shadow-xl hover:border-blue-100/50'
                                        : 'border-neutral-100/60 cursor-not-allowed'
                                    }`}
                            >
                                {/* Coming Soon overlay */}
                                {!item.live && (
                                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/50 backdrop-blur-[3px] rounded-3xl">
                                        <span className="px-2.5 py-1 rounded-full bg-neutral-900/5 border border-neutral-200/80 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                                            Coming Soon
                                        </span>
                                    </div>
                                )}

                                <div className={`w-16 h-16 flex items-center justify-center transition-all duration-300 ${item.live ? 'grayscale-0' : 'grayscale opacity-40'}`}>
                                    <Icon icon={item.icon} className="text-4xl" style={!item.live ? undefined : { color: item.color }} />
                                </div>
                                <span className={`text-xs font-bold uppercase tracking-tighter transition-colors ${item.live ? 'text-neutral-700 group-hover:text-neutral-900' : 'text-neutral-300'}`}>
                                    {item.name}
                                </span>

                                {/* Live badge for active integrations */}
                                {item.live && (
                                    <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 border border-green-100 text-[9px] font-bold text-green-600 uppercase tracking-widest">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        Live
                                    </span>
                                )}
                            </motion.div>
                        </MagneticWrapper>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Integrations;

