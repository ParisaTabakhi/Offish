// src/features/artist-categories/data/artist-categories.config.ts
import {
  Music,
  Disc3,
  Smile,
  Camera,
  Sparkles,
  Music as Guitar,
  Star,
  Heart,
  Zap,
} from 'lucide-react';
import { IProfession, IStatItem } from '../types/artist-categories.types';

export const PROFESSIONS: IProfession[] = [
  {
    id: 1,
    title: 'خوانندگان',
    subtitle: 'پاپ، سنتی، تلفیقی',
    icon: Music,
    colSpan: 'md:col-span-2 lg:col-span-2',
    rowSpan: 'md:row-span-2',
    imageDesc: 'Persian singer performing on stage with microphone and elegant lighting',
    accent: 'bg-[#2745d1]',
    pattern: 'circles',
  },
  {
    id: 2,
    title: 'دی‌جی‌های حرفه‌ای',
    subtitle: 'جشن و رویداد',
    icon: Disc3,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    imageDesc: 'Energetic DJ mixing music at a vibrant party with colorful lights',
    accent: 'bg-[#f97316]',
    pattern: 'lines',
  },
  {
    id: 3,
    title: 'استندآپ کمدین',
    subtitle: 'اجرای صحنه‌ای',
    icon: Smile,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    imageDesc: 'Stand-up comedian making audience laugh on stage with microphone',
    accent: 'bg-[#eab308]',
    pattern: 'dots',
  },
  {
    id: 4,
    title: 'مراسمات عکاسی',
    subtitle: 'ثبت لحظات',
    icon: Camera,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
    imageDesc: 'Professional photographer taking artistic portrait shots with camera',
    accent: 'bg-[#06b6d4]',
    pattern: 'waves',
  },
  {
    id: 5,
    title: 'شعبده‌بازان',
    subtitle: 'تردستی و شعبده',
    icon: Sparkles,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    imageDesc: 'Magician performing amazing card trick with mysterious atmosphere',
    accent: 'bg-[#a855f7]',
    pattern: 'stars',
  },
  {
    id: 6,
    title: 'نوازندگان زنده',
    subtitle: 'سازهای ایرانی و غربی',
    icon: Guitar,
    colSpan: 'md:col-span-2 lg:col-span-1',
    rowSpan: 'md:row-span-1',
    imageDesc: 'Musician playing traditional instrument passionately',
    accent: 'bg-[#ec4899]',
    pattern: 'music',
  },
];

export const STATS: IStatItem[] = [
  { label: 'هنرمند فعال', value: '+۲,۵۰۰', icon: Star },
  { label: 'رویداد موفق', value: '+۱۲,۰۰۰', icon: Zap },
  { label: 'شهر تحت پوشش', value: '۴۵', icon: Disc3 },
  { label: 'پشتیبانی', value: '۲۴/۷', icon: Heart },
];

export const ARTIST_CATEGORIES_CONFIG = {
  tagline: 'پلتفرم تخصصی هنر و سرگرمی',
  title: 'خلق لحظاتی به یادماندنی با هنرمندان برگزیده',
  description:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است رآنچنان که لازم است',
  ctaText: 'جستجوی هنرمند',
  rating: 4.9,
  ratingLabel: 'رضایت مشتریان',
  ctaBlockTitle: 'همکاری با ما',
  ctaBlockDescription: 'استعداد خود را به نمایش بگذارید',
  defaultImage:
    'https://images.unsplash.com/photo-1588966915d713-6d43603478e5',
} as const;