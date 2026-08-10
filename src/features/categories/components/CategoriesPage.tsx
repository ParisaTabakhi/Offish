'use client';

import React, { useMemo, useState } from 'react';
import { Menu, Sparkles } from 'lucide-react';
import { useCategories } from '../../../shared/hooks/queries';
import { useArtistsBySubcategory } from '../../../shared/hooks/queries/useArtists';
import { ISubCategory } from '../../../shared/services/category/category.types';
import { useCategorySelection } from '../hooks/useCategorySelection';
import { toCategorySidebarItem } from '../utils/categoryMappers';
import {
  PageLoadingState,
  PageErrorState,
  PageEmptyState,
} from './CategoryPageStates';
import CategoriesSidebar from './CategoriesSidebar';
import CategoriesHeader from './CategoriesHeader';
import SubcategoryTabs from './SubcategoryTabs';
import ArtistGrid from './ArtistGrid';

const EMPTY_SUBCATEGORIES: ISubCategory[] = [];

const CategoriesPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { data: categories, isLoading, isError, refetch } = useCategories();

  const {
    selectedCategory,
    selectedCategoryId,
    setSelectedCategoryId,
    selectedSubcategoryId,
    setSelectedSubcategoryId,
  } = useCategorySelection(categories);

  const {
    data: artists,
    isLoading: isLoadingArtists,
    isError: isErrorArtists,
  } = useArtistsBySubcategory(selectedSubcategoryId);

  const sidebarCategories = useMemo(
    () => (categories ?? []).map(toCategorySidebarItem),
    [categories]
  );

  const subCategories = selectedCategory?.subCategories ?? EMPTY_SUBCATEGORIES;

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
  };

  const label = selectedCategory?.title ?? 'دسته‌بندی';

  if (isLoading) return <PageLoadingState />;
  if (isError) return <PageErrorState onRetry={() => refetch()} />;
  if (!categories || categories.length === 0) return <PageEmptyState />;

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white p-4 flex items-center justify-between shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-xl font-bold text-[#2745d1]">لیست هنرمندان</h1>
        </div>
      </div>

      <div className="flex min-h-screen">
        <CategoriesSidebar
          categories={sidebarCategories}
          selectedCategoryId={selectedCategoryId || ''}
          onCategorySelect={handleCategorySelect}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1 min-w-0 bg-gray-50/50">
          <div className="p-6 lg:p-10 max-w-7xl mx-auto">
            <CategoriesHeader
              category={
                selectedCategory ? toCategorySidebarItem(selectedCategory) : undefined
              }
              icon={Sparkles}
              label={label}
            />

            <div className="space-y-6">
              {selectedCategory?.description && (
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                  <p className="text-sm text-slate-600">
                    {selectedCategory.description}
                  </p>
                </div>
              )}

              {subCategories.length > 0 ? (
                <SubcategoryTabs
                  subcategories={subCategories}
                  selectedSubcategoryId={selectedSubcategoryId || ''}
                  onSubcategorySelect={setSelectedSubcategoryId}
                />
              ) : (
                <p className="text-slate-500 text-sm">
                  زیردسته‌ای برای این دسته‌بندی ثبت نشده است.
                </p>
              )}

              {/* نمایش هنرمندان */}
              <ArtistGrid
                artists={artists || []}
                isLoading={isLoadingArtists}
              />

              {isErrorArtists && !isLoadingArtists && (
                <div className="text-center text-red-500 text-sm">
                  خطا در دریافت هنرمندان. لطفاً مجدداً تلاش کنید.
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CategoriesPage;