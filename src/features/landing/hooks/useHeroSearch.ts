import { useState, useMemo, useCallback } from 'react';
import { HERO_CATEGORIES } from '../data/hero.constants';

interface IUseHeroSearchReturn {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isFocused: boolean;
  setIsFocused: (focused: boolean) => void;
  handleSearchSubmit: (e: React.FormEvent) => void;
  clearSearch: () => void;
}

export function useHeroSearch(
  onSearch?: (query: string) => void
): IUseHeroSearchReturn {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // Memoized search results for performance
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return HERO_CATEGORIES;
    }

    const normalizedQuery = searchQuery.trim().toLowerCase();
    
    return HERO_CATEGORIES
      .map(category => ({
        ...category,
        items: category.items.filter(item =>
          item.name.toLowerCase().includes(normalizedQuery)
        )
      }))
      .filter(category => category.items.length > 0);
  }, [searchQuery]);

  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  }, [searchQuery, onSearch]);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    isFocused,
    setIsFocused,
    handleSearchSubmit,
    clearSearch,
  };
}