export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "UKB Bathrooms",
    "description": "Professional bathroom design, supply, and installation services in Southampton and surrounding areas",
    "url": "https://ukbbathrooms.co.uk",
    "telephone": "+44 7838 349520",
    "email": "info@ukbbathroom.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "51 Westfield Road",
      "addressLocality": "Southampton",
      "addressRegion": "Hampshire",
      "postalCode": "SO15 4HQ",
      "addressCountry": "GB"
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-18:00"
    ],
    "priceRange": "££",
    "areaServed": [
      "Southampton",
      "Shirley",
      "Portswood",
      "Woolston",
      "Bitterne",
      "Eastleigh",
      "Totton",
      "Hedge End",
      "Chandler's Ford",
      "Romsey"
    ],
    "serviceType": [
      "Bathroom Design",
      "Bathroom Installation",
      "Bathroom Renovation",
      "Bathroom Fitting",
      "Bathroom Plumbing",
      "Bathroom Tiling",
      "Wet Room Installation",
      "Ensuite Installation"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
