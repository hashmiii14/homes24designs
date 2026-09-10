import { Phone, Mail, MapPin, Instagram, Clock, Layers } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function ContactSection() {
  return (
    <section id="contact" className="py-10 md:py-16 lg:py-18 bg-ivory overflow-hidden">
      <div className="container-lux">
        <Reveal>
          <SectionHeading
            eyebrow="Studio"
            title="Studio Headquarters & Hours"
            description="Visit our design studio in New Delhi or connect directly with our interior specialists across Delhi NCR."
          />
        </Reveal>

        <div className="mt-7 sm:mt-10 md:mt-12 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Column 1: Studio Details & Hours */}
          <div className="space-y-6 flex flex-col justify-between">
            <Reveal>
              <div className="space-y-6">
                {/* Studio Address */}
                <div className="p-6 bg-white border border-stone-200/90 shadow-2xs">
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-2 block flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" strokeWidth={1.5} />
                    Studio Location &amp; Headquarters
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-charcoal-900 mb-2">
                    HOMES24DESIGNS · New Delhi
                  </h3>
                  <div className="text-xs sm:text-sm leading-relaxed text-stone-600">
                    <p className="font-medium text-charcoal-800">New Delhi, Delhi NCR</p>
                    <p>New Delhi, Delhi — 110025</p>
                  </div>
                </div>

                {/* Studio Hours & Consultation Access */}
                <div className="p-5 bg-stone-50 border border-stone-200/80 space-y-3">
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-accent flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent shrink-0" strokeWidth={1.5} />
                    Visiting &amp; Consultation Hours
                  </span>
                  <div className="text-xs text-stone-600 space-y-1.5">
                    <p><strong className="text-charcoal-900 font-medium">Monday – Saturday:</strong> 10:30 AM – 7:30 PM</p>
                    <p><strong className="text-charcoal-900 font-medium">Sunday:</strong> By Prior Appointment</p>
                    <p className="text-[11px] text-stone-500 pt-1 border-t border-stone-200/70">
                      On-site consultations available across all Delhi NCR localities.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Column 2: Material Library & Direct Contacts */}
          <div className="space-y-6 flex flex-col justify-between">
            <Reveal delay={80}>
              <div className="space-y-6">
                {/* In-Studio Physical Material Library Badge */}
                <div className="p-6 bg-stone-100/70 border border-stone-200/90 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-none bg-stone-200/80 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-charcoal-900 uppercase tracking-wide">
                      Physical Material &amp; Sample Library
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Touch and inspect authentic samples of branded hardware, quartz slabs, acrylics, fluted panels, and natural veneers during your design consultation.
                    </p>
                  </div>
                </div>

                {/* Direct Connect Contacts */}
                <div className="p-6 bg-white border border-stone-200/90 shadow-2xs space-y-4">
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent block">
                    Direct Connect
                  </span>
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

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-stone-500">Need immediate assistance?</span>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hello Homes24Designs, I would like to inquire about interior design services.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      WhatsApp Us
                    </a>
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
