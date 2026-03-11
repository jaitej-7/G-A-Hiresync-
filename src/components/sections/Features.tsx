import React from 'react';
import { StickyHeading, FeatureCard } from '../ui';

// Importing SVG Assets
import JDGenImg from '../../assets/Features/AI recuriter tool/Ai JOb descrptiodescription Generator.svg';
import SummeryPopupImg from '../../assets/Features/AI recuriter tool/Summery popup.svg';
import CandProfileImg from '../../assets/Features/Candidate intelligence/Candidate Profile.svg';
import ResumeBankImg from '../../assets/Features/Candidate intelligence/Resume Bnk.svg';

const Features: React.FC = () => {
    return (
        <section className="pt-4 relative overflow-clip">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="mb-0">
                    <StickyHeading
                        badgeText="Features"
                        title={["Next-Gen Recruitment", "AI Tooling"]}
                        gradientWord="AI Tooling"
                        subtitle="Supercharge your workflow with tools designed for high-performance agencies."
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Block 1: AI Recruiter Tooling */}
                    <FeatureCard
                        tags={["AI Powered", "Productivity"]}
                        title="AI Job Description Generator"
                        description="Craft perfect job descriptions in seconds using our advanced AI models tailored for your specific industry needs."
                        image={JDGenImg}
                        className="md:col-span-1"
                    />

                    <FeatureCard
                        tags={["Workflow", "Automation"]}
                        title="Summary Popups"
                        description="Get instant insights into candidate profiles without leaving your dashboard. Quick summaries for faster decision making."
                        image={SummeryPopupImg}
                        className="md:col-span-1"
                    />

                    {/* Block 2: Candidate Intelligence */}
                    <FeatureCard
                        tags={["Intelligence", "Analysis"]}
                        title="Comprehensive Candidate Profiles"
                        description="Deconstruct resumes into data-rich profiles. Automated skill extraction and experience mapping for every applicant."
                        image={CandProfileImg}
                        className="md:col-span-1"
                    />

                    <FeatureCard
                        tags={["Database", "Organization"]}
                        title="Smart Resume Bank"
                        description="Your private, searchable vault of candidate talent. Organize and retrieve resumes with powerful AI-driven search."
                        image={ResumeBankImg}
                        className="md:col-span-1"
                    />
                </div>
            </div>

            {/* Subtle Background Elements */}
            <div className="absolute top-1/4 -right-64 w-128 h-128 bg-blue-50/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -left-64 w-128 h-128 bg-purple-50/20 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default Features;
