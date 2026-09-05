export interface Testimonial {
  id: string;
  name: string;
  location: string;
  project: string;
  scope: string;
  rating: number;
  date: string;
  review: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mohd. Tariq Siddiqui',
    location: 'Batla House, Jamia Nagar, New Delhi',
    project: '3BHK Turnkey Interior Execution',
    scope: 'Modular Kitchen, Wardrobes & False Ceiling',
    rating: 5,
    date: 'January 2026',
    review:
      'Ehtashamul bhai and the HOMES24DESIGNS team completed our 3BHK flat interior within the committed 45-day timeline. The boiling water proof (BWP) ply modular kitchen with German soft-close tandem drawers is exceptionally durable and clean. Every rupee in the BOQ was itemized with zero surprise costs.',
    verified: true,
  },
  {
    id: '2',
    name: 'Zeeshan Khan',
    location: 'Jasola Vihar (Pocket 1), New Delhi',
    project: '4BHK Luxury Apartment Interior',
    scope: 'Full Home Interior & Layered Lighting',
    rating: 5,
    date: 'February 2026',
    review:
      'We wanted modern, understated elegance for our Jasola flat without tacky design excesses. The fluted wall panelling, hidden profile cove lighting, and custom floor-to-ceiling sliding wardrobes completely elevated the space. Truly the best interior designer in Okhla and South Delhi.',
    verified: true,
  },
  {
    id: '3',
    name: 'Dr. Ayesha Rahman',
    location: 'New Friends Colony, South Delhi',
    project: 'Modular Kitchen & Storage Architecture',
    scope: 'Anti-Fingerprint Acrylic Kitchen & Tall Pantry',
    rating: 5,
    date: 'December 2025',
    review:
      'As a doctor, my schedule is hectic, so I needed an interior firm that works autonomously and transparently. Ehtashamul Islam personally supervised site fabrication and shared daily progress photos on WhatsApp. The anti-fingerprint acrylic kitchen finish is top quality.',
    verified: true,
  },
  {
    id: '4',
    name: 'Salman Farooqui',
    location: 'Greater Kailash II, South Delhi',
    project: 'Living Room & Master Suite',
    scope: 'TV Console, Wall Panelling & Glass Wardrobe',
    rating: 5,
    date: 'November 2025',
    review:
      'The tinted glass profile wardrobe with integrated sensor LEDs in our master bedroom looks like a 5-star hotel suite. The team’s craftsmanship and attention to millimeter tolerances exceeded our expectations. Highly recommended!',
    verified: true,
  },
  {
    id: '5',
    name: 'Farhan Akhtar',
    location: 'Zakir Nagar / Jamia Nagar, Okhla',
    project: 'Complete Home Renovation',
    scope: 'Turnkey Civil, Carpentry & Electrical',
    rating: 5,
    date: 'October 2025',
    review:
      'Very humble, honest and technically sound team. Delivered full carpentry and lighting within our ₹5.5 Lakh budget with zero compromises on plywood quality. It is rare to find such genuine contractors in Delhi.',
    verified: true,
  },
  {
    id: '6',
    name: 'Mrs. Neha Sharma',
    location: 'Saket, South Delhi',
    project: 'Living Room Makeover & Modular Kitchen',
    scope: 'Parallel Kitchen Layout & Ambient Lighting',
    rating: 5,
    date: 'January 2026',
    review:
      'From the 3D design consultation to the final handover, the process was seamless. The parallel kitchen layout maximized our floor space and the quartz countertop matches the acrylic cabinets beautifully.',
    verified: true,
  },
];
