'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VideoModal from '@/components/VideoModal';
import OurProcess from '@/components/OurProcess';
import AboutServices from '@/components/AboutServices';
// import Testimonial from '@/components/testinomial';
import Faq from '@/components/faq';
import Contact from '@/components/contact';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Update metadata for client component
  useEffect(() => {
    document.title = "Bathroom Fitters Southampton | UKB Bathrooms";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Local bathroom fitters in Southampton. Bathroom installation, renovation, wet rooms and ensuites. Free quote. Call +44 7838 349520.");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection onVideoOpen={() => setIsVideoModalOpen(true)} />
      <OurProcess />
      <AboutServices />
      {/* <Testimonial /> */}
      <Faq />
      <Contact />
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
      <BackToTop />
    </div>
  );
}
