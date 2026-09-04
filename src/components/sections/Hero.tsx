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
      <div className="relative z-10 container-lux pt-24 pb-20">
        <div className="max-w-2xl">
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
            className="mt-8 text-base md:text-lg leading-relaxed text-stone-200 max-w-xl"
            style={{ animation: 'fadeUp 0.8s 0.7s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            A thoughtful combination of design, functionality, material selection and
            personalised planning for contemporary homes in Delhi and Delhi NCR.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4"
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
            className="mt-10 flex items-center gap-2 text-stone-300"
            style={{ animation: 'fadeIn 0.8s 1.1s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            <MapPin className="w-4 h-4 text-accent-light" strokeWidth={1.5} />
            <span className="text-sm tracking-wide">
              {siteConfig.serviceAreas.join(' • ')}
            </span>
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
