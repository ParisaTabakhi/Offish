// src/features/categories/components/CategoriesHeader.tsx
'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ICategoriesHeaderProps } from '../types/categories.types';

const CategoriesHeader: React.FC<ICategoriesHeaderProps> = ({
  category,
  icon: Icon,
  label,
}) => {
  if (!category) return null;

  return (
    <motion.div
      key={category.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-l from-[#2745d1] via-[#4a6cf7] to-orange-400" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl font-extrabold text-gray-900">{label}</h2>
            <span className="px-3 py-1 bg-blue-50 text-[#2745d1] text-xs font-bold rounded-full border border-blue-100">
              {category.count} متخصص
            </span>
          </div>
          <p className="text-gray-500 max-w-xl leading-relaxed text-sm">
            {category.description} - بهترین‌ها را برای رویداد خود انتخاب کنید.
          </p>
        </div>

        <div className="flex gap-4">
          <div className="flex -space-x-3 space-x-reverse">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  alt="Artist avatar"
                  src="https://images.unsplash.com/photo-1620562623585-8c4a7dc450de"
                />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs text-gray-500 font-bold">
              +۱۴
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -left-10 -bottom-10 opacity-5 pointer-events-none">
        <Icon size={200} />
      </div>
    </motion.div>
  );
};

export default memo(CategoriesHeader);