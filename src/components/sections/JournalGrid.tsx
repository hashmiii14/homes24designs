import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, Clock, BookOpen } from 'lucide-react';
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
    <section className={`py-12 md:py-16 lg:py-18 ${showHeading ? 'bg-ivory' : 'bg-stone-50'}`}>
      <div className="container-lux">
        {showHeading && (
          <Reveal>
            <SectionHeading
              eyebrow="Design Journal"
              title="Ideas, Guides & Practical Insights"
              description="Thoughtful writing on residential interior design for Delhi homes — from spatial planning and material durability to lighting and budget guidance."
            />
          </Reveal>
        )}

        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 items-stretch">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 70} className="h-full">
              <Link
                to={`/journal/${post.slug}`}
                className="group flex flex-col h-full bg-white border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-accent/50 transition-all duration-500 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 shrink-0">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                    loading="lazy"
                    width="600"
                    height="375"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="px-3 py-1 bg-ivory/95 backdrop-blur-sm text-[10px] tracking-[0.18em] uppercase text-charcoal-800 font-semibold shadow-sm">
                      Guide
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Meta info */}
                    <div className="flex items-center gap-3.5 text-xs text-stone-500 mb-3">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
                        {new Date(post.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-stone-300" />
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-stone-400" strokeWidth={1.5} />
                        {post.readingTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl md:text-[1.3rem] font-medium text-charcoal-900 leading-snug group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-3 text-sm leading-relaxed text-stone-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-accent group-hover:text-accent-dark transition-colors">
                      <span>Read Guide</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                    </span>
                    <span className="text-[11px] text-stone-400 uppercase tracking-wider flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-stone-300" />
                      <span>Studio Journal</span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {showHeading && (
          <Reveal delay={250}>
            <div className="mt-10 md:mt-12 text-center">
              <Link
                to="/journal"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-charcoal-800 text-charcoal-800 text-sm font-medium tracking-wide transition-all duration-300 ease-lux hover:bg-charcoal-800 hover:text-ivory shadow-sm"
              >
                <span>View All Journal Articles</span>
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
