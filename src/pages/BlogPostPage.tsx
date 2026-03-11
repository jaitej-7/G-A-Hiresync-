import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

// --- MOCK DATA FOR DEMO PURPOSES ---
const MOCK_BLOG_DATA = {
    slug: "how-hiresync-ai-works",
    title: "How HireSync's AI Works Alongside HR Teams to Enhance Hiring, Not Replace It.",
    category: "AI Technology",
    author: "James Peterson",
    date: "12 Oct 2024",
    readTime: "5 min read",
    heroImage: "https://picsum.photos/seed/hiresync-hero/1200/600",
    content: `
        <p class="mb-6">Hiring managers are facing a highly demanding task to efficiently cut out unorganized professional workflows, particularly when building your HR team. That involves sifting through resumes to identify candidates perfectly matching your organization's goals, productivity, and key development needs.</p>
        
        <p class="mb-6">Artificial Intelligence (AI) is transforming the way businesses operate and thrive, and HR is no exception. While some professionals fear AI might replace human roles, the reality is far more compelling. AI is an incredibly powerful tool in the hands of HR teams, augmenting their capabilities and enabling them to be more effective than ever before.</p>

        <p class="mb-8">HireSync's AI models are specifically designed to reduce overhead by accelerating candidate evaluations, predicting performance outcomes, and finding patterns in huge swaths of data. This allows HR professionals worldwide to concentrate on interpersonal interactions, culture-fit, and establishing strong team dynamics that AI still cannot comprehend across distinct business operations.</p>

        <h3 class="text-2xl font-bold text-neutral-900 mb-4">Enhancing Recruitment with AI: A Collaborative Approach</h3>
        
        <p class="mb-4">Most AI solutions developed purely to automate talent operations fail to capture the nuanced realities of hiring. However, when deployed by and for experienced HR teams, AI creates an unprecedented synergy. Here are the core ways HireSync’s models impact this collaboration:</p>
        
        <ol class="list-decimal pl-6 mb-8 space-y-4">
            <li><strong>Automating Candidate Sourcing:</strong> One of the most time-consuming tasks for HR consists of sifting through countless resumes and cover letters. AI can quickly analyze resumes against job prerequisites, identifying key skills, experience, and qualifications that match the job details. This means your team reviews applicants efficiently, reducing the risk of a single oversight. Moreover, this approach significantly saves HR teams' valuable time, letting them scale applicant flow effortlessly.</li>
            <li><strong>Intelligent Candidate Matching:</strong> AI doesn't stop by simply matching job skills. Using machine learning algorithms, models evaluate patterns from successful past employees and identify similar markers in incoming candidate data. This ensures organizations are interviewing individuals with the correct knowledge foundation and problem-solving aptitude for the specific role.</li>
            <li><strong>Data-Driven Decision Making:</strong> HR professionals make critical decisions defining how an organization executes its strategy. Predictive analytics can highlight the probability length of a candidate's tenure or their future performance metrics. These insights guide HR teams in adjusting compensation strategies and creating detailed onboarding plans. It's a data-informed approach, moving beyond instinct-based hiring to secure individuals mathematically proven to integrate and excel in their respective departments.</li>
        </ol>

        <h3 class="text-2xl font-bold text-neutral-900 mb-4">The Human-AI Partnership in Recruitment</h3>
        
        <p class="mb-6">While AI brings efficiency and speed to the recruitment process, it is the human-AI partnership in recruitment that truly unlocks effectiveness. HireSync operates with this core objective in mind, bridging the strengths of human recruiters rather than trying to replicate them.</p>

        <p class="mb-8">Recruitment requires emotional intelligence to properly understand a candidate's distinct needs and their motivation in contributing to an overarching mission. Assessing cultural alignment and establishing rapport with an applicant are inherently human tasks. Consequently, AI acts as an enhancement to these skills, bringing data points normally obfuscated to the surface and enabling human insight to operate rapidly and objectively without implicit bias constraints.</p>
    `
};

