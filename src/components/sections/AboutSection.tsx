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
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteConfig';

export default function AboutSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    'Hello Homes24Designs, I would like to discuss an interior design project.'
  )}`;

  return (
    <section id="about" className="py-20 md:py-28 bg-ivory relative overflow-hidden">
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
        {/* Section Eyebrow & Title */}
        <Reveal>
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
                About HOMES24DESIGNS · Meet The Founder
              </span>
            </div>
            <h2 className="text-section font-light text-charcoal-800 leading-[1.15]">
              Designed Around Your Vision.{' '}
              <span className="italic font-normal text-stone-700">Built Around Your Trust.</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-stone-600 leading-relaxed max-w-2xl">
              A Delhi-based interior design studio shaping intentional, comfortable, and bespoke residential spaces with personal accountability and craft.
            </p>
          </div>
        </Reveal>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Founder Portrait (5 cols on lg) */}
          <div className="lg:col-span-5">
            <Reveal className="sticky top-24">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Architectural decorative background frames */}
                <div
                  className="absolute -bottom-4 -right-4 w-full h-full border border-accent/35 hidden sm:block -z-10"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-accent/50 hidden sm:block -z-10"
                  aria-hidden="true"
                />

                {/* Portrait Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-200 border border-stone-300/80 shadow-2xl shadow-stone-900/10">
                  <img
                    src="/ehtashamul-islam.png"
                    alt="Ehtashamul Islam, Proprietor of HOMES24DESIGNS"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                    loading="lazy"
                  />
                  {/* Subtle vignette gradient at bottom */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-charcoal-900/60 via-charcoal-900/20 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Floating Nameplate Badge */}
                <div className="mt-4 p-5 bg-white/95 backdrop-blur-sm border border-stone-200/90 shadow-lg relative">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-accent block">
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
                      <span className="text-[10px] font-medium tracking-wider uppercase text-stone-400">
                        Enterprise
                      </span>
                      <span className="text-xs font-medium text-charcoal-700">
                        HOMES24DESIGNS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Narrative, Registered Expertise, Credibility, and CTA (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Founder Narrative */}
            <Reveal delay={100}>
              <div className="space-y-4 text-base leading-relaxed text-stone-600">
                <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-accent font-medium">
                  <span>Brand Philosophy &amp; Vision</span>
                </div>
                <p>
                  <strong className="font-semibold text-charcoal-800">Ehtashamul Islam</strong> is the proprietor of{' '}
                  <strong className="font-semibold text-charcoal-800">HOMES24DESIGNS</strong>, a Delhi-based business focused on creating thoughtful spaces through design, interiors, and home-focused solutions.
                </p>
                <p>
                  At HOMES24DESIGNS, our philosophy is anchored in understanding each customer&apos;s distinct vision. We believe that exceptional residential interiors do not emerge from rigid templates, but from carefully listening to how you live, cook, unwind, and connect with your home.
                </p>
                <p>
                  Every engagement is treated as a dedicated partnership. From intelligent spatial planning and balanced material palettes to refined lighting and tailored modular elements, we balance aesthetic elegance with practical, day-to-day durability—ensuring every space feels deeply personal, functional, and enduring.
                </p>
              </div>
            </Reveal>

            {/* Design Expertise With a Practical Approach */}
            <Reveal delay={150}>
              <div className="pt-8 border-t border-stone-200/90">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px w-6 bg-accent" />
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal-700">
                    Design Expertise With a Practical Approach
                  </h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-5">
                  From thoughtful interiors to functional design solutions, HOMES24DESIGNS combines creativity with practical planning to help customers shape spaces that feel refined, comfortable, and purposeful. Our registered professional activities include:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-stone-50 border border-stone-200/80 hover:border-accent/50 transition-colors duration-300">
                    <Compass className="w-5 h-5 text-accent mb-2.5" strokeWidth={1.5} />
                    <h4 className="text-sm font-medium text-charcoal-900 mb-1">
                      Architectural &amp; Technical Consultancy
                    </h4>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      Engineering-related technical consultancy, spatial layouts, and architectural coordination.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-50 border border-stone-200/80 hover:border-accent/50 transition-colors duration-300">
                    <Layers className="w-5 h-5 text-accent mb-2.5" strokeWidth={1.5} />
                    <h4 className="text-sm font-medium text-charcoal-900 mb-1">
                      Specialized Design Activities
                    </h4>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      Custom space planning, material palettes, finish schedules, and integrated lighting schemes.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-50 border border-stone-200/80 hover:border-accent/50 transition-colors duration-300">
                    <Palette className="w-5 h-5 text-accent mb-2.5" strokeWidth={1.5} />
                    <h4 className="text-sm font-medium text-charcoal-900 mb-1">
                      Interior Decoration Services
                    </h4>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      Residential interior decoration, tailored modular solutions, and cohesive styling.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Trust / Business Credentials Grid */}
            <Reveal delay={200}>
              <div className="pt-8 border-t border-stone-200/90">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal-700">
                    Verified Business Credentials
                  </h3>
                  <span className="text-[11px] text-stone-400">Government Registered</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* GSTIN */}
                  <div className="p-4 bg-white border border-stone-200/90 shadow-sm flex items-start gap-3.5 hover:border-accent/40 transition-colors">
                    <div className="w-9 h-9 rounded-none bg-stone-100 flex items-center justify-center shrink-0 text-accent">
                      <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400 block">
                        GST Registered
                      </span>
                      <span className="text-sm font-mono font-medium text-charcoal-900 block mt-0.5">
                        {siteConfig.gst}
                      </span>
                      <span className="text-xs text-stone-500 block mt-0.5">
                        Government of India Tax Compliant
                      </span>
                    </div>
                  </div>

                  {/* UDYAM */}
                  <div className="p-4 bg-white border border-stone-200/90 shadow-sm flex items-start gap-3.5 hover:border-accent/40 transition-colors">
                    <div className="w-9 h-9 rounded-none bg-stone-100 flex items-center justify-center shrink-0 text-accent">
                      <FileCheck className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400 block">
                        Udyam Registered
                      </span>
                      <span className="text-sm font-mono font-medium text-charcoal-900 block mt-0.5">
                        {siteConfig.udyam}
                      </span>
                      <span className="text-xs text-stone-500 block mt-0.5">
                        Ministry of MSME, Govt. of India
                      </span>
                    </div>
                  </div>

                  {/* ENTERPRISE TYPE */}
                  <div className="p-4 bg-white border border-stone-200/90 shadow-sm flex items-start gap-3.5 hover:border-accent/40 transition-colors">
                    <div className="w-9 h-9 rounded-none bg-stone-100 flex items-center justify-center shrink-0 text-accent">
                      <Building2 className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400 block">
                        Enterprise Classification
                      </span>
                      <span className="text-sm font-medium text-charcoal-900 block mt-0.5">
                        Micro Enterprise · Proprietorship
                      </span>
                      <span className="text-xs text-stone-500 block mt-0.5">
                        Proprietor: {siteConfig.legalName}
                      </span>
                    </div>
                  </div>

                  {/* LOCATION */}
                  <div className="p-4 bg-white border border-stone-200/90 shadow-sm flex items-start gap-3.5 hover:border-accent/40 transition-colors">
                    <div className="w-9 h-9 rounded-none bg-stone-100 flex items-center justify-center shrink-0 text-accent">
                      <MapPin className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-stone-400 block">
                        Registered Studio
                      </span>
                      <span className="text-sm font-medium text-charcoal-900 block mt-0.5">
                        Batla House, Okhla / Jamia Nagar
                      </span>
                      <span className="text-xs text-stone-500 block mt-0.5">
                        New Delhi, Delhi – 110025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Elegant Call to Action */}
            <Reveal delay={250}>
              <div className="pt-8 border-t border-stone-200/90">
                <div className="p-6 md:p-8 bg-charcoal-900 text-ivory relative overflow-hidden">
                  <div className="max-w-xl">
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent-light block mb-2">
                      Start The Conversation
                    </span>
                    <h3 className="text-2xl md:text-3xl font-light font-serif text-ivory">
                      Let’s Create a Space You’ll Love.
                    </h3>
                    <p className="mt-3 text-sm text-stone-300 leading-relaxed">
                      Have a project in mind? Let’s discuss your vision and explore the right design solution for your space.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary bg-accent hover:bg-accent-dark text-white inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors"
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
