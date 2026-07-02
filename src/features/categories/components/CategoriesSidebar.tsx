// src/features/categories/components/CategoriesSidebar.tsx
'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Music, Camera, Drama, Mic } from 'lucide-react';
import { cn } from '../../../shared/lib/cn';
import { ICategoriesSidebarProps, ICategory } from '../types/categories.types';

const categoryIcons: Record<string, any> = {
  Singer: Mic,
  Musician: Music,
  Photographer: Camera,
  Actor: Drama,
};

const categoryLabels: Record<string, string> = {
  Singer: 'خواننده',
  Musician: 'نوازنده',
  Photographer: 'عکاس',
  Actor: 'بازیگر',
};

const CategoriesSidebar: React.FC<ICategoriesSidebarProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  isOpen,
  onClose,
}) => {
  return (
    <>
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-40 w-72 bg-white border-l border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen sticky top-0 overflow-y-auto",
          isOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2745d1] to-[#4a6cf7] flex items-center justify-center shadow-lg shadow-blue-200">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">
                بازار هنرمندان
              </h1>
              <p className="text-xs text-gray-500 font-medium">
                پلتفرم رزرو هنرمندان
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              دسته‌بندی‌ها
            </p>
            {categories.map((category) => {
              const Icon = categoryIcons[category.name];
              const isActive = selectedCategory === category.name;

              return (
                <button
                  key={category.name}
                  onClick={() => {
                    onCategorySelect(category.name);
                    onClose();
                  }}
                  className={cn(
                    "w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 group relative overflow-hidden",
                    isActive
                      ? "bg-[#2745d1] text-white shadow-lg shadow-blue-200 scale-[1.02]"
                      : "hover:bg-gray-50 text-gray-700 hover:text-[#2745d1]"
                  )}
                >
                  <div className="flex items-center gap-3 relative z-10">
                    <Icon
                      className={cn(
                        "w-5 h-5",
                        isActive ? "text-white" : "text-gray-500 group-hover:text-[#2745d1]"
                      )}
                    />
                    <span className="font-bold">{categoryLabels[category.name]}</span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 w-1 h-8 bg-orange-400 rounded-r-full"
                    />
                  )}
                  <div
                    className={cn(
                      "text-xs px-2 py-1 rounded-full relative z-10 font-medium transition-colors",
                      isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                    )}
                  >
                    {category.count}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 w-full p-6 border-t border-gray-100 bg-white/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-50 border border-orange-100">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
              <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-orange-800">تضمین کیفیت خدمات</p>
              <p className="text-[10px] text-orange-600">
                تمامی هنرمندان تایید شده هستند
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default memo(CategoriesSidebar);