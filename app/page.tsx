'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VideoModal from '@/components/VideoModal';
import OurProcess from '@/components/OurProcess';
import AboutServices from '@/components/AboutServices';
import Testimonial from '@/components/testinomial';
import Faq from '@/components/faq';
import Contact from '@/components/contact';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Update metadata for client component
  useEffect(() => {
    document.title = "UKB Bathrooms - Professional Bathroom Design & Installation Services in the UK";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Transform your bathroom with UKB Bathrooms. Expert bathroom design, supply, and installation services across the UK. Get a free quote for your dream bathroom renovation today.");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection onVideoOpen={() => setIsVideoModalOpen(true)} />
      <OurProcess />
      <AboutServices />
      <Testimonial />
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
