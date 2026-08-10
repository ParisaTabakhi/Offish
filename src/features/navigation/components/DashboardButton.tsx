'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Sparkles } from 'lucide-react';

interface IDashboardButtonProps {
  role?: 'artist' | 'employer';
}

const DashboardButton: React.FC<IDashboardButtonProps> = ({ role = 'artist' }) => {
  const dashboardPath = `/dashboard/${role}`;

  return (
    <Link
      href={dashboardPath}
      className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm overflow-hidden transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#2745d1] via-[#4a6cf7] to-[#6d8cff] rounded-xl transition-transform duration-500 group-hover:scale-105" />
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#2745d1] via-[#f97316] to-[#2745d1] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
      </div>

      <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

      <div className="relative z-10 flex items-center gap-2 text-white">
        <span className="flex items-center gap-1.5">
          <LayoutDashboard className="w-4 h-4" />
          <span>ورود به داشبورد</span>
        </span>
        <Sparkles className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300" />
      </div>

      <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-150" />
    </Link>
  );
};

export default memo(DashboardButton);