import { useEffect, useState } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('h24d_loaded');
    if (seen) {
      setDone(true);
      return;
    }

    let frame: number;
    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setExiting(true), 200);
        setTimeout(() => {
          setDone(true);
          sessionStorage.setItem('h24d_loaded', '1');
        }, 900);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal-900 transition-opacity duration-700 ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden={exiting}
    >
      {/* Architectural grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.06]">
        <div className="absolute inset-0" style={{
          backgroundImage:
            'linear-gradient(rgba(247,244,239,1) 1px, transparent 1px), linear-gradient(90deg, rgba(247,244,239,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="overflow-hidden">
          <h1
            className="text-ivory text-3xl md:text-4xl font-light tracking-[0.3em] uppercase"
            style={{
              animation: 'clipReveal 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
            }}
          >
            HOMES24
          </h1>
        </div>
        <div className="overflow-hidden mt-1">
          <p
            className="text-accent text-xs tracking-[0.5em] uppercase font-medium"
            style={{
              animation: 'clipReveal 0.8s 0.15s cubic-bezier(0.16,1,0.3,1) both',
            }}
          >
            DESIGNS
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-8 w-32 h-px bg-stone-700 overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-3 text-stone-500 text-[10px] tracking-[0.3em] uppercase">
          Interior Design Studio
        </p>
      </div>
    </div>
  );
}
