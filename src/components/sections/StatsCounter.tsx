import { useEffect, useRef, useState } from 'react';
import { Award, Clock, FileCheck2, Star } from 'lucide-react';

interface StatItem {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  label: string;
  sublabel: string;
  icon: typeof Award;
}

const statsData: StatItem[] = [
  {
    target: 50,
    suffix: '+',
    label: 'Projects Delivered',
    sublabel: 'Turnkey homes across South Delhi & Delhi NCR',
    icon: Award,
  },
  {
    target: 4.9,
    decimals: 1,
    suffix: ' ★',
    label: 'Google Rating',
    sublabel: '28+ verified client reviews on Google Business',
    icon: Star,
  },
  {
    target: 45,
    suffix: ' Days',
    label: 'Turnkey Handover',
    sublabel: 'Direct site supervision by founder Ehtashamul Islam',
    icon: Clock,
  },
  {
    target: 100,
    suffix: '%',
    label: 'Itemized BOQ',
    sublabel: 'Zero hidden costs with genuine branded hardware',
    icon: FileCheck2,
  },
];

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(statsData.map(() => 0));

  useEffect(() => {
    // Respect reduced motion preferences
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCounts(statsData.map((s) => s.target));
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const duration = 1800; // ms

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Cubic ease-out curve
            const eased = 1 - Math.pow(1 - progress, 3);

            setCounts(
              statsData.map((stat) => {
                const current = stat.target * eased;
                return stat.decimals
                  ? parseFloat(current.toFixed(stat.decimals))
                  : Math.floor(current);
              })
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(statsData.map((s) => s.target));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="bg-stone-50 border-b border-stone-200/80 py-6 sm:py-10 lg:py-14 overflow-hidden"
      aria-label="Performance and trust metrics"
    >
      <div className="container-lux">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-stone-200/80">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            const displayValue = stat.decimals
              ? counts[idx].toFixed(stat.decimals)
              : counts[idx].toString();

            return (
              <div
                key={stat.label}
                className={`flex flex-col ${
                  idx > 0 ? 'lg:pl-8 xl:pl-10' : ''
                } ${idx < statsData.length - 1 ? 'lg:pr-8 xl:pr-10' : ''}`}
              >
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 text-accent">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0" strokeWidth={1.75} />
                  <span className="text-[9.5px] sm:text-[11px] font-semibold tracking-wider sm:tracking-widest uppercase text-stone-500 font-mono">
                    Performance Metric
                  </span>
                </div>

                <div className="flex items-baseline font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-charcoal-900 tracking-tight">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <span>{displayValue}</span>
                  <span className="text-accent text-xl sm:text-3xl lg:text-4xl ml-0.5">
                    {stat.suffix}
                  </span>
                </div>

                <h3 className="text-[11.5px] sm:text-sm font-semibold tracking-wide uppercase text-charcoal-800 mt-1 sm:mt-2">
                  {stat.label}
                </h3>

                <p className="text-[10.5px] sm:text-xs text-stone-500 mt-0.5 sm:mt-1 max-w-[240px] leading-snug">
                  {stat.sublabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
