import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function CallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isVisible = window.scrollY > 300;
          setVisible((prev) => (prev !== isVisible ? isVisible : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <a
      href={`tel:${siteConfig.phoneRaw}`}
      aria-label={`Call HOMES24DESIGNS at ${siteConfig.phone}`}
      className={`fixed bottom-6 left-6 z-40 group transition-[opacity,transform] duration-300 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ transform: 'translate3d(0, 0, 0)' }}
    >
      {/* Tooltip on Desktop */}
      <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 bg-charcoal-800 text-ivory text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block shadow-md">
        Call {siteConfig.phone}
      </span>

      <span className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-charcoal-800 text-ivory rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-stone-700/50">
        <Phone className="w-5 h-5 md:w-6 md:h-6 text-accent" strokeWidth={1.75} />
      </span>
    </a>
  );
}
