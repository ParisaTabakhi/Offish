// src/features/promotional/types/promotional.types.ts
import { LucideIcon } from 'lucide-react';

// ============================================
// 1. BASE INTERFACES
// ============================================

export interface IBaseComponent {
  className?: string;
}

export interface IBaseItem {
  id: string | number;
  label: string;
  icon: LucideIcon;
}

// ============================================
// 2. FEATURE ITEM
// ============================================

export interface IFeatureItem extends IBaseItem {
  description?: string;
}

export interface IStatItem extends IBaseItem {
  value: string;
}

// ============================================
// 3. PROMOTIONAL BANNER PROPS
// ============================================

export interface IPromotionalBannerProps extends IBaseComponent {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  features?: IFeatureItem[];
  stats?: IStatItem[];
  tagline?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

// ============================================
// 4. COMPONENT PROPS
// ============================================

export interface IPromotionalImageProps {
  src: string;
  alt: string;
  stats?: IStatItem[];
}

export interface IPromotionalContentProps {
  tagline: string;
  title: string;
  description: string;
  features: IFeatureItem[];
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export interface IPromotionalStatsProps {
  stats: IStatItem[];
}