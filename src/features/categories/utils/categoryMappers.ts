import { ICategory } from '../../../shared/services/category/category.types';
import { ICategorySidebarItem } from '../types/categories.types';

export function toCategorySidebarItem(category: ICategory): ICategorySidebarItem {
  return {
    id: category.id,
    name: category.title,
    count: category.subCategories.length,
    description: category.description ?? '',
    subcategories: category.subCategories,
  };
}