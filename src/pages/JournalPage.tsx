import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/layout/PageHeader';
import JournalGrid from '@/components/sections/JournalGrid';

export default function JournalPage() {
  return (
    <>
      <SEO
        title="Journal — Interior Design Ideas & Guides | HOMES24DESIGNS"
        description="Practical interior design guides for homes in Okhla, South Delhi & Delhi NCR — spatial planning, modular kitchens, material selection, cost breakdowns, and expert design advice."
        path="/journal"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'HOMES24DESIGNS Journal',
        }}
      />
      <PageHeader
        eyebrow="Journal"
        title="Interior Design Ideas & Guides"
        description="Practical writing on interior design for Delhi homes — from planning and materials to lighting and cost."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Journal' }]}
      />
      <JournalGrid showHeading={false} />
    </>
  );
}
