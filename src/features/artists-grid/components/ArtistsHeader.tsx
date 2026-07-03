'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Search } from 'lucide-react';
import { IArtistsHeaderProps } from '../types/artists-grid.types';

const ArtistsHeader: React.FC<IArtistsHeaderProps> = ({
  title,
  subtitle,
  badgeText,
  onSearchClick,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4261f5]/10 text-[#4261f5] text-xs font-extrabold tracking-wide uppercase border border-[#4261f5]/20">
              <Sparkles className="w-3.5 h-3.5" />
              {badgeText}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            {title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4261f5] to-purple-600">
              {subtitle}
            </span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
            تیمی از حرفه‌ای‌ترین هنرمندان که توسط کارشناسان ما بررسی و تایید شده‌اند.
            کیفیت اجرای مراسم خود را تضمین کنید.
          </p>
        </motion.div>
      </div>

      <div className="w-full md:w-auto">
        <button
          onClick={onSearchClick}
          className="w-full md:w-auto flex items-center justify-center gap-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 px-6 py-4 rounded-2xl shadow-sm transition-all hover:shadow-md group"
        >
          <Search className="w-5 h-5 text-slate-400 group-hover:text-[#4261f5] transition-colors" />
          <span className="font-bold">جستجوی پیشرفته</span>
        </button>
      </div>
    </div>
  );
};

export default memo(ArtistsHeader);