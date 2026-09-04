import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: { label: string; path?: string }[];
  children?: ReactNode;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: PageHeaderProps) {
  return (
    <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-stone-100">
      <div className="container-lux">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-8 max-w-3xl">
          {eyebrow && (
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
                {eyebrow}
              </span>
            </div>
          )}
          <h1 className="text-display font-light text-charcoal-800">{title}</h1>
          {description && (
            <p className="mt-5 text-base md:text-lg leading-relaxed text-stone-600">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
