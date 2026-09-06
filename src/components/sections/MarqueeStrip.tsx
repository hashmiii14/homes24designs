import React from 'react';

const marqueeItems = [
  'HOMES24DESIGNS',
  'BESPOKE RESIDENTIAL INTERIORS',
  '45-DAY TURNKEY DELIVERY',
  '100% ITEMIZED BOQ',
  'DELHI NCR · SOUTH DELHI · OKHLA',
  'GERMAN HARDWARE WARRANTY (HAFELE & HETTICH)',
  'ARCHITECTURAL PRECISION & 3D DESIGN',
  'GST & UDYAM REGISTERED ENTERPRISE',
];

export default function MarqueeStrip() {
  return (
    <div
      className="w-full max-w-full bg-charcoal-900 border-y border-charcoal-700/80 py-3.5 sm:py-4.5 md:py-5 overflow-hidden select-none"
      style={{ contain: 'paint layout', transform: 'translate3d(0, 0, 0)' }}
      role="region"
      aria-label="Brand highlights and credentials"
    >
      <div className="w-full overflow-hidden">
        <div className="animate-marquee flex items-center">
          {/* First loop instance */}
          <div className="flex items-center shrink-0">
            {marqueeItems.map((item, idx) => (
              <React.Fragment key={`marquee-1-${idx}`}>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-ivory whitespace-nowrap">
                  {item}
                </span>
                <span
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent inline-block mx-3.5 sm:mx-5 shrink-0"
                  aria-hidden="true"
                />
              </React.Fragment>
            ))}
          </div>

          {/* Second identical instance for seamless infinite translation */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {marqueeItems.map((item, idx) => (
              <React.Fragment key={`marquee-2-${idx}`}>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-ivory whitespace-nowrap">
                  {item}
                </span>
                <span
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent inline-block mx-3.5 sm:mx-5 shrink-0"
                  aria-hidden="true"
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
