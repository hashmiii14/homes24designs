import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  jsonLd?: boolean;
}

export default function Breadcrumbs({ items, jsonLd = true }: BreadcrumbsProps) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.path ? { item: `${window.location.origin}${item.path}` } : {}),
    })),
  };

  return (
    <>
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(ld)}</script>
      )}
      <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {item.path && i < items.length - 1 ? (
              <Link to={item.path} className="text-stone-500 hover:text-accent transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={`${i === items.length - 1 ? 'text-charcoal-700 font-medium' : 'text-stone-500'} break-words`}>
                {item.label}
              </span>
            )}
            {i < items.length - 1 && (
              <ChevronRight className="w-3 h-3 text-stone-400" strokeWidth={1.5} />
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
