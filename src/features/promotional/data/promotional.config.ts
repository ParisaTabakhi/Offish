// src/features/promotional/data/promotional.config.ts
import { Trophy, Users, Zap, CheckCircle2 } from 'lucide-react';
import { IFeatureItem, IStatItem } from '../types/promotional.types';

export const FEATURES: IFeatureItem[] = [
  { id: 1, label: 'جامعه بزرگ هنرمندان تایید شده', icon: Users },
  { id: 2, label: 'رزرو آنلاین و آنی خدمات', icon: Zap },
  { id: 3, label: 'تضیمن کیفیت و بازگشت وجه', icon: CheckCircle2 },
  { id: 4, label: 'پشتیبانی اختصاصی رویداد', icon: Trophy },
];

export const STATS: IStatItem[] = [
  { id: 1, label: 'برترین پلتفرم', value: 'انتخاب حرفه‌ای‌ها در سال 1404', icon: Trophy },
];

export const PROMOTIONAL_CONFIG = {
  tagline: 'بازار آنلاین خدمات هنری',
  title: 'تجربه‌ای متفاوت از مدیریت رویدادهای هنری',
  description:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
  imageSrc: '/images/123.avif',
  imageAlt: 'Professional concert stage setup with lighting and sound equipment',
  primaryButtonText: 'شروع همکاری',
  secondaryButtonText: 'دریافت مشاوره رایگان',
} as const;