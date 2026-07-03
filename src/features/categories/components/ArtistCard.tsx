'use client';

import React, { memo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Star,
  MapPin,
  Check,
  Briefcase,
  ChevronLeft,
  Heart,
  Zap,
} from 'lucide-react';
import { useToast } from '../../../shared/hooks/use-toast';
import {IArtistCardData} from '../types/categories.types'


interface IArtistCardProps {
  artist: IArtistCardData;
  index: number;
}

const ArtistCard: React.FC<IArtistCardProps> = ({ artist, index }) => {
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);
  const displayName = artist.name || '';
  const displayCategory = artist.category || artist.specialty || '';
  const displayCity = artist.city || (artist.location?.split('،')[0] ?? '');
  const displayRating = artist.rating || 0;
  const displayImage = artist.image || artist.profileImage || '';
  const displayCover = artist.cover || artist.coverImage || '';
  const displayPrice = artist.price || '';
  const displayProjects = artist.projects ?? 0;
  const displayVerified = artist.isVerified ?? artist.verified ?? false;
  const displayDescription = artist.description || artist.bio || '';
  const displayExperience = artist.experience || '';

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: 'درخواست رزرو ثبت شد',
      description: `درخواست شما برای ${displayName} ارسال شد.`,
      duration: 3000,
    });
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Link href={`/artist/${artist.id}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          type: 'spring',
          stiffness: 50,
        }}
        viewport={{ once: true }}
        className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl
          hover:shadow-[0_20px_40px_-15px_rgba(66,97,245,0.2)]
          hover:-translate-y-2 transition-all duration-500
          border border-slate-100 flex flex-col h-full cursor-pointer"
      >
        {/* Cover */}
        <div className="h-48 w-full overflow-hidden relative bg-slate-50">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
          <img
            src={displayCover || 'https://images.unsplash.com/photo-1501499956600-12714873e5cc'}
            alt={displayName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 text-xs font-bold">
            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
            {displayRating}
          </div>

          <button
            onClick={handleLikeClick}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-red-500 flex items-center justify-center transition-all"
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 flex-grow flex flex-col relative">
          <div className="absolute -top-6 right-6 left-6 z-20 flex justify-between">
            <div className="relative">
              <div
                className={`w-20 h-20 rounded-2xl p-1 bg-white shadow-lg ${
                  displayVerified ? 'ring-2 ring-[#4261f5] ring-offset-2' : ''
                }`}
              >
                <img
                  src={displayImage || 'https://images.unsplash.com/photo-1527980965255-d3b416303d12'}
                  alt={displayName}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {displayVerified && (
                <div className="absolute -bottom-2 -right-2 bg-[#4261f5] text-white p-1 rounded-full border-[3px] border-white">
                  <Check className="w-3 h-3" strokeWidth={4} />
                </div>
              )}
            </div>

            <div className="bg-white shadow-md px-3 py-1.5 rounded-xl border max-h-[50px] flex flex-col items-right">
              <span className="text-[10px] text-slate-400 font-bold">شروع قیمت</span>
              <span className="text-sm font-black text-[#4261f5]">
                {displayPrice.split(' ')[2] || displayPrice.split('/')[0] || displayPrice}
              </span>
            </div>
          </div>

          <div className="mt-16 space-y-4 flex-grow">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-black text-slate-800 group-hover:text-[#4261f5] transition-colors">
                  {displayName}
                </h3>

                {displayRating >= 4.9 && (
                  <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-yellow-700" />
                    منتخب
                  </span>
                )}
              </div>

              <p className="text-sm font-medium text-slate-500 mt-1">
                {displayCategory}
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-7 line-clamp-2 border-l-2 border-slate-100 pl-3">
              {displayDescription}
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 rounded-xl p-2.5 flex items-center gap-2.5 border">
                <MapPin className="w-4 h-4 text-[#4261f5]" />
                <span className="text-xs font-bold text-slate-700">
                  {displayCity}
                </span>
              </div>

              <div className="bg-slate-50 rounded-xl p-2.5 flex items-center gap-2.5 border">
                <Briefcase className="w-4 h-4 text-[#4261f5]" />
                <span className="text-xs font-bold text-slate-700">
                  {displayProjects > 0 ? `${displayProjects} پروژه` : displayExperience || 'حرفه‌ای'}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleBookClick}
              className="w-full h-12 bg-[#2745d1] hover:bg-[#4261f5] text-white rounded-xl shadow-lg transition-all flex items-center justify-between px-5 relative overflow-hidden"
            >
              <span className="font-bold relative z-10">مشاهده و رزرو</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center relative z-10">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <div className="absolute inset-0 bg-[#4261f5] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default memo(ArtistCard);