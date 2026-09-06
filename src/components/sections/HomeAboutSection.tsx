import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  FileCheck,
  Clock,
  Sparkles,
  MapPin,
  Quote,
  ArrowRight,
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteConfig';
import Logo from '@/components/ui/Logo';

export default function HomeAboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-ivory relative overflow-hidden">
      {/* Subtle architectural background line accents */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(28,25,23,1) 1px, transparent 1px), linear-gradient(90deg, rgba(28,25,23,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="container-lux relative z-10">
        {/* Mobile Eyebrow & Heading: Positioned above portrait on mobile */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center gap-2.5 mb-2.5">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Founder Portrait & Studio Quote (5 cols) */}
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

                {/* Optimized Portrait */}
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-200 border border-stone-300 shadow-md">
                  <img
                    src="/ehtashamul-islam.webp"
                    alt="Ehtashamul Islam, Proprietor and Principal Designer at HOMES24DESIGNS"
                    width="800"
                    height="1000"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-lux hover:scale-[1.02]"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-charcoal-900/60 via-charcoal-900/20 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Floating Nameplate Badge */}
                <div className="mt-3 p-4 bg-white border border-stone-200 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-accent block">
                        Proprietor &amp; Principal Designer
                      </span>
                      <h3 className="text-lg sm:text-xl font-normal text-charcoal-900 font-serif tracking-wide mt-0.5">
                        EHTASHAMUL ISLAM
                      </h3>
                      <p className="text-xs text-stone-500 mt-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-accent shrink-0" strokeWidth={1.5} />
                        <span>Batla House, Jamia Nagar, New Delhi</span>
                      </p>
                    </div>
                    <div className="flex flex-col items-end text-right shrink-0">
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400">
                        Enterprise
                      </span>
                      <Logo variant="dark" size="sm" linkTo={null} className="items-end mt-1" />
                    </div>
                  </div>
                </div>

                {/* Studio Philosophy Quote */}
                <div className="mt-3 p-4 bg-stone-50 border border-stone-200/80">
                  <Quote className="w-4 h-4 text-accent/70 mb-1.5" strokeWidth={1.5} />
                  <p className="text-xs sm:text-[13px] text-stone-700 italic leading-relaxed font-serif">
                    &ldquo;Good interior design is never about imposing a fleeting trend. It is about
                    understanding how a family lives, cooks, and unwinds, and shaping spaces that feel
                    effortless, durable, and distinctly personal.&rdquo;
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500">
                    <span>Ehtashamul Islam</span>
                    <span className="text-accent font-medium">HOMES24DESIGNS · Delhi NCR</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Concise Studio Narrative & Scannable Highlights (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
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
                    <strong className="font-semibold text-charcoal-900">HOMES24DESIGNS</strong> is an established interior design studio based in Jamia Nagar, Okhla, New Delhi, creating refined residential environments across South Delhi and Delhi NCR. Led personally by principal designer <strong className="font-semibold text-charcoal-800">Ehtashamul Islam</strong>, we turn apartments, villas, and contemporary homes into functional sanctuaries.
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    We specialize in end-to-end turnkey residential interiors, bespoke modular kitchens, luxury wardrobes, and architectural space planning. Every project prioritizes practical ergonomics, robust storage solutions for Indian households, and enduring material craftsmanship over transient ornamentation.
                  </p>
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
                        Milestone-driven execution with weekly progress updates shared directly by the founder.
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
                      <Sparkles className="w-4 h-4" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-charcoal-900 uppercase tracking-wide">
                        Branded Hardware
                      </h4>
                      <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                        Genuine hardware and laminates from Hafele, Hettich, Merino, and Greenlam.
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
                        On-site quality audits overseen personally by the proprietor from layout to handover.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Actions */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
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
