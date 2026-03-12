import React from 'react';
import { motion } from 'framer-motion';
import { StickyHeading } from '../ui/StickyHeading';

// Fallback to text labels instead of image imports since the image folder does not yet exist.
// This prevents Vite from throwing build errors on missing static assets.
const rawLogos = [
    { label: "GA Consulting Services" },
    { label: "GA Digital Solutions" },
    { label: "GA LMS" },
    { label: "Hiresync" },
    { label: "Infynix" },
    { label: "1Bridge" },
    { label: "Infosage" },
    { label: "Corporate Finco" },
];

const LogoItem = ({ item }: { item: { label: string } }) => (
    <div style={{
        width: '260px',
        height: '108px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRight: '1px solid #E5E7EB',
        backgroundColor: 'transparent',
        transition: 'box-shadow 0.2s',
        cursor: 'default',
        flexShrink: 0
    }}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'inset 0 0 20px rgba(0,0,0,0.02)'}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
    >
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: '20px'
        }}>
            <span className="text-xl font-bold tracking-tighter text-neutral-400 text-center uppercase leading-tight uppercase hover:text-neutral-900 transition-colors duration-300">
                {item.label}
            </span>
        </div>
    </div>
);

const LogoRow = ({ logos, speed }: { logos: { label: string }[], speed: number }) => {
    // Duplicate logos enough times to fill width + buffer for loop
    const rowLogos = [...logos, ...logos];

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            overflow: 'hidden',
            borderBottom: '1px solid #E5E7EB',
            position: 'relative'
        }}>
            <motion.div
                style={{
                    display: 'flex',
                    width: 'max-content',
                }}
                animate={{
                    x: ['0%', '-50%']
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity
                }}
            >
                {rowLogos.map((item, index) => (
                    <LogoItem key={index} item={item} />
                ))}
            </motion.div>
        </div>
    );
};

const TrustedBy: React.FC = () => {
    // 8 Actual logos -> Repeated to fill the marquee
    // Create a larger array for the marquee (Repeat rawLogos 4 times = 32 items)
    const logos = [...rawLogos, ...rawLogos, ...rawLogos, ...rawLogos];

    return (
        <section className="py-24 pb-48 flex flex-col justify-center">
            <div className="max-w-[1440px] mx-auto px-6 w-full mb-8">
                <div className="flex flex-col items-center">
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
                </div>
            </div>

            <div className="-mt-16 md:-mt-32 relative z-10" style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '1200px',
                margin: '0 auto',
                borderTop: '1px solid #E5E7EB',
                borderLeft: '1px solid #E5E7EB',
                background: 'transparent',
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}>
                {/* Row 1 */}
                <LogoRow logos={logos} speed={80} />

                {/* Row 2 */}
                <LogoRow logos={logos} speed={70} />

                {/* Row 3 */}
                <LogoRow logos={logos} speed={90} />
            </div>
        </section>
    );
};

export default TrustedBy;
