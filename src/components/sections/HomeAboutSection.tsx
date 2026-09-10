import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  FileCheck,
  Clock,
  Wrench,
  Quote,
  ArrowRight,
  Compass,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Logo from '@/components/ui/Logo';

export default function HomeAboutSection() {
  const [narrativeExpanded, setNarrativeExpanded] = useState(false);

  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-ivory relative overflow-hidden">
      {/* Subtle architectural background line accents */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none hidden sm:block"
        style={{
          backgroundImage:
            'linear-gradient(rgba(28,25,23,1) 1px, transparent 1px), linear-gradient(90deg, rgba(28,25,23,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          contain: 'paint layout',
        }}
        aria-hidden="true"
      />

      <div className="container-lux relative z-10">
        {/* Mobile Eyebrow & Heading: Positioned above content on mobile only */}
        <div className="md:hidden mb-4 sm:mb-5">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="h-px w-6 bg-accent" />
            <span className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-accent">
              Interior Design Studio · New Delhi
            </span>
          </div>
          <h2 className="text-2xl font-light text-charcoal-900 leading-[1.15]">
            Designed Around Your Vision.{' '}
            <span className="italic font-normal text-stone-700">Built Around Your Trust.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Left Column: Studio Brand Identity & Direct Commitment (5 cols on tablet/desktop, hidden on mobile) */}
          <div className="hidden md:flex md:col-span-5 flex-col">
            <Reveal>
              <div className="relative mx-auto max-w-md lg:max-w-none w-full">
                {/* Architectural decorative accent lines */}
                <div
                  className="absolute -bottom-2.5 -right-2.5 w-full h-full border border-accent/35 hidden sm:block -z-10"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-2 -left-2 w-14 h-14 border-t border-l border-accent/50 hidden sm:block -z-10"
                  aria-hidden="true"
                />

                {/* Studio Identity Badge */}
                <div className="p-4 sm:p-5 lg:p-6 bg-white border border-stone-200 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[9.5px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-accent block">
                        Established Studio
                      </span>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-normal text-charcoal-900 font-serif tracking-wide mt-0.5 sm:mt-1">
                        HOMES24DESIGNS
                      </h3>
                      <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
                        New Delhi · Serving Delhi NCR
                      </p>
                    </div>
                    <div className="shrink-0">
                      <Logo variant="dark" size="sm" linkTo={null} className="scale-90 sm:scale-100 origin-right" />
                    </div>
                  </div>
                </div>

                {/* Studio Focus Card */}
                <div className="mt-3 sm:mt-4 p-4 sm:p-5 bg-white border border-stone-200/90 shadow-sm space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                    <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-accent">
                      STUDIO PHILOSOPHY
                    </span>
                    <span className="text-[10.5px] sm:text-xs text-stone-500 font-medium">Bespoke Living</span>
                  </div>
                  <div className="text-xs sm:text-sm text-stone-600 leading-relaxed space-y-2">
                    <p>
                      At <strong className="font-semibold text-charcoal-800">HOMES24DESIGNS</strong>, we believe exceptional interiors are shaped around spatial harmony, practical ergonomics, and genuine material integrity.
                    </p>
                    <p>
                      Every residence we design is treated as a tailored sanctuary—balancing quiet elegance, smart functional storage, and durable craftsmanship designed for long-term daily living.
                    </p>
                  </div>
                </div>

                {/* Studio Philosophy Quote */}
                <div className="mt-3 sm:mt-4 p-3.5 sm:p-4 lg:p-5 bg-stone-50 border border-stone-200/80">
                  <Quote className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-accent/70 mb-1.5 sm:mb-2" strokeWidth={1.5} />
                  <p className="text-[11.5px] sm:text-xs lg:text-sm text-stone-700 italic leading-relaxed font-serif">
                    &ldquo;Good interior design is never about imposing a fleeting trend. It is about
                    understanding how a family lives, cooks, and unwinds, and shaping spaces that feel
                    effortless, durable, and distinctly personal.&rdquo;
                  </p>
                  <div className="mt-2.5 sm:mt-3 pt-2 border-t border-stone-200 flex items-center justify-between text-[10.5px] sm:text-xs text-stone-500">
                    <span className="font-medium text-charcoal-800">Studio Principle</span>
                    <span className="text-accent font-medium">HOMES24DESIGNS · Delhi NCR</span>
                  </div>
                </div>

                {/* Studio Consultation & On-Site Viability Badges */}
                <div className="mt-3 sm:mt-4 p-3.5 sm:p-4 lg:p-5 bg-white border border-stone-200/90 shadow-sm space-y-3">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-accent" strokeWidth={1.8} />
                      <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-charcoal-900">
                        Direct Studio Commitment
                      </span>
                    </div>
                    <span className="text-[9.5px] sm:text-[10px] font-medium tracking-wider uppercase text-accent bg-accent/10 px-1.5 sm:px-2 py-0.5 border border-accent/20">
                      Delhi NCR
                    </span>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-none bg-stone-100 flex items-center justify-center text-accent shrink-0 mt-0.5">
                        <Compass className="w-3.5 sm:w-4 h-3.5 sm:h-4" strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[11px] sm:text-xs font-semibold text-charcoal-900 uppercase tracking-wide">
                          On-Site Survey &amp; Viability Audit
                        </h4>
                        <p className="text-[10.5px] sm:text-xs text-stone-600 mt-0.5 leading-relaxed">
                          Site surveys across Delhi NCR with on-site measurements and space viability audit.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 sm:pt-2.5 border-t border-stone-100 flex items-start gap-2.5 sm:gap-3">
                      <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-none bg-stone-100 flex items-center justify-center text-accent shrink-0 mt-0.5">
                        <Clock className="w-3.5 sm:w-4 h-3.5 sm:h-4" strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <h4 className="text-[11px] sm:text-xs font-semibold text-charcoal-900 uppercase tracking-wide">
                            Consultation &amp; Visiting Hours
                          </h4>
                          <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-medium text-emerald-700 bg-emerald-50 px-1 sm:px-1.5 py-0.5 border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Daily
                          </span>
                        </div>
                        <p className="text-[10.5px] sm:text-xs text-stone-600 mt-0.5 leading-relaxed">
                          10:00 AM – 8:00 PM · Studio: New Delhi · Serving Delhi NCR
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Studio Narrative & Scannable Highlights (7 cols on tablet/desktop, full on mobile) */}
          <div className="md:col-span-7 flex flex-col justify-start">
            <Reveal delay={60}>
              <div className="space-y-4 sm:space-y-5">
                {/* Eyebrow & Heading (Tablet & Desktop) */}
                <div className="hidden md:block">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="h-px w-8 bg-accent" />
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                      Interior Design Studio · New Delhi
                    </span>
                  </div>
                  <h2 className="text-section font-light text-charcoal-900 leading-[1.15]">
                    Designed Around Your Vision.{' '}
                    <span className="italic font-normal text-stone-700">Built Around Your Trust.</span>
                  </h2>
                </div>

                {/* Concise Studio Intro & Specialties */}
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="text-xs sm:text-sm md:text-base text-stone-700 leading-relaxed">
                    <p>
                      <strong className="font-semibold text-charcoal-900">HOMES24DESIGNS</strong> is widely recognized as one of the premier interior design firms in New Delhi, dedicated to shaping spaces that balance quiet elegance with practical daily life.
                      <span className={`${narrativeExpanded ? 'inline' : 'hidden'} md:inline`}>
                        {' '}We craft refined residential environments where every room feels intentional, welcoming, and uniquely yours. From dream home interiors and modern modular kitchens to custom wardrobes, false ceiling illumination, and commercial environments, we deliver end-to-end turnkey spaces with meticulous attention to detail.
                      </span>
                    </p>
                    <button
                      type="button"
                      onClick={() => setNarrativeExpanded(!narrativeExpanded)}
                      className="md:hidden mt-1.5 text-[11.5px] font-semibold text-accent hover:text-accent-dark tracking-wide inline-flex items-center gap-1 touch-manipulation focus:outline-none py-0.5"
                    >
                      <span>{narrativeExpanded ? 'Show Less' : 'Read Full Overview'}</span>
                      {narrativeExpanded ? (
                        <ChevronUp className="w-3 h-3 text-accent" />
                      ) : (
                        <ChevronDown className="w-3 h-3 text-accent" />
                      )}
                    </button>
                  </div>
                  <p className="hidden md:block text-xs sm:text-sm text-stone-600 leading-relaxed">
                    We transform apartments, villas, contemporary homes, commercial spaces, and offices into functional sanctuaries.
                  </p>
                  <div className="hidden md:block p-2.5 sm:p-3 bg-white border-l-2 border-accent text-xs sm:text-sm font-serif italic text-charcoal-900 shadow-2xs">
                    &ldquo;We focus on how your space makes you feel.&rdquo;
                  </div>
                </div>

                {/* 4 Scannable Highlights — 2x2 Grid on Mobile for compact vertical height */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                  <div className="p-3 sm:p-3.5 bg-white border border-stone-200/90 shadow-sm flex flex-col xs:flex-row items-start gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-none bg-stone-100 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[11px] sm:text-xs font-semibold text-charcoal-900 uppercase tracking-wide">
                        45-Day Handover
                      </h4>
                      <p className="text-[10px] sm:text-xs text-stone-600 mt-0.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                        Milestone-driven execution with weekly progress updates shared directly from the studio.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 sm:p-3.5 bg-white border border-stone-200/90 shadow-sm flex flex-col xs:flex-row items-start gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-none bg-stone-100 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <FileCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[11px] sm:text-xs font-semibold text-charcoal-900 uppercase tracking-wide">
                        100% Itemized BOQ
                      </h4>
                      <p className="text-[10px] sm:text-xs text-stone-600 mt-0.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                        Clear, transparent pricing schedules with zero hidden contractor surprises.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 sm:p-3.5 bg-white border border-stone-200/90 shadow-sm flex flex-col xs:flex-row items-start gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-none bg-stone-100 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[11px] sm:text-xs font-semibold text-charcoal-900 uppercase tracking-wide">
                        Branded Material
                      </h4>
                      <p className="text-[10px] sm:text-xs text-stone-600 mt-0.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                        Hardware, carcass, flooring, and electricals with authentic 10-year brand warranty.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 sm:p-3.5 bg-white border border-stone-200/90 shadow-sm flex flex-col xs:flex-row items-start gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-none bg-stone-100 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[11px] sm:text-xs font-semibold text-charcoal-900 uppercase tracking-wide">
                        Dedicated Supervision
                      </h4>
                      <p className="text-[10px] sm:text-xs text-stone-600 mt-0.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                        Strict on-site quality control auditing civil masonry, electrical routing, and carpentry.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Studio Metrics Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 pt-1">
                  <div className="p-2 sm:p-3 bg-white border border-stone-200/90 text-center">
                    <span className="block font-serif text-base sm:text-lg lg:text-xl font-normal text-charcoal-900 leading-none">10+</span>
                    <span className="text-[9.5px] sm:text-[10px] text-stone-500 uppercase tracking-wider mt-1 block">Years in Delhi NCR</span>
                  </div>
                  <div className="p-2 sm:p-3 bg-white border border-stone-200/90 text-center">
                    <span className="block font-serif text-base sm:text-lg lg:text-xl font-normal text-charcoal-900 leading-none">50+</span>
                    <span className="text-[9.5px] sm:text-[10px] text-stone-500 uppercase tracking-wider mt-1 block">Projects Delivered</span>
                  </div>
                  <div className="p-2 sm:p-3 bg-white border border-stone-200/90 text-center">
                    <span className="block font-serif text-base sm:text-lg lg:text-xl font-normal text-charcoal-900 leading-none">100%</span>
                    <span className="text-[9.5px] sm:text-[10px] text-stone-500 uppercase tracking-wider mt-1 block">Itemized BOQ</span>
                  </div>
                  <div className="p-2 sm:p-3 bg-white border border-stone-200/90 text-center">
                    <span className="block font-serif text-base sm:text-lg lg:text-xl font-normal text-charcoal-900 leading-none">45-Day</span>
                    <span className="text-[9.5px] sm:text-[10px] text-stone-500 uppercase tracking-wider mt-1 block">Turnkey Handover</span>
                  </div>
                </div>

                {/* Navigation Actions */}
                <div className="pt-2 sm:pt-3 flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3">
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 bg-charcoal-800 text-ivory text-xs sm:text-sm font-semibold tracking-wide hover:bg-charcoal-900 active:scale-95 transition-all shadow-sm touch-manipulation text-center"
                    style={{ color: '#f7f4ef' }}
                  >
                    <span>Explore Our Services</span>
                    <ArrowRight className="w-4 h-4 text-accent-light shrink-0" strokeWidth={1.5} />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 border border-charcoal-800 text-charcoal-800 text-xs sm:text-sm font-medium tracking-wide hover:bg-charcoal-800 hover:text-ivory active:scale-95 transition-all touch-manipulation text-center"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
