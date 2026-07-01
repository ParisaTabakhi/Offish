// src/features/artist-categories/components/CategoryBackground.tsx
'use client';

import React, { memo } from 'react';
import { IProfession } from '../types/artist-categories.types';

interface ICategoryBackgroundProps {
  profession: IProfession;
  isHovered: boolean;
}

const CategoryBackground: React.FC<ICategoryBackgroundProps> = ({
  profession,
  isHovered,
}) => {
  // Pattern Generators based on type
  const renderPattern = () => {
    switch (profession.pattern) {
      case 'circles':
        return (
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        );
      case 'dots':
        return (
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 bg-slate-900">
      {/* Background Image */}
      <div
        className="w-full h-full"
        style={{
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.6s ease-out',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1588966915d713-6d43603478e5"
          alt={profession.imageDesc}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
        />
      </div>

      {/* Dynamic Gradient Overlay */}
      <div
        className={`
          absolute inset-0 opacity-70 mix-blend-multiply transition-opacity duration-300
          ${profession.accent}
        `}
      />

      {/* Gradient Fade for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Pattern Overlay */}
      {renderPattern()}
    </div>
  );
};

export default memo(CategoryBackground);