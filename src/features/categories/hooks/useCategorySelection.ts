import { useEffect, useMemo, useState } from 'react';
import { ICategory } from '../../../shared/services/category/category.types';

export function useCategorySelection(categories: ICategory[] | undefined) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>();
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<string>();

  useEffect(() => {
    if (categories && categories.length > 0 && !selectedCategoryId) {
      setSelectedCategoryId(categories[0].id);
    }
  }, [categories, selectedCategoryId]);

  useEffect(() => {
    setSelectedSubcategoryId(undefined);
  }, [selectedCategoryId]);

  const selectedCategory = useMemo(
    () => categories?.find((c) => c.id === selectedCategoryId) ?? null,
    [categories, selectedCategoryId]
  );

  return {
    selectedCategory,
    selectedCategoryId,
    setSelectedCategoryId,
    selectedSubcategoryId,
    setSelectedSubcategoryId,
  };
}