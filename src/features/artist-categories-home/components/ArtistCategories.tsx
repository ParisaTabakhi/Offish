// src/features/artist-categories/components/ArtistCategories.tsx
'use client';

import React, { memo } from 'react';
import { IArtistCategoriesProps } from '../types/artist-categories.types';
import {
  PROFESSIONS,
  STATS,
  ARTIST_CATEGORIES_CONFIG,
} from '../data/artist-categories.config';
import CategoryCard from './CategoryCard';
import CategoriesHeader from './CategoriesHeader';
import CategoriesStats from './CategoriesStats';
import CtaCard from './CtaCard';

// ============================================
// BACKGROUND DECORATIONS
// ============================================

const BackgroundDecorations: React.FC = () => (
  <>
    <div className="absolute top-0 right-0 w-[500px] h-[500px]  bg-[#2745d1]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

    <svg
      className="absolute top-20 left-10 w-24 h-24 text-orange-200 animate-pulse"
      viewBox="0 0 100 100"
      fill="currentColor"
    >
      <circle cx="50" cy="50" r="40" />
    </svg>
    <svg
      className="absolute bottom-40 right-20 w-32 h-32 text-blue-100/50 rotate-45"
      viewBox="0 0 100 100"
      fill="currentColor"
    >
      <rect x="20" y="20" width="60" height="60" rx="10" />
    </svg>
  </>
);

// ============================================
// MAIN COMPONENT
// ============================================

const ArtistCategories: React.FC<IArtistCategoriesProps> = ({
  professions = PROFESSIONS,
  stats = STATS,
  tagline = ARTIST_CATEGORIES_CONFIG.tagline,
  title = ARTIST_CATEGORIES_CONFIG.title,
  description = ARTIST_CATEGORIES_CONFIG.description,
  ctaText = ARTIST_CATEGORIES_CONFIG.ctaText,
  className = '',
}) => {
  const handleSearchClick = () => {
    // TODO: Implement search functionality
    console.log('Search clicked');
  };

  const handleCtaClick = () => {
    // TODO: Implement CTA functionality
    console.log('CTA clicked');
  };

  return (
    <div style={{padding:'10%'}} >
    <div
      className={`relative  min-h-screen bg-[#fdfbf7] overflow-hidden selection:bg-[#f97316] selection:text-white ${className}`}
    >
      <BackgroundDecorations />

      <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10">
        {/* Header Section */}
        <CategoriesHeader
          tagline={tagline}
          title={title}
          description={description}
          rating={ARTIST_CATEGORIES_CONFIG.rating}
          ratingLabel={ARTIST_CATEGORIES_CONFIG.ratingLabel}
          onSearchClick={handleSearchClick}
        />

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5 max-w-7xl mx-auto auto-rows-[220px]">
          {professions.map((profession, index) => (
            <CategoryCard key={profession.id} profession={profession} index={index} />
          ))}

          {/* Creative CTA Block */}
          <CtaCard
            title={ARTIST_CATEGORIES_CONFIG.ctaBlockTitle}
            description={ARTIST_CATEGORIES_CONFIG.ctaBlockDescription}
            onClick={handleCtaClick}
          />
        </div>

        {/* Footer Stats */}
        <CategoriesStats stats={stats} />
      </div>
    </div>
    </div>
  );
};

export default memo(ArtistCategories);