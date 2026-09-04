import { Compass, Ruler, Eye, Layers, MessageSquare, GitBranch, Home, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const values = [
  { icon: Compass, title: 'Personalised Design', desc: 'Every home is designed around the people who live in it.' },
  { icon: Ruler, title: 'Functional Planning', desc: 'Layouts that serve daily life, not just aesthetics.' },
  { icon: Eye, title: 'Attention To Detail', desc: 'The small decisions that distinguish refined from ordinary.' },
  { icon: Layers, title: 'Thoughtful Material Selection', desc: 'Materials chosen for how they feel, age and perform.' },
  { icon: MessageSquare, title: 'Client-Focused Consultation', desc: 'We listen first, then design.' },
  { icon: GitBranch, title: 'End-to-End Coordination', desc: 'From concept through to coordinated execution.' },
  { icon: Home, title: 'Modern Residential Aesthetics', desc: 'Contemporary interiors with warmth and character.' },
  { icon: MapPin, title: 'Delhi / NCR Understanding', desc: 'Local knowledge of climate, suppliers and context.' },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-32 bg-charcoal-900 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(247,244,239,1) 1px, transparent 1px), linear-gradient(90deg, rgba(247,244,239,1) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <div className="container-lux relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Why HOMES24DESIGNS"
            title="The Principles Behind Our Work"
            description="Design is a series of decisions. These are the principles that guide every one of them."
            light
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-700/30">
          {values.map((value, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="bg-charcoal-900 p-6 md:p-8 h-full transition-colors duration-500 hover:bg-charcoal-800">
                <value.icon className="w-7 h-7 text-accent-light mb-4" strokeWidth={1.5} />
                <h3 className="text-base font-medium text-ivory mb-2">{value.title}</h3>
                <p className="text-sm leading-relaxed text-stone-400">{value.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
