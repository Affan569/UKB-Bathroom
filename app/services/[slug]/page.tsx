import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/ServiceTemplate";
import { servicesData } from "@/Data/servicesData";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = servicesData[params.slug];
  if (!data) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: data.meta.title,
    description: data.meta.description,
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      url: `https://ukbbathrooms.co.uk/services/${params.slug}`,
    },
    alternates: {
      canonical: `https://ukbbathrooms.co.uk/services/${params.slug}`,
    },
  };
}

export default function ServicePage({ params }: PageProps) {
  const data = servicesData[params.slug];

  if (!data) {
    notFound();
  }

  return <ServiceTemplate slug={params.slug} />;
}
