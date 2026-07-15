'use client';

import React, { memo } from 'react';

const RequestsLoading: React.FC = () => {
  return (
    <div className="space-y-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 animate-pulse"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-200" />
            <div className="flex-1">
              <div className="h-5 bg-slate-200 rounded w-1/3" />
              <div className="h-4 bg-slate-200 rounded w-1/4 mt-2" />
              <div className="h-3 bg-slate-200 rounded w-full mt-3" />
              <div className="h-3 bg-slate-200 rounded w-2/3 mt-1" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(RequestsLoading);