import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, Clock, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { journalPosts } from '@/data/journal';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

interface JournalGridProps {
  limit?: number;
  showHeading?: boolean;
}

const categories = [
  'All Articles',
  'Kitchens & Storage',
  'Living & Bedrooms',
  'Planning & Budgets',
  'Small Spaces',
] as const;

export default function JournalGrid({ limit, showHeading = true }: JournalGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');

  // Filter posts based on topic
  const filteredPosts = useMemo(() => {
    let list = journalPosts;
    if (selectedCategory === 'Kitchens & Storage') {
      list = journalPosts.filter((p) => p.slug.includes('kitchen') || p.slug.includes('wardrobe'));
    } else if (selectedCategory === 'Living & Bedrooms') {
      list = journalPosts.filter((p) => p.slug.includes('living') || p.slug.includes('bedroom') || p.slug.includes('ceiling'));
    } else if (selectedCategory === 'Planning & Budgets') {
      list = journalPosts.filter((p) => p.slug.includes('cost') || p.slug.includes('choose') || p.slug.includes('mistakes'));
    } else if (selectedCategory === 'Small Spaces') {
      list = journalPosts.filter((p) => p.slug.includes('small') || p.slug.includes('modern'));
    }

    if (list.length === 0) list = journalPosts;
    return limit ? list.slice(0, limit) : list;
  }, [selectedCategory, limit]);

  // Map category tag for visual richness
  const getCategoryTag = (slug: string) => {
    if (slug.includes('kitchen')) return 'Modular Kitchens';
    if (slug.includes('cost')) return 'Budget & Pricing';
    if (slug.includes('bedroom')) return 'Bedroom Interiors';
    if (slug.includes('living')) return 'Living Rooms';
    if (slug.includes('ceiling')) return 'Lighting & Ceilings';
    if (slug.includes('choose')) return 'Designer Selection';
    if (slug.includes('small')) return 'Compact Apartments';
    if (slug.includes('mistakes')) return 'Design Advice';
    return 'Interior Guide';
  };

  // Extract key takeaway highlight for each article
  const getTakeaway = (slug: string) => {
    if (slug.includes('kitchen')) return 'Focus: Work triangle, moisture-resistant cabinetry & heavy cookware storage';
    if (slug.includes('cost')) return 'Focus: Scope clarity, material specifications & transparent budget allocation';
    if (slug.includes('bedroom')) return 'Focus: Restful acoustics, layered bedside task lighting & built-in wardrobes';
    if (slug.includes('living')) return 'Focus: Unobstructed circulation, proportioned TV consoles & feature textures';
    if (slug.includes('ceiling')) return 'Focus: Indirect cove lighting, magnetic track lights & spatial zoning';
    if (slug.includes('choose')) return 'Focus: Local Delhi NCR supplier knowledge, portfolio review & direct consultation';
    if (slug.includes('small')) return 'Focus: Vertical space optimization, multi-functional furniture & neutral palettes';
    if (slug.includes('mistakes')) return 'Focus: Avoiding harsh single-point lighting, visual clutter & poor flow';
    return 'Focus: Practical space planning, material longevity & timeless aesthetics';
  };

  return (
    <section className={`py-10 md:py-14 ${showHeading ? 'bg-ivory' : 'bg-stone-50'}`}>
      <div className="container-lux">
        {showHeading && (
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-10">
              <SectionHeading
                eyebrow="Design Journal &amp; Practical Guides"
                title="Ideas, Guides &amp; Interior Insights"
                description="Practical, fluff-free writing for Delhi NCR homeowners — covering layout planning, material selection, false ceiling lighting, and realistic budget guidance."
                align="left"
              />
              <div className="hidden lg:flex items-center gap-2 text-xs text-stone-500 bg-stone-100/80 px-4 py-2 border border-stone-200 shrink-0">
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                <span>9 Comprehensive Field Guides Available</span>
              </div>
            </div>

            {/* Category Filter Pills (Fills the visual header gap and adds interactivity) */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {categories.map((cat) => (
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

        {/* Dense, Balanced Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 items-stretch">
          {filteredPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60} className="h-full">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="px-3 py-1 bg-ivory/95 backdrop-blur-sm text-[10px] tracking-[0.16em] uppercase text-charcoal-800 font-semibold shadow-sm">
                      {getCategoryTag(post.slug)}
                    </span>
                  </div>
                </div>

                {/* Card Content & Data */}
                <div className="p-6 md:p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Meta info row */}
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

                    {/* Title */}
                    <h3 className="font-serif text-lg md:text-[1.25rem] font-medium text-charcoal-900 leading-snug group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-stone-600 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Takeaway Feature Box (Fills card body purposefully with real data) */}
                    <div className="mt-3.5 p-2.5 bg-stone-50 border border-stone-200/70 text-[11px] text-stone-600 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" strokeWidth={1.8} />
                      <span className="line-clamp-2 leading-tight">{getTakeaway(post.slug)}</span>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-accent group-hover:text-accent-dark transition-colors">
                      <span>Read Guide</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                    </span>
                    <span className="text-[11px] text-stone-400 uppercase tracking-wider">
                      HOMES24DESIGNS
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {showHeading && (
          <Reveal delay={200}>
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
              <Link
                to="/journal"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-charcoal-800 text-ivory text-sm font-medium tracking-wide transition-all duration-300 ease-lux hover:bg-charcoal-900 shadow-sm"
              >
                <span>Browse All 9 Design Guides</span>
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-stone-300 text-charcoal-700 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-stone-100"
              >
                <span>Ask a Specific Design Question</span>
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
