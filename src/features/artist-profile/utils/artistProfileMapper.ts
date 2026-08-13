import { IArtistDetail } from '../../../shared/services/artist/artist.types';
import { IArtistProfile } from '../types/artist-profile.types';

export const convertToArtistProfile = (data: IArtistDetail): IArtistProfile => {
  return {
    id: data.id,
    name: data.fullName || 'هنرمند',
    category: data.category || 'هنرمند',
    city: data.city || '',
    province: data.city || '',
    rating: data.rating || 0,
    totalReviews: data.reviewsCount || 0,
    totalProjects: data.successBooking || 0,
    profileImage: data.pictureProfileUrl || '',
    coverImage: data.pictureProfileUrl || '',
    bio: data.overview || '',
    specialties: [data.category].filter(Boolean) as string[],
    yearsExperience: 0,
    responseTime: '',
    verified: false,
    achievements: [],
    portfolio: {
      images: [],
      videos: [],
    },
    reviews: [],

    pricing: {
      hourlyRate: data.baseRate || 'توافقی',
      minimumBooking: '',
      availability: '',
    },
  };
};