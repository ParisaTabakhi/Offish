// src/features/booking/components/BookingProgress.tsx
'use client';

import React, { memo } from 'react';
import ProgressBar from './ProgressBar';

interface IBookingProgressProps {
  currentStep: number;
  totalSteps: number;
  progress: number;
}

const BookingProgress: React.FC<IBookingProgressProps> = ({
  currentStep,
  totalSteps,
  progress,
}) => {
  return (
    <div className="mb-3 shrink-0">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-semibold text-[#2745d1] bg-blue-50 px-2 py-0.5 rounded-full">
          مرحله {currentStep} از {totalSteps}
        </span>
        <span className="text-[10px] text-gray-400">{Math.round(progress)}% تکمیل شده</span>
      </div>
      <ProgressBar progress={progress} currentStep={currentStep} totalSteps={totalSteps} />
    </div>
  );
};

export default memo(BookingProgress);