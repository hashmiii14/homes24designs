import { useParams, Navigate, Link } from 'react-router-dom';
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Clock,
  FileCheck,
  Phone,
  MessageSquare,
} from 'lucide-react';
import SEO from '@/components/ui/SEO';
import Reveal from '@/components/ui/Reveal';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { services } from '@/data/services';
import { journalPosts } from '@/data/journal';
import { siteConfig } from '@/data/siteConfig';
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

  const otherServices = services.filter((s) => s.slug !== slug);

  const webpSrc = service.image.replace(/\.jpg$/, '.webp');

  return (
    <>
      <SEO
        title={`${service.title} in Delhi NCR | HOMES24DESIGNS`}
        description={service.description}
        path={`/services/${service.slug}`}
        type="article"
        image={service.image}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.description,
          image: service.image,
          provider: {
            '@type': 'Organization',
            name: 'HOMES24DESIGNS',
            url: siteConfig.url,
            telephone: siteConfig.phone,
          },
          areaServed: 'Delhi, New Delhi, Delhi NCR',
        }}
      />

      {/* Header — Journal-Style Editorial Intro */}
      <section className="pt-28 md:pt-36 pb-8 md:pb-12 bg-stone-100 overflow-hidden">
        <div className="container-lux">
          {/* Back to Services Navigation */}
          <div className="mb-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent hover:text-accent-dark transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Services</span>
            </Link>
          </div>

          <Breadcrumbs
            items={[
              { label: 'Home', path: '/' },
              { label: 'Services', path: '/services' },
              { label: service.title },
            ]}
          />

          <div className="mt-6 sm:mt-8 max-w-4xl">
            <span className="text-[10.5px] font-semibold tracking-[0.2em] uppercase text-accent block">
              HOMES24DESIGNS · Interior Design Service
            </span>
            <h1 className="text-display font-light text-charcoal-900 break-words mt-2 font-serif">
              {service.title}
            </h1>
            <p className="mt-3 sm:mt-4 text-sm md:text-base text-stone-600 leading-relaxed max-w-3xl">
              {service.description}
            </p>

            {/* Service Highlights / Trust Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-stone-600">
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
                Bespoke Design Direction
              </span>
              <span className="w-1 h-1 rounded-full bg-stone-300 hidden sm:block" />
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
                10-Year Warranty
              </span>
              <span className="w-1 h-1 rounded-full bg-stone-300 hidden sm:block" />
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
                45-Day Handover
              </span>
              <span className="w-1 h-1 rounded-full bg-stone-300 hidden sm:block" />
              <span className="flex items-center gap-1.5 font-medium">
                <FileCheck className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
                100% Itemized BOQ
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured image — Matches Journal section presentation */}
      <section className="pb-16 md:pb-20 bg-stone-100 overflow-hidden">
        <div className="container-lux">
          <Reveal>
            <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <picture className="w-full h-full">
                <source srcSet={webpSrc} type="image/webp" />
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article Content & Editorial Layout */}
      <section className="py-14 md:py-24 bg-ivory overflow-hidden">
        <div className="container-lux">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Main Editorial Article Column */}
            <article className="lg:col-span-8 max-w-3xl">
              {/* Overview & Design Philosophy */}
              <Reveal>
                <div className="mb-10">
                  <h2 className="text-xl md:text-2xl font-serif font-normal text-charcoal-900 mb-4">
                    About This Service
                  </h2>
                  <p className="text-base leading-relaxed text-stone-700">
                    {service.longDescription}
                  </p>
                </div>
              </Reveal>

              {/* What's Included & Specifications */}
              <Reveal delay={100}>
                <div className="mb-12">
                  <h3 className="text-lg md:text-xl font-serif font-normal text-charcoal-900 mb-5">
                    What's Included &amp; Key Specifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 bg-white border border-stone-200/80 shadow-2xs"
                      >
                        <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={2} />
                        <span className="text-xs sm:text-sm font-medium text-charcoal-800 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Turnkey Delivery Milestones */}
              <Reveal delay={150}>
                <div className="mb-12 pt-8 border-t border-stone-200">
                  <h3 className="text-lg md:text-xl font-serif font-normal text-charcoal-900 mb-5">
                    Our 4-Step Turnkey Process
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white border border-stone-200/80 flex items-start gap-3.5">
                      <span className="w-6 h-6 rounded-full bg-charcoal-900 text-ivory text-xs font-semibold flex items-center justify-center shrink-0">
                        1
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-charcoal-900">
                          Consultation &amp; Spatial Planning
                        </h4>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          On-site assessment, lifestyle brief, and custom 2D layouts tailored to your exact floor plan.
                        </p>
                      </div>
                    </div>
                    <div className="p-4 bg-white border border-stone-200/80 flex items-start gap-3.5">
                      <span className="w-6 h-6 rounded-full bg-charcoal-900 text-ivory text-xs font-semibold flex items-center justify-center shrink-0">
                        2
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-charcoal-900">
                          3D Photorealistic Visualisation &amp; Itemized BOQ
                        </h4>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          Experience your finished space before work begins with 100% transparent pricing and material specs.
                        </p>
                      </div>
                    </div>
                    <div className="p-4 bg-white border border-stone-200/80 flex items-start gap-3.5">
                      <span className="w-6 h-6 rounded-full bg-charcoal-900 text-ivory text-xs font-semibold flex items-center justify-center shrink-0">
                        3
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-charcoal-900">
                          Precision Factory Joinery &amp; On-Site Execution
                        </h4>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          German-precision edge banding, high-grade marine ply, branded hardware (Hafele/Blum), and daily supervisor tracking.
                        </p>
                      </div>
                    </div>
                    <div className="p-4 bg-white border border-stone-200/80 flex items-start gap-3.5">
                      <span className="w-6 h-6 rounded-full bg-charcoal-900 text-ivory text-xs font-semibold flex items-center justify-center shrink-0">
                        4
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-charcoal-900">
                          45-Day Handover &amp; 10-Year Warranty
                        </h4>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          Deep site cleaning, quality inspection checklist, official warranty certificate, and lifetime post-handover support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Editorial Note & Bridge to Form (Matches Journal Detail Page) */}
              <Reveal delay={200}>
                <div className="mt-10 p-6 sm:p-8 bg-stone-50 border-l-2 border-accent">
                  <p className="text-base sm:text-lg font-serif italic text-charcoal-800 mb-2">
                    &ldquo;Thoughtful interior design turns everyday routines into moments of ease and understated luxury.&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    Have questions about your space, modular kitchen layout, or materials? Speak directly with Principal Designer Ehtasham for a personalized estimate and layout review.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="#consultation"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal-800 hover:bg-charcoal-900 text-ivory text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
                      style={{ color: '#f7f4ef' }}
                    >
                      <span>Request Service Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hello HOMES24DESIGNS, I am interested in your ${service.title} service.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-stone-300 text-charcoal-800 text-xs font-medium tracking-wide hover:bg-stone-100 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-accent" />
                      <span>WhatsApp Inquire</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            </article>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Other Services Navigation List */}
                <div className="bg-stone-50 p-6 border border-stone-200/70">
                  <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4">
                    All Interior Services
                  </h3>
                  <ul className="space-y-2">
                    {otherServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          className="group flex items-center justify-between py-1.5 px-2 text-sm text-charcoal-700 hover:text-accent hover:bg-stone-100/70 transition-colors rounded-none"
                        >
                          <span>{s.shortTitle}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-4 border-t border-stone-200">
                    <Link
                      to="/services"
                      className="text-xs font-semibold uppercase tracking-wider text-accent hover:text-accent-dark transition-colors"
                    >
                      View All Services &rarr;
                    </Link>
                  </div>
                </div>

                {/* Related Design Guides from Journal (Matches JournalArticlePage Sidebar) */}
                {relatedArticles.length > 0 && (
                  <div className="bg-stone-50 p-6 border border-stone-200/70">
                    <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4">
                      Related Design Guides
                    </h3>
                    <ul className="space-y-4">
                      {relatedArticles.map((r) => (
                        <li key={r.slug}>
                          <Link to={`/journal/${r.slug}`} className="group block">
                            <div className="aspect-[16/10] overflow-hidden mb-2 bg-stone-100">
                              <img
                                src={r.image}
                                alt={r.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                              />
                            </div>
                            <p className="text-sm font-medium text-charcoal-700 group-hover:text-accent transition-colors leading-snug">
                              {r.title}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Quick Contact Card */}
                <div className="bg-charcoal-900 text-ivory p-6 shadow-md border border-charcoal-800">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-accent-light font-semibold block mb-1">
                    Direct Contact
                  </span>
                  <h4 className="text-base font-serif font-light text-ivory">
                    Speak With A Designer
                  </h4>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    Have architectural drawings ready or need an on-site visit in Delhi NCR?
                  </p>
                  <div className="mt-4 space-y-2">
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center gap-2 text-xs text-ivory hover:text-accent-light transition-colors py-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-accent-light" />
                      <span>{siteConfig.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Consultation Form at page bottom */}
      <ConsultationForm />
    </>
  );
}
