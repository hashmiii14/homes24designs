import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const steps = [
  { num: '01', title: 'Discover', desc: 'Understand the space, lifestyle, needs and budget.' },
  { num: '02', title: 'Consult', desc: 'Discuss priorities, preferences and requirements.' },
  { num: '03', title: 'Concept', desc: 'Develop the design direction and spatial planning.' },
  { num: '04', title: 'Design & Coordinate', desc: 'Refine details and coordinate applicable execution requirements.' },
  { num: '05', title: 'Complete', desc: 'Move toward completion and final handover.' },
];

export default function ProcessTimeline() {
  return (
    <section className="py-12 md:py-16 lg:py-18 bg-stone-50 overflow-hidden">
      <div className="container-lux">
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title="Our Design Process"
            description="A clear, considered path from first conversation to final handover."
          />
        </Reveal>

        {/* Desktop timeline */}
        <div className="mt-12 hidden lg:block">
          <div className="relative">
            {/* Line */}
            <div className="absolute top-12 left-0 right-0 h-px bg-stone-300" />
            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, i) => (
                <Reveal key={step.num} delay={i * 120}>
                  <div className="relative">
                    <div className="flex items-center justify-center w-24 h-24 mx-auto bg-ivory border border-stone-300 rounded-full relative z-10">
                      <span className="text-2xl font-light text-accent">{step.num}</span>
                    </div>
                    <div className="mt-6 text-center">
                      <h3 className="text-lg font-medium text-charcoal-800">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600 max-w-xs mx-auto">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-12 lg:hidden">
          <div className="relative pl-8">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-stone-300" />
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 80}>
                <div className="relative pb-8 last:pb-0">
                  <div className="absolute -left-8 top-1 flex items-center justify-center w-7 h-7 bg-ivory border border-accent rounded-full">
                    <span className="text-[10px] font-medium text-accent">{step.num}</span>
                  </div>
                  <h3 className="text-base font-medium text-charcoal-800">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
