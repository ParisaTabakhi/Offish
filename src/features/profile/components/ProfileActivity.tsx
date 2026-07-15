'use client';

import React, { memo } from 'react';
import { Clock, CheckCircle , MessageSquare, ChevronLeft } from 'lucide-react';
import StatusBadge from '../../../shared/components/StatusBadge';
import { IProfileActivityProps } from '../types/profile.types';

const activityIcons = {
  request: Clock,
  project: CheckCircle,
  message: MessageSquare,
};

const ProfileActivity: React.FC<IProfileActivityProps> = ({
  activities,
  onViewAll,
  onItemClick,
}) => {
  if (activities.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h2 className="text-lg font-bold text-slate-900 mb-3">فعالیت‌های اخیر</h2>
        <p className="text-sm text-slate-500 text-center py-6">هیچ فعالیتی ثبت نشده است.</p>
      </div>
    );
  }

  const displayedActivities = activities.slice(0, 5);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-slate-900">فعالیت‌های اخیر</h2>
        {onViewAll && activities.length > 5 && (
          <button
            onClick={onViewAll}
            className="flex items-center gap-1 text-sm font-medium text-[#2745d1] hover:underline transition-colors"
          >
            مشاهده همه
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="space-y-2.5">
        {displayedActivities.map((activity) => {
          const Icon = activityIcons[activity.type] || Clock;

          return (
            <div
              key={activity.id}
              onClick={() => onItemClick?.(activity.id)}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow transition-all">
                <Icon className="w-4 h-4 text-[#2745d1]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 truncate">
                  {activity.title}
                </p>
                <p className="text-xs text-slate-500">
                  {activity.with} • {new Date(activity.date).toLocaleDateString('fa-IR')}
                </p>
              </div>
              <StatusBadge status={activity.status} size="sm" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(ProfileActivity);