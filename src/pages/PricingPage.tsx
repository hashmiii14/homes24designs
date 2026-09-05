import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/layout/PageHeader';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import ConsultationForm from '@/components/sections/ConsultationForm';

export default function PricingPage() {
  return (
    <>
      <SEO
        title="Interior Design Cost & Packages in Delhi NCR | HOMES24DESIGNS"
        description="Transparent interior design pricing and packages starting at ₹50,000 for homes in Okhla, South Delhi & Delhi NCR. Detailed BOQ, genuine hardware & 45-day handover."
        path="/pricing"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'PriceSpecification',
          name: 'Interior Design Pricing',
        }}
      />
      <PageHeader
        eyebrow="Pricing"
        title="Designed Around Your Scope"
        description="Three starting points based on the breadth of your interior requirements. Every quote is customised after a consultation."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Pricing' }]}
      />
      <PricingSection />
      <ConsultationForm />
      <FAQSection />
    </>
  );
}
