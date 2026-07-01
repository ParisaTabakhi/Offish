// src/features/artist-categories/types/artist-categories.types.ts
import { LucideIcon } from 'lucide-react';

// ============================================
// 1. BASE INTERFACES
// ============================================

export interface IBaseComponent {
  className?: string;
}

export interface IBaseItem {
  id: string | number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  imageDesc: string;
  accent: string;
  pattern: 'circles' | 'dots' | 'lines' | 'waves' | 'stars' | 'music';
}

// ============================================
// 2. PROFESSION / CATEGORY
// ============================================

export interface IProfession extends IBaseItem {
  colSpan: string;
  rowSpan: string;
}

export interface IProfessionCardProps {
  profession: IProfession;
  index: number;
}

// ============================================
// 3. STATS
// ============================================

export interface IStatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

// ============================================
// 4. COMPONENT PROPS
// ============================================

export interface IArtistCategoriesProps extends IBaseComponent {
  professions?: IProfession[];
  stats?: IStatItem[];
  title?: string;
  subtitle?: string;
  tagline?: string;
  ctaText?: string;
  description?:string;
}

export interface ICategoriesHeaderProps {
  tagline: string;
  title: string;
  description: string;
  rating: number;
  ratingLabel: string;
  onSearchClick?: () => void;
}

export interface ICategoriesStatsProps {
  stats: IStatItem[];
}