// src/features/booking/components/BookingHeader.tsx
'use client';

import React, { memo } from 'react';
import { Sparkles } from 'lucide-react';

interface IBookingHeaderProps {
  artistName?: string;
}

const BookingHeader: React.FC<IBookingHeaderProps> = ({ artistName }) => {
  return (
    <div className="px-6 md:px-8 py-2.5 flex items-center gap-2 bg-white/80 backdrop-blur-md border-b border-gray-100 shrink-0">
      <div className="w-8 h-8 bg-[#2745d1] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
        <Sparkles className="w-4 h-4 text-white" />
      </div>
      <div>
        <h1 className="text-base font-bold text-gray-900 tracking-tight">آفیش</h1>
        <p className="text-[9px] text-gray-500 font-medium">پلتفرم رزرو آنلاین</p>
      </div>
      {artistName && (
        <div className="mr-auto bg-blue-50 text-[#2745d1] text-xs px-3 py-1 rounded-full border border-blue-100 flex items-center gap-1">
          <span>🎯</span>
          {artistName}
        </div>
      )}
    </div>
  );
};

export default memo(BookingHeader);