import { IArtistDetailResponse } from '../../../shared/services/artist/artist.types';
import { IArtistProfile } from '../types/artist-profile.types';

/**
 */
export const convertToArtistProfile = (
  data: IArtistDetailResponse
): IArtistProfile => {
  console.log('🔄 تبدیل داده به پروفایل:', data);

  if (!data || !data.id) {
    console.error('❌ داده نامعتبر برای تبدیل:', data);
    throw new Error('داده نامعتبر');
  }

  return {
    id: data.id,
    name: data.fullName || 'هنرمند',
    category: data.category || 'هنرمند',
    city: data.city || 'تهران',
    province: data.city || 'تهران',
    rating: data.rating || 0,
    totalReviews: data.reviewsCount || 0,
    totalProjects: data.successBooking || 0,
    yearsExperience: 0,
    responseTime: 'کمتر از ۲ ساعت',
    verified: false,
    profileImage: data.pictureProfileUrl || '',
    coverImage: data.pictureProfileUrl || '',
    bio: data.overview || 'هنرمند حرفه‌ای',
    specialties: [data.category || 'هنر'].filter(Boolean),
    achievements: [
      'هنرمند برتر بازار آنلاین',
      'تایید شده توسط تیم حرفه‌ای',
      `بیش از ${data.successBooking || 50} پروژه موفق`,
    ],
    portfolio: {
      images: [
        {
          id: 1,
          url: data.pictureProfileUrl || 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
          title: 'نمونه کار',
          description: 'نمونه کار حرفه‌ای',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
          title: 'نمونه کار ۲',
          description: 'نمونه کار حرفه‌ای',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop',
          title: 'نمونه کار ۳',
          description: 'نمونه کار حرفه‌ای',
        },
      ],
      videos: [],
    },
    reviews: [
      {
        id: 1,
        name: 'کاربر آفیش',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        rating: Math.min(data.rating || 5, 5),
        date: new Date().toISOString(),
        comment: data.overview || 'اجرای فوق‌العاده! توصیه می‌کنم.',
      },
    ],
    pricing: {
      hourlyRate: data.baseRate || 'توافقی',
      minimumBooking: '۲ ساعت',
      availability: 'آماده برای رزرو',
    },
  };
};