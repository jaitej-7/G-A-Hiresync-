import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation, useParams } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import { menuData } from './data/menuData';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));
const FAQsPage = lazy(() => import('./pages/FAQsPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ComingSoonPage = lazy(() => import('./pages/ComingSoonPage'));
const DynamicPage = lazy(() => import('./pages/DynamicPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage'));
const CancellationPolicyPage = lazy(() => import('./pages/CancellationPolicyPage'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage'));

// Lazy load heavy UI components
const AnimatedBackground = lazy(() => import('./components/ui/AnimatedBackground'));
const ParticlesCanvas = lazy(() => import('./components/ui/ParticlesCanvas'));

const LoadingScreen = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-neutral-100 border-t-brand-purple rounded-full animate-spin"></div>
    </div>
);

const UseCaseComingSoon = () => {
    const { slug } = useParams<{ slug: string }>();
    const pageData = menuData.useCases.items.find(item => item.slug === slug);
    
    if (!pageData) return <ComingSoonPage />;
    
    return (
        <ComingSoonPage 
            title={`${pageData.title} Coming Soon`} 
            description={pageData.description}
        />
    );
};

const App: React.FC = () => {
  const location = useLocation();
  const isComingSoonPage = location.pathname === '/coming-soon' || location.pathname.startsWith('/use-cases/');

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-clip" id="app-root">
      <Suspense fallback={<div className="fixed inset-0 bg-neutral-50" />}>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <AnimatedBackground />
          <ParticlesCanvas />
        </div>
      </Suspense>

      <div className="relative z-10 flex flex-col min-h-screen pointer-events-auto">
        <ScrollToTop />
        {!isComingSoonPage && <Navbar />}
        <main className={`flex-grow ${!isComingSoonPage ? 'pt-16' : ''}`}>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/faqs" element={<FAQsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/coming-soon" element={<ComingSoonPage />} />

              <Route path="/features/:slug" element={<DynamicPage type="features" />} />
              <Route path="/use-cases/:slug" element={<UseCaseComingSoon />} />

              {/* Policy pages */}
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
              <Route path="/cancellation-policy" element={<CancellationPolicyPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
            </Routes>
          </Suspense>
        </main>
        {!isComingSoonPage && <Footer />}
      </div>
    </div>
  );
};

export default App;
