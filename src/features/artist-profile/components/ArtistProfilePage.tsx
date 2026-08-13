'use client';

import React, { memo } from 'react';
import { notFound } from 'next/navigation';
import ArtistHeader from './ArtistHeader';
import PortfolioGallery from './PortfolioGallery';
import ReviewsSection from './ReviewsSection';
import BookingSection from './BookingSection';
import BookingSidebar from './BookingSidebar';
import { useArtistData } from '../hooks/useArtistData';

interface IArtistProfilePageProps {
  artistId: string;
}

const ArtistProfilePage: React.FC<IArtistProfilePageProps> = ({ artistId }) => {
  const { profile: artist, isLoading, isError } = useArtistData(artistId);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#2745d1] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-500">در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg font-bold">خطا در دریافت اطلاعات هنرمند</p>
          <p className="text-slate-500 mt-2">لطفاً مجدداً تلاش کنید.</p>
        </div>
      </div>
    );
  }


  if (!artist) {
    console.log('🚫 هنرمند پیدا نشد، نمایش 404');
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-12">
      <main className="max-w-5xl mx-auto pt-24 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Content Column */}
          <div className="lg:col-span-8 space-y-6">
            <ArtistHeader artist={artist} />
            <PortfolioGallery portfolio={artist.portfolio} />
            <BookingSection artist={artist} />
            <ReviewsSection
              reviews={artist.reviews}
              rating={artist.rating}
              totalReviews={artist.totalReviews}
            />
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 hidden lg:block">
            <BookingSidebar artist={artist} />
          </div>
        </div>
      </main>

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 lg:hidden z-50 flex items-center gap-3">
        <button
          onClick={() => {
            const params = new URLSearchParams({
              artistId: artist.id,
              artistName: artist.name,
              category: artist.category,
            });
            window.location.href = `/booking?${params.toString()}`;
          }}
          className="flex-1 bg-[#2745d1] text-white font-bold py-3 rounded-xl shadow-lg"
        >
          درخواست رزرو
        </button>
        <div className="flex flex-col items-end text-xs text-slate-600">
          <span>شروع از</span>
          <span className="font-bold text-slate-900">
            {artist.pricing.hourlyRate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(ArtistProfilePage);