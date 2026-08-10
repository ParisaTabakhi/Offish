import { IApiResponse } from '../../api/types';

export interface IArtist {
  id: string;
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

export interface IArtistDetailResponse {
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

export type IArtistsBySubcategoryResponse = IApiResponse<IArtist[]> | IArtist[];
export type IArtistDetailApiResponse = IApiResponse<IArtistDetailResponse> | IArtistDetailResponse;