const BlogPostPage: React.FC = () => {
    // const { slug } = useParams<{ slug: string }>();
    
    // Scroll to top on mount
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 relative z-10 font-outfit">
            
            {/* Breadcrumb Context */}
            <div className="max-w-[1000px] mx-auto px-6 mb-6">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-brand-purple transition-colors">
                    <Icon icon="solar:alt-arrow-left-linear" />
                    Back to Blog
                </Link>
            </div>

            {/* Hero Header Area */}
            <motion.div 
                initial="hidden" animate="visible" variants={fadeUp}
                className="max-w-[1200px] mx-auto px-6 mb-12"
            >
                <div className="relative w-full aspect-[21/9] md:aspect-[21/8] lg:aspect-[2.5/1] rounded-[32px] overflow-hidden shadow-2xl shadow-neutral-200/50">
                    <img src={MOCK_BLOG_DATA.heroImage} alt={MOCK_BLOG_DATA.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium border border-white/20 mb-4 inline-block">
                            {MOCK_BLOG_DATA.category}
                        </span>
                        
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
                            {MOCK_BLOG_DATA.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-300">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-neutral-700 overflow-hidden border-2 border-white/10">
                                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${MOCK_BLOG_DATA.author}`} alt="Author" className="w-full h-full" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-medium text-xs uppercase tracking-wider opacity-70">Written by</span>
                                    <span className="text-white font-semibold">{MOCK_BLOG_DATA.author}</span>
                                </div>
                            </div>
                            
                            <div className="h-8 w-px bg-white/20 hidden md:block"></div>
                            
                            <div className="flex flex-col">
                                <span className="text-white font-medium text-xs uppercase tracking-wider opacity-70">Published on</span>
                                <span className="text-white font-semibold flex items-center gap-1.5"><Icon icon="solar:calendar-linear" /> {MOCK_BLOG_DATA.date}</span>
                            </div>

                            <div className="h-8 w-px bg-white/20 hidden md:block"></div>

                            <div className="flex flex-col">
                                <span className="text-white font-medium text-xs uppercase tracking-wider opacity-70">Read Time</span>
                                <span className="text-white font-semibold flex items-center gap-1.5"><Icon icon="solar:clock-circle-linear" /> {MOCK_BLOG_DATA.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Main Content Area */}
            <motion.article 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
                className="max-w-[800px] mx-auto px-6"
            >
                <div 
                    className="prose prose-lg prose-neutral max-w-none text-neutral-600 prose-headings:font-bold prose-headings:text-neutral-900 prose-a:text-brand-purple prose-img:rounded-2xl"
                    dangerouslySetInnerHTML={{ __html: MOCK_BLOG_DATA.content }}
                />

                {/* Share & Tags (Optional Future Enhancement) */}
                <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-neutral-900">Share this article:</span>
                        <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 hover:text-brand-purple transition-all"><Icon icon="ri:twitter-x-line" /></button>
                        <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 hover:text-blue-600 transition-all"><Icon icon="ri:linkedin-fill" /></button>
                        <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 hover:text-blue-800 transition-all"><Icon icon="ri:facebook-fill" /></button>
                    </div>
                </div>
            </motion.article>

            {/* Bottom CTA Block */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                className="max-w-[1200px] mx-auto px-6 mt-24 mb-12"
            >
                <div className="bg-[#0A1024] rounded-[32px] p-12 md:p-16 text-center relative overflow-hidden">
                    {/* Decorative radial gradient for CTA */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/20 blur-[100px] rounded-full pointer-events-none"></div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 relative z-10 leading-tight">
                        Work easy.<br/>
                        Grow further with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-brand-purple">HireSync.</span>
                    </h2>
                    <div className="flex justify-center mt-8 relative z-10">
                        <Link to="/contact-us" className="bg-white text-neutral-900 text-sm font-bold px-8 py-4 rounded-full hover:bg-neutral-100 transition-all shadow-[0_8px_24px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_32px_rgba(255,255,255,0.25)] flex items-center gap-2">
                            Request a demo
                            <Icon icon="solar:alt-arrow-right-linear" className="text-lg" />
                        </Link>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default BlogPostPage;
