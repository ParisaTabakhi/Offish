// src/features/auth/components/AuthVisual.tsx
'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { IAuthVisualProps } from '../types/auth.types';
import { getAuthTheme } from '../constants/auth.constants'; 

const AuthVisual: React.FC<IAuthVisualProps> = ({
  role,
  title,
  description,
  icon: Icon,
}) => {
  const theme = getAuthTheme(role); 

  return (
    <div
      className={`hidden lg:flex w-1/2 relative overflow-hidden ${theme.bgGradient} p-12 items-center justify-center`}
    >
      {/* Abstract Shapes */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full" />
      <div className="absolute bottom-20 left-20 w-64 h-64 border border-white/10 rounded-full" />

      <div className="relative z-10 text-center text-white max-w-md">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 relative inline-block"
        >
          <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl mx-auto">
            {Icon ? (
              <Icon className="w-12 h-12 text-white" />
            ) : (
              <span className="text-4xl font-bold">آ</span>
            )}
          </div>
          {/* Decorative dots */}
          <div className="absolute -top-4 -right-4 w-2 h-2 bg-white rounded-full opacity-60" />
          <div className="absolute top-1/2 -right-8 w-1.5 h-1.5 bg-white rounded-full opacity-40" />
          <div className="absolute -bottom-2 -left-6 w-3 h-3 bg-white rounded-full opacity-50" />
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold mb-4"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/80 leading-relaxed font-light text-lg"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default memo(AuthVisual);