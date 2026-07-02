// src/features/booking/components/Step3AgeRange.tsx
'use client';

import React, { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { AGE_RANGES } from '../data/booking.data';

const Step3AgeRange: React.FC = () => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedAges: string[] = watch('ageRanges') || [];

  const toggleAgeRange = (value: string) => {
    const newAges = selectedAges.includes(value)
      ? selectedAges.filter((age) => age !== value)
      : [...selectedAges, value];
    setValue('ageRanges', newAges, { shouldValidate: true });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-4">
          رده‌های سنی (می‌توانید چند مورد انتخاب کنید){' '}
          <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {AGE_RANGES.map((age) => {
            const isSelected = selectedAges.includes(age.value);
            return (
              <motion.div
                key={age.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleAgeRange(age.value)}
                className={`relative cursor-pointer p-4 border-2 rounded-lg transition-all ${
                  isSelected
                    ? 'border-orange-500 bg-orange-50'
                    : errors.ageRanges
                    ? 'border-red-200 bg-white hover:border-orange-300'
                    : 'border-gray-300 bg-white hover:border-orange-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{age.icon}</div>
                  <p className="font-semibold text-gray-800">{age.label}</p>
                  <p className="text-sm text-gray-600 mt-1">{age.range}</p>
                </div>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 left-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center"
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
        {errors.ageRanges && (
          <p className="text-red-500 text-xs mt-2">{errors.ageRanges.message as string}</p>
        )}
      </div>

      {/* Selected Display */}
      {selectedAges.length > 0 && (
        <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
          <p className="text-sm text-green-800">
            <span className="font-semibold">انتخاب شده:</span>{' '}
            {selectedAges
              .map((val) => AGE_RANGES.find((a) => a.value === val)?.label)
              .join('، ')}
          </p>
        </div>
      )}
    </div>
  );
};

export default memo(Step3AgeRange);