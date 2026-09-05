import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/layout/PageHeader';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ConsultationForm from '@/components/sections/ConsultationForm';
import Reveal from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteConfig';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Interior Design Services in Okhla, South Delhi & Delhi NCR | HOMES24DESIGNS"
        description="Full home interiors, modular kitchens, living rooms, bedrooms, wardrobes, false ceiling, lighting, wall design and custom turnkey solutions across Okhla, South Delhi & Delhi NCR."
        path="/services"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Interior Design Services',
        }}
      />
      <PageHeader
        eyebrow="Our Services"
        title="Interior Design Services"
        description="From full home interiors to focused solutions, each service is designed around your space, your routine and your aesthetic."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Services' }]}
      />
      <ServicesGrid />
      <ConsultationForm />

      <section className="py-12 md:py-16 bg-stone-100/60 border-t border-stone-200">
        <div className="container-lux">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent block mb-2">
                  Service Area &amp; Studio
                </span>
                <h2 className="text-section font-light text-charcoal-800 mb-4">
                  Serving Okhla, South Delhi &amp; Delhi NCR
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-stone-600 mb-4">
                  Our interior design and turnkey execution services are available across Okhla, Jamia Nagar, Batla House, Jasola, New Friends Colony, South Delhi, Central Delhi, New Delhi, Noida, Gurgaon, and the wider Delhi NCR region.
                </p>
                <p className="text-xs text-stone-500">
                  Studio: {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city} {siteConfig.address.pincode}
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="relative w-full h-[280px] sm:h-[320px] bg-stone-200 border border-stone-300/80 shadow-sm overflow-hidden">
                  <iframe
                    title="HOMES24DESIGNS Service Area Map"
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
