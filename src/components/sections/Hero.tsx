import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

function AnimatedLine({
  text,
  startDelay = 0,
  className = '',
  isLoaded = true,
}: {
  text: string;
  startDelay?: number;
  className?: string;
  isLoaded?: boolean;
}) {
  const words = text.split(' ');
  let letterCounter = 0;

  return (
    <span className={`inline ${className}`}>
      {words.map((word, wIdx) => {
        const letters = word.split('');
        return (
          <span key={wIdx} className="inline">
            <span className="inline-block whitespace-nowrap">
              {letters.map((char, cIdx) => {
                const currentIdx = letterCounter++;
                return (
                  <span
                    key={cIdx}
                    className="inline-block"
                    style={
                      isLoaded
                        ? {
                            animation: 'letterReveal 0.65s cubic-bezier(0.16, 1, 0.3, 1) both',
                            animationDelay: `${startDelay + currentIdx * 0.028}s`,
                          }
                        : { opacity: 0 }
                    }
                  >
                    {char}
                  </span>
                );
              })}
            </span>
            {wIdx < words.length - 1 && ' '}
          </span>
        );
      })}
    </span>
  );
}

function AnimatedWords({
  text,
  startDelay = 0,
  className = '',
  isLoaded = true,
}: {
  text: string;
  startDelay?: number;
  className?: string;
  isLoaded?: boolean;
}) {
  const words = text.split(' ');
  return (
    <span className={`inline ${className}`}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.26em]">
          <span
            className="inline-block"
            style={
              isLoaded
                ? {
                    animation: 'letterReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
                    animationDelay: `${startDelay + wIdx * 0.03}s`,
                  }
                : { opacity: 0 }
            }
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(
    typeof window !== 'undefined' ? Boolean(window.__h24_loaded) : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.__h24_loaded || !document.getElementById('h24-initial-loader')) {
      setIsLoaded(true);
      return;
    }

    const handler = () => setIsLoaded(true);
    window.addEventListener('h24-loader-done', handler);

    // Safety fallback: if event was somehow missed, trigger after 1.5s
    const timer = setTimeout(() => setIsLoaded(true), 1500);

    return () => {
      window.removeEventListener('h24-loader-done', handler);
      clearTimeout(timer);
    };
  }, []);

  const handleConsultationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById('consultation');
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById('services');
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative w-full max-w-full bg-charcoal-900 min-h-screen min-h-[100svh] sm:min-h-[85vh] lg:min-h-[88vh] xl:min-h-[92vh] max-h-[960px] flex flex-col justify-start sm:justify-end overflow-hidden overflow-x-hidden pt-[116px] xs:pt-[124px] sm:pt-28 md:pt-32 pb-8 xs:pb-10 sm:pb-12 lg:pb-16"
      style={{ isolation: 'isolate' }}
    >
      {/* Background image with cinematic warm luxury lighting */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none select-none"
        style={{
          transform: 'translate3d(0, 0, 0)',
          WebkitTransform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          contain: 'paint layout',
        }}
      >
        <picture className="w-full h-full block">
          <source media="(max-width: 640px)" srcSet="/images/hero/hero-bg-mobile.webp" type="image/webp" />
          <source media="(max-width: 640px)" srcSet="/images/hero/hero-bg-mobile.jpg" type="image/jpeg" />
          <source srcSet="/images/hero/hero-bg.webp" type="image/webp" />
          <img
            src="/images/hero/hero-bg.jpg"
            alt="Luxury modern living room interior in South Delhi designed by HOMES24DESIGNS"
            className="w-full h-full object-cover object-[center_35%] sm:object-center block"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            style={{
              transform: 'translate3d(0, 0, 0)',
              WebkitTransform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal-900/55 to-charcoal-900/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/40 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-lux w-full max-w-full text-left overflow-hidden">
        <div className="max-w-4xl lg:max-w-5xl text-left">
          {/* Subtle Studio Pill Badge (Positioned below header with elegant spacing) */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-950/80 sm:bg-white/10 sm:backdrop-blur-md border border-white/15 text-[10px] xs:text-[11px] font-medium tracking-[0.14em] uppercase text-stone-200 mb-2.5 sm:mb-3.5 max-w-full shadow-sm"
            style={
              isLoaded
                ? { animation: 'fadeDown 0.6s 0.02s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <span className="truncate xs:whitespace-normal">Luxury Turnkey Residential Studio · Delhi NCR</span>
          </div>

          {/* Architectural Studio Overline */}
          <div
            className="flex items-center gap-2.5 sm:gap-3.5 mb-2 sm:mb-4 min-w-0"
            style={
              isLoaded
                ? { animation: 'fadeDown 0.6s 0.08s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            <span className="h-px w-6 sm:w-10 bg-accent/80 shrink-0" />
            <span className="text-[10.5px] xs:text-[11px] sm:text-xs font-medium tracking-[0.18em] sm:tracking-[0.24em] uppercase text-accent-light leading-snug break-words">
              <AnimatedWords
                text="Architecture & Bespoke Interiors · New Delhi"
                startDelay={0.08}
                isLoaded={isLoaded}
              />
            </span>
          </div>

          {/* Headline - Editorial Serif */}
          <h1 className="font-serif text-[2.2rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem] font-light text-ivory leading-[1.05] sm:leading-[1.02] tracking-tight break-words max-w-full">
            <span className="block overflow-hidden py-0.5">
              <AnimatedLine text="Interiors Designed" startDelay={0.15} isLoaded={isLoaded} />
            </span>
            <span className="block overflow-hidden py-0.5">
              <AnimatedLine text="Around The Way" startDelay={0.4} isLoaded={isLoaded} />
            </span>
            <span className="block overflow-hidden py-0.5">
              <span className="italic text-accent-light font-normal">
                <AnimatedLine text="You Live." startDelay={0.65} isLoaded={isLoaded} />
              </span>
            </span>
          </h1>

          {/* Refined Subtitle */}
          <p
            className="mt-3 sm:mt-5 md:mt-6 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed text-stone-200/90 max-w-xl font-light"
            style={
              isLoaded
                ? { animation: 'fadeIn 0.7s 0.85s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            Bespoke residential interiors, modular kitchens and complete turnkey living across South Delhi and Delhi NCR — designed with architectural intent and delivered with precision.
          </p>

          {/* Key Trust Highlights Lines */}
          <div
            className="mt-3 sm:mt-4 flex flex-wrap items-center gap-x-3.5 sm:gap-x-5 gap-y-1.5 text-[10.5px] xs:text-[11px] sm:text-xs text-stone-300/95 font-medium"
            style={
              isLoaded
                ? { animation: 'fadeIn 0.7s 0.95s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              45-Day Turnkey Handover
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              German Hardware Warranty
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              100% Itemized BOQ
            </span>
          </div>

          {/* Studio Location Stamp */}
          <div
            className="mt-2.5 sm:mt-3.5 flex items-center gap-2 text-stone-300/90 text-xs max-w-full"
            style={
              isLoaded
                ? { animation: 'fadeIn 0.8s 1.1s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            <MapPin className="w-3.5 h-3.5 text-accent-light shrink-0" strokeWidth={1.5} />
            <span className="tracking-wide text-xs break-words">Studio: Batla House · Jamia Nagar, Okhla · New Delhi</span>
          </div>

          {/* Action CTAs: Petite and compact on mobile (w-auto, not stretched!) */}
          <div
            className="mt-3.5 sm:mt-6 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4"
            style={
              isLoaded
                ? { animation: 'fadeUp 0.8s 1.25s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            <Link
              to="/contact"
              onClick={handleConsultationClick}
              className="inline-flex items-center justify-center px-4 py-1.5 sm:px-8 sm:py-3.5 bg-ivory text-charcoal-900 text-[11px] sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-accent hover:text-ivory active:scale-95 touch-manipulation text-center shadow-sm min-h-[34px] sm:min-h-[48px] w-auto"
            >
              Book a Consultation
            </Link>
            <Link
              to="/services"
              onClick={handleServicesClick}
              className="inline-flex items-center justify-center px-4 py-1.5 sm:px-8 sm:py-3.5 border border-ivory/60 text-ivory text-[11px] sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-ivory hover:text-charcoal-900 active:scale-95 touch-manipulation text-center min-h-[34px] sm:min-h-[48px] w-auto"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
