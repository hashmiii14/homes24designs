import { Star, Quote, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { testimonials } from '@/data/testimonials';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-14 md:py-20 lg:py-24 bg-stone-100/70 border-y border-stone-200/80 overflow-hidden">
      <div className="container-lux">
        {/* Heading with Google Rating Proof */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full mb-3.5">
                <span className="flex items-center text-accent text-xs">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase text-charcoal-800">
                  4.9 / 5.0 Google Rating · 28+ Verified Reviews
                </span>
              </div>
              <SectionHeading
                eyebrow="Client Experiences"
                title="Trusted by Homeowners Across Delhi NCR"
                description="Real feedback from families and homeowners in Okhla, South Delhi and Delhi NCR who trusted HOMES24DESIGNS for their turnkey interiors and modular kitchens."
              />
            </div>

            <div className="hidden lg:block shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-charcoal-800 hover:text-accent transition-colors pb-1 border-b border-charcoal-800 hover:border-accent"
              >
                Share Your Experience
                <ArrowRight className="w-3.5 h-3.5 text-accent" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 items-stretch">
          {testimonials.map((item, i) => (
            <Reveal key={item.id} delay={i * 60} className="h-full">
              <div className="flex flex-col justify-between h-full p-6 sm:p-7 bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-accent mb-4">
                    {[...Array(item.rating)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <div className="relative mb-5">
                    <Quote className="w-5 h-5 text-stone-200 absolute -top-1.5 -left-1" strokeWidth={1.5} />
                    <p className="text-stone-700 text-sm leading-relaxed pl-5 font-serif italic">
                      "{item.review}"
                    </p>
                  </div>
                </div>

                {/* Homeowner & Project Meta */}
                <div className="pt-4 border-t border-stone-100 mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-charcoal-900 font-sans tracking-wide">
                        {item.name}
                      </h4>
                      <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-accent shrink-0" />
                        <span>{item.location}</span>
                      </p>
                    </div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider font-mono">
                      {item.date}
                    </span>
                  </div>

                  {/* Project scope tag */}
                  <div className="mt-3">
                    <span className="inline-block text-[10.5px] font-medium tracking-wide uppercase px-2 py-0.5 bg-stone-100 text-charcoal-700 border border-stone-200">
                      {item.project}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Trust Badges Strip below Reviews */}
        <Reveal delay={200}>
          <div className="mt-12 p-6 sm:p-8 bg-charcoal-900 text-ivory flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-1">
                Our Guarantee to You
              </p>
              <h3 className="text-lg sm:text-xl font-light font-serif">
                45-Day Turnkey Delivery &amp; Zero Hidden Costs
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-xl">
                Every residential interior project is backed by our itemized BOQ, branded hardware warranties, and direct site supervision by founder Ehtashamul Islam.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://wa.me/919818083436?text=Hello%20Ehtashamul%20bhai%2C%20I%20saw%20your%20HOMES24DESIGNS%20client%20reviews%20and%20want%20to%20discuss%20an%20interior%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-accent hover:bg-accent-light text-ivory text-xs font-semibold tracking-wider uppercase transition-all shadow-sm active:scale-95 touch-manipulation min-h-[44px]"
                style={{ color: '#f7f4ef' }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
