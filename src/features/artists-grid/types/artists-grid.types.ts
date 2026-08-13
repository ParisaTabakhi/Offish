import { IArtist as ApiArtist } from '../../../shared/services/artist/artist.types';

export interface IMockArtist {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  projects: number;
  rating: number;
  city: string;
  isVerified: boolean;
  image: string;
  cover: string;
}

export interface IArtistsGridProps {
  artists?: ApiArtist[];
  itemsPerPage?: number;
}

export interface IArtistsHeaderProps {
  title: string;
  subtitle: string;
  badgeText: string;
  onSearchClick?: () => void;
}

export interface IArtistsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}