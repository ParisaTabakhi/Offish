import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';
import { ISubCategory } from '../../../shared/services/category/category.types';

// ============================================
// 1. ARTIST
// ============================================

export interface IArtist {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  rating: number;
  location: string;
  price: string;
  experience: string;
  verified: boolean;
  tags: string[];
  priceType?: 'fixed' | 'range' | 'negotiable';
}

// ============================================
// 2. SIDEBAR CATEGORY ITEM
// ============================================

export interface ICategorySidebarItem {
  id: string;
  name: string;
  count: number;
  description: string;
  subcategories: ISubCategory[];
}

// ============================================
// 3. FILTER STATE
// ============================================

export interface IFilterState {
  city: string;
  priceType: string;
  verified: boolean;
  sortOrder: 'default' | 'price-asc' | 'price-desc';
}

// ============================================
// 4. COMPONENT PROPS
// ============================================

export interface IArtistCardProps {
  artist: IArtist;
  index: number;
}

export interface ICategoriesSidebarProps {
  categories: ICategorySidebarItem[];
  selectedCategoryId: string;
  onCategorySelect: (categoryId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export interface ICategoriesHeaderProps {
  category: ICategorySidebarItem | undefined;
  icon: LucideIcon | IconType;
  label: string;
}

export interface ISubcategoryTabsProps {
  subcategories: ISubCategory[];
  selectedSubcategoryId: string;
  onSubcategorySelect: (id: string) => void;
}

export interface IFilterBarProps {
  filters: IFilterState;
  onFilterChange: (key: keyof IFilterState, value: any) => void;
  onReset: () => void;
  cities: string[];
  activeFiltersCount: number;
}

export interface IArtistGridProps {
  artists: IArtist[];
  isLoading?: boolean;
}

// ============================================
// 5. FILTER DROPDOWN
// ============================================

export interface IFilterDropdownOption {
  id: string;
  label: string;
}

export interface IFilterDropdownProps {
  label: string;
  icon: LucideIcon | IconType;
  options: IFilterDropdownOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  active?: boolean;
}

export interface IArtistCardData {
  id: number | string;
  name: string;
  category?: string;
  specialty?: string;
  price: string;
  description?: string;
  bio?: string;
  projects?: number;
  rating: number;
  city: string;
  location?: string;
  isVerified?: boolean;
  verified?: boolean;
  image?: string;
  profileImage?: string;
  cover?: string;
  coverImage?: string;
  tags?: string[];
  experience?: string;
}