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
                    className="inline-block will-change-transform"
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
            className="inline-block will-change-transform"
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
    <section className="relative bg-charcoal-900 min-h-screen min-h-[100svh] sm:min-h-[85vh] lg:min-h-[88vh] xl:min-h-[92vh] max-h-[960px] flex flex-col justify-end overflow-hidden pt-20 sm:pt-28 md:pt-32 pb-6 xs:pb-8 sm:pb-10 lg:pb-12">
      {/* Background image with cinematic warm luxury lighting */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero/hero-bg.jpg"
          alt="Luxury architectural home interior design by HOMES24DESIGNS in Delhi"
          className="w-full h-full object-cover object-[center_35%] sm:object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal-900/55 to-charcoal-900/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-lux w-full text-left">
        <div className="max-w-4xl lg:max-w-5xl text-left">
          {/* Architectural Studio Overline */}
          <div
            className="flex items-center gap-2.5 sm:gap-3.5 mb-3 sm:mb-4 min-w-0"
            style={
              isLoaded
                ? { animation: 'fadeDown 0.6s 0.05s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            <span className="h-px w-6 sm:w-10 bg-accent/80 shrink-0" />
            <span className="text-[10.5px] xs:text-[11px] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.26em] uppercase text-accent-light leading-snug break-words">
              <AnimatedWords
                text="Architecture & Bespoke Interiors · New Delhi"
                startDelay={0.08}
                isLoaded={isLoaded}
              />
            </span>
          </div>

          {/* Headline - Editorial Serif inspired by luxury architectural monographs */}
          <h1 className="font-serif text-[2.45rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem] font-light text-ivory leading-[1.05] sm:leading-[1.02] tracking-tight break-words">
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

          {/* Refined Subtitle: Single Confident Architectural Statement */}
          <p
            className="mt-3.5 sm:mt-5 md:mt-6 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed text-stone-200/90 max-w-xl font-light"
            style={
              isLoaded
                ? { animation: 'fadeIn 0.7s 0.85s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            Bespoke residential interiors, modular kitchens and complete turnkey living across South Delhi and Delhi NCR — designed with architectural intent and delivered with precision.
          </p>

          {/* Action CTAs */}
          <div
            className="mt-5 sm:mt-7 md:mt-9 flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-4 max-w-xs xs:max-w-none"
            style={
              isLoaded
                ? { animation: 'fadeUp 0.8s 1.05s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            <Link
              to="/contact"
              onClick={handleConsultationClick}
              className="inline-flex items-center justify-center px-5 py-2.5 sm:px-8 sm:py-3.5 bg-ivory text-charcoal-900 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-accent hover:text-ivory active:scale-95 touch-manipulation text-center shadow-md min-h-[42px] sm:min-h-[48px] w-full xs:w-auto"
            >
              Book a Consultation
            </Link>
            <Link
              to="/services"
              onClick={handleServicesClick}
              className="inline-flex items-center justify-center px-5 py-2.5 sm:px-8 sm:py-3.5 border border-ivory/50 text-ivory text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-ivory hover:text-charcoal-900 active:scale-95 touch-manipulation text-center min-h-[42px] sm:min-h-[48px] w-full xs:w-auto"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Authentic Studio Credentials Bar */}
          <div
            className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-stone-300/80 font-light"
            style={
              isLoaded
                ? { animation: 'fadeIn 0.8s 1.2s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            <div className="flex items-center gap-2 text-stone-200">
              <MapPin className="w-3.5 h-3.5 text-accent-light shrink-0" strokeWidth={1.5} />
              <span className="tracking-wide">Studio: Batla House · Jamia Nagar, Okhla · New Delhi</span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3.5 uppercase tracking-wider text-[10px] sm:text-[11px] text-stone-400">
              <span>45-Day Turnkey</span>
              <span className="w-1 h-1 rounded-full bg-accent/70 shrink-0" />
              <span>German Hardware</span>
              <span className="w-1 h-1 rounded-full bg-accent/70 shrink-0" />
              <span>Itemized BOQ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
