'use client';

import { useState } from 'react';
import { RequestsList } from '../../../../features/requests';
import { IRequest, IRequestStats } from '../../../../features/requests/types/requests.types';
import { useToast } from '../../../../shared/hooks/use-toast';

// Mock data for artist requests

  const mockArtistRequests: IRequest[] = [
  {
    id: '1',
    title: 'اجرای زنده در مراسم عروسی',
    description: 'نیاز به خواننده پاپ برای مراسم عروسی با ۲۰۰ مهمان در تهران',
    status: 'pending',
    createdAt: '2024-07-15T10:30:00Z',
    updatedAt: '2024-07-15T10:30:00Z',
    budget: {
      min: 6000000,
      max: 10000000,
    },
    currency: 'تومان',
    category: 'موسیقی',
    client: {
      id: 'c1',
      name: 'سارا محمدی',
    },
    detail: {
      eventType: 'عروسی',
      guestsCount: 200,
      ageRanges: ['جوانان', 'بزرگسالان'],
      address: 'خیابان ولیعصر، پلاک ۱۲۳',
      city: 'تهران',
      district: 'منطقه ۱',
      eventDate: '۱۴۰۳/۰۴/۱۵',
      startTime: '۱۹:۰۰', 
      endTime: '۲۳:۰۰', 
      notes: 'اجرا باید شامل ۳ بخش ۲۰ دقیقه‌ای باشد',
    },
    messages: 3,
  },
  {
    id: '2',
    title: 'ضبط آلبوم استودیویی',
    description: 'ضبط ۵ قطعه موسیقی برای آلبوم جدید با کیفیت بالا',
    status: 'accepted',
    createdAt: '2024-07-14T14:20:00Z',
    updatedAt: '2024-07-15T09:00:00Z',
    budget: {
      min: 10000000,
      max: 15000000,
    },
    currency: 'تومان',
    category: 'ضبط',
    client: {
      id: 'c2',
      name: 'علی رضایی',
    },
    detail: {
      eventType: 'عروسی',
      guestsCount: 200,
      ageRanges: ['جوانان', 'بزرگسالان'],
      address: 'خیابان ولیعصر، پلاک ۱۲۳',
      city: 'تهران',
      district: 'منطقه ۱',
      eventDate: '۱۴۰۳/۰۴/۱۵',
      startTime: '۱۹:۰۰', 
      endTime: '۲۳:۰۰', 
      notes: 'اجرا باید شامل ۳ بخش ۲۰ دقیقه‌ای باشد',
    },
    messages: 7,
  },
  {
    id: '3',
    title: 'اجرا در جشنواره موسیقی',
    description: 'اجرای ۴۵ دقیقه‌ای در جشنواره موسیقی تهران',
    status: 'completed',
    createdAt: '2024-07-10T08:00:00Z',
    updatedAt: '2024-07-20T18:00:00Z',
    budget: {
      min: 12000000,
      max: 18000000,
    },
    currency: 'تومان',
    category: 'موسیقی',
    client: {
      id: 'c3',
      name: 'مریم حسینی',
    },
    messages: 12,
  },
  {
    id: '4',
    title: 'تدریس خصوصی آواز',
    description: 'جلسات آموزشی آواز برای هنرجویان مبتدی',
    status: 'rejected',
    createdAt: '2024-07-12T16:45:00Z',
    updatedAt: '2024-07-13T10:00:00Z',
    budget: {
      min: 2000000,
      max: 4000000,
    },
    currency: 'تومان',
    category: 'آموزش',
    client: {
      id: 'c4',
      name: 'داوود کریمی',
    },
  },
  {
    id: '5',
    title: 'اجرا در مراسم نامزدی',
    description: 'اجرای موسیقی ملایم برای مراسم نامزدی با ۸۰ مهمان',
    status: 'pending',
    createdAt: '2024-07-16T09:15:00Z',
    updatedAt: '2024-07-16T09:15:00Z',
    budget: {
      min: 4000000,
      max: 7000000,
    },
    currency: 'تومان',
    category: 'موسیقی',
    client: {
      id: 'c5',
      name: 'ندا احمدی',
    },
    detail: {
      eventType: 'عروسی',
      guestsCount: 200,
      ageRanges: ['جوانان', 'بزرگسالان'],
      address: 'خیابان ولیعصر، پلاک ۱۲۳',
      city: 'تهران',
      district: 'منطقه ۱',
      eventDate: '۱۴۰۳/۰۴/۱۵',
      startTime: '۱۹:۰۰', 
      endTime: '۲۳:۰۰', 
      notes: 'اجرا باید شامل ۳ بخش ۲۰ دقیقه‌ای باشد',
    },
    messages: 1,
  },
];

