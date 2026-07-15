'use client';

import React from 'react';
import { LayoutDashboard, Inbox, Briefcase, Star } from 'lucide-react';

export default function EmployerDashboardPage() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500">مجموع پروژه‌ها</p>
          <p className="text-2xl font-black text-slate-900">۸</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500">درخواست‌های ارسال‌شده</p>
          <p className="text-2xl font-black text-yellow-500">۳</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500">پروژه‌های فعال</p>
          <p className="text-2xl font-black text-green-500">۲</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500">هنرمندان همکار</p>
          <p className="text-2xl font-black text-[#f97316]">۴</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-900 mb-2">
          به داشبورد کارفرما خوش آمدید 👋
        </h2>
        <p className="text-slate-500">
          در اینجا می‌توانید پروژه‌های خود را مدیریت، درخواست‌های جدید ارسال و با هنرمندان ارتباط برقرار کنید.
        </p>
      </div>
    </div>
  );
}