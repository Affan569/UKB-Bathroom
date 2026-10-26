import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/ServiceTemplate";
import { servicesData } from "@/Data/servicesData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = servicesData[slug];
  if (!data) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords.join(", "),
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      url: `https://ukbbathrooms.co.uk/services/${slug}`,
    },
    alternates: {
      canonical: `https://ukbbathrooms.co.uk/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const data = servicesData[slug];

  if (!data) {
    notFound();
  }

  return <ServiceTemplate slug={slug} />;
}
