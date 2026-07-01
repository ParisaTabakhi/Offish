'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star } from 'lucide-react';
import { IHeroContentProps } from '../types/hero.types';
import { HERO_CONFIG } from '../data/hero.constants';

// Extracted sub-components for better Single Responsibility
const Badge: React.FC = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2745d1] text-xs font-bold mb-4 border border-blue-200 w-fit">
    <Star className="w-3 h-3 fill-current" />
    <span>{HERO_CONFIG.badgeText}</span>
  </div>
);

const Title: React.FC = () => (
  <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.15] mb-6 tracking-tight">
    {HERO_CONFIG.title.main}{' '}
    <span className="text-[#2745d1] inline-block relative">
      {HERO_CONFIG.title.highlight}
      <svg className="absolute w-full h-3 -bottom-1 right-0 text-yellow-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
      </svg>
    </span>
    <br />
    ماندگار و خاص
  </h1>
);

const Description: React.FC = () => (
  <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
    {HERO_CONFIG.description}
  </p>
);

const LocationSelect: React.FC = () => (
  <div className="hidden md:flex items-center gap-2 px-4 border-r border-slate-100">
    <MapPin className="w-5 h-5 text-slate-400" />
    <select className="bg-transparent outline-none text-slate-600 text-sm font-medium cursor-pointer">
      {HERO_CONFIG.cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  </div>
);

const PopularTags: React.FC = () => (
  <div className="mt-8 flex items-center gap-4">
    <span className="text-slate-400 text-sm font-medium">پیشنهادهای محبوب:</span>
    <div className="flex flex-wrap gap-2">
      {HERO_CONFIG.popularTags.map((tag, idx) => (
        <button
          key={idx}
          className="px-3 py-1 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-[#2745d1] rounded-lg text-sm font-medium transition-colors border border-transparent hover:border-blue-100"
        >
          {tag}
        </button>
      ))}
    </div>
  </div>
);

// Main HeroContent component with memoization
const HeroContent: React.FC<IHeroContentProps> = memo(({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  isFocused,
  onFocusChange,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <Badge />
      <Title />
      <Description />

      <motion.form
        onSubmit={onSearchSubmit}
        className={`flex items-center bg-white border-2 ${isFocused ? 'border-[#2745d1] shadow-xl shadow-blue-600/10' : 'border-slate-100 shadow-lg shadow-slate-200/50'} rounded-2xl p-2 transition-all duration-300 max-w-2xl`}
      >
        <div className="flex-1 flex items-center gap-3 px-4">
          <Search className={`w-6 h-6 ${isFocused ? 'text-[#2745d1]' : 'text-slate-400'} transition-colors`} />
          <input
            type="text"
            placeholder={HERO_CONFIG.placeholder}
            className="w-full bg-transparent outline-none text-slate-700 placeholder-slate-400 text-lg font-medium h-12"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => onFocusChange(true)}
            onBlur={() => onFocusChange(false)}
          />
        </div>

        <LocationSelect />

        <button
          type="submit"
          className="bg-[#2745d1] hover:bg-[#1a34b0] text-white rounded-xl px-8 h-12 text-lg font-bold shadow-md transition-transform hover:scale-105 active:scale-95"
        >
          {HERO_CONFIG.searchButtonText}
        </button>
      </motion.form>

      <PopularTags />
    </motion.div>
  );
});

HeroContent.displayName = 'HeroContent';

export default HeroContent;