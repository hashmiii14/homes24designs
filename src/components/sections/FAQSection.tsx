import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqItems } from '@/data/faq';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-stone-50">
      <div className="container-lux">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Answers to common questions about working with HOMES24DESIGNS."
          />
        </Reveal>

        <div className="mt-14 max-w-3xl mx-auto">
          {faqItems.map((item, i) => (
            <Reveal key={i} delay={i * 40}>
              <div className="border-b border-stone-200">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex items-center justify-between w-full py-5 text-left group"
                  aria-expanded={open === i}
                >
                  <span className={`text-base font-medium pr-4 transition-colors ${open === i ? 'text-accent' : 'text-charcoal-800 group-hover:text-accent'}`}>
                    {item.question}
                  </span>
                  <span className="shrink-0 w-7 h-7 flex items-center justify-center border border-stone-300 text-charcoal-600 group-hover:border-accent group-hover:text-accent transition-colors">
                    {open === i ? <Minus className="w-4 h-4" strokeWidth={1.5} /> : <Plus className="w-4 h-4" strokeWidth={1.5} />}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500 ease-lux"
                  style={{ maxHeight: open === i ? '300px' : '0' }}
                >
                  <p className="pb-5 text-sm leading-relaxed text-stone-600 pr-12">
                    {item.answer}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <p className="text-sm text-stone-600 mb-4">Still have questions?</p>
            <Button to="/contact" variant="outline">Book a Consultation</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
