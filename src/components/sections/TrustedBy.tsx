import React from 'react';
import { motion } from 'framer-motion';
import { StickyHeading } from '../ui/StickyHeading';

const TrustedBy: React.FC = () => {
    // These would ideally be real logo SVGs from the design
    const clients = [
        "Goldman Sachs", "Google", "Amazon", "Microsoft", "Meta", "Netflix",
        "Tesla", "SpaceX", "Apple", "Adobe", "Salesforce", "Oracle"
    ];

    return (
        <section className="py-24">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <StickyHeading
                        badgeText="Trusted By"
                        title={[
                            "Powering high-growth",
                            "teams worldwide"
                        ]}
                        gradientWord="high-growth"
                        subtitle={
                            <>
                                Join industry leaders who trust GA HireSync to build their teams. <br />
                                Experience the future of recruitment today.
                            </>
                        }
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-16 items-center justify-items-center opacity-40 grayscale">
                        {clients.map((client, index) => (
                            <motion.div
                                key={client}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ opacity: 1, filter: "grayscale(0%)", scale: 1.05 }}
                                className="text-xl md:text-2xl font-bold tracking-tighter text-neutral-400 cursor-default select-none uppercase hover:text-neutral-900 transition-all duration-300"
                            >
                                {client}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
