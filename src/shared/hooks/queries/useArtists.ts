import { useQuery } from '@tanstack/react-query';
import { artistService } from '../../services/artist/artist.service';
import { IArtist, IArtistDetail } from '../../services/artist/artist.types';

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
  return useQuery<IArtistDetail>({
    queryKey: ARTIST_QUERY_KEYS.detail(id || ''),
    queryFn: () => artistService.getArtistById(id!),
    enabled: !!id && id !== 'undefined' && id !== 'null',
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
};