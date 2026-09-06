import { Building2, FileCheck, Home, Palette } from 'lucide-react';

const trustPoints = [
  { icon: Home, label: 'Residential Interior Solutions' },
  { icon: Palette, label: 'Interior Decoration Services' },
  { icon: Building2, label: 'Architectural & Interior Consultancy' },
  { icon: FileCheck, label: 'GST & Udyam Registered Business' },
];

export default function TrustStrip() {
  return (
    <section className="bg-charcoal-800 py-3.5 sm:py-5 md:py-7 border-b border-charcoal-700/40 overflow-hidden">
      <div className="container-lux">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-8">
          {trustPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-center gap-2 sm:gap-3 min-w-0"
              style={{ animation: `fadeIn 0.6s ${0.1 + i * 0.1}s cubic-bezier(0.16,1,0.3,1) both` }}
            >
              <point.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-light shrink-0" strokeWidth={1.5} />
              <span className="text-[11px] sm:text-xs md:text-sm text-stone-300 leading-snug break-words">
                {point.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
