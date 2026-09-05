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
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=750&q=75',
    alt: 'Contemporary living room interior design in New Delhi',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=750&q=75',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=750&q=75',
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
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=750&q=75',
    alt: 'Modern modular kitchen interior in Delhi NCR',
    gallery: [
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=750&q=75',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=750&q=75',
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
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=750&q=75',
    alt: 'Luxury bedroom interior design in South East Delhi',
    gallery: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=750&q=75',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=750&q=75',
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
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=750&q=75',
    alt: 'Custom walk-in wardrobe and dressing suite in New Delhi',
    gallery: [
      'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=750&q=75',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=750&q=75',
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
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=750&q=75',
    alt: 'Full home residential interior design in Delhi',
    gallery: [
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=750&q=75',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=750&q=75',
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
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=750&q=75',
    alt: 'Open plan dining and living space interior in Delhi NCR',
    gallery: [
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=750&q=75',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=750&q=75',
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
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=750&q=75',
    alt: 'False ceiling with cove lighting detail in New Delhi',
    gallery: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=750&q=75',
      'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=750&q=75',
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
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=750&q=75',
    alt: 'Elegant bedroom interior design in Delhi',
    gallery: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=750&q=75',
      'https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=750&q=75',
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
