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

      <section className="py-20 md:py-28 bg-stone-100/60 border-t border-stone-200">
        <div className="container-lux">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-section font-light text-charcoal-800 mb-6">
                Based in New Delhi. Serving Delhi NCR.
              </h2>
              <p className="text-base leading-relaxed text-stone-600">
                Our studio is located at {siteConfig.address.line1}, {siteConfig.address.line2},{' '}
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}.
                We serve clients across {siteConfig.serviceAreas.join(', ')}.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/services" variant="outline">Explore Services</Button>
                <Button to="/journal" variant="ghost">Read Our Journal</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
