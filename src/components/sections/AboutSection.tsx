import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="container-lux">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&w=1260"
                alt="Interior design by HOMES24DESIGNS in Delhi"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 hidden md:block" />
          </Reveal>

          {/* Text & Key Stats */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
                  About HOMES24DESIGNS
                </span>
              </div>
              <h2 className="text-section font-light text-charcoal-800">
                Designed With Intention.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-5 space-y-3.5 text-base leading-relaxed text-stone-600">
                <p>
                  Good interiors are not only seen — they are experienced. Every home has a
                  rhythm shaped by the people who live in it, and our role is to design spaces
                  that move with that rhythm rather than against it.
                </p>
                <p>
                  We work across spatial planning, material selection, lighting, furniture
                  direction and detailing — bringing each element into a single, cohesive
                  design language. The result is a home that feels considered, functional and
                  distinctly yours.
                </p>
                <p>
                  Based in New Delhi, we design residential interiors for homes across Delhi
                  and Delhi NCR — from compact apartments to full-home interiors.
                </p>
              </div>
            </Reveal>

            {/* Desktop Metrics Bar (Fills empty vertical space) */}
            <Reveal delay={150}>
              <div className="mt-6 pt-6 border-t border-stone-200/80 grid grid-cols-3 gap-4">
                <div>
                  <span className="text-2xl font-light text-charcoal-900 block font-serif">100+</span>
                  <span className="text-xs text-stone-500 mt-0.5 block leading-tight">Homes Crafted</span>
                </div>
                <div>
                  <span className="text-2xl font-light text-charcoal-900 block font-serif">45 Days</span>
                  <span className="text-xs text-stone-500 mt-0.5 block leading-tight">Delivery Cycle</span>
                </div>
                <div>
                  <span className="text-2xl font-light text-charcoal-900 block font-serif">100%</span>
                  <span className="text-xs text-stone-500 mt-0.5 block leading-tight">Bespoke Plans</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-7 flex items-center gap-4 flex-wrap">
                <Button to="/about" variant="outline">
                  Read More About Us
                </Button>
                <Button to="/contact" variant="primary">
                  Book Free Consultation
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
