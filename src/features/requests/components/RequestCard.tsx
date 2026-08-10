'use client';

import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  DollarSign,
  Tag,
  MessageSquare,
  User,
  ChevronDown,
  Info,
} from 'lucide-react';
import StatusBadge from '../../../shared/components/StatusBadge';
import RequestDetailContent from './RequestDetailContent';
import PriceOfferModal from './PriceOfferModal';
import { IRequestCardProps } from '../types/requests.types';
import { cn } from '../../../shared/lib/cn';
import { useToast } from '../../../shared/hooks/use-toast';

const RequestCard: React.FC<IRequestCardProps> = ({
  request,
  role,
  onStatusChange,
  onCardClick,
  onChatClick,
}) => {
  const { toast } = useToast();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isArtist = role === 'artist';
  const otherParty = isArtist ? request.client : request.artist;

  const formatBudget = (budget: { min: number; max: number } | undefined) => {
    if (!budget) return `${0} ${request.currency || 'تومان'}`;
    if (budget.min === budget.max) {
      return `${budget.min.toLocaleString()} ${request.currency || 'تومان'}`;
    }
    return `${budget.min.toLocaleString()} - ${budget.max.toLocaleString()} ${request.currency || 'تومان'}`;
  };

  const handlePriceOffer = (price: number) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsPriceModalOpen(false);
      onStatusChange?.(request.id, 'accepted');
      toast({
        title: '✅ قیمت پیشنهادی ارسال شد',
        description: `قیمت ${price.toLocaleString()} تومان برای "${request.title}" ارسال شد.`,
      });
    }, 1000);
  };

  const handleReject = (e: React.MouseEvent) => {
    e.stopPropagation();
    onStatusChange?.(request.id, 'rejected');
    toast({
      title: '❌ پیشنهاد رد شد',
      description: `درخواست "${request.title}" با موفقیت رد شد.`,
    });
  };

  const handleToggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  };

  const handleCardClick = () => {
    setIsExpanded((prev) => !prev);
    onCardClick?.(request.id);
  };

  const handleChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChatClick?.(request.id);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all cursor-pointer overflow-hidden"
      >
        {/* Main Card Content */}
        <div onClick={handleCardClick} className="p-5">
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            {/* Avatar & Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2745d1]/10 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-[#2745d1]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-slate-900 truncate">
                      {request.title}
                    </h3>
                    <StatusBadge status={request.status} size="sm" />
                  </div>
                  <p className="text-sm text-slate-500 mt-0.5">
                    {isArtist ? 'کارفرما:' : 'هنرمند:'} {otherParty?.name || 'نامشخص'}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                {request.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  {request.category}
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5" />
                  {formatBudget(request.budget)}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(request.createdAt).toLocaleDateString('fa-IR')}
                </span>
                {request.messages && request.messages > 0 && (
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    {request.messages} پیام
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              {request.status === 'pending' && isArtist && (
                <>
                   <button
                      onClick={(e) => { e.stopPropagation(); setIsPriceModalOpen(true); }}
                      className="px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-[#2745d1] to-[#4a6cf7] rounded-xl shadow-sm shadow-blue-200 hover:shadow-md hover:shadow-blue-300 transition-all duration-300 active:scale-95"
                    >
                      تعیین قیمت
                    </button>
                    <button
                      onClick={handleReject}
                      className="px-4 py-2 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-xl hover:bg-slate-200 transition-all duration-200 active:scale-95"
                    >
                      رد پیشنهاد
                    </button>
                </>
              )}

              {request.status === 'pending' && !isArtist && (
                <span className="text-xs text-slate-400 px-3 py-1 bg-slate-50 rounded-lg">
                  در انتظار پاسخ
                </span>
              )}

              {(request.status === 'accepted' || request.status === 'completed') && (
                <button
                  onClick={handleChat}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2745d1] text-white rounded-lg text-xs font-medium hover:bg-[#1a34b0] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  چت
                </button>
              )}

              {request.status === 'rejected' && (
                <span className="text-xs text-red-500 px-2 py-1 bg-red-50 rounded-lg">
                  رد شده
                </span>
              )}

              {request.status === 'cancelled' && (
                <span className="text-xs text-gray-400 px-2 py-1 bg-gray-50 rounded-lg">
                  لغو شده
                </span>
              )}

              {/* Expand/Collapse Button */}
              <button
                onClick={handleToggleExpand}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
                title={isExpanded ? 'بستن جزئیات' : 'مشاهده جزئیات'}
              >
                <ChevronDown
                  className={cn(
                    'w-5 h-5 transition-transform duration-300',
                    isExpanded && 'rotate-180'
                  )}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div
          className={cn(
            'transition-all duration-300 ease-in-out overflow-hidden',
            isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="px-5 pb-5 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-3">
              <Info className="w-4 h-4" />
              <span>جزئیات کامل درخواست</span>
            </div>
            <RequestDetailContent
              detail={request.detail}
              description={request.description}
              budget={request.budget}
              currency={request.currency}
              category={request.category}
              createdAt={request.createdAt}
              withName={otherParty?.name}
            />
          </div>
        </div>
      </motion.div>

      {/* Price Offer Modal */}
      <PriceOfferModal
        isOpen={isPriceModalOpen}
        onClose={() => setIsPriceModalOpen(false)}
        onConfirm={handlePriceOffer}
        requestTitle={request.title}
        currentBudget={request.budget}
        currency={request.currency}
        isLoading={isLoading}
      />
    </>
  );
};

export default memo(RequestCard);