export interface JournalPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  author: string;
  readingTime: string;
  image: string;
  alt: string;
  content: Section[];
  faq?: { question: string; answer: string }[];
}

interface Section {
  heading: string;
  paragraphs: string[];
  subheadings?: { heading: string; paragraphs: string[] }[];
}

export const journalPosts: JournalPost[] = [
  {
    slug: 'modern-interior-design-ideas-homes-delhi',
    title: 'Modern Interior Design Ideas for Homes in Delhi',
    seoTitle: 'Modern Interior Design Ideas for Homes in Delhi | HOMES24DESIGNS',
    metaDescription:
      'Practical modern interior design ideas for Delhi homes — from spatial planning and lighting to materials, finishes and furniture direction.',
    excerpt:
      'A practical guide to modern interior design ideas for Delhi homes — covering layout, lighting, materials, finishes and furniture direction.',
    date: '2026-08-20',
    author: 'HOMES24DESIGNS',
    readingTime: '6 min read',
    image: '/images/journal/post-1-modern-interior.jpg',
    alt: 'Modern interior design ideas for homes in Delhi',
    content: [
      {
        heading: 'What "modern" means for a Delhi home',
        paragraphs: [
          'Modern interior design is not about following a trend. It is about clarity — clear layouts, honest materials, lighting that serves a purpose, and spaces that work for the way your household actually functions.',
          'In Delhi, modern design also has to account for dust, light variation through the year, and the way families use shared spaces. A design that looks good in a photograph but does not hold up to daily use is not modern — it is just decoration.',
        ],
      },
      {
        heading: 'Start with spatial planning',
        paragraphs: [
          'Before selecting a single finish, plan how the space will be used. Where do people enter? Where do they gather? Where do they need quiet? A clear circulation path makes even a compact apartment feel open.',
          'In Delhi apartments, open-plan living and dining areas are common. The key is defining zones within the open plan — through furniture placement, ceiling treatment or lighting — without building walls.',
        ],
      },
      {
        heading: 'Lighting is the most underrated tool',
        paragraphs: [
          'Most homes rely on a single ceiling light per room. Modern interiors use layers: ambient lighting for general illumination, task lighting for specific functions, and accent lighting to highlight materials or architectural details.',
          'In a city where natural light varies dramatically between summer and winter, a well-planned lighting scheme keeps your home feeling warm and intentional all year.',
        ],
      },
      {
        heading: 'Choose materials that age well',
        paragraphs: [
          'Modern does not mean cold. Warm woods, natural stone, matte finishes and textured walls all sit comfortably within a modern design language. The goal is a palette that feels calm now and still feels calm in five years.',
          'Avoid finishes that show dust and wear quickly. In Delhi, practical material selection is part of good design.',
        ],
      },
      {
        heading: 'Furniture: fewer, better pieces',
        paragraphs: [
          'Modern interiors favour fewer, more considered furniture pieces over filling every corner. Choose pieces that fit the scale of the room and serve a clear purpose.',
          'Custom or semi-custom furniture can be tailored to your space — a TV unit that fits exactly, a wardrobe that uses every inch, a dining table sized for your family.',
        ],
      },
      {
        heading: 'Bringing it together',
        paragraphs: [
          'Modern interior design is the result of decisions that work together — layout, lighting, materials, furniture and finishes forming one cohesive plan. That is what we do at HOMES24DESIGNS for homes across Delhi and Delhi NCR.',
          'If you are planning a modern interior for your home, book a consultation. We will discuss your space, your routine and your preferences, and build a design direction around them.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is modern interior design?',
        answer:
          'Modern interior design focuses on clean layouts, functional planning, honest materials and layered lighting. It is about clarity and intention, not following trends.',
      },
      {
        question: 'Is modern interior design suitable for Delhi homes?',
        answer:
          'Yes. Modern design principles — clear circulation, practical materials, layered lighting — work well for Delhi apartments and independent houses alike.',
      },
    ],
  },
  {
    slug: 'home-interior-design-cost-delhi',
    title: 'How Much Does Home Interior Design Cost in Delhi?',
    seoTitle: 'Home Interior Design Cost in Delhi | HOMES24DESIGNS',
    metaDescription:
      'A clear explanation of what influences home interior design cost in Delhi — scope, space, materials, finishes and customisation — without invented prices.',
    excerpt:
      'Understand what drives home interior design cost in Delhi — scope, space, materials, finishes and customisation — and how to plan your budget.',
    date: '2026-08-15',
    author: 'HOMES24DESIGNS',
    readingTime: '5 min read',
    image: '/images/journal/post-2-cost-delhi.jpg',
    alt: 'Home interior design cost and budget planning in Delhi',
    content: [
      {
        heading: 'Why there is no single answer',
        paragraphs: [
          'The cost of interior design depends on several variables — the size of your space, the scope of work, the materials and finishes you select, and the level of customisation. Any fixed price quoted without understanding these factors is either incomplete or misleading.',
          'This article explains what drives cost so you can plan your budget with realistic expectations.',
        ],
      },
      {
        heading: 'Scope of work',
        paragraphs: [
          'A single room costs less than a full home. A design-only consultation costs less than design plus execution coordination. The first question is: what are you actually trying to achieve?',
          'At HOMES24DESIGNS, we offer three tiers — Essential, Signature and Luxe — to give you a starting framework. But the final quote is always based on your specific requirements.',
        ],
      },
      {
        heading: 'Size of the space',
        paragraphs: [
          'A 2BHK apartment and a 4BHK independent house require different amounts of design work, materials and coordination. Larger spaces need more detailed planning and more material.',
        ],
      },
      {
        heading: 'Materials and finishes',
        paragraphs: [
          'The same room can be finished in standard laminate or premium veneer, with standard hardware or soft-close mechanisms, with basic paint or textured wall treatments. Each choice affects cost.',
          'We help you make these trade-offs consciously — choosing where to invest and where to keep things simple.',
        ],
      },
      {
        heading: 'Level of customisation',
        paragraphs: [
          'Off-the-shelf furniture costs less than custom-built pieces. Standard cabinet configurations cost less than bespoke internal layouts. Customisation is valuable where it improves daily use — but it does not need to be everywhere.',
        ],
      },
      {
        heading: 'How to get an accurate estimate',
        paragraphs: [
          'The most accurate way to understand cost is a consultation. Share your space, your requirements and your budget range, and we will provide a design direction with realistic cost expectations.',
          'Book a consultation through this site, or call us at +91 9818083436.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much does interior design cost in Delhi?',
        answer:
          'There is no single figure. Cost depends on scope, space size, materials, finishes and customisation. A consultation is the best way to get an accurate estimate for your specific project.',
      },
      {
        question: 'Do you provide a free consultation?',
        answer:
          'You can book a consultation through this site or call us. We discuss your space and requirements before any commitment.',
      },
    ],
  },
  {
    slug: 'modular-kitchen-design-ideas-indian-homes',
    title: 'Modular Kitchen Design Ideas for Indian Homes',
    seoTitle: 'Modular Kitchen Design Ideas for Indian Homes | HOMES24DESIGNS',
    metaDescription:
      'Modular kitchen design ideas for Indian homes — workflow, storage, finishes, lighting and hardware that work for the way Indian families cook.',
    excerpt:
      'Modular kitchen design ideas for Indian homes — covering workflow, storage, finishes, lighting and hardware for everyday Indian cooking.',
    date: '2026-08-10',
    author: 'HOMES24DESIGNS',
    readingTime: '6 min read',
    image: '/images/journal/post-3-modular-kitchen.jpg',
    alt: 'Modular kitchen design ideas and workflow for Indian homes',
    content: [
      {
        heading: 'Design around how you cook',
        paragraphs: [
          'Indian cooking involves heavy pots, multiple stages, and a range of spices and dry ingredients. A modular kitchen that ignores this reality will look good but frustrate you daily.',
          'Start with the work triangle — the relationship between the stove, sink and refrigerator. A clear, short path between these three makes cooking more efficient.',
        ],
      },
      {
        heading: 'Plan storage for Indian ingredients',
        paragraphs: [
          'Indian kitchens need dedicated storage for dry spices, grains, oils and small appliances. Deep drawers for heavy pots, pull-out units for bottles, and accessible shelving for daily-use items all make a real difference.',
          'A modular kitchen is not just about cabinets — it is about the internal configuration that makes those cabinets useful.',
        ],
      },
      {
        heading: 'Choose finishes that handle heat and oil',
        paragraphs: [
          'Indian cooking generates heat, oil and steam. Choose finishes that are easy to clean and resistant to staining. Matte laminates, acrylic finishes and quartz counters all work well.',
          'Avoid finishes that mark easily or are difficult to wipe down — practicality is part of good design.',
        ],
      },
      {
        heading: 'Lighting for cooking and ambience',
        paragraphs: [
          'Under-cabinet task lighting is essential for Indian cooking, where detailed preparation is common. Add ambient lighting for the overall space and accent lighting to highlight the kitchen as a design feature, especially in open-plan layouts.',
        ],
      },
      {
        heading: 'Hardware that lasts',
        paragraphs: [
          'Hinges, channels and handles are used dozens of times a day. Soft-close hinges and full-extension drawer channels are worth the investment. They improve the feel of the kitchen and last longer.',
        ],
      },
      {
        heading: 'A modular kitchen designed for you',
        paragraphs: [
          'A modular kitchen should be designed around your cooking habits, your space and your aesthetic preferences. At HOMES24DESIGNS, we plan modular kitchens for homes across Delhi and Delhi NCR with these principles in mind.',
          'Book a consultation to discuss your kitchen requirements.',
        ],
      },
    ],
  },
  {
    slug: 'luxury-bedroom-interior-design',
    title: 'How to Plan a Luxury Bedroom Interior',
    seoTitle: 'How to Plan a Luxury Bedroom Interior | HOMES24DESIGNS',
    metaDescription:
      'A guide to planning a luxury bedroom interior — bed placement, wardrobe design, layered lighting, finishes and textiles for a restful, refined space.',
    excerpt:
      'How to plan a luxury bedroom interior — from bed placement and wardrobe design to lighting, finishes and textiles that create restful refinement.',
    date: '2026-08-05',
    author: 'HOMES24DESIGNS',
    readingTime: '5 min read',
    image: '/images/journal/post-4-luxury-bedroom.jpg',
    alt: 'Luxury bedroom interior design with warm layered lighting',
    content: [
      {
        heading: 'Luxury is about how a room feels',
        paragraphs: [
          'A luxury bedroom is not defined by expensive items alone. It is defined by how the room feels when you enter — the sense of calm, the quality of light, the tactile experience of surfaces and textiles.',
          'Planning a luxury bedroom starts with understanding what makes you feel at rest.',
        ],
      },
      {
        heading: 'Bed placement and scale',
        paragraphs: [
          'The bed is the focal point. Its placement affects circulation, light and the overall balance of the room. A bed that is too large for the space makes the room feel cramped; one that is too small feels lost.',
          'Consider the wall behind the bed — a headboard wall treatment, panel or feature can anchor the room.',
        ],
      },
      {
        heading: 'Wardrobe design',
        paragraphs: [
          'A luxury bedroom needs storage that is both generous and invisible. Built-in wardrobes with clean lines, internal lighting and considered internal configurations keep the room calm while serving your storage needs.',
        ],
      },
      {
        heading: 'Layered lighting',
        paragraphs: [
          'A single ceiling light is not enough. Plan ambient lighting for general illumination, bedside task lighting for reading, and accent lighting to highlight materials or architectural details. Dimming controls let you shift the mood from morning to night.',
        ],
      },
      {
        heading: 'Finishes and textiles',
        paragraphs: [
          'The tactile quality of a bedroom matters more than in any other room. Choose finishes and textiles that feel good to touch — soft bedding, warm wood, matte surfaces, and curtains or blinds that filter light beautifully.',
        ],
      },
      {
        heading: 'Designing your luxury bedroom',
        paragraphs: [
          'A luxury bedroom is the result of decisions that work together — layout, storage, lighting, materials and textiles. At HOMES24DESIGNS, we design bedroom interiors for homes across Delhi and Delhi NCR.',
          'Book a consultation to discuss your bedroom design.',
        ],
      },
    ],
  },
  {
    slug: 'living-room-interior-design-ideas-modern-homes',
    title: 'Living Room Interior Design Ideas for Modern Homes',
    seoTitle: 'Living Room Interior Design Ideas for Modern Homes | HOMES24DESIGNS',
    metaDescription:
      'Living room interior design ideas for modern homes — furniture layout, TV units, wall treatments, lighting and styling for a refined, liveable space.',
    excerpt:
      'Living room interior design ideas for modern homes — covering furniture layout, TV units, wall treatments, lighting and styling.',
    date: '2026-07-28',
    author: 'HOMES24DESIGNS',
    readingTime: '6 min read',
    image: '/images/journal/post-5-living-room.jpg',
    alt: 'Living room interior design ideas for modern homes',
    content: [
      {
        heading: 'The living room is the heart of the home',
        paragraphs: [
          'The living room is where your home is experienced most — by you and by guests. It needs to be comfortable for daily life and refined enough for entertaining. These two goals are not in conflict; good design serves both.',
        ],
      },
      {
        heading: 'Furniture layout first',
        paragraphs: [
          'Before selecting individual pieces, plan the layout. Where is the sofa? Where is the TV? Can people circulate easily? A clear layout makes the room feel open, even in compact Delhi apartments.',
          'Anchor the seating around a focal point — a TV unit, a window, or a feature wall — and build outward from there.',
        ],
      },
      {
        heading: 'TV and media units',
        paragraphs: [
          'A TV unit is often the largest piece of furniture in a living room. Treat it as a design element, not an afterthought. A well-designed media unit can include storage, display space and cable management while looking intentional.',
        ],
      },
      {
        heading: 'Wall treatments',
        paragraphs: [
          'A feature wall — paint, texture, wallpaper or panelling — adds depth without overwhelming the space. Choose one wall as the accent and keep the rest calm.',
        ],
      },
      {
        heading: 'Layered lighting',
        paragraphs: [
          'Plan ambient, task and accent lighting. Floor lamps for reading, ceiling lights for general illumination, and accent lighting to highlight art or architectural details. Dimming lets you shift from daytime to evening.',
        ],
      },
      {
        heading: 'Styling and decor',
        paragraphs: [
          'Styling is the final layer — cushions, throws, art, plants and objects. Keep it restrained. A few well-chosen pieces feel more refined than a surface full of decor.',
          'At HOMES24DESIGNS, we design living rooms for homes across Delhi and Delhi NCR. Book a consultation to discuss yours.',
        ],
      },
    ],
  },
  {
    slug: 'false-ceiling-lighting-ideas-indian-homes',
    title: 'False Ceiling and Lighting Ideas for Indian Homes',
    seoTitle: 'False Ceiling and Lighting Ideas for Indian Homes | HOMES24DESIGNS',
    metaDescription:
      'False ceiling and lighting ideas for Indian homes — layered lighting, cove design, fixture selection and ceiling treatments that shape mood.',
    excerpt:
      'False ceiling and lighting ideas for Indian homes — covering layered lighting, cove design, fixture selection and ceiling treatments.',
    date: '2026-07-20',
    author: 'HOMES24DESIGNS',
    readingTime: '5 min read',
    image: '/images/journal/post-6-false-ceiling.jpg',
    alt: 'False ceiling and lighting ideas for Indian homes',
    content: [
      {
        heading: 'Ceilings shape the mood of a room',
        paragraphs: [
          'The ceiling is the largest uninterrupted surface in most rooms. A false ceiling gives you the opportunity to shape that surface — adding depth, defining zones and concealing lighting.',
        ],
      },
      {
        heading: 'Cove lighting',
        paragraphs: [
          'Cove lighting — concealed LED strips within a false ceiling — creates a soft, indirect glow that makes a room feel warm and considered. It is especially effective in living rooms and bedrooms where harsh direct light feels unwelcoming.',
        ],
      },
      {
        heading: 'Layered lighting plan',
        paragraphs: [
          'A false ceiling should be part of a broader lighting plan. Combine ambient lighting (cove or ceiling fixtures), task lighting (pendants, table lamps) and accent lighting (spotlights on art or textures) for a complete scheme.',
        ],
      },
      {
        heading: 'Defining zones',
        paragraphs: [
          'In open-plan Delhi apartments, false ceilings can define zones — a lower ceiling over the dining area, a different treatment over the living seating. This creates structure without walls.',
        ],
      },
      {
        heading: 'Fixture selection',
        paragraphs: [
          'Pendant lights, chandeliers and ceiling fixtures should be selected as part of the design, not added afterwards. The right fixture becomes a design feature in itself.',
          'At HOMES24DESIGNS, we design false ceilings and lighting plans for homes across Delhi and Delhi NCR. Book a consultation to discuss your space.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-choose-interior-designer-delhi',
    title: 'How to Choose an Interior Designer in Delhi',
    seoTitle: 'How to Choose an Interior Designer in Delhi | HOMES24DESIGNS',
    metaDescription:
      'A practical guide to choosing an interior designer in Delhi — what to ask, what to look for, and how to find a designer who understands your home and your routine.',
    excerpt:
      'How to choose an interior designer in Delhi — what to ask, what to look for, and how to find a designer who understands your home and your routine.',
    date: '2026-07-12',
    author: 'HOMES24DESIGNS',
    readingTime: '5 min read',
    image: '/images/journal/post-7-choose-designer.jpg',
    alt: 'How to choose an interior designer in Delhi',
    content: [
      {
        heading: 'Start with your needs',
        paragraphs: [
          'Before looking for a designer, be clear about what you need. Is it a single room or a full home? A specific style or an open mind? A fixed budget or flexibility? Knowing your own requirements helps you find a designer who fits.',
        ],
      },
      {
        heading: 'Look at their work',
        paragraphs: [
          'Review a designer portfolio or project gallery. Does the work feel consistent and considered? Do the spaces look liveable, not just photogenic? A designer who only shows styled shots may not be thinking about daily use.',
        ],
      },
      {
        heading: 'Ask about their process',
        paragraphs: [
          'A good designer has a clear process — from understanding your needs through to a design direction and detailed planning. Ask how they work, how they handle revisions, and how they coordinate execution.',
        ],
      },
      {
        heading: 'Consider local knowledge',
        paragraphs: [
          'A designer based in Delhi understands the local context — climate, materials, suppliers and the way homes are used in the city. This practical knowledge makes a real difference to the final result.',
          'HOMES24DESIGNS is based in New Delhi and serves Delhi, New Delhi, South East Delhi and Delhi NCR.',
        ],
      },
      {
        heading: 'Have a consultation',
        paragraphs: [
          'The best way to evaluate a designer is to talk to them. A consultation reveals whether they listen, whether they understand your space, and whether you feel comfortable working with them.',
          'Book a consultation with HOMES24DESIGNS through this site, or call +91 9818083436.',
        ],
      },
    ],
  },
  {
    slug: 'small-apartment-interior-design-ideas',
    title: 'Small Apartment Interior Design Ideas',
    seoTitle: 'Small Apartment Interior Design Ideas | HOMES24DESIGNS',
    metaDescription:
      'Small apartment interior design ideas — layout, storage, lighting, colour and furniture choices that make compact Delhi apartments feel open and considered.',
    excerpt:
      'Small apartment interior design ideas — layout, storage, lighting, colour and furniture choices that make compact spaces feel open.',
    date: '2026-07-05',
    author: 'HOMES24DESIGNS',
    readingTime: '5 min read',
    image: '/images/journal/post-8-small-spaces.jpg',
    alt: 'Small apartment interior design ideas and spatial optimization',
    content: [
      {
        heading: 'Small does not mean compromised',
        paragraphs: [
          'A well-designed small apartment can feel more considered than a large one. Constraints force better decisions — every element has to earn its place.',
        ],
      },
      {
        heading: 'Layout and circulation',
        paragraphs: [
          'In a small apartment, circulation is everything. Keep paths clear. Avoid placing furniture where it blocks movement. A layout that lets you walk through the space without obstruction makes it feel larger.',
        ],
      },
      {
        heading: 'Multi-functional storage',
        paragraphs: [
          'Storage should serve multiple purposes where possible — a wardrobe that also acts as a partition, a TV unit with integrated storage, a bed with drawers underneath. Every unit should earn its footprint.',
        ],
      },
      {
        heading: 'Light and colour',
        paragraphs: [
          'Light colours and good lighting make a space feel open. But do not default to all-white — warm neutrals, light woods and a single accent colour can add personality without closing the space in.',
          'Layered lighting — ambient, task and accent — adds depth that makes a compact room feel more dimensional.',
        ],
      },
      {
        heading: 'Furniture scale',
        paragraphs: [
          'Choose furniture that fits the scale of the room. Oversized sofas and heavy dining tables overwhelm small apartments. Sleeker, lower-profile pieces feel right.',
          'At HOMES24DESIGNS, we design small apartment interiors for homes across Delhi and Delhi NCR. Book a consultation to discuss your space.',
        ],
      },
    ],
  },
  {
    slug: 'luxury-home-interior-design-what-matters',
    title: 'Luxury Home Interior Design: What Actually Matters',
    seoTitle: 'Luxury Home Interior Design: What Actually Matters | HOMES24DESIGNS',
    metaDescription:
      'What actually matters in luxury home interior design — materials, lighting, spatial planning, craftsmanship and the details that create lasting quality.',
    excerpt:
      'What actually matters in luxury home interior design — materials, lighting, spatial planning and the details that create lasting quality.',
    date: '2026-06-28',
    author: 'HOMES24DESIGNS',
    readingTime: '6 min read',
    image: '/images/journal/post-9-craftsmanship.jpg',
    alt: 'Luxury home interior design architectural detailing and craftsmanship',
    content: [
      {
        heading: 'Luxury is not a price tag',
        paragraphs: [
          'Luxury in interior design is not about spending more. It is about the quality of decisions — the right materials in the right places, lighting that creates mood, details that are considered rather than overlooked.',
        ],
      },
      {
        heading: 'Spatial planning',
        paragraphs: [
          'The foundation of a luxury interior is the layout. Proportions, circulation, sight lines and the relationship between rooms. No amount of expensive finish can fix a poor layout.',
        ],
      },
      {
        heading: 'Materials and craftsmanship',
        paragraphs: [
          'Luxury is felt through materials — the warmth of natural wood, the cool of stone, the texture of a well-finished wall. And through craftsmanship — the quality of joinery, the precision of installation, the details that are done right.',
        ],
      },
      {
        heading: 'Lighting as design',
        paragraphs: [
          'Lighting is the single most powerful tool in interior design. A layered lighting plan — ambient, task and accent — transforms a room from flat to dimensional, from cold to warm.',
        ],
      },
      {
        heading: 'Restraint',
        paragraphs: [
          'The most common mistake in luxury interiors is doing too much. Restraint is what separates refined luxury from ostentation. Choose where to invest and where to keep things simple.',
          'At HOMES24DESIGNS, we design luxury home interiors for residences across Delhi and Delhi NCR. Book a consultation to discuss your home.',
        ],
      },
    ],
  },
  {
    slug: 'interior-design-mistakes-homeowners-should-avoid',
    title: 'Interior Design Mistakes Homeowners Should Avoid',
    seoTitle: 'Interior Design Mistakes Homeowners Should Avoid | HOMES24DESIGNS',
    metaDescription:
      'Common interior design mistakes homeowners should avoid — from poor lighting and overcrowded rooms to ignoring circulation and choosing style over function.',
    excerpt:
      'Common interior design mistakes homeowners should avoid — poor lighting, overcrowded rooms, ignoring circulation and choosing style over function.',
    date: '2026-06-20',
    author: 'HOMES24DESIGNS',
    readingTime: '5 min read',
    image: '/images/journal/post-10-mistakes.jpg',
    alt: 'Interior design mistakes homeowners should avoid in room planning',
    content: [
      {
        heading: 'Mistake 1: Poor lighting',
        paragraphs: [
          'Relying on a single ceiling light per room is the most common mistake. Every room needs layered lighting — ambient, task and accent — to feel complete. Plan lighting as part of the design, not as an afterthought.',
        ],
      },
      {
        heading: 'Mistake 2: Overcrowding',
        paragraphs: [
          'Filling every corner with furniture and decor makes a room feel smaller and less calm. Leave breathing room. Fewer, better-chosen pieces feel more refined.',
        ],
      },
      {
        heading: 'Mistake 3: Ignoring circulation',
        paragraphs: [
          'If you have to walk around furniture to cross a room, the layout is wrong. Plan circulation paths first, then place furniture around them.',
        ],
      },
      {
        heading: 'Mistake 4: Choosing style over function',
        paragraphs: [
          'A beautiful kitchen that is hard to cook in is not good design. A stunning bedroom with no storage is not good design. Function and aesthetics must work together.',
        ],
      },
      {
        heading: 'Mistake 5: Inconsistent finishes',
        paragraphs: [
          'Too many competing finishes — different woods, metals, textures — create visual noise. Choose a coherent palette and stick to it across the home.',
          'At HOMES24DESIGNS, we help homeowners across Delhi and Delhi NCR avoid these mistakes with considered, cohesive interior design. Book a consultation to discuss your project.',
        ],
      },
    ],
  },
];
