import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { services } from '@/data/services';
import { siteConfig } from '@/data/siteConfig';
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

        {/* ===================================================================
            SERVICE AREA & STUDIO LOCATION GOOGLE MAP EMBED
            =================================================================== */}
        <Reveal delay={120}>
          <div className="mt-12 md:mt-14 bg-white border border-stone-200/90 shadow-sm overflow-hidden">
            <div className="p-5 md:p-6 border-b border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-accent" strokeWidth={1.5} />
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                    Service Areas &amp; Studio Location
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-normal text-charcoal-900 font-serif">
                  Serving Delhi, New Delhi &amp; Delhi NCR
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Studio: {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city} {siteConfig.address.pincode}
                </p>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-stone-300 text-charcoal-800 text-xs font-medium uppercase tracking-wider hover:bg-stone-100 transition-colors shrink-0"
              >
                <span>View on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="relative w-full h-[260px] sm:h-[320px] bg-stone-100">
              <iframe
                title="HOMES24DESIGNS Service Area Map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.mapsQuery)}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
