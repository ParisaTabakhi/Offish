'use client';

import React, { memo } from 'react';

const ProfileSkeleton: React.FC = () => {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="h-32 md:h-40 bg-slate-200" />
        <div className="px-6 pb-6">
          <div className="flex flex-col md:flex-row md:items-end gap-4 -mt-12">
            <div className="w-24 h-24 rounded-2xl bg-slate-200 border-4 border-white" />
            <div className="flex-1 pt-4">
              <div className="h-7 bg-slate-200 rounded w-48" />
              <div className="h-4 bg-slate-200 rounded w-64 mt-2" />
              <div className="h-4 bg-slate-200 rounded w-40 mt-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <div className="h-4 bg-slate-200 rounded w-20" />
            <div className="h-8 bg-slate-200 rounded w-12 mt-2" />
          </div>
        ))}
      </div>

      {/* Bio + Contact Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="h-6 bg-slate-200 rounded w-32 mb-4" />
          <div className="h-4 bg-slate-200 rounded w-full" />
          <div className="h-4 bg-slate-200 rounded w-3/4 mt-2" />
        </div>
        <div className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="h-6 bg-slate-200 rounded w-32 mb-4" />
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-5 bg-slate-200 rounded w-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Activity Skeleton */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <div className="h-6 bg-slate-200 rounded w-32" />
          <div className="h-4 bg-slate-200 rounded w-20" />
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-200" />
              <div className="flex-1">
                <div className="h-4 bg-slate-200 rounded w-3/4" />
                <div className="h-3 bg-slate-200 rounded w-1/2 mt-1" />
              </div>
              <div className="w-16 h-6 bg-slate-200 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ProfileSkeleton);