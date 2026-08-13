'use client';

import { useMemo } from 'react';
import { useArtistDetail } from '../../../shared/hooks/queries/useArtists';
import { IArtistProfile } from '../types/artist-profile.types';
import { convertToArtistProfile } from '../utils/artistProfileMapper';

interface IUseArtistDataResult {
  profile: IArtistProfile | null;
  isLoading: boolean;
  isError: boolean;
}

export const useArtistData = (id: string): IUseArtistDataResult => {
  const { data, isLoading, isError } = useArtistDetail(id);

  const profile = useMemo(() => {
    if (!data) return null;
    return convertToArtistProfile(data);
  }, [data]);

  return { profile, isLoading, isError };
};