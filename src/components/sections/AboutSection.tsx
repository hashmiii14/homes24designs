import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-ivory">
      <div className="container-lux">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&w=1260"
                alt="Interior design by HOMES24DESIGNS in Delhi"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 hidden md:block" />
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
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
              <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
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

            <Reveal delay={200}>
              <div className="mt-8">
                <Button to="/about" variant="outline">
                  Read More About Us
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
