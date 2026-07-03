// src/features/booking/components/BookingStepHeader.tsx
'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface IBookingStepHeaderProps {
  title: string;
  subtitle: string;
  artistName?: string;
  artistCategory?: string;
  preSelectedCategory?: string;
  currentStep: number;
}

const BookingStepHeader: React.FC<IBookingStepHeaderProps> = ({
  title,
  subtitle,
  artistName,
  artistCategory,
  preSelectedCategory,
  currentStep,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-3 shrink-0"
    >
      <h2 className="text-xl font-extrabold text-gray-900 mb-0.5">{title}</h2>
      <p className="text-xs text-gray-500">{subtitle}</p>

      {artistName && currentStep === 1 && (
        <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-xs text-green-700">
            ✅ درخواست رزرو برای <span className="font-bold">{artistName}</span> از دسته{' '}
            <span className="font-bold">{artistCategory}</span>
          </p>
        </div>
      )}

      {artistName && currentStep === 2 && preSelectedCategory && (
        <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-xs text-blue-700">
            🎯 دسته‌بندی <span className="font-bold">{artistCategory}</span> از قبل انتخاب شده است.
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default memo(BookingStepHeader);