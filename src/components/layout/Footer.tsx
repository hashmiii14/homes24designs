import { Link } from 'react-router-dom';
import { Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { siteConfig, navItems } from '@/data/siteConfig';
import { services } from '@/data/services';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-stone-300">
      <div className="container-lux py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none mb-4">
              <span className="text-xl font-light tracking-[0.2em] text-ivory">HOMES24</span>
              <span className="text-[10px] tracking-[0.4em] uppercase font-medium text-accent-light">
                DESIGNS
              </span>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 max-w-xs">
              Premium interior design and home interior solutions for contemporary homes in
              Delhi and Delhi NCR.
            </p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-stone-400 hover:text-accent-light transition-colors"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
              Follow on Instagram
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-stone-500 mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-stone-400 hover:text-accent-light transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-stone-500 mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-stone-400 hover:text-accent-light transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-stone-500 mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-light shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-stone-400 leading-relaxed">
                  {siteConfig.address.line1}, {siteConfig.address.line2},{' '}
                  {siteConfig.address.city}, {siteConfig.address.state}{' '}
                  {siteConfig.address.pincode}, {siteConfig.address.country}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-light shrink-0" strokeWidth={1.5} />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-sm text-stone-400 hover:text-accent-light transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent-light shrink-0" strokeWidth={1.5} />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-stone-400 hover:text-accent-light transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 pt-8 border-t border-stone-700/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="text-xs text-stone-500">GST Registered Business</span>
              <span className="hidden sm:inline text-stone-700">|</span>
              <span className="text-xs text-stone-500">Udyam Registered Enterprise</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link to="/privacy" className="text-xs text-stone-500 hover:text-accent-light transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-stone-500 hover:text-accent-light transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-stone-700/50 text-center">
          <p className="text-xs text-stone-500">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
