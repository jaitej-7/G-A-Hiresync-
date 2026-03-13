import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Logo from '../../assets/Logo/logo.svg';
import MegaMenu from './MegaMenu';

const Navbar: React.FC = () => {
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';
    const isContactPage = location.pathname === '/contact-us';
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // MegaMenu state
    const [activeMenu, setActiveMenu] = useState<'features' | 'useCases' | null>(null);
    const hoverTimeout = useRef<number | null>(null);

    const handleMouseEnter = (menu: 'features' | 'useCases' | null) => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        if (menu !== null) {
            setActiveMenu(menu);
        } else {
            setActiveMenu(null);
        }
    };

    const handleMouseLeave = () => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        hoverTimeout.current = window.setTimeout(() => {
            setActiveMenu(null);
        }, 200);
    };

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveMenu(null);
    }, [location]);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1200px] bg-white/70 backdrop-blur-xl border border-neutral-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-300 ${isMobileMenuOpen ? 'rounded-[24px]' : 'rounded-full'}`}
            onMouseLeave={handleMouseLeave}
        >
            <div className="px-6 md:px-12 py-4 md:py-5 flex items-center justify-between relative">
                <Link to="/" className="flex items-center gap-2 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                    <img src={Logo} alt="HireSync" className="h-8 md:h-10 w-auto object-contain" />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-500">
                    <div 
                        className="relative group px-1"
                        onMouseEnter={() => handleMouseEnter('features')}
                    >
                        <button className={`hover:text-neutral-900 transition-colors flex items-center gap-1.5 px-3 py-2 rounded-full ${activeMenu === 'features' ? 'bg-neutral-100 text-neutral-900' : ''}`}>
                            Features
                            <Icon icon="solar:alt-arrow-down-linear" className={`transition-transform duration-200 ${activeMenu === 'features' ? 'rotate-180 text-brand-purple' : ''}`} />
                        </button>
                    </div>

                    <div 
                        className="relative group px-1"
                        onMouseEnter={() => handleMouseEnter('useCases')}
                    >
                        <button className={`hover:text-neutral-900 transition-colors flex items-center gap-1.5 px-3 py-2 rounded-full ${activeMenu === 'useCases' ? 'bg-neutral-100 text-neutral-900' : ''}`}>
                            Use Cases
                            <Icon icon="solar:alt-arrow-down-linear" className={`transition-transform duration-200 ${activeMenu === 'useCases' ? 'rotate-180 text-brand-purple' : ''}`} />
                        </button>
                    </div>

                    <Link to="/pricing" className="hover:text-neutral-900 transition-colors px-3 py-2 rounded-full" onMouseEnter={() => handleMouseEnter(null)}>Pricing</Link>
                    <Link to="/about" className={`hover:text-neutral-900 transition-colors px-3 py-2 rounded-full ${isAboutPage ? 'text-blue-600 font-bold bg-blue-50/50' : ''}`} onMouseEnter={() => handleMouseEnter(null)}>About us</Link>
                    <Link to="/contact-us" className={`hover:text-neutral-900 transition-colors px-3 py-2 rounded-full ${isContactPage ? 'text-blue-600 font-bold bg-blue-50/50' : ''}`} onMouseEnter={() => handleMouseEnter(null)}>Contact</Link>
                </div>

                {/* Desktop Actions & Mobile Hamburger */}
                <div className="flex items-center gap-4 md:gap-6">
                    <button className="hidden sm:block bg-neutral-900 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 active:scale-95">
                        Login
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 -mr-2 text-neutral-600 hover:text-neutral-900 transition-colors outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Icon icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} className="text-2xl" />
                    </button>
                </div>

                {/* Mega Menu Overlay inside Navbar Context */}
                {activeMenu && (
                    <div 
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[1100px] z-[60]"
                        onMouseEnter={() => { if (hoverTimeout.current) clearTimeout(hoverTimeout.current); }}
                    >
                        <MegaMenu 
                            isOpen={activeMenu !== null} 
                            activeMenu={activeMenu}
                            onMouseEnter={() => {}}
                            onMouseLeave={() => {}}
                        />
                    </div>
                )}
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden border-t border-neutral-200/50 bg-white/50 rounded-b-[24px]"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4 text-sm font-medium text-neutral-600">
                            <Link to="/#features" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-neutral-900 transition-colors py-2 border-b border-neutral-100 flex justify-between">Features <Icon icon="solar:alt-arrow-right-linear" /></Link>
                            <Link to="/#use-cases" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-neutral-900 transition-colors py-2 border-b border-neutral-100 flex justify-between">Use Cases <Icon icon="solar:alt-arrow-right-linear" /></Link>
                            <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-neutral-900 transition-colors py-2 border-b border-neutral-100">Pricing</Link>
                            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-neutral-900 transition-colors py-2 border-b border-neutral-100 ${isAboutPage ? 'text-blue-600 font-bold' : ''}`}>About us</Link>
                            <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-neutral-900 transition-colors py-2 border-b border-neutral-100 ${isContactPage ? 'text-blue-600 font-bold' : ''}`}>Contact us</Link>

                            <div className="flex flex-col gap-3 mt-2">
                                <button className="bg-neutral-900 text-white font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-all text-center sm:hidden shadow-lg shadow-neutral-900/10">
                                    Login
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
