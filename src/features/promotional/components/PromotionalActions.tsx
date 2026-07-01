// src/features/promotional/components/PromotionalActions.tsx
'use client';

import React, { memo } from 'react';
import { ArrowLeft } from 'lucide-react';

interface IPromotionalActionsProps {
  primaryText: string;
  secondaryText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const PromotionalActions: React.FC<IPromotionalActionsProps> = ({
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        onClick={onPrimaryClick}
        className="flex items-center justify-center gap-2 bg-[#f97316] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300"
      >
        <span>{primaryText}</span>
        <ArrowLeft className="w-5 h-5" />
      </button>

      <button
        onClick={onSecondaryClick}
        className="flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-100 px-8 py-3.5 rounded-2xl font-bold hover:border-[#2745d1] hover:text-[#2745d1] transition-all duration-300"
      >
        {secondaryText}
      </button>
    </div>
  );
};

export default memo(PromotionalActions);