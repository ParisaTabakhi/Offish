// src/features/categories/components/FilterDropdown.tsx
'use client';

import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { cn } from '../../../shared/lib/cn';
import { IFilterDropdownProps } from '../types/categories.types';

const FilterDropdown: React.FC<IFilterDropdownProps> = ({
  label,
  icon: Icon,
  options,
  selectedValue,
  onSelect,
  isOpen,
  onToggle,
  active = false,
}) => {
  const selectedLabel = options.find(opt => opt.id === selectedValue)?.label || label;

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors border",
          active
            ? "bg-blue-50 text-[#2745d1] border-blue-100"
            : "bg-gray-50 text-gray-700 border-transparent hover:bg-gray-100"
        )}
      >
        <Icon className="w-4 h-4" />
        <span>{selectedLabel}</span>
        <ChevronDown className="w-3 h-3 opacity-50" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={onToggle} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-20"
            >
              <div className="space-y-1">
                {options.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      onSelect(opt.id);
                      onToggle();
                    }}
                    className={cn(
                      "w-full text-right px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between",
                      selectedValue === opt.id
                        ? "bg-blue-50 text-[#2745d1]"
                        : "hover:bg-gray-50 text-gray-700"
                    )}
                  >
                    <span>{opt.label}</span>
                    {selectedValue === opt.id && <CheckCircle2 className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(FilterDropdown);