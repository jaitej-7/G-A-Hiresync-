import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Logo from '../../assets/Logo/logo.svg';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#071C50] pt-[50px] text-white">
            {/* Top Section */}
            <div className="flex flex-col items-center text-[32px] lg:text-[48px] font-semibold mb-[60px] text-center">
                <span>Work Easy</span>
                <span>
                    Grow Further with{" "}
                    <span className="text-[#F46EBE]">Hire Sync</span>
                </span>

                <div className="pb-[80px] mt-5">
                    <button className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm text-black transition-colors hover:bg-gray-200">
                        Request a demo <Icon icon="solar:alt-arrow-right-linear" />
                    </button>
                </div>

                <div className="w-[84%] border-b-2 border-white/20" />
            </div>

            {/* Middle Section */}
            <div className="flex flex-col lg:flex-row gap-[10vw] lg:gap-[30vw] pb-[10vh] px-[4vw]">
                {/* Logo + Social */}
                <div className="flex flex-col items-center">
                    <img
                        src={Logo}
                        alt="Hire Sync Logo"
                        className="mb-4 shrink-0 h-10 md:h-12 w-auto"
                    />

                    <div className="flex gap-[15px] cursor-pointer">
                        <Icon icon="hugeicons:new-twitter" className="h-8 w-8 text-white hover:text-white/80" />
                        <Icon icon="ri:linkedin-fill" className="h-8 w-8 text-white hover:text-white/80" />
                        <Icon icon="ri:facebook-fill" className="h-8 w-8 text-white hover:text-white/80" />
                        <Icon icon="ri:instagram-line" className="h-8 w-8 text-white hover:text-white/80" />
                    </div>
                </div>

                {/* Menu */}
                <div className="mt-[40px] flex flex-col md:flex-row md:gap-[16vw] md:pl-[8vw] lg:flex-row lg:gap-[8vw] pr-[10vw]">
                    {/* Column 1 */}
                    <div className="flex flex-col">
                        <span className="text-base font-medium">
                            How it works
                        </span>
                        <div className="mt-[25px] flex flex-col gap-[20px] text-sm font-light text-white/80 cursor-pointer">
                            <span>For Agencies</span>
                            <span>For Recruiter</span>
                            <span>For Organization</span>
                            <span>For Candidates</span>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col">
                        <span className="text-base font-medium">Resource</span>
                        <div className="mt-[25px] flex flex-col gap-[20px] text-sm font-light text-white/80 cursor-pointer">
                            <span>Pricing</span>
                            <span>FAQs</span>
                            <span>Use Cases</span>
                            <span>Job Board</span>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col">
                        <span className="text-base font-medium">Company</span>
                        <div className="mt-[25px] flex flex-col gap-[20px] text-sm font-light text-white/80 cursor-pointer">
                            <span>About</span>
                            <span>Contact us</span>
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
