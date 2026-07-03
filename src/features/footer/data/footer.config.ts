// src/features/footer/data/footer.config.ts
import {
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {
  ISocialLink,
  IFooterLinksGroup,
  IContactInfo,
} from '../types/footer.types';

export const SOCIAL_LINKS: ISocialLink[] = [
  {
    label: 'اینستاگرام',
    href: '#',
    icon: FaInstagram,
    ariaLabel: 'اینستاگرام آفیش',
  },
  {
    label: 'توییتر',
    href: '#',
    icon: FaTwitter,
    ariaLabel: 'توییتر آفیش',
  },
  {
    label: 'لینکدین',
    href: '#',
    icon: FaLinkedin,
    ariaLabel: 'لینکدین آفیش',
  },
];

export const LINKS_GROUPS: IFooterLinksGroup[] = [
  {
    title: 'دسترسی سریع',
    links: [
      { label: 'صفحه اصلی', href: '/' },
      { label: 'جستجوی هنرمندان', href: '/artists' },
      { label: 'درباره ما', href: '/about' },
      { label: 'قوانین و مقررات', href: '/terms' },
      { label: 'سوالات متداول', href: '/faq' },
    ],
  },
  {
    title: 'خدمات ما',
    links: [
      { label: 'گروه‌های موسیقی', href: '/category/music' },
      { label: 'اجرای زنده', href: '/category/live' },
      { label: 'دی‌جی و صدابرداری', href: '/category/dj' },
      { label: 'عکاسی و فیلمبرداری', href: '/category/photography' },
      { label: 'تشریفات مراسم', href: '/category/ceremony' },
    ],
  },
];

export const CONTACT_INFO: IContactInfo[] = [
  {
    icon: MapPin,
    label: 'آدرس',
    value: 'تهران، خیابان ولیعصر، تهران',
    isRtl: true,
  },
  {
    icon: Phone,
    label: 'تلفن',
    value: '+98 21 8888 8888',
    href: 'tel:+982188888888',
    isRtl: false,
  },
  {
    icon: Mail,
    label: 'ایمیل',
    value: 'info@artisthub.ir',
    href: 'mailto:info@artisthub.ir',
    isRtl: false,
  },
];

export const FOOTER_CONFIG = {
  brandName: 'آفیش',
  brandDescription:
    'اولین و بزرگترین پلتفرم رزرو آنلاین هنرمندان و خدمات مراسم در ایران. ما به شما کمک می‌کنیم تا بهترین‌ها را برای لحظات خاص خود انتخاب کنید.',
  bottomText: '© 1404 آفیش. تمامی حقوق محفوظ است.',
  bottomCredit: 'طراحی و توسعه با ما',
} as const;