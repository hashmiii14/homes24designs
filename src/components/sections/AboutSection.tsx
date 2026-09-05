import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  FileCheck,
  Building2,
  MapPin,
  Compass,
  Palette,
  Layers,
  Phone,
  MessageCircle,
  Quote,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteConfig';

export default function AboutSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    'Hello Homes24Designs, I would like to discuss an interior design project.'
  )}`;

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
        {/* Section Header: Structured Brand Headline */}
        <Reveal>
          <div className="max-w-3xl mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                About HOMES24DESIGNS · Meet The Founder
              </span>
            </div>
            <h2 className="text-section font-light text-charcoal-800 leading-[1.12]">
              Designed Around Your Vision.{' '}
              <span className="italic font-normal text-stone-700">Built Around Your Trust.</span>
            </h2>
            <p className="mt-3.5 text-base md:text-lg text-stone-600 leading-relaxed max-w-2xl">
              HOMES24DESIGNS is a New Delhi-based interior design studio dedicated to shaping
              residential spaces that balance quiet elegance with practical daily life. We combine
              creative vision with structured planning to turn houses into personal sanctuaries.
            </p>
          </div>
        </Reveal>

        {/* Two-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Optimized Founder Portrait & Studio Anchor (5 cols on lg) */}
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-24">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Architectural decorative accent lines */}
                <div
                  className="absolute -bottom-3 -right-3 w-full h-full border border-accent/35 hidden sm:block -z-10"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-2.5 -left-2.5 w-16 h-16 border-t border-l border-accent/50 hidden sm:block -z-10"
                  aria-hidden="true"
                />

                {/* Optimized Portrait Container with modern WebP picture & srcset */}
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-200 border border-stone-300/90 shadow-xl shadow-stone-900/10">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/ehtashamul-islam-600.webp 600w, /ehtashamul-islam-800.webp 800w, /ehtashamul-islam.webp 1024w"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 460px"
                    />
                    <img
                      src="/ehtashamul-islam.jpg"
                      alt="Ehtashamul Islam, Proprietor of HOMES24DESIGNS"
                      width="800"
                      height="1000"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-lux hover:scale-[1.02]"
                    />
                  </picture>
                  {/* Subtle vignette gradient at bottom */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal-900/50 via-charcoal-900/15 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Floating Nameplate Badge */}
                <div className="mt-3.5 p-4 sm:p-5 bg-white border border-stone-200/90 shadow-md">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-accent block">
                        Proprietor &amp; Founder
                      </span>
                      <h3 className="text-xl font-normal text-charcoal-900 font-serif tracking-wide mt-0.5">
                        EHTASHAMUL ISLAM
                      </h3>
                      <p className="text-xs text-stone-500 mt-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-accent shrink-0" strokeWidth={1.5} />
                        <span>Batla House, Jamia Nagar, New Delhi</span>
                      </p>
                    </div>
                    <div className="hidden sm:flex flex-col items-end text-right shrink-0">
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400">
                        Enterprise
                      </span>
                      <span className="text-xs font-medium text-charcoal-800">
                        HOMES24DESIGNS
                      </span>
                    </div>
                  </div>
                </div>

                {/* Studio Philosophy Quote & Quick Anchor (Fills desktop left column void) */}
                <div className="mt-4 p-5 bg-stone-50 border border-stone-200/80">
                  <Quote className="w-5 h-5 text-accent/60 mb-2" strokeWidth={1.5} />
                  <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed font-serif">
                    &ldquo;Good interior design is never about imposing a fleeting trend. It is about
                    understanding how a family lives, cooks, and unwinds, and shaping spaces that feel
                    effortless, durable, and distinctly personal.&rdquo;
                  </p>
                  <div className="mt-3 pt-3 border-t border-stone-200/70 flex items-center justify-between text-[11px] text-stone-500">
                    <span>Ehtashamul Islam</span>
                    <span className="text-accent font-medium">HOMES24DESIGNS</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Multi-block Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-9">
            {/* Block 1: Meet the Founder Narrative */}
            <Reveal delay={80}>
              <div>
                <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-accent font-semibold mb-2.5">
                  <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>Meet The Founder</span>
                </div>
                <h3 className="font-serif text-2xl md:text-[1.75rem] font-light text-charcoal-900 leading-snug mb-3.5">
                  Personal Commitment to Every Space
                </h3>
                <div className="space-y-3.5 text-sm md:text-base leading-relaxed text-stone-600">
                  <p>
                    <strong className="font-semibold text-charcoal-800">Ehtashamul Islam</strong> is the proprietor
                    of <strong className="font-semibold text-charcoal-800">HOMES24DESIGNS</strong>, a Delhi-based
                    business focused on creating thoughtful spaces through design, interiors, and home-focused solutions.
                    Guided by an appreciation for spatial balance, practical ergonomics, and material integrity, he
                    leads each project with direct personal involvement and attention to detail.
                  </p>
                  <p>
                    At HOMES24DESIGNS, our design philosophy is anchored in understanding the client&apos;s vision.
                    We believe that exceptional residential interiors do not emerge from rigid templates, but from
                    carefully listening to how you live. Every home has its own natural rhythm—shaped by family
                    routines, storage habits, culinary traditions, and personal aesthetics. Our role is to design
                    spaces that support and elevate that rhythm rather than working against it.
                  </p>
                  <p>
                    By prioritizing transparent consultation, durable material selection, and honest execution over
                    superficial ornamentation, HOMES24DESIGNS builds lasting customer relationships grounded in trust.
                    Every room is treated as a dedicated partnership, resulting in spaces that feel refined,
                    comfortable, and enduringly functional.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Block 2: Design That Balances Beauty & Function */}
            <Reveal delay={120}>
              <div className="pt-7 border-t border-stone-200/90">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="h-px w-6 bg-accent" />
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal-700">
                    Design That Balances Beauty &amp; Function
                  </h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  A beautiful interior that does not work for daily life is incomplete design. We believe that visual
                  appeal and practical usability must work in seamless harmony across every square foot:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="p-4 bg-white border border-stone-200/80 shadow-sm">
                    <h4 className="text-sm font-semibold text-charcoal-900 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" strokeWidth={1.8} />
                      <span>Spatial Planning</span>
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Clear circulation, logical zoning, and proportioned layouts that make homes feel open and uncrowded.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-stone-200/80 shadow-sm">
                    <h4 className="text-sm font-semibold text-charcoal-900 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" strokeWidth={1.8} />
                      <span>Practical Usability</span>
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Storage tailored to Indian household routines, easy maintenance, and long-term durability.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-stone-200/80 shadow-sm">
                    <h4 className="text-sm font-semibold text-charcoal-900 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" strokeWidth={1.8} />
                      <span>Visual Refinement</span>
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Cohesive color palettes, layered illumination, tactile textures, and subtle bespoke detailing.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Block 3: Our Approach (01 Understand, 02 Design, 03 Refine, 04 Deliver) */}
            <Reveal delay={160}>
              <div className="pt-7 border-t border-stone-200/90">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="h-px w-6 bg-accent" />
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal-700">
                    Our Approach
                  </h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  A structured, disciplined approach that keeps the design experience transparent, collaborative,
                  and focused on your priorities:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 bg-stone-50 border border-stone-200/80">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-accent font-mono tracking-wider">01 — UNDERSTAND</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                    <h4 className="text-sm font-medium text-charcoal-900 mb-1">Listen &amp; Discover</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Understanding your family&apos;s daily routines, functional priorities, storage requirements, and aesthetic preferences.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-50 border border-stone-200/80">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-accent font-mono tracking-wider">02 — DESIGN</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                    <h4 className="text-sm font-medium text-charcoal-900 mb-1">Conceptualize &amp; Plan</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Creating thoughtful spatial layouts, functional zones, and custom design solutions tailored specifically to your home.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-50 border border-stone-200/80">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-accent font-mono tracking-wider">03 — REFINE</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                    <h4 className="text-sm font-medium text-charcoal-900 mb-1">Details &amp; Materials</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Focusing on exact proportions, durable material selections, finish schedules, and integrated lighting plans.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-50 border border-stone-200/80">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-accent font-mono tracking-wider">04 — DELIVER</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                    <h4 className="text-sm font-medium text-charcoal-900 mb-1">Execution Coordination</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Keeping the journey professional, clear, and customer-focused through coordinated execution and final handover.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Block 4: Registered Professional Activities */}
            <Reveal delay={200}>
              <div className="pt-7 border-t border-stone-200/90">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="h-px w-6 bg-accent" />
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal-700">
                    Design Expertise With a Practical Approach
                  </h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  Homes24Designs combines creativity with practical planning to help customers shape spaces that feel
                  refined, comfortable, and purposeful. Our registered professional activities include:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="p-4 bg-white border border-stone-200/80 shadow-sm hover:border-accent/40 transition-colors">
                    <Compass className="w-5 h-5 text-accent mb-2" strokeWidth={1.5} />
                    <h4 className="text-sm font-semibold text-charcoal-900 mb-1">
                      Architectural &amp; Technical
                    </h4>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      Engineering-related technical consultancy, spatial layouts, and architectural coordination.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-stone-200/80 shadow-sm hover:border-accent/40 transition-colors">
                    <Layers className="w-5 h-5 text-accent mb-2" strokeWidth={1.5} />
                    <h4 className="text-sm font-semibold text-charcoal-900 mb-1">
                      Specialized Design
                    </h4>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      Custom space planning, material palettes, finish schedules, and integrated ambient lighting.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-stone-200/80 shadow-sm hover:border-accent/40 transition-colors">
                    <Palette className="w-5 h-5 text-accent mb-2" strokeWidth={1.5} />
                    <h4 className="text-sm font-semibold text-charcoal-900 mb-1">
                      Interior Decoration
                    </h4>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      Residential interior decoration, tailored modular solutions, and cohesive home styling.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Block 5: Business Credentials / Trust Badges */}
            <Reveal delay={240}>
              <div className="pt-7 border-t border-stone-200/90">
                <div className="flex items-center justify-between gap-4 mb-3.5">
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal-700">
                    Business Credentials &amp; Verification
                  </h3>
                  <span className="text-[11px] text-stone-400 font-medium">Govt. of India Registered</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* GSTIN */}
                  <div className="p-3.5 bg-white border border-stone-200/90 shadow-sm flex items-start gap-3 hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 bg-stone-100 flex items-center justify-center shrink-0 text-accent">
                      <ShieldCheck className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400 block">
                        GST Registered
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-medium text-charcoal-900 block mt-0.5">
                        {siteConfig.gst}
                      </span>
                      <span className="text-[11px] text-stone-500 block mt-0.5">
                        Government of India Tax Compliant
                      </span>
                    </div>
                  </div>

                  {/* UDYAM */}
                  <div className="p-3.5 bg-white border border-stone-200/90 shadow-sm flex items-start gap-3 hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 bg-stone-100 flex items-center justify-center shrink-0 text-accent">
                      <FileCheck className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400 block">
                        Udyam Registered
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-medium text-charcoal-900 block mt-0.5">
                        {siteConfig.udyam}
                      </span>
                      <span className="text-[11px] text-stone-500 block mt-0.5">
                        Ministry of MSME, Govt. of India
                      </span>
                    </div>
                  </div>

                  {/* ENTERPRISE CLASSIFICATION */}
                  <div className="p-3.5 bg-white border border-stone-200/90 shadow-sm flex items-start gap-3 hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 bg-stone-100 flex items-center justify-center shrink-0 text-accent">
                      <Building2 className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400 block">
                        Enterprise Classification
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-charcoal-900 block mt-0.5">
                        Micro Enterprise · Proprietorship
                      </span>
                      <span className="text-[11px] text-stone-500 block mt-0.5">
                        Proprietor: {siteConfig.legalName}
                      </span>
                    </div>
                  </div>

                  {/* LOCATION */}
                  <div className="p-3.5 bg-white border border-stone-200/90 shadow-sm flex items-start gap-3 hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 bg-stone-100 flex items-center justify-center shrink-0 text-accent">
                      <MapPin className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400 block">
                        Delhi Based Studio
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-charcoal-900 block mt-0.5">
                        Batla House, Okhla / Jamia Nagar
                      </span>
                      <span className="text-[11px] text-stone-500 block mt-0.5">
                        New Delhi, Delhi – 110025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Block 6: Refined Call to Action */}
            <Reveal delay={280}>
              <div className="pt-7 border-t border-stone-200/90">
                <div className="p-6 md:p-8 bg-charcoal-900 text-ivory relative overflow-hidden shadow-md">
                  <div className="max-w-xl">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-light block mb-2">
                      Start The Conversation
                    </span>
                    <h3 className="text-2xl md:text-[1.75rem] font-light font-serif text-ivory leading-tight">
                      Let’s Create a Space You’ll Love.
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-stone-300 leading-relaxed">
                      Have a project in mind? Let’s discuss your vision and explore the right design solution for your space.
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-3.5">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary bg-accent hover:bg-accent-dark text-white inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                        <span>Chat on WhatsApp</span>
                      </a>
                      <a
                        href={`tel:${siteConfig.phoneRaw}`}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-stone-600 text-stone-200 text-sm font-medium hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <Phone className="w-4 h-4" strokeWidth={1.5} />
                        <span>Call {siteConfig.phone}</span>
                      </a>
                      <Link
                        to="/services"
                        className="text-xs text-stone-400 hover:text-accent-light transition-colors link-underline py-2"
                      >
                        Explore Services &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
