import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/layout/PageHeader';
import FAQSection from '@/components/sections/FAQSection';
import ConsultationForm from '@/components/sections/ConsultationForm';
import { faqItems } from '@/data/faq';

export default function FAQPage() {
  return (
    <>
      <SEO
        title="FAQ — Interior Design Questions Answered | HOMES24DESIGNS"
        description="Answers to common questions about interior design costs, timelines, 45-day turnkey process, materials and working with HOMES24DESIGNS in Okhla, South Delhi & Delhi NCR."
        path="/faq"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }}
      />
      <PageHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Answers to common questions about working with HOMES24DESIGNS."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'FAQ' }]}
      />
      <FAQSection />
      <ConsultationForm />
    </>
  );
}
