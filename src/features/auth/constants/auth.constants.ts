// src/features/auth/constants/auth.constants.ts
import { Briefcase, Palette, Zap, LayoutGrid } from 'lucide-react';
import { IRole, IAuthTheme } from '../types/auth.types';

// ============================================
// 1. ROLES
// ============================================

export const ROLES: IRole[] = [
  {
    id: 'employer',
    title: 'کارفرما هستم',
    description: 'به دنبال استعدادهای برتر برای اجرای پروژه‌های هنری و خلاقانه خود هستم.',
    icon: Briefcase,
    color: '#2745d1',
    bgColor: 'bg-blue-50',
    features: ['ثبت رایگان پروژه', 'دسترسی به هزاران هنرمند', 'مشاهده نمونه‌کارها'],
    route: 'employer',
  },
  {
    id: 'artist',
    title: 'هنرمند هستم',
    description: 'می‌خواهم مهارت‌های خود را به نمایش بگذارم و از هنر خود کسب درآمد کنم.',
    icon: Palette,
    color: '#f97316', // ✅ نارنجی
    bgColor: 'bg-orange-50',
    features: ['ساخت پورتفولیو حرفه‌ای', 'دریافت پروژه‌های اختصاصی', 'تضمین پرداخت امن'],
    route: 'artist',
  },
];

// ============================================
// 2. THEMES - با رنگ‌های صحیح
// ============================================

export const AUTH_THEMES: Record<string, IAuthTheme> = {
  employer: {
    color: '#2745d1', // ✅ آبی
    bgGradient: 'bg-gradient-to-br from-[#2745d1] to-blue-600',
    subtleBg: 'bg-blue-50',
    ringFocus: 'focus-visible:ring-[#2745d1]',
  },
  artist: {
    color: '#f97316', // ✅ نارنجی
    bgGradient: 'bg-gradient-to-br from-orange-500 to-amber-500',
    subtleBg: 'bg-orange-50',
    ringFocus: 'focus-visible:ring-orange-500',
  },
};

// ============================================
// 3. تابع کمکی برای دریافت تم
// ============================================

export const getAuthTheme = (role: string): IAuthTheme => {
  // ✅ بررسی دقیق role
  if (role === 'artist') {
    return AUTH_THEMES.artist;
  }
  return AUTH_THEMES.employer;
};

// ============================================
// 4. REGISTER FEATURES
// ============================================

export const REGISTER_FEATURES: Record<string, string[]> = {
  employer: [
    'دسترسی سریع به هزاران متخصص',
    'ابزارهای پیشرفته مدیریت پروژه',
    'پشتیبانی ۲۴ ساعته اختصاصی',
    'عضویت در بزرگترین جامعه خلاق کشور',
  ],
  artist: [
    'پروفایل اختصاصی و نمایش نمونه کارها',
    'دریافت پیشنهادات شغلی مرتبط',
    'تضمین پرداخت امن',
    'عضویت در بزرگترین جامعه خلاق کشور',
  ],
};

// ============================================
// 5. LOGIN MESSAGES
// ============================================

export const LOGIN_MESSAGES: Record<string, { title: string; description: string }> = {
  employer: {
    title: 'مدیریت هوشمند پروژه',
    description: 'پروژه‌های خود را با اطمینان برون‌سپاری کنید. ما بهترین استعدادها را برای شما گلچین کرده‌ایم.',
  },
  artist: {
    title: 'خلاقیت بدون مرز',
    description: 'در آفیش، هنر شما دیده می‌شود. پورتفولیوی خود را بسازید و با بهترین کارفرمایان ارتباط برقرار کنید.',
  },
};