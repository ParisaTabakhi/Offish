// src/features/categories/components/CategoriesPage.tsx
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Menu } from 'lucide-react';
import { mockData } from '../data/categories.data';
import { useCategoryFilters } from '../hooks/useCategoryFilters';
import CategoriesSidebar from './CategoriesSidebar';
import CategoriesHeader from './CategoriesHeader';
import SubcategoryTabs from './SubcategoryTabs';
import FilterBar from './FilterBar';
import ArtistGrid from './ArtistGrid';

// Category Icons mapping
const categoryIcons: Record<string, any> = {
  Singer: require('lucide-react').Mic,
  Musician: require('lucide-react').Music,
  Photographer: require('lucide-react').Camera,
  Actor: require('lucide-react').Drama,
};

const categoryLabels: Record<string, string> = {
  Singer: 'خواننده',
  Musician: 'نوازنده',
  Photographer: 'عکاس',
  Actor: 'بازیگر',
};

const CategoriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(mockData[0].name);
  const [selectedSubcategory, setSelectedSubcategory] = useState(
    mockData[0].subcategories[0].name
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Get current category and subcategory data
  const currentCategory = useMemo(
    () => mockData.find((c) => c.name === selectedCategory),
    [selectedCategory]
  );

  const currentSubcategory = useMemo(() => {
    return currentCategory?.subcategories.find(
      (s) => s.name === selectedSubcategory
    );
  }, [currentCategory, selectedSubcategory]);

  const artists = currentSubcategory?.artists || [];

  // Use filter hook
  const {
    filters,
    updateFilter,
    resetFilters,
    cities,
    filteredArtists,
    activeFiltersCount,
  } = useCategoryFilters(artists);

  // Update subcategory when category changes
  useEffect(() => {
    if (currentCategory && currentCategory.subcategories.length > 0) {
      setSelectedSubcategory(currentCategory.subcategories[0].name);
      resetFilters();
    }
  }, [selectedCategory, currentCategory, resetFilters]);

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const handleSubcategorySelect = (subName: string) => {
    setSelectedSubcategory(subName);
    resetFilters();
  };

  const Icon = categoryIcons[selectedCategory];
  const label = categoryLabels[selectedCategory] || selectedCategory;

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
        {/* Sidebar */}
        <CategoriesSidebar
          categories={mockData}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className="flex-1 min-w-0 bg-gray-50/50">
          <div className="p-6 lg:p-10 max-w-7xl mx-auto">
            {/* Header */}
            <CategoriesHeader
              category={currentCategory}
              icon={Icon}
              label={label}
            />

            <div className="space-y-6">
              {/* Subcategory Tabs */}
              {currentCategory && (
                <SubcategoryTabs
                  subcategories={currentCategory.subcategories}
                  selectedSubcategory={selectedSubcategory}
                  onSubcategorySelect={handleSubcategorySelect}
                />
              )}

              {/* Filter Bar */}
              <FilterBar
                filters={filters}
                onFilterChange={updateFilter}
                onReset={resetFilters}
                cities={cities}
                activeFiltersCount={activeFiltersCount}
              />

              {/* Artists Grid */}
              <ArtistGrid artists={filteredArtists} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CategoriesPage;