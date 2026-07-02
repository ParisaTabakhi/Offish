// src/features/categories/components/FilterBar.tsx
'use client';

import React, { memo, useState } from 'react';
import { Filter, MapPin, Wallet, SortAsc, Award, X, CheckCircle2 } from 'lucide-react';
import { cn } from '../../../shared/lib/cn';
import FilterDropdown from './FilterDropdown';
import { IFilterBarProps } from '../types/categories.types';

const FilterBar: React.FC<IFilterBarProps> = ({
  filters,
  onFilterChange,
  onReset,
  cities,
  activeFiltersCount,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Dropdown options
  const cityOptions = [
    { id: 'all', label: 'همه شهرها' },
    ...cities.map(city => ({ id: city, label: city })),
  ];

  const priceOptions = [
    { id: 'all', label: 'همه قیمت‌ها' },
    { id: 'fixed', label: 'قیمت ثابت' },
    { id: 'negotiable', label: 'توافقی' },
  ];

  const sortOptions = [
    { id: 'default', label: 'پیش‌فرض (پیشنهادی)' },
    { id: 'price-asc', label: 'ارزان‌ترین' },
    { id: 'price-desc', label: 'گران‌ترین' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 flex flex-wrap items-center gap-2 relative z-20">
      <div className="flex items-center gap-2 px-3 py-2 text-gray-500 text-sm font-bold border-l border-gray-100 ml-1">
        <Filter className="w-4 h-4" />
        <span className="hidden sm:inline">فیلترها:</span>
      </div>

      {/* City Filter */}
      <FilterDropdown
        label="همه شهرها"
        icon={MapPin}
        options={cityOptions}
        selectedValue={filters.city}
        onSelect={(value) => onFilterChange('city', value)}
        isOpen={activeDropdown === 'city'}
        onToggle={() => toggleDropdown('city')}
        active={filters.city !== 'all'}
      />

      {/* Price Filter */}
      <FilterDropdown
        label="همه قیمت‌ها"
        icon={Wallet}
        options={priceOptions}
        selectedValue={filters.priceType}
        onSelect={(value) => onFilterChange('priceType', value)}
        isOpen={activeDropdown === 'price'}
        onToggle={() => toggleDropdown('price')}
        active={filters.priceType !== 'all'}
      />

      {/* Sort Filter */}
      <FilterDropdown
        label="مرتب‌سازی"
        icon={SortAsc}
        options={sortOptions}
        selectedValue={filters.sortOrder}
        onSelect={(value) => onFilterChange('sortOrder', value)}
        isOpen={activeDropdown === 'sort'}
        onToggle={() => toggleDropdown('sort')}
        active={filters.sortOrder !== 'default'}
      />

      {/* Verification Toggle */}
      <button
        onClick={() => onFilterChange('verified', !filters.verified)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors border",
          filters.verified
            ? "bg-green-50 text-green-700 border-green-200"
            : "bg-gray-50 text-gray-700 border-transparent hover:bg-gray-100"
        )}
      >
        <Award className="w-4 h-4" />
        <span>تایید شده</span>
        {filters.verified && <CheckCircle2 className="w-3 h-3 text-green-600" />}
      </button>

      {/* Reset Filters */}
      {activeFiltersCount > 0 && (
        <button
          onClick={onReset}
          className="flex items-center gap-1 px-3 py-2 text-xs text-red-500 hover:bg-red-50 rounded-lg ml-auto transition-colors"
        >
          <X className="w-3 h-3" />
          پاک کردن فیلترها
        </button>
      )}
    </div>
  );
};

export default memo(FilterBar);