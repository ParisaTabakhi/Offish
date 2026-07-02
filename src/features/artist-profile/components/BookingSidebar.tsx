// src/features/artist-profile/components/BookingSidebar.tsx
'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, MessageSquare, Wallet, Clock4, Check, Zap } from 'lucide-react';
import { useToast } from '../../../shared/hooks/use-toast';
import { IBookingSidebarProps } from '../types/artist-profile.types';

const BookingSidebar: React.FC<IBookingSidebarProps> = ({ artist }) => {
  const { toast } = useToast();

  const handleBooking = () => {
    toast({
      title: '🚧 سیستم رزرو آنلاین',
      description: 'این قابلیت به زودی فعال خواهد شد.',
    });
  };

  const handleMessage = () => {
    toast({
      title: '🚧 سیستم پیام‌رسانی',
      description: 'چت با هنرمند به زودی در دسترس خواهد بود.',
    });
  };

  return (
    <div className="sticky top-24 space-y-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
      >
        {/* Header Gradient */}
        <div className="bg-gradient-to-r from-[#2745d1] to-[#4a6fd9] p-4 text-white text-center">
          <h3 className="font-bold text-lg">ثبت درخواست رزرو</h3>
          <p className="text-blue-100 text-xs mt-1">پاسخگویی سریع و تضمین کیفیت</p>
        </div>

        <div className="p-5 space-y-5">
          {/* Pricing Info */}
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 text-slate-600">
                <Wallet className="w-4 h-4 text-[#2745d1]" />
                <span className="text-sm font-medium">نرخ ساعتی</span>
              </div>
              <span className="font-bold text-slate-900 text-sm">
                {artist.pricing.hourlyRate}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 text-slate-600">
                <Clock4 className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium">حداقل زمان</span>
              </div>
              <span className="font-bold text-slate-900 text-sm">
                {artist.pricing.minimumBooking}
              </span>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2 text-xs font-medium text-green-600 bg-green-50 px-3 py-2 rounded-lg border border-green-100 justify-center">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {artist.pricing.availability}
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <button
              onClick={handleBooking}
              className="w-full bg-[#2745d1] hover:bg-[#1e3bb8] text-white h-11 text-sm font-bold shadow-md shadow-blue-200 rounded-xl flex items-center justify-center transition-all"
            >
              <CalendarCheck className="w-4 h-4 ml-2" />
              درخواست رزرو
            </button>
            <button
              onClick={handleMessage}
              className="w-full border border-orange-200 text-orange-600 hover:bg-orange-50 h-11 text-sm font-bold rounded-xl flex items-center justify-center transition-all"
            >
              <MessageSquare className="w-4 h-4 ml-2" />
              ارسال پیام
            </button>
          </div>

          {/* Security/Trust Badges */}
          <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100">
            <div className="flex flex-col items-center justify-center text-center gap-1 p-2">
              <Check className="w-4 h-4 text-slate-400" />
              <span className="text-[10px] text-slate-500">هویت تایید شده</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-1 p-2">
              <Zap className="w-4 h-4 text-slate-400" />
              <span className="text-[10px] text-slate-500">پرداخت امن</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats Mini Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4"
      >
        <h4 className="text-sm font-bold text-slate-900 mb-3">آمار فعالیت</h4>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500">سابقه کار</span>
            <span className="font-semibold text-slate-900">
              {artist.yearsExperience} سال
            </span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500">پروژه‌ها</span>
            <span className="font-semibold text-slate-900">
              {artist.totalProjects}
            </span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500">زمان پاسخ</span>
            <span className="font-semibold text-slate-900">
              {artist.responseTime}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default memo(BookingSidebar);