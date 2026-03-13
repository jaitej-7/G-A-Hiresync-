import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import FAQsPage from './pages/FAQsPage';
import ScrollToTop from './components/layout/ScrollToTop';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import CancellationPolicyPage from './pages/CancellationPolicyPage';
import DisclaimerPage from './pages/DisclaimerPage';

import DynamicPage from './pages/DynamicPage';

import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

import { AnimatedBackground, ParticlesCanvas } from './components/ui';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-clip" id="app-root">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AnimatedBackground />
        <ParticlesCanvas />
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

            <Route path="/features/:slug" element={<DynamicPage type="features" />} />
            <Route path="/use-cases/:slug" element={<DynamicPage type="useCases" />} />

            {/* Policy pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
            <Route path="/cancellation-policy" element={<CancellationPolicyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
