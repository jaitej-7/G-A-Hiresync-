import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Logo from '../../assets/Logo/logo.svg';
import MegaMenu from './MegaMenu';
import { menuData } from '../../data/menuData';

const Navbar: React.FC = () => {
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';
    const isContactPage = location.pathname === '/contact-us';
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileExpandedSection, setMobileExpandedSection] = useState<'features' | 'useCases' | null>(null);
    
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
        setMobileExpandedSection(null);
    }, [location]);

    // Hamburger line variants
    const topVariants = {
        closed: { rotate: 0, y: 0 },
        opened: { rotate: 45, y: 8 }
    };

    const middleVariants = {
        closed: { opacity: 1, x: 0 },
        opened: { opacity: 0, x: -20 }
    };

    const bottomVariants = {
        closed: { rotate: 0, y: 0 },
        opened: { rotate: -45, y: -8 }
    };

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
                        <button 
                            className={`hover:text-neutral-900 transition-colors flex items-center gap-1.5 px-3 py-2 rounded-full ${activeMenu === 'features' ? 'bg-neutral-100 text-neutral-900' : ''}`}
                            aria-haspopup="true"
                            aria-expanded={activeMenu === 'features'}
                            aria-controls="mega-menu"
                            aria-label="Features menu"
                        >
                            Features
                            <Icon icon="solar:alt-arrow-down-linear" className={`transition-transform duration-200 ${activeMenu === 'features' ? 'rotate-180 text-brand-purple' : ''}`} />
                        </button>
                    </div>

                    <div 
                        className="relative group px-1"
                        onMouseEnter={() => handleMouseEnter('useCases')}
                    >
                        <button 
                            className={`hover:text-neutral-900 transition-colors flex items-center gap-1.5 px-3 py-2 rounded-full ${activeMenu === 'useCases' ? 'bg-neutral-100 text-neutral-900' : ''}`}
                            aria-haspopup="true"
                            aria-expanded={activeMenu === 'useCases'}
                            aria-controls="mega-menu"
                            aria-label="Use cases menu"
                        >
                            Use Cases
                            <Icon icon="solar:alt-arrow-down-linear" className={`transition-transform duration-200 ${activeMenu === 'useCases' ? 'rotate-180 text-brand-purple' : ''}`} />
                        </button>
                    </div>

                    <Link 
                        to="/pricing" 
                        className={`hover:text-neutral-900 px-4 py-2 rounded-full transition-all duration-200 ${location.pathname === '/pricing' ? 'text-neutral-900 bg-neutral-100' : 'hover:bg-neutral-50/50'}`}
                        onMouseEnter={() => handleMouseEnter(null)}
                    >
                        Pricing
                    </Link>
                    <Link 
                        to="/about" 
                        className={`hover:text-neutral-900 px-4 py-2 rounded-full transition-all duration-200 ${isAboutPage ? 'text-blue-600 font-semibold bg-blue-50/50 outline outline-1 outline-blue-100/50' : 'hover:bg-neutral-50/50'}`} 
                        onMouseEnter={() => handleMouseEnter(null)}
                    >
                        About us
                    </Link>
                    <Link 
                        to="/contact-us" 
                        className={`hover:text-neutral-900 px-4 py-2 rounded-full transition-all duration-200 ${isContactPage ? 'text-blue-600 font-semibold bg-blue-50/50 outline outline-1 outline-blue-100/50' : 'hover:bg-neutral-50/50'}`} 
                        onMouseEnter={() => handleMouseEnter(null)}
                    >
                        Contact
                    </Link>
                </div>

                {/* Desktop Actions & Mobile Hamburger */}
                <div className="flex items-center gap-4 md:gap-6">
                    <button className="hidden sm:flex items-center gap-2 bg-neutral-900 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-900/20 active:scale-95 group">
                        Login 
                        <Icon icon="solar:login-2-linear" className="text-lg group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <motion.span
                            variants={topVariants}
                            animate={isMobileMenuOpen ? "opened" : "closed"}
                            transition={{ duration: 0.3 }}
                            className="w-5 h-0.5 bg-neutral-800 rounded-full"
                        />
                        <motion.span
                            variants={middleVariants}
                            animate={isMobileMenuOpen ? "opened" : "closed"}
                            transition={{ duration: 0.3 }}
                            className="w-5 h-0.5 bg-neutral-800 rounded-full"
                        />
                        <motion.span
                            variants={bottomVariants}
                            animate={isMobileMenuOpen ? "opened" : "closed"}
                            transition={{ duration: 0.3 }}
                            className="w-5 h-0.5 bg-neutral-800 rounded-full"
                        />
                    </button>
                </div>

                {/* Mega Menu Overlay inside Navbar Context */}
                {activeMenu && (
                    <div 
                        id="mega-menu"
                        className="absolute left-1/2 -translate-x-1/2 top-full w-[1100px] z-[60]"
                        onMouseEnter={() => { if (hoverTimeout.current) clearTimeout(hoverTimeout.current); }}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Invisible bridge to prevent hover loss between nav and menu */}
                        <div className="h-6 w-full -mt-2" />
                        <MegaMenu 
                            isOpen={activeMenu !== null} 
                            activeMenu={activeMenu}
                            onMouseEnter={() => { if (hoverTimeout.current) clearTimeout(hoverTimeout.current); }}
                            onMouseLeave={handleMouseLeave}
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
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden overflow-hidden border-t border-neutral-200/50 bg-white/95 backdrop-blur-xl rounded-b-[24px]"
                    >
                        <div className="px-6 py-6 flex flex-col gap-2">
                            {/* Features Accordion */}
                            <div className="flex flex-col">
                                <button 
                                    onClick={() => setMobileExpandedSection(mobileExpandedSection === 'features' ? null : 'features')}
                                    className="flex items-center justify-between p-4 rounded-2xl hover:bg-neutral-50 transition-colors group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                                            <Icon icon="solar:magic-stick-3-linear" className="text-xl" />
                                        </div>
                                        <span className="font-bold text-neutral-900">Features</span>
                                    </div>
                                    <Icon icon="solar:alt-arrow-down-linear" className={`transition-transform duration-300 ${mobileExpandedSection === 'features' ? 'rotate-180' : ''}`} />
                                </button>
                                
                                <AnimatePresence>
                                    {mobileExpandedSection === 'features' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden bg-neutral-50/50 rounded-2xl mt-1 mx-2"
                                        >
                                            <div className="p-2 grid grid-cols-1 gap-1">
                                                {menuData.features.items.map((item) => (
                                                    <Link 
                                                        key={item.slug}
                                                        to={`/features/${item.slug}`}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                                                    >
                                                        <Icon icon={item.icon} className="text-lg text-brand-purple" />
                                                        <span className="text-sm font-semibold text-neutral-700">{item.title}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Use Cases Accordion */}
                            <div className="flex flex-col">
                                <button 
                                    onClick={() => setMobileExpandedSection(mobileExpandedSection === 'useCases' ? null : 'useCases')}
                                    className="flex items-center justify-between p-4 rounded-2xl hover:bg-neutral-50 transition-colors group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                                            <Icon icon="solar:buildings-linear" className="text-xl" />
                                        </div>
                                        <span className="font-bold text-neutral-900">Use Cases</span>
                                    </div>
                                    <Icon icon="solar:alt-arrow-down-linear" className={`transition-transform duration-300 ${mobileExpandedSection === 'useCases' ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {mobileExpandedSection === 'useCases' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden bg-neutral-50/50 rounded-2xl mt-1 mx-2"
                                        >
                                            <div className="p-2 grid grid-cols-1 gap-1">
                                                {menuData.useCases.items.map((item) => (
                                                    <Link 
                                                        key={item.slug}
                                                        to={`/use-cases/${item.slug}`}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                                                    >
                                                        <Icon icon={item.icon} className="text-lg text-brand-purple" />
                                                        <span className="text-sm font-semibold text-neutral-700">{item.title}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="h-px bg-neutral-200/50 my-2 mx-4" />

                            <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-neutral-50 transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600">
                                    <Icon icon="solar:bill-list-linear" className="text-xl" />
                                </div>
                                <span className="font-bold text-neutral-900">Pricing</span>
                            </Link>

                            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-neutral-50 transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600">
                                    <Icon icon="solar:users-group-two-rounded-linear" className="text-xl" />
                                </div>
                                <span className="font-bold text-neutral-900">About us</span>
                            </Link>

                            <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-neutral-50 transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600">
                                    <Icon icon="solar:letter-linear" className="text-xl" />
                                </div>
                                <span className="font-bold text-neutral-900">Contact us</span>
                            </Link>

                            <div className="mt-4 px-2">
                                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-neutral-900 text-white font-bold px-6 py-4 rounded-full flex items-center justify-center gap-2 shadow-xl shadow-neutral-900/10 active:scale-95 transition-all">
                                    Login <Icon icon="solar:login-2-linear" className="text-xl" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default React.memo(Navbar);
