import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { testimonials } from '@/data/testimonials';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function TestimonialsSection() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  // Responsive visible count tracking
  useEffect(() => {
    const updateVisibleCount = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  // Adjust index if window resize reduces maxIndex
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Gentle auto-rotation
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    }
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (Math.abs(touchDeltaX.current) > 40) {
      if (touchDeltaX.current < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <section
      id="testimonials"
      className="py-10 md:py-16 lg:py-20 bg-stone-100/70 border-y border-stone-200/80 overflow-hidden"
      aria-label="Client testimonials"
    >
      <div className="container-lux">
        {/* Header with Google Rating and Slider Controls */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full mb-3">
                <span className="flex items-center text-accent text-xs">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase text-charcoal-800">
                  4.9 / 5.0 Google Rating · 28+ Client Reviews
                </span>
              </div>
              <SectionHeading
                eyebrow="Client Experiences"
                title="Trusted by Homeowners Across Delhi NCR"
                description="Real feedback from families in Okhla, South Delhi and Delhi NCR who trusted HOMES24DESIGNS for their turnkey interiors and modular kitchens."
              />
            </div>

            {/* Slider Navigation and Review Link */}
            <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 shrink-0">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-charcoal-800 hover:text-accent transition-colors pb-1 border-b border-charcoal-800 hover:border-accent mr-2"
              >
                Share Your Experience
                <ArrowRight className="w-3.5 h-3.5 text-accent" />
              </Link>

              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-stone-500 font-medium tracking-wider mr-1" aria-live="polite">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(maxIndex + 1).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-stone-300 bg-white flex items-center justify-center text-charcoal-800 hover:border-charcoal-800 hover:bg-charcoal-800 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-charcoal-800 disabled:hover:border-stone-300 active:scale-95 touch-manipulation"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentIndex >= maxIndex}
                  aria-label="Next testimonial"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-stone-300 bg-white flex items-center justify-center text-charcoal-800 hover:border-charcoal-800 hover:bg-charcoal-800 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-charcoal-800 disabled:hover:border-stone-300 active:scale-95 touch-manipulation"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Interactive Carousel Track */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            contain: 'paint layout',
            isolation: 'isolate',
            WebkitMaskImage: '-webkit-radial-gradient(white, black)',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={item.id}
                className="shrink-0 px-2 sm:px-3 flex flex-col"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="flex flex-col justify-between h-full p-5 sm:p-7 bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[340px] sm:min-h-[380px]">
                  <div>
                    {/* Header: Stars & Dynamic Numbering */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <div className="flex items-center gap-1 text-accent">
                        {[...Array(item.rating)].map((_, s) => (
                          <Star key={s} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <span className="font-mono text-[11px] sm:text-xs font-medium tracking-widest text-stone-400">
                        {String(idx + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Review Text */}
                    <div className="relative mb-4">
                      <Quote
                        className="w-4 h-4 sm:w-5 sm:h-5 text-stone-200 absolute -top-1 -left-1"
                        strokeWidth={1.5}
                      />
                      <p className="text-stone-700 text-xs sm:text-sm leading-relaxed pl-4 sm:pl-5 font-serif italic">
                        "{item.review}"
                      </p>
                    </div>
                  </div>

                  {/* Homeowner & Project Meta */}
                  <div className="pt-4 border-t border-stone-100 mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-charcoal-900 font-sans tracking-wide">
                          {item.name}
                        </h4>
                        <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-accent shrink-0" />
                          <span>{item.location}</span>
                        </p>
                      </div>
                      <span className="text-[10px] text-stone-400 uppercase tracking-wider font-mono">
                        {item.date}
                      </span>
                    </div>

                    {/* Project scope tag */}
                    <div className="mt-3">
                      <span className="inline-block text-[10.5px] font-medium tracking-wide uppercase px-2 py-0.5 bg-stone-100 text-charcoal-700 border border-stone-200">
                        {item.project}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots & Progress */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-7 bg-charcoal-800'
                  : 'w-2 bg-stone-300 hover:bg-stone-400'
              }`}
              aria-label={`Go to testimonial slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Mobile quick link to contact */}
        <div className="sm:hidden text-center mt-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-charcoal-800 hover:text-accent transition-colors pb-1 border-b border-charcoal-800"
          >
            Share Your Experience
            <ArrowRight className="w-3.5 h-3.5 text-accent" />
          </Link>
        </div>

        {/* Trust Badges Strip below Reviews */}
        <Reveal delay={200}>
          <div className="mt-8 sm:mt-12 p-5 sm:p-8 bg-charcoal-900 text-ivory flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-md">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-1">
                Our Guarantee to You
              </p>
              <h3 className="text-lg sm:text-xl font-light font-serif">
                45-Day Turnkey Delivery &amp; Zero Hidden Costs
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-xl">
                Every residential interior project is backed by our itemized BOQ, branded hardware
                warranties, and direct site supervision by founder Ehtashamul Islam.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-accent-light/60 hover:bg-accent hover:border-accent text-ivory text-xs font-semibold tracking-wider uppercase transition-all shadow-sm active:scale-95 touch-manipulation min-h-[44px]"
                style={{ color: '#f7f4ef' }}
              >
                <span>Discover Our Approach</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent-light" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
