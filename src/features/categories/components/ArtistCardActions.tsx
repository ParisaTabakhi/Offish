'use client';

import React, { memo } from 'react';
import { ChevronLeft } from 'lucide-react';

interface IArtistCardActionsProps {
  onBookClick: (e: React.MouseEvent) => void;
}

const ArtistCardActions: React.FC<IArtistCardActionsProps> = ({ onBookClick }) => {
  return (
    <div className="mt-6">
      <button
        onClick={onBookClick}
        className="w-full h-12 bg-[#2745d1] hover:bg-[#4261f5] text-white rounded-xl shadow-lg transition-all flex items-center justify-between px-5 relative overflow-hidden"
      >
        <span className="font-bold relative z-10">مشاهده و رزرو</span>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center relative z-10">
          <ChevronLeft className="w-5 h-5" />
        </div>
        <div className="absolute inset-0 bg-[#4261f5] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default memo(ArtistCardActions);