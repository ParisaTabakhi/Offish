'use client';

import React, { memo, useState } from 'react';
import Link from 'next/link';
import {
  Bell,
  Menu,
  X,
  CalendarPlus,
  LogIn,
  User,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Settings,
  LogOut,
} from 'lucide-react';
import { useNavbarMode, useIsAuthenticated } from '../hooks/useNavbarMode';
import { ROUTES } from '../../../shared/constants/routes';
import { NAV_CONFIG } from '../data/navigation.config';

interface INavActionsProps {
  onMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

const NavActions: React.FC<INavActionsProps> = ({
  onMenuToggle,
  isMobileMenuOpen,
}) => {
  const mode = useNavbarMode();
  const isAuthenticated = useIsAuthenticated();
  const isDashboard = mode === 'dashboard';
  const [isProfileOpen, setIsProfileOpen] = useState(false);


  if (isDashboard) {
    return (
      <div className="flex items-center gap-1 lg:gap-2.5">
        <Link
          href="/"
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-[#2745d1] hover:bg-blue-50/50 rounded-lg transition-all duration-200 group"
        >
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>خروج از پنل</span>
        </Link>

        <div className="hidden md:block w-px h-6 bg-slate-200" />

        <button className="relative p-2 rounded-full hover:bg-slate-50/80 transition-all duration-200 group">
          <MessageSquare className="w-4.5 h-4.5 text-slate-400 group-hover:text-[#2745d1] transition-colors" strokeWidth={1.5} />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gradient-to-br from-[#f97316] to-orange-400 text-white text-[8px] font-bold rounded-full flex items-center justify-center shadow-sm shadow-orange-200">
            ۳
          </span>
        </button>

        <button className="relative p-2 rounded-full hover:bg-slate-50/80 transition-all duration-200 group">
          <Bell className="w-4.5 h-4.5 text-slate-400 group-hover:text-[#2745d1] transition-colors" strokeWidth={1.5} />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gradient-to-br from-red-500 to-rose-400 text-white text-[8px] font-bold rounded-full flex items-center justify-center shadow-sm shadow-red-200">
            ۵
          </span>
        </button>

        <div className="hidden md:block w-px h-6 bg-slate-200" />

        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-full hover:bg-slate-50/80 transition-all duration-200 group"
          >
            <div className="relative">
              <div className="w-7.5 h-7.5 rounded-full bg-gradient-to-br from-[#2745d1] via-[#4a6cf7] to-[#6d8cff] flex items-center justify-center text-white text-xs font-bold shadow-sm shadow-blue-200">
                ر
              </div>
              {/* indicator  */}
              {/* <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white shadow-sm" /> */}
            </div>
            <span className="hidden lg:block text-xs font-medium text-slate-700 group-hover:text-[#2745d1] transition-colors">
              رضا رضایی
            </span>
          </button>

          {/* Dropdown */}
          {isProfileOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsProfileOpen(false)}
              />
              <div className="absolute left-0 top-full mt-1.5 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-3 py-2.5 border-b border-slate-50">
                  <p className="text-sm font-bold text-slate-900">رضا رضایی</p>
                  <p className="text-[10px] text-slate-400">هنرمند</p>
                </div>
                <div className="py-1">
                  <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 transition-colors">
                    <User className="w-4 h-4 text-slate-400" />
                    پروفایل
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 transition-colors">
                    <Settings className="w-4 h-4 text-slate-400" />
                    تنظیمات
                  </button>
                </div>
                <div className="border-t border-slate-50 pt-1">
                  <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-red-500 hover:bg-red-50 transition-colors">
                    <LogOut className="w-4 h-4" />
                    خروج از حساب
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <button
          className="md:hidden flex items-center justify-center w-8.5 h-8.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm active:scale-95"
          onClick={onMenuToggle}
          aria-label={isMobileMenuOpen ? 'بستن منو' : 'باز کردن منو'}
        >
          {isMobileMenuOpen ? (
            <X size={18} className="text-slate-600" />
          ) : (
            <Menu size={18} className="text-slate-600" />
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 lg:gap-3">
      <Link
        href={ROUTES.BOOKING}
        className="relative hidden md:flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#2745d1] to-[#4a6cf7] text-white text-sm font-medium rounded-full shadow-md shadow-blue-200/50 hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <CalendarPlus size={16} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
        <span className="relative z-10">{NAV_CONFIG.bookingLabel}</span>
        <Sparkles size={12} className="relative z-10 text-white/60 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
      </Link>

      {/* <Link
        href="/auth/role"
        className="hidden md:flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#2745d1] rounded-full hover:bg-slate-50/80 transition-all duration-200 group"
      >
        <LogIn size={16} className="text-slate-400 group-hover:text-[#2745d1] transition-colors" />
        {NAV_CONFIG.authLabel}
      </Link> */}

      {isAuthenticated && (
        <Link
          href="/dashboard/artist"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#2745d1]/20 text-[#2745d1] text-sm font-medium rounded-full hover:bg-[#2745d1] hover:text-white hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#2745d1] -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <User size={15} className="relative z-10 group-hover:text-white transition-colors" />
          <span className="relative z-10">ورود به پنل</span>
          <ArrowRight size={13} className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" />
        </Link>
      )}

      <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-full hover:bg-slate-50/80 transition-all duration-200 group"
          >
            <div className="relative">
              <div className="w-7.5 h-7.5 rounded-full bg-gradient-to-br from-[#2745d1] via-[#4a6cf7] to-[#6d8cff] flex items-center justify-center text-white text-xs font-bold shadow-sm shadow-blue-200">
                ر
              </div>
              {/* indicator  */}
              {/* <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white shadow-sm" /> */}
            </div>
            <span className="hidden lg:block text-xs font-medium text-slate-700 group-hover:text-[#2745d1] transition-colors">
              رضا رضایی
            </span>
          </button>

      <button
        className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm active:scale-95"
        onClick={onMenuToggle}
        aria-label={isMobileMenuOpen ? 'بستن منو' : 'باز کردن منو'}
      >
        {isMobileMenuOpen ? (
          <X size={18} className="text-slate-600" />
        ) : (
          <Menu size={18} className="text-slate-600" />
        )}
      </button>
    </div>
  );
};

export default memo(NavActions);