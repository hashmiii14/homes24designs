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
    image:
      'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1260',
    alt: 'Contemporary living room interior in Delhi',
    gallery: [
      'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&w=1260',
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
    image:
      'https://images.pexels.com/photos/7515855/pexels-photo-7515855.png?auto=compress&cs=tinysrgb&w=1260',
    alt: 'Modern modular kitchen interior in Delhi NCR',
    gallery: [
      'https://images.pexels.com/photos/7515855/pexels-photo-7515855.png?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/7148841/pexels-photo-7148841.jpeg?auto=compress&cs=tinysrgb&w=1260',
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
    image:
      'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=1260',
    alt: 'Luxury bedroom interior in South East Delhi',
    gallery: [
      'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/4682136/pexels-photo-4682136.jpeg?auto=compress&cs=tinysrgb&w=1260',
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
    image:
      'https://images.pexels.com/photos/6580395/pexels-photo-6580395.jpeg?auto=compress&cs=tinysrgb&w=1260',
    alt: 'Walk-in wardrobe design in New Delhi',
    gallery: [
      'https://images.pexels.com/photos/6580395/pexels-photo-6580395.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/7587738/pexels-photo-7587738.jpeg?auto=compress&cs=tinysrgb&w=1260',
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
    image:
      'https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&w=1260',
    alt: 'Full home interior design in Delhi',
    gallery: [
      'https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/8092433/pexels-photo-8092433.jpeg?auto=compress&cs=tinysrgb&w=1260',
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
    image:
      'https://images.pexels.com/photos/8092433/pexels-photo-8092433.jpeg?auto=compress&cs=tinysrgb&w=1260',
    alt: 'Dining and living space interior in Delhi NCR',
    gallery: [
      'https://images.pexels.com/photos/8092433/pexels-photo-8092433.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/34887637/pexels-photo-34887637.jpeg?auto=compress&cs=tinysrgb&w=1260',
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
    image:
      'https://images.pexels.com/photos/14186868/pexels-photo-14186868.jpeg?auto=compress&cs=tinysrgb&w=1260',
    alt: 'False ceiling and lighting design in New Delhi',
    gallery: [
      'https://images.pexels.com/photos/14186868/pexels-photo-14186868.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/19840855/pexels-photo-19840855.jpeg?auto=compress&cs=tinysrgb&w=1260',
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
    image:
      'https://images.pexels.com/photos/4682136/pexels-photo-4682136.jpeg?auto=compress&cs=tinysrgb&w=1260',
    alt: 'Elegant bedroom interior in Delhi',
    gallery: [
      'https://images.pexels.com/photos/4682136/pexels-photo-4682136.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/27531873/pexels-photo-27531873.jpeg?auto=compress&cs=tinysrgb&w=1260',
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
