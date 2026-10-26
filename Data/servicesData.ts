export interface ServicePageData {
  slug: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
  };
  /** Images used by the sections below the hero. Each service page can have its own. */
  images?: {
    /** 4 service cards, in order: Design, Supply, Installation, Renovation */
    cards: string[];
    /** "Quality. Expertise. Reliability." section image */
    quality: string;
    /** 4 gallery items (before/after pairs) */
    gallery: { src: string; label: "Before" | "After" }[];
  };
  overview: {
    intro: string;
    highlights: string[];
    bulletPoints: { title: string; text: string }[];
  };
  process: { step: number; title: string; description: string }[];
  pricingScope: {
    timeline: string;
    whatIsIncluded: string[];
  };
  faqs: { question: string; answer: string }[];
  breadcrumbs: { label: string; href: string }[];
}

/*
  IMAGES: every path below is a placeholder (/images/Hero.png) so the page works
  straight away. Replace each one with that service's own photo, e.g.
  "/images/services/wet-rooms/quality.jpg" (files go in /public/images/...).
*/

export const servicesData: Record<string, ServicePageData> = {
  "bathroom-installation-southampton": {
    slug: "bathroom-installation-southampton",
    meta: {
      title: "Bathroom Installation Southampton | UKB Bathrooms",
      description: "Professional bathroom installation in Southampton. Complete fitting, plumbing, and tiling. Free quote. Call +44 7838 349520.",
      keywords: ["bathroom installation Southampton", "bathroom fitting Southampton", "bathroom fitters Southampton", "new bathroom Southampton", "bathroom company Southampton", "bathroom fitter near me"],
    },
    hero: {
      badge: "Southampton Bathroom Specialists",
      title: "Bathroom Installation in Southampton",
      subtitle: "Complete bathroom fitting from design to completion. Local experts serving Southampton and surrounding areas.",
      ctaPrimary: "Get a Free Quote",
      ctaSecondary: "Call +44 7838 349520",
      image: "/images/Hero.png",
    },
    images: {
      cards: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/5.jpg"],
      quality: "/images/Hero.png",
      gallery: [
        { src: "/images/before1.jpg", label: "Before" },
        { src: "/images/after1.jpg", label: "After" },
        { src: "/images/before2.jpg", label: "Before" },
        { src: "/images/after2.jpg", label: "After" },
      ],
    },
    overview: {
      intro: "At UKB Bathrooms, we specialise in complete bathroom installations across Southampton. From initial design to final sign-off, we handle every aspect of your bathroom project with professional care and attention to detail.",
      highlights: [
        "Complete turnkey installations",
        "Fully insured and certified tradesmen",
        "5-year workmanship guarantee",
        "Fixed quotes with no hidden costs",
      ],
      bulletPoints: [
        { title: "Expert Fitting", text: "Our team has years of experience installing bathrooms of all styles and sizes across Southampton." },
        { title: "Quality Materials", text: "We source premium fixtures and fittings from trusted suppliers to ensure lasting performance." },
        { title: "Clean & Tidy", text: "We protect your home during installation and leave every site spotless upon completion." },
      ],
    },
    process: [
      { step: 1, title: "Survey & Design", description: "We visit your home to measure and discuss your requirements, then create a detailed design plan." },
      { step: 2, title: "Strip & Prepare", description: "We carefully remove old fixtures, protect surrounding areas, and prepare surfaces for new installation." },
      { step: 3, title: "Installation", description: "Our certified fitters install plumbing, electrics, tiling, and fixtures to the highest standards." },
      { step: 4, title: "Finishing & Sign-off", description: "We complete all finishing touches, thoroughly test everything, and ensure your complete satisfaction." },
    ],
    pricingScope: {
      timeline: "5-10 working days",
      whatIsIncluded: [
        "Full design consultation",
        "All labour and materials",
        "Plumbing and electrical work",
        "Tiling and finishing",
        "Waste removal and cleanup",
      ],
    },
    faqs: [
      {
        question: "How long does a bathroom installation take?",
        answer: "Most bathroom installations take between 5 and 10 working days, depending on the size and complexity of the project.",
      },
      {
        question: "Do you handle plumbing and electrical work?",
        answer: "Yes, our team includes certified plumbers and electricians who handle all necessary plumbing and electrical work.",
      },
      {
        question: "What areas of Southampton do you cover?",
        answer: "We cover Southampton and surrounding areas including Shirley, Portswood, Woolston, Bitterne, Eastleigh, Totton, Hedge End, Chandler's Ford and Romsey.",
      },
      {
        question: "Do you provide a guarantee?",
        answer: "Yes, we provide a 5-year workmanship guarantee on all installations, and products come with their own manufacturer warranties.",
      },
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Bathroom Installation", href: "/services/bathroom-installation-southampton" },
    ],
  },
  "bathroom-renovation-southampton": {
    slug: "bathroom-renovation-southampton",
    meta: {
      title: "Bathroom Renovation Southampton | UKB Bathrooms",
      description: "Expert bathroom renovation in Southampton. Transform your space with professional refurbishment. Free quote. Call +44 7838 349520.",
      keywords: ["bathroom renovation Southampton", "bathroom refurbishment Southampton", "small bathroom renovation Southampton", "bathroom fitters Southampton", "bathroom company Southampton"],
    },
    hero: {
      badge: "Southampton Bathroom Specialists",
      title: "Bathroom Renovation in Southampton",
      subtitle: "Transform your existing bathroom into a modern, functional space. Expert renovation services across Southampton.",
      ctaPrimary: "Get a Free Quote",
      ctaSecondary: "Call +44 7838 349520",
      image: "/images/Hero.png",
    },
    images: {
      cards: ["/images/Hero.png", "/images/Hero.png", "/images/Hero.png", "/images/Hero.png"],
      quality: "/images/Hero.png",
      gallery: [
        { src: "/images/Hero.png", label: "Before" },
        { src: "/images/Hero.png", label: "After" },
        { src: "/images/Hero.png", label: "Before" },
        { src: "/images/Hero.png", label: "After" },
      ],
    },
    overview: {
      intro: "Bathroom renovation is our speciality. We breathe new life into tired bathrooms across Southampton, combining modern design with expert craftsmanship to create spaces you'll love for years to come.",
      highlights: [
        "Complete transformations",
        "Modern design solutions",
        "Budget-friendly options",
        "Minimal disruption to your home",
      ],
      bulletPoints: [
        { title: "Space Planning", text: "We optimise your existing layout to maximise space and improve functionality." },
        { title: "Modern Upgrades", text: "Update to contemporary fixtures, efficient fittings, and stylish finishes." },
        { title: "Expert Workmanship", text: "Our renovation team delivers quality finishes that stand the test of time." },
      ],
    },
    process: [
      { step: 1, title: "Assessment", description: "We assess your current bathroom and discuss your renovation goals and budget." },
      { step: 2, title: "Design & Planning", description: "We create a renovation plan that maximises your space and meets your style preferences." },
      { step: 3, title: "Renovation Work", description: "We carry out all renovation work from demolition to installation with minimal disruption." },
      { step: 4, title: "Completion", description: "We finish with thorough cleaning and a final walkthrough to ensure your satisfaction." },
    ],
    pricingScope: {
      timeline: "5-8 working days",
      whatIsIncluded: [
        "Site assessment and planning",
        "Demolition and removal",
        "All renovation work",
        "New fixtures and fittings",
        "Final finishing touches",
      ],
    },
    faqs: [
      {
        question: "What's the difference between installation and renovation?",
        answer: "Installation typically refers to fitting a new bathroom in a new space, while renovation involves updating or transforming an existing bathroom.",
      },
      {
        question: "Can you work with my existing layout?",
        answer: "Yes, we can work with your existing layout or suggest improvements to better utilise your space.",
      },
      {
        question: "Do you handle waste removal?",
        answer: "Yes, we remove all old fixtures and waste materials as part of our renovation service.",
      },
      {
        question: "Will I need to move out during renovation?",
        answer: "Most renovations can be completed with you staying in your home. We work efficiently to minimise disruption.",
      },
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Bathroom Renovation", href: "/services/bathroom-renovation-southampton" },
    ],
  },
  "wet-rooms-southampton": {
    slug: "wet-rooms-southampton",
    meta: {
      title: "Wet Rooms Southampton | UKB Bathrooms",
      description: "Professional wet room installation in Southampton. Accessible, modern, fully waterproofed solutions. Free quote. Call +44 7838 349520.",
      keywords: ["wet room installation Southampton", "wet room fitters Southampton", "walk-in shower installation Southampton", "accessible bathrooms Southampton", "bathroom fitters Southampton"],
    },
    hero: {
      badge: "Southampton Bathroom Specialists",
      title: "Wet Rooms in Southampton",
      subtitle: "Modern, accessible wet rooms designed and installed to the highest waterproofing standards across Southampton.",
      ctaPrimary: "Get a Free Quote",
      ctaSecondary: "Call +44 7838 349520",
      image: "/images/Hero.png",
    },
    images: {
      cards: ["/images/Hero.png", "/images/Hero.png", "/images/Hero.png", "/images/Hero.png"],
      quality: "/images/Hero.png",
      gallery: [
        { src: "/images/Hero.png", label: "Before" },
        { src: "/images/Hero.png", label: "After" },
        { src: "/images/Hero.png", label: "Before" },
        { src: "/images/Hero.png", label: "After" },
      ],
    },
    overview: {
      intro: "Wet rooms are the ultimate in modern bathroom design, offering seamless accessibility and easy maintenance. Our team specialises in creating stunning wet rooms across Southampton that combine style with practical functionality.",
      highlights: [
        "Fully waterproofed solutions",
        "Accessibility compliant",
        "Modern seamless design",
        "Easy to maintain",
      ],
      bulletPoints: [
        { title: "Professional Tanking", text: "We use industry-leading tanking systems to ensure complete waterproof protection." },
        { title: "Level Access", text: "Perfect for accessibility with no steps or thresholds to navigate." },
        { title: "Custom Design", text: "We design wet rooms that complement your home and meet your specific needs." },
      ],
    },
    process: [
      { step: 1, title: "Consultation", description: "We discuss your requirements, assess the space, and explain wet room options." },
      { step: 2, title: "Design & Planning", description: "We create a detailed design including drainage, tanking, and finish choices." },
      { step: 3, title: "Waterproofing", description: "We install professional-grade tanking systems to ensure complete waterproof protection." },
      { step: 4, title: "Installation", description: "We complete all tiling, fixtures, and finishing to your exact specifications." },
    ],
    pricingScope: {
      timeline: "7-12 working days",
      whatIsIncluded: [
        "Full design consultation",
        "Professional tanking system",
        "Level access shower tray",
        "Full tiling installation",
        "All fixtures and fittings",
      ],
    },
    faqs: [
      {
        question: "Are wet rooms suitable for all homes?",
        answer: "Wet rooms can be installed in most homes, but we need to assess floor structure and drainage during our initial consultation.",
      },
      {
        question: "How long does wet room installation take?",
        answer: "Wet room installation typically takes 7-12 working days due to the extensive waterproofing requirements.",
      },
      {
        question: "Are wet rooms waterproof?",
        answer: "Yes, we use professional-grade tanking systems that provide complete waterproof protection for years to come.",
      },
      {
        question: "Can I have a wet room in an upstairs bathroom?",
        answer: "Yes, with proper tanking and drainage, wet rooms can be installed on any floor of your home.",
      },
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Wet Rooms", href: "/services/wet-rooms-southampton" },
    ],
  },
  "ensuite-installation-southampton": {
    slug: "ensuite-installation-southampton",
    meta: {
      title: "Ensuite Installation Southampton | UKB Bathrooms",
      description: "Ensuite bathroom installation in Southampton. Add value and convenience to your home. Free quote. Call +44 7838 349520.",
      keywords: ["ensuite bathroom installation Southampton", "ensuite fitters Southampton", "bathroom installation Southampton", "bathroom fitters Southampton", "new bathroom Southampton"],
    },
    hero: {
      badge: "Southampton Bathroom Specialists",
      title: "Ensuite Installation in Southampton",
      subtitle: "Create a private sanctuary with expert ensuite installation. Serving Southampton homeowners.",
      ctaPrimary: "Get a Free Quote",
      ctaSecondary: "Call +44 7838 349520",
      image: "/images/Hero.png",
    },
    images: {
      cards: ["/images/Hero.png", "/images/Hero.png", "/images/Hero.png", "/images/Hero.png"],
      quality: "/images/Hero.png",
      gallery: [
        { src: "/images/Hero.png", label: "Before" },
        { src: "/images/Hero.png", label: "After" },
        { src: "/images/Hero.png", label: "Before" },
        { src: "/images/Hero.png", label: "After" },
      ],
    },
    overview: {
      intro: "Adding an ensuite bathroom adds value, convenience, and luxury to your home. Our team specialises in designing and installing ensuites that maximise space while delivering the highest quality finish.",
      highlights: [
        "Space-efficient designs",
        "Adds property value",
        "Private luxury",
        "Complete turnkey service",
      ],
      bulletPoints: [
        { title: "Space Optimisation", text: "We design ensuites that make the most of available space without feeling cramped." },
        { title: "Sound Reduction", text: "We use sound-insulating materials for privacy and comfort." },
        { title: "Luxury Finishes", text: "Choose from premium fixtures and fittings to create your ideal ensuite." },
      ],
    },
    process: [
      { step: 1, title: "Site Survey", description: "We assess the available space and discuss your requirements and preferences." },
      { step: 2, title: "Design", description: "We create a layout that optimises space and meets your style and budget." },
      { step: 3, title: "Installation", description: "We handle all construction, plumbing, electrical, and finishing work." },
      { step: 4, title: "Completion", description: "We finish with thorough testing and a final inspection to ensure quality." },
    ],
    pricingScope: {
      timeline: "6-10 working days",
      whatIsIncluded: [
        "Full design service",
        "All construction work",
        "Plumbing and electrical",
        "Fixtures and fittings",
        "Sound insulation",
      ],
    },
    faqs: [
      {
        question: "How much space do I need for an ensuite?",
        answer: "We can work with spaces as small as 1.5m x 2m, though larger spaces allow for more design flexibility.",
      },
      {
        question: "Do I need planning permission for an ensuite?",
        answer: "Most ensuite installations don't require planning permission, but we'll advise if your specific project does.",
      },
      {
        question: "Can you add an ensuite to any bedroom?",
        answer: "In most cases, yes. We'll assess your property's structure and drainage during our survey.",
      },
      {
        question: "How long does ensuite installation take?",
        answer: "Ensuite installation typically takes 6-10 working days depending on the complexity of the work.",
      },
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Ensuite Installation", href: "/services/ensuite-installation-southampton" },
    ],
  },
  "bathroom-design-southampton": {
    slug: "bathroom-design-southampton",
    meta: {
      title: "Bathroom Design Southampton | UKB Bathrooms",
      description: "Professional bathroom design services in Southampton. 3D planning, expert advice. Free consultation. Call +44 7838 349520.",
      keywords: ["bathroom design Southampton", "3D bathroom design Southampton", "bathroom planning Southampton", "bathroom fitters Southampton", "bathroom company Southampton"],
    },
    hero: {
      badge: "Southampton Bathroom Specialists",
      title: "Bathroom Design in Southampton",
      subtitle: "Expert bathroom design services from concept to completion. Create your dream bathroom with our design team.",
      ctaPrimary: "Get a Free Quote",
      ctaSecondary: "Call +44 7838 349520",
      image: "/images/Hero.png",
    },
    images: {
      cards: ["/images/Hero.png", "/images/Hero.png", "/images/Hero.png", "/images/Hero.png"],
      quality: "/images/Hero.png",
      gallery: [
        { src: "/images/Hero.png", label: "Before" },
        { src: "/images/Hero.png", label: "After" },
        { src: "/images/Hero.png", label: "Before" },
        { src: "/images/Hero.png", label: "After" },
      ],
    },
    overview: {
      intro: "Great bathrooms start with great design. Our design team works closely with you to create bathrooms that are both beautiful and practical, making the most of your space and budget.",
      highlights: [
        "3D visualisations",
        "Expert space planning",
        "Budget-conscious design",
        "Material sourcing",
      ],
      bulletPoints: [
        { title: "3D Design", text: "We create detailed 3D visualisations so you can see your bathroom before we start work." },
        { title: "Space Planning", text: "Our designers optimise every inch of space for maximum functionality and style." },
        { title: "Material Selection", text: "We help you choose the perfect fixtures, fittings, and finishes for your budget." },
      ],
    },
    process: [
      { step: 1, title: "Consultation", description: "We discuss your needs, preferences, and budget in detail." },
      { step: 2, title: "Site Measurement", description: "We take precise measurements and assess your space's potential." },
      { step: 3, title: "Design Creation", description: "We create detailed designs including 3D visualisations and material specifications." },
      { step: 4, title: "Refinement", description: "We work with you to refine the design until you're completely happy." },
    ],
    pricingScope: {
      timeline: "1-2 weeks",
      whatIsIncluded: [
        "Design consultation",
        "Site survey and measurement",
        "3D visualisations",
        "Material recommendations",
        "Detailed specification",
      ],
    },
    faqs: [
      {
        question: "What's included in the design service?",
        answer: "Our design service includes consultation, site survey, 3D visualisations, material recommendations, and detailed specifications.",
      },
      {
        question: "Do I need to book installation separately?",
        answer: "No, if you like our design, we can provide a complete quote for installation as well.",
      },
      {
        question: "Can you work with my existing fixtures?",
        answer: "Yes, we can design around existing fixtures if you want to keep certain elements of your current bathroom.",
      },
      {
        question: "How long does the design process take?",
        answer: "The design process typically takes 1-2 weeks from initial consultation to final design approval.",
      },
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Bathroom Design", href: "/services/bathroom-design-southampton" },
    ],
  },
  "bathroom-tiling-southampton": {
    slug: "bathroom-tiling-southampton",
    meta: {
      title: "Bathroom Tiling Southampton | UKB Bathrooms",
      description: "Expert bathroom tiling in Southampton. Wall and floor tiling, waterproofing. Free quote. Call +44 7838 349520.",
      keywords: ["bathroom tiling Southampton", "tiling services Southampton", "wall tiling Southampton", "floor tiling Southampton", "bathroom fitters Southampton", "waterproofing Southampton"],
    },
    hero: {
      badge: "Southampton Bathroom Specialists",
      title: "Bathroom Tiling in Southampton",
      subtitle: "Professional bathroom tiling services. Precision wall and floor tiling with waterproofing expertise.",
      ctaPrimary: "Get a Free Quote",
      ctaSecondary: "Call +44 7838 349520",
      image: "/images/Hero.png",
    },
    images: {
      cards: ["/images/Hero.png", "/images/Hero.png", "/images/Hero.png", "/images/Hero.png"],
      quality: "/images/Hero.png",
      gallery: [
        { src: "/images/Hero.png", label: "Before" },
        { src: "/images/Hero.png", label: "After" },
        { src: "/images/Hero.png", label: "Before" },
        { src: "/images/Hero.png", label: "After" },
      ],
    },
    overview: {
      intro: "Quality tiling is essential for both the look and longevity of your bathroom. Our tilers have years of experience delivering stunning, durable tiling work across Southampton.",
      highlights: [
        "Precision tiling",
        "Waterproofing experts",
        "Wide tile selection",
        "Clean grout lines",
      ],
      bulletPoints: [
        { title: "Expert Workmanship", text: "Our tilers deliver perfectly straight grout lines and professional finishes." },
        { title: "Waterproofing", text: "We ensure proper waterproofing in wet areas to protect your home from water damage." },
        { title: "Tile Sourcing", text: "We can source tiles from our trusted suppliers or work with tiles you've chosen yourself." },
      ],
    },
    process: [
      { step: 1, title: "Assessment", description: "We assess the area and discuss your tile preferences and requirements." },
      { step: 2, title: "Preparation", description: "We prepare surfaces, ensuring they're level and ready for tiling." },
      { step: 3, title: "Tiling", description: "We install tiles with precision, ensuring consistent spacing and alignment." },
      { step: 4, title: "Grouting & Sealing", description: "We apply grout and sealant for a professional, water-resistant finish." },
    ],
    pricingScope: {
      timeline: "3-5 working days",
      whatIsIncluded: [
        "Surface preparation",
        "Tile installation",
        "Grouting and sealing",
        "Waterproofing if required",
        "Cleanup and waste removal",
      ],
    },
    faqs: [
      {
        question: "Do you supply tiles or can I provide my own?",
        answer: "We can supply tiles from our range or work with tiles you've purchased yourself - either way is fine.",
      },
      {
        question: "How long does tiling take?",
        answer: "Bathroom tiling typically takes 3-5 working days depending on the size and complexity of the area.",
      },
      {
        question: "Do you waterproof shower areas?",
        answer: "Yes, we ensure proper waterproofing in all wet areas to protect against water damage.",
      },
      {
        question: "What size tiles can you install?",
        answer: "We can install tiles of any size from small mosaics to large-format tiles, depending on your preference.",
      },
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Bathroom Tiling", href: "/services/bathroom-tiling-southampton" },
    ],
  },
};