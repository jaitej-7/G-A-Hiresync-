import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { menuData } from '../data/menuData';

// Reusable FAQ Accordion Component
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border border-neutral-200/60 rounded-2xl bg-white/50 backdrop-blur-md overflow-hidden mb-4 transition-all hover:border-brand-purple/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-semibold text-neutral-800 text-lg">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-brand-purple">
          <Icon icon="solar:alt-arrow-down-linear" className="text-2xl" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DynamicPage: React.FC<{ type: 'features' | 'useCases' }> = ({ type }) => {
  const { slug } = useParams<{ slug: string }>();
  
  const sectionData = menuData[type];
  const pageData = sectionData.items.find(item => item.slug === slug);

  if (!pageData) {
    return <Navigate to="/" replace />;
  }

  const hasFeatureCards = pageData.featureCards && pageData.featureCards.length > 0;

  return (
    <div className="min-h-screen bg-transparent relative z-10 font-outfit">
      
      {/* Premium Hero Section (Matched to AboutHero) */}
      <section className="relative py-24 md:py-32 pt-32 md:pt-48 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center flex flex-col items-center w-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200/80 bg-white/50 text-xs font-medium text-neutral-600 mb-6 backdrop-blur-sm"
            >
                <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span>
                <Icon icon={pageData.icon} className="text-sm text-brand-purple" />
                {sectionData.title} • {pageData.title}
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-medium tracking-tight text-[#171717] mb-6 leading-[1.1] flex flex-wrap justify-center items-center gap-x-3 gap-y-2 max-w-4xl mx-auto">
                {pageData.title.split(' ').map((word, i) => {
                    const isLast = i === pageData.title.split(' ').length - 1;
                    return (
                        <motion.span 
                            key={i} 
                            initial={{ opacity: 0, y: 30 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                        >
                            {isLast ? (
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56A8FD] to-[#A16AFE] animate-gradient-text">{word}</span>
                            ) : (
                                word
                            )}
                        </motion.span>
                    );
                })}
            </h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-lg md:text-xl text-neutral-500 mb-10 max-w-2xl font-normal leading-relaxed"
            >
                {pageData.description}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-full sm:w-auto bg-neutral-900 text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/10"
                >
                    Get Started Free
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-full sm:w-auto text-neutral-700 text-sm font-medium px-8 py-3.5 rounded-full border border-neutral-200 bg-white/50 hover:bg-white/80 backdrop-blur-sm transition-colors flex items-center justify-center gap-2"
                >
                    View Documentation
                    <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                        <Icon icon="solar:arrow-right-linear" className="text-base" />
                    </motion.div>
                </motion.button>
            </motion.div>
        </div>
      </section>

      {/* Feature Sections */}
      {hasFeatureCards && (
        <div className="py-24 space-y-32 relative z-10">
          {pageData.featureCards!.map((card, idx) => {
            const reverse = idx % 2 !== 0;
            return (
              <section key={idx} className="max-w-[1240px] mx-auto px-6">
                <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-24`}>
                  
                  {/* Text Column */}
                  <motion.div 
                    initial={{ opacity: 0, x: reverse ? 40 : -40, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full md:w-1/2"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/5 text-sm font-bold text-brand-purple mb-6 uppercase tracking-wider">
                      {card.headerTitle}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#171717] mb-6 leading-tight flex flex-wrap gap-x-2">
                        {card.heading.split(' ').map((word, i) => {
                            const isLast = i === card.heading.split(' ').length - 1;
                            return (
                                <span key={i}>
                                    {isLast ? (
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56A8FD] to-[#A16AFE] animate-gradient-text">{word}</span>
                                    ) : (
                                        word
                                    )}
                                </span>
                            );
                        })}
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-500 leading-relaxed">
                      {card.bodyText}
                    </p>
                  </motion.div>

                  {/* Visual Column */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full md:w-1/2"
                  >
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        <div className="relative flex flex-col w-full rounded-[24px] overflow-hidden border border-neutral-200/50 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(157,144,245,0.15)] transition-all duration-700">
                            {/* Card Header - Browser/App Style */}
                            <div className="h-9 bg-[#9D90F5] flex-shrink-0 flex items-center px-4 gap-3">
                                <div className="flex gap-1.5 text-center">
                                    <div className="w-2 h-2 rounded-full bg-white/60" />
                                    <div className="w-2 h-2 rounded-full bg-white/60" />
                                    <div className="w-2 h-2 rounded-full bg-white/60" />
                                </div>
                                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em] pl-2 border-l border-white/20 ml-1">
                                    {card.headerTitle}
                                </span>
                            </div>

                            {/* Image Container Pane */}
                            <div className="relative flex-1 flex flex-col overflow-hidden bg-neutral-50/50">
                                <div className="w-full overflow-hidden">
                                    {card.image ? (
                                        <img
                                            src={card.image}
                                            alt={card.heading}
                                            className="w-full object-cover opacity-95 group-hover:opacity-100 transition-opacity"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center opacity-20">
                                            <Icon icon={pageData.icon} className="text-9xl" />
                                        </div>
                                    )}
                                </div>
                                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.02)] pointer-events-none" />
                            </div>

                            {/* Subtle Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000 ease-in-out pointer-events-none" />
                        </div>
                    </div>
                  </motion.div>
                </div>
              </section>
            );
          })}
        </div>
      )}

      {/* FAQs Section */}
      {pageData.faqs && pageData.faqs.length > 0 && (
        <section className="bg-neutral-50 py-32">
            <div className="max-w-[800px] mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="text-brand-purple font-bold uppercase tracking-widest text-sm mb-4">FAQ</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Common Questions</h2>
                    <p className="text-neutral-500 text-lg leading-relaxed">Everything you need to know about {pageData.title}.</p>
                </div>
                
                <div className="space-y-2">
                    {pageData.faqs.map((faq, idx) => (
                    <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
      )}

    </div>
  );
};

export default DynamicPage;
