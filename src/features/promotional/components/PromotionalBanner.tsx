// src/features/promotional/components/PromotionalBanner.tsx
'use client';

import React, { memo } from 'react';
import { IPromotionalBannerProps } from '../types/promotional.types';
import { FEATURES, PROMOTIONAL_CONFIG } from '../data/promotional.config';
import PromotionalImage from './PromotionalImage';
import PromotionalContent from './PromotionalContent';

// ============================================
// BACKGROUND DECORATIONS
// ============================================

const BackgroundDecorations: React.FC = () => (
  <>
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: 'radial-gradient(#2745d1 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />
  </>
);

// ============================================
// MAIN COMPONENT
// ============================================

const PromotionalBanner: React.FC<IPromotionalBannerProps> = ({
  title = PROMOTIONAL_CONFIG.title,
  tagline = PROMOTIONAL_CONFIG.tagline,
  description = PROMOTIONAL_CONFIG.description,
  imageSrc = PROMOTIONAL_CONFIG.imageSrc,
  imageAlt = PROMOTIONAL_CONFIG.imageAlt,
  features = FEATURES,
  primaryButtonText = PROMOTIONAL_CONFIG.primaryButtonText,
  secondaryButtonText = PROMOTIONAL_CONFIG.secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  className = '',
}) => {
  return (
    <section
      className={`relative mx-[10%] py-20 lg:py-32 overflow-hidden bg-white ${className}`}
    >
      <BackgroundDecorations />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Section - Right in RTL */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-1">
            <PromotionalImage src={imageSrc} alt={imageAlt} />
          </div>

          {/* Content Section - Left in RTL */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2">
            <PromotionalContent
              tagline={tagline}
              title={title}
              description={description}
              features={features}
              primaryButtonText={primaryButtonText}
              secondaryButtonText={secondaryButtonText}
              onPrimaryClick={onPrimaryClick}
              onSecondaryClick={onSecondaryClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(PromotionalBanner);