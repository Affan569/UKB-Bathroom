export interface AreaPageData {
  slug: string;
  name: string;
  postcodes: string[];
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    headline: string;
    subheadline: string;
  };
  housingSpeciality: {
    propertyTypes: string;
    plumbingChallenges: string;
    localInsight: string;
  };
  servicesOffered: string[];
  faqs: { question: string; answer: string }[];
  breadcrumbs: { label: string; href: string }[];
}

export const areasData: Record<string, AreaPageData> = {
  shirley: {
    slug: "shirley",
    name: "Shirley, Southampton",
    postcodes: ["SO15", "SO16"],
    meta: {
      title: "Bathroom Fitters Shirley Southampton | UKB Bathrooms",
      description: "Local bathroom fitters in Shirley, Southampton. Professional installation, renovation, and tiling services. Free quote. Call +44 7838 349520.",
      keywords: ["bathroom fitters Shirley", "bathroom installation Shirley", "bathroom renovation Shirley", "bathroom fitter near me", "bathroom company Southampton"],
    },
    hero: {
      headline: "Bathroom Services in Shirley, Southampton",
      subheadline: "Your local bathroom experts serving Shirley and surrounding areas. Quality workmanship you can trust.",
    },
    housingSpeciality: {
      propertyTypes: "Mix of Victorian and Edwardian terraces, interwar semis, and modern developments",
      plumbingChallenges: "Old pipework systems in period properties requiring careful upgrade and modernisation",
      localInsight: "Shirley's residential character means we're experienced in working in occupied family homes with minimal disruption",
    },
    servicesOffered: [
      "Bathroom Installation",
      "Bathroom Renovation",
      "Wet Rooms",
      "Ensuite Installation",
      "Bathroom Design",
      "Bathroom Tiling",
    ],
    faqs: [
      {
        question: "Do you work in Shirley, Southampton?",
        answer: "Yes, we regularly work in Shirley and the surrounding SO15 and SO16 postcode areas.",
      },
      {
        question: "Can you work with Victorian bathroom layouts?",
        answer: "Yes, we have extensive experience renovating Victorian and Edwardian bathrooms while preserving period character.",
      },
      {
        question: "How do you handle old pipework in Shirley homes?",
        answer: "We carefully assess and upgrade old pipework systems to modern standards while minimising disruption to your home.",
      },
      {
        question: "Do you work weekends in Shirley?",
        answer: "We can offer weekend work by arrangement to minimise disruption to your weekday routine.",
      },
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Areas Covered", href: "/areas-covered" },
      { label: "Shirley", href: "/areas-covered/shirley" },
    ],
  },
  portswood: {
    slug: "portswood",
    name: "Portswood, Southampton",
    postcodes: ["SO17", "SO18"],
    meta: {
      title: "Bathroom Fitters Portswood Southampton | UKB Bathrooms",
      description: "Local bathroom fitters in Portswood, Southampton. Professional installation, renovation, and tiling services. Free quote. Call +44 7838 349520.",
      keywords: ["bathroom fitters Portswood", "bathroom installation Portswood", "bathroom renovation Portswood", "bathroom fitter near me", "bathroom company Southampton"],
    },
    hero: {
      headline: "Bathroom Services in Portswood, Southampton",
      subheadline: "Your local bathroom experts serving Portswood and surrounding areas. Quality workmanship you can trust.",
    },
    housingSpeciality: {
      propertyTypes: "Range of terraced houses, purpose-built flats, and student accommodation",
      plumbingChallenges: "Shared walls in terraced properties requiring careful water pressure management",
      localInsight: "Portswood's mix of student lets and family homes means we're experienced in quick turnarounds and quality long-term installations",
    },
    servicesOffered: [
      "Bathroom Installation",
      "Bathroom Renovation",
      "Wet Rooms",
      "Ensuite Installation",
      "Bathroom Design",
      "Bathroom Tiling",
    ],
    faqs: [
      {
        question: "Do you work in Portswood, Southampton?",
        answer: "Yes, we serve Portswood and the SO17 and SO18 postcode areas regularly.",
      },
      {
        question: "Can you work in student accommodation?",
        answer: "Yes, we have experience working in student lets and can complete work efficiently during turnaround periods.",
      },
      {
        question: "How do you handle water pressure in terraced houses?",
        answer: "We assess and optimise water pressure systems, especially important in terraced properties with shared supplies.",
      },
      {
        question: "Do you offer discounts for multiple bathrooms?",
        answer: "Yes, we can offer competitive pricing for multiple bathrooms or complete property renovations.",
      },
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Areas Covered", href: "/areas-covered" },
      { label: "Portswood", href: "/areas-covered/portswood" },
    ],
  },
  woolston: {
    slug: "woolston",
    name: "Woolston, Southampton",
    postcodes: ["SO19", "SO18"],
    meta: {
      title: "Bathroom Fitters Woolston Southampton | UKB Bathrooms",
      description: "Local bathroom fitters in Woolston, Southampton. Professional installation, renovation, and tiling services. Free quote. Call +44 7838 349520.",
      keywords: ["bathroom fitters Woolston", "bathroom installation Woolston", "bathroom renovation Woolston", "bathroom fitter near me", "bathroom company Southampton"],
    },
    hero: {
      headline: "Bathroom Services in Woolston, Southampton",
      subheadline: "Your local bathroom experts serving Woolston and surrounding areas. Quality workmanship you can trust.",
    },
    housingSpeciality: {
      propertyTypes: "Victorian terraces, post-war housing, and modern riverside developments",
      plumbingChallenges: "Proximity to waterfront requiring additional damp-proofing considerations",
      localInsight: "Woolston's regeneration means we work on both period renovations and new build installations",
    },
    servicesOffered: [
      "Bathroom Installation",
      "Bathroom Renovation",
      "Wet Rooms",
      "Ensuite Installation",
      "Bathroom Design",
      "Bathroom Tiling",
    ],
    faqs: [
      {
        question: "Do you work in Woolston, Southampton?",
        answer: "Yes, we regularly work in Woolston covering the SO19 and SO18 postcode areas.",
      },
      {
        question: "Do you work on new build properties?",
        answer: "Yes, we have experience working on new build developments as well as period property renovations.",
      },
      {
        question: "Is additional waterproofing needed near the waterfront?",
        answer: "We assess each property individually and recommend appropriate waterproofing based on location and building type.",
      },
      {
        question: "Can you renovate Victorian bathrooms in Woolston?",
        answer: "Yes, we specialise in renovating period bathrooms while preserving character and upgrading functionality.",
      },
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Areas Covered", href: "/areas-covered" },
      { label: "Woolston", href: "/areas-covered/woolston" },
    ],
  },
  bitterne: {
    slug: "bitterne",
    name: "Bitterne, Southampton",
    postcodes: ["SO18", "SO19"],
    meta: {
      title: "Bathroom Fitters Bitterne Southampton | UKB Bathrooms",
      description: "Local bathroom fitters in Bitterne, Southampton. Professional installation, renovation, and tiling services. Free quote. Call +44 7838 349520.",
      keywords: ["bathroom fitters Bitterne", "bathroom installation Bitterne", "bathroom renovation Bitterne", "bathroom fitter near me", "bathroom company Southampton"],
    },
    hero: {
      headline: "Bathroom Services in Bitterne, Southampton",
      subheadline: "Your local bathroom experts serving Bitterne and surrounding areas. Quality workmanship you can trust.",
    },
    housingSpeciality: {
      propertyTypes: "1930s semis, post-war council housing, and modern private developments",
      plumbingChallenges: "Mixed era plumbing systems requiring comprehensive assessment and upgrading",
      localInsight: "Bitterne's established residential character means we work extensively on family home renovations",
    },
    servicesOffered: [
      "Bathroom Installation",
      "Bathroom Renovation",
      "Wet Rooms",
      "Ensuite Installation",
      "Bathroom Design",
      "Bathroom Tiling",
    ],
    faqs: [
      {
        question: "Do you work in Bitterne, Southampton?",
        answer: "Yes, we serve Bitterne and the SO18 and SO19 postcode areas.",
      },
      {
        question: "Can you work on 1930s semis?",
        answer: "Yes, we have extensive experience renovating bathrooms in 1930s semi-detached properties.",
      },
      {
        question: "Do you upgrade old plumbing systems?",
        answer: "Yes, we assess and upgrade old plumbing systems to modern standards for improved performance and reliability.",
      },
      {
        question: "Can you add ensuites to Bitterne homes?",
        answer: "Yes, we can design and install ensuites in suitable spaces, adding value and convenience to your home.",
      },
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Areas Covered", href: "/areas-covered" },
      { label: "Bitterne", href: "/areas-covered/bitterne" },
    ],
  },
  totton: {
    slug: "totton",
    name: "Totton, Southampton",
    postcodes: ["SO40"],
    meta: {
      title: "Bathroom Fitters Totton Southampton | UKB Bathrooms",
      description: "Local bathroom fitters in Totton, Southampton. Professional installation, renovation, and tiling services. Free quote. Call +44 7838 349520.",
      keywords: ["bathroom fitters Totton", "bathroom installation Totton", "bathroom renovation Totton", "bathroom fitter near me", "bathroom company Southampton"],
    },
    hero: {
      headline: "Bathroom Services in Totton, Southampton",
      subheadline: "Your local bathroom experts serving Totton and surrounding areas. Quality workmanship you can trust.",
    },
    housingSpeciality: {
      propertyTypes: "1970s housing estates, modern developments, and some character properties",
      plumbingChallenges: "Standardised 1970s layouts requiring creative solutions for modern bathroom design",
      localInsight: "Totton's suburban character means we specialise in family bathroom renovations and ensuites",
    },
    servicesOffered: [
      "Bathroom Installation",
      "Bathroom Renovation",
      "Wet Rooms",
      "Ensuite Installation",
      "Bathroom Design",
      "Bathroom Tiling",
    ],
    faqs: [
      {
        question: "Do you work in Totton, Southampton?",
        answer: "Yes, we regularly work in Totton covering the SO40 postcode area.",
      },
      {
        question: "Can you modernise 1970s bathrooms?",
        answer: "Yes, we specialise in modernising 1970s bathrooms with contemporary designs and improved functionality.",
      },
      {
        question: "Can you reconfigure standard layouts?",
        answer: "Yes, we can reconfigure standard layouts to better suit modern needs and preferences.",
      },
      {
        question: "Do you work on new builds in Totton?",
        answer: "Yes, we work on both renovations and new build installations in the Totton area.",
      },
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Areas Covered", href: "/areas-covered" },
      { label: "Totton", href: "/areas-covered/totton" },
    ],
  },
  eastleigh: {
    slug: "eastleigh",
    name: "Eastleigh, Hampshire",
    postcodes: ["SO50"],
    meta: {
      title: "Bathroom Fitters Eastleigh Hampshire | UKB Bathrooms",
      description: "Local bathroom fitters in Eastleigh, Hampshire. Professional installation, renovation, and tiling services. Free quote. Call +44 7838 349520.",
      keywords: ["bathroom fitters Eastleigh", "bathroom installation Eastleigh", "bathroom renovation Eastleigh", "bathroom fitter near me", "bathroom company Hampshire"],
    },
    hero: {
      headline: "Bathroom Services in Eastleigh, Hampshire",
      subheadline: "Your local bathroom experts serving Eastleigh and surrounding areas. Quality workmanship you can trust.",
    },
    housingSpeciality: {
      propertyTypes: "Mix of Victorian properties, post-war housing, and extensive new developments",
      plumbingChallenges: "Diverse housing stock requiring flexible approaches to plumbing and installation",
      localInsight: "Eastleigh's growth means we work on everything from period renovations to brand new installations",
    },
    servicesOffered: [
      "Bathroom Installation",
      "Bathroom Renovation",
      "Wet Rooms",
      "Ensuite Installation",
      "Bathroom Design",
      "Bathroom Tiling",
    ],
    faqs: [
      {
        question: "Do you work in Eastleigh, Hampshire?",
        answer: "Yes, we serve Eastleigh and the SO50 postcode area.",
      },
      {
        question: "Do you work on new developments in Eastleigh?",
        answer: "Yes, we work on many new build developments in Eastleigh, completing first installations and upgrades.",
      },
      {
        question: "Can you renovate period properties in Eastleigh?",
        answer: "Yes, we have experience renovating Victorian and Edwardian properties in the Eastleigh area.",
      },
      {
        question: "Do you offer complete house renovations?",
        answer: "Yes, we can handle multiple bathroom installations as part of complete property renovations.",
      },
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Areas Covered", href: "/areas-covered" },
      { label: "Eastleigh", href: "/areas-covered/eastleigh" },
    ],
  },
};
