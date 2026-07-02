// src/features/booking/components/Step2Category.tsx
'use client';

import React, { useState, useEffect, memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { ChevronDown, Check } from 'lucide-react';
import { ARTIST_CATEGORIES } from '../data/booking.data';

const Step2Category: React.FC = () => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedCategory = watch('category');
  const selectedSubcategory = watch('subcategory');
  const [subcategories, setSubcategories] = useState<
    { value: string; label: string }[]
  >([]);

  useEffect(() => {
    if (selectedCategory) {
      const category = ARTIST_CATEGORIES.find((c) => c.value === selectedCategory);
      setSubcategories(category ? category.subcategories : []);
    } else {
      setSubcategories([]);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (value: string) => {
    setValue('category', value, { shouldValidate: true });
    setValue('subcategory', '', { shouldValidate: true });
  };

  const handleSubcategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue('subcategory', e.target.value, { shouldValidate: true });
  };

  return (
    <div className="space-y-8">
      {/* Category Selection as Cards */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-4">
          انتخاب دسته‌بندی <span className="text-[#ff6b35]">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {ARTIST_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.value;
            return (
              <div
                key={category.value}
                onClick={() => handleCategoryChange(category.value)}
                className={`
                  relative cursor-pointer rounded-xl p-4 border-2 transition-all duration-200 text-center
                  ${
                    isSelected
                      ? 'border-[#2745d1] bg-blue-50/50 shadow-md shadow-blue-100'
                      : 'border-gray-100 bg-white hover:border-gray-300 hover:shadow-sm'
                  }
                  ${errors.category && !isSelected ? 'border-red-200' : ''}
                `}
              >
                {isSelected && (
                  <div className="absolute top-2 left-2 bg-[#2745d1] rounded-full p-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
                <div className="font-bold text-gray-800 mb-1">{category.label}</div>
                <div className="text-xs text-gray-400">
                  {category.subcategories.length} زیرمجموعه
                </div>
              </div>
            );
          })}
        </div>
        {errors.category && (
          <p className="text-red-500 text-xs mt-2">{errors.category.message as string}</p>
        )}
      </div>

      {/* Subcategory Selection */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          subcategories.length > 0
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {subcategories.length > 0 && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              نوع دقیق خدمت <span className="text-[#ff6b35]">*</span>
            </label>
            <div className="relative">
              <select
                value={selectedSubcategory || ''}
                onChange={handleSubcategoryChange}
                className={`w-full px-4 py-4 pr-4 pl-12 border rounded-xl focus:ring-4 focus:ring-blue-50 focus:outline-none transition-colors appearance-none text-right bg-white shadow-sm text-gray-800
                  ${
                    errors.subcategory
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:border-[#2745d1]'
                  }
                `}
              >
                <option value="">لطفا انتخاب کنید...</option>
                {subcategories.map((sub) => (
                  <option key={sub.value} value={sub.value}>
                    {sub.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            {errors.subcategory && (
              <p className="text-red-500 text-xs mt-1">
                {errors.subcategory.message as string}
              </p>
            )}

            <p className="text-xs text-gray-400 mt-2 pr-1">
              با انتخاب این گزینه، لیست متخصصین مربوطه به شما نمایش داده خواهد شد.
            </p>
          </div>
        )}
      </div>

      {/* Summary Box */}
      {selectedCategory && selectedSubcategory && (
        <div className="mt-4 p-4 border border-dashed border-[#2745d1]/30 bg-blue-50/30 rounded-lg flex items-center justify-between">
          <span className="text-sm text-gray-600">انتخاب نهایی شما:</span>
          <span className="text-sm font-bold text-[#2745d1]">
            {ARTIST_CATEGORIES.find((c) => c.value === selectedCategory)?.label}
            {' / '}
            {subcategories.find((s) => s.value === selectedSubcategory)?.label}
          </span>
        </div>
      )}
    </div>
  );
};

export default memo(Step2Category);