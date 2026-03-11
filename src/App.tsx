import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import FAQsPage from './pages/FAQsPage';
import ScrollToTop from './components/layout/ScrollToTop';
import ParticleBag from './components/ui/ParticleBag';
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
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* ParticleBag internally creates a canvas that takes pointer events via framer-motion/three if we let it, but pointer-events-none on parent might block it. Wait, if we want pointer events for the shatter effect, the container MUST have pointer-events-auto, but then it blocks clicks. React Three Fiber's event system hooks into the canvas. We can use pointer-events-none on the wrapper, and then pass an event-source element to R3F. For now let's just use pointer-events-none and see if raycaster works or if we should use pointerEvents="none" in CSS but attach window listeners in ParticleBag. */}
        <ParticleBag radius={4.0} shatterForce={3.5} mouseRadius={2.5} />
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
