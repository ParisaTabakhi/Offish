// src/features/navigation/data/navigation.config.ts
import { INavItem } from '../types/navigation.types';
import { ROUTES } from '../../../shared/constants/routes';

export const NAV_ITEMS: INavItem[] = [
  { label: 'خانه', href: ROUTES.HOME },
  { label: 'هنرمندان', href: ROUTES.CATEGORY },
  { label: 'قوانین و مقررات', href: ROUTES.CONTACT},
  { label: 'راهنما', href: ROUTES.CONTACT },
  { label: 'درباره ما', href: ROUTES.ABOUT },
  { label: 'تماس با ما', href: ROUTES.CONTACT },
];

export const NAV_CONFIG = {
  logoText: 'Offish',
  bookingLabel: 'رزرو آنلاین',
  authLabel: 'ورود/ثبت‌نام',
  ariaLabels: {
    booking: 'رزرو آنلاین',
    auth: 'ورود یا ثبت‌نام',
    notifications: 'نوتیفیکیشن‌ها',
    menu: 'منو',
    closeMenu: 'بستن منو',
  },
} as const;