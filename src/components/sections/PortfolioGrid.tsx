import { useState, useMemo } from 'react';
import { X } from 'lucide-react';
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
    <section className="py-16 md:py-24 bg-ivory">
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
          <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-2 md:gap-3">
            {portfolioFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
                  filter === f
                    ? 'bg-charcoal-800 text-ivory'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <button
                onClick={() => setLightbox(i)}
                className="group block w-full text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-accent-light">
                      {project.type} · {project.style}
                    </span>
                    <h3 className="text-lg font-medium text-ivory mt-1">{project.title}</h3>
                    <p className="text-xs text-stone-300 mt-0.5">{project.location}</p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-[80] bg-charcoal-900/90 backdrop-blur-sm flex items-center justify-center p-6"
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
