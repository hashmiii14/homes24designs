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
    <section className="relative bg-charcoal-900 min-h-screen min-h-[100svh] sm:min-h-[82vh] lg:min-h-[86vh] sm:max-h-[920px] flex flex-col justify-end overflow-hidden pt-20 sm:pt-28 md:pt-32 pb-7 sm:pb-12 lg:pb-16">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero/hero-bg.jpg"
          alt="Luxury architectural home interior design by HOMES24DESIGNS in Delhi"
          className="w-full h-full object-cover object-[center_35%] sm:object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal-900/50 to-charcoal-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/85 via-charcoal-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-lux w-full text-left">
        <div className="max-w-4xl lg:max-w-5xl text-left">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-2 sm:gap-3 mb-2.5 sm:mb-4 min-w-0"
            style={
              isLoaded
                ? { animation: 'fadeDown 0.6s 0.05s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            <span className="h-px w-5 sm:w-10 bg-accent-light shrink-0" />
            <span className="text-[10.5px] xs:text-[11px] sm:text-xs font-medium tracking-[0.14em] sm:tracking-[0.22em] uppercase text-accent-light leading-snug break-words">
              <AnimatedWords
                text="Best Interior Designer in Okhla · New Delhi"
                startDelay={0.08}
                isLoaded={isLoaded}
              />
            </span>
          </div>

          {/* Heading - Large, Grand & Editorial inspired by Luxe */}
          <h1 className="font-serif text-[2.5rem] xs:text-[3.15rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-light text-ivory leading-[1.04] sm:leading-[1.02] tracking-tight break-words">
            <span className="block overflow-hidden py-0.5">
              <AnimatedLine text="Interiors Designed" startDelay={0.15} isLoaded={isLoaded} />
            </span>
            <span className="block overflow-hidden py-0.5">
              <AnimatedLine text="Around The Way" startDelay={0.45} isLoaded={isLoaded} />
            </span>
            <span className="block overflow-hidden py-0.5">
              <span className="italic text-accent-light font-normal">
                <AnimatedLine text="You Live." startDelay={0.75} isLoaded={isLoaded} />
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="mt-3 sm:mt-5 md:mt-7 text-xs sm:text-base md:text-lg leading-relaxed text-stone-200 max-w-xl">
            <AnimatedWords
              text="A thoughtful combination of design, functionality, material selection and personalised planning for contemporary homes in Delhi and Delhi NCR."
              startDelay={0.95}
              isLoaded={isLoaded}
            />
          </p>

          {/* Buttons: Stacked and compact on mobile ("Explore Our Services" below "Book a Consultation"), inline on desktop */}
          <div
            className="mt-3.5 sm:mt-7 md:mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4"
            style={
              isLoaded
                ? { animation: 'fadeUp 0.8s 1.2s cubic-bezier(0.16,1,0.3,1) both' }
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

          {/* Animated Location Pin */}
          <div
            className="mt-3 sm:mt-5 md:mt-8 flex items-center gap-2 text-stone-300/90"
            style={
              isLoaded
                ? { animation: 'fadeIn 0.8s 1.35s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            <span className="relative flex items-center justify-center w-5 h-5 shrink-0">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-accent opacity-75" />
              <MapPin
                className="w-4 h-4 text-accent-light shrink-0 relative z-10 animate-bounce"
                style={{ animationDuration: '2.4s' }}
                strokeWidth={1.75}
              />
            </span>
            <span className="text-xs sm:text-sm tracking-wide font-medium">
              <AnimatedWords
                text="Okhla, Jamia Nagar, New Delhi"
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
