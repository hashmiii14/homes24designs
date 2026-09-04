import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/data/siteConfig';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export default function SEO({
  title,
  description = siteConfig.description,
  path = '',
  image = siteConfig.ogImage,
  type = 'website',
  jsonLd,
}: SEOProps) {
  const fullTitle = title || 'HOMES24DESIGNS | Luxury Interior Designers in Delhi NCR';
  const url = `${siteConfig.url}${path}`;
  const fullImageUrl = image.startsWith('http')
    ? image
    : `${siteConfig.url}${image.startsWith('/') ? image : `/${image}`}`;
  const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [path]);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={fullTitle} />
      {jsonLdArray.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
}
