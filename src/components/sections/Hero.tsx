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
    <span className={`inline-block ${className}`}>
      {words.map((word, wIdx) => {
        const letters = word.split('');
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap">
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
            {wIdx < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
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
    <span className={`inline-block ${className}`}>
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

    if (window.__h24_loaded) {
      setIsLoaded(true);
      return;
    }

    const handler = () => setIsLoaded(true);
    window.addEventListener('h24-loader-done', handler);

    // Safety fallback: if event was somehow missed, trigger after 2.5s
    const timer = setTimeout(() => setIsLoaded(true), 2500);

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
    <section className="relative min-h-[82svh] sm:min-h-[85vh] lg:min-h-[88vh] max-h-[920px] flex flex-col justify-center sm:justify-end overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-bg.jpg"
          alt="Luxury architectural home interior design by HOMES24DESIGNS in Delhi"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-charcoal-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 via-charcoal-900/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-lux w-full text-left">
        <div className="max-w-4xl lg:max-w-5xl text-left">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 md:mb-5"
            style={
              isLoaded
                ? { animation: 'fadeDown 0.6s 0.05s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            <span className="h-px w-8 sm:w-10 bg-accent-light" />
            <span className="text-[11px] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.22em] uppercase text-accent-light">
              <AnimatedWords
                text="Best Interior Designer in Okhla · New Delhi"
                startDelay={0.08}
                isLoaded={isLoaded}
              />
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-[2.15rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem] font-light text-ivory leading-[1.06] sm:leading-[1.05] tracking-tight">
            <AnimatedLine text="Interiors Designed" startDelay={0.15} isLoaded={isLoaded} />
            <br />
            <AnimatedLine text="Around The Way" startDelay={0.45} isLoaded={isLoaded} />
            <br />
            <span className="italic text-accent-light">
              <AnimatedLine text="You Live." startDelay={0.75} isLoaded={isLoaded} />
            </span>
          </h1>

          {/* Description */}
          <p className="mt-3.5 sm:mt-6 md:mt-8 text-xs sm:text-base md:text-lg leading-relaxed text-stone-200 max-w-xl">
            <AnimatedWords
              text="A thoughtful combination of design, functionality, material selection and personalised planning for contemporary homes in Delhi and Delhi NCR."
              startDelay={0.95}
              isLoaded={isLoaded}
            />
          </p>

          {/* Buttons */}
          <div
            className="mt-4 sm:mt-8 md:mt-10 flex flex-row flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-4"
            style={
              isLoaded
                ? { animation: 'fadeUp 0.8s 1.2s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            <Link
              to="/contact"
              onClick={handleConsultationClick}
              className="inline-flex items-center justify-center px-4 py-2.5 sm:px-8 sm:py-3.5 bg-ivory text-charcoal-900 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:bg-accent hover:text-ivory active:scale-95 touch-manipulation text-center shrink-0"
            >
              Book a Consultation
            </Link>
            <Link
              to="/services"
              onClick={handleServicesClick}
              className="inline-flex items-center justify-center px-4 py-2.5 sm:px-8 sm:py-3.5 border border-ivory/50 text-ivory text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:bg-ivory/15 active:scale-95 touch-manipulation text-center shrink-0"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Location */}
          <div
            className="mt-3.5 sm:mt-6 md:mt-10 flex items-center gap-2 text-stone-300"
            style={
              isLoaded
                ? { animation: 'fadeIn 0.8s 1.35s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-light shrink-0" strokeWidth={1.5} />
            <span className="text-[11px] sm:text-sm tracking-wide font-medium">
              <AnimatedWords
                text="• Okhla, Jamia Nagar, New Delhi"
                startDelay={1.4}
                isLoaded={isLoaded}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
