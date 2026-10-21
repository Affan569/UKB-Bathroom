export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "UKB Bathrooms",
    "description": "Professional bathroom design, supply, and installation services across the UK",
    "url": "https://ukbbathrooms.co.uk",
    "telephone": "+44XXXXXXXXXX",
    "email": "info@ukbbathrooms.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Your Street Address]",
      "addressLocality": "[Your City]",
      "addressRegion": "[Your Region]",
      "postalCode": "[Your Postcode]",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "[Your Latitude]",
      "longitude": "[Your Longitude]"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "££",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "[Your Latitude]",
        "longitude": "[Your Longitude]"
      },
      "geoRadius": "100000"
    },
    "serviceType": [
      "Bathroom Design",
      "Bathroom Installation",
      "Bathroom Renovation",
      "Bathroom Fitting",
      "Bathroom Plumbing",
      "Bathroom Tiling"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1000+"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
