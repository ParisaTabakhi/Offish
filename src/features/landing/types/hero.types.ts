import { LucideIcon } from "lucide-react";

// Base interfaces for SOLID principles
export interface IHeroCategoryItem {
  name: string;
  icon: LucideIcon;
}

export interface IHeroCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  hoverClass: string;
  items: IHeroCategoryItem[];
}

export interface IHeroCategoryCard {
  id: number;
  name: string;
  desc: string;
  icon: LucideIcon;
  subIcons: LucideIcon[];
  theme: string;
  gradient: string;
  borderHover: string;
  iconColor: string;
  bgIcon: string;
  tags: string[];
}

export interface ISearchState {
  query: string;
  activeCategory: string | null;
}

export interface IHeroContentProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  isFocused: boolean;
  onFocusChange: (focused: boolean) => void;
}

export interface IHeroGalleryProps {
  images?: IHeroGalleryImage[];
}

export interface IHeroGalleryImage {
  id: string;
  src: string;
  alt: string;
  className?: string;
  badge?: string;
  title?: string;
  isFeatured?: boolean;
}

// New: Configuration types for better maintainability
export interface IHeroConfig {
  title: {
    main: string;
    highlight: string;
  };
  description: string;
  popularTags: string[];
  cities: string[];
  placeholder: string;
  searchButtonText: string;
  badgeText: string;
  artistsCount: string;
  artistsLabel: string;
}