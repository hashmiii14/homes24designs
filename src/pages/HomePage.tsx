import SEO from '@/components/ui/SEO';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import AboutSection from '@/components/sections/AboutSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import WhyUs from '@/components/sections/WhyUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import PricingSection from '@/components/sections/PricingSection';
import ConsultationForm from '@/components/sections/ConsultationForm';
import JournalGrid from '@/components/sections/JournalGrid';
import InstagramSection from '@/components/sections/InstagramSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import { siteConfig } from '@/data/siteConfig';
import { services } from '@/data/services';
import { faqItems } from '@/data/faq';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'InteriorDesignFirm',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/og-image.jpg`,
    logo: `${siteConfig.url}/icon-512.png`,
    priceRange: '₹₹₹',
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.5638,
      longitude: 77.2882,
    },
    areaServed: siteConfig.serviceAreas,
    founder: {
      '@type': 'Person',
      name: siteConfig.proprietor,
      jobTitle: 'Proprietor & Founder',
    },
    sameAs: [siteConfig.instagram],
  };

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <SEO
        title="HOMES24DESIGNS | Luxury Interior Designers in Delhi"
        description="HOMES24DESIGNS is a Delhi-based interior design studio offering premium home interiors, modular kitchens, living rooms, bedrooms, wardrobes and custom interior solutions across Delhi and Delhi NCR."
        path="/"
        jsonLd={[jsonLd, websiteLd, faqLd]}
      />
      <Hero />
      <TrustStrip />
      <AboutSection />
      <ServicesGrid />
      <PortfolioGrid />
      <WhyUs />
      <ProcessTimeline />
      <PricingSection />
      <ConsultationForm />
      <JournalGrid limit={6} />
      <InstagramSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
