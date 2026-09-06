import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

export default function ContactSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`;

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-18 bg-ivory">
      <div className="container-lux">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Get In Touch"
            description="Reach out to discuss your home, schedule a consultation, or ask a question. We respond promptly."
          />
        </Reveal>

        <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Contact details */}
          <Reveal>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
                  HOMES24DESIGNS
                </h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-stone-500 shrink-0" strokeWidth={1.5} />
                  <div className="text-sm leading-relaxed text-stone-600">
                    <p>{siteConfig.address.line1}</p>
                    <p>{siteConfig.address.line2}</p>
                    <p>{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}</p>
                    <p>{siteConfig.address.country}</p>
                  </div>
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium tracking-wide uppercase text-accent hover:underline"
                >
                  View on Google Maps
                </a>
              </div>

              <div className="space-y-3">
                <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-3 group">
                  <span className="flex items-center justify-center w-10 h-10 bg-charcoal-800 text-ivory group-hover:bg-accent transition-colors">
                    <Phone className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  <span className="text-sm text-charcoal-700 group-hover:text-accent transition-colors">
                    {siteConfig.phone}
                  </span>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 group">
                  <span className="flex items-center justify-center w-10 h-10 bg-charcoal-800 text-ivory group-hover:bg-accent transition-colors">
                    <Mail className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  <span className="text-sm text-charcoal-700 group-hover:text-accent transition-colors">
                    {siteConfig.email}
                  </span>
                </a>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <span className="flex items-center justify-center w-10 h-10 bg-charcoal-800 text-ivory group-hover:bg-accent transition-colors">
                    <Instagram className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  <span className="text-sm text-charcoal-700 group-hover:text-accent transition-colors">
                    @homes24designs
                  </span>
                </a>
              </div>

              <div className="pt-6 border-t border-stone-200">
                <div className="flex flex-wrap items-center gap-3">
                  <Button href={`tel:${siteConfig.phoneRaw}`} variant="primary">Call Us</Button>
                  <Button href={`https://wa.me/${siteConfig.whatsapp}`} variant="outline">WhatsApp Us</Button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Map embed */}
          <Reveal delay={100}>
            <div className="relative h-full min-h-[400px] bg-stone-100 overflow-hidden">
              <iframe
                title="HOMES24DESIGNS location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.mapsQuery)}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
