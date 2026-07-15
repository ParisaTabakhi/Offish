'use client';

import React, { memo } from 'react';
import { Check, X, MessageSquare, Eye } from 'lucide-react';
import StatusBadge from '../../../shared/components/StatusBadge';
import { IRequestTableRowProps } from '../types/requests.types';

const RequestTableRow: React.FC<IRequestTableRowProps> = ({
  row,
  role,
  onRowClick,
  onStatusChange,
  onChatClick,
}) => {
  const isArtist = role === 'artist';

  const handleAccept = (e: React.MouseEvent) => {
    e.stopPropagation();
    onStatusChange?.(row.id, 'accepted');
  };

  const handleReject = (e: React.MouseEvent) => {
    e.stopPropagation();
    onStatusChange?.(row.id, 'rejected');
  };

  const handleChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChatClick?.(row.id);
  };

  return (
    <div
      onClick={() => onRowClick?.(row.id)}
      className="group grid grid-cols-12 items-center gap-3 px-4 py-3 bg-white border-b border-slate-100 hover:bg-blue-50/50 transition-all duration-200 cursor-pointer"
    >
      <div className="col-span-3">
        <p className="text-sm font-bold text-slate-800 truncate">{row.title}</p>
        <p className="text-xs text-slate-400">{row.category}</p>
      </div>

      <div className="col-span-2">
        <p className="text-sm text-slate-600 truncate">
          {isArtist ? row.client : row.artist}
        </p>
      </div>

      <div className="col-span-2">
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
              onClick={handleAccept}
              className="p-1.5 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
              title="تایید"
            >
              <Check className="w-4 h-4" />
            </button>
            <button
              onClick={handleReject}
              className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
              title="رد"
            >
              <X className="w-4 h-4" />
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
          onClick={() => onRowClick?.(row.id)}
          className="p-1.5 rounded-lg bg-slate-50 text-slate-400 hover:bg-slate-100 transition-colors opacity-0 group-hover:opacity-100"
          title="مشاهده جزئیات"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default memo(RequestTableRow);