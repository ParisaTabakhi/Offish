// src/features/booking/data/booking.data.ts
import { IEventType, IArtistCategory, IAgeRange, ICity, IDistricts } from '../types/booking.types';

export const EVENT_TYPES: IEventType[] = [
  { value: 'birthday', label: 'جشن تولد', icon: '🎂', description: 'جشن تولد کودک یا بزرگسال' },
  { value: 'wedding', label: 'عروسی', icon: '💒', description: 'مراسم عقد و عروسی' },
  { value: 'engagement', label: 'نامزدی', icon: '💍', description: 'جشن نامزدی' },
  { value: 'corporate', label: 'همایشات سازمانی', icon: '🏢', description: 'رویدادهای شرکتی و سازمانی' },
  { value: 'conference', label: 'کنفرانس', icon: '🎤', description: 'همایش و کنفرانس' },
  { value: 'party', label: 'مهمانی', icon: '🎉', description: 'مهمانی و جشن' },
  { value: 'festival', label: 'جشنواره', icon: '🎪', description: 'جشنواره و رویداد عمومی' },
  { value: 'exhibition', label: 'نمایشگاه', icon: '🖼️', description: 'نمایشگاه و غرفه' },
  { value: 'concert', label: 'کنسرت', icon: '🎸', description: 'کنسرت موسیقی' },
  { value: 'other', label: 'سایر', icon: '✨', description: 'سایر رویدادها' },
];

export const ARTIST_CATEGORIES: IArtistCategory[] = [
  {
    value: 'music',
    label: 'موسیقی',
    subcategories: [
      { value: 'singer', label: 'خواننده' },
      { value: 'dj', label: 'DJ' },
      { value: 'band', label: 'گروه موسیقی' },
      { value: 'traditional', label: 'نوازنده سنتی' },
      { value: 'pop', label: 'نوازنده پاپ' },
      { value: 'classical', label: 'نوازنده کلاسیک' },
    ],
  },
  {
    value: 'performance',
    label: 'هنرهای نمایشی',
    subcategories: [
      { value: 'magician', label: 'شعبده‌باز' },
      { value: 'comedian', label: 'کمدین' },
      { value: 'dancer', label: 'رقصنده' },
      { value: 'puppet', label: 'نمایش عروسکی' },
      { value: 'theater', label: 'اجرای تئاتر' },
      { value: 'mime', label: 'پانتومیم' },
    ],
  },
  {
    value: 'services',
    label: 'خدمات مجالس',
    subcategories: [
      { value: 'ceremony', label: 'تشریفات' },
      { value: 'decoration', label: 'دکوراسیون' },
      { value: 'photography', label: 'عکاسی و فیلمبرداری' },
      { value: 'catering', label: 'کیترینگ' },
      { value: 'makeup', label: 'میکاپ و آرایش' },
      { value: 'lighting', label: 'نورپردازی' },
    ],
  },
];

export const AGE_RANGES: IAgeRange[] = [
  { value: 'kids', label: 'کودکان', range: '3-12 سال', icon: '👶' },
  { value: 'teens', label: 'نوجوانان', range: '13-19 سال', icon: '🧒' },
  { value: 'young', label: 'جوانان', range: '20-35 سال', icon: '🧑' },
  { value: 'adults', label: 'بزرگسالان', range: '36-60 سال', icon: '👨' },
  { value: 'seniors', label: 'سالمندان', range: '60+ سال', icon: '👴' },
  { value: 'mixed', label: 'همه سنین', range: 'مختلط', icon: '👨‍👩‍👧‍👦' },
];

export const CITIES: ICity[] = [
  { value: 'tehran', label: 'تهران' },
  { value: 'mashhad', label: 'مشهد' },
  { value: 'isfahan', label: 'اصفهان' },
  { value: 'shiraz', label: 'شیراز' },
  { value: 'tabriz', label: 'تبریز' },
  { value: 'karaj', label: 'کرج' },
];

export const DISTRICTS: IDistricts = {
  tehran: ['منطقه 1', 'منطقه 2', 'منطقه 3', 'منطقه 4', 'منطقه 5', 'منطقه 6', 'منطقه 7', 'منطقه 8'],
  mashhad: ['احمدآباد', 'وکیل‌آباد', 'سجاد', 'رضا', 'کوهسنگی'],
  isfahan: ['خیابان باهنر', 'جی', 'خیابان فردوسی', 'سعادت‌آباد', 'دروازه شیراز'],
  shiraz: ['ستارخان', 'ولیعصر', 'چمران', 'معالی‌آباد', 'گلستان'],
  tabriz: ['رشدیه', 'خیابان آزادی', 'باغمیشه', 'شهناز', 'ولیعصر'],
  karaj: ['گوهردشت', 'مهرشهر', 'رجایی‌شهر', 'فردیس', 'کیانمهر'],
};