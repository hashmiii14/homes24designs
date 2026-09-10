export interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  type: string;
  style: string;
  description: string;
  image: string;
  alt: string;
  gallery: string[];
  category: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'p1',
    title: 'Contemporary Living Room',
    location: 'New Delhi',
    type: 'Living Room',
    style: 'Contemporary',
    description:
      'A warm, light-filled living room with a restrained palette, layered lighting and considered furniture placement.',
    image: '/images/portfolio/project-1-main.jpg',
    alt: 'Luxury contemporary living room with marble TV wall and layered lighting by HOMES24DESIGNS',
    gallery: [
      '/images/portfolio/project-1-gallery-1.jpg',
    ],
    category: ['Living Room', 'Contemporary'],
  },
  {
    id: 'p3',
    title: 'Serene Bedroom Design',
    location: 'South East Delhi',
    type: 'Bedroom',
    style: 'Luxury',
    description:
      'A restful bedroom with layered lighting, a custom wardrobe and a calm, tactile finish palette.',
    image: '/images/portfolio/project-3-main.jpg',
    alt: 'Luxury serene bedroom with tufted headboard and chandelier by HOMES24DESIGNS',
    gallery: [
      '/images/portfolio/project-3-gallery-1.jpg',
    ],
    category: ['Bedroom', 'Luxury'],
  },
  {
    id: 'p2',
    title: 'Modern Modular Kitchen',
    location: 'Delhi NCR',
    type: 'Kitchen',
    style: 'Modern',
    description:
      'A sleek modular kitchen with optimised counter layout, integrated appliances and warm under-cabinet lighting.',
    image: '/images/portfolio/project-2-main.jpg',
    alt: 'Modern luxury modular kitchen with custom cabinetry and integrated lighting by HOMES24DESIGNS',
    gallery: [
      '/images/portfolio/project-2-gallery-1.jpg',
      '/images/portfolio/project-2-gallery-2.jpg',
    ],
    category: ['Kitchen', 'Contemporary'],
  },
  {
    id: 'p4',
    title: 'Contemporary Foyer & Console',
    location: 'New Delhi',
    type: 'Console',
    style: 'Contemporary',
    description:
      'A refined entrance foyer featuring a custom cane console credenza, statement circular mirror, warm ambient sconces, and organic textures.',
    image: '/images/portfolio/project-4-main.jpg',
    alt: 'Contemporary entrance foyer with custom console credenza and circular mirror in New Delhi',
    gallery: [
      '/images/portfolio/project-4-gallery-1.jpg',
      '/images/portfolio/project-4-gallery-2.jpg',
    ],
    category: ['Console', 'Contemporary'],
  },
  {
    id: 'p9',
    title: 'Luxury Walk-in Wardrobe',
    location: 'Delhi NCR',
    type: 'Wardrobe',
    style: 'Luxury',
    description:
      'A bespoke walk-in wardrobe suite featuring custom warm timber joinery, integrated warm LED profile lighting, luxury accessory display drawers, and full-length mirrors.',
    image: '/images/portfolio/project-wardrobe-main.jpg',
    alt: 'Custom luxury walk-in wardrobe and dressing suite in Delhi NCR by HOMES24DESIGNS',
    gallery: [
      '/images/portfolio/project-wardrobe-gallery-1.jpg',
      '/images/portfolio/project-wardrobe-gallery-2.jpg',
    ],
    category: ['Wardrobe', 'Luxury'],
  },
  {
    id: 'p5',
    title: 'Full Home Interior',
    location: 'Delhi',
    type: 'Full Home',
    style: 'Luxury',
    description:
      'A complete home interior with a cohesive design language across living, dining and bedroom spaces.',
    image: '/images/portfolio/project-5-main.jpg',
    alt: 'Full home residential interior design in Delhi',
    gallery: [
      '/images/portfolio/project-5-gallery-1.jpg',
      '/images/portfolio/project-5-gallery-2.jpg',
    ],
    category: ['Full Home', 'Luxury'],
  },
  {
    id: 'p6',
    title: 'Dining & Living Space',
    location: 'Delhi NCR',
    type: 'Living Room',
    style: 'Contemporary',
    description:
      'An open-plan dining and living area with warm neutral tones, natural light and understated elegance.',
    image: '/images/portfolio/project-6-main.jpg',
    alt: 'Open plan dining and living space interior in Delhi NCR',
    gallery: [
      '/images/portfolio/project-6-gallery-1.jpg',
      '/images/portfolio/project-6-gallery-2.jpg',
    ],
    category: ['Living Room', 'Contemporary'],
  },
  {
    id: 'p7',
    title: 'Ceiling & Lighting Detail',
    location: 'New Delhi',
    type: 'Full Home',
    style: 'Luxury',
    description:
      'A layered false ceiling with concealed cove lighting, defining zones and adding warmth after dark.',
    image: '/images/portfolio/project-7-main.jpg',
    alt: 'False ceiling with cove lighting detail in New Delhi',
    gallery: [
      '/images/portfolio/project-7-gallery-1.jpg',
      '/images/portfolio/project-7-gallery-2.jpg',
    ],
    category: ['Full Home', 'Luxury'],
  },
  {
    id: 'p8',
    title: 'Elegant Bedroom',
    location: 'Delhi',
    type: 'Bedroom',
    style: 'Contemporary',
    description:
      'A refined bedroom with a soft palette, wallpaper accent and warm bedside lighting.',
    image: '/images/portfolio/project-8-main.jpg',
    alt: 'Elegant bedroom interior design in Delhi',
    gallery: [
      '/images/portfolio/project-8-gallery-2.jpg',
    ],
    category: ['Bedroom', 'Contemporary'],
  },
  {
    id: 'p10',
    title: 'Minimalist Island Kitchen',
    location: 'Delhi NCR',
    type: 'Kitchen',
    style: 'Contemporary',
    description:
      'A bespoke modular kitchen featuring a dramatic waterfall marble breakfast island, fluted warm walnut cabinetry, integrated appliances, and warm architectural under-counter profile illumination.',
    image: '/images/portfolio/project-10-main.jpg',
    alt: 'Luxury contemporary kitchen with waterfall marble island and warm cabinetry in Delhi NCR',
    gallery: [
      '/images/portfolio/project-10-gallery-1.jpg',
    ],
    category: ['Kitchen', 'Contemporary', 'Luxury'],
  },
  {
    id: 'p11',
    title: 'Architectural Living Lounge',
    location: 'South Delhi',
    type: 'Living Room',
    style: 'Luxury',
    description:
      'An expansive living lounge featuring floor-to-ceiling double-height glazing, custom fluted acoustic wall panelling with integrated warm linear lighting, and refined designer upholstery.',
    image: '/images/portfolio/project-11-main.jpg',
    alt: 'Contemporary luxury living lounge with fluted feature wall and warm lighting in South Delhi',
    gallery: [
      '/images/portfolio/project-11-gallery-1.jpg',
    ],
    category: ['Living Room', 'Luxury'],
  },
  {
    id: 'p12',
    title: 'Grand Dining Residence',
    location: 'New Delhi',
    type: 'Full Home',
    style: 'Luxury',
    description:
      'A statement dining setting centered around a Calacatta marble table, custom brass sculptural chandelier, slatted architectural wood panelling, and seamless indoor-outdoor sightlines.',
    image: '/images/portfolio/project-12-main.jpg',
    alt: 'Luxury residential dining room with marble table and brass chandelier in New Delhi',
    gallery: [
      '/images/portfolio/project-12-gallery-1.jpg',
    ],
    category: ['Full Home', 'Luxury', 'Contemporary'],
  },
];

export const portfolioFilters = [
  'All',
  'Full Home',
  'Living Room',
  'Bedroom',
  'Kitchen',
  'Wardrobe',
  'Console',
  'Contemporary',
  'Luxury',
];
