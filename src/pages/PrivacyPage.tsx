import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/layout/PageHeader';
import { siteConfig } from '@/data/siteConfig';

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | HOMES24DESIGNS"
        description="Privacy policy for HOMES24DESIGNS — how we handle your information when you contact us or use our website."
        path="/privacy"
      />
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Privacy Policy' }]}
      />
      <section className="py-16 md:py-24 bg-ivory overflow-hidden">
        <div className="container-lux">
          <div className="max-w-2xl space-y-6 text-sm leading-relaxed text-stone-600">
            <p className="text-base">
              This privacy policy describes how {siteConfig.name} handles information you share
              with us through this website.
            </p>
            <div>
              <h2 className="text-lg font-medium text-charcoal-800 mb-2">Information We Collect</h2>
              <p>
                When you submit a consultation request or contact us through this website, we
                collect the information you provide — including your name, phone number, email,
                location, property type and message. We use this information solely to respond to
                your enquiry.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-charcoal-800 mb-2">How We Use Your Information</h2>
              <p>
                Your information is used to respond to your enquiry, schedule consultations and
                discuss your interior design requirements. We do not share your personal
                information with third parties for marketing purposes.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-charcoal-800 mb-2">Contact</h2>
              <p>
                If you have questions about this policy, you can reach us at{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">{siteConfig.email}</a>{' '}
                or <a href={`tel:${siteConfig.phoneRaw}`} className="text-accent hover:underline">{siteConfig.phone}</a>.
              </p>
            </div>
            <p className="text-xs text-stone-500 pt-4">
              This page is a general privacy policy. It is not legal advice. Please consult a
              qualified legal professional for advice specific to your situation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
