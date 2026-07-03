// src/features/auth/components/AuthHeader.tsx
'use client';

import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import { IAuthHeaderProps } from '../types/auth.types';

const AuthHeader: React.FC<IAuthHeaderProps> = ({ role, title, subtitle, onBack }) => {
  return (
    <>
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-8 right-8 text-slate-500 hover:text-slate-900 gap-2 hover:bg-slate-100 px-3 py-2 rounded-lg flex items-center transition-colors z-10"
        >
          <ArrowRight className="w-4 h-4" />
          تغییر نقش
        </button>
      )}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">{title}</h1>
        <p className="text-slate-500">{subtitle}</p>
      </div>
    </>
  );
};

export default memo(AuthHeader);