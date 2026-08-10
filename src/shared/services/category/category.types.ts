import { IApiResponse } from '../../api/types';

// ============================================
// 1. SUBCATEGORY 
// ============================================

export interface ISubCategory {
  id: string;
  title: string;
  description: string | null;
  artistCount?: number;
}

// ============================================
// 2. CATEGORY  CategoryQuery
// ============================================

export interface ICategory {
  id: string;
  title: string;
  description: string | null;
  subCategories: ISubCategory[];
}

// ============================================
// 3. CATEGORY GROUP
// ============================================

export interface ICategoryGroup {
  id: string;
  title: string;
  description: string | null;
}

// ============================================
// 4. ARTIST
// ============================================

export interface ICategoryArtist {
  id: string;
  name: string;
  specialty: string;
  price: string;
  rating: number;
  city: string;
  isVerified: boolean;
  image: string;
  cover: string;
  description?: string;
  experience?: string;
  tags?: string[];
}

// ============================================
// 5. RESPONSE TYPES
// ============================================

export type ICategoryGroupsResponse = IApiResponse<ICategoryGroup[]>;
export type ICategoryGroupDetailResponse = IApiResponse<ICategoryGroup>;
export type ICategoriesResponse = IApiResponse<ICategory[]>;
export type ICategoryDetailResponse = IApiResponse<ICategory>;
export type ICategoryArtistsResponse = IApiResponse<ICategoryArtist[]>;