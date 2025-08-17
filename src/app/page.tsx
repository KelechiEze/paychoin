'use client';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import InvestmentPlans from './components/InvestmentPlans';
import AboutSection from './components/AboutSection';
import CryptoSlider from './components/CryptoSlider';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <InvestmentPlans />
      <AboutSection />
      <CryptoSlider />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;