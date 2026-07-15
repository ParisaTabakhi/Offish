'use client';

import React, { useState } from 'react';
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
    budget: 8000000,
    currency: 'تومان',
    category: 'موسیقی',
    client: {
      id: 'c1',
      name: 'سارا محمدی',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
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
    budget: 12000000,
    currency: 'تومان',
    category: 'ضبط',
    client: {
      id: 'c2',
      name: 'علی رضایی',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    messages: 7,
    dueDate: '2024-08-15T00:00:00Z',
  },
  {
    id: '3',
    title: 'اجرا در جشنواره موسیقی',
    description: 'اجرای ۴۵ دقیقه‌ای در جشنواره موسیقی تهران',
    status: 'completed',
    createdAt: '2024-07-10T08:00:00Z',
    updatedAt: '2024-07-20T18:00:00Z',
    budget: 15000000,
    currency: 'تومان',
    category: 'موسیقی',
    client: {
      id: 'c3',
      name: 'مریم حسینی',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
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
    budget: 3000000,
    currency: 'تومان',
    category: 'آموزش',
    client: {
      id: 'c4',
      name: 'داوود کریمی',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
  },
  {
    id: '5',
    title: 'اجرا در مراسم نامزدی',
    description: 'اجرای موسیقی ملایم برای مراسم نامزدی با ۸۰ مهمان',
    status: 'pending',
    createdAt: '2024-07-16T09:15:00Z',
    updatedAt: '2024-07-16T09:15:00Z',
    budget: 5500000,
    currency: 'تومان',
    category: 'موسیقی',
    client: {
      id: 'c5',
      name: 'ندا احمدی',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    },
    messages: 1,
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