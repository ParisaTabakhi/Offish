// src/features/artist-categories/components/CategoryCard.tsx
'use client';

import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { cn } from '../../../shared/lib/cn';
import { IProfessionCardProps } from '../types/artist-categories.types';
import CategoryBackground from './CategoryBackground';

const CategoryCard: React.FC<IProfessionCardProps> = ({ profession, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = profession.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'relative group rounded-3xl overflow-hidden cursor-pointer',
        profession.colSpan,
        profession.rowSpan
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background */}
      <CategoryBackground profession={profession} isHovered={isHovered} />

      {/* Content */}
      <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
        {/* Header Badge */}
        <div className="flex justify-between items-start">
          <motion.div
            initial={{ opacity: 0.9, y: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0.9,
              scale: isHovered ? 1.05 : 1,
            }}
            className="bg-white/20 backdrop-blur-md border border-white/20 p-2.5 rounded-xl text-white shadow-lg"
          >
            <Icon className="w-6 h-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
            className="bg-white rounded-full p-2 text-[#2745d1] shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Text Information */}
        <div className="relative transform transition-transform duration-300 group-hover:-translate-y-2">
          {/* Decorative Line */}
          <motion.div
            className="w-12 h-1 bg-orange-500 rounded-full mb-3"
            initial={{ width: 12 }}
            animate={{ width: isHovered ? 48 : 12 }}
            transition={{ duration: 0.3 }}
          />

          <h3 className="text-white text-2xl md:text-3xl font-black mb-1 drop-shadow-md leading-tight">
            {profession.title}
          </h3>

          <p className="text-white/90 text-sm md:text-base font-medium opacity-90 group-hover:opacity-100 transition-opacity">
            {profession.subtitle}
          </p>
        </div>
      </div>

      {/* Interactive Border */}
      <div className="absolute inset-0 border-[3px] border-white/0 group-hover:border-white/20 rounded-3xl transition-all duration-300 pointer-events-none scale-95 group-hover:scale-100" />
    </motion.div>
  );
};

export default memo(CategoryCard);