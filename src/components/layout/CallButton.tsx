import { Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function CallButton() {
  return (
    <aside aria-label="Direct Phone Contact" className="fixed bottom-6 left-6 z-40">
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        aria-label={`Call HOMES24DESIGNS at ${siteConfig.phone}`}
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-charcoal-800 text-ivory rounded-full shadow-xl hover:bg-charcoal-900 hover:shadow-2xl transition-all duration-300 active:scale-95 border border-stone-700/60"
      >
        {/* Subtle Luxury Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-accent/25 animate-ping -z-10 opacity-75" />

        {/* Tooltip on Desktop */}
        <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 bg-charcoal-900 text-ivory text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block shadow-md border border-stone-700/40">
          Call {siteConfig.phone}
        </span>

        {/* Icon */}
        <Phone className="w-5 h-5 md:w-6 md:h-6 text-accent group-hover:scale-110 transition-transform duration-300" strokeWidth={1.75} />
      </a>
    </aside>
  );
}
