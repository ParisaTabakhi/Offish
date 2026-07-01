'use client';

import React, { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../../../shared/hooks/use-toast';
import { useHeroSearch } from '../hooks/useHeroSearch';
import HeroContent from './HeroContent';
import HeroGallery from './HeroGallery';
import Categories from './Categories';

// Extracted decorative elements
const BackgroundBlobs: React.FC = memo(() => (
  <>
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2745d1]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    
    <motion.div
      animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-20 left-[45%] w-16 h-16 border-4 border-orange-200 rounded-2xl rotate-12 z-0 hidden lg:block"
    />
    <motion.div
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute bottom-20 right-[10%] w-24 h-24 bg-blue-100 rounded-full blur-xl z-0"
    />
  </>
));

const HeroShowcase: React.FC = memo(() => {
  const { toast } = useToast();

  const {
    searchQuery,
    setSearchQuery,
    isFocused,
    setIsFocused,
    handleSearchSubmit,
  } = useHeroSearch(useCallback((query: string) => {
    toast({
      title: "جستجو",
      description: `🚧 جستجو برای "${query}" در حال پیاده‌سازی است! 🚀`,
    });
  }, [toast]));

  const handleCategoryClick = useCallback((categoryName: string) => {
    toast({
      title: categoryName,
      description: "🚧 کاوش در این دسته‌بندی به‌زودی امکان‌پذیر خواهد شد! 🚀",
    });
  }, [toast]);

  return (
    <div className="relative min-h-[90vh] bg-[#fdfbf7] overflow-hidden flex items-center py-12 lg:py-0">
      <BackgroundBlobs />

      <div className="w-full mx-[10%] p-4 h-full relative z-10">
        <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-start">
          
          {/* Right Side - Content */}
          <div className="w-full lg:w-7/12 flex my-9 flex-col justify-center h-full pt-10 lg:pt-0">
            <HeroContent
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSearchSubmit={handleSearchSubmit}
              isFocused={isFocused}
              onFocusChange={setIsFocused}
            />

            <Categories onCategoryClick={handleCategoryClick} />
          </div>

          {/* Left Side - Gallery */}
          <div className="w-full lg:h-screen lg:w-5/12 h-full flex items-center relative mt-0">
            <HeroGallery />
          </div>
        </div>
      </div>
    </div>
  );
});

HeroShowcase.displayName = 'HeroShowcase';

export default HeroShowcase;