'use client';

import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../../../shared/lib/cn';
import { ISidebarHeaderProps } from '../../types/sidebar.types';

const SidebarHeader: React.FC<ISidebarHeaderProps> = ({
  isCollapsed,
  onToggle,
  logoText = 'آفیش',
}) => {
  return (
    <div className="flex items-center justify-between h-16 px-3 border-b border-white/10 shrink-0">
      <AnimatePresence mode="wait">
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/30">
              <span className="text-white text-sm font-bold">آ</span>
            </div>
            <span className="text-xl font-black text-white tracking-tight">
              {logoText}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={onToggle}
        className={cn(
          'p-1.5 rounded-lg transition-colors duration-200',
          'hover:bg-white/10 text-white/60 hover:text-white',
          isCollapsed ? 'mx-auto' : ''
        )}
        aria-label={isCollapsed ? 'باز کردن منو' : 'بستن منو'}
      >
        {isCollapsed ? (
          <ChevronLeft className="w-5 h-5" />
        ) : (
          <ChevronRight className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default memo(SidebarHeader);