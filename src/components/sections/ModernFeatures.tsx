import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { ModernFeatureCard } from '../ui/ModernFeatureCard';
import { StickyHeading } from '../ui/StickyHeading';
import { Link } from 'react-router-dom';

// Importing SVG Assets
import JDGenImg from '../../assets/Features/AI recuriter tool/Ai JOb descrptiodescription Generator.svg';
import SummeryPopupImg from '../../assets/Features/AI recuriter tool/Summery popup.svg';
import ContainerImg from '../../assets/Features/AI recuriter tool/Container.svg';

import CandProfileImg from '../../assets/Features/Candidate intelligence/Candidate Profile.svg';
import ResumeBankImg from '../../assets/Features/Candidate intelligence/Resume Bnk.svg';
import ResumeComparisonImg from '../../assets/Features/Candidate intelligence/Resume Comparison.svg';
import ResumeParsingImg from '../../assets/Features/AI recuriter tool/Resume parshing.svg';
import JDParsingImg from '../../assets/Features/AI recuriter tool/jd parshing.svg';

import HiringAnalyticsImg from '../../assets/Features/Recuritement insights/hiring analytics.svg';
import RecruiterPerformanceImg from '../../assets/Features/Recuritement insights/Recuriter performace.svg';
import FunnelAnalysisImg from '../../assets/Features/Recuritement insights/Funnel Analysis.svg';

import TCNegotiationsImg from '../../assets/Features/negotiations/T&c negtiations.svg';
import JobPostNegotiationsImg from '../../assets/Features/negotiations/Job post negotiaons.svg';

interface FeatureItem {
    id: string;
    headerTitle: string;
    heading: string;
    bodyText: string;
    image: string;
}

interface FeatureSectionProps {
    badge: string;
    title: string;
    description: string;
    items: FeatureItem[];
    reverse?: boolean;
}

const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span className="relative inline-block mr-[0.25em] whitespace-nowrap">
            <span className="text-[#acacac] opacity-100">{children}</span>
            <motion.span style={{ opacity }} className="absolute left-0 top-0 text-gradient w-full h-full">
                {children}
            </motion.span>
        </span>
    );
};

