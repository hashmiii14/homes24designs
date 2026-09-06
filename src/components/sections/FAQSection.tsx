import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqItems } from '@/data/faq';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-10 md:py-16 lg:py-18 bg-stone-50 overflow-hidden">
      <div className="container-lux">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-start">
          {/* Left Column: Heading & Sticky Assistance Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <Reveal>
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                <span className="h-px w-6 sm:w-8 bg-accent" />
                <span className="text-[11px] sm:text-xs font-semibold sm:font-medium tracking-[0.2em] uppercase text-accent">
                  FAQ
                </span>
              </div>
              <h2 className="text-section font-light text-charcoal-800">
                Frequently Asked Questions
              </h2>
              <p className="mt-2.5 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-stone-600">
                Everything you need to know about working with HOMES24DESIGNS — from initial concept and site measurement to materials, pricing and final handover.
              </p>

              {/* Direct Help Card */}
              <div className="mt-5 sm:mt-8 p-5 sm:p-6 bg-ivory border border-stone-200/80">
                <h3 className="text-xs sm:text-sm font-medium text-charcoal-800 mb-1">Have a specific question?</h3>
                <p className="text-xs leading-relaxed text-stone-500 mb-3.5 sm:mb-4">
                  Need clarity on your floor plan, modular timeline, or material choices? Reach out directly to our team.
                </p>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5">
                  <Button to="/contact" variant="outline" className="w-full justify-center">
                    Ask Our Design Team
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Accordion Items (Spans 8 columns to fill desktop width) */}
          <div className="lg:col-span-8">
            <div className="space-y-1">
              {faqItems.map((item, i) => (
                <Reveal key={i} delay={i * 35}>
                  <div className="bg-white border border-stone-200/80 p-5 md:p-6 mb-3 transition-all duration-300 hover:border-accent/40">
                    <button
                      type="button"
                      onClick={() => setOpen(open === i ? null : i)}
                      className="flex items-center justify-between w-full text-left group gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent touch-manipulation"
                      aria-expanded={open === i}
                    >
                      <span className={`text-base md:text-lg font-medium transition-colors ${open === i ? 'text-accent' : 'text-charcoal-800 group-hover:text-accent'}`}>
                        {item.question}
                      </span>
                      <span className="shrink-0 w-8 h-8 flex items-center justify-center bg-stone-100 text-charcoal-700 group-hover:bg-accent group-hover:text-ivory transition-colors">
                        {open === i ? <Minus className="w-4 h-4" strokeWidth={1.5} /> : <Plus className="w-4 h-4" strokeWidth={1.5} />}
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-500 ease-lux"
                      style={{ maxHeight: open === i ? '300px' : '0' }}
                    >
                      <p className="pt-4 text-sm leading-relaxed text-stone-600 border-t border-stone-100 mt-4">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
