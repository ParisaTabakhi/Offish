// src/features/footer/types/footer.types.ts
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons'; // ✅ اضافه کردن نوع react-icons

// ============================================
// 1. BASE INTERFACES
// ============================================

export interface IBaseComponent {
  className?: string;
}

export interface IBaseLink {
  label: string;
  href: string;
}

// ============================================
// 2. SOCIAL LINK
// ============================================

export interface ISocialLink extends IBaseLink {
  icon: LucideIcon | IconType; // ✅ پشتیبانی از هر دو نوع
  ariaLabel: string;
}

// ============================================
// 3. FOOTER LINKS GROUP
// ============================================

export interface IFooterLinksGroup {
  title: string;
  links: IBaseLink[];
}

// ============================================
// 4. CONTACT INFO
// ============================================

export interface IContactInfo {
  icon: LucideIcon; // ✅ فقط برای lucide-react (که با MapPin, Phone, Mail استفاده می‌شود)
  label: string;
  value: string;
  href?: string;
  isRtl?: boolean;
}

// ============================================
// 5. FOOTER PROPS
// ============================================

export interface IFooterProps extends IBaseComponent {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: ISocialLink[];
  linksGroups?: IFooterLinksGroup[];
  contactInfo?: IContactInfo[];
  bottomText?: string;
  bottomCredit?: string;
}