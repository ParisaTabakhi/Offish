// src/features/artist-profile/components/ArtistHeader.tsx
'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Award, ShieldCheck } from 'lucide-react';
import { Badge } from '../../../shared/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '../../../shared/ui/avatar';
import { IArtistHeaderProps } from '../types/artist-profile.types';

const ArtistHeader: React.FC<IArtistHeaderProps> = ({ artist }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
    >
      {/* Cover Image */}
      <div className="w-full h-48 md:h-64 relative overflow-hidden group">
        <img
          src={artist.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Profile Content */}
      <div className="relative px-6 pb-6">
        <div className="flex flex-col md:flex-row gap-5 items-start">
          {/* Avatar */}
          <div className="-mt-16 md:-mt-12 relative z-10 shrink-0">
            <div className="p-1 bg-white rounded-full shadow-lg">
              <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-white">
                <AvatarImage src={artist.profileImage} alt={artist.name} className="object-cover" />
                <AvatarFallback className="text-2xl font-bold bg-[#2745d1] text-white">
                  {artist.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1 pt-3 w-full">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    {artist.name}
                  </h1>
                  {artist.verified && (
                    <Badge variant="blue" className="text-[10px] px-2 h-5">
                      <ShieldCheck className="w-3 h-3 ml-1" />
                      تایید شده
                    </Badge>
                  )}
                </div>
                <p className="text-sm font-medium text-slate-500 mb-3">{artist.category}</p>

                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-orange-500" />
                    <span>
                      {artist.city}، {artist.province}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-slate-900">{artist.rating}</span>
                    <span className="text-slate-400">({artist.totalReviews})</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-slate-50 my-4" />

            <div className="space-y-4">
              <p className="text-slate-600 leading-7 text-sm text-justify">{artist.bio}</p>

              <div className="flex flex-wrap gap-2">
                {artist.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-md text-xs text-slate-600"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(ArtistHeader);