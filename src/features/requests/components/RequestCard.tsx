'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  DollarSign,
  Tag,
  MessageSquare,
  User,
  Check,
  X,
} from 'lucide-react';
import StatusBadge from '../../../shared/components/StatusBadge';
import { IRequestCardProps } from '../types/requests.types';

const RequestCard: React.FC<IRequestCardProps> = ({
  request,
  role,
  onStatusChange,
  onCardClick,
  onChatClick,
}) => {
  const isArtist = role === 'artist';
  const otherParty = isArtist ? request.client : request.artist;

  const handleAccept = (e: React.MouseEvent) => {
    e.stopPropagation();
    onStatusChange?.(request.id, 'accepted');
  };

  const handleReject = (e: React.MouseEvent) => {
    e.stopPropagation();
    onStatusChange?.(request.id, 'rejected');
  };

  const handleChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChatClick?.(request.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => onCardClick?.(request.id)}
      className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all cursor-pointer"
    >
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
              <div className='flex items-center gap-4 mt-4'>
              <p className="text-sm text-slate-500 mt-0.5">
                {isArtist ? 'کارفرما:' : 'هنرمند:'} {otherParty?.name || 'نامشخص'}
              </p>
               <div className="flex flex-wrap gap-4  text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              {request.category}
            </span>
            <span className="flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5" />
              {request.budget.toLocaleString()} {request.currency}
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
            </div>
            
          </div>

          <p className="text-sm text-slate-600 mt-2 line-clamp-2 mr-[50px]">
            {request.description}
          </p>

         
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {request.status === 'pending' && isArtist && (
            <>
              <button
                onClick={handleAccept}
                className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                title="تایید"
              >
                <Check className="w-4 h-4" />
              </button>
              <button
                onClick={handleReject}
                className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                title="رد"
              >
                <X className="w-4 h-4" />
              </button>
            </>
          )}

          {request.status === 'pending' && !isArtist && (
            <span className="text-xs text-slate-400 px-2 py-1 bg-slate-50 rounded-lg">
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
        </div>
      </div>
    </motion.div>
  );
};

export default memo(RequestCard);