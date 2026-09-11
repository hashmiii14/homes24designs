import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { services } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function ServicesGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeService = lightboxIndex !== null ? services[lightboxIndex] : null;

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : services.length - 1));
  }, []);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev < services.length - 1 ? prev + 1 : 0));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <section id="services" className="py-10 md:py-16 lg:py-18 bg-stone-50 scroll-mt-20 overflow-hidden">
      <div className="container-lux">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Interior Design Services"
            description="From full home interiors to focused solutions, each service is designed around your space, your routine and your aesthetic."
          />
        </Reveal>

        <div className="mt-7 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, i) => {
            const webpSrc = service.image.replace(/\.jpg$/, '.webp');
            return (
              <Reveal key={service.slug} delay={i * 60}>
                <div
                  onClick={() => setLightboxIndex(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightboxIndex(i);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className="group block w-full text-left cursor-pointer touch-manipulation focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label={`Open preview of ${service.title}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                    <picture>
                      <source srcSet={webpSrc} type="image/webp" />
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                        loading={i < 4 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    </picture>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500" />
                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <h3 className="text-lg font-medium text-ivory">{service.title}</h3>
                      <p className="text-xs text-stone-300 mt-1 line-clamp-2 leading-relaxed">{service.description}</p>
                      <div className="mt-3.5 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-charcoal-900/60 md:bg-ivory/15 group-hover:bg-accent text-ivory text-[11px] font-medium tracking-wider uppercase border border-ivory/30 md:backdrop-blur-sm transition-all duration-300 active:scale-95">
                          <Eye className="w-3.5 h-3.5 text-accent-light group-hover:text-ivory transition-colors" strokeWidth={1.5} />
                          <span>View Preview</span>
                        </span>
                        <Link
                          to={`/services/${service.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[11px] text-stone-300 hover:text-accent font-medium tracking-wider uppercase transition-colors py-1 px-1.5"
                          aria-label={`View full details of ${service.title}`}
                        >
                          <span>Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-accent-light" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal - Dark Premium Theme, Zero White Background/Frame */}
      {activeService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeService.title} enlarged image preview`}
          className="fixed inset-0 z-[90] bg-charcoal-900/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8 animate-modal-fade select-none touch-manipulation overflow-hidden"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Floating Close (X) Button */}
          <button
            type="button"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 rounded-full bg-charcoal-800/80 hover:bg-accent text-ivory transition-all duration-200 z-30 backdrop-blur-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer active:scale-95"
            aria-label="Close image preview"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
          </button>

          {/* Navigation Controls */}
          {services.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-charcoal-800/80 hover:bg-accent text-ivory backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer shadow-xl"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-charcoal-800/80 hover:bg-accent text-ivory backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer shadow-xl"
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
              </button>
            </>
          )}

          {/* Centered Image Container - Zero white frame, zero white border */}
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center my-auto animate-modal-scale"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Viewport for complete uncropped image */}
            <div className="relative max-h-[72vh] sm:max-h-[78vh] w-auto max-w-full flex items-center justify-center overflow-hidden">
              {/* Subtle ambient backdrop to enhance dark theme depth */}
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-3xl opacity-20 scale-125 pointer-events-none transition-all duration-500"
                style={{ backgroundImage: `url(${activeService.image})` }}
                aria-hidden="true"
              />

              <picture className="relative z-10 flex items-center justify-center">
                <source srcSet={activeService.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
                <img
                  key={activeService.image}
                  src={activeService.image}
                  alt={activeService.alt}
                  className="max-h-[68vh] sm:max-h-[74vh] w-auto max-w-full object-contain mx-auto shadow-2xl select-none"
                  loading="eager"
                  decoding="sync"
                />
              </picture>
            </div>

            {/* Dark/Premium Caption & Service Details Bar */}
            <div className="mt-3 sm:mt-4 w-full max-w-xl px-4 sm:px-5 py-3 bg-charcoal-950/85 backdrop-blur-md border border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left z-20">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-accent font-semibold block">
                  HOMES24DESIGNS · Interior Service
                </span>
                <h3 className="text-base sm:text-lg font-medium text-ivory mt-0.5 font-serif">
                  {activeService.title}
                </h3>
                <p className="text-xs text-stone-300 mt-0.5 line-clamp-1 max-w-sm">
                  {activeService.description}
                </p>
              </div>
              <Link
                to={`/services/${activeService.slug}`}
                onClick={() => setLightboxIndex(null)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-charcoal-800 hover:bg-accent text-ivory text-xs font-semibold tracking-wider uppercase border border-stone-700/60 transition-colors shrink-0 active:scale-95"
                style={{ color: '#f7f4ef' }}
              >
                <span>Service Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
