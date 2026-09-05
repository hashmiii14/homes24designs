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

    // Safety fallback: if event was somehow missed, trigger after 3.2s
    const timer = setTimeout(() => setIsLoaded(true), 3200);

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
    <section className="relative min-h-[85vh] lg:min-h-[88vh] max-h-[920px] flex flex-col justify-end overflow-hidden pt-24 sm:pt-28 md:pt-32">
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
      <div className="relative z-10 container-lux w-full pb-10 sm:pb-12 md:pb-16 text-left">
        <div className="max-w-4xl lg:max-w-5xl text-left">
          <div
            className="flex items-center gap-3 mb-5"
            style={
              isLoaded
                ? { animation: 'fadeDown 0.8s 0.1s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            <span className="h-px w-10 bg-accent-light" />
            <span className="text-xs font-medium tracking-[0.22em] uppercase text-accent-light">
              Best Interior Designer in Okhla · New Delhi
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem] font-light text-ivory leading-[1.05] tracking-tight">
            <AnimatedLine text="Interiors Designed" startDelay={0.2} isLoaded={isLoaded} />
            <br />
            <AnimatedLine text="Around The Way" startDelay={0.65} isLoaded={isLoaded} />
            <br />
            <span className="italic text-accent-light">
              <AnimatedLine text="You Live." startDelay={1.05} isLoaded={isLoaded} />
            </span>
          </h1>

          <p
            className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg leading-relaxed text-stone-200 max-w-xl"
            style={
              isLoaded
                ? { animation: 'fadeUp 0.8s 1.25s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            A thoughtful combination of design, functionality, material selection and
            personalised planning for contemporary homes in Delhi and Delhi NCR.
          </p>

          <div
            className="mt-6 sm:mt-10 flex flex-row flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4"
            style={
              isLoaded
                ? { animation: 'fadeUp 0.8s 1.4s cubic-bezier(0.16,1,0.3,1) both' }
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

          <div
            className="mt-6 sm:mt-10 flex items-center gap-2 text-stone-300"
            style={
              isLoaded
                ? { animation: 'fadeIn 0.8s 1.6s cubic-bezier(0.16,1,0.3,1) both' }
                : { opacity: 0 }
            }
          >
            <MapPin className="w-4 h-4 text-accent-light" strokeWidth={1.5} />
            <span className="text-xs sm:text-sm tracking-wide font-medium">
              • Okhla, Jamia Nagar, New Delhi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