const FeatureSection: React.FC<FeatureSectionProps> = ({ badge, title, description, items, reverse }) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });

    const words = title.split(" ");
    const totalWords = words.length;

    return (
        <section ref={sectionRef} className="py-24 md:py-32 relative">
            {/* Background Atmosphere - Moved to a separate container to not break sticky headings */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className={`absolute top-1/2 ${reverse ? 'left-0' : 'right-0'} -translate-y-1/2 w-[600px] h-[600px] bg-[#9D90F5]/20 blur-[120px] rounded-full`} />
            </div>

            <div className={`w-full max-w-[1440px] mx-auto px-6 lg:px-8 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-start justify-between gap-16 md:gap-16 relative z-10`}>

                {/* Sticky Heading Column */}
                <div className="w-full md:w-[35%] lg:w-[40%] md:sticky md:top-40 h-fit z-10 shrink-0">
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200/80 text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-6 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#9D90F5]"></span>
                            {badge}
                        </div>

                        <h2 className="text-[24px] md:text-[38px] font-medium leading-[1.05] text-[#171717] mb-8 tracking-tighter">
                            {words.map((word, i) => {
                                // Extend use actual scroll progress of the section
                                const start = (i / totalWords) * 0.9;
                                const end = start + (0.9 / totalWords);
                                return <Word key={i} progress={smoothProgress} range={[start, end]}>{word}</Word>;
                            })}
                        </h2>

                        <p className="text-lg text-neutral-500 max-w-md leading-relaxed mb-10 font-medium">
                            {description}
                        </p>

                        <Link to="/contact-us">
                            <button className="group relative px-8 py-4 rounded-xl bg-[#171717] text-white font-bold text-xs uppercase tracking-widest transition-all hover:bg-neutral-800 hover:shadow-2xl active:scale-95 space-x-2">
                                <span>Get Started</span>
                                <span className="opacity-50 group-hover:opacity-100 transition-opacity">→</span>
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Cards Column */}
                <div className="w-full md:w-[55%] max-w-[650px] flex flex-col gap-12 pb-32">
                    {items.map((item, index) => (
                        <ModernFeatureCard
                            key={item.id}
                            headerTitle={item.headerTitle}
                            heading={item.heading}
                            bodyText={item.bodyText}
                            image={item.image}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ModernFeatures: React.FC = () => {
    const block1Items = [
        {
            id: '1',
            headerTitle: 'AI RECRUITMENT',
            heading: 'Generative JD',
            bodyText: 'Describe the role in plain language and get a complete, structured job description ready to post — tailored to your industry and seniority level.',
            image: JDGenImg
        },
        {
            id: '2',
            headerTitle: 'PROFILE SEARCH',
            heading: 'AI Profile Search',
            bodyText: 'Forget Boolean strings. Just type what you’re looking for in plain English and let the AI surface the most relevant candidates from your entire talent pool.',
            image: ContainerImg
        },
        {
            id: '3',
            headerTitle: 'SUMMARIZATION',
            heading: 'AI Job Post Summary',
            bodyText: 'Get an end-to-end pulse on every job post. Our AI summarizes the entire lifecycle — from profiles sent and pending processing to final selections, rejections, and required replacements.',
            image: SummeryPopupImg
        },
        {
            id: '4',
            headerTitle: 'RESUME PARSING',
            heading: 'Resume Parsing',
            bodyText: 'Whether it’s a Word doc, PDF — GA HireSync reads it all and turns it into clean, structured candidate data automatically.',
            image: ResumeParsingImg
        },
        {
            id: '5',
            headerTitle: 'JD PARSING',
            heading: 'Job Description Parsing',
            bodyText: 'Feed in any job description and instantly get a breakdown of required skills, experience benchmarks, and role expectations — no manual tagging needed.',
            image: JDParsingImg
        },
    ];

    const block2Items = [
        {
            id: '6',
            headerTitle: 'RESUME BANK',
            heading: 'Resume Bank',
            bodyText: 'One searchable home for every resume you’ve ever received — automatically deduplicated, AI-indexed, and ready to search the moment a new role comes in.',
            image: ResumeBankImg
        },
        {
            id: '7',
            headerTitle: 'CANDIDATE PROFILE',
            heading: 'Candidate Profile',
            bodyText: 'Every touchpoint, application, and AI insight lives on a single candidate card — so any recruiter on your team can pick up right where you left off.',
            image: CandProfileImg
        },
        {
            id: '8',
            headerTitle: 'COMPARISON',
            heading: 'Resume Comparison',
            bodyText: 'Put your top candidates side by side and let AI score them against your job requirements — so the final shortlist is based on fit, not familiarity.',
            image: ResumeComparisonImg
        },
    ];

    const block3Items = [
        {
            id: '9',
            headerTitle: 'ANALYTICS',
            heading: 'Hiring Analytics',
            bodyText: 'From time-to-fill to offer acceptance rates, get the full picture of how your recruitment engine is performing — broken down by role, team, or time period.',
            image: HiringAnalyticsImg
        },
        {
            id: '10',
            headerTitle: 'PERFORMANCE',
            heading: 'Recruiter Performance',
            bodyText: 'See exactly how each recruiter is performing — calls made, profiles submitted, placements closed — and coach your team with real data behind you. A live ranking of recruiters by successful hires, candidate engagement, and interview conversions — celebrating top performers and keeping the whole team motivated.',
            image: RecruiterPerformanceImg
        },
        {
            id: '11',
            headerTitle: 'FUNNEL',
            heading: 'Funnel Analysis',
            bodyText: 'Spot where candidates are dropping out of your pipeline before you lose them. AI flags the weak points and suggests where to act first.',
            image: FunnelAnalysisImg
        },
    ];

    const block4Items = [
        {
            id: '12',
            headerTitle: 'NEGOTIATIONS',
            heading: 'Agency–Organization Terms & Conditions',
            bodyText: 'Agencies and organizations define and agree on employment terms — salary, benefits, joining date, and work conditions — in one structured, version-tracked thread.',
            image: TCNegotiationsImg
        },
        {
            id: '13',
            headerTitle: 'OFFER MANAGEMENT',
            heading: 'Job Post Changes & Client Negotiations',
            bodyText: 'Agency managers and clients can collaboratively revise job post details before going live. Every change — title, scope, salary, location — is recorded for full transparency.',
            image: JobPostNegotiationsImg
        },
    ];

    return (
        <div className="font-geist relative">
            <div className="max-w-[1440px] mx-auto px-6 w-full pt-24 flex flex-col items-center text-center">
                <StickyHeading
                    badgeText="Features"
                    title={["Platform Features", "Everything You Need to Hire Better, Faster."]}
                    gradientWord="Features"
                    subtitle="GA HireSync is more than an ATS. It’s a full recruitment intelligence suite built for agencies and in-house teams alike."
                />
            </div>

            <div className="-mt-16">
                <FeatureSection
                    badge="AI Tools"
                    title="AI Recruitment Tools"
                    description="Stop starting from scratch. Our generative AI handles the grunt work — writing JDs, surfacing candidates, and summarizing applications — so your team ships more hires with less effort."
                    items={block1Items}
                />

                <FeatureSection
                    badge="Intelligence"
                    title="Candidate Intelligence"
                    description="Your talent pool is one of your most valuable assets. GA HireSync makes sure every candidate in it is fully profiled, searchable, and ready to match the moment the right role opens up."
                    items={block2Items}
                    reverse
                />

                <FeatureSection
                    badge="Insights"
                    title="Recruiter Insights"
                    description="You can’t improve what you can’t measure. GA HireSync gives hiring leads full visibility into team performance, pipeline health, and where candidates are falling off — all in one place."
                    items={block3Items}
                />

                <FeatureSection
                    badge="Negotiations"
                    title="Job Post Negotiations"
                    description="The final stretch of any hire shouldn’t stall over back-and-forth emails. GA HireSync gives you structured, trackable workflows to move from verbal offer to signed contract without the chaos."
                    items={block4Items}
                    reverse
                />
            </div>
        </div>
    );
};

export default ModernFeatures;
