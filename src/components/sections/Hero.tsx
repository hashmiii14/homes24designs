import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury living room interior design by HOMES24DESIGNS in Delhi"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 via-charcoal-900/50 to-charcoal-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-charcoal-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-lux pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 max-w-2xl">
            <div
              className="flex items-center gap-3 mb-6"
              style={{ animation: 'fadeDown 0.8s 0.3s cubic-bezier(0.16,1,0.3,1) both' }}
            >
              <span className="h-px w-10 bg-accent-light" />
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent-light">
                Interior Design Studio · Delhi
              </span>
            </div>

            <h1
              className="text-hero font-light text-ivory leading-[1.05]"
              style={{ animation: 'clipReveal 1s 0.4s cubic-bezier(0.16,1,0.3,1) both' }}
            >
              Interiors Designed
              <br />
              Around The Way
              <br />
              <span className="italic text-accent-light">You Live.</span>
            </h1>

            <p
              className="mt-6 text-base md:text-lg leading-relaxed text-stone-200 max-w-xl"
              style={{ animation: 'fadeUp 0.8s 0.7s cubic-bezier(0.16,1,0.3,1) both' }}
            >
              A thoughtful combination of design, functionality, material selection and
              personalised planning for contemporary homes in Delhi and Delhi NCR.
            </p>

            <div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              style={{ animation: 'fadeUp 0.8s 0.9s cubic-bezier(0.16,1,0.3,1) both' }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-ivory text-charcoal-900 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-accent hover:text-ivory"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-ivory/40 text-ivory text-sm font-medium tracking-wide transition-all duration-300 hover:bg-ivory/10"
              >
                Explore Our Services
              </Link>
            </div>

            <div
              className="mt-8 flex items-center gap-2 text-stone-300"
              style={{ animation: 'fadeIn 0.8s 1.1s cubic-bezier(0.16,1,0.3,1) both' }}
            >
              <MapPin className="w-4 h-4 text-accent-light" strokeWidth={1.5} />
              <span className="text-sm tracking-wide">
                {siteConfig.serviceAreas.join(' • ')}
              </span>
            </div>
          </div>

          {/* Right Column: Luxury Showcase & Stats Card (Fills desktop space) */}
          <div
            className="lg:col-span-5 hidden lg:flex flex-col gap-5"
            style={{ animation: 'fadeUp 0.9s 0.8s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            <div className="bg-charcoal-900/80 backdrop-blur-md border border-stone-200/20 p-7 xl:p-8 shadow-2xl text-ivory">
              <div className="flex items-center justify-between pb-5 border-b border-stone-700/60">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-accent-light font-medium block">
                    HOMES24 Studio Signature
                  </span>
                  <h3 className="text-lg font-light tracking-wide text-ivory mt-0.5">
                    Turnkey Residential Standards
                  </h3>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              </div>

              {/* 2x2 Metric Grid */}
              <div className="grid grid-cols-2 gap-4 py-6 border-b border-stone-700/60">
                <div className="bg-charcoal-800/60 p-4 border border-stone-700/40">
                  <span className="text-2xl xl:text-3xl font-light text-accent-light block">10+</span>
                  <span className="text-xs text-stone-300 mt-1 block">Years of Design Experience</span>
                </div>
                <div className="bg-charcoal-800/60 p-4 border border-stone-700/40">
                  <span className="text-2xl xl:text-3xl font-light text-accent-light block">100+</span>
                  <span className="text-xs text-stone-300 mt-1 block">Delhi Homes Transformed</span>
                </div>
                <div className="bg-charcoal-800/60 p-4 border border-stone-700/40">
                  <span className="text-2xl xl:text-3xl font-light text-accent-light block">45 Days</span>
                  <span className="text-xs text-stone-300 mt-1 block">On-Time Handover Guarantee</span>
                </div>
                <div className="bg-charcoal-800/60 p-4 border border-stone-700/40">
                  <span className="text-2xl xl:text-3xl font-light text-accent-light block">10 Year</span>
                  <span className="text-xs text-stone-300 mt-1 block">Material Warranty Support</span>
                </div>
              </div>

              {/* Trust Guarantees */}
              <div className="pt-5 space-y-2.5 text-xs text-stone-300">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-light shrink-0" />
                  <span>100% Calibrated BWP Marine-Grade Plywood</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-light shrink-0" />
                  <span>Photorealistic 3D Concept Previews Before Execution</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-light shrink-0" />
                  <span>Transparent Itemized Estimates With Zero Hidden Costs</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-700/60 flex items-center justify-between text-xs">
                <span className="text-stone-400">Accepting Projects in Delhi NCR</span>
                <Link to="/contact" className="text-accent-light font-medium hover:underline flex items-center gap-1">
                  Start Your Project <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        style={{ animation: 'fadeIn 0.8s 1.3s cubic-bezier(0.16,1,0.3,1) both' }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-ivory/60">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-ivory/40 to-transparent" />
      </div>
    </section>
  );
}
