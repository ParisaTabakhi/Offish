// src/features/categories/components/SubcategoryTabs.tsx
'use client';

import React, { memo } from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '../../../shared/lib/cn';
import { ISubcategoryTabsProps } from '../types/categories.types';

const SubcategoryTabs: React.FC<ISubcategoryTabsProps> = ({
  subcategories,
  selectedSubcategoryId,
  onSubcategorySelect,
}) => {
  return (
    <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar mask-gradient-x">
      {subcategories.map((sub) => {
        const isActive = selectedSubcategoryId === sub.id;
        return (
          <button
            key={sub.id}
            onClick={() => onSubcategorySelect(sub.id)}
            className={cn(
              "flex items-center gap-2 px-5 py-3 rounded-xl whitespace-nowrap transition-all duration-300 border font-medium text-sm",
              isActive
                ? "bg-gray-900 text-white border-gray-900 shadow-lg shadow-gray-200 transform scale-105"
                : "bg-white text-gray-600 border-gray-200 hover:border-[#2745d1] hover:text-[#2745d1]"
            )}
          >
            {isActive && <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />}
            <span>{sub.title}</span>
            <span
              className={cn(
                "mr-2 text-xs py-0.5 px-2 rounded-md",
                isActive ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-500"
              )}
            >
              {sub.artistCount ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default memo(SubcategoryTabs);