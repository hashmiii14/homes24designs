import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import SEO from '@/components/ui/SEO';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { journalPosts } from '@/data/journal';
import { services } from '@/data/services';
import ConsultationForm from '@/components/sections/ConsultationForm';

export default function JournalArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/journal" replace />;

  const related = journalPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: 'HOMES24DESIGNS' },
  };

  const faqLd = post.faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null;

  return (
    <>
      <SEO
        title={post.seoTitle}
        description={post.metaDescription}
        path={`/journal/${post.slug}`}
        type="article"
        image={post.image}
        jsonLd={faqLd ? [articleLd, faqLd] : articleLd}
      />

      {/* Header */}
      <section className="pt-28 md:pt-36 pb-12 bg-stone-100">
        <div className="container-lux">
          <Breadcrumbs
            items={[
              { label: 'Home', path: '/' },
              { label: 'Journal', path: '/journal' },
              { label: post.title },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-display font-light text-charcoal-800">{post.title}</h1>
            <div className="mt-5 flex items-center gap-4 text-xs text-stone-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                {post.readingTime}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" strokeWidth={1.5} />
                {post.author}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="pb-16 md:pb-20 bg-stone-100">
        <div className="container-lux">
          <Reveal>
            <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <img src={post.image} alt={post.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article content */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-lux">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <article className="lg:col-span-8 max-w-2xl">
              {post.content.map((section, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div className="mb-10">
                    <h2 className="text-xl md:text-2xl font-medium text-charcoal-800 mb-4">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((p, j) => (
                      <p key={j} className="text-base leading-relaxed text-stone-600 mb-4">
                        {p}
                      </p>
                    ))}
                    {section.subheadings?.map((sub, k) => (
                      <div key={k} className="mt-6">
                        <h3 className="text-lg font-medium text-charcoal-700 mb-3">{sub.heading}</h3>
                        {sub.paragraphs.map((sp, l) => (
                          <p key={l} className="text-base leading-relaxed text-stone-600 mb-3">{sp}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}

              {/* FAQ within article */}
              {post.faq && (
                <div className="mt-12 pt-8 border-t border-stone-200">
                  <h2 className="text-xl font-medium text-charcoal-800 mb-6">FAQ</h2>
                  <div className="space-y-4">
                    {post.faq.map((f, i) => (
                      <div key={i}>
                        <h3 className="text-base font-medium text-charcoal-700 mb-1.5">{f.question}</h3>
                        <p className="text-sm leading-relaxed text-stone-600">{f.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-12 p-8 bg-stone-50 border-l-2 border-accent">
                <p className="text-lg font-light text-charcoal-800 mb-4">
                  Let's design a home that feels like yours.
                </p>
                <Button to="/contact" variant="primary">Book a Consultation</Button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <div className="bg-stone-50 p-6">
                  <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4">
                    Related Services
                  </h3>
                  <ul className="space-y-3">
                    {services.slice(0, 5).map((s) => (
                      <li key={s.slug}>
                        <Link to={`/services/${s.slug}`} className="group flex items-center justify-between text-sm text-charcoal-700 hover:text-accent transition-colors">
                          {s.shortTitle}
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-stone-50 p-6">
                  <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4">
                    Related Articles
                  </h3>
                  <ul className="space-y-4">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link to={`/journal/${r.slug}`} className="group block">
                          <div className="aspect-[16/10] overflow-hidden mb-2">
                            <img src={r.image} alt={r.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                          </div>
                          <p className="text-sm font-medium text-charcoal-700 group-hover:text-accent transition-colors leading-snug">
                            {r.title}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ConsultationForm />
    </>
  );
}
