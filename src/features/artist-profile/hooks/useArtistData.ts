// src/features/artist-profile/hooks/useArtistData.ts
'use client';

import { useMemo } from 'react';
import { IArtistProfile } from '../types/artist-profile.types';
import { mockData as categoriesMockData } from '../../../features/categories/data/categories.data';

export const useArtistData = (id: string): IArtistProfile | null => {
  return useMemo(() => {
    // Search through all categories and subcategories
    for (const category of categoriesMockData) {
      for (const subcategory of category.subcategories) {
        const artist = subcategory.artists.find(a => a.id === id);
        if (artist) {
          // Convert to full profile format
          const fullProfile: IArtistProfile = {
            id: artist.id,
            name: artist.name,
            category: category.name,
            city: artist.location.split('،')[0] || 'تهران',
            province: artist.location.split('،')[1] || 'تهران',
            rating: artist.rating || 4.5,
            totalReviews: Math.floor(Math.random() * 50) + 10, 
            totalProjects: Math.floor(Math.random() * 100) + 20,
            yearsExperience: parseInt(artist.experience) || 5,
            responseTime: 'کمتر از ۲ ساعت',
            verified: artist.verified || false,
            profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', // ✅ اضافه شد
            coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=400&fit=crop',
            bio: artist.bio || 'هنرمند حرفه‌ای با تجربه بالا',
            specialties: artist.tags || [],
            achievements: [
              'هنرمند برتر بازار آنلاین',
              'تایید شده توسط تیم حرفه‌ای',
              'بیش از ۵۰ اجرای موفق',
            ],
            portfolio: {
              images: [
                {
                  id: 1,
                  url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
                  title: 'اجرای زنده',
                  description: 'اجرا در جشنواره موسیقی',
                },
                {
                  id: 2,
                  url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
                  title: 'ضبط استودیویی',
                  description: 'کار حرفه‌ای در استودیو',
                },
                {
                  id: 3,
                  url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop',
                  title: 'اجرای کنسرت',
                  description: 'کنسرت زنده',
                },
                {
                  id: 4,
                  url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop',
                  title: 'موزیک ویدیو',
                  description: 'تولید جدیدترین تک‌آهنگ',
                },
              ],
              videos: [
                {
                  id: 1,
                  thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=450&fit=crop',
                  title: 'اجرای زنده',
                  duration: '۳:۴۵',
                },
              ],
            },
            reviews: [
              {
                id: 1,
                name: 'سارا محمدی',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                rating: 5,
                date: '۲۰۲۴-۱۲-۱۵',
                comment: 'اجرای فوق‌العاده! توصیه می‌کنم.',
              },
              {
                id: 2,
                name: 'علی کریمی',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
                rating: 4,
                date: '۲۰۲۴-۱۲-۱۰',
                comment: 'بسیار حرفه‌ای و با استعداد.',
              },
              {
                id: 3,
                name: 'مریم حسینی',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
                rating: 5,
                date: '۲۰۲۴-۱۱-۲۸',
                comment: 'کار با ایشون لذت‌بخش بود.',
              },
            ],
            pricing: {
              hourlyRate: artist.price || 'توافقی',
              minimumBooking: '۲ ساعت',
              availability: 'آماده برای رزرو',
            },
          };

          return fullProfile;
        }
      }
    }
    return null;
  }, [id]);
};