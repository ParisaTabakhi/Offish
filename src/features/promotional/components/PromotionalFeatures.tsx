// src/features/promotional/components/PromotionalFeatures.tsx
'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { IFeatureItem } from '../types/promotional.types';

interface IPromotionalFeaturesProps {
  features: IFeatureItem[];
}

const PromotionalFeatures: React.FC<IPromotionalFeaturesProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
      {features.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#2745d1] group-hover:bg-[#2745d1] group-hover:text-white transition-colors duration-300">
            <item.icon className="w-5 h-5" />
          </div>
          <span className="font-bold text-slate-700 text-sm">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default memo(PromotionalFeatures);