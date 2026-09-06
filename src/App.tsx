import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Loader from '@/components/layout/Loader';
import ScrollToTop from '@/components/layout/ScrollToTop';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import CallButton from '@/components/layout/CallButton';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import ContactPage from '@/pages/ContactPage';

// Lazy load remaining secondary pages
const PricingPage = lazy(() => import('@/pages/PricingPage'));
const JournalPage = lazy(() => import('@/pages/JournalPage'));
const JournalArticlePage = lazy(() => import('@/pages/JournalArticlePage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Loader />
        <Header />
        <main id="main-content" tabIndex={-1} className="outline-none overflow-x-hidden w-full max-w-full">
          <Suspense fallback={<div className="min-h-[50vh] bg-ivory" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/journal/:slug" element={<JournalArticlePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CallButton />
        <WhatsAppButton />
      </BrowserRouter>
    </HelmetProvider>
  );
}
