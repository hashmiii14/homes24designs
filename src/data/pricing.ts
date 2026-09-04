export interface PricingPlan {
  name: string;
  tagline: string;
  suitableFor: string;
  scope: string[];
  inclusions: string[];
  highlighted?: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'ESSENTIAL',
    tagline: 'For focused interior requirements.',
    suitableFor: 'Individual rooms or specific interior needs.',
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
    tagline: 'For broader residential interior requirements.',
    suitableFor: 'Multiple rooms or larger home interiors.',
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
    tagline: 'For highly customised premium interiors.',
    suitableFor: 'Full home interiors with premium customisation.',
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
  'Every home is different. Final pricing depends on space, scope, materials, finishes and customisation.';
