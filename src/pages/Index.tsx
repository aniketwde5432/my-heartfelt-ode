
import React from 'react';
import HeroSection from '../components/HeroSection';
import AppreciationSection from '../components/AppreciationSection';
import MemoriesSection from '../components/MemoriesSection';
import PoemSection from '../components/PoemSection';
import ClosingSection from '../components/ClosingSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      <HeroSection />
      <AppreciationSection />
      <MemoriesSection />
      <PoemSection />
      <ClosingSection />
    </div>
  );
};

export default Index;
