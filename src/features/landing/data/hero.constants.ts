import {
  Music,
  Mic2,
  Disc3,
  Camera,
  Video,
  Smile,
  Radio,
  Sparkles,
  Speaker,
  PartyPopper,
  Star,
  Zap,
  Tv,
  Aperture,
  Users,
  Palette,
  Flower,
  Utensils,
} from "lucide-react";

import { IHeroCategory, IHeroCategoryCard, IHeroConfig } from "../types/hero.types";

// Separated configuration for better maintainability
export const HERO_CONFIG: IHeroConfig = {
  title: {
    main: "خلق",
    highlight: "لحظه‌های",
  },
  description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله .",
  popularTags: ['دی‌جی تولد', 'عکاسی عروسی', 'بادکنک آرایی'],
  cities: ['همه شهرها', 'تهران', 'اصفهان', 'شیراز', 'مشهد'],
  placeholder: "چه خدمتی نیاز دارید؟ (موزیک، عکاسی...)",
  searchButtonText: "جستجو",
  badgeText: "مرجع تخصصی هنرمندان کشور",
  artistsCount: "+۱۵۰۰",
  artistsLabel: "هنرمند فعال",
};

export const HERO_CATEGORIES: IHeroCategory[] = [
  {
    id: 'music',
    title: 'موسیقی و آوا',
    description: 'نوای دلنشین برای لحظات شما',
    icon: Music,
    colorClass: 'text-blue-600 bg-blue-50 border-blue-100',
    hoverClass: 'group-hover:bg-[#2745d1] group-hover:text-white',
    items: [
      { name: 'خواننده پاپ', icon: Mic2 },
      { name: 'دی‌جی و ریمیکس', icon: Disc3 },
      { name: 'گروه سنتی', icon: Star },
      { name: 'پیانیست', icon: Music },
    ]
  },
  {
    id: 'performance',
    title: 'هنرهای نمایشی',
    description: 'سرگرمی و هیجان صحنه',
    icon: Smile,
    colorClass: 'text-orange-600 bg-orange-50 border-orange-100',
    hoverClass: 'group-hover:bg-orange-500 group-hover:text-white',
    items: [
      { name: 'استندآپ کمدی', icon: Smile },
      { name: 'شعبده‌باز', icon: Sparkles },
      { name: 'مجری صحنه', icon: Tv },
      { name: 'تقلید صدا', icon: Users },
    ]
  },
  {
    id: 'services',
    title: 'خدمات مجالس',
    description: 'ثبت و ساماندهی رویداد',
    icon: Camera,
    colorClass: 'text-purple-600 bg-purple-50 border-purple-100',
    hoverClass: 'group-hover:bg-purple-600 group-hover:text-white',
    items: [
      { name: 'عکاسی حرفه‌ای', icon: Aperture },
      { name: 'فیلمبرداری', icon: Video },
      { name: 'نورپردازی', icon: Zap },
      { name: 'صدابرداری', icon: Speaker },
    ]
  }
];

export const CATEGORY_CARDS: IHeroCategoryCard[] = [
  {
    id: 1,
    name: "موسیقی و آوا",
    desc: "هنرمندان صحنه و صدا",
    icon: Music,
    subIcons: [Mic2, Disc3, Radio],
    theme: "indigo",
    gradient: "from-indigo-500/10 to-blue-500/10",
    borderHover: "group-hover:border-indigo-200",
    iconColor: "text-indigo-600",
    bgIcon: "bg-indigo-50",
    tags: ["دی‌جی", "بند زنده", "موزیسین", "نوازنده", 'تنظیم کننده', 'ترانه سرا', 'دوبلور']
  },
  {
    id: 2,
    name: "سرگرمی و اجرا",
    desc: "شگفتی‌سازان مراسم",
    icon: Sparkles,
    subIcons: [Zap, PartyPopper, Star],
    theme: "rose",
    gradient: "from-rose-500/10 to-pink-500/10",
    borderHover: "group-hover:border-rose-200",
    iconColor: "text-rose-600",
    bgIcon: "bg-rose-50",
    tags: ["شعبده باز", "کمدین", "عروسک گردان", 'بازیگر', 'مجری']
  },
  {
    id: 3,
    name: "سرویس مراسمات",
    desc: "ثبت و دیزاین خاطرات",
    icon: Palette,
    subIcons: [Camera, Flower, Utensils],
    theme: "emerald",
    gradient: "from-emerald-500/10 to-teal-500/10",
    borderHover: "group-hover:border-emerald-200",
    iconColor: "text-emerald-600",
    bgIcon: "bg-emerald-50",
    tags: ["عکاسی", "گل‌آرایی", "کترینگ", 'گریمور', 'فیلمبردار', 'طراح لباس', 'ودینگ پلنر']
  },
];

// Default gallery images
export const DEFAULT_GALLERY_IMAGES = [
  {
    id: 'featured',
    src: 'https://images.unsplash.com/photo-1531651008558-ed1740375b39?q=80&w=500&auto=format&fit=crop',
    alt: 'Live Concert Singer',
    className: 'col-span-2 row-span-2',
    badge: 'پربازدیدترین',
    title: 'کنسرت‌های زنده',
    isFeatured: true,
  },
  {
    id: 'secondary-1',
    src: 'https://images.unsplash.com/photo-1505932794465-14a91f17e487?q=80&w=500&auto=format&fit=crop',
    alt: 'Event Services',
    className: 'col-span-1 row-span-1',
    isFeatured: false,
  },
  {
    id: 'secondary-2',
    src: 'https://images.unsplash.com/photo-1531651008558-ed1740375b39?q=80&w=500&auto=format&fit=crop',
    alt: 'Performing Arts',
    className: 'col-span-1 row-span-1',
    isFeatured: false,
  },
];