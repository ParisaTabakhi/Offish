'use client';

import React, { memo } from 'react';
import { Menu, Bell, Search } from 'lucide-react';

interface IDashboardHeaderProps {
  title: string;
  onMenuClick?: () => void;
  userName?: string;
  userRole?: string;
}

const DashboardHeader: React.FC<IDashboardHeaderProps> = ({
  title,
  onMenuClick,
  userName = 'کاربر',
  userRole = 'کاربر',
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 md:px-6 py-3 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-slate-100 transition-colors lg:hidden"
          aria-label="باز کردن منو"
        >
          <Menu className="w-5 h-5 text-slate-600" />
        </button>
        <h1 className="text-xl font-bold text-slate-900">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200 transition-all focus-within:border-[#2745d1] focus-within:ring-2 focus-within:ring-[#2745d1]/20">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="جستجو..."
            className="bg-transparent outline-none text-sm text-slate-700 w-32 lg:w-48"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <Bell className="w-5 h-5 text-slate-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#2745d1] flex items-center justify-center text-white text-sm font-bold">
            {userName.charAt(0)}
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-bold text-slate-900">{userName}</p>
            <p className="text-xs text-slate-500">{userRole}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(DashboardHeader);