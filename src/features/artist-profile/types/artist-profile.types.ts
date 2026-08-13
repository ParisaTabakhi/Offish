// src/features/artist-profile/types/artist-profile.types.ts

// ============================================
// 1. PORTFOLIO
// ============================================

export interface IPortfolioImage {
  id: number;
  url: string;
  title: string;
  description?: string;
}

export interface IPortfolioVideo {
  id: number;
  thumbnail: string;
  title: string;
  duration: string;
  views?: string;
}

export interface IPortfolio {
  images: IPortfolioImage[];
  videos: IPortfolioVideo[];
}

// ============================================
// 2. REVIEW
// ============================================

export interface IReview {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

// ============================================
// 3. PRICING
// ============================================

export interface IPricing {
  hourlyRate: string;
  minimumBooking: string;
  availability: string;
}

// ============================================
// 4. ARTIST
// ============================================

export interface IArtistProfile {
  id: string;
  name: string;
  category: string;
  city: string;
  province: string;
  rating: number;
  totalReviews: number;
  totalProjects: number;
  yearsExperience: number;
  responseTime: string;
  verified: boolean;
  profileImage: string;
  coverImage: string;
  bio: string;
  specialties: string[];
  achievements: string[];
  portfolio: IPortfolio;
  reviews: IReview[];
  pricing: IPricing;
}

// ============================================
// 5. COMPONENT PROPS
// ============================================

export interface IArtistHeaderProps {
  artist: IArtistProfile;
}

export interface IPortfolioGalleryProps {
  portfolio: IPortfolio;
}

export interface IReviewsSectionProps {
  reviews: IReview[];
  rating: number;
  totalReviews: number;
}

export interface IBookingSectionProps {
  artist: IArtistProfile;
}

export interface IBookingSidebarProps {
  artist: IArtistProfile;
}