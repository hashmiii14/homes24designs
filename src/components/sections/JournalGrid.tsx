import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { journalPosts } from '@/data/journal';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

interface JournalGridProps {
  limit?: number;
  showHeading?: boolean;
}

export default function JournalGrid({ limit, showHeading = true }: JournalGridProps) {
  const posts = limit ? journalPosts.slice(0, limit) : journalPosts;

  return (
    <section className={`py-16 md:py-24 ${showHeading ? 'bg-ivory' : 'bg-stone-50'}`}>
      <div className="container-lux">
        {showHeading && (
          <Reveal>
            <SectionHeading
              eyebrow="Journal"
              title="Ideas, Guides & Interior Design Insights"
              description="Practical writing on interior design for Delhi homes — from planning and materials to lighting and cost."
            />
          </Reveal>
        )}

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link to={`/journal/${post.slug}`} className="group block h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-ivory/90 text-[10px] tracking-[0.15em] uppercase text-charcoal-700 font-medium">
                      Article
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-3 text-xs text-stone-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" strokeWidth={1.5} />
                      {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" strokeWidth={1.5} />
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-medium text-charcoal-800 group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium tracking-wide uppercase text-accent">
                    Read Article
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {showHeading && (
          <div className="mt-12 text-center">
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-charcoal-800 text-charcoal-800 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-charcoal-800 hover:text-ivory"
            >
              View All Articles
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
