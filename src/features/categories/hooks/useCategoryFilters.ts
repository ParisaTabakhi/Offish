// src/features/categories/hooks/useCategoryFilters.ts
'use client';

import { useState, useMemo, useCallback } from 'react';
import { IArtist, IFilterState } from '../types/categories.types';

// Helper to convert Persian digits to English
const toEnglishDigits = (str: string): string => {
  if (!str) return '';
  const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
  const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = str;
  for (let i = 0; i < 10; i++) {
    result = result.replace(persianNumbers[i], englishNumbers[i]);
  }
  return result;
};

// Helper to extract numeric price value
const getPriceValue = (priceString: string): number => {
  if (!priceString || priceString === 'توافقی') return Infinity;
  const cleanStr = toEnglishDigits(priceString).replace(/[^0-9-]/g, '');
  if (cleanStr.includes('-')) {
    return parseInt(cleanStr.split('-')[0]);
  }
  return parseInt(cleanStr);
};

export const useCategoryFilters = (artists: IArtist[]) => {
  const [filters, setFilters] = useState<IFilterState>({
    city: 'all',
    priceType: 'all',
    verified: false,
    sortOrder: 'default',
  });

  // Get unique cities
  const cities = useMemo(() => {
    const citySet = new Set(artists.map(a => a.location.split('،')[0]));
    return Array.from(citySet);
  }, [artists]);

  // Update single filter
  const updateFilter = useCallback(<K extends keyof IFilterState>(
    key: K,
    value: IFilterState[K]
  ) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  // Reset all filters
  const resetFilters = useCallback(() => {
    setFilters({
      city: 'all',
      priceType: 'all',
      verified: false,
      sortOrder: 'default',
    });
  }, []);

  // Filter and sort artists
  const filteredArtists = useMemo(() => {
    let result = [...artists];

    // Filter by City
    if (filters.city !== 'all') {
      result = result.filter(artist => artist.location.includes(filters.city));
    }

    // Filter by Price Type
    if (filters.priceType === 'fixed') {
      result = result.filter(
        artist => artist.priceType === 'fixed' || artist.priceType === 'range'
      );
    } else if (filters.priceType === 'negotiable') {
      result = result.filter(artist => artist.priceType === 'negotiable');
    }

    // Filter by Verified
    if (filters.verified) {
      result = result.filter(artist => artist.verified);
    }

    // Sorting
    if (filters.sortOrder === 'price-asc') {
      result.sort((a, b) => getPriceValue(a.price) - getPriceValue(b.price));
    } else if (filters.sortOrder === 'price-desc') {
      result.sort((a, b) => {
        const valA = getPriceValue(a.price);
        const valB = getPriceValue(b.price);
        if (valA === Infinity) return 1;
        if (valB === Infinity) return -1;
        return valB - valA;
      });
    }

    return result;
  }, [artists, filters]);

  // Count active filters
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.city !== 'all') count++;
    if (filters.priceType !== 'all') count++;
    if (filters.verified) count++;
    if (filters.sortOrder !== 'default') count++;
    return count;
  }, [filters]);

  return {
    filters,
    updateFilter,
    resetFilters,
    cities,
    filteredArtists,
    activeFiltersCount,
  };
};