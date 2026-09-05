import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Calendar,
  Clock,
  BookOpen,
  CheckCircle2,
  Compass,
  Layers,
  Ruler,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { journalPosts } from '@/data/journal';
import Reveal from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteConfig';

interface JournalGridProps {
  limit?: number;
  showHeading?: boolean;
}

const filterCategories = [
  'All Articles',
  'Kitchens & Storage',
  'Living & Bedrooms',
  'Planning & Budgets',
  'Small Spaces',
] as const;

// Quick practical Delhi NCR design insights to fill the knowledge strip
const quickInsights = [
  {
    icon: Compass,
    title: 'Climate & Dust Defense',
    desc: 'High-pressure anti-fingerprint laminates and sealed quartz countertops resist Delhi NCR dust and seasonal humidity far better than porous stone.',
  },
  {
    icon: Layers,
    title: 'Indian Kitchen Workflows',
    desc: 'Deep pot drawers, 1200+ CFM ducted chimneys with baffle filters, and boiling-water-proof (BWR) ply cabinetry built for everyday heavy cooking.',
  },
  {
    icon: Ruler,
    title: 'Vertical Volume Optimization',
    desc: 'Floor-to-ceiling wardrobes and wall-hung media consoles free up vital floor area, making 2BHK and 3BHK Delhi apartments feel spacious and airy.',
  },
  {
    icon: ShieldCheck,
    title: 'Layered Illumination',
    desc: '3-tier lighting hierarchy (3000K warm cove ambient + targeted task lights + accent spots) adapts to Delhi’s bright summers and dim winters.',
  },
];

