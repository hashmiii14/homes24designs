import { Instagram, ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteConfig';

interface InstagramPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  url: string;
}

const instagramPosts: InstagramPost[] = [
  {
    id: 'DUhUg5XCQ3v',
    category: 'Hospitality & Commercial',
    title: 'Nushka Cafe — Warm & Cozy Ambience',
    excerpt: 'A recently delivered cafe interior designed with intimate warm tones, curated lighting and inviting ambience.',
    image: '/images/instagram/post-1-nushka-cafe.jpg',
    url: 'https://www.instagram.com/p/DUhUg5XCQ3v/',
  },
  {
    id: 'C7L2ALCJqYx',
    category: 'Residential Architecture',
    title: 'Modern Residential Villa & Facade',
    excerpt: 'Turnkey residential architecture and contemporary elevation delivered with clean lines and precision execution.',
    image: '/images/instagram/post-2-residential-villa.jpg',
    url: 'https://www.instagram.com/p/C7L2ALCJqYx/',
  },
  {
    id: 'DXWG-3xiZHk',
    category: 'Modular Interiors',
    title: 'Minimalist Modular Kitchen & Living',
    excerpt: 'Simple, sophisticated and budget-friendly interior solutions featuring seamless storage and modern finishes.',
    image: '/images/instagram/post-3-minimalist-kitchen.jpg',
    url: 'https://www.instagram.com/p/DXWG-3xiZHk/',
  },
];

export default function InstagramSection() {
  return (
    <section className="py-12 md:py-16 lg:py-18 bg-stone-100/70 border-t border-stone-200/60">
      <div className="container-lux">
        <Reveal>
          <SectionHeading
            eyebrow="On Instagram"
            title="Recent Work & On-Site Stories"
            description="Explore our latest delivered interiors, architectural elevations, and behind-the-scenes transformations across Delhi and Delhi NCR."
          />
        </Reveal>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {instagramPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 100}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full bg-white border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-black/20 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 bg-ivory/95 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase text-charcoal-800 font-medium shadow-sm">
                      {post.category}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-charcoal-900/80 backdrop-blur-sm text-ivory flex items-center justify-center shadow-sm group-hover:bg-accent group-hover:text-ivory transition-colors duration-300">
                      <Instagram className="w-4 h-4" strokeWidth={1.8} />
                    </span>
                  </div>

                  {/* Center Hover Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal-900/90 text-ivory backdrop-blur-md text-xs font-medium tracking-wide shadow-lg border border-accent/40">
                      <span>View on Instagram</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-charcoal-800 group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-stone-600">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs font-medium text-accent">
                    <span className="tracking-wide">@homes24designs</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform duration-300">
                      Watch Reel / Post
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={300}>
          <div className="mt-14 text-center">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-charcoal-800 text-ivory text-sm font-medium tracking-wide transition-all duration-300 ease-lux hover:bg-charcoal-900 hover:shadow-lg group"
            >
              <Instagram className="w-4 h-4 text-accent transition-transform duration-300 group-hover:scale-110" />
              <span>Follow @homes24designs on Instagram</span>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-ivory transition-colors duration-300" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
