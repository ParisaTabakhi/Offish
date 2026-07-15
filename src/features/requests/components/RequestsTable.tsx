'use client';

import React, { memo } from 'react';
import { ArrowUpDown, Inbox } from 'lucide-react';
import { IRequestsTableProps } from '../types/requests.types';
import { REQUEST_LABELS } from '../constants/requests.constants';
import RequestTableRow from './RequestTableRow';

const RequestsTable: React.FC<IRequestsTableProps> = ({
  requests,
  role,
  onRowClick,
  onStatusChange,
  onChatClick,
}) => {
  const labels = REQUEST_LABELS[role];

  if (requests.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center">
        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Inbox className="w-8 h-8 text-slate-300" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">هیچ درخواستی وجود ندارد</h3>
        <p className="text-sm text-slate-500 mt-1">
          {role === 'artist'
            ? 'هنوز درخواستی دریافت نشده است.'
            : 'هنوز درخواستی ارسال نشده است.'}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="grid grid-cols-12 items-center gap-3 px-8 py-3 bg-slate-50 border-b border-slate-200">
        <div className="col-span-3 flex items-center gap-1">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">عنوان</span>
          <ArrowUpDown className="w-3 h-3 text-slate-400" />
        </div>
        <div className="col-span-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
          {labels.otherParty}
        </div>
        <div className="col-span-2 text-xs font-bold text-slate-500 uppercase tracking-wider">بودجه</div>
        <div className="col-span-2 text-xs font-bold text-slate-500 uppercase tracking-wider">تاریخ</div>
        <div className="col-span-1 text-xs font-bold text-slate-500 uppercase tracking-wider">وضعیت</div>
        <div className="col-span-2 text-xs font-bold text-slate-500 uppercase tracking-wider text-left ml-8">عملیات</div>
      </div>

      {/* Body */}
      <div className="divide-y divide-slate-50">
        {requests.map((row) => (
          <RequestTableRow
            key={row.id}
            row={row}
            role={role}
            onRowClick={onRowClick}
            onStatusChange={onStatusChange}
            onChatClick={onChatClick}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(RequestsTable);