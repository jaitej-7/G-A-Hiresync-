import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import FAQsPage from './pages/FAQsPage';
import ScrollToTop from './components/layout/ScrollToTop';
import AnimatedBackground from './components/ui/AnimatedBackground';

import DynamicPage from './pages/DynamicPage';

import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-clip bg-white" id="app-root">
      {/* Global Backgrounds */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AnimatedBackground />
      </div>


      <div className="relative z-10 flex flex-col min-h-screen pointer-events-auto">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            
            {/* Dynamic pages */}
            <Route path="/features/:slug" element={<DynamicPage type="features" />} />
            <Route path="/use-cases/:slug" element={<DynamicPage type="useCases" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
