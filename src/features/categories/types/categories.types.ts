// src/features/categories/types/categories.types.ts
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons'; 

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
// 2. SUBCATEGORY
// ============================================

export interface ISubcategory {
  name: string;
  description: string;
  artists: IArtist[];
}

// ============================================
// 3. CATEGORY
// ============================================

export interface ICategory {
  name: string;
  count: number;
  description: string;
  subcategories: ISubcategory[];
}

// ============================================
// 4. FILTER STATE
// ============================================

export interface IFilterState {
  city: string;
  priceType: string;
  verified: boolean;
  sortOrder: 'default' | 'price-asc' | 'price-desc';
}

// ============================================
// 5. COMPONENT PROPS
// ============================================

export interface IArtistCardProps {
  artist: IArtist;
  index: number;
}

export interface ICategoriesSidebarProps {
  categories: ICategory[];
  selectedCategory: string;
  onCategorySelect: (categoryName: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export interface ICategoriesHeaderProps {
  category: ICategory | undefined;
  icon: LucideIcon | IconType;
  label: string;
}

export interface ISubcategoryTabsProps {
  subcategories: ISubcategory[];
  selectedSubcategory: string;
  onSubcategorySelect: (name: string) => void;
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
// 6. FILTER DROPDOWN
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