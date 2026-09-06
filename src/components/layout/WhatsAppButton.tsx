import { useEffect, useState } from 'react';
import { siteConfig } from '@/data/siteConfig';

export default function WhatsAppButton() {
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
      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
        "Hello HOMES24DESIGNS, I'd like to discuss an interior design project."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 group transition-[opacity,transform] duration-300 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ transform: 'translate3d(0, 0, 0)' }}
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 bg-charcoal-800 text-ivory text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
        Chat on WhatsApp
      </span>

      <span className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 md:w-7 md:h-7 fill-white"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.255-.615-1.449-.683-.194-.068-.334-.103-.474.103-.14.206-.543.683-.666.825-.123.137-.246.149-.543.05-.297-.103-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </span>
    </a>
  );
}
