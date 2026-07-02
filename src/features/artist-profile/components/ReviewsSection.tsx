// src/features/artist-profile/components/ReviewsSection.tsx
'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '../../../shared/ui/avatar';
import { IReviewsSectionProps } from '../types/artist-profile.types';

const ReviewsSection: React.FC<IReviewsSectionProps> = ({
  reviews,
  rating,
  totalReviews,
}) => {
  const displayedReviews = reviews.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">نظرات ({totalReviews})</h2>
        <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="font-bold text-slate-900 text-sm">{rating}</span>
        </div>
      </div>

      <div className="space-y-4">
        {displayedReviews.map((review) => (
          <div
            key={review.id}
            className="p-4 rounded-xl bg-slate-50 border border-slate-100/50"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8 border border-white">
                  <AvatarImage src={review.avatar} alt={review.name} />
                  <AvatarFallback className="text-[10px] bg-blue-100 text-blue-600">
                    {review.name[0]}
                  </AvatarFallback>
                </Avatar>
                <span className="font-bold text-slate-900 text-sm">{review.name}</span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < review.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed text-justify">
              {review.comment}
            </p>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-xs font-medium text-[#2745d1] hover:text-[#1e3bb8] transition-colors py-2">
        مشاهده همه نظرات
      </button>
    </motion.div>
  );
};

export default memo(ReviewsSection);