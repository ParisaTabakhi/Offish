'use client';

import React, { memo } from 'react';
import { IArtist } from '../../../shared/services/artist/artist.types';
import ArtistCard from './ArtistCard';

interface IArtistGridProps {
  artists: IArtist[];
  isLoading?: boolean;
}

const ArtistGrid: React.FC<IArtistGridProps> = memo(({ artists, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-4 h-48 animate-pulse shadow-sm border border-slate-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-200" />
              <div className="flex-1">
                <div className="h-4 bg-slate-200 rounded w-3/4" />
                <div className="h-3 bg-slate-200 rounded w-1/2 mt-1" />
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-3 bg-slate-200 rounded w-full" />
              <div className="h-3 bg-slate-200 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!artists || artists.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
        <p className="text-slate-500">هیچ هنرمندی در این دسته‌بندی یافت نشد.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {artists.map((artist, index) => (
        <ArtistCard key={artist.id} artist={artist} index={index} />
      ))}
    </div>
  );
});

ArtistGrid.displayName = 'ArtistGrid';

export default ArtistGrid;