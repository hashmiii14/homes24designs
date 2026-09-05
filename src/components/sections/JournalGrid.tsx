import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';
import { journalPosts } from '@/data/journal';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

interface JournalGridProps {
  limit?: number;
  showHeading?: boolean;
}

const filterCategories = [
  'All Articles',
  'Kitchens & Materials',
  'Living & Bedrooms',
  'Planning & Local Guides',
  'Small Spaces',
] as const;

export default function JournalGrid({ limit, showHeading = true }: JournalGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');

  // Map category tag for clean visual pill
  const getCategoryTag = (slug: string) => {
    if (slug.includes('materials')) return 'Materials & Durability';
    if (slug.includes('okhla')) return 'Delhi & Okhla Guide';
    if (slug.includes('kitchen')) return 'Modular Kitchens';
    if (slug.includes('cost')) return 'Budget & Planning';
    if (slug.includes('bedroom')) return 'Bedroom Interiors';
    if (slug.includes('living')) return 'Living Rooms';
    if (slug.includes('ceiling')) return 'Lighting & Ceilings';
    if (slug.includes('choose')) return 'Designer Selection';
    if (slug.includes('small')) return 'Small Spaces';
    if (slug.includes('mistakes')) return 'Design Advice';
    return 'Interior Guide';
  };

  // Filter posts based on category (used mainly on Journal page)
  const filteredPosts = useMemo(() => {
    let list = journalPosts;
    if (selectedCategory === 'Kitchens & Materials') {
      list = journalPosts.filter(
        (p) => p.slug.includes('kitchen') || p.slug.includes('materials') || p.slug.includes('small')
      );
    } else if (selectedCategory === 'Living & Bedrooms') {
      list = journalPosts.filter(
        (p) => p.slug.includes('living') || p.slug.includes('bedroom') || p.slug.includes('ceiling')
      );
    } else if (selectedCategory === 'Planning & Local Guides') {
      list = journalPosts.filter(
        (p) => p.slug.includes('cost') || p.slug.includes('choose') || p.slug.includes('mistakes') || p.slug.includes('okhla')
      );
    } else if (selectedCategory === 'Small Spaces') {
      list = journalPosts.filter(
        (p) => p.slug.includes('small') || p.slug.includes('modern') || p.slug.includes('ceiling')
      );
    }
    return limit ? list.slice(0, limit) : list;
  }, [selectedCategory, limit]);

  return (
    <section id="journal" className="py-12 md:py-16 lg:py-18 bg-stone-50">
      <div className="container-lux">
        {/* Section Heading — Editorial & Balanced */}
        {showHeading && (
          <Reveal>
            <SectionHeading
              eyebrow="Journal"
              title="Interior Design Ideas & Guides"
              description="Practical writing on interior design for Delhi homes — from spatial planning and materials to lighting, ergonomics and realistic budgets."
            />
          </Reveal>
        )}

        {/* Filter Pills (Shown only on full Journal page) */}
        {!limit && (
          <Reveal delay={60}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-charcoal-800 text-ivory shadow-sm'
                      : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        {/* Editorial 3-Column Article Card Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 items-stretch ${showHeading ? 'mt-10 md:mt-12' : 'mt-6'}`}>
          {filteredPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 50} className="h-full">
              <div className="group flex flex-col h-full bg-white border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-accent/50 transition-all duration-500 overflow-hidden">
                {/* Image Container with Consistent Aspect Ratio */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 shrink-0">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="375"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-ivory/95 backdrop-blur-sm text-[10px] tracking-[0.16em] uppercase text-charcoal-800 font-semibold shadow-sm">
                      {getCategoryTag(post.slug)}
                    </span>
                  </div>
                </div>

                {/* Card Content — Controlled Spacing & Balanced Typography */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Date & Reading Time */}
                    <div className="flex items-center gap-3 text-xs text-stone-500 mb-2.5">
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

                    {/* Title with Predictable Line-Height and 2-Line Truncation */}
                    <h3 className="font-serif text-lg sm:text-[1.15rem] font-medium text-charcoal-900 leading-snug line-clamp-2">
                      <Link
                        to={`/journal/${post.slug}`}
                        className="hover:text-accent transition-colors duration-300"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt with Controlled 2-Line Truncation */}
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-stone-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Aligned Card Footer with explicit Link Button */}
                  <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between">
                    <Link
                      to={`/journal/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-accent hover:text-accent-dark transition-colors py-1 px-2.5 -ml-2 rounded bg-stone-50 hover:bg-stone-100"
                      aria-label={`Read guide: ${post.title}`}
                    >
                      <span>Read Guide</span>
                      <ArrowUpRight
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.5}
                      />
                    </Link>
                    <span className="text-[11px] text-stone-400 tracking-wider uppercase">
                      HOMES24DESIGNS
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* View All Articles Button (Shown on Home Page) */}
        {limit && (
          <Reveal delay={120}>
            <div className="mt-10 md:mt-12 text-center">
              <Link
                to="/journal"
                className="inline-flex items-center gap-2 px-7 py-3 border border-charcoal-800 text-charcoal-800 text-xs font-semibold tracking-widest uppercase hover:bg-charcoal-800 hover:text-ivory transition-all duration-300"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
