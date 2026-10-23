'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VideoModal from '@/components/VideoModal';
import OurProcess from '@/components/OurProcess';
import AboutServices from '@/components/AboutServices';
// import Testimonial from '@/components/testinomial';
import Faq from '@/components/faq';
import Contact from '@/components/contact';
import BackToTop from '@/components/BackToTop';

export default function HomePageContent() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