export const mockPlannerRequests: IRequest[] = [
  {
    id: 'e1',
    title: 'درخواست عکاس برای مراسم عروسی',
    description: 'نیاز به عکاس حرفه‌ای برای مراسم عروسی با ۱۵۰ مهمان در باغ عروس',
    status: 'pending',
    createdAt: '2024-07-16T11:00:00Z',
    updatedAt: '2024-07-16T11:00:00Z',
    budget: {
      min: 8000000,
      max: 15000000,
    },
    currency: 'تومان',
    category: 'عکاسی',
    artist: {
      id: 'a1',
      name: 'سارا رادمنش',
    },
  },
  {
    id: 'e2',
    title: 'اجرای گروه موسیقی برای جشن تولد',
    description: 'نیاز به گروه موسیقی پاپ برای جشن تولد ۴۰ سالگی',
    status: 'accepted',
    createdAt: '2024-07-14T15:30:00Z',
    updatedAt: '2024-07-15T10:00:00Z',
    budget: {
      min: 20000000,
      max: 30000000,
    },
    currency: 'تومان',
    category: 'موسیقی',
    artist: {
      id: 'a2',
      name: 'آرمان کلهر',
    },
    messages: 5,
  },
  {
    id: 'e3',
    title: 'طراحی لباس برای نمایشگاه',
    description: 'طراحی و دوخت ۳ لباس خاص برای نمایشگاه مد',
    status: 'completed',
    createdAt: '2024-07-10T09:00:00Z',
    updatedAt: '2024-07-20T17:00:00Z',
    budget: {
      min: 15000000,
      max: 22000000,
    },
    currency: 'تومان',
    category: 'طراحی لباس',
    artist: {
      id: 'a3',
      name: 'الناز شاکردوست',
    },
    messages: 8,
  },
  {
    id: 'e4',
    title: 'شعبده‌باز برای مهمانی شرکتی',
    description: 'اجرای شعبده‌بازی برای مهمانی پایان سال شرکت با ۵۰۰ مهمان',
    status: 'rejected',
    createdAt: '2024-07-13T08:20:00Z',
    updatedAt: '2024-07-14T14:00:00Z',
    budget: {
      min: 5000000,
      max: 12000000,
    },
    currency: 'تومان',
    category: 'سرگرمی',
    artist: {
      id: 'a4',
      name: 'فرهاد مجیدی',
    },
  },
  {
    id: 'e5',
    title: 'تصویربرداری هوایی برای کلیپ',
    description: 'تصویربرداری با پهپاد برای کلیپ تبلیغاتی یک برند معروف',
    status: 'pending',
    createdAt: '2024-07-16T13:45:00Z',
    updatedAt: '2024-07-16T13:45:00Z',
    budget: {
      min: 5000000,
      max: 9000000,
    },
    currency: 'تومان',
    category: 'تصویربرداری',
    artist: {
      id: 'a5',
      name: 'سامان جلیلی',
    },
  },
];


export default function ArtistRequestsPage() {
  const { toast } = useToast();
  const [requests, setRequests] = useState<IRequest[]>(mockArtistRequests);

  const stats: IRequestStats = {
    total: requests.length,
    pending: requests.filter((r) => r.status === 'pending').length,
    accepted: requests.filter((r) => r.status === 'accepted').length,
    rejected: requests.filter((r) => r.status === 'rejected').length,
    completed: requests.filter((r) => r.status === 'completed').length,
    cancelled: requests.filter((r) => r.status === 'cancelled').length,
  };

  const handleStatusChange = (requestId: string, newStatus: any) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === requestId ? { ...req, status: newStatus } : req
      )
    );

    toast({
      title: newStatus === 'accepted' ? '✅ درخواست تایید شد' : '❌ درخواست رد شد',
      description: newStatus === 'accepted'
        ? 'درخواست با موفقیت تایید شد. می‌توانید با کارفرما چت کنید.'
        : 'درخواست با موفقیت رد شد.',
    });
  };

  const handleCardClick = (requestId: string) => {
    // TODO: Navigate to request detail page
    console.log('Card clicked:', requestId);
  };

  const handleChatClick = (requestId: string) => {
    toast({
      title: '💬 چت باز شد',
      description: 'صفحه چت با کارفرما باز خواهد شد.',
    });
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-black text-slate-900">درخواست‌های دریافتی</h1>
        <p className="text-slate-500 text-sm mt-1">
          درخواست‌های ارسال‌شده توسط کارفرمایان را مشاهده و مدیریت کنید.
        </p>
      </div>

      <RequestsList
        requests={requests}
        stats={stats}
        role="artist"
        onStatusChange={handleStatusChange}
        onCardClick={handleCardClick}
        onChatClick={handleChatClick}
      />
    </div>
  );
}