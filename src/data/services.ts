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
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Full home residential interior design in Delhi by HOMES24DESIGNS',
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
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Contemporary modular kitchen design in Delhi by HOMES24DESIGNS',
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
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern elegant living room interior design in Delhi by HOMES24DESIGNS',
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
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Luxury master bedroom interior design in Delhi by HOMES24DESIGNS',
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
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Custom walk-in wardrobe and storage design in Delhi by HOMES24DESIGNS',
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
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    alt: 'False ceiling and architectural layered lighting in Delhi by HOMES24DESIGNS',
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
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Textured wall finishes and architectural wall panelling in Delhi by HOMES24DESIGNS',
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
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bespoke custom interior solutions in Delhi by HOMES24DESIGNS',
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
