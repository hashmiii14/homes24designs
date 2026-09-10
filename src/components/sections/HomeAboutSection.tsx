import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  FileCheck,
  Clock,
  Quote,
  ArrowRight,
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Logo from '@/components/ui/Logo';

export default function HomeAboutSection() {
  return (
    <section id="about" className="py-7 sm:py-10 md:py-12 lg:py-14 bg-ivory relative overflow-hidden">
      {/* Subtle architectural background line accents */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none hidden sm:block"
        style={{
          backgroundImage:
            'linear-gradient(rgba(28,25,23,1) 1px, transparent 1px), linear-gradient(90deg, rgba(28,25,23,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="container-lux relative z-10">
        {/* Mobile Eyebrow & Heading */}
        <div className="md:hidden mb-4">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="h-px w-6 bg-accent" />
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-accent">
              Interior Design Studio · New Delhi
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-light text-charcoal-900 leading-snug">
            Designed Around Your Vision.{' '}
            <span className="italic font-normal text-stone-700">Built Around Your Trust.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-8 items-stretch">
          {/* Left Column: Studio & Founder Identity Card */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <Reveal className="h-full">
              <div className="p-4 sm:p-5 lg:p-6 bg-white border border-stone-200/90 shadow-2xs h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 pb-3 border-b border-stone-100">
                    <div>
                      <span className="text-[9.5px] font-semibold tracking-[0.2em] uppercase text-accent block">
                        Established Studio · Delhi NCR
                      </span>
                      <h3 className="text-lg sm:text-xl font-normal text-charcoal-900 font-serif tracking-wide mt-0.5">
                        HOMES24DESIGNS
                      </h3>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        Principal Designer: <strong className="text-charcoal-800 font-medium">Ehtasham</strong>
                      </p>
                    </div>
                    <Logo variant="dark" size="sm" linkTo={null} className="shrink-0" />
                  </div>

                  <div className="mt-3.5 p-3 sm:p-3.5 bg-stone-50 border border-stone-200/70">
                    <Quote className="w-3.5 h-3.5 text-accent/70 mb-1" strokeWidth={1.5} />
                    <p className="text-xs sm:text-[13px] text-stone-700 italic leading-relaxed font-serif">
                      &ldquo;Good interior design is about understanding how a family lives, cooks, and unwinds, and shaping spaces that feel effortless, durable, and distinctly personal.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-3 mt-3 border-t border-stone-100 text-center">
                  <div className="p-2 bg-stone-50/70 border border-stone-200/60">
                    <span className="block font-serif text-sm sm:text-base font-medium text-charcoal-900">10+</span>
                    <span className="text-[9px] uppercase tracking-wider text-stone-500 block">Years Exp.</span>
                  </div>
                  <div className="p-2 bg-stone-50/70 border border-stone-200/60">
                    <span className="block font-serif text-sm sm:text-base font-medium text-charcoal-900">100%</span>
                    <span className="text-[9px] uppercase tracking-wider text-stone-500 block">Itemized BOQ</span>
                  </div>
                  <div className="p-2 bg-stone-50/70 border border-stone-200/60">
                    <span className="block font-serif text-sm sm:text-base font-medium text-charcoal-900">45-Day</span>
                    <span className="text-[9px] uppercase tracking-wider text-stone-500 block">Handover</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Studio Overview & Core Pillars */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <Reveal delay={60} className="h-full flex flex-col justify-between space-y-4">
              {/* Desktop Eyebrow & Heading */}
              <div className="hidden md:block">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="h-px w-7 bg-accent" />
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent">
                    Interior Design Studio · New Delhi
                  </span>
                </div>
                <h2 className="text-xl lg:text-2xl font-light text-charcoal-900 leading-snug">
                  Designed Around Your Vision.{' '}
                  <span className="italic font-normal text-stone-700">Built Around Your Trust.</span>
                </h2>
              </div>

              {/* Overview Text */}
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                <strong className="font-semibold text-charcoal-900">HOMES24DESIGNS</strong> crafts luxury residential interiors, modern modular kitchens, custom wardrobes, and turnkey homes across Delhi NCR. We balance spatial harmony and durable craftsmanship with 100% itemized pricing and dedicated on-site supervision.
              </p>

              {/* 3 Compact Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="p-3 bg-white border border-stone-200/90 shadow-2xs flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={1.8} />
                  <div>
                    <h4 className="text-[11px] font-semibold text-charcoal-900 uppercase tracking-wide">
                      45-Day Delivery
                    </h4>
                    <p className="text-[10.5px] text-stone-500 mt-0.5 leading-snug">
                      Scheduled milestone tracking &amp; timely handover.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-white border border-stone-200/90 shadow-2xs flex items-start gap-2.5">
                  <FileCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={1.8} />
                  <div>
                    <h4 className="text-[11px] font-semibold text-charcoal-900 uppercase tracking-wide">
                      100% Itemized BOQ
                    </h4>
                    <p className="text-[10.5px] text-stone-500 mt-0.5 leading-snug">
                      Transparent pricing with zero hidden contractor surprises.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-white border border-stone-200/90 shadow-2xs flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={1.8} />
                  <div>
                    <h4 className="text-[11px] font-semibold text-charcoal-900 uppercase tracking-wide">
                      Branded Quality
                    </h4>
                    <p className="text-[10.5px] text-stone-500 mt-0.5 leading-snug">
                      Authentic hardware &amp; 10-year warranty coverage.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-charcoal-800 text-ivory text-xs font-semibold tracking-wide hover:bg-charcoal-900 active:scale-95 transition-all shadow-sm touch-manipulation"
                  style={{ color: '#f7f4ef' }}
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent-light shrink-0" strokeWidth={1.5} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border border-charcoal-800 text-charcoal-800 text-xs font-medium tracking-wide hover:bg-charcoal-800 hover:text-ivory active:scale-95 transition-all touch-manipulation"
                >
                  Book Consultation
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
