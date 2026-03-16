import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
    const [isYearly, setIsYearly] = useState(true);

    const plans = [
        {
            name: "Starter",
            price: isYearly ? "49" : "59",
            description: "Perfect for small agencies and solo recruiters starting their AI journey.",
            features: [
                "Up to 500 AI Profile Searches",
                "Basic JD Generation (10/mo)",
                "Email support",
                "Single user access",
                "Standard analytics"
            ],
            cta: "Get Started",
            highlight: false
        },
        {
            name: "Professional",
            price: isYearly ? "99" : "119",
            description: "Advanced AI tools and collaboration features for growing teams.",
            features: [
                "Unlimited AI Profile Searches",
                "Advanced Generative JD (Unlimited)",
                "Priority Support",
                "Up to 5 team members",
                "Advanced hiring analytics",
                "Custom integrations"
            ],
            cta: "Start Free Trial",
            highlight: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Tailored solutions with dedicated support for large organizations.",
            features: [
                "Dedicated Account Manager",
                "Custom AI Model Training",
                "24/7 Premium Support",
                "Unlimited team members",
                "White-label options",
                "API Access"
            ],
            cta: "Contact Sales",
            highlight: false
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200/80 bg-white text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-6 shadow-sm"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        Simple Pricing
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-900 mb-6"
                    >
                        Plans that grow with <br />
                        <span className="text-gradient">your recruitment team</span>
                    </motion.h1>

                    {/* Toggle */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center gap-4 mt-8"
                    >
                        <span className={`text-sm ${!isYearly ? 'text-neutral-900 font-bold' : 'text-neutral-500'}`}>Monthly</span>
                        <button 
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-12 h-6 rounded-full bg-neutral-200 p-1 relative transition-colors duration-300"
                        >
                            <motion.div 
                                animate={{ x: isYearly ? 24 : 0 }}
                                className="w-4 h-4 bg-white rounded-full shadow-sm"
                            />
                        </button>
                        <span className={`text-sm ${isYearly ? 'text-neutral-900 font-bold' : 'text-neutral-500'}`}>Yearly (Save 20%)</span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx + 0.3 }}
                            className={`p-8 rounded-[2.5rem] border flex flex-col ${plan.highlight ? 'bg-neutral-900 text-white border-neutral-800 shadow-2xl scale-105' : 'bg-white border-neutral-100 text-neutral-900'}`}
                        >
                            <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold">{plan.price === "Custom" ? plan.price : `$${plan.price}`}</span>
                                {plan.price !== "Custom" && <span className="text-sm opacity-60">/{isYearly ? 'yr' : 'mo'}</span>}
                            </div>
                            <p className="text-sm opacity-70 mb-8 leading-relaxed">
                                {plan.description}
                            </p>
                            
                            <div className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-3 text-sm">
                                        <Icon icon="solar:check-read-linear" className={plan.highlight ? "text-blue-400" : "text-blue-600"} />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/contact-us">
                                <button className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all active:scale-95 ${plan.highlight ? 'bg-white text-black hover:bg-neutral-100' : 'bg-black text-white hover:bg-neutral-800'}`}>
                                    {plan.cta}
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
