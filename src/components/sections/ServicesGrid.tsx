import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function ServicesGrid() {
  return (
    <section className="py-12 md:py-16 lg:py-18 bg-stone-50">
      <div className="container-lux">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Interior Design Services"
            description="From full home interiors to focused solutions, each service is designed around your space, your routine and your aesthetic."
          />
        </Reveal>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <Link
                to={`/services/${service.slug}`}
                className="group flex flex-col h-full bg-ivory border border-stone-200/80 overflow-hidden transition-all duration-500 ease-lux hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 w-8 h-8 bg-ivory/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 translate-x-3 shadow-sm">
                    <ArrowUpRight className="w-4 h-4 text-charcoal-800" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-charcoal-800 mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed text-stone-600 line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium tracking-wide uppercase text-accent">
                    Learn More
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
