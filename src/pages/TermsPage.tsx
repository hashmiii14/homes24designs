import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/layout/PageHeader';
import { siteConfig } from '@/data/siteConfig';

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms & Conditions | HOMES24DESIGNS"
        description="Terms and conditions for using the HOMES24DESIGNS website and engaging our interior design services."
        path="/terms"
      />
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Terms & Conditions' }]}
      />
      <section className="py-16 md:py-24 bg-ivory overflow-hidden">
        <div className="container-lux">
          <div className="max-w-2xl space-y-6 text-sm leading-relaxed text-stone-600">
            <p className="text-base">
              These terms apply to your use of the {siteConfig.name} website and any services
              discussed through it.
            </p>
            <div>
              <h2 className="text-lg font-medium text-charcoal-800 mb-2">Use of This Website</h2>
              <p>
                The content on this website is provided for general information about our interior
                design services. It does not constitute a binding offer or contract. Project
                scope, pricing and timelines are discussed and agreed during consultation.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-charcoal-800 mb-2">Consultation Requests</h2>
              <p>
                Submitting a consultation request through this website expresses your interest
                in our services. It does not create a binding commitment from either party until
                a formal agreement is made.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-charcoal-800 mb-2">Pricing</h2>
              <p>
                Any pricing information presented on this website is indicative and based on
                general scope categories. Final pricing depends on your specific space, scope,
                materials, finishes and customisation, and is provided after a consultation.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-charcoal-800 mb-2">Contact</h2>
              <p>
                For questions about these terms, contact us at{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">{siteConfig.email}</a>{' '}
                or <a href={`tel:${siteConfig.phoneRaw}`} className="text-accent hover:underline">{siteConfig.phone}</a>.
              </p>
            </div>
            <p className="text-xs text-stone-500 pt-4">
              This page is a general terms document. It is not legal advice. Please consult a
              qualified legal professional for advice specific to your situation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
