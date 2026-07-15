'use client';

import React, { memo } from 'react';
import { LayoutGrid, Table } from 'lucide-react';
import { cn } from '../../../shared/lib/cn';

interface IRequestsViewToggleProps {
  viewMode: 'card' | 'table';
  onViewChange: (mode: 'card' | 'table') => void;
}

const RequestsViewToggle: React.FC<IRequestsViewToggleProps> = ({
  viewMode,
  onViewChange,
}) => {
  return (
    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl shrink-0">
      <button
        onClick={() => onViewChange('card')}
        className={cn(
          'p-2 rounded-lg transition-all duration-200',
          viewMode === 'card'
            ? 'bg-white shadow-sm text-[#2745d1]'
            : 'text-slate-400 hover:text-slate-600'
        )}
        title="نمایش کارتی"
      >
        <LayoutGrid className="w-4 h-4" />
      </button>
      <button
        onClick={() => onViewChange('table')}
        className={cn(
          'p-2 rounded-lg transition-all duration-200',
          viewMode === 'table'
            ? 'bg-white shadow-sm text-[#2745d1]'
            : 'text-slate-400 hover:text-slate-600'
        )}
        title="نمایش جدولی"
      >
        <Table className="w-4 h-4" />
      </button>
    </div>
  );
};

export default memo(RequestsViewToggle);