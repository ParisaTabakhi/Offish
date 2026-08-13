import { publicApiClient } from '../../api/client';
import { ENDPOINTS } from '../../api/endpoints';
import { unwrapArrayResponse, unwrapObjectResponse } from '../../api/utils';
import {
  IArtist,
  IArtistDetail,
  IArtistsBySubcategoryResponse,
  IArtistDetailResponse,
} from './artist.types';

export const artistService = {
  getArtistsBySubcategory: async (subcategoryId: string): Promise<IArtist[]> => {
    try {
      const response = await publicApiClient.get<IArtistsBySubcategoryResponse>(
        ENDPOINTS.ARTISTS.BY_SUBCATEGORY(subcategoryId)
      );
      return unwrapArrayResponse<IArtist>(response.data);
    } catch (error) {
      console.error('❌ خطا در دریافت هنرمندان:', error);
      throw error;
    }
  },

  getArtistById: async (id: string): Promise<IArtistDetail> => {
    try {
      const response = await publicApiClient.get<IArtistDetailResponse>(
        ENDPOINTS.ARTISTS.DETAIL(id)
      );
      return unwrapObjectResponse<IArtistDetail>(response.data);
    } catch (error) {
      console.error('❌ خطا در دریافت جزئیات هنرمند:', error);
      throw error;
    }
  },
};