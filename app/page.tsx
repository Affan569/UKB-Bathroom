import type { Metadata } from 'next';
import HomePageContent from './HomePageContent';

export const metadata: Metadata = {
  title: 'Bathroom Fitters Southampton | UKB Bathrooms',
  description: 'Local bathroom fitters in Southampton. Bathroom installation, renovation, wet rooms and ensuites. Free quote. Call +44 7838 349520.',
  keywords: 'bathroom fitters Southampton, bathroom installation Southampton, bathroom renovation Southampton, bathroom company Southampton, bathroom fitter near me, new bathroom Southampton, bathroom refurbishment Southampton',
  openGraph: {
    title: 'Bathroom Fitters Southampton | UKB Bathrooms',
    description: 'Local bathroom fitters in Southampton. Bathroom installation, renovation, wet rooms and ensuites. Free quote. Call +44 7838 349520.',
    url: 'https://ukbbathrooms.co.uk',
  },
  alternates: {
    canonical: 'https://ukbbathrooms.co.uk',
  },
};

export default function Home() {
  return <HomePageContent />;
}
