// src/features/booking/components/ProgressBar.tsx
'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { IProgressBarProps } from '../types/booking.types';

const ProgressBar: React.FC<IProgressBarProps> = ({
  progress,
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="w-full">
      {/* Progress Bar Track */}
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden w-full">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'circOut' }}
          className="h-full bg-[#2745d1] shadow-[0_0_10px_rgba(39,69,209,0.5)]"
        />
      </div>

      {/* Minimal Dots */}
      <div className="flex justify-between mt-2 px-1">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              i + 1 <= currentStep ? 'bg-[#2745d1]' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(ProgressBar);