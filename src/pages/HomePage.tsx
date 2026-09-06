import SEO from '@/components/ui/SEO';
import Hero from '@/components/sections/Hero';
import MarqueeStrip from '@/components/sections/MarqueeStrip';
import StatsCounter from '@/components/sections/StatsCounter';
import TrustStrip from '@/components/sections/TrustStrip';
import HomeAboutSection from '@/components/sections/HomeAboutSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import WhyUs from '@/components/sections/WhyUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import PricingSection from '@/components/sections/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
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
    '@type': ['InteriorDesignFirm', 'LocalBusiness', 'HomeAndConstructionBusiness'],
    name: siteConfig.name,
    alternateName: [
      'Homes 24 Designs',
      'HOMES24DESIGNS Okhla',
      'Best Interior Designer in Okhla New Delhi',
      'Interior Designer in Okhla',
      'Interior Designer Jamia Nagar Batla House',
      'Interior Designers Near Me',
    ],
    slogan: 'Best Interior Designer in Okhla, New Delhi',
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/og-image.jpg`,
    logo: `${siteConfig.url}/icon-512.png`,
    priceRange: '₹₹₹',
    email: siteConfig.email,
    telephone: siteConfig.phone,
    hasMap: 'https://maps.google.com/maps?q=M-74%2C+First+Floor%2C+Batla+House%2C+Jamia+Nagar%2C+New+Delhi%2C+Delhi+110025',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: 'Okhla, New Delhi',
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
      jobTitle: 'Proprietor & Principal Designer',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '28',
      bestRating: '5',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Residential Interior Design Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.description,
        },
      })),
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
        title="Best Interior Designer in Okhla, New Delhi | HOMES24DESIGNS"
        description="HOMES24DESIGNS is recognized as the best interior designer in Okhla, New Delhi. Located in Batla House, Jamia Nagar, we craft luxury residential interiors, modular kitchens, wardrobes & turnkey homes across South Delhi & Delhi NCR. Call +91 9818083436."
        path="/"
        jsonLd={[jsonLd, websiteLd, faqLd]}
      />
      <Hero />
      <MarqueeStrip />
      <TrustStrip />
      <StatsCounter />
      <HomeAboutSection />
      <ServicesGrid />
      <PortfolioGrid />
      <WhyUs />
      <ProcessTimeline />
      <PricingSection />
      <TestimonialsSection />
      <ConsultationForm />
      <JournalGrid limit={3} />
      <InstagramSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
