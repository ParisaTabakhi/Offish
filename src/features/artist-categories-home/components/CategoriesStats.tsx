// src/features/artist-categories/components/CategoriesStats.tsx
'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ICategoriesStatsProps } from '../types/artist-categories.types';

const CategoriesStats: React.FC<ICategoriesStatsProps> = ({ stats }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="mt-12 lg:mt-16 bg-white rounded-3xl p-6 lg:p-10 shadow-xl shadow-slate-200/50 max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8 border border-slate-100"
    >
      {stats.map((stat, i) => (
        <div key={i} className="flex items-center gap-4 min-w-[140px] flex-1">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center">
            <stat.icon className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-[#1e293b]">{stat.value}</div>
            <div className="text-sm text-slate-500 font-bold">{stat.label}</div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default memo(CategoriesStats);