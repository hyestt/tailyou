import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { CallToAction } from '../components/CallToAction';
import { PetMemorialGallery } from '../components/PetMemorialGallery';
export function HomePage() {
  return <div className="relative">
      {/* Rainbow top border */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-pink-400 via-yellow-300 via-green-300 via-blue-300 to-purple-400"></div>
      <Hero />
      <Features />
      <PetMemorialGallery />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </div>;
}