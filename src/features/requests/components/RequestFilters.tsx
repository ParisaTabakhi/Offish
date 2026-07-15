'use client';

import React, { memo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { cn } from '../../../shared/lib/cn';
import { IRequestFiltersProps } from '../types/requests.types';
import { STATUS_OPTIONS, SORT_OPTIONS } from '../constants/requests.constants';

const RequestFilters: React.FC<IRequestFiltersProps> = ({
  filters,
  onFilterChange,
  statusCounts,
}) => {
  const handleStatusChange = (status: string) => {
    onFilterChange({ ...filters, status: status as any });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, sortBy: e.target.value as any });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handleClearSearch = () => {
    onFilterChange({ ...filters, search: '' });
  };

  const hasActiveFilters = filters.status !== 'all' || filters.search !== '';

  return (
    <div className="space-y-4">
      {/* Status Tabs */}
      <div className="flex flex-wrap gap-2">
        {STATUS_OPTIONS.map((option) => {
          const count = statusCounts[option.value as keyof typeof statusCounts] || 0;
          const isActive = filters.status === option.value;

          return (
            <button
              key={option.value}
              onClick={() => handleStatusChange(option.value)}
              className={cn(
                'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-[#2745d1] text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
              )}
            >
              {option.label}
              {count > 0 && (
                <span
                  className={cn(
                    'mr-1.5 text-xs px-1.5 py-0.5 rounded-full',
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  )}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Search & Sort */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="جستجو در درخواست‌ها..."
            value={filters.search}
            onChange={handleSearchChange}
            className="w-full pr-10 pl-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2745d1]/20 focus:border-[#2745d1] transition-all"
          />
          {filters.search && (
            <button
              onClick={handleClearSearch}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <select
          value={filters.sortBy}
          onChange={handleSortChange}
          className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2745d1]/20 focus:border-[#2745d1] transition-all appearance-none"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {hasActiveFilters && (
          <button
            onClick={() => onFilterChange({ status: 'all', search: '', sortBy: 'newest' })}
            className="px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl transition-colors"
          >
            پاک کردن فیلترها
          </button>
        )}
      </div>
    </div>
  );
};

export default memo(RequestFilters);