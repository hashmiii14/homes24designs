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
  CheckCircle2,
  ArrowRight,
  Clock,
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteConfig';

export default function AboutSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    'Hello Homes24Designs, I would like to discuss an interior design project.'
  )}`;

  return (
    <section id="about" className="py-10 md:py-14 bg-ivory relative overflow-hidden">
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

      <div className="container-lux relative z-10 space-y-12 md:space-y-14">
        {/* Mobile Heading: Positioned directly ABOVE the founder portrait on mobile screens */}
        <div className="lg:hidden">
          <Reveal>
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                  About HOMES24DESIGNS · Meet The Founder
                </span>
              </div>
              <h2 className="text-section font-light text-charcoal-800 leading-[1.12]">
                Designed Around Your Vision.{' '}
                <span className="italic font-normal text-stone-700">Built Around Your Trust.</span>
              </h2>
            </div>
          </Reveal>
        </div>

        {/* ===================================================================
            PART 1: BALANCED 2-COLUMN FOUNDER SPOTLIGHT (ZERO GAP UNDER IMAGE)
            =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Instant-loading Founder Portrait & Studio Quote (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <Reveal className="h-full flex flex-col justify-between">
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

                {/* Optimized WebP Portrait with Eager Loading & High Fetch Priority */}
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-200 border border-stone-300/90 shadow-lg">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/ehtashamul-islam-600.webp 600w, /ehtashamul-islam-800.webp 800w, /ehtashamul-islam.webp 1024w"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 460px"
                    />
                    <img
                      src="/ehtashamul-islam.webp"
                      alt="Ehtashamul Islam, Proprietor of HOMES24DESIGNS"
                      width="800"
                      height="1000"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-lux hover:scale-[1.02]"
                    />
                  </picture>
                  {/* Subtle vignette gradient at bottom */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-charcoal-900/50 via-charcoal-900/10 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Floating Nameplate Badge */}
                <div className="mt-3 p-4 bg-white border border-stone-200/90 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-accent block">
                        Proprietor &amp; Founder
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
                      <span className="text-xs font-medium text-charcoal-800">
                        HOMES24DESIGNS
                      </span>
                    </div>
                  </div>
                </div>

                {/* Studio Philosophy Quote — Perfectly anchors the left column */}
                <div className="mt-3 p-4 bg-stone-50 border border-stone-200/80">
                  <Quote className="w-4 h-4 text-accent/60 mb-1.5" strokeWidth={1.5} />
                  <p className="text-xs sm:text-[13px] text-stone-700 italic leading-relaxed font-serif">
                    &ldquo;Good interior design is never about imposing a fleeting trend. It is about
                    understanding how a family lives, cooks, and unwinds, and shaping spaces that feel
                    effortless, durable, and distinctly personal.&rdquo;
                  </p>
                  <div className="mt-2.5 pt-2.5 border-t border-stone-200/70 flex items-center justify-between text-[11px] text-stone-500">
                    <span>Ehtashamul Islam</span>
                    <span className="text-accent font-medium">HOMES24DESIGNS · Delhi</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Founder Narrative & Core Brand Story (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <Reveal delay={60}>
              <div className="space-y-4">
                {/* Eyebrow & Main Title (Desktop only: on mobile it renders above the founder image) */}
                <div className="hidden lg:block">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="h-px w-8 bg-accent" />
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                      About HOMES24DESIGNS · Meet The Founder
                    </span>
                  </div>
                  <h2 className="text-section font-light text-charcoal-800 leading-[1.12]">
                    Designed Around Your Vision.{' '}
                    <span className="italic font-normal text-stone-700">Built Around Your Trust.</span>
                  </h2>
                </div>

                {/* Business Introduction */}
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                  <strong className="font-semibold text-charcoal-900">HOMES24DESIGNS</strong> is a New Delhi-based
                  interior design studio dedicated to shaping residential spaces that balance quiet elegance with
                  practical daily life. We combine creative vision with structured planning to turn houses into personal sanctuaries.
                </p>

                {/* Founder Story */}
                <div className="p-5 bg-white border border-stone-200/90 shadow-sm space-y-3">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                    <span className="text-xs font-semibold tracking-wider uppercase text-accent">
                      Founder Profile
                    </span>
                    <span className="text-xs text-stone-500">Proprietorship Enterprise</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    <strong className="font-semibold text-charcoal-800">Ehtashamul Islam</strong> is the proprietor
                    of HOMES24DESIGNS, leading the studio with a commitment to thoughtful design, functional space
                    planning, and personalized residential interior solutions across Delhi and Delhi NCR. Guided by an
                    appreciation for spatial balance, practical ergonomics, and material integrity, he leads each
                    project with direct personal involvement and meticulous attention to detail.
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    At HOMES24DESIGNS, our design philosophy is anchored in understanding each customer&apos;s distinct
                    vision. We believe that exceptional residential interiors do not emerge from rigid templates, but
                    from carefully listening to how you live. Every home has its own natural rhythm—shaped by family
                    routines, storage habits, culinary traditions, and personal aesthetics. Our role is to design spaces
                    that support and elevate that rhythm rather than working against it.
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    By prioritizing transparent consultation, durable material selection, and honest execution over
                    superficial ornamentation, HOMES24DESIGNS builds lasting customer relationships grounded in trust.
                    Every space is approached as a dedicated partnership, resulting in spaces that feel refined,
                    comfortable, and enduringly functional.
                  </p>
                </div>

                {/* Quick Trust Badges Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  <div className="p-2.5 bg-stone-50 border border-stone-200 text-center">
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-semibold">GSTIN</span>
                    <span className="text-xs font-mono font-medium text-charcoal-800 block mt-0.5">{siteConfig.gst}</span>
                  </div>
                  <div className="p-2.5 bg-stone-50 border border-stone-200 text-center">
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-semibold">UDYAM</span>
                    <span className="text-xs font-mono font-medium text-charcoal-800 block mt-0.5">{siteConfig.udyam}</span>
                  </div>
                  <div className="p-2.5 bg-stone-50 border border-stone-200 text-center">
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-semibold">ENTERPRISE</span>
                    <span className="text-xs font-medium text-charcoal-800 block mt-0.5">Micro Enterprise</span>
                  </div>
                  <div className="p-2.5 bg-stone-50 border border-stone-200 text-center">
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-semibold">LOCATION</span>
                    <span className="text-xs font-medium text-charcoal-800 block mt-0.5">Delhi NCR</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
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
                    className="inline-flex items-center gap-2 px-6 py-3 border border-charcoal-800 text-charcoal-800 text-sm font-medium hover:bg-charcoal-800 hover:text-ivory transition-colors"
                  >
                    <Phone className="w-4 h-4" strokeWidth={1.5} />
                    <span>Call {siteConfig.phone}</span>
                  </a>
                  <Link
                    to="/services"
                    className="text-xs text-charcoal-700 hover:text-accent transition-colors link-underline py-2 font-medium"
                  >
                    Explore Services &rarr;
                  </Link>
                </div>

                {/* Founder's Direct Commitment & Consultation Guarantee Panel */}
                <div className="pt-2">
                  <div className="p-4 sm:p-5 bg-white border border-stone-200/90 shadow-sm space-y-3.5">
                    <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-accent" strokeWidth={1.8} />
                        <span className="text-xs font-semibold tracking-wider uppercase text-charcoal-900">
                          Direct Studio Commitment &amp; Guarantee
                        </span>
                      </div>
                      <span className="text-[10px] font-medium tracking-wider uppercase text-accent bg-accent/10 px-2 py-0.5 border border-accent/20">
                        Proprietor Supervised
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-charcoal-800">
                          <Compass className="w-3.5 h-3.5 text-accent shrink-0" strokeWidth={1.8} />
                          <span>On-Site Survey</span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-stone-600">
                          Personal site survey across Okhla, South Delhi &amp; NCR with laser measurements and space viability audit.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-charcoal-800">
                          <FileCheck className="w-3.5 h-3.5 text-accent shrink-0" strokeWidth={1.8} />
                          <span>Transparent BOQ</span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-stone-600">
                          100% itemized pricing with genuine hardware brands (Hafele, Hettich, Merino) and zero hidden contractor markups.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-charcoal-800">
                          <Clock className="w-3.5 h-3.5 text-accent shrink-0" strokeWidth={1.8} />
                          <span>Turnkey Handover</span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-stone-600">
                          45-day scheduled completion with weekly milestone progress logs shared directly by the proprietor.
                        </p>
                      </div>
                    </div>

                    {/* Studio Visiting Hours & Location Strip */}
                    <div className="pt-2.5 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-500">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>Studio: {siteConfig.address.line2}, {siteConfig.address.city} {siteConfig.address.pincode}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium text-stone-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Consultation Hours: 10:00 AM – 8:00 PM (Daily)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ===================================================================
            PART 2: DESIGN PHILOSOPHY — BEAUTY & FUNCTION (FULL WIDTH 3 CARDS)
            =================================================================== */}
        <Reveal delay={100}>
          <div className="pt-6 border-t border-stone-200/90">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal-700">
                  Design That Balances Beauty &amp; Function
                </h3>
              </div>
              <span className="text-xs text-stone-400 hidden sm:inline">Core Studio Principles</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 bg-white border border-stone-200/90 shadow-sm hover:border-accent/40 transition-colors">
                <div className="w-8 h-8 rounded-none bg-stone-100 flex items-center justify-center text-accent mb-3">
                  <CheckCircle2 className="w-4 h-4" strokeWidth={1.8} />
                </div>
                <h4 className="text-base font-medium text-charcoal-900 mb-1.5">
                  Intuitive Spatial Planning
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Clear circulation corridors, open visual sightlines, and logical zoning that allow Delhi homes—from
                  compact apartments to expansive floors—to feel open, organized, and uncrowded.
                </p>
              </div>

              <div className="p-5 bg-white border border-stone-200/90 shadow-sm hover:border-accent/40 transition-colors">
                <div className="w-8 h-8 rounded-none bg-stone-100 flex items-center justify-center text-accent mb-3">
                  <CheckCircle2 className="w-4 h-4" strokeWidth={1.8} />
                </div>
                <h4 className="text-base font-medium text-charcoal-900 mb-1.5">
                  Everyday Practical Usability
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Storage configurations tailored to real Indian culinary habits, heavy cookware, spice jars, and
                  season-specific wardrobe storage. Durable surfaces selected for effortless long-term maintenance.
                </p>
              </div>

              <div className="p-5 bg-white border border-stone-200/90 shadow-sm hover:border-accent/40 transition-colors">
                <div className="w-8 h-8 rounded-none bg-stone-100 flex items-center justify-center text-accent mb-3">
                  <CheckCircle2 className="w-4 h-4" strokeWidth={1.8} />
                </div>
                <h4 className="text-base font-medium text-charcoal-900 mb-1.5">
                  Refined Visual Refinement
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Quiet color palettes, tactile textures, architectural false ceiling cove lighting, and custom joinery
                  detailing that bring cohesive warmth and understated luxury to every room.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ===================================================================
            PART 3: OUR 4-STEP DISCIPLINED APPROACH (FULL WIDTH 4 CARDS)
            =================================================================== */}
        <Reveal delay={140}>
          <div className="pt-6 border-t border-stone-200/90">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal-700">
                  Our Approach
                </h3>
              </div>
              <span className="text-xs text-stone-400 hidden sm:inline">From Consultation to Handover</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 bg-stone-50 border border-stone-200/90">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-accent font-mono tracking-wider">01 — UNDERSTAND</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <h4 className="text-sm font-medium text-charcoal-900 mb-1">Listen &amp; Discover</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Understanding your family&apos;s daily routines, functional priorities, storage requirements, and aesthetic preferences.
                </p>
              </div>

              <div className="p-5 bg-stone-50 border border-stone-200/90">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-accent font-mono tracking-wider">02 — DESIGN</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <h4 className="text-sm font-medium text-charcoal-900 mb-1">Conceptualize &amp; Plan</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Creating thoughtful spatial layouts, functional zones, and custom design solutions tailored specifically to your home.
                </p>
              </div>

              <div className="p-5 bg-stone-50 border border-stone-200/90">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-accent font-mono tracking-wider">03 — REFINE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <h4 className="text-sm font-medium text-charcoal-900 mb-1">Details &amp; Materials</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Focusing on exact proportions, durable material selections, finish schedules, and integrated lighting plans.
                </p>
              </div>

              <div className="p-5 bg-stone-50 border border-stone-200/90">
                <div className="flex items-center justify-between mb-2">
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

        {/* ===================================================================
            PART 4: REGISTERED ACTIVITIES & BUSINESS CREDENTIALS
            =================================================================== */}
        <Reveal delay={180}>
          <div className="pt-6 border-t border-stone-200/90 space-y-6">
            {/* Activities Title & 3 Cards */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-accent" />
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal-700">
                  Design Expertise With a Practical Approach
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 max-w-2xl">
                From thoughtful interiors to functional design solutions, HOMES24DESIGNS combines creativity with practical planning to help customers shape spaces that feel refined, comfortable, and purposeful. Our registered professional activities include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

            {/* Credentials 4 Cards */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal-700">
                  Government Registered Credentials
                </h3>
                <span className="text-[11px] text-stone-400 font-medium">Verified Compliance</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-3.5 bg-white border border-stone-200/90 shadow-sm flex items-start gap-3 hover:border-accent/40 transition-colors">
                  <div className="w-8 h-8 bg-stone-100 flex items-center justify-center shrink-0 text-accent">
                    <ShieldCheck className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400 block">
                      GST Registered
                    </span>
                    <span className="text-xs font-mono font-medium text-charcoal-900 block mt-0.5">
                      {siteConfig.gst}
                    </span>
                    <span className="text-[11px] text-stone-500 block mt-0.5">
                      Tax Compliant · Delhi
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-white border border-stone-200/90 shadow-sm flex items-start gap-3 hover:border-accent/40 transition-colors">
                  <div className="w-8 h-8 bg-stone-100 flex items-center justify-center shrink-0 text-accent">
                    <FileCheck className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400 block">
                      Udyam Registered
                    </span>
                    <span className="text-xs font-mono font-medium text-charcoal-900 block mt-0.5">
                      {siteConfig.udyam}
                    </span>
                    <span className="text-[11px] text-stone-500 block mt-0.5">
                      Ministry of MSME, India
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-white border border-stone-200/90 shadow-sm flex items-start gap-3 hover:border-accent/40 transition-colors">
                  <div className="w-8 h-8 bg-stone-100 flex items-center justify-center shrink-0 text-accent">
                    <Building2 className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400 block">
                      Classification
                    </span>
                    <span className="text-xs font-medium text-charcoal-900 block mt-0.5">
                      Micro Enterprise
                    </span>
                    <span className="text-[11px] text-stone-500 block mt-0.5">
                      Proprietorship Entity
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-white border border-stone-200/90 shadow-sm flex items-start gap-3 hover:border-accent/40 transition-colors">
                  <div className="w-8 h-8 bg-stone-100 flex items-center justify-center shrink-0 text-accent">
                    <MapPin className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400 block">
                      Registered Studio
                    </span>
                    <span className="text-xs font-medium text-charcoal-900 block mt-0.5">
                      Batla House, Jamia Nagar
                    </span>
                    <span className="text-[11px] text-stone-500 block mt-0.5">
                      New Delhi – 110025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ===================================================================
            PART 5: INTEGRATED CALL TO ACTION BANNER
            =================================================================== */}
        <Reveal delay={200}>
          <div className="p-6 md:p-8 bg-charcoal-900 text-ivory relative overflow-hidden shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-light block mb-2">
                  Start Your Project
                </span>
                <h3 className="text-2xl md:text-3xl font-light font-serif text-ivory leading-tight">
                  Let’s Create a Space You’ll Love.
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Have a project in mind? Let’s discuss your vision, review your floor plan, and explore the right design direction for your home.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-accent hover:bg-accent-dark text-white inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                  <span>Chat on WhatsApp</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-stone-600 text-stone-200 text-sm font-medium hover:bg-white/10 hover:text-white transition-colors"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
