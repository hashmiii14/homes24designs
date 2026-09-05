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
    alt: 'Contemporary living room interior design in New Delhi',
    gallery: [
      '/images/portfolio/project-1-gallery-1.jpg',
      '/images/portfolio/project-1-gallery-2.jpg',
    ],
    category: ['Living Room', 'Contemporary'],
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
    alt: 'Modern modular kitchen interior in Delhi NCR',
    gallery: [
      '/images/portfolio/project-2-gallery-1.jpg',
      '/images/portfolio/project-2-gallery-2.jpg',
    ],
    category: ['Kitchen', 'Contemporary'],
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
    alt: 'Luxury bedroom interior design in South East Delhi',
    gallery: [
      '/images/portfolio/project-3-gallery-1.jpg',
      '/images/portfolio/project-3-gallery-2.jpg',
    ],
    category: ['Bedroom', 'Luxury'],
  },
  {
    id: 'p4',
    title: 'Walk-in Wardrobe',
    location: 'New Delhi',
    type: 'Wardrobe',
    style: 'Contemporary',
    description:
      'A space-optimised walk-in wardrobe with warm wood shelving, integrated lighting and clean lines.',
    image: '/images/portfolio/project-4-main.jpg',
    alt: 'Custom walk-in wardrobe and dressing suite in New Delhi',
    gallery: [
      '/images/portfolio/project-4-gallery-1.jpg',
      '/images/portfolio/project-4-gallery-2.jpg',
    ],
    category: ['Wardrobe', 'Contemporary'],
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
      '/images/portfolio/project-8-gallery-1.jpg',
      '/images/portfolio/project-8-gallery-2.jpg',
    ],
    category: ['Bedroom', 'Contemporary'],
  },
];

export const portfolioFilters = [
  'All',
  'Full Home',
  'Living Room',
  'Bedroom',
  'Kitchen',
  'Wardrobe',
  'Contemporary',
  'Luxury',
];
