import { useQuery } from '@tanstack/react-query';
import { artistService } from '../../services/artist/artist.service';
import { IArtist } from '../../services/artist/artist.types';
import { IArtistDetailResponse } from '../../../shared/services/artist/artist.types';


export const ARTIST_QUERY_KEYS = {
  all: ['artists'] as const,
  detail: (id: string) => [...ARTIST_QUERY_KEYS.all, 'detail', id] as const,
  bySubcategory: (subcategoryId: string) =>
    [...ARTIST_QUERY_KEYS.all, 'by-subcategory', subcategoryId] as const,
};

export const useArtistsBySubcategory = (subcategoryId: string | undefined) => {
  return useQuery<IArtist[]>({
    queryKey: ARTIST_QUERY_KEYS.bySubcategory(subcategoryId || ''),
    queryFn: () => artistService.getArtistsBySubcategory(subcategoryId!),
    enabled: !!subcategoryId,
    staleTime: 2 * 60 * 1000,
    retry: 1,
  });
};

export const useArtistDetail = (id: string | undefined) => {
  return useQuery<IArtistDetailResponse>({
    queryKey: ARTIST_QUERY_KEYS.detail(id || ''),
    queryFn: async () => {
      console.log('📡 درخواست به سرور برای هنرمند:', id);
      const result = await artistService.getArtistById(id!);
      console.log('📦 پاسخ دریافت شده:', result);
      return result;
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
};