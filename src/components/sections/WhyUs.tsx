import { Compass, Ruler, Eye, Layers, MessageSquare, GitBranch, Home, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const values = [
  {
    icon: Compass,
    title: 'Personalised Spatial Planning',
    desc: 'Custom floor layouts shaped around your family’s routine, natural light, and storage priorities — never cookie-cutter templates.',
  },
  {
    icon: Ruler,
    title: 'Ergonomics & Function',
    desc: 'Considered work triangles, concealed storage, and spatial clearances that make everyday living fluid and clutter-free.',
  },
  {
    icon: Eye,
    title: 'Architectural Detailing',
    desc: 'Precision shadow reveals, flush millwork joints, integrated ambient lighting, and seamless transitions that define true luxury.',
  },
  {
    icon: Layers,
    title: 'Tested Material Integrity',
    desc: 'Calibrated BWR/BWP grade plywood, anti-fingerprint acrylics, and genuine branded hardware built to withstand Delhi’s seasonal humidity.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent 100% BOQ',
    desc: 'Detailed itemized schedules with honest brand specifications, zero ambiguous contractor extras, and milestone-linked billing.',
  },
  {
    icon: GitBranch,
    title: 'Direct Site Supervision',
    desc: 'Proprietor Ehtashamul Islam personally visits sites to audit civil masonry, electrical routing, and carpentry alignment.',
  },
  {
    icon: Home,
    title: 'Warm Contemporary Aesthetic',
    desc: 'Understated elegance combining crisp architectural lines with tactile textures, earthy tones, and warm layered illuminations.',
  },
  {
    icon: MapPin,
    title: 'Delhi NCR Expertise',
    desc: 'Deep regional knowledge of local dust management, ventilation requirements, and direct access to premier Okhla & NCR vendor hubs.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-10 md:py-16 lg:py-18 bg-charcoal-900 relative overflow-hidden">
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

        <div className="mt-7 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-700/30">
          {values.map((value, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="bg-charcoal-900 p-5 sm:p-6 md:p-8 h-full transition-colors duration-500 hover:bg-charcoal-800">
                <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent-light mb-3 sm:mb-4" strokeWidth={1.5} />
                <h3 className="text-sm sm:text-base font-medium text-ivory mb-1.5 sm:mb-2">{value.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-stone-400">{value.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
