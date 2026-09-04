export const siteConfig = {
  name: 'HOMES24DESIGNS',
  legalName: 'EHTASHAMUL ISLAM',
  tagline: 'Premium Interior Design & Home Interior Solutions',
  description:
    'HOMES24DESIGNS is a Delhi-based interior design studio offering personalised residential interior solutions across Delhi, New Delhi and Delhi NCR — from full home interiors to modular kitchens, living rooms, bedrooms, wardrobes, lighting and custom design.',
  url: (import.meta.env.VITE_SITE_URL as string) || 'https://homes24designs.in',
  email: 'homes24designs@gmail.com',
  phone: '+91 9818083436',
  phoneRaw: '919818083436',
  whatsapp: '919818083436',
  address: {
    line1: 'M-74, First Floor',
    line2: 'Batla House, Jamia Nagar',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110025',
    country: 'India',
  },
  serviceAreas: ['Delhi', 'New Delhi', 'South East Delhi', 'Delhi NCR'],
  instagram: 'https://www.instagram.com/homes24designs',
  gst: '07AHGPI4995P2ZH',
  udyam: 'UDYAM-DL-09-0040538',
  mapsQuery: 'M-74, First Floor, Batla House, Jamia Nagar, New Delhi, Delhi 110025',
  ogImage: '/og-image.jpg',
} as const;

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Journal', path: '/journal' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
] as const;
