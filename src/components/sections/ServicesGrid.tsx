import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function ServicesGrid() {
  return (
    <section id="services" className="py-10 md:py-16 lg:py-18 bg-stone-50 scroll-mt-20 overflow-hidden">
      <div className="container-lux">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Interior Design Services"
            description="From full home interiors to focused solutions, each service is designed around your space, your routine and your aesthetic."
          />
        </Reveal>

        <div className="mt-7 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, i) => {
            const webpSrc = service.image.replace(/\.jpg$/, '.webp');
            return (
              <Reveal key={service.slug} delay={i * 60}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group block w-full text-left cursor-pointer touch-manipulation focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label={`View ${service.title} details`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                    <picture className="block w-full h-full">
                      <source srcSet={webpSrc} type="image/webp" />
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                        loading={i < 4 ? 'eager' : 'lazy'}
                        decoding="async"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (target.src !== service.image) {
                            target.src = service.image;
                          }
                        }}
                      />
                    </picture>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500" />
                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-accent-light font-semibold block">
                        Interior Service
                      </span>
                      <h3 className="text-lg font-medium text-ivory mt-1">{service.title}</h3>
                      <p className="text-xs text-stone-300 mt-1 line-clamp-2 leading-relaxed">{service.description}</p>
                      <div className="mt-3.5">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-charcoal-900/60 md:bg-ivory/15 group-hover:bg-accent text-ivory text-[11px] font-medium tracking-wider uppercase border border-ivory/30 md:backdrop-blur-sm transition-all duration-300 active:scale-95">
                          <span>Explore Service</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-accent-light group-hover:text-ivory transition-colors" strokeWidth={1.5} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
