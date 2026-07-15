'use client';

import React, { memo } from 'react';
import { MapPin, Star, ShieldCheck, Edit3, Calendar, Save, X } from 'lucide-react';
import { cn } from '../../../shared/lib/cn';
import { IProfileHeaderProps } from '../types/profile.types';

const ProfileHeader: React.FC<IProfileHeaderProps> = ({
  user,
  mode,
  onEdit,
  onSave,
  onCancel,
  onChange,
}) => {
  const isEdit = mode === 'edit';
  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  const roleLabel = user.role === 'artist' ? 'هنرمند' : 'پلنر';

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="relative h-32 md:h-40 bg-gradient-to-r from-[#2745d1] to-[#4a6cf7]">
        <div className="absolute inset-0 bg-black/10" />
        {user.coverImage && (
          <img
            src={user.coverImage}
            alt="cover"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="relative px-6 pb-6">
        <div className="flex flex-col md:flex-row md:items-end gap-4 -mt-12">
          {/* Avatar */}
          <div className="relative">
            <div className={cn(
              'w-24 h-24 rounded-2xl bg-white p-1 shadow-lg',
              isEdit && 'ring-2 ring-[#2745d1] ring-offset-2'
            )}>
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#2745d1] to-[#4a6cf7] flex items-center justify-center text-white text-3xl font-bold">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  initials
                )}
              </div>
            </div>
            {user.verified && (
              <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full border-2 border-white shadow-sm">
                <ShieldCheck className="w-4 h-4" />
              </div>
            )}
            {isEdit && (
              <div className="absolute -bottom-2 -right-9 text-[10px] font-medium text-[#2745d1] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                قابل ویرایش
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 md:pt-8">
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-6">
              {isEdit ? (
                <input
                  value={user.name}
                  onChange={(e) => onChange?.('name', e.target.value)}
                  className="text-2xl font-black text-slate-900 bg-blue-50/50 border-2 border-blue-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#2745d1]/30 focus:border-[#2745d1] transition-all"
                />
              ) : (
                <h1 className="text-2xl font-black text-slate-900 ">{user.name}</h1>
              )}
              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                {roleLabel}
              </span>
              {user.verified && (
                <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3" />
                  تایید شده
                </span>
              )}
              <div className="flex items-center gap-1 text-sm text-slate-500">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="font-bold text-slate-900">{user.rating}</span>
                <span className="text-slate-400">({user.totalReviews} نظر)</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-slate-500 mt-3">
              {isEdit ? (
                <>
                  <input
                    value={user.city}
                    onChange={(e) => onChange?.('city', e.target.value)}
                    className="text-sm text-slate-700 bg-blue-50/50 border-2 border-blue-200 rounded-lg px-2 py-1 w-24 focus:outline-none focus:ring-2 focus:ring-[#2745d1]/30 focus:border-[#2745d1] transition-all"
                    placeholder="شهر"
                  />
                  <span className="text-slate-300">،</span>
                  <input
                    value={user.province}
                    onChange={(e) => onChange?.('province', e.target.value)}
                    className="text-sm text-slate-700 bg-blue-50/50 border-2 border-blue-200 rounded-lg px-2 py-1 w-24 focus:outline-none focus:ring-2 focus:ring-[#2745d1]/30 focus:border-[#2745d1] transition-all"
                    placeholder="استان"
                  />
                </>
              ) : (
                <>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    {user.city}، {user.province}
                  </span>
                  <span className="hidden sm:inline text-slate-300">|</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    {new Date(user.joinedAt).toLocaleDateString('fa-IR')}
                  </span>
                  <span className="hidden sm:inline text-slate-300">|</span>
                  <span>{user.totalProjects} رویداد انجام شده</span>
                </>
              )}
            </div>
          </div>

          {/* Actions */}
          {isEdit ? (
            <div className="flex items-center gap-2">
              <button
                onClick={onCancel}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all duration-200"
              >
                <X className="w-4 h-4" />
                انصراف
              </button>
              <button
                onClick={onSave}
                className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-xl text-sm font-bold hover:bg-green-700 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25"
              >
                <Save className="w-4 h-4" />
                ذخیره
              </button>
            </div>
          ) : (
            <button
              onClick={onEdit}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#2745d1] text-white rounded-xl text-sm font-bold hover:bg-[#1a34b0] transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 whitespace-nowrap"
            >
              <Edit3 className="w-4 h-4" />
              ویرایش پروفایل
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ProfileHeader);