import { useState, useMemo, useEffect, useCallback } from 'react';
import { X, Eye, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { portfolioProjects, portfolioFilters } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function PortfolioGrid() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  const filtered = useMemo(() => {
    if (filter === 'All') return portfolioProjects;
    return portfolioProjects.filter((p) => p.category.includes(filter));
  }, [filter]);

  const currentProject = lightbox !== null ? filtered[lightbox] : null;
  const currentImages = useMemo(() => {
    if (!currentProject) return [];
    return [currentProject.image, ...(currentProject.gallery || [])];
  }, [currentProject]);

  const handlePrevImage = useCallback(() => {
    if (currentImages.length <= 1) return;
    setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : currentImages.length - 1));
  }, [currentImages]);

  const handleNextImage = useCallback(() => {
    if (currentImages.length <= 1) return;
    setActiveImageIdx((prev) => (prev < currentImages.length - 1 ? prev + 1 : 0));
  }, [currentImages]);

  useEffect(() => {
    if (lightbox === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightbox(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightbox, handlePrevImage, handleNextImage]);

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
          {filtered.map((project, i) => {
            const webpSrc = project.image.replace(/\.jpg$/, '.webp');
            return (
              <Reveal key={project.id} delay={i * 50}>
                <div
                  onClick={() => {
                    setLightbox(i);
                    setActiveImageIdx(0);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightbox(i);
                      setActiveImageIdx(0);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className="group block w-full text-left cursor-pointer touch-manipulation focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label={`View details of ${project.title}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                    <picture className="block w-full h-full">
                      <source srcSet={webpSrc} type="image/webp" />
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                        loading={i < 4 ? 'eager' : 'lazy'}
                        decoding="async"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (target.src !== project.image) {
                            target.src = project.image;
                          }
                        }}
                      />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-accent-light">
                        {project.type} · {project.style}
                      </span>
                      <h3 className="text-lg font-medium text-ivory mt-1">{project.title}</h3>
                      <p className="text-xs text-stone-300 mt-0.5">{project.location}</p>
                      <div className="mt-3.5">
                        <span
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-charcoal-900/60 md:bg-ivory/15 group-hover:bg-accent text-ivory text-[11px] font-medium tracking-wider uppercase border border-ivory/30 md:backdrop-blur-sm transition-all duration-300 active:scale-95"
                        >
                          <Eye className="w-3.5 h-3.5 text-accent-light group-hover:text-ivory transition-colors" strokeWidth={1.5} />
                          <span>View Details</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {currentProject && (
        <div
          className="fixed inset-0 z-[80] bg-charcoal-900/90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-5 md:p-6 overflow-y-auto overflow-x-hidden"
          onClick={() => setLightbox(null)}
        >
          {/* Desktop/Tablet Floating Close Button */}
          <button
            className="hidden sm:flex absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-charcoal-800/80 hover:bg-accent text-ivory transition-colors z-30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close image viewer"
            onClick={() => setLightbox(null)}
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>

          <div
            className="max-w-4xl w-full bg-ivory overflow-hidden shadow-2xl my-auto rounded-none border border-stone-200/40 relative z-20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Sticky Top Bar with prominent "Back to Portfolio" */}
            <div className="flex sm:hidden items-center justify-between px-3.5 py-2.5 bg-charcoal-900 text-ivory border-b border-charcoal-700/60 sticky top-0 z-30">
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-200 hover:text-accent-light active:scale-95 transition-colors py-1 px-1.5 -ml-1 rounded"
                aria-label="Back to Portfolio"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Portfolio</span>
              </button>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="p-1.5 text-stone-300 hover:text-white"
                aria-label="Close image viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Adaptive Viewport: Zero Cropping, Full Detail, Ambient Luxury Backdrop */}
            {(() => {
              const currentSrc = currentImages[activeImageIdx] || currentProject.image;
              const webpCurrent = currentSrc.replace(/\.jpg$/, '.webp');

              return (
                <div className="relative w-full h-[52vh] sm:h-[62vh] md:h-[70vh] min-h-[300px] md:min-h-[480px] bg-stone-950 flex items-center justify-center overflow-hidden select-none">
                  {/* Ambient backdrop */}
                  <div
                    className="absolute inset-0 bg-cover bg-center filter blur-3xl opacity-20 scale-110 pointer-events-none transition-all duration-500"
                    style={{ backgroundImage: `url(${currentSrc})` }}
                    aria-hidden="true"
                  />

                  {/* Main uncropped foreground image */}
                  <picture
                    key={currentSrc}
                    className="relative z-10 max-h-full max-w-full block p-2 sm:p-4 text-center"
                  >
                    <source srcSet={webpCurrent} type="image/webp" />
                    <img
                      src={currentSrc}
                      alt={currentProject.alt}
                      className="max-h-[48vh] sm:max-h-[58vh] md:max-h-[66vh] w-auto max-w-full object-contain mx-auto shadow-2xl transition-opacity duration-300 rounded-sm block"
                      loading="eager"
                      decoding="sync"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== currentSrc) {
                          target.src = currentSrc;
                        }
                      }}
                    />
                  </picture>

                  {/* Navigation Arrows */}
                  {currentImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrevImage();
                        }}
                        className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-charcoal-900/75 hover:bg-accent text-ivory backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent"
                        aria-label="Previous photo"
                      >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextImage();
                        }}
                        className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-charcoal-900/75 hover:bg-accent text-ivory backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent"
                        aria-label="Next photo"
                      >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                      </button>
                    </>
                  )}
                </div>
              );
            })()}

            {/* Gallery Thumbnails Strip */}
            {currentImages.length > 1 && (
              <div className="flex items-center gap-2 p-2.5 sm:p-3 bg-stone-100 border-b border-stone-200 overflow-x-auto">
                {currentImages.map((img, idx) => {
                  const thumbWebp = img.replace(/\.jpg$/, '.webp');
                  const isActive = activeImageIdx === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative w-14 h-11 sm:w-16 sm:h-12 shrink-0 border-2 overflow-hidden transition-all focus:outline-none ${
                        isActive
                          ? 'border-accent ring-2 ring-accent/60 scale-105 shadow-sm'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                      aria-label={`View photo ${idx + 1}`}
                    >
                      <picture className="block w-full h-full">
                        <source srcSet={thumbWebp} type="image/webp" />
                        <img
                          src={img}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="eager"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (target.src !== img) {
                              target.src = img;
                            }
                          }}
                        />
                      </picture>
                    </button>
                  );
                })}
                <span className="text-[11px] text-stone-500 font-medium pl-2 shrink-0">
                  {activeImageIdx + 1} of {currentImages.length}
                </span>
              </div>
            )}

            <div className="p-5 sm:p-6 md:p-8">
              <span className="text-[10px] tracking-[0.2em] uppercase text-accent font-semibold">
                {currentProject.type} · {currentProject.style}
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-charcoal-800 mt-1 font-serif">
                {currentProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-0.5">{currentProject.location}</p>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-stone-600">
                {currentProject.description}
              </p>

              {/* Explicit Back to Portfolio button */}
              <div className="mt-5 pt-4 border-t border-stone-200 flex sm:hidden justify-center">
                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  className="w-full py-3 bg-charcoal-800 text-ivory text-xs font-semibold tracking-wider uppercase text-center active:bg-charcoal-900 transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Portfolio</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
