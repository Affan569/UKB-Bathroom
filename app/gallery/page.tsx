import type { Metadata } from 'next';
import GalleryPageContent from './GalleryPageContent';

export const metadata: Metadata = {
  title: "Gallery | UKB Bathrooms - Bathroom Installation Projects",
  description: "Browse our bathroom installation gallery showcasing completed projects in Southampton. See the quality and craftsmanship of UKB Bathrooms' work.",
  openGraph: {
    title: "Gallery | UKB Bathrooms - Bathroom Installation Projects",
    description: "Browse our bathroom installation gallery showcasing completed projects in Southampton. See the quality and craftsmanship of UKB Bathrooms' work.",
    url: "https://ukbbathrooms.co.uk/gallery",
  },
  alternates: {
    canonical: "https://ukbbathrooms.co.uk/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
