'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '../../../../shared/lib/cn';
import { ISidebarItemProps } from '../../types/sidebar.types';

const SidebarItem: React.FC<ISidebarItemProps> = ({
  item,
  isCollapsed,
  isActive,
}) => {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={cn(
        'relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 group',
        'text-white/70 hover:text-white hover:bg-white/10',
        isActive && 'text-white bg-white/20 shadow-lg shadow-blue-500/20'
      )}
    >
      {isActive && (
        <motion.div
          layoutId="sidebar-active"
          className="absolute inset-0 rounded-xl bg-white/20"
          transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
        />
      )}

      <div className="relative z-10">
        <Icon
          strokeWidth={1.8}
          className={cn(
            'w-5 h-5 shrink-0 transition-colors duration-200',
            isActive
              ? 'text-white'
              : 'text-white/60 group-hover:text-white'
          )}
        />
      </div>

      {!isCollapsed && (
        <span
          className={cn(
            'relative z-10 text-sm font-medium transition-opacity duration-300 whitespace-nowrap',
            isActive ? 'text-white' : 'text-white/80'
          )}
        >
          {item.label}
        </span>
      )}

      {item.badge !== undefined && (
        <div className="relative z-10 mr-auto">
          {!isCollapsed ? (
            <span
              className={cn(
                'text-[10px] font-bold px-2 py-0.5 rounded-full',
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
              )}
            >
              {item.badge}
            </span>
          ) : (
            <span className="absolute -top-1 -right-1 w-4 h-4 text-[9px] font-bold bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
              {item.badge}
            </span>
          )}
        </div>
      )}
    </Link>
  );
};

export default memo(SidebarItem);