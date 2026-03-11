import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { menuData } from '../data/menuData';

// Reusable FAQ Accordion Component
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border border-neutral-200/60 rounded-2xl bg-white/50 backdrop-blur-sm overflow-hidden mb-4">
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
  
  // Find the specific data
  const sectionData = menuData[type];
  const pageData = sectionData.items.find(item => item.slug === slug);

  if (!pageData) {
    return <Navigate to="/" replace />;
  }

  const hasFeatureCards = pageData.featureCards && pageData.featureCards.length > 0;

  return (
    <div className="min-h-screen pt-24 pb-20 relative z-10 font-outfit">
      
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 pt-12 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center p-4 rounded-3xl bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 mb-8"
        >
          <Icon icon={pageData.icon} className="text-6xl text-brand-purple" />
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200/80 bg-white/80 text-xs font-semibold text-brand-purple mb-6 backdrop-blur-sm shadow-sm"
        >
            {sectionData.title}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 mb-6"
        >
          {pageData.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed"
        >
          {pageData.description}
        </motion.p>
      </section>

      {/* Feature Sections (Alternating Layout) */}
      {hasFeatureCards ? (
        <div className="py-12">
          {pageData.featureCards!.map((card, idx) => {
            const reverse = idx % 2 !== 0; // Odd indexes are reversed (Image Left, Text Right)
            return (
              <section key={idx} className="relative py-16 md:py-24 overflow-hidden">
                {/* Subtle Background Glow behind each section */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  <div className={`absolute top-1/2 ${reverse ? '-left-[20%]' : '-right-[20%]'} -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 blur-[120px] rounded-full`} />
                </div>

                <div className={`max-w-[1240px] mx-auto px-6 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 relative z-10`}>
                  
                  {/* Text Column */}
                  <motion.div 
                    initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full md:w-1/2 flex flex-col items-start text-left"
                  >
                    {card.headerTitle && (
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/20 bg-brand-purple/5 text-sm font-semibold text-brand-purple mb-6 backdrop-blur-sm">
                        {card.headerTitle}
                      </div>
                    )}
                    
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-[1.1] tracking-tight mb-6">
                      {card.heading}
                    </h2>
                    
                    <p className="text-xl text-neutral-500 leading-relaxed mb-8">
                      {card.bodyText}
                    </p>
                  </motion.div>

                  {/* Visual Column */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="w-full md:w-1/2"
                  >
                    <div className="w-full aspect-[4/3] bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl rounded-[32px] overflow-hidden flex items-center justify-center relative group p-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 group-hover:from-brand-blue/10 group-hover:to-brand-purple/10 transition-colors duration-500"></div>
                      <div className="w-full h-full bg-neutral-100/50 rounded-[24px] overflow-hidden border border-neutral-200/50 flex items-center justify-center relative">
                        {card.image ? (
                          <img src={card.image} alt={card.heading} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                        ) : (
                          <div className="flex flex-col items-center justify-center gap-4 opacity-40">
                            <Icon icon="solar:gallery-bold-duotone" className="text-6xl text-brand-purple" />
                            <span className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Visual Frame</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>

                </div>
              </section>
            );
          })}
        </div>
      ) : (
        /* Placeholder visual if no feature cards defined */
        <section className="max-w-[1240px] mx-auto px-6 py-12">
           <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full aspect-[21/9] bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-[40px] border border-neutral-200 shadow-2xl flex items-center justify-center relative overflow-hidden"
           >
               <div className="absolute inset-0 bg-grid-neutral-200/[0.2] bg-[size:32px_32px]"></div>
               <Icon icon={pageData.icon} className="text-[120px] text-neutral-300 opacity-50" />
           </motion.div>
        </section>
      )}

      {/* FAQs Section */}
      {pageData.faqs && pageData.faqs.length > 0 && (
        <section className="max-w-[800px] mx-auto px-6 py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-500">Everything you need to know about {pageData.title}.</p>
          </div>
          
          <div className="space-y-4">
            {pageData.faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default DynamicPage;
