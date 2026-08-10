'use client';

import React, { memo } from 'react';
import { Star, Heart } from 'lucide-react';

interface IArtistCardHeaderProps {
  displayImage: string;
  displayName: string;
  displayRating: number;
  isLiked: boolean;
  onLikeClick: (e: React.MouseEvent) => void;
}

const ArtistCardHeader: React.FC<IArtistCardHeaderProps> = ({
  displayImage,
  displayName,
  displayRating,
  isLiked,
  onLikeClick,
}) => {
  return (
    <div className="h-48 w-full overflow-hidden relative bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
      <img
        src={displayImage || 'https://images.unsplash.com/photo-1501499956600-12714873e5cc'}
        alt={displayName}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />

      <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 text-xs font-bold">
        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
        {displayRating}
      </div>

      <button
        onClick={onLikeClick}
        className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-red-500 flex items-center justify-center transition-all"
      >
        <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
      </button>
    </div>
  );
};

export default memo(ArtistCardHeader);