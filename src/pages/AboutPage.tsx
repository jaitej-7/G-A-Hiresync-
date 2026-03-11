import React from 'react';
import AboutHero from '../components/sections/about/AboutHero';
import AboutStory from '../components/sections/about/AboutStory';
import AboutStats from '../components/sections/about/AboutStats';

const AboutPage: React.FC = () => {
    return (
        <div className="relative z-10 flex flex-col min-h-screen">
            <AboutHero />
            <AboutStory />
            <AboutStats />
        </div>
    );
};

export default AboutPage;
