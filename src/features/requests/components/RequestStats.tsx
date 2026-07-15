'use client';

import React, { memo } from 'react';
import { cn } from '../../../shared/lib/cn';
import { IRequestStatsProps } from '../types/requests.types';
import { REQUEST_LABELS } from '../constants/requests.constants';

const statsConfig = [
  { key: 'total', color: 'text-slate-700 bg-slate-50' },
  { key: 'pending', color: 'text-yellow-600 bg-yellow-50' },
  { key: 'accepted', color: 'text-green-600 bg-green-50' },
  { key: 'rejected', color: 'text-red-600 bg-red-50' },
  { key: 'completed', color: 'text-blue-600 bg-blue-50' },
  { key: 'cancelled', color: 'text-gray-500 bg-gray-50' },
];

const RequestStats: React.FC<IRequestStatsProps> = ({ stats, role }) => {
  const labels = REQUEST_LABELS[role].stats;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
      {statsConfig.map(({ key, color }) => {
        const value = stats[key as keyof typeof stats];
        const label = labels[key as keyof typeof labels];

        return (
          <div
            key={key}
            className={cn(
              'rounded-xl p-4 text-center transition-all hover:shadow-md',
              color
            )}
          >
            <p className="text-2xl font-black">{value}</p>
            <p className="text-xs font-medium mt-0.5 opacity-70">{label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default memo(RequestStats);