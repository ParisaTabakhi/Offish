// src/features/artist-profile/data/artist-profile.data.ts
import { IArtistProfile } from '../types/artist-profile.types';

export const artistData: IArtistProfile = {
  id: 's1',
  name: 'رضا رضایی',
  category: 'خواننده پاپ',
  city: 'تهران',
  province: 'تهران',
  rating: 4.8,
  totalReviews: 127,
  totalProjects: 89,
  yearsExperience: 8,
  responseTime: 'کمتر از ۲ ساعت',
  verified: true,
  profileImage:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  coverImage:
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=400&fit=crop',
  bio: 'خواننده حرفه‌ای پاپ با ۸ سال تجربه در اجراهای زنده، ضبط استودیویی و تولید موسیقی. متخصص در موسیقی پاپ معاصر با سبک آوازی منحصر به فرد که صداهای مدرن را با تأثیرات سنتی تلفیق می‌کند.',
  specialties: [
    'اجرای زنده',
    'ضبط استودیویی',
    'مربیگری آواز',
    'تولید موسیقی',
    'سرگرمی رویدادها',
  ],
  achievements: [
    'برنده جشنواره موسیقی تهران ۱۴۰۱',
    'حضور در بیش از ۱۵ آلبوم',
    'اجرا در بیش از ۲۰۰ رویداد',
    'هنرمند برتر بازار آنلاین',
  ],
  portfolio: {
    images: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
        title: 'اجرای زنده در سالن کنسرت',
        description: 'اجرا در جشنواره سالانه موسیقی',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
        title: 'جلسه ضبط استودیویی',
        description: 'کار حرفه‌ای در استودیوی ضبط',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop',
        title: 'فیلمبرداری موزیک ویدیو',
        description: 'تولید جدیدترین تک‌آهنگ',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop',
        title: 'اجرای کنسرت',
        description: 'سری کنسرت‌های تابستانی فضای باز',
      },
      {
        id: 5,
        url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
        title: 'آماده‌سازی پشت صحنه',
        description: 'گرم کردن صدا قبل از اجرا',
      },
      {
        id: 6,
        url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=600&fit=crop',
        title: 'اجرای اصلی جشنواره',
        description: 'اجرا در صحنه اصلی جشنواره موسیقی',
      },
    ],
    videos: [
      {
        id: 1,
        thumbnail:
          'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=450&fit=crop',
        title: 'جدیدترین تک‌آهنگ - "رویاهای نیمه‌شب"',
        duration: '۳:۴۵',
        views: '۱۲۵ هزار',
      },
      {
        id: 2,
        thumbnail:
          'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=450&fit=crop',
        title: 'برگزیده کنسرت‌های زنده ۱۴۰۳',
        duration: '۸:۲۰',
        views: '۸۹ هزار',
      },
      {
        id: 3,
        thumbnail:
          'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=450&fit=crop',
        title: 'پشت صحنه - ضبط آلبوم',
        duration: '۵:۳۰',
        views: '۶۷ هزار',
      },
      {
        id: 4,
        thumbnail:
          'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&h=450&fit=crop',
        title: 'جلسه آکوستیک - مدلی کاور',
        duration: '۶:۱۵',
        views: '۹۴ هزار',
      },
    ],
  },
  reviews: [
    {
      id: 1,
      name: 'سارا محمدی',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      date: '۲۰۲۴-۱۲-۱۵',
      comment:
        'رضا در عروسی ما اجرا کرد و واقعاً جادویی بود! صدای او فوق‌العاده است و در تمام طول مراسم بسیار حرفه‌ای بود. به شدت توصیه می‌کنم!',
    },
    // ... (بقیه نظرات)
  ],
  pricing: {
    hourlyRate: '۵ تا ۱۰ میلیون تومان',
    minimumBooking: '۲ ساعت',
    availability: 'آماده برای رزرو',
  },
};