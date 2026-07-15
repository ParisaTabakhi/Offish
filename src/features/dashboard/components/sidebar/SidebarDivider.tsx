'use client';

import React, { memo } from 'react';
import { cn } from '../../../../shared/lib/cn';

interface ISidebarDividerProps {
  isCollapsed: boolean;
  label?: string;
}

const SidebarDivider: React.FC<ISidebarDividerProps> = ({ isCollapsed, label }) => {
  if (isCollapsed) {
    return <div className="my-2 h-px bg-slate-200" />;
  }

  return (
    <div className="my-3 flex items-center gap-3">
      <div className="h-px flex-1 bg-slate-200" />
      {label && (
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          {label}
        </span>
      )}
      <div className="h-px flex-1 bg-slate-200" />
    </div>
  );
};

export default memo(SidebarDivider);