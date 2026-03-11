import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const faqData = [
    {
        category: "General",
        questions: [
            {
                q: "What is HireSync?",
                a: "HireSync is an AI-powered recruitment platform designed to streamline hiring processes for businesses, recruiters, and candidates. It offers resume parsing, job posting, interview scheduling, AI-driven candidate matching, and analytics to optimize recruitment workflows."
            },
            {
                q: "Who can use HireSync?",
                a: "HireSync is designed for:\n• Recruiters & HR Teams: To manage job postings, track candidates, and streamline hiring.\n• Businesses & Hiring Managers: To oversee recruitment, approve job postings, and manage talent pipelines.\n• Job Seekers: To apply for jobs, track applications, and engage with recruiters."
            },
            {
                q: "How does HireSync improve recruitment efficiency?",
                a: "HireSync automates tedious hiring tasks using AI, such as resume parsing, candidate-job matching, and recruiter task suggestions. It also offers interview scheduling, in-app messaging, and data-driven hiring insights."
            }
        ]
    },
    {
        category: "Pricing & Support",
        questions: [
            {
                q: "Is HireSync free to use?",
                a: "HireSync offers different pricing plans based on business size and needs. We provide a free trial for new users to explore the platform."
            },
            {
                q: "What support options are available?",
                a: "We offer customer support via email, live chat, and a knowledge base with guides and tutorials. Premium plans include dedicated account managers."
            },
            {
                q: "Can I customize HireSync for my company's needs?",
                a: "Yes! HireSync allows businesses to tailor features, workflows, and dashboards to match their hiring processes."
            },
            {
                q: "How do I get started with HireSync?",
                a: "You can sign up on our website for a free trial. Once registered, you can set up your company profile, post jobs, and start managing candidates instantly."
            }
        ]
    },
    {
        category: "Features & Functionality",
        questions: [
            {
                q: "Does HireSync support resume parsing?",
                a: "Yes, HireSync extracts key details (name, experience, skills) from resumes in PDF, DOC, and other formats to help recruiters quickly assess candidates."
            },
            {
                q: "Can I post jobs directly on HireSync?",
                a: "Yes, recruiters and employers can create, edit, and manage job postings. The platform also allows for approval workflows before jobs go live."
            },
            {
                q: "How does AI candidate matching work?",
                a: "Our AI-powered matching algorithm analyzes job descriptions and compares them with candidate resumes, ranking applicants based on skills, experience, and job requirements."
            }
        ]
    },
    {
        category: "Security & Compliance",
        questions: [
            {
                q: "Is my data secure on HireSync?",
                a: "Absolutely! We implement robust security measures, including data encryption, role-based access controls, and email proxying to protect user information."
            },
            {
                q: "Does HireSync comply with hiring regulations?",
                a: "Yes, we support compliance tracking for diversity hiring and legal requirements, ensuring ethical and unbiased recruitment practices."
            },
            {
                q: "Can I prevent direct contact between candidates and recruiters?",
                a: "Yes, HireSync offers email proxying and redacts personal contact details to maintain privacy and prevent unauthorized communication."
            }
        ]
    }
];

const FAQAccordion = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border border-neutral-200/60 rounded-2xl overflow-hidden bg-white hover:border-neutral-300 transition-colors">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
                <div className="flex-1 pr-8">
                    <h4 className="text-lg font-medium text-neutral-900 leading-snug">{question}</h4>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${isOpen ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-500'}`}>
                    <Icon icon="solar:alt-arrow-down-bold" className={`text-lg transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 pt-2 text-neutral-500 text-sm leading-relaxed whitespace-pre-wrap">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ContactFAQ: React.FC = () => {
    const [activeTab, setActiveTab] = useState(faqData[0].category);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const currentCategoryData = faqData.find(c => c.category === activeTab);

    return (
        <section className="py-24 bg-[#FAFAFA]" id="faqs">
            <div className="max-w-[1000px] mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 mb-6">
                        <Icon icon="solar:question-circle-bold" className="text-blue-500 text-lg" />
                        <span className="text-sm font-medium text-neutral-900 tracking-wide uppercase">FAQs</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-6 tracking-tight">Frequently Asked Questions</h2>
                    <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                        Find answers to common questions about HireSync's features, pricing, and capabilities. Can't find what you're looking for? Reach out to our team above.
                    </p>
                </div>

                {/* Desktop Tabs / Mobile Scrollable Labels */}
                <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-12 justify-start md:justify-center pb-4 md:pb-0">
                    {faqData.map((category) => (
                        <button
                            key={category.category}
                            onClick={() => {
                                setActiveTab(category.category);
                                setOpenIndex(0); // Reset accordion state when changing tabs
                            }}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex-shrink-0 ${activeTab === category.category
                                    ? 'bg-black text-white shadow-lg shadow-black/10'
                                    : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300'
                                }`}
                        >
                            {category.category}
                        </button>
                    ))}
                </div>

                {/* FAQ Questions */}
                <div className="space-y-4 max-w-[800px] mx-auto">
                    {currentCategoryData?.questions.map((faq, index) => (
                        <FAQAccordion
                            key={index}
                            question={faq.q}
                            answer={faq.a}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactFAQ;
