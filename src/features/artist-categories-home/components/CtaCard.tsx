// src/features/artist-categories/components/CtaCard.tsx
'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowLeft } from 'lucide-react';

interface ICtaCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

const CtaCard: React.FC<ICtaCardProps> = ({ title, description, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 }}
      onClick={onClick}
      className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-[#2745d1] to-blue-600 rounded-3xl p-6 flex flex-col justify-between text-white relative overflow-hidden group cursor-pointer shadow-lg shadow-blue-500/20"
    >
      {/* Background Decorations */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors" />
      <div className="absolute bottom-0 right-0 opacity-10">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>

      <div className="relative z-10 mt-2">
        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-3">
          <Heart className="w-5 h-5 text-white fill-white/50" />
        </div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-blue-100 text-sm leading-tight">{description}</p>
      </div>

      <div className="relative z-10 flex justify-end">
        <div className="w-10 h-10 rounded-full bg-white text-[#2745d1] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
          <ArrowLeft className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
};

export default memo(CtaCard);