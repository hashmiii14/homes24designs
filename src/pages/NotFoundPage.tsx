import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import SEO from '@/components/ui/SEO';
import Logo from '@/components/ui/Logo';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | HOMES24DESIGNS"
        description="The page you are looking for could not be found. Please return to the homepage or contact HOMES24DESIGNS."
        path="/404"
      />
      <section className="min-h-screen flex items-center justify-center bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(247,244,239,1) 1px, transparent 1px), linear-gradient(90deg, rgba(247,244,239,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        <div className="container-lux relative z-10 text-center">
          <div className="mb-8 flex justify-center">
            <Logo variant="light" size="lg" />
          </div>
          <h1 className="text-8xl md:text-9xl font-light text-ivory">404</h1>
          <p className="mt-4 text-lg text-stone-400">
            The page you are looking for could not be found.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-ivory text-charcoal-900 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-accent hover:text-ivory active:scale-95 touch-manipulation shadow-md min-h-[48px]"
            >
              <Home className="w-4 h-4" strokeWidth={1.5} />
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-ivory/60 text-ivory text-sm font-medium tracking-wide transition-all duration-300 hover:bg-ivory hover:text-charcoal-900 active:scale-95 touch-manipulation min-h-[48px]"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
