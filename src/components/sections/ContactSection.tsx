import { Phone, Mail, MapPin, Instagram, Clock, Compass, Layers, Car } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function ContactSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`;

  return (
    <section id="contact" className="py-10 md:py-16 lg:py-18 bg-ivory overflow-hidden">
      <div className="container-lux">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Get In Touch"
            description="Visit our studio in Okhla, New Delhi or reach out to discuss your residential interior project. We respond promptly."
          />
        </Reveal>

        <div className="mt-7 sm:mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          {/* Left: Studio details & visiting guide (7 cols on desktop to eliminate empty void) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <Reveal>
              <div className="space-y-6">
                {/* Studio Address & Google Maps link */}
                <div className="p-5 sm:p-6 bg-white border border-stone-200/90 shadow-2xs">
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-2 block flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" strokeWidth={1.5} />
                    Studio Location &amp; Headquarters
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-charcoal-900 mb-2">
                    HOMES24DESIGNS · South Delhi
                  </h3>
                  <div className="text-xs sm:text-sm leading-relaxed text-stone-600">
                    <p className="font-medium text-charcoal-800">{siteConfig.address.line1}, {siteConfig.address.line2}</p>
                    <p>{siteConfig.address.city}, {siteConfig.address.state} — {siteConfig.address.pincode}</p>
                  </div>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold tracking-wider uppercase text-accent hover:underline"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>

                {/* Studio Hours & Transit Guide Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Studio Visiting Hours */}
                  <div className="p-4 bg-stone-50 border border-stone-200/80">
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-accent flex items-center gap-1.5 mb-2">
                      <Clock className="w-3.5 h-3.5 text-accent shrink-0" strokeWidth={1.5} />
                      Visiting Hours
                    </span>
                    <div className="text-xs text-stone-600 space-y-1">
                      <p><strong className="text-charcoal-900 font-medium">Mon – Sat:</strong> 10:30 AM – 7:30 PM</p>
                      <p><strong className="text-charcoal-900 font-medium">Sunday:</strong> By Prior Appointment</p>
                      <span className="text-[10px] text-stone-600 block pt-1">Reserved for on-site client inspections</span>
                    </div>
                  </div>

                  {/* Transit & Landmark Guide */}
                  <div className="p-4 bg-stone-50 border border-stone-200/80">
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-accent flex items-center gap-1.5 mb-2">
                      <Compass className="w-3.5 h-3.5 text-accent shrink-0" strokeWidth={1.5} />
                      How To Reach
                    </span>
                    <div className="text-xs text-stone-600 space-y-1">
                      <p><strong className="text-charcoal-900 font-medium">Metro:</strong> Jamia Millia Islamia (Magenta Line · 650m)</p>
                      <p><strong className="text-charcoal-900 font-medium">Landmark:</strong> Near Batla House Chowk</p>
                      <span className="text-[10px] text-stone-600 block pt-1 flex items-center gap-1">
                        <Car className="w-3 h-3 text-accent shrink-0" />
                        Dedicated visitor parking assistance
                      </span>
                    </div>
                  </div>
                </div>

                {/* In-Studio Physical Material Library Badge */}
                <div className="p-4 bg-stone-100/70 border border-stone-200/90 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-stone-200/80 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-charcoal-900 uppercase tracking-wide">
                      In-Studio Physical Material Library
                    </h4>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                      Touch and inspect authentic samples of Hafele/Hettich hardware, quartz slabs, acrylics, fluted panels, and natural veneers during your visit.
                    </p>
                  </div>
                </div>

                {/* Direct Connect Contacts */}
                <div className="p-4 bg-white border border-stone-200/90">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-2.5 text-xs text-charcoal-800 hover:text-accent transition-colors group">
                      <span className="w-7 h-7 flex items-center justify-center bg-charcoal-800 text-ivory group-hover:bg-accent transition-colors shrink-0">
                        <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </span>
                      <span className="font-medium truncate">{siteConfig.phone}</span>
                    </a>

                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 text-xs text-charcoal-800 hover:text-accent transition-colors group">
                      <span className="w-7 h-7 flex items-center justify-center bg-charcoal-800 text-ivory group-hover:bg-accent transition-colors shrink-0">
                        <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </span>
                      <span className="font-medium truncate">{siteConfig.email}</span>
                    </a>

                    <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-xs text-charcoal-800 hover:text-accent transition-colors group">
                      <span className="w-7 h-7 flex items-center justify-center bg-charcoal-800 text-ivory group-hover:bg-accent transition-colors shrink-0">
                        <Instagram className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </span>
                      <span className="font-medium truncate">@homes24designs</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Map Embed with Studio Overlay Badge (6 cols on desktop) */}
          <div className="lg:col-span-6 flex flex-col">
            <Reveal delay={100} className="h-full flex flex-col">
              <div className="relative h-full min-h-[440px] sm:min-h-[480px] bg-stone-100 border border-stone-300/80 shadow-2xs overflow-hidden flex-1 flex flex-col">
                <iframe
                  title="HOMES24DESIGNS location"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.mapsQuery)}&output=embed`}
                  className="w-full h-full border-0 flex-1 min-h-[360px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="p-3.5 bg-charcoal-900 text-ivory flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0 animate-pulse" />
                    <span className="font-medium tracking-wide">Serving South Delhi &amp; Delhi NCR Turnkey Homes</span>
                  </div>
                  <span className="text-[11px] text-stone-400">Batla House · Jamia Nagar · New Delhi</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
