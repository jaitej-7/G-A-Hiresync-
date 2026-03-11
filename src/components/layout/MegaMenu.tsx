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

  // Reset hover state when menu closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setHoveredItem(null), 300);
    }
  }, [isOpen]);

  const data = activeMenu && menuData[activeMenu] ? menuData[activeMenu] : null;

  if (!data) return null;

  // Features uses a 3-column layout (items, preview, details), Use Cases uses 2-column (items, preview)
  const isFeatures = activeMenu === 'features';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-[50%] top-full pt-4 -translate-x-[50%] z-50 w-full max-w-5xl"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="bg-white/90 backdrop-blur-xl border border-neutral-200/60 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)] rounded-3xl p-6 relative overflow-hidden flex gap-4">
            
            {/* Background Texture inside menu */}
            <div className="absolute inset-0 bg-grid-neutral-200/[0.2] bg-[size:24px_24px] pointer-events-none"></div>

            {/* Left Column: Menu Items */}
            <div className="w-1/3 flex flex-col gap-1 relative z-10">
              <div className="px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">{data.title}</span>
              </div>
              
              {data.items.map((item) => (
                <Link
                  key={item.slug}
                  to={`/${activeMenu === 'features' ? 'features' : 'use-cases'}/${item.slug}`}
                  onMouseEnter={() => setHoveredItem(item.slug)}
                  className={`
                    flex items-center gap-3 p-3 rounded-xl transition-all duration-200
                    ${hoveredItem === item.slug ? 'bg-neutral-50 shadow-sm border border-neutral-200/50' : 'hover:bg-neutral-50 border border-transparent'}
                  `}
                >
                  <div className={`
                    w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                    ${hoveredItem === item.slug ? 'bg-white text-brand-purple shadow-sm' : 'bg-neutral-100/50 text-neutral-500'}
                  `}>
                    <Icon icon={item.icon} className="text-xl" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold transition-colors ${hoveredItem === item.slug ? 'text-neutral-900' : 'text-neutral-700'}`}>
                      {item.title}
                    </h4>
                  </div>
                  {hoveredItem === item.slug && (
                    <motion.div layoutId="menuArrow" className="ml-auto text-brand-purple">
                      <Icon icon="solar:alt-arrow-right-linear" />
                    </motion.div>
                  )}
                </Link>
              ))}
            </div>

            {/* Middle/Preview Column */}
            <div className={`${isFeatures ? 'w-1/3' : 'w-2/3'} relative z-10 pl-4 border-l border-neutral-100 flex flex-col justify-center`}>
               <AnimatePresence mode="wait">
                 {data.items.map((item) => (
                   hoveredItem === item.slug || (hoveredItem === null && item === data.items[0]) ? (
                     <motion.div
                       key={item.slug}
                       initial={{ opacity: 0, x: -10 }}
                       animate={{ opacity: 1, x: 0 }}
                       exit={{ opacity: 0, x: 10 }}
                       transition={{ duration: 0.2 }}
                       className="flex flex-col gap-4"
                     >
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 mb-2">
                           <Icon icon={item.icon} className="text-3xl text-brand-purple" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed pr-8">
                           {item.description}
                        </p>
                        
                        <Link 
                            to={`/${activeMenu === 'features' ? 'features' : 'use-cases'}/${item.slug}`}
                            className="mt-4 text-sm font-semibold text-brand-purple flex items-center gap-1 hover:gap-2 transition-all w-fit"
                        >
                            Explore {item.title}
                            <Icon icon="solar:arrow-right-linear" />
                        </Link>
                     </motion.div>
                   ) : null
                 ))}
               </AnimatePresence>
            </div>

            {/* Optional Right Column for Features */}
            {isFeatures && (
                <div className="w-1/3 relative z-10 bg-neutral-50 border border-neutral-100 rounded-2xl p-6 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5"></div>
                    <AnimatePresence mode="wait">
                        {data.items.map((item) => (
                        hoveredItem === item.slug || (hoveredItem === null && item === data.items[0]) ? (
                            <motion.div
                                key={item.slug}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-4 text-center"
                            >
                                <Icon icon={item.icon} className="text-[80px] text-neutral-300 opacity-60" />
                                <div className="text-xs font-medium text-neutral-400 uppercase tracking-widest">{item.title} Preview</div>
                            </motion.div>
                        ) : null
                        ))}
                    </AnimatePresence>
                </div>
            )}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
