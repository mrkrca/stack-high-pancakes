
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import LocationSection from '../components/LocationSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MenuSection />
      <AboutSection />
      <LocationSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
