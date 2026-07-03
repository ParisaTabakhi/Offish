// src/features/booking/components/BookingNavigation.tsx
'use client';

import React, { memo } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface IBookingNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
}

const BookingNavigation: React.FC<IBookingNavigationProps> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
}) => {
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 shrink-0">
      <button
        onClick={onPrevious}
        disabled={currentStep === 1}
        className={`text-xs text-gray-500 hover:text-[#2745d1] hover:bg-blue-50 transition-all px-3 py-1.5 rounded-lg ${
          currentStep === 1 ? 'opacity-0 pointer-events-none' : ''
        }`}
      >
        <ArrowRight className="w-3.5 h-3.5 ml-1 inline" />
        مرحله قبل
      </button>

      <button
        onClick={onNext}
        className="bg-[#2745d1] hover:bg-[#1e3a8a] text-white px-5 py-2.5 text-xs rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all transform hover:-translate-y-0.5 flex items-center"
      >
        {isLastStep ? 'ثبت نهایی درخواست' : 'ادامه مراحل'}
        <ArrowLeft className="w-3.5 h-3.5 mr-1" />
      </button>
    </div>
  );
};

export default memo(BookingNavigation);