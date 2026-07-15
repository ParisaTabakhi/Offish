'use client';

import React, { memo } from 'react';
import { Inbox, Clock, CheckCircle, Star, XCircle } from 'lucide-react';
import { cn } from '../../../shared/lib/cn';
import { IProfileStatsProps } from '../types/profile.types';

interface IStatItem {
  id: string;
  title: string;
  value: number;
  icon: any;
  color: string;
  bgColor: string;
}

const ProfileStats: React.FC<IProfileStatsProps> = ({ stats, role }) => {
  const isArtist = role === 'artist';

  const items: IStatItem[] = [
    {
      id: 'total',
      title: 'مجموع درخواست‌ها',
      value: stats.total,
      icon: Inbox,
      color: 'text-[#2745d1]',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'pending',
      title: isArtist ? 'در انتظار تایید' : 'در انتظار پاسخ',
      value: stats.pending,
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      id: 'accepted',
      title: 'تایید شده',
      value: stats.accepted,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      id: 'completed',
      title: isArtist ? 'رویدادهای انجام شده' : 'رویدادهای تکمیل شده',
      value: stats.completed,
      icon: Star,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">{item.title}</p>
                <p className="text-2xl font-black text-slate-900 mt-1">{item.value}</p>
              </div>
              <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center', item.bgColor)}>
                <Icon className={cn('w-5 h-5', item.color)} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(ProfileStats);