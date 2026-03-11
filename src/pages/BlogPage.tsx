import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

// --- MOCK DATA ---
const MOCK_CATEGORIES = ['All', 'Recruitment', 'AI Technology', 'HR Best Practices', 'Company News'];

const MOCK_BLOGS = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    slug: `blog-post-${i}`,
    title: i % 2 === 0 
        ? "How HireSync's AI Works Alongside HR Teams to Enhance Hiring, Not Replace It" 
        : "5 Ways to Automate Your Sourcing Pipeline in 2024",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Turpis viverra metus felis in id sit. Orci amet phasellus luctus enim ac.",
    image: `https://picsum.photos/seed/${i + 10}/800/600`,
    category: i % 3 === 0 ? "AI Technology" : "Recruitment",
    author: "James Peterson",
    date: "12 Oct 2024",
    readTime: "5 min read"
}));

const BlogPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    // Animations
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as any }
        })
    };

    return (
        <div className="min-h-screen pt-32 pb-20 relative z-10 font-outfit max-w-[1200px] mx-auto px-6">
            
            {/* Header Section */}
            <motion.div 
                custom={0} initial="hidden" animate="visible" variants={fadeUp}
                className="text-center max-w-2xl mx-auto mb-20"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200/80 bg-white/80 text-xs font-semibold text-brand-purple mb-6 backdrop-blur-sm shadow-sm">
                    Resources & Insights
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
                    HireSync <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Blogs</span>
                </h1>
                <p className="text-lg text-neutral-500 mb-8 max-w-xl mx-auto">
                    Find the ultimate guide to hiring, latest technological updates, and practices. Finding true potential out of the talent universe is our business.
                </p>
                
                {/* Search Bar */}
                <div className="relative max-w-md mx-auto">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Icon icon="solar:magnifer-linear" className="text-xl text-neutral-400" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search for blogs..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-24 py-4 rounded-full border border-neutral-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple/50 transition-all text-neutral-700 shadow-sm"
                    />
                    <button className="absolute inset-y-2 right-2 px-5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors shadow-md shadow-neutral-900/10">
                        Search
                    </button>
                </div>
            </motion.div>

            {/* Recent Blog Section */}
            <motion.section custom={1} initial="hidden" animate="visible" variants={fadeUp} className="mb-24">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                    <Icon icon="solar:star-fall-bold-duotone" className="text-brand-purple" />
                    Recent Blog
                </h2>
                <Link to={`/blog/${MOCK_BLOGS[0].slug}`} className="group block relative w-full aspect-[21/9] md:aspect-[21/8] rounded-[32px] overflow-hidden shadow-2xl shadow-neutral-200/50 border border-neutral-200/50">
                    <img src={MOCK_BLOGS[0].image} alt={MOCK_BLOGS[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium border border-white/20">
                                {MOCK_BLOGS[0].category}
                            </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-brand-blue transition-colors duration-300 max-w-3xl">
                            {MOCK_BLOGS[0].title}
                        </h3>
                        <p className="text-neutral-300 mb-6 max-w-2xl line-clamp-2 md:line-clamp-none">
                            {MOCK_BLOGS[0].excerpt}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-neutral-400">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-neutral-700 overflow-hidden">
                                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${MOCK_BLOGS[0].author}`} alt="Author" className="w-full h-full" />
                                </div>
                                <span className="text-neutral-200 font-medium">{MOCK_BLOGS[0].author}</span>
                            </div>
                            <span className="flex items-center gap-1.5"><Icon icon="solar:calendar-linear" /> {MOCK_BLOGS[0].date}</span>
                            <span className="flex items-center gap-1.5"><Icon icon="solar:clock-circle-linear" /> {MOCK_BLOGS[0].readTime}</span>
                        </div>
                    </div>
                </Link>
            </motion.section>

            {/* Popular Blogs Section */}
            <motion.section custom={2} initial="hidden" animate="visible" variants={fadeUp} className="mb-24">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                    <Icon icon="solar:fire-bold-duotone" className="text-orange-500" />
                    Popular Blogs
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Large Card */}
                    <Link to={`/blog/${MOCK_BLOGS[1].slug}`} className="group relative w-full aspect-square lg:aspect-auto min-h-[400px] rounded-[32px] overflow-hidden shadow-lg border border-neutral-200/50 block">
                        <img src={MOCK_BLOGS[1].image} alt={MOCK_BLOGS[1].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium border border-white/20 mb-3 inline-block">
                                {MOCK_BLOGS[1].category}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-brand-purple transition-colors">
                                {MOCK_BLOGS[1].title}
                            </h3>
                            <div className="flex items-center gap-4 text-xs text-neutral-300">
                                <span>{MOCK_BLOGS[1].author}</span>
                                <span>•</span>
                                <span>{MOCK_BLOGS[1].date}</span>
                            </div>
                        </div>
                    </Link>

                    {/* Right Small Cards */}
                    <div className="flex flex-col gap-6">
                        {[MOCK_BLOGS[2], MOCK_BLOGS[3]].map((blog, idx) => (
                            <Link key={idx} to={`/blog/${blog.slug}`} className="group relative w-full flex-1 rounded-[32px] overflow-hidden shadow-lg border border-neutral-200/50 block">
                                <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-neutral-900/20"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium border border-white/20 mb-3 inline-block">
                                        {blog.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-brand-blue transition-colors">
                                        {blog.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-xs text-neutral-300">
                                        <span>{blog.author}</span>
                                        <span>{blog.date}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* All Blogs Section */}
            <motion.section custom={3} initial="hidden" animate="visible" variants={fadeUp} className="mb-24">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <h2 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
                        <Icon icon="solar:documents-minimalistic-bold-duotone" className="text-brand-blue" />
                        All Blogs
                    </h2>
                    
                    {/* Categories Filter */}
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x">
                        {MOCK_CATEGORIES.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`
                                    whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all snap-start
                                    ${activeCategory === category 
                                        ? 'bg-neutral-900 text-white shadow-md' 
                                        : 'bg-white/80 border border-neutral-200 text-neutral-600 hover:bg-neutral-50'}
                                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {MOCK_BLOGS.slice(4).map((blog) => (
                        <Link key={blog.id} to={`/blog/${blog.slug}`} className="group bg-white/80 backdrop-blur-sm border border-neutral-200/80 rounded-[28px] overflow-hidden shadow-[0_8px_24px_-12px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_32px_-12px_rgba(0,0,0,0.15)] transition-all duration-300 flex flex-col">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-brand-purple border border-white/50 shadow-sm">
                                    {blog.category}
                                </div>
                            </div>
                            <div className="p-6 md:p-8 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-neutral-900 mb-3 line-clamp-2 leading-snug group-hover:text-brand-purple transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-sm text-neutral-500 mb-6 line-clamp-3">
                                    {blog.excerpt}
                                </p>
                                <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 font-medium">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-neutral-100 overflow-hidden">
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${blog.author}`} alt="Author" className="w-full h-full" />
                                        </div>
                                        <span className="text-neutral-600">{blog.author}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span>{blog.date}</span>
                                        <div className="w-1 h-1 rounded-full bg-neutral-300"></div>
                                        <span>{blog.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2">
                    <button className="w-10 h-10 rounded-full flex items-center justify-center border border-neutral-200 text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"><Icon icon="solar:alt-arrow-left-linear" /></button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-900 text-white font-medium shadow-md">1</button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center border border-neutral-200 text-neutral-600 hover:bg-neutral-50 font-medium transition-colors">2</button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center border border-neutral-200 text-neutral-600 hover:bg-neutral-50 font-medium transition-colors">3</button>
                    <span className="text-neutral-400 px-2">...</span>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center border border-neutral-200 text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"><Icon icon="solar:alt-arrow-right-linear" /></button>
                </div>
            </motion.section>

        </div>
    );
};

export default BlogPage;
