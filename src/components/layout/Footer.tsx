import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import FooterLogo from '../../assets/Logo/footer logo.svg';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#071C50] pt-[50px] text-white">
            {/* Top Section */}
            <div className="flex flex-col items-center mb-[60px] text-center px-6" id="footer-top">
                <h2 className="text-[32px] lg:text-[48px] font-semibold mb-4 text-white leading-tight flex flex-col items-center">
                    <span>Ready to Transform</span>
                    <span>
                        the Way You <span className="text-gradient bg-clip-text text-transparent italic">Hire.</span>
                    </span>
                </h2>
                <p className="text-white/60 text-base md:text-lg max-w-2xl mb-10 font-light leading-relaxed">
                    Join hundreds of recruiting teams who’ve cut time-to-hire, reduced drop-offs, and built stronger pipelines with GA HireSync.
                </p>

                <div className="pb-[60px]">
                    <button className="flex items-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-bold text-[#071C50] uppercase tracking-widest transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
                        Get Started <Icon icon="solar:alt-arrow-right-linear" className="text-lg" />
                    </button>
                </div>

                <div className="w-[84%] border-b-2 border-white/20" />
            </div>

            {/* Middle Section */}
            <div className="flex flex-col lg:flex-row gap-[10vw] lg:gap-[13vw] pb-[10vh] px-[8vw] justify-between">
                {/* Logo + Social */}
                <div className="flex flex-col items-center lg:items-start shrink-0">
                    <img
                        src={FooterLogo}
                        alt="Hire Sync Logo"
                        className="mb-4 shrink-0 h-12 md:h-16 w-auto"
                    />

                    <div className="flex gap-[15px] cursor-pointer">
                        <Icon icon="hugeicons:new-twitter" className="h-8 w-8 text-white hover:text-white/80 transition-colors" />
                        <Icon icon="ri:linkedin-fill" className="h-8 w-8 text-white hover:text-white/80 transition-colors" />
                        <Icon icon="ri:facebook-fill" className="h-8 w-8 text-white hover:text-white/80 transition-colors" />
                        <Icon icon="ri:instagram-line" className="h-8 w-8 text-white hover:text-white/80 transition-colors" />
                    </div>
                </div>

                {/* Menu */}
                <div className="mt-[40px] lg:mt-0 flex flex-col md:flex-row flex-wrap gap-y-10 md:gap-x-[10vw] lg:gap-x-[5vw] xl:gap-x-[8vw]">
                    {/* Column 1 - Features */}
                    <div className="flex flex-col">
                        <span className="text-base font-medium">Features</span>
                        <div className="mt-[25px] flex flex-col gap-[20px] text-sm font-light text-white/80">
                            <Link to="/features/ai-recruitment-tools" className="hover:text-white transition-colors">AI Recruitment</Link>
                            <Link to="/features/candidate-intelligence" className="hover:text-white transition-colors">Candidate Intel</Link>
                            <Link to="/features/recruiter-insights" className="hover:text-white transition-colors">Hiring Insights</Link>
                            <Link to="/features/job-post-negotiations" className="hover:text-white transition-colors">Offer Management</Link>
                        </div>
                    </div>



                    {/* Column 3 - Resource */}
                    <div className="flex flex-col">
                        <span className="text-base font-medium">Resource</span>
                        <div className="mt-[25px] flex flex-col gap-[20px] text-sm font-light text-white/80 cursor-pointer">
                            <Link to="/faqs" className="hover:text-white transition-colors">FAQs</Link>
                            <span>Use Cases</span>
                            <span>Job Board</span>
                        </div>
                    </div>

                    {/* Column 4 - Company */}
                    <div className="flex flex-col">
                        <span className="text-base font-medium">Company</span>
                        <div className="mt-[25px] flex flex-col gap-[20px] text-sm font-light text-white/80 cursor-pointer">
                            <Link to="/about" className="hover:text-white transition-colors">About</Link>
                            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                            <Link to="/contact-us" className="hover:text-white transition-colors">Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="px-[8vw]">
                <div className="mb-[30px] border-b-2 border-white/20 pb-[30px] text-sm font-medium flex items-center">
                    <Icon icon="solar:global-linear" className="mr-2 text-lg" />
                    English
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-4 pb-[30px] text-xs text-[#FAF4EE]">
                    <span>© Copyright 2026. All Rights Reserved.</span>

                    <div className="flex flex-wrap gap-[20px] text-white/70">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
                        <Link to="/cancellation-policy" className="hover:text-white transition-colors">Cancellation Policy</Link>
                        <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
