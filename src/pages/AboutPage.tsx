import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/layout/PageHeader';
import AboutSection from '@/components/sections/AboutSection';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import WhyUs from '@/components/sections/WhyUs';
import { siteConfig } from '@/data/siteConfig';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About HOMES24DESIGNS | Designer Ehtasham | Studio in New Delhi"
        description="Learn about HOMES24DESIGNS and designer Ehtasham — premier interior design studio based in New Delhi serving Delhi NCR."
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
              name: siteConfig.principalDesigner,
              jobTitle: 'Designer',
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
    </>
  );
}
