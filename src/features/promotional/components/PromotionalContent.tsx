// src/features/promotional/components/PromotionalContent.tsx
'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { IPromotionalContentProps } from '../types/promotional.types';
import PromotionalActions from './PromotionalActions';
import PromotionalFeatures from './PromotionalFeatures';

const PromotionalContent: React.FC<IPromotionalContentProps> = ({
  tagline,
  title,
  description,
  features,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Tagline */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2745d1] text-sm font-bold mb-6 border border-blue-100">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2745d1]" />
        </span>
        {tagline}
      </div>

      {/* Title */}
      <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
        تجربه‌ای متفاوت از <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#2745d1] to-blue-500">
          مدیریت رویدادهای هنری
        </span>
      </h2>

      {/* Description */}
      <p className="text-slate-600 text-lg leading-relaxed mb-8 border-r-4 border-orange-500 pr-4">
        {description}
      </p>

      {/* Features Grid */}
      <PromotionalFeatures features={features} />

      {/* Action Buttons */}
      <PromotionalActions
        primaryText={primaryButtonText}
        secondaryText={secondaryButtonText}
        onPrimaryClick={onPrimaryClick}
        onSecondaryClick={onSecondaryClick}
      />
    </motion.div>
  );
};

export default memo(PromotionalContent);