export default function JournalGrid({ limit, showHeading = true }: JournalGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');

  // Filter posts based on category
  const filteredPosts = useMemo(() => {
    let list = journalPosts;
    if (selectedCategory === 'Kitchens & Storage') {
      list = journalPosts.filter(
        (p) => p.slug.includes('kitchen') || p.slug.includes('wardrobe') || p.slug.includes('small')
      );
    } else if (selectedCategory === 'Living & Bedrooms') {
      list = journalPosts.filter(
        (p) => p.slug.includes('living') || p.slug.includes('bedroom') || p.slug.includes('ceiling')
      );
    } else if (selectedCategory === 'Planning & Budgets') {
      list = journalPosts.filter(
        (p) => p.slug.includes('cost') || p.slug.includes('choose') || p.slug.includes('mistakes')
      );
    } else if (selectedCategory === 'Small Spaces') {
      list = journalPosts.filter(
        (p) => p.slug.includes('small') || p.slug.includes('modern') || p.slug.includes('ceiling')
      );
    }

    // Fallback if list is too short so no awkward empty columns appear
    if (list.length < 3) list = journalPosts;
    return limit ? list.slice(0, limit) : list;
  }, [selectedCategory, limit]);

  // Featured lead post for the spotlight banner
  const featuredPost = journalPosts[0];

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
    if (slug.includes('kitchen'))
      return 'Key: Work triangle, boiling-water-proof ply & heavy cookware storage';
    if (slug.includes('cost'))
      return 'Key: Scope definition, material grade clarity & transparent budgets';
    if (slug.includes('bedroom'))
      return 'Key: Restful ergonomics, layered bedside task lighting & built-in storage';
    if (slug.includes('living'))
      return 'Key: Unobstructed circulation, proportioned TV units & feature textures';
    if (slug.includes('ceiling'))
      return 'Key: Indirect cove illumination, magnetic track lights & spatial zoning';
    if (slug.includes('choose'))
      return 'Key: Local Delhi NCR vendor knowledge, portfolio review & clear scopes';
    if (slug.includes('small'))
      return 'Key: Vertical storage, wall-hung consoles & light-reflecting palettes';
    if (slug.includes('mistakes'))
      return 'Key: Avoiding single-source lighting, visual clutter & poor traffic flow';
    return 'Key: Practical space planning, material longevity & timeless aesthetics';
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    'Hello Homes24Designs, I have a question regarding an interior design article.'
  )}`;

  return (
    <section id="journal" className={`py-8 md:py-10 lg:py-12 ${showHeading ? 'bg-ivory' : 'bg-stone-50'}`}>
      <div className="container-lux space-y-7 md:space-y-9">
        {/* ===================================================================
            HEADER: TITLE + CATEGORIES + STUDIO STATS (ZERO EMPTY SPACE)
            =================================================================== */}
        {showHeading && (
          <Reveal>
            <div className="bg-white border border-stone-200/90 p-6 md:p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-px w-8 bg-accent" />
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                      HOMES24DESIGNS Journal · Practical Guides
                    </span>
                  </div>
                  <h2 className="text-section font-light text-charcoal-800 leading-[1.12]">
                    Ideas, Guides &amp; Practical Interior Insights
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
                    Clear, fluff-free writing for Delhi NCR homeowners — covering layout planning, modular kitchen
                    ergonomics, durable materials, false ceiling cove lighting, and realistic budget frameworks.
                  </p>
                </div>

                {/* Quick Studio Stats Pill (Eliminates the empty right-side void on desktop) */}
                <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-stone-100">
                  <div className="flex items-center gap-2 text-xs text-charcoal-800 bg-stone-50 px-3.5 py-1.5 border border-stone-200">
                    <BookOpen className="w-3.5 h-3.5 text-accent" strokeWidth={1.8} />
                    <span className="font-medium">9 Practical Field Guides</span>
                  </div>
                  <span className="text-[11px] text-stone-500">
                    Proprietor: <strong className="font-medium text-charcoal-700">Ehtashamul Islam</strong>
                  </span>
                </div>
              </div>

              {/* Filter Pills Row */}
              <div className="mt-5 pt-4 border-t border-stone-100 flex flex-wrap items-center gap-2">
                <span className="text-xs text-stone-400 font-medium mr-1 uppercase tracking-wider text-[10px]">
                  Filter Topics:
                </span>
                {filterCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
                      selectedCategory === cat
                        ? 'bg-charcoal-800 text-ivory shadow-sm'
                        : 'bg-stone-50 border border-stone-200 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* ===================================================================
            FEATURED SPOTLIGHT ARTICLE BANNER (SHOWS ON HOMEPAGE TO FILL SPACE)
            =================================================================== */}
        {showHeading && selectedCategory === 'All Articles' && featuredPost && (
          <Reveal delay={60}>
            <div className="bg-white border border-stone-200/90 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Spotlight Image (5 cols) */}
                <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-stone-100 min-h-[260px]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-lux hover:scale-105"
                    loading="lazy"
                    width="700"
                    height="450"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 bg-charcoal-900/90 text-ivory text-[10px] tracking-[0.18em] uppercase font-semibold">
                      Featured Comprehensive Guide
                    </span>
                  </div>
                </div>

                {/* Spotlight Details (7 cols) */}
                <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-stone-500 mb-2">
                      <span className="flex items-center gap-1 font-medium text-accent">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(featuredPost.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-stone-300" />
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-stone-400" />
                        {featuredPost.readingTime}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-stone-300" />
                      <span className="text-stone-500">Delhi NCR Focus</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-charcoal-900 leading-snug">
                      {featuredPost.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-2">
                      {featuredPost.excerpt}
                    </p>

                    {/* Key takeaways bullet points */}
                    <div className="mt-4 pt-3 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>Circulation corridors without walls</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>3-tier climate-adjusted illumination</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>High-durability BWR cabinetry</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>Delhi dust-resistant matte finishes</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <Link
                      to={`/journal/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal-800 text-ivory text-xs font-semibold tracking-wider uppercase hover:bg-accent transition-colors"
                    >
                      <span>Read Complete Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-xs text-stone-400 font-serif italic">
                      By HOMES24DESIGNS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* ===================================================================
            DENSE, BALANCED 6-CARD GRID (ZERO EMPTY SLOTS)
            =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 items-stretch">
          {filteredPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 50} className="h-full">
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
                <div className="p-5 md:p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Meta info row */}
                    <div className="flex items-center gap-3 text-xs text-stone-500 mb-2">
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
                    <h3 className="font-serif text-lg md:text-[1.2rem] font-medium text-charcoal-900 leading-snug group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-stone-600 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Takeaway Feature Box */}
                    <div className="mt-3 p-2.5 bg-stone-50 border border-stone-200/70 text-[11px] text-stone-600 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" strokeWidth={1.8} />
                      <span className="line-clamp-2 leading-tight">{getTakeaway(post.slug)}</span>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-accent group-hover:text-accent-dark transition-colors">
                      <span>Read Guide</span>
                      <ArrowUpRight
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.5}
                      />
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

        {/* ===================================================================
            PRACTICAL DELHI NCR DESIGN INSIGHTS STRIP (ADDS REAL VALUE & DATA)
            =================================================================== */}
        <Reveal delay={120}>
          <div className="bg-stone-50 border border-stone-200/90 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-accent" />
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal-700">
                Practical Delhi NCR Interior Guidelines at a Glance
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickInsights.map((item, idx) => (
                <div key={idx} className="p-4 bg-white border border-stone-200/80">
                  <item.icon className="w-5 h-5 text-accent mb-2" strokeWidth={1.5} />
                  <h4 className="text-sm font-semibold text-charcoal-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ===================================================================
            SECTION BOTTOM ACTIONS: BROWSE ALL OR ASK DIRECT QUESTION
            =================================================================== */}
        {showHeading && (
          <Reveal delay={160}>
            <div className="p-6 bg-charcoal-900 text-ivory flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-serif font-light text-ivory">
                  Have a specific layout or material question for your home?
                </h4>
                <p className="text-xs text-stone-300 mt-0.5">
                  Discuss directly with proprietor Ehtashamul Islam at our New Delhi studio.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-accent hover:bg-accent-dark text-white inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium shadow-sm transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Ask on WhatsApp</span>
                </a>
                <Link
                  to="/journal"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-600 text-stone-200 text-xs font-medium hover:bg-white/10 transition-colors"
                >
                  <span>Browse All Articles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
