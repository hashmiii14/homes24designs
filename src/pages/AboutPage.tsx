import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/ui/SEO';
import PageHeader from '@/components/layout/PageHeader';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import WhyUs from '@/components/sections/WhyUs';
import { siteConfig } from '@/data/siteConfig';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About HOMES24DESIGNS | Interior Design Studio in Delhi"
        description="Learn about HOMES24DESIGNS — a Delhi-based interior design studio offering personalised residential interior solutions across Delhi and Delhi NCR."
        path="/about"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About HOMES24DESIGNS',
        }}
      />
      <PageHeader
        eyebrow="About Us"
        title="Designed With Intention."
        description="A Delhi-based interior design studio creating residential interiors that are experienced, not just seen."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About' }]}
      />

      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-lux">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7174113/pexels-photo-7174113.jpeg?auto=compress&cs=tinysrgb&w=1260"
                  alt="Interior design by HOMES24DESIGNS in Delhi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <h2 className="text-section font-light text-charcoal-800 mb-6">
                  Our Approach
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-stone-600">
                  <p>
                    HOMES24DESIGNS is a New Delhi-based interior design studio working across
                    residential interiors. We believe that good design is not about filling a
                    space — it is about understanding how a home is used, and then making
                    decisions that serve that use.
                  </p>
                  <p>
                    Our process begins with listening. We want to understand your routine, your
                    preferences, your space and your expectations. From there, we develop a
                    design direction that balances aesthetics with functionality — because a
                    home that looks beautiful but does not work for daily life is not good design.
                  </p>
                  <p>
                    We work across spatial planning, material and finish selection, lighting
                    design, furniture direction and detailing. Every element is considered as
                    part of a cohesive whole, so the finished home feels intentional and
                    distinctly yours.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="mt-8">
                  <Button to="/contact" variant="primary">Start Your Project</Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />
      <ProcessTimeline />

      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-lux">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-section font-light text-charcoal-800 mb-6">
                Based in New Delhi. Serving Delhi NCR.
              </h2>
              <p className="text-base leading-relaxed text-stone-600">
                Our studio is located at {siteConfig.address.line1}, {siteConfig.address.line2},{' '}
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}.
                We serve clients across {siteConfig.serviceAreas.join(', ')}.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/services" variant="outline">Explore Services</Button>
                <Button to="/journal" variant="ghost">Read Our Journal</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
