import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/layout/PageHeader';
import AboutSection from '@/components/sections/AboutSection';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import WhyUs from '@/components/sections/WhyUs';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About HOMES24DESIGNS | Founder Ehtashamul Islam | Interior Design Studio in Delhi"
        description="Learn about HOMES24DESIGNS and proprietor Ehtashamul Islam — a Delhi-based interior design studio offering personalized residential interior solutions across Delhi and Delhi NCR."
        path="/about"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About HOMES24DESIGNS',
          description: siteConfig.description,
          mainEntity: {
            '@type': 'InteriorDesignFirm',
            name: siteConfig.name,
            legalName: siteConfig.legalName,
            founder: {
              '@type': 'Person',
              name: siteConfig.proprietor,
              jobTitle: 'Proprietor & Founder',
            },
          },
        }}
      />
      <PageHeader
        eyebrow="About Us"
        title="Designed With Intention."
        description="A Delhi-based interior design studio creating residential interiors that are experienced, not just seen."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About' }]}
      />

      <AboutSection />

      <WhyUs />
      <ProcessTimeline />

      <section className="py-12 md:py-16 lg:py-18 bg-stone-100/60 border-t border-stone-200">
        <div className="container-lux">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent block mb-2">
                  Studio Location · New Delhi
                </span>
                <h2 className="text-section font-light text-charcoal-800 mb-4">
                  Based in New Delhi. Serving Delhi NCR.
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-stone-600 mb-6">
                  Our studio is located at {siteConfig.address.line1}, {siteConfig.address.line2},{' '}
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}.
                  We serve clients across {siteConfig.serviceAreas.join(', ')}.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button to="/contact" variant="primary">Book Consultation</Button>
                  <Button to="/services" variant="outline">Explore Services</Button>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative w-full h-[280px] sm:h-[320px] bg-stone-200 border border-stone-300/80 shadow-sm overflow-hidden">
                  <iframe
                    title="HOMES24DESIGNS Studio Location Map"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.mapsQuery)}&output=embed`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
