
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import UserCategoriesSection from '@/components/UserCategoriesSection';
import ProcessSection from '@/components/ProcessSection';
import EmployerSection from '@/components/EmployerSection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <UserCategoriesSection />
      <ProcessSection />
      <EmployerSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
