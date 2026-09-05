import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] max-h-[920px] flex flex-col justify-end overflow-hidden pt-24 sm:pt-28 md:pt-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-bg.jpg"
          alt="Luxury architectural home interior design by HOMES24DESIGNS in Delhi"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-charcoal-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 via-charcoal-900/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-lux w-full pb-10 sm:pb-12 md:pb-16 text-left">
        <div className="max-w-4xl lg:max-w-5xl text-left">
          <div
            className="flex items-center gap-3 mb-5"
            style={{ animation: 'fadeDown 0.8s 0.3s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            <span className="h-px w-10 bg-accent-light" />
            <span className="text-xs font-medium tracking-[0.22em] uppercase text-accent-light">
              Best Interior Designer in Okhla · New Delhi
            </span>
          </div>

          <h1
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem] font-light text-ivory leading-[1.02] tracking-tight"
            style={{ animation: 'clipReveal 1s 0.4s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            Interiors Designed
            <br />
            Around The Way
            <br />
            <span className="italic text-accent-light">You Live.</span>
          </h1>

          <p
            className="mt-6 sm:mt-8 text-base md:text-lg leading-relaxed text-stone-200 max-w-xl"
            style={{ animation: 'fadeUp 0.8s 0.7s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            A thoughtful combination of design, functionality, material selection and
            personalised planning for contemporary homes in Delhi and Delhi NCR.
          </p>

          <div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4"
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
            className="mt-8 sm:mt-10 flex items-center gap-2 text-stone-300"
            style={{ animation: 'fadeIn 0.8s 1.1s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            <MapPin className="w-4 h-4 text-accent-light" strokeWidth={1.5} />
            <span className="text-sm tracking-wide font-medium">
              • Okhla, Jamia Nagar, New Delhi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
