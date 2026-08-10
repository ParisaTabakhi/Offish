'use client';

import React, { useState, memo } from 'react';
import { MessageSquare, Eye, X } from 'lucide-react';
import StatusBadge from '../../../shared/components/StatusBadge';
import RequestDetailModal from './RequestDetailModal';
import PriceOfferModal from './PriceOfferModal';
import { IRequestTableRowProps } from '../types/requests.types';
import { useToast } from '../../../shared/hooks/use-toast';

const RequestTableRow: React.FC<IRequestTableRowProps> = ({
  row,
  role,
  onRowClick,
  onStatusChange,
  onChatClick,
}) => {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isArtist = role === 'artist';

  const handlePriceOffer = (price: number) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsPriceModalOpen(false);
      onStatusChange?.(row.id, 'accepted');
      toast({
        title: '✅ قیمت پیشنهادی ارسال شد',
        description: `قیمت ${price.toLocaleString()} تومان برای "${row.title}" ارسال شد.`,
      });
    }, 1000);
  };

  const handleReject = (e: React.MouseEvent) => {
    e.stopPropagation();
    onStatusChange?.(row.id, 'rejected');
    toast({
      title: '❌ پیشنهاد رد شد',
      description: `درخواست "${row.title}" با موفقیت رد شد.`,
    });
  };

  const handleChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChatClick?.(row.id);
  };

  const handleRowClick = () => {
    setIsModalOpen(true);
    onRowClick?.(row.id);
  };

  const parseBudget = (budget: string): { min: number; max: number } | undefined => {
    const clean = budget.replace(/[^0-9-]/g, '');
    const parts = clean.split('-').filter(Boolean);
    if (parts.length === 2) {
      return { min: parseInt(parts[0]) || 0, max: parseInt(parts[1]) || 0 };
    }
    if (parts.length === 1) {
      const val = parseInt(parts[0]) || 0;
      return { min: val, max: val };
    }
    return undefined;
  };

  return (
    <>
      <div
        onClick={handleRowClick}
        className="group grid grid-cols-12 items-center gap-3 px-6 py-3 bg-white border-b border-slate-100 hover:bg-blue-50/50 transition-all duration-200 cursor-pointer"
      >
        <div className="col-span-2">
          <p className="text-sm font-bold text-slate-800 truncate">{row.title}</p>
          <p className="text-xs text-slate-400">{row.category}</p>
        </div>

        <div className="col-span-2">
          <p className="text-sm text-slate-600 truncate">
            {isArtist ? row.client : row.artist}
          </p>
        </div>

        <div className="col-span-3">
          <p className="text-sm font-medium text-slate-700">{row.budget}</p>
        </div>

        <div className="col-span-2">
          <p className="text-sm text-slate-500">{row.date}</p>
        </div>

        <div className="col-span-1">
          <StatusBadge status={row.status} size="sm" />
        </div>

        <div className="col-span-2 flex items-center justify-end gap-1.5">
          {row.status === 'pending' && isArtist && (
            <>
               <button
                  onClick={(e) => { e.stopPropagation(); setIsPriceModalOpen(true); }}
                  className="px-3.5 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-[#2745d1] to-[#4a6cf7] rounded-lg shadow-sm shadow-blue-200 hover:shadow-md hover:shadow-blue-300 transition-all duration-300 active:scale-95"
                >
                  تعیین قیمت
                </button>
                <button
                  onClick={handleReject}
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-lg hover:bg-slate-200 transition-all duration-200 active:scale-95"
                >
                  رد پیشنهاد
                </button>
            </>
          )}

          {(row.status === 'accepted' || row.status === 'completed') && (
            <button
              onClick={handleChat}
              className="p-1.5 rounded-lg bg-[#2745d1]/10 text-[#2745d1] hover:bg-[#2745d1]/20 transition-colors"
              title="چت"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={handleRowClick}
            className="p-1.5 rounded-lg bg-slate-50 text-slate-400 hover:bg-slate-100 transition-colors opacity-0 group-hover:opacity-100"
            title="مشاهده جزئیات"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modals */}
      <RequestDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        request={row}
        role={role}
      />

      <PriceOfferModal
        isOpen={isPriceModalOpen}
        onClose={() => setIsPriceModalOpen(false)}
        onConfirm={handlePriceOffer}
        requestTitle={row.title}
        currentBudget={parseBudget(row.budget)}
        currency={row.currency}
        isLoading={isLoading}
      />
    </>
  );
};

export default memo(RequestTableRow);