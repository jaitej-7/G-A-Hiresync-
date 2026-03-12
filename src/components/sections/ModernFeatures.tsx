import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { ModernFeatureCard } from '../ui/ModernFeatureCard';
import { StickyHeading } from '../ui/StickyHeading';

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

                        <button className="group relative px-8 py-4 rounded-xl bg-[#171717] text-white font-bold text-xs uppercase tracking-widest transition-all hover:bg-neutral-800 hover:shadow-2xl active:scale-95 space-x-2">
                            <span>Get Started</span>
                            <span className="opacity-50 group-hover:opacity-100 transition-opacity">→</span>
                        </button>
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
            bodyText: 'Generate perfectly structured, high-converting job descriptions in seconds using models trained on successful hiring patterns across industries.',
            image: JDGenImg
        },
        {
            id: '2',
            headerTitle: 'PROFILE SEARCH',
            heading: 'AI Profile Search',
            bodyText: 'Find the perfect match using natural language queries. Search your entire talent pool with AI that understands intent, not just keywords.',
            image: ContainerImg
        },
        {
            id: '3',
            headerTitle: 'SUMMARIZATION',
            heading: 'AI Job Post Summary',
            bodyText: 'Instantly distill lengthy job postings and resumes into sharp, actionable candidate summaries — highlighting skills, strengths, and gaps.',
            image: SummeryPopupImg
        },
        {
            id: '4',
            headerTitle: 'RESUME PARSING',
            heading: 'Resume Parsing',
            bodyText: 'Automatically extract structured data from any resume format. Skills, experience, education, and contact details parsed with AI precision.',
            image: ResumeParsingImg
        },
        {
            id: '5',
            headerTitle: 'JD PARSING',
            heading: 'Job Description Parsing',
            bodyText: 'Decode complex JDs into structured requirements — automatically identifying must-have skills, experience levels, and role expectations.',
            image: JDParsingImg
        },
    ];

    const block2Items = [
        {
            id: '6',
            headerTitle: 'RESUME BANK',
            heading: 'Resume Bank',
            bodyText: 'Centralize resumes from all sources into a single, searchable database with automated deduplication and AI-powered indexing.',
            image: ResumeBankImg
        },
        {
            id: '7',
            headerTitle: 'CANDIDATE PROFILE',
            heading: 'Candidate Profile',
            bodyText: 'Maintain rich, structured candidate profiles with full interaction history, previous applications, and AI-extracted skill insights.',
            image: CandProfileImg
        },
        {
            id: '8',
            headerTitle: 'COMPARISON',
            heading: 'Resume Comparison',
            bodyText: 'Side-by-side AI comparison of multiple candidates — instantly surface the best match against your job requirements.',
            image: ResumeComparisonImg
        },
    ];

    const block3Items = [
        {
            id: '9',
            headerTitle: 'ANALYTICS',
            heading: 'Hiring Analytics',
            bodyText: 'Comprehensive dashboards that track time-to-hire, source quality, and pipeline performance across all your open roles.',
            image: HiringAnalyticsImg
        },
        {
            id: '10',
            headerTitle: 'PERFORMANCE',
            heading: 'Recruiter Performance',
            bodyText: 'Monitor individual recruiter productivity, placement rates, and activity metrics to keep your team performing at their best.',
            image: RecruiterPerformanceImg
        },
        {
            id: '11',
            headerTitle: 'FUNNEL',
            heading: 'Funnel Analysis',
            bodyText: 'Visualize candidate drop-off at every stage of your hiring funnel and identify bottlenecks with AI-powered recommendations.',
            image: FunnelAnalysisImg
        },
    ];

    const block4Items = [
        {
            id: '12',
            headerTitle: 'NEGOTIATIONS',
            heading: 'T&C Negotiations',
            bodyText: 'Streamline terms and conditions negotiation with structured workflows, version tracking, and real-time collaboration between all stakeholders.',
            image: TCNegotiationsImg
        },
        {
            id: '13',
            headerTitle: 'OFFER MANAGEMENT',
            heading: 'Offer Negotiations',
            bodyText: 'Manage the full offer lifecycle from initial package creation to final sign-off, with approval flows and counter-offer tracking.',
            image: JobPostNegotiationsImg
        },
    ];

    return (
        <div className="font-geist relative">
            <div className="max-w-[1440px] mx-auto px-6 w-full pt-24 flex flex-col items-center text-center">
                <StickyHeading
                    badgeText="Features"
                    title={["Platform Features that", "Power Your Hiring"]}
                    gradientWord="Features"
                    subtitle="Everything you need to find, evaluate, and hire top talent in one unified platform."
                />
            </div>

            <div className="-mt-16">
                <FeatureSection
                    badge="AI Tools"
                    title="AI Recruitment Tools"
                    description="Harness the power of generative AI to eliminate manual work and find high-quality talent faster than ever before."
                    items={block1Items}
                />

                <FeatureSection
                    badge="Intelligence"
                    title="Candidate Intelligence"
                    description="Turn unstructured resumes into a competitive advantage with automated parsing, deep profiling, and instant comparison tools."
                    items={block2Items}
                    reverse
                />

                <FeatureSection
                    badge="Insights"
                    title="Recruiter Insights"
                    description="Data-driven visibility into your entire hiring operation — track performance, analyse funnels, and make smarter decisions."
                    items={block3Items}
                />

                <FeatureSection
                    badge="Negotiations"
                    title="Job Post Negotiations"
                    description="Close more candidates faster with structured negotiation workflows for both terms and compensation, from first offer to final signature."
                    items={block4Items}
                    reverse
                />
            </div>
        </div>
    );
};

export default ModernFeatures;
