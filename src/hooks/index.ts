import { useEffect, useRef, useState } from 'react';

type RevealCallback = () => void;
let sharedRevealObserver: IntersectionObserver | null = null;
const observerCallbacks = new Map<Element, RevealCallback>();

function getSharedRevealObserver(): IntersectionObserver | null {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
    return null;
  }
  if (!sharedRevealObserver) {
    sharedRevealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cb = observerCallbacks.get(entry.target);
            if (cb) {
              cb();
              observerCallbacks.delete(entry.target);
              sharedRevealObserver?.unobserve(entry.target);
            }
          }
        }
      },
      { threshold: 0.01, rootMargin: '120px 0px 60px 0px' }
    );
  }
  return sharedRevealObserver;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  _options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    const observer = getSharedRevealObserver();
    if (!observer) {
      setIsVisible(true);
      return;
    }

    observerCallbacks.set(el, () => {
      setIsVisible(true);
    });
    observer.observe(el);

    return () => {
      observerCallbacks.delete(el);
      observer.unobserve(el);
    };
  }, []);

  return { ref, isVisible };
}

export function useScrollPosition() {
  const [scrolled, setScrolled] = useState(false);
  const prevRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const checkScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      const isScrolled = y > 20;
      if (isScrolled !== prevRef.current) {
        prevRef.current = isScrolled;
        setScrolled(isScrolled);
      }
      ticking = false;
    };

    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkScroll);
        ticking = true;
      }
    };

    checkScroll();
    window.addEventListener('scroll', handler, { passive: true });

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return scrolled;
}

export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (locked) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [locked]);
}
