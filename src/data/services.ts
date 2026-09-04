export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  image: string;
  alt: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: 'full-home-interiors',
    title: 'Full Home Interiors',
    shortTitle: 'Full Home Interiors',
    description:
      'Complete interior design direction for residential homes — from spatial planning to final styling.',
    longDescription:
      'A comprehensive interior design service covering every room in your home. We coordinate layout, materials, finishes, lighting, furniture and styling into one cohesive design language, so the entire residence feels intentional, functional and distinctly yours.',
    image:
      'https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&w=1260',
    alt: 'Full home interior design by HOMES24DESIGNS in Delhi',
    features: [
      'Complete spatial planning',
      'Cohesive design language across rooms',
      'Material and finish selection',
      'Furniture and styling direction',
      'Lighting layout and ambience',
      'End-to-end coordination',
    ],
  },
  {
    slug: 'modular-kitchens',
    title: 'Modular Kitchens',
    shortTitle: 'Modular Kitchens',
    description: 'Functional, refined kitchen solutions designed for the way Indian families cook and gather.',
    longDescription:
      'We design modular kitchens that balance workflow, storage and aesthetics. From counter layout to cabinet finishes, hardware and lighting, every element is planned for daily use and long-term durability — without compromising on visual refinement.',
    image:
      'https://images.pexels.com/photos/7515855/pexels-photo-7515855.png?auto=compress&cs=tinysrgb&w=1260',
    alt: 'Modular kitchen design by HOMES24DESIGNS in Delhi',
    features: [
      'Workflow-optimised counter layout',
      'Cabinet and storage planning',
      'Finish and hardware selection',
      'Backsplash and wall treatment',
      'Under-cabinet and ambient lighting',
      'Appliance integration',
    ],
  },
  {
    slug: 'living-room-interiors',
    title: 'Living Room Interiors',
    shortTitle: 'Living Rooms',
    description: 'Furniture, lighting, TV units, wall treatments and styling for living rooms that feel considered.',
    longDescription:
      'The living room is where your home is experienced most. We bring together seating, lighting, media units, wall treatments and decor to create a space that is both comfortable for daily life and refined for entertaining.',
    image:
      'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1260',
    alt: 'Living room interior design by HOMES24DESIGNS in Delhi',
    features: [
      'Furniture layout and selection',
      'TV and media unit design',
      'Wall treatments and feature walls',
      'Layered lighting plan',
      'Soft furnishings and styling',
      'Decor and accessorising',
    ],
  },
  {
    slug: 'bedroom-interiors',
    title: 'Bedroom Interiors',
    shortTitle: 'Bedrooms',
    description: 'Comfortable and elegant spaces with wardrobes, lighting and finishes designed for rest.',
    longDescription:
      'Bedrooms should feel calm, personal and restful. We design bedroom interiors that balance comfort with refinement — from bed placement and wardrobe design to lighting layers, finishes and textiles that suit your routine.',
    image:
      'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=1260',
    alt: 'Bedroom interior design by HOMES24DESIGNS in Delhi',
    features: [
      'Bed layout and positioning',
      'Wardrobe and storage design',
      'Lighting for rest and function',
      'Finish and palette selection',
      'Textile and soft-furnishing plan',
      'Nightstand and accessorising',
    ],
  },
  {
    slug: 'wardrobes',
    title: 'Wardrobes & Storage',
    shortTitle: 'Wardrobes & Storage',
    description: 'Custom storage and space planning designed around how you actually live.',
    longDescription:
      'Effective storage is invisible when it works. We design wardrobes and built-in storage that maximise every square foot, with internal configurations tailored to your belongings and finishes that complement the room around them.',
    image:
      'https://images.pexels.com/photos/6580395/pexels-photo-6580395.jpeg?auto=compress&cs=tinysrgb&w=1260',
    alt: 'Wardrobe and storage design by HOMES24DESIGNS in Delhi',
    features: [
      'Built-in and walk-in wardrobes',
      'Internal compartment planning',
      'Sliding and hinged door options',
      'Finish and hardware selection',
      'Space-optimised layouts',
      'Integrated lighting options',
    ],
  },
  {
    slug: 'false-ceiling-lighting',
    title: 'False Ceiling & Lighting',
    shortTitle: 'False Ceiling & Lighting',
    description: 'Layered lighting and ceiling design that shape the mood of every room.',
    longDescription:
      'Ceilings and lighting are the quiet foundation of interior atmosphere. We design false ceilings and layered lighting plans — ambient, task and accent — that add depth, define zones and bring warmth to your home after dark.',
    image:
      'https://images.pexels.com/photos/14186868/pexels-photo-14186868.jpeg?auto=compress&cs=tinysrgb&w=1260',
    alt: 'False ceiling and lighting design by HOMES24DESIGNS in Delhi',
    features: [
      'False ceiling design and layout',
      'Ambient, task and accent lighting',
      'Cove and concealed lighting',
      'Pendant and fixture selection',
      'Dimming and scene planning',
      'Energy-efficient solutions',
    ],
  },
  {
    slug: 'wall-design',
    title: 'Wall Design & Finishes',
    shortTitle: 'Wall Finishes',
    description: 'Textures, paint, wallpapers and feature walls that add depth and character.',
    longDescription:
      'Walls are the largest surface in any room. We plan wall treatments — paint, texture, wallpaper, panelling and feature walls — as part of the overall design, adding character without overwhelming the space.',
    image:
      'https://images.pexels.com/photos/8134807/pexels-photo-8134807.jpeg?auto=compress&cs=tinysrgb&w=1260',
    alt: 'Wall design and finishes by HOMES24DESIGNS in Delhi',
    features: [
      'Paint and colour planning',
      'Wallpaper and texture selection',
      'Feature wall design',
      'Wall panelling and moulding',
      'Accent and contrast treatment',
      'Durable, practical finishes',
    ],
  },
  {
    slug: 'custom-interiors',
    title: 'Custom Interior Solutions',
    shortTitle: 'Custom Interiors',
    description: 'Tailored solutions based on your specific requirements, space and lifestyle.',
    longDescription:
      'When your needs fall outside standard categories, we design custom interior solutions around your specific space, routine and aesthetic preferences. Tell us what you need — we will build a plan around it.',
    image:
      'https://images.pexels.com/photos/8092433/pexels-photo-8092433.jpeg?auto=compress&cs=tinysrgb&w=1260',
    alt: 'Custom interior solutions by HOMES24DESIGNS in Delhi',
    features: [
      'Bespoke design brief',
      'Space-specific planning',
      'Custom material sourcing',
      'Unique finish combinations',
      'Specialised storage solutions',
      'Flexible design approach',
    ],
  },
];
