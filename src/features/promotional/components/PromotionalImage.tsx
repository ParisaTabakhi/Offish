// src/features/promotional/components/PromotionalImage.tsx
'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IPromotionalImageProps } from '../types/promotional.types';
import { STATS } from '../data/promotional.config';
import PromotionalStats from './PromotionalStats';

const PromotionalImage: React.FC<IPromotionalImageProps> = ({
  src,
  alt,
  stats = STATS,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10"
    >
      {/* Main Image Container */}
      <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20 border-8 border-white">
        <div className="aspect-[4/3] relative">
          <div className="absolute inset-0 bg-[#2745d1]/10 mix-blend-multiply z-10" />
          <Image
            src={src}
            alt={alt}
            fill
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Floating Stats Card */}
        <PromotionalStats stats={stats} />
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-10 -left-10 w-24 h-24 border-2 border-dashed border-orange-400 rounded-full z-0 opacity-40"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#2745d1] rounded-3xl -z-10 opacity-10 rotate-12"
      />
    </motion.div>
  );
};

export default memo(PromotionalImage);