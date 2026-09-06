import { useParams, Navigate, Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/layout/PageHeader';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';
import { journalPosts } from '@/data/journal';
import ConsultationForm from '@/components/sections/ConsultationForm';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const relatedArticles = journalPosts
    .filter((p) =>
      service.title.toLowerCase().split(' ').some((word) =>
        p.title.toLowerCase().includes(word.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(word.toLowerCase())
      )
    )
    .slice(0, 3);

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <SEO
        title={`${service.title} in Delhi | HOMES24DESIGNS`}
        description={service.description}
        path={`/services/${service.slug}`}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.description,
          provider: { '@type': 'Organization', name: 'HOMES24DESIGNS' },
          areaServed: 'Delhi, New Delhi, Delhi NCR',
        }}
      />
      <PageHeader
        eyebrow="Service"
        title={service.title}
        description={service.description}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: service.shortTitle },
        ]}
      />

      {/* Hero image */}
      <section className="pb-12 md:pb-20 bg-ivory overflow-hidden">
        <div className="container-lux">
          <Reveal>
            <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-stone-50 overflow-hidden">
        <div className="container-lux">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="text-2xl font-light text-charcoal-800 mb-6">
                  About This Service
                </h2>
                <p className="text-base leading-relaxed text-stone-600">
                  {service.longDescription}
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-10">
                  <h3 className="text-lg font-medium text-charcoal-800 mb-4">What's Included</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-stone-600">
                        <Check className="w-4 h-4 mt-0.5 text-accent shrink-0" strokeWidth={2} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#consultation"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-charcoal-800 hover:bg-charcoal-900 text-ivory text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm active:scale-95 touch-manipulation"
                    style={{ color: '#f7f4ef' }}
                  >
                    <span>Request Service Consultation</span>
                  </a>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-xs text-charcoal-700 hover:text-accent font-medium transition-colors"
                  >
                    <span>Browse All Services &rarr;</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Reveal delay={150}>
                <div className="bg-ivory p-6 md:p-8 sticky top-24">
                  <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4">
                    Other Services
                  </h3>
                  <ul className="space-y-3">
                    {otherServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          className="group flex items-center justify-between text-sm text-charcoal-700 hover:text-accent transition-colors"
                        >
                          {s.shortTitle}
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-stone-200">
                    <Button to="/services" variant="ghost">View All Services</Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 md:py-20 bg-ivory overflow-hidden">
          <div className="container-lux">
            <Reveal>
              <h2 className="text-section font-light text-charcoal-800 mb-10">
                Related Articles
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {relatedArticles.map((post, i) => (
                <Reveal key={post.slug} delay={i * 80}>
                  <Link to={`/journal/${post.slug}`} className="group block">
                    <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                      <img src={post.image} alt={post.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                    <h3 className="mt-4 text-base font-medium text-charcoal-800 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <ConsultationForm />
    </>
  );
}
