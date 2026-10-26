import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreaTemplate from "@/components/AreaTemplate";
import { areasData } from "@/Data/areasData";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(areasData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = areasData[params.slug];
  if (!data) {
    return {
      title: "Area Not Found",
    };
  }

  return {
    title: data.meta.title,
    description: data.meta.description,
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      url: `https://ukbbathrooms.co.uk/areas-covered/${params.slug}`,
    },
    alternates: {
      canonical: `https://ukbbathrooms.co.uk/areas-covered/${params.slug}`,
    },
  };
}

export default function AreaPage({ params }: PageProps) {
  const data = areasData[params.slug];

  if (!data) {
    notFound();
  }

  return <AreaTemplate slug={params.slug} />;
}
