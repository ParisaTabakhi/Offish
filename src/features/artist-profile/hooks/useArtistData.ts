'use client';

import { useMemo } from 'react';
import { useArtistDetail } from '../../../shared/hooks/queries/useArtists';
import { IArtistProfile } from '../types/artist-profile.types';
import { convertToArtistProfile } from '../utils/artistProfileMapper';

export const useArtistData = (id: string): IArtistProfile | null => {
  const { data, isLoading, isError, error } = useArtistDetail(id);

  console.log('🔍 useArtistData - id:', id);
  console.log('🔍 useArtistData - data:', data);
  console.log('🔍 useArtistData - isLoading:', isLoading);
  console.log('🔍 useArtistData - isError:', isError);
  console.log('🔍 useArtistData - error:', error);

  return useMemo(() => {
    if (isLoading) {
      console.log('⏳ در حال بارگذاری...');
      return null;
    }

    if (isError) {
      console.error('❌ خطا در دریافت داده:', error);
      return null;
    }

    if (!data) {
      console.warn('⚠️ داده‌ای وجود ندارد');
      return null;
    }

    console.log('✅ داده دریافت شد، تبدیل به پروفایل...');
    const profile = convertToArtistProfile(data);
    console.log('✅ پروفایل تبدیل شده:', profile);
    return profile;
  }, [data, isLoading, isError, error]);
};