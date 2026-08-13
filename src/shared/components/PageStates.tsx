'use client';

import React from 'react';

export function PageLoadingState({
  message = 'در حال بارگذاری...',
}: {
  message?: string;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-[#2745d1] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate-500">{message}</p>
      </div>
    </div>
  );
}

export function PageErrorState({
  title = 'خطا در دریافت داده‌ها',
  onRetry,
}: {
  title?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-red-500 text-lg font-bold">{title}</p>
        <p className="text-slate-500 mt-2">لطفاً مجدداً تلاش کنید.</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-4 px-4 py-2 bg-[#2745d1] text-white rounded-lg hover:bg-[#1a34b0] transition-colors"
          >
            تلاش مجدد
          </button>
        )}
      </div>
    </div>
  );
}

export function PageEmptyState({ message }: { message: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-slate-500">{message}</p>
      </div>
    </div>
  );
}