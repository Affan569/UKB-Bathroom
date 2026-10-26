import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreaTemplate from "@/components/AreaTemplate";
import { areasData } from "@/Data/areasData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(areasData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = areasData[slug];
  if (!data) {
    return {
      title: "Area Not Found",
    };
  }

  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords.join(", "),
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      url: `https://ukbbathrooms.co.uk/areas-covered/${slug}`,
    },
    alternates: {
      canonical: `https://ukbbathrooms.co.uk/areas-covered/${slug}`,
    },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const data = areasData[slug];

  if (!data) {
    notFound();
  }

  return <AreaTemplate slug={slug} />;
}
