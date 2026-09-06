import { useState, useMemo } from 'react';
import { X, Eye } from 'lucide-react';
import { portfolioProjects, portfolioFilters } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function PortfolioGrid() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (filter === 'All') return portfolioProjects;
    return portfolioProjects.filter((p) => p.category.includes(filter));
  }, [filter]);

  return (
    <section className="py-10 md:py-16 lg:py-18 bg-ivory overflow-hidden">
      <div className="container-lux">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Work"
            title="A Selection of Interior Projects"
            description="A glimpse of the spaces we design — from living rooms and kitchens to full home interiors. Project images shown here are representative and will be updated with completed HOMES24DESIGNS projects."
          />
        </Reveal>

        {/* Filters */}
        <Reveal delay={100}>
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap justify-center items-center gap-1.5 sm:gap-2.5 max-w-4xl mx-auto">
            {portfolioFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`min-h-[36px] sm:min-h-[38px] px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 rounded-none touch-manipulation text-center flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  filter === f
                    ? 'bg-charcoal-800 text-ivory shadow-sm ring-1 ring-charcoal-900'
                    : 'bg-white border border-stone-300 text-charcoal-700 hover:text-charcoal-900 hover:border-charcoal-400 hover:bg-stone-50'
                }`}
                style={filter === f ? { color: '#f7f4ef' } : {}}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-7 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <div
                onClick={() => setLightbox(i)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightbox(i); } }}
                role="button"
                tabIndex={0}
                className="group block w-full text-left cursor-pointer touch-manipulation focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={`View details of ${project.title}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-accent-light">
                      {project.type} · {project.style}
                    </span>
                    <h3 className="text-lg font-medium text-ivory mt-1">{project.title}</h3>
                    <p className="text-xs text-stone-300 mt-0.5">{project.location}</p>
                    <div className="mt-3.5">
                      <span
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-ivory/15 group-hover:bg-accent text-ivory text-[11px] font-medium tracking-wider uppercase border border-ivory/30 backdrop-blur-sm transition-all duration-300 active:scale-95"
                      >
                        <Eye className="w-3.5 h-3.5 text-accent-light group-hover:text-ivory transition-colors" strokeWidth={1.5} />
                        <span>View Details</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-[80] bg-charcoal-900/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto overflow-x-hidden"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 text-ivory hover:text-accent-light transition-colors"
            aria-label="Close"
            onClick={() => setLightbox(null)}
          >
            <X className="w-7 h-7" strokeWidth={1.5} />
          </button>
          <div
            className="max-w-4xl w-full bg-ivory overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={filtered[lightbox].image}
                alt={filtered[lightbox].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <span className="text-[10px] tracking-[0.2em] uppercase text-accent">
                {filtered[lightbox].type} · {filtered[lightbox].style}
              </span>
              <h3 className="text-2xl font-light text-charcoal-800 mt-2">
                {filtered[lightbox].title}
              </h3>
              <p className="text-sm text-stone-500 mt-1">{filtered[lightbox].location}</p>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">
                {filtered[lightbox].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
