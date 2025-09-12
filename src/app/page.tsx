'use client';

import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import InvestmentPlans from './components/InvestmentPlans';
import AboutSection from './components/AboutSection';
import CryptoSlider from './components/CryptoSlider';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import CryptoLandSection from './components/CryptoLandSection'
import Footer from './components/Footer';
import Preloader from './components/Preloader';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader for 5-6 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500); // 5.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <InvestmentPlans />
      <AboutSection />
      <CryptoSlider />
      <CryptoLandSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
