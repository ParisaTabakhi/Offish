import { publicApiClient } from '../../api/client';
import { ENDPOINTS } from '../../api/endpoints';
import {
  IArtist,
  IArtistsBySubcategoryResponse,
  IArtistDetailResponse,
  IArtistDetailApiResponse,
} from './artist.types';

export const artistService = {
  getArtistsBySubcategory: async (subcategoryId: string): Promise<IArtist[]> => {
    try {
      const response = await publicApiClient.get<IArtistsBySubcategoryResponse>(
        ENDPOINTS.ARTISTS.BY_SUBCATEGORY(subcategoryId)
      );

      const data = response.data;

      if (Array.isArray(data)) {
        return data;
      }

      if (data?.data && Array.isArray(data.data)) {
        return data.data;
      }

      if (data && typeof data === 'object' && '$values' in data) {
        const values = (data as any).$values;
        if (Array.isArray(values)) {
          return values as IArtist[];
        }
      }

      console.warn('⚠️ ساختار پاسخ هنرمندان غیرمنتظره:', data);
      return [];
    } catch (error) {
      console.error('❌ خطا در دریافت هنرمندان:', error);
      throw error;
    }
  },

  getArtistById: async (id: string): Promise<IArtistDetailResponse> => {
    try {
      console.log('📡 ارسال درخواست به:', ENDPOINTS.ARTISTS.DETAIL(id));
      const response = await publicApiClient.get<IArtistDetailApiResponse>(
        ENDPOINTS.ARTISTS.DETAIL(id)
      );

      console.log('📦 پاسخ خام از سرور:', JSON.stringify(response.data, null, 2));

      const data = response.data;

      if (data && typeof data === 'object' && 'id' in data) {
        console.log('✅ ساختار ۱: داده مستقیماً در data');
        return data as IArtistDetailResponse;
      }

      if (data?.data && typeof data.data === 'object' && 'id' in data.data) {
        console.log('✅ ساختار ۲: داده در data.data');
        return data.data;
      }

      if (data && typeof data === 'object' && '$values' in data) {
        const values = (data as any).$values;
        if (Array.isArray(values) && values.length > 0) {
          console.log('✅ ساختار ۳: داده در $values');
          return values[0] as IArtistDetailResponse;
        }
      }

      console.warn('⚠️ ساختار پاسخ جزییات هنرمند غیرمنتظره:', data);
      throw new Error('ساختار پاسخ نامعتبر');
    } catch (error) {
      console.error('❌ خطا در دریافت جزییات هنرمند:', error);
      throw error;
    }
  },
};