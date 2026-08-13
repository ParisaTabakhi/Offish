import { IArtist } from '../../../shared/services/artist/artist.types';

export interface IArtistsGridProps {
  artists?: IArtist[];
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