'use client';

import React, { useState, useMemo, memo } from 'react';
import { AnimatePresence } from 'framer-motion';
import ArtistCard from '../../../features/categories/components/ArtistCard';
import { artists as defaultArtists } from '../data/artists.data';
import { IArtistsGridProps } from '../types/artists-grid.types';
import ArtistsBackground from './ArtistsBackground';
import ArtistsHeader from './ArtistsHeader';
import ArtistsPagination from './ArtistsPagination';

const ITEMS_PER_PAGE = 6;

const ArtistsGrid: React.FC<IArtistsGridProps> = ({
  artists = defaultArtists,
  itemsPerPage = ITEMS_PER_PAGE,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(artists.length / itemsPerPage);

  const currentArtists = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return artists.slice(startIndex, startIndex + itemsPerPage);
  }, [artists, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      document.getElementById('artists-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchClick = () => {
    console.log('Search clicked');
  };

  return (
    <section
      id="artists-section"
      className="py-24 bg-[#f8faff] relative overflow-hidden"
    >
      <ArtistsBackground />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full">
        <ArtistsHeader
          title="هنرمندان"
          subtitle="برگزیده هفته"
          badgeText="استعدادهای برتر"
          onSearchClick={handleSearchClick}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-5">
          <AnimatePresence mode="wait">
            {currentArtists.map((artist, index) => (
              <ArtistCard
                key={`${artist.id}-${currentPage}`}
                artist={artist as any}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        <ArtistsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default memo(ArtistsGrid);