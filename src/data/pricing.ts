export interface PricingPlan {
  name: string;
  tagline: string;
  suitableFor: string;
  startingPrice: string;
  scope: string[];
  inclusions: string[];
  highlighted?: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'ESSENTIAL',
    tagline: 'For focused room interiors, lighting or modular upgrades.',
    suitableFor: 'Individual rooms, kitchens or specific interior needs.',
    startingPrice: 'Starts at ₹50,000',
    scope: [
      'Single room or focused area',
      'Design direction and layout',
      'Material and finish selection',
      'Basic lighting plan',
    ],
    inclusions: [
      'Concept and layout',
      'Finish and palette plan',
      'Furniture and fixture selection',
      'Consultation and revisions',
    ],
    cta: 'Discuss Your Requirements',
  },
  {
    name: 'SIGNATURE',
    tagline: 'For comprehensive multi-room or floor transformations.',
    suitableFor: 'Multiple rooms or larger home interiors.',
    startingPrice: 'Starts at ₹2.5 Lakhs',
    scope: [
      'Multiple rooms or full-floor design',
      'Detailed spatial planning',
      'Coordinated material selection',
      'Layered lighting design',
      'Wardrobe and storage planning',
    ],
    inclusions: [
      'Everything in Essential',
      'Cohesive multi-room design',
      'False ceiling and lighting layout',
      'Wardrobe and storage design',
      'Wall treatment plan',
      'Detailed execution coordination',
    ],
    highlighted: true,
    cta: 'Discuss Your Requirements',
  },
  {
    name: 'LUXE',
    tagline: 'For turnkey, bespoke architectural luxury residences.',
    suitableFor: 'Full home interiors with premium customisation.',
    startingPrice: 'Starts at ₹5.0 Lakhs+',
    scope: [
      'Complete home interior design',
      'Bespoke spatial planning',
      'Premium material and finish selection',
      'Custom furniture and detailing',
      'Full lighting and ceiling design',
      'End-to-end coordination',
    ],
    inclusions: [
      'Everything in Signature',
      'Custom furniture design',
      'Premium material sourcing',
      'Detailed styling and accessorising',
      'Dedicated design consultation',
      'Complete home coordination',
    ],
    cta: 'Discuss Your Requirements',
  },
];

export const pricingNote =
  'Every home is different. Packages start from ₹50,000 with transparent scopes. Final pricing depends on space, scope, materials, finishes and customisation.';
