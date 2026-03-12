import React from 'react';
import AboutHero from '../components/sections/about/AboutHero';
import AboutStory from '../components/sections/about/AboutStory';
import { TrustedBy, WhyHireSync } from '../components/sections';

const AboutPage: React.FC = () => {
    return (
        <div className="relative z-10 flex flex-col min-h-screen">
            <AboutHero />
            <AboutStory />
            <TrustedBy />
            <WhyHireSync />
        </div>
    );
};

export default AboutPage;
