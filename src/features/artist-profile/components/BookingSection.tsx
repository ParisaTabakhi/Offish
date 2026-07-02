// src/features/artist-profile/components/BookingSection.tsx
'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { IBookingSectionProps } from '../types/artist-profile.types';

const BookingSection: React.FC<IBookingSectionProps> = ({ artist }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
    >
      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-orange-500" />
        دستاوردها و افتخارات
      </h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {artist.achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100/50"
          >
            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-[#2745d1]">
              <Check className="w-3 h-3" />
            </div>
            <p className="text-xs font-medium text-slate-700">{achievement}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default memo(BookingSection);