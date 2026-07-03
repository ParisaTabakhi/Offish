// src/features/booking/components/Step4Guests.tsx
'use client';

import React, { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { Users, Minus, Plus } from 'lucide-react';

const Step4Guests: React.FC = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const guests = watch('numberOfGuests') || 50;

  const handleChange = (value: number | string) => {
    const numValue = typeof value === 'string' ? parseInt(value) || 0 : value;
    if (numValue >= 0) {
      setValue('numberOfGuests', numValue, { shouldValidate: true });
    }
  };

  const increment = () => handleChange(guests + 10);
  const decrement = () => {
    if (guests > 10) {
      handleChange(guests - 10);
    }
  };

  const getGuestMessage = (count: number): string => {
    if (count < 50) return '🎉 مناسب برای جشن‌های خانوادگی و دوستانه';
    if (count < 100) return '🎊 مناسب برای مهمانی‌های متوسط';
    if (count < 200) return '🎪 مناسب برای رویدادهای بزرگ';
    return '🏟️ مناسب برای رویدادهای بسیار بزرگ';
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-4">
          تعداد مهمانان <span className="text-red-500">*</span>
        </label>

        {/* Visual Counter */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            type="button"
            onClick={decrement}
            className="w-12 h-12 rounded-full border-2 border-[#274451] text-[#274451] hover:bg-[#274451] hover:text-white flex items-center justify-center transition-colors"
          >
            <Minus className="w-5 h-5" />
          </button>

          <div className="text-center">
            <div className="text-6xl font-bold text-[#274451]">{guests}</div>
            <p className="text-sm text-gray-600 mt-2">نفر</p>
          </div>

          <button
            type="button"
            onClick={increment}
            className="w-12 h-12 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white flex items-center justify-center transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Manual Input */}
        <div className="relative">
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Users className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="number"
            {...register('numberOfGuests')}
            min="1"
            placeholder="تعداد مهمانان را وارد کنید"
            className={`w-full pr-12 pl-4 py-3 border-2 rounded-lg focus:outline-none transition-colors text-right
              ${
                errors.numberOfGuests
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:border-orange-500'
              }
            `}
          />
        </div>
        {errors.numberOfGuests && (
          <p className="text-red-500 text-xs mt-1">{errors.numberOfGuests.message as string}</p>
        )}

        {/* Quick Select Buttons */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          {[20, 50, 100, 200].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => handleChange(num)}
              className={`py-2 border-2 rounded-lg transition-colors ${
                guests === num
                  ? 'border-orange-500 bg-orange-50 text-orange-700'
                  : 'border-gray-300 text-gray-700 hover:border-orange-300'
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Info Display */}
      {guests > 0 && (
        <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">{getGuestMessage(guests)}</p>
        </div>
      )}
    </div>
  );
};

export default memo(Step4Guests);