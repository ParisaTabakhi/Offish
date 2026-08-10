import { publicApiClient } from '../../../shared/api/client';
import { ENDPOINTS } from '../../../shared/api/endpoints';
import { unwrapArrayResponse } from '../../../shared/api/utils';
import {
  ICategory,
  ICategoryGroup,
  ICategoryArtist,
  ICategoriesResponse,
  ICategoryGroupsResponse,
  ICategoryArtistsResponse,
} from './category.types';

export const categoryService = {

  getCategories: async (): Promise<ICategory[]> => {
    const response = await publicApiClient.get<ICategoriesResponse>(
      ENDPOINTS.CATEGORIES.LIST
    );
    return unwrapArrayResponse<ICategory>(response.data);
  },

  getCategoryGroups: async (): Promise<ICategoryGroup[]> => {
    const response = await publicApiClient.get<ICategoryGroupsResponse>(
      ENDPOINTS.CATEGORIES.GROUPS
    );
    return unwrapArrayResponse<ICategoryGroup>(response.data);
  },

  getArtistsBySubCategory: async (
    subCategoryId: string
  ): Promise<ICategoryArtist[]> => {
    const response = await publicApiClient.get<ICategoryArtistsResponse>(
      ENDPOINTS.CATEGORIES.ARTISTS_BY_SUBCATEGORY(subCategoryId)
    );
    return unwrapArrayResponse<ICategoryArtist>(response.data);
  },
};