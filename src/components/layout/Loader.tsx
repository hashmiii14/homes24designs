import { useEffect } from 'react';

declare global {
  interface Window {
    __h24_ready?: boolean;
    __h24_dismiss_loader?: () => void;
  }
}

export default function Loader() {
  useEffect(() => {
    window.__h24_ready = true;
    if (typeof window !== 'undefined' && window.__h24_dismiss_loader) {
      window.__h24_dismiss_loader();
    }
  }, []);

  return null;
}

