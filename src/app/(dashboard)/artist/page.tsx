'use client';

import React from 'react';
import { LayoutDashboard, Inbox, CalendarCheck, Star } from 'lucide-react';

export default function ArtistDashboardPage() {
  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500">مجموع درخواست‌ها</p>
          <p className="text-2xl font-black text-slate-900">۱۲</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500">در انتظار</p>
          <p className="text-2xl font-black text-yellow-500">۵</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500">پروژه‌های فعال</p>
          <p className="text-2xl font-black text-green-500">۴</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500">امتیاز</p>
          <p className="text-2xl font-black text-[#f97316]">۴.۹</p>
        </div>
      </div>

      {/* Welcome */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-900 mb-2">
          به داشبورد هنرمند خوش آمدید 👋
        </h2>
        <p className="text-slate-500">
          در اینجا می‌توانید درخواست‌های جدید را مشاهده، پروژه‌های خود را مدیریت و با کارفرمایان ارتباط برقرار کنید.
        </p>
      </div>
    </div>
  );
}