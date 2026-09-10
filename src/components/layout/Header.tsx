import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, siteConfig } from '@/data/siteConfig';
import { useScrollPosition, useBodyScrollLock } from '@/hooks';
import Logo from '@/components/ui/Logo';

export default function Header() {
  const scrolled = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useBodyScrollLock(menuOpen);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled && !menuOpen;

  const handleNavClick = (path: string) => {
    setMenuOpen(false);
    if (path === '/' || location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          transparent
            ? 'bg-transparent'
            : 'bg-black/95 backdrop-blur-md border-b border-stone-800/80 shadow-md'
        }`}
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <div className="container-lux">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
            {/* Logo */}
            <Logo
              size="md"
              onClick={() => handleNavClick('/')}
            />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`link-underline text-sm font-medium tracking-wide transition-colors duration-300 ${
                      active
                        ? 'text-accent-light'
                        : 'text-stone-300 hover:text-ivory'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center justify-center px-5 lg:px-6 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 shadow-sm active:scale-95 touch-manipulation bg-accent hover:bg-accent-light text-charcoal-950 hover:shadow-md"
              >
                Book a Consultation
              </Link>

              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden p-2.5 text-stone-200 hover:text-accent-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent touch-manipulation"
                aria-label="Open menu"
                aria-expanded={menuOpen}
              >
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden overflow-hidden ${
          menuOpen ? 'visible opacity-100 pointer-events-auto' : 'hidden opacity-0 pointer-events-none'
        }`}
        style={{ isolation: 'isolate' }}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-stone-950 text-ivory shadow-2xl transition-transform duration-500 ease-lux border-l border-stone-800/80 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between h-16 sm:h-20 px-6 border-b border-stone-800/80 bg-black">
            <Logo size="sm" onClick={() => handleNavClick('/')} />
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-stone-300 hover:text-accent-light transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-8 gap-1">
            {navItems.map((item, i) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`py-3 text-lg font-light border-b border-stone-800/50 transition-colors ${
                    active ? 'text-accent-light' : 'text-stone-300 hover:text-accent-light'
                  }`}
                  style={{
                    animation: menuOpen
                      ? `fadeUp 0.4s ${0.1 + i * 0.05}s cubic-bezier(0.16,1,0.3,1) both`
                      : 'none',
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="px-6 mt-4">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-full py-3.5 bg-accent text-charcoal-950 text-sm font-semibold tracking-wide hover:bg-accent-light active:scale-[0.98] transition-all shadow-md touch-manipulation"
            >
              Book a Consultation
            </Link>
          </div>

          <div className="px-6 mt-8 space-y-2">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="block text-sm text-stone-400 hover:text-accent-light transition-colors"
            >
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-sm text-stone-400 hover:text-accent-light transition-colors"
            >
              {siteConfig.email}
            </a>
            <p className="text-xs text-stone-500 pt-2">
              {siteConfig.address.line1}, {siteConfig.address.line2},{' '}
              {siteConfig.address.city}, {siteConfig.address.state}{' '}
              {siteConfig.address.pincode}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
