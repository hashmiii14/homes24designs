import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pricingPlans, pricingNote } from '@/data/pricing';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function PricingSection() {
  const handlePlanClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById('consultation');
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 md:py-16 lg:py-18 bg-ivory overflow-hidden">
      <div className="container-lux">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Designed Around Your Scope"
            description="Transparent starting points based on the breadth of your interior requirements, starting from ₹50,000. Every quote is customised after a detailed consultation."
          />
        </Reveal>

        <div className="mt-7 sm:mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <div
                className={`relative h-full p-6 sm:p-8 md:p-10 flex flex-col transition-all duration-500 ${
                  plan.highlighted
                    ? 'bg-charcoal-800 text-ivory shadow-2xl md:scale-105'
                    : 'bg-stone-50 border border-stone-200 text-charcoal-800'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute top-6 right-6 text-[10px] tracking-[0.2em] uppercase text-accent-light font-medium">
                    Most Popular
                  </span>
                )}

                <h3 className={`text-sm font-medium tracking-[0.2em] uppercase ${plan.highlighted ? 'text-accent-light' : 'text-accent'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${plan.highlighted ? 'text-stone-300' : 'text-stone-600'}`}>
                  {plan.tagline}
                </p>

                <div className="mt-6">
                  <p className={`text-xs tracking-wide uppercase ${plan.highlighted ? 'text-stone-400' : 'text-stone-500'}`}>
                    Suitable For
                  </p>
                  <p className={`mt-1 text-sm ${plan.highlighted ? 'text-ivory' : 'text-charcoal-700'}`}>
                    {plan.suitableFor}
                  </p>
                </div>

                <div className="mt-6">
                  <p className={`text-xs tracking-wide uppercase ${plan.highlighted ? 'text-stone-400' : 'text-stone-500'}`}>
                    Scope
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {plan.scope.map((s, j) => (
                      <li key={j} className={`flex items-start gap-2 text-sm ${plan.highlighted ? 'text-stone-300' : 'text-stone-600'}`}>
                        <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${plan.highlighted ? 'bg-accent-light' : 'bg-accent'}`} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className={`text-xs tracking-wide uppercase ${plan.highlighted ? 'text-stone-400' : 'text-stone-500'}`}>
                    Inclusions
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {plan.inclusions.map((inc, j) => (
                      <li key={j} className={`flex items-start gap-2 text-sm ${plan.highlighted ? 'text-stone-300' : 'text-stone-600'}`}>
                        <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${plan.highlighted ? 'text-accent-light' : 'text-accent'}`} strokeWidth={2} />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-stone-200/30">
                  <div>
                    <span className={`text-[10px] tracking-[0.18em] uppercase block ${plan.highlighted ? 'text-accent-light' : 'text-accent font-medium'}`}>
                      Estimated Investment
                    </span>
                    <p className={`text-2xl sm:text-[1.65rem] font-light font-serif mt-1 ${plan.highlighted ? 'text-ivory' : 'text-charcoal-900'}`}>
                      {plan.startingPrice}
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    onClick={handlePlanClick}
                    className={`mt-5 inline-flex items-center justify-center w-full py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm active:scale-[0.98] touch-manipulation min-h-[46px] ${
                      plan.highlighted
                        ? 'bg-ivory text-charcoal-900 hover:bg-accent hover:text-ivory'
                        : 'bg-charcoal-800 text-ivory hover:bg-charcoal-900'
                    }`}
                    style={plan.highlighted ? { color: '#0c0a09' } : { color: '#f7f4ef' }}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm text-stone-500 italic max-w-2xl mx-auto">
            {pricingNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
