interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: string;
  areaServed: string[];
}

export default function ServiceSchema({ name, description, provider, areaServed }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": provider,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "51 Westfield Road",
        "addressLocality": "Southampton",
        "addressRegion": "Hampshire",
        "postalCode": "SO15 4HQ",
        "addressCountry": "GB"
      },
      "telephone": "+44 7838 349520",
      "email": "info@ukbbathroom.co.uk"
    },
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
