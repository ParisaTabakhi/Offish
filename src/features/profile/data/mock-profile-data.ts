import { IUserProfile, IActivityItem, IProfileStats } from '../types/profile.types';

export const mockArtistProfile: IUserProfile = {
  id: 'artist-1',
  name: 'رضا رضایی',
  role: 'artist',
  email: 'reza@example.com',
  phone: '0912 345 6789',
  city: 'تهران',
  province: 'تهران',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  bio: 'خواننده حرفه‌ای پاپ با ۸ سال تجربه در اجراهای زنده و ضبط استودیویی. متخصص در موسیقی پاپ معاصر با سبک آوازی منحصر به فرد.',
  verified: true,
  rating: 4.9,
  totalProjects: 42,
  totalReviews: 127,
  specialties: ['خوانندگی', 'اجرای زنده', 'ضبط استودیویی', 'تدریس آواز', 'آهنگسازی'],
  joinedAt: '2023-01-15T00:00:00Z',
};

export const mockPlannerProfile: IUserProfile = {
  id: 'planner-1',
  name: 'سارا محمدی',
  role: 'planner',
  email: 'sara@example.com',
  phone: '0912 987 6543',
  city: 'تهران',
  province: 'تهران',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
  bio: 'برگزارکننده حرفه‌ای رویداد با ۶ سال تجربه در مدیریت مراسم عروسی، جشن‌ها و رویدادهای شرکتی.',
  verified: true,
  rating: 4.8,
  totalProjects: 56,
  totalReviews: 89,
  industries: ['عروسی', 'رویداد شرکتی', 'جشن تولد', 'جشنواره', 'مراسم خصوصی'],
  joinedAt: '2023-03-20T00:00:00Z',
};

export const mockArtistStats: IProfileStats = {
  total: 12,
  pending: 5,
  accepted: 4,
  completed: 3,
  rejected: 0,
};

export const mockPlannerStats: IProfileStats = {
  total: 8,
  pending: 3,
  accepted: 3,
  completed: 2,
  rejected: 0,
};

export const mockArtistActivities: IActivityItem[] = [
  {
    id: '1',
    title: 'اجرای زنده در مراسم عروسی',
    type: 'request',
    status: 'pending',
    date: '2024-07-15T10:30:00Z',
    with: 'سارا محمدی',
  },
  {
    id: '2',
    title: 'ضبط آلبوم استودیویی',
    type: 'project',
    status: 'accepted',
    date: '2024-07-14T14:20:00Z',
    with: 'علی رضایی',
  },
  {
    id: '3',
    title: 'اجرا در جشنواره موسیقی',
    type: 'project',
    status: 'completed',
    date: '2024-07-10T08:00:00Z',
    with: 'مریم حسینی',
  },
  {
    id: '4',
    title: 'تدریس خصوصی آواز',
    type: 'request',
    status: 'rejected',
    date: '2024-07-12T16:45:00Z',
    with: 'داوود کریمی',
  },
  {
    id: '5',
    title: 'اجرا در مراسم نامزدی',
    type: 'request',
    status: 'pending',
    date: '2024-07-16T09:15:00Z',
    with: 'ندا احمدی',
  },
];

export const mockPlannerActivities: IActivityItem[] = [
  {
    id: 'e1',
    title: 'درخواست عکاس برای مراسم عروسی',
    type: 'request',
    status: 'pending',
    date: '2024-07-16T11:00:00Z',
    with: 'سارا رادمنش',
  },
  {
    id: 'e2',
    title: 'اجرای گروه موسیقی برای جشن تولد',
    type: 'project',
    status: 'accepted',
    date: '2024-07-14T15:30:00Z',
    with: 'آرمان کلهر',
  },
  {
    id: 'e3',
    title: 'طراحی لباس برای نمایشگاه',
    type: 'project',
    status: 'completed',
    date: '2024-07-10T09:00:00Z',
    with: 'الناز شاکردوست',
  },
  {
    id: 'e4',
    title: 'شعبده‌باز برای مهمانی شرکتی',
    type: 'request',
    status: 'rejected',
    date: '2024-07-13T08:20:00Z',
    with: 'فرهاد مجیدی',
  },
  {
    id: 'e5',
    title: 'تصویربرداری هوایی برای کلیپ',
    type: 'request',
    status: 'pending',
    date: '2024-07-16T13:45:00Z',
    with: 'سامان جلیلی',
  },
];