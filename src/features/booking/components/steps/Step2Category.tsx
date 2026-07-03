// src/features/booking/components/steps/Step2Category.tsx
'use client';

import React, { useState, useEffect, memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { ChevronDown, Check, Lock } from 'lucide-react';
import { ARTIST_CATEGORIES, FORM_CATEGORY_LABELS } from '../../data/booking.data';

interface IStep2CategoryProps {
  preSelectedCategory?: string;
}

const Step2Category: React.FC<IStep2CategoryProps> = ({ preSelectedCategory }) => {
  const { setValue, watch, formState: { errors } } = useFormContext();
  const selectedCategory = watch('category');
  const selectedSubcategory = watch('subcategory');
  const [subcategories, setSubcategories] = useState<{ value: string; label: string }[]>([]);
  const isPreSelected = !!preSelectedCategory;

  // Set pre-selected category
  useEffect(() => {
    if (preSelectedCategory) {
      setValue('category', preSelectedCategory, { shouldValidate: true });
    }
  }, [preSelectedCategory, setValue]);

  // Update subcategories when category changes
  useEffect(() => {
    const category = ARTIST_CATEGORIES.find((c) => c.value === selectedCategory);
    setSubcategories(category ? category.subcategories : []);
  }, [selectedCategory]);

  const handleCategoryChange = (value: string) => {
    if (isPreSelected) return;
    setValue('category', value, { shouldValidate: true });
    setValue('subcategory', '', { shouldValidate: true });
  };

  const selectedLabel = selectedCategory ? FORM_CATEGORY_LABELS[selectedCategory] : '';

  return (
    <div className="space-y-8">
      {/* Category Cards */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-4">
          انتخاب دسته‌بندی <span className="text-[#ff6b35]">*</span>
          {isPreSelected && (
            <span className="text-xs text-green-600 mr-2 font-normal">
              (✅ انتخاب شده از پروفایل)
            </span>
          )}
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {ARTIST_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.value;
            const isDisabled = isPreSelected && !isSelected;

            return (
              <CategoryCard
                key={category.value}
                category={category}
                isSelected={isSelected}
                isDisabled={isDisabled}
                onClick={() => handleCategoryChange(category.value)}
              />
            );
          })}
        </div>
        {errors.category && (
          <p className="text-red-500 text-xs mt-2">{errors.category.message as string}</p>
        )}
      </div>

      {/* Subcategory Selection */}
      {subcategories.length > 0 && (
        <SubcategorySelect
          subcategories={subcategories}
          selectedValue={selectedSubcategory}
          onChange={(e) => setValue('subcategory', e.target.value, { shouldValidate: true })}
          error={errors.subcategory?.message as string}
        />
      )}

      {/* Summary */}
      {selectedCategory && selectedSubcategory && (
        <SelectionSummary
          categoryLabel={selectedLabel}
          subcategoryLabel={subcategories.find((s) => s.value === selectedSubcategory)?.label}
        />
      )}
    </div>
  );
};

export default memo(Step2Category);

// ============================================
// Sub-components
// ============================================

interface ICategoryCardProps {
  category: { value: string; label: string; subcategories: { value: string; label: string }[] };
  isSelected: boolean;
  isDisabled: boolean;
  onClick: () => void;
}

const CategoryCard: React.FC<ICategoryCardProps> = ({
  category,
  isSelected,
  isDisabled,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`
      relative cursor-pointer rounded-xl p-4 border-2 transition-all duration-200 text-center
      ${isSelected ? 'border-[#2745d1] bg-blue-50/50 shadow-md shadow-blue-100' : ''}
      ${isDisabled ? 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed' : ''}
      ${!isSelected && !isDisabled ? 'border-gray-100 bg-white hover:border-gray-300 hover:shadow-sm' : ''}
    `}
  >
    {isSelected && <CheckBadge />}
    {isDisabled && <LockBadge />}
    <div className={`font-bold ${isSelected ? 'text-[#2745d1]' : isDisabled ? 'text-gray-400' : 'text-gray-800'} mb-1`}>
      {category.label}
    </div>
    <div className={`text-xs ${isDisabled ? 'text-gray-400' : 'text-gray-400'}`}>
      {category.subcategories.length} زیرمجموعه
    </div>
    {isDisabled && <div className="mt-2 text-[10px] text-gray-400">غیرقابل انتخاب</div>}
  </div>
);

const CheckBadge: React.FC = () => (
  <div className="absolute top-2 left-2 bg-[#2745d1] rounded-full p-0.5">
    <Check className="w-3 h-3 text-white" />
  </div>
);

const LockBadge: React.FC = () => (
  <div className="absolute top-2 left-2 bg-gray-400 rounded-full p-0.5">
    <Lock className="w-3 h-3 text-white" />
  </div>
);

interface ISubcategorySelectProps {
  subcategories: { value: string; label: string }[];
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const SubcategorySelect: React.FC<ISubcategorySelectProps> = ({
  subcategories,
  selectedValue,
  onChange,
  error,
}) => (
  <div className="transition-all duration-500 ease-in-out opacity-100 translate-y-0">
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      نوع دقیق خدمت <span className="text-[#ff6b35]">*</span>
    </label>
    <div className="relative">
      <select
        value={selectedValue || ''}
        onChange={onChange}
        className={`w-full px-4 py-4 pr-4 pl-12 border rounded-xl focus:ring-4 focus:ring-blue-50 focus:outline-none transition-colors appearance-none text-right bg-white shadow-sm text-gray-800
          ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#2745d1]'}
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
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    <p className="text-xs text-gray-400 mt-2 pr-1">
      با انتخاب این گزینه، لیست متخصصین مربوطه به شما نمایش داده خواهد شد.
    </p>
  </div>
);

interface ISelectionSummaryProps {
  categoryLabel: string;
  subcategoryLabel?: string;
}

const SelectionSummary: React.FC<ISelectionSummaryProps> = ({
  categoryLabel,
  subcategoryLabel,
}) => (
  <div className="mt-4 p-4 border border-dashed border-[#2745d1]/30 bg-blue-50/30 rounded-lg flex items-center justify-between">
    <span className="text-sm text-gray-600">انتخاب نهایی شما:</span>
    <span className="text-sm font-bold text-[#2745d1]">
      {categoryLabel} {subcategoryLabel && `/ ${subcategoryLabel}`}
    </span>
  </div>
);