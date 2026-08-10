'use client';

import { useState } from 'react';
import { RequestsList } from '../../../../features/requests';
import { IRequest, IRequestStats } from '../../../../features/requests/types/requests.types';
import { useToast } from '../../../../shared/hooks/use-toast';
import {mockEmployerRequests} from '../../../(dashboard)/employer/data'


export default function EmployerRequestsPage() {
  const { toast } = useToast();
  const [requests, setRequests] = useState<IRequest[]>(mockEmployerRequests);

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
        ? 'درخواست با موفقیت تایید شد. می‌توانید با هنرمند چت کنید.'
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
      description: 'صفحه چت با هنرمند باز خواهد شد.',
    });
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-black text-slate-900">درخواست‌های ارسال‌شده</h1>
        <p className="text-slate-500 text-sm mt-1">
          درخواست‌های ارسال‌شده به هنرمندان را مشاهده و مدیریت کنید.
        </p>
      </div>

      <RequestsList
        requests={requests}
        stats={stats}
        role="planner"
        onStatusChange={handleStatusChange}
        onCardClick={handleCardClick}
        onChatClick={handleChatClick}
      />
    </div>
  );
}