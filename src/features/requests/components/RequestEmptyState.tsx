'use client';

import React, { memo } from 'react';
import { Inbox, Search, RefreshCw } from 'lucide-react';
import { IRequestEmptyStateProps } from '../types/requests.types';
import { REQUEST_LABELS } from '../constants/requests.constants';

const RequestEmptyState: React.FC<IRequestEmptyStateProps> = ({
  role,
  filterApplied,
  onResetFilters,
}) => {
  const labels = REQUEST_LABELS[role];

  return (
    <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200">
      <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
        {filterApplied ? (
          <Search className="w-8 h-8 text-slate-300" />
        ) : (
          <Inbox className="w-8 h-8 text-slate-300" />
        )}
      </div>
      <h3 className="text-lg font-bold text-slate-900">
        {filterApplied ? 'نتیجه‌ای یافت نشد' : labels.emptyTitle}
      </h3>
      <p className="text-sm text-slate-500 mt-1">
        {filterApplied ? (
          <>
            با تغییر فیلترها دوباره تلاش کنید.
            <button
              onClick={onResetFilters}
              className="mr-2 text-[#2745d1] font-medium hover:underline"
            >
              پاک کردن فیلترها
            </button>
          </>
        ) : (
          labels.emptyDescription
        )}
      </p>
      {filterApplied && (
        <button
          onClick={onResetFilters}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#2745d1] text-white rounded-xl text-sm font-medium hover:bg-[#1a34b0] transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          بازنشانی فیلترها
        </button>
      )}
    </div>
  );
};

export default memo(RequestEmptyState);