'use client';

import React, { memo } from 'react';
import { Zap, MapPin, Briefcase, User } from 'lucide-react';

interface IArtistCardInfoProps {
  displayName: string;
  displayNickname: string;
  displayCategory: string;
  displayRating: number;
  displayOverview: string;
  displayCity: string;
  displayProjects: number;
  displayReviews: number;
}

const ArtistCardInfo: React.FC<IArtistCardInfoProps> = ({
  displayName,
  displayNickname,
  displayCategory,
  displayRating,
  displayOverview,
  displayCity,
  displayProjects,
  displayReviews,
}) => {
  return (
    <div className="mt-16 space-y-4 flex-grow">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-black text-slate-800 group-hover:text-[#4261f5] transition-colors">
            {displayName}
            {displayNickname && (
              <span className="text-sm font-normal text-slate-400 mr-1">
                ({displayNickname})
              </span>
            )}
          </h3>

          {displayRating >= 4.8 && (
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

      {displayOverview && (
        <p className="text-sm text-slate-600 leading-7 line-clamp-2 border-l-2 border-slate-100 pl-3">
          {displayOverview}
        </p>
      )}

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
            {displayProjects > 0 ? `${displayProjects} پروژه` : 'جدید'}
          </span>
        </div>
      </div>

      {displayReviews > 0 && (
        <div className="flex items-center gap-1 text-xs text-slate-400">
          <User className="w-3.5 h-3.5" />
          <span>{displayReviews} نظر</span>
        </div>
      )}
    </div>
  );
};

export default memo(ArtistCardInfo);