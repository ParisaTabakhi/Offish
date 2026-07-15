'use client';

import React, { memo } from 'react';
import { LogOut, Settings } from 'lucide-react';
import { cn } from '../../../../shared/lib/cn';
import { ISidebarFooterProps } from '../../types/sidebar.types';

const SidebarFooter: React.FC<ISidebarFooterProps> = ({
  isCollapsed,
  onLogout,
}) => {
  return (
    <div className="absolute bottom-0 w-full p-3 border-t border-white/10 bg-gradient-to-t from-[#1a2a6c] via-[#1e3a8a] to-transparent">
      <div className="flex flex-col gap-1">
        {!isCollapsed && (
          <button
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-xl w-full transition-all duration-200',
              'text-white/60 hover:text-white hover:bg-white/10'
            )}
          >
            <Settings className="w-5 h-5 shrink-0" />
            <span className="text-sm font-medium">تنظیمات</span>
          </button>
        )}

        <button
          onClick={onLogout}
          className={cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-xl w-full transition-all duration-200',
            'text-white/60 hover:text-red-400 hover:bg-red-500/10',
            isCollapsed && 'justify-center'
          )}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!isCollapsed && (
            <span className="text-sm font-medium">خروج از حساب</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default memo(SidebarFooter);