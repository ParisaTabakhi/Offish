// src/features/artist-categories/components/CategoriesHeader.tsx
'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Star } from 'lucide-react';
import { ICategoriesHeaderProps } from '../types/artist-categories.types';

const CategoriesHeader: React.FC<ICategoriesHeaderProps> = ({
  tagline,
  title,
  description,
  rating,
  ratingLabel,
  onSearchClick,
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 max-w-7xl mx-auto">
      <div className="max-w-2xl relative">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 text-[#2745d1] font-bold text-sm bg-blue-50 px-4 py-1.5 rounded-full w-fit mb-4 border border-blue-100"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>{tagline}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1e293b] leading-[1.2] tracking-tighter mb-4"
        >
          خلق لحظاتی{' '}
          <span className="text-[#2745d1] inline-block relative">
            به یادماندنی
            <svg
              className="absolute -bottom-2 right-0 w-full h-3 text-orange-400"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>{' '}
          با<br />
          هنرمندان برگزیده
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 font-medium max-w-lg leading-relaxed"
        >
          {description}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
      >
        <button
          onClick={onSearchClick}
          className="group relative flex items-center justify-center gap-2 bg-[#2745d1] text-white px-8 py-4 rounded-2xl font-bold shadow-[0_8px_30px_rgb(39,69,209,0.3)] hover:shadow-[0_8px_30px_rgb(39,69,209,0.5)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10 text-lg">جستجوی هنرمند</span>
          <ArrowLeft className="w-5 h-5 relative z-10 group-hover:-translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#2745d1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        <div className="flex items-center gap-3 bg-white p-2 pr-3 pl-4 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex -space-x-3 space-x-reverse">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 relative overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1694157263770-1a844cb0f6e0"
                  alt={`User Avatar ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-[#1e293b] font-black text-lg flex items-center gap-1 leading-none">
              {rating} <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
            </span>
            <span className="text-slate-500 text-xs font-bold mt-1">{ratingLabel}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default memo(CategoriesHeader);