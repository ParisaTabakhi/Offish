// src/features/categories/components/ArtistGrid.tsx
'use client';

import React, { memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import ArtistCard from './ArtistCard';
import { IArtistGridProps } from '../types/categories.types';

const ArtistGrid: React.FC<IArtistGridProps> = ({ artists, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-2xl h-96 animate-pulse">
            <div className="h-48 bg-gray-200 rounded-t-2xl" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-1/2" />
              <div className="h-3 bg-gray-200 rounded w-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`grid-${artists.length}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {artists.length > 0 ? (
          artists.map((artist, index) => (
            <ArtistCard key={artist.id} artist={artist} index={index} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">نتیجه‌ای یافت نشد</h3>
            <p className="text-gray-500">با تغییر فیلترها دوباره تلاش کنید.</p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default memo(ArtistGrid);