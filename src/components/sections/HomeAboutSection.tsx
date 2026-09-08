import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  FileCheck,
  Clock,
  Wrench,
  Quote,
  ArrowRight,
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteConfig';
import Logo from '@/components/ui/Logo';

export default function HomeAboutSection() {
  return (
    <section id="about" className="py-10 md:py-16 lg:py-20 bg-ivory relative overflow-hidden">
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
        {/* Mobile Eyebrow & Heading: Positioned above portrait on mobile */}
        <div className="lg:hidden mb-4 sm:mb-6">
          <div className="flex items-center gap-2.5 mb-2">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column: Founder Profile & Studio Philosophy (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
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

                {/* Nameplate Badge */}
                <div className="p-5 sm:p-6 bg-white border border-stone-200 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-accent block">
                        Founder
                      </span>
                      <h3 className="text-xl sm:text-2xl font-normal text-charcoal-900 font-serif tracking-wide mt-1">
                        EHTASHAM
                      </h3>
                    </div>
                    <div className="flex flex-col items-end text-right shrink-0">
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400">
                        Design Studio
                      </span>
                      <Logo variant="dark" size="sm" linkTo={null} className="items-end mt-1" />
                    </div>
                  </div>
                </div>

                {/* Founder Profile Card — Fills and balances the left column on desktop/laptop */}
                <div className="mt-4 p-5 bg-white border border-stone-200/90 shadow-sm space-y-3">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                    <span className="text-xs font-semibold tracking-wider uppercase text-accent">
                      FOUNDER PROFILE
                    </span>
                    <span className="text-xs text-stone-500 font-medium">Design Studio</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    <strong className="font-semibold text-charcoal-800">Ehtasham</strong> is the founder of HOMES24DESIGNS, leading the studio with a commitment to thoughtful design, functional space planning, and personalized residential interior solutions, commercial spaces and office spaces. Guided by an appreciation for spatial balance, practical ergonomics, and material integrity, he leads each project with direct personal involvement, and meticulous attention to detail.
                  </p>
                </div>

                {/* Studio Philosophy Quote */}
                <div className="mt-4 p-4 sm:p-5 bg-stone-50 border border-stone-200/80">
                  <Quote className="w-4 h-4 text-accent/70 mb-2" strokeWidth={1.5} />
                  <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed font-serif">
                    &ldquo;Good interior design is never about imposing a fleeting trend. It is about
                    understanding how a family lives, cooks, and unwinds, and shaping spaces that feel
                    effortless, durable, and distinctly personal.&rdquo;
                  </p>
                  <div className="mt-3 pt-2 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                    <span className="font-medium text-charcoal-800">Ehtasham</span>
                    <span className="text-accent font-medium">HOMES24DESIGNS · Delhi NCR</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Concise Studio Narrative & Scannable Highlights (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <Reveal delay={60}>
              <div className="space-y-5">
                {/* Eyebrow & Heading (Desktop only) */}
                <div className="hidden lg:block">
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
                <div className="space-y-3">
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    <strong className="font-semibold text-charcoal-900">HOMES24DESIGNS</strong> is widely recognized as one of the best interior designer in New Delhi, dedicated to shaping spaces that balance quiet elegance with practical daily life. Creating refined residential environments, dream home experiences where every room feels intentional, welcoming, and uniquely yours. Office Experiences with environments that inspire productivity, professionalism, and growth. Commercial Experiences with spaces those attract customers and leave lasting impressions. Renovation Experiences of turning outdated spaces into places people genuinely enjoy spending time in.
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Led by founder <strong className="font-semibold text-charcoal-800">Ehtasham</strong>, we turn apartments, villas, contemporary homes, commercial spaces, and offices into functional sanctuaries.
                  </p>
                  <div className="p-3 bg-white border-l-2 border-accent text-xs sm:text-sm font-serif italic text-charcoal-900 shadow-2xs">
                    &ldquo;We focus on how your space makes you feel.&rdquo;
                  </div>
                </div>

                {/* 4 Scannable Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 bg-white border border-stone-200/90 shadow-sm flex items-start gap-3">
                    <div className="w-8 h-8 rounded-none bg-stone-100 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-charcoal-900 uppercase tracking-wide">
                        45-Day Turnkey Handover
                      </h4>
                      <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                        Milestone-driven execution with weekly progress updates shared directly by the designer.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white border border-stone-200/90 shadow-sm flex items-start gap-3">
                    <div className="w-8 h-8 rounded-none bg-stone-100 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <FileCheck className="w-4 h-4" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-charcoal-900 uppercase tracking-wide">
                        100% Itemized BOQ
                      </h4>
                      <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                        Clear, transparent pricing schedules with zero hidden contractor surprises.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white border border-stone-200/90 shadow-sm flex items-start gap-3">
                    <div className="w-8 h-8 rounded-none bg-stone-100 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Wrench className="w-4 h-4" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-charcoal-900 uppercase tracking-wide">
                        Branded Material
                      </h4>
                      <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                        Hardware, Carcass, flooring, electricals etc.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white border border-stone-200/90 shadow-sm flex items-start gap-3">
                    <div className="w-8 h-8 rounded-none bg-stone-100 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-charcoal-900 uppercase tracking-wide">
                        Direct Site Supervision
                      </h4>
                      <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                        Designer Ehtasham personally visits sites to audit civil masonry, electrical routing, and carpentry alignment — from layout to handover.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Studio Metrics Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-0.5">
                  <div className="p-3 bg-white border border-stone-200/90 text-center">
                    <span className="block font-serif text-lg sm:text-xl font-normal text-charcoal-900 leading-none">10+</span>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider mt-1 block">Years in Delhi NCR</span>
                  </div>
                  <div className="p-3 bg-white border border-stone-200/90 text-center">
                    <span className="block font-serif text-lg sm:text-xl font-normal text-charcoal-900 leading-none">150+</span>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider mt-1 block">Homes Delivered</span>
                  </div>
                  <div className="p-3 bg-white border border-stone-200/90 text-center">
                    <span className="block font-serif text-lg sm:text-xl font-normal text-charcoal-900 leading-none">100%</span>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider mt-1 block">Itemized BOQ</span>
                  </div>
                  <div className="p-3 bg-white border border-stone-200/90 text-center">
                    <span className="block font-serif text-lg sm:text-xl font-normal text-charcoal-900 leading-none">0</span>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider mt-1 block">Subcontract Handoff</span>
                  </div>
                </div>

                {/* Navigation Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-charcoal-800 text-ivory text-xs sm:text-sm font-semibold tracking-wide hover:bg-charcoal-900 active:scale-95 transition-all shadow-sm touch-manipulation"
                    style={{ color: '#f7f4ef' }}
                  >
                    <span>Meet the Founder &amp; Story</span>
                    <ArrowRight className="w-4 h-4 text-accent-light" strokeWidth={1.5} />
                  </Link>

                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 border border-charcoal-800 text-charcoal-800 text-xs sm:text-sm font-medium tracking-wide hover:bg-charcoal-800 hover:text-ivory active:scale-95 transition-all touch-manipulation"
                  >
                    Explore Our Services
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
