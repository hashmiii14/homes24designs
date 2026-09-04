import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/layout/PageHeader';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ConsultationForm from '@/components/sections/ConsultationForm';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Interior Design Services in Delhi | HOMES24DESIGNS"
        description="Full home interiors, modular kitchens, living rooms, bedrooms, wardrobes, false ceiling, lighting, wall design and custom interior solutions across Delhi and Delhi NCR."
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
    </>
  );
}
