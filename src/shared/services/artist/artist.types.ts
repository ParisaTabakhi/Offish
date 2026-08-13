import { IApiResponse } from '../../api/types';

// ============================================
// 1. ARTIST 
// ============================================

export interface IArtist {
  id: string | number;
  fullName: string;
  nickname: string | null;
  category: string;
  city: string;
  cityId: string;
  rating: number;
  reviewsCount: number;
  successBooking: number;
  overview: string | null;
  baseRate: string;
  pictureProfileUrl: string | null;
  parentCategoryId: string;
  subcategoryId: string;
  operatesInOtherProvinces: boolean;
}

export type IArtistsBySubcategoryResponse = IApiResponse<IArtist[]> | IArtist[];

// ============================================
// 2. ARTIST DETAIL
// ============================================

export interface IArtistDetail {
  id: string;
  pictureProfileUrl: string | null;
  parentCategoryId: string;
  categoryId: string;
  category: string;
  cityId: string;
  city: string;
  reviewsCount: number;
  rating: number;
  fullName: string;
  nickname: string | null;
  successBooking: number;
  overview: string | null;
  baseRate: string;
  operatesInOtherProvinces: boolean;
}

export type IArtistDetailResponse = IApiResponse<IArtistDetail> | IArtistDetail;