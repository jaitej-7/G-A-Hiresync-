import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const team = [
    {
        name: "Chris Garcia",
        role: "DevOps Engineer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3744&auto=format&fit=crop",
    },
    {
        name: "Sarah Chen",
        role: "Lead Architect",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3744&auto=format&fit=crop",
    },
    {
        name: "Marcus Johnson",
        role: "Product Strategy",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3744&auto=format&fit=crop",
    }
];

const AboutTeam: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const next = () => setCurrentIndex((prev) => (prev + 1) % team.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);

    return (
        <section className="py-24">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
                        Meet the <span className="text-blue-600">Minds</span> Behind the Innovation
                    </h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto">
                        Learn more about the experts driving GA HireSync's development. A team dedicated to delivering reliable and forward-thinking recruitment solutions.
                    </p>
                </motion.div>

                <div className="relative flex items-center justify-center h-[500px]">
                    <div className="relative w-full max-w-4xl flex items-center justify-center">
                        <AnimatePresence mode="popLayout">
                            {team.map((member, index) => {
                                const isCenter = index === currentIndex;
                                const isLeft = index === (currentIndex - 1 + team.length) % team.length;
                                const isRight = index === (currentIndex + 1) % team.length;

                                if (!isCenter && !isLeft && !isRight) return null;

                                return (
                                    <motion.div
                                        key={member.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{
                                            opacity: isCenter ? 1 : 0.4,
                                            scale: isCenter ? 1 : 0.8,
                                            x: isCenter ? 0 : isLeft ? -250 : 250,
                                            zIndex: isCenter ? 20 : 10,
                                            filter: isCenter ? 'grayscale(0%)' : 'grayscale(100%)'
                                        }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute w-[300px] group cursor-pointer"
                                        onClick={() => setCurrentIndex(index)}
                                    >
                                        <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                                <h4 className="text-xl font-bold">{member.name}</h4>
                                                <p className="text-sm text-neutral-300">{member.role}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    <div className="absolute bottom-0 flex gap-4">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 hover:border-neutral-900 transition-all group"
                        >
                            <svg className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 hover:border-neutral-900 transition-all group"
                        >
                            <svg className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;
