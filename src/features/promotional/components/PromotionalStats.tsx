// src/features/promotional/components/PromotionalStats.tsx
'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { IPromotionalStatsProps } from '../types/promotional.types';

const PromotionalStats: React.FC<IPromotionalStatsProps> = ({ stats }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="absolute bottom-6 right-6 left-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center justify-between shadow-lg z-20"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
          <Trophy className="w-6 h-6" />
        </div>
        <div>
          <div className="text-white font-bold text-lg">{stats[0]?.label}</div>
          <div className="text-white/80 text-xs font-light">{stats[0]?.value}</div>
        </div>
      </div>
      <div className="flex -space-x-2 space-x-reverse">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full border-2 border-white/20 bg-slate-200 overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1662194362833-3d84a7ea40a5"
              alt={`Artist avatar ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default memo(PromotionalStats);