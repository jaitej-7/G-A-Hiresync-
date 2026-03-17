import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { menuData } from '../../data/menuData';

interface MegaMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  activeMenu: 'features' | 'useCases' | null;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onMouseEnter, onMouseLeave, activeMenu }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Set initial hovered item when menu opens
  useEffect(() => {
    if (isOpen && activeMenu && menuData[activeMenu]?.items.length > 0) {
      setHoveredItem(menuData[activeMenu].items[0].slug);
    }
  }, [isOpen, activeMenu]);

  // Reset hover state when menu closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setHoveredItem(null), 300);
    }
  }, [isOpen]);

  const data = activeMenu && menuData[activeMenu] ? menuData[activeMenu] : null;

  if (!data) return null;

  const isFeatures = activeMenu === 'features';
  const activeItem = data.items.find(item => item.slug === hoveredItem) || data.items[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          role="menu"
        >
          {/* Main Container - Solid White, No Glassmorphism */}
          <div className="bg-white border border-neutral-200 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[40px] p-8 relative overflow-hidden flex divide-x divide-neutral-100 min-h-[500px]">
            
            {/* Minimal Background Grid */}
            <div className="absolute inset-0 bg-grid-neutral-900/[0.015] pointer-events-none"></div>
            
            {/* Column 1: Categories (30%) */}
            <div className="w-[30%] pr-6 relative z-10 flex flex-col justify-center">
              <div className="px-4 py-2 mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-neutral-400">Categories</span>
              </div>
              
              <div className="flex flex-col gap-2">
                {data.items.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/${activeMenu === 'features' ? 'features' : 'use-cases'}/${item.slug}`}
                    onMouseEnter={() => setHoveredItem(item.slug)}
                    className={`
                      relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group
                      ${hoveredItem === item.slug ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-800'}
                    `}
                  >
                    {hoveredItem === item.slug && (
                      <motion.div 
                        layoutId="activePill"
                        className="absolute inset-0 bg-neutral-50/80 border border-neutral-100 shadow-sm rounded-2xl -z-10"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                      />
                    )}
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                      ${hoveredItem === item.slug ? 'bg-brand-purple text-white shadow-xl shadow-brand-purple/20' : 'bg-neutral-50 text-neutral-400 group-hover:bg-neutral-100'}
                    `}>
                      <Icon icon={item.icon} className="text-2xl" />
                    </div>
                    <span className="text-base font-bold tracking-tight">{item.title}</span>
                    <Icon icon="solar:alt-arrow-right-linear" className={`ml-auto text-xl transition-all ${hoveredItem === item.slug ? 'translate-x-0' : '-translate-x-2'}`} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Capabilities (40%) */}
            <div className="w-[40%] px-10 relative z-10 flex flex-col justify-center">
              <div className="py-2 mb-8 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-neutral-400">Capabilities</span>
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={activeItem.slug}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    className="text-[10px] font-black text-brand-purple bg-brand-purple/10 px-2.5 py-1 rounded-md uppercase tracking-wider"
                  >
                    {activeItem.title.split(' ')[0]}
                  </motion.span>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.slug}
                  initial={{ x: 10, opacity: 1 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 gap-8"
                >
                  {isFeatures && activeItem.capabilities ? (
                    activeItem.capabilities.map((cap, idx) => (
                      <div key={idx} className="group/cap flex gap-5 p-2 -m-2 rounded-2xl hover:bg-neutral-50 transition-colors">
                        <div className="mt-1 w-10 h-10 rounded-xl bg-white border border-neutral-100 shadow-sm flex items-center justify-center shrink-0 group-hover/cap:scale-110 group-hover/cap:shadow-md transition-all">
                          <Icon icon={cap.icon} className="text-xl text-brand-purple" />
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-black text-neutral-900 leading-none tracking-tight">{cap.title}</h4>
                            {cap.badge && (
                              <span className="text-[9px] font-black px-1.5 py-0.5 bg-brand-blue/10 text-brand-blue rounded uppercase tracking-tighter">
                                {cap.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-neutral-500 leading-relaxed pr-6 font-medium">
                            {cap.description}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col gap-6">
                        <div className="space-y-3">
                            <h3 className="text-2xl font-black text-neutral-900 tracking-tight">{activeItem.title}</h3>
                            <p className="text-base text-neutral-500 leading-relaxed font-medium">
                                {activeItem.description}
                            </p>
                        </div>
                        <Link 
                            to={`/${activeMenu === 'features' ? 'features' : 'use-cases'}/${activeItem.slug}`}
                            className="text-sm font-bold text-brand-purple flex items-center gap-2 hover:gap-3 transition-all w-fit group"
                        >
                            Know More
                            <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Column 3: Feature Spotlight (30%) - Minimal SVG Animation */}
            <div className="w-[30%] pl-10 relative z-10 flex flex-col pt-2 justify-center">
                <div className="mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-neutral-400">Spotlight</span>
                </div>
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeItem.slug}
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 1.05 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex-1 bg-neutral-50 rounded-[32px] border border-neutral-100 p-8 flex flex-col items-center justify-center text-center overflow-hidden group/preview"
                    >
                        {/* Minimal SVG Background Animation */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <motion.path
                                d="M 0 10 L 100 10"
                                stroke="rgba(124, 58, 237, 0.08)"
                                strokeWidth="0.5"
                                animate={{ y: [0, 80, 0] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.path
                                d="M 0 50 L 100 50"
                                stroke="rgba(59, 130, 246, 0.08)"
                                strokeWidth="0.5"
                                animate={{ y: [-40, 40, -40] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            />
                            {/* Circuit nodes */}
                            <motion.circle cx="10" cy="10" r="1.5" fill="rgba(124, 58, 237, 0.15)" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 3, repeat: Infinity }} />
                            <motion.circle cx="90" cy="90" r="1.5" fill="rgba(59, 130, 246, 0.15)" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} />
                        </svg>

                        <div className="relative mb-8">
                            <div className="absolute inset-0 border-2 border-brand-purple/10 rounded-[2rem] scale-150 animate-pulse"></div>
                            
                            <div className="w-28 h-28 rounded-[2rem] bg-white border border-neutral-200 shadow-sm flex items-center justify-center relative z-10 group-hover/preview:rotate-6 transition-transform duration-700">
                                <Icon icon={activeItem.icon} className="text-6xl text-brand-purple" />
                            </div>
                        </div>
                        
                        <div className="space-y-2.5 relative z-10">
                            <h4 className="text-xl font-black text-neutral-900 tracking-tight leading-tight">{activeItem.title}</h4>
                            <div className="flex items-center justify-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span>
                                <p className="text-[10px] text-neutral-400 font-black uppercase tracking-[0.2em]">AI Evolution Active</p>
                            </div>
                        </div>

                        {/* Know More Button for Features */}
                        {isFeatures && (
                            <Link
                                to={`/features/${activeItem.slug}`}
                                className="mt-8 relative z-10 px-6 py-2.5 rounded-full bg-white border border-neutral-200 text-neutral-900 text-xs font-black uppercase tracking-widest hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 shadow-sm active:scale-95"
                            >
                                Know More
                            </Link>
                        )}
                        
                    </motion.div>
                </AnimatePresence>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
