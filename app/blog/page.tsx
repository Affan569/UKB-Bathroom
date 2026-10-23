import type { Metadata } from 'next';
import BlogPageContent from './BlogPageContent';

export const metadata: Metadata = {
  title: 'Blog | UKB Bathrooms - Bathroom Design Tips & Inspiration',
  description: 'Discover expert bathroom design tips, installation guides, and inspiration from UKB Bathrooms. Learn about modern bathroom trends, maintenance advice, and renovation ideas for Southampton homes.',
  openGraph: {
    title: 'Blog | UKB Bathrooms - Bathroom Design Tips & Inspiration',
    description: 'Expert bathroom design tips, installation guides, and inspiration from UKB Bathrooms.',
    url: 'https://ukbbathrooms.co.uk/blog',
  },
  alternates: {
    canonical: 'https://ukbbathrooms.co.uk/blog',
  },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
