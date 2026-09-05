import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/layout/PageHeader';
import ContactSection from '@/components/sections/ContactSection';
import ConsultationForm from '@/components/sections/ConsultationForm';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact HOMES24DESIGNS | Studio in Batla House, Jamia Nagar, Okhla, New Delhi"
        description="Contact HOMES24DESIGNS for interior design consultations in Okhla, Jamia Nagar, Batla House, South Delhi and Delhi NCR. Call +91 9818083436 or visit our studio."
        path="/contact"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact HOMES24DESIGNS',
        }}
      />
      <PageHeader
        eyebrow="Contact"
        title="Get In Touch"
        description="Reach out to discuss your home, schedule a consultation, or ask a question. We respond promptly."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
      />
      <ConsultationForm />
      <ContactSection />
    </>
  );
}
