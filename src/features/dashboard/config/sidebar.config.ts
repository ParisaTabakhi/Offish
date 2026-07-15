import {
  User2Icon,
  Inbox,
  CalendarCheck,
  MessageSquare,
  Wallet,
  Settings,
  Users,
  Briefcase,
  BarChart3,
  ShieldCheck,
} from 'lucide-react';
import { ISidebarSection } from '../types/sidebar.types';

// ============================================
// Artist
// ============================================

export const ARTIST_SIDEBAR_SECTIONS: ISidebarSection[] = [
  {
    id: 'main',
    items: [
      {
        id: 'profile',
        label: 'پروفایل',
        href: '/dashboard/artist',
        icon: User2Icon,
      },
      {
        id: 'requests',
        label: 'درخواست‌ها',
        href: '/artist/requests',
        icon: Inbox,
        badge: 5,
      },
      {
        id: 'projects',
        label: 'پروژه‌های من',
        href: '/artist/projects',
        icon: CalendarCheck,
      },
    ],
  },
  {
    id: 'communication',
    title: 'ارتباطات',
    items: [
      {
        id: 'chat',
        label: 'پیام‌ها',
        href: '/artist/chat',
        icon: MessageSquare,
        badge: 2,
      },
    ],
  },
  {
    id: 'finance',
    title: 'مالی',
    items: [
      {
        id: 'wallet',
        label: 'کیف پول',
        href: '/artist/wallet',
        icon: Wallet,
      },
    ],
  },
  {
    id: 'settings',
    title: 'تنظیمات',
    items: [
      {
        id: 'settings',
        label: 'تنظیمات حساب',
        href: '/artist/settings',
        icon: Settings,
      },
    ],
  },
];

// ============================================
// planner
// ============================================

export const EMPLOYER_SIDEBAR_SECTIONS: ISidebarSection[] = [
  {
    id: 'main',
    items: [
      {
        id: 'dashboard',
        label: 'پروفایل',
        href: '/dashboard/planner',
        icon: User2Icon,
      },
      {
        id: 'requests',
        label: 'درخواست‌های من',
        href: '/employer/requests',
        icon: Inbox,
      },
      {
        id: 'projects',
        label: 'پروژه‌ها',
        href: '/employer/projects',
        icon: Briefcase,
      },
    ],
  },
  {
    id: 'communication',
    title: 'ارتباطات',
    items: [
      {
        id: 'chat',
        label: 'پیام‌ها',
        href: '/employer/chat',
        icon: MessageSquare,
        badge: 2,
      },
    ],
  },
  {
    id: 'finance',
    title: 'مالی',
    items: [
      {
        id: 'wallet',
        label: 'کیف پول',
        href: '/employer/wallet',
        icon: Wallet,
      },
    ],
  },
  {
    id: 'settings',
    title: 'تنظیمات',
    items: [
      {
        id: 'settings',
        label: 'تنظیمات حساب',
        href: '/employer/settings',
        icon: Settings,
      },
    ],
  },
];

// ============================================
// admin
// ============================================

export const ADMIN_SIDEBAR_SECTIONS: ISidebarSection[] = [
  {
    id: 'main',
    items: [
      {
        id: 'dashboard',
        label: 'پروفایل',
        href: '/admin',
        icon: User2Icon,
      },
      {
        id: 'users',
        label: 'کاربران',
        href: '/admin/users',
        icon: Users,
      },
      {
        id: 'artists',
        label: 'هنرمندان',
        href: '/admin/artists',
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: 'management',
    title: 'مدیریت',
    items: [
      {
        id: 'projects',
        label: 'پروژه‌ها',
        href: '/admin/projects',
        icon: Briefcase,
      },
      {
        id: 'payments',
        label: 'تراکنش‌ها',
        href: '/admin/payments',
        icon: Wallet,
      },
      {
        id: 'reports',
        label: 'گزارش‌ها',
        href: '/admin/reports',
        icon: BarChart3,
      },
    ],
  },
  {
    id: 'settings',
    title: 'تنظیمات',
    items: [
      {
        id: 'settings',
        label: 'تنظیمات سیستم',
        href: '/admin/settings',
        icon: Settings,
      },
    ],
  },
];