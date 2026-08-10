import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { categoryService } from '../../services/category/category.service';
import {
  ICategory,
  ICategoryGroup,
  ICategoryArtist,
} from '../../services/category/category.types';

export const CATEGORY_QUERY_KEYS = {
  all: ['categories'] as const,
  list: () => [...CATEGORY_QUERY_KEYS.all, 'list'] as const,
  groups: () => [...CATEGORY_QUERY_KEYS.all, 'groups'] as const,
  artistsBySubCategory: (subCategoryId: string) =>
    [...CATEGORY_QUERY_KEYS.all, 'artists', subCategoryId] as const,
};


export const useCategories = (
  options?: Omit<UseQueryOptions<ICategory[]>, 'queryKey' | 'queryFn'>
) => {
  return useQuery<ICategory[]>({
    queryKey: CATEGORY_QUERY_KEYS.list(),
    queryFn: () => categoryService.getCategories(),
    staleTime: 5 * 60 * 1000,
    retry: 2,
    ...options,
  });
};


export const useCategoryGroups = (
  options?: Omit<UseQueryOptions<ICategoryGroup[]>, 'queryKey' | 'queryFn'>
) => {
  return useQuery<ICategoryGroup[]>({
    queryKey: CATEGORY_QUERY_KEYS.groups(),
    queryFn: () => categoryService.getCategoryGroups(),
    staleTime: 5 * 60 * 1000,
    retry: 2,
    ...options,
  });
};

export const useArtistsBySubCategory = (
  subCategoryId: string,
  options?: Omit<UseQueryOptions<ICategoryArtist[]>, 'queryKey' | 'queryFn'>
) => {
  return useQuery<ICategoryArtist[]>({
    queryKey: CATEGORY_QUERY_KEYS.artistsBySubCategory(subCategoryId),
    queryFn: () => categoryService.getArtistsBySubCategory(subCategoryId),
    enabled: !!subCategoryId,
    staleTime: 2 * 60 * 1000,
    retry: 1,
    ...options,
  });
};