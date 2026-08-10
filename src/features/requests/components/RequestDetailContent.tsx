'use client';

import React, { memo } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  User,
  MessageSquare,
  Tag,
  DollarSign,
  CheckCircle,
} from 'lucide-react';
import { IRequestDetail } from '../types/requests.types';
import { log } from 'console';

interface IRequestDetailContentProps {
  detail?: IRequestDetail;
  description?: string;
  budget?: {
    min: number;
    max: number;
  };
  currency?: string;
  category?: string;
  createdAt?: string;
  withName?: string;
}

const RequestDetailContent: React.FC<IRequestDetailContentProps> = ({
  detail,
  description,
  budget,
  currency = 'تومان',
  category,
  createdAt,
  withName,
}) => {
  const formatBudget = (budget: { min: number; max: number }) => {
    if (budget?.min === budget.max) {
      return `${budget?.min?.toLocaleString()} ${currency}`;
    }
    return `${budget?.min?.toLocaleString()} - ${budget?.max?.toLocaleString()} ${currency}`;
  };

  const formatTimeRange = (startTime?: string, endTime?: string) => {
    if (startTime && endTime) {
      return `${startTime} - ${endTime}`;
    }
    if (startTime) {
      return `شروع ${startTime}`;
    }
    if (endTime) {
      return `پایان ${endTime}`;
    }
    return null;
  };

  const timeRange = formatTimeRange(detail?.startTime, detail?.endTime);

  // const findFirstOnduplicateNumber = () =>{
  //   const numbers = [4, 2, 1, 2, 1, 5, 4, 6];
  //   let obj = {};
  //   let result= [];

  //   for(let i =0; i<numbers.length ; i++){
  //     if(!obj[numbers[i]]){
  //       obj[numbers[i]] = 1;
  //     }else{
  //       obj[numbers[i]]++;
  //     }
  //   }
  //   for(const key in obj){
      
  //     if(obj[key]===1){
  //     console.log('obj' , obj.key);

  //       result.push(obj.key)
  //     }
  //   }
  //   console.log('result' , result , obj);
    
  //   return result[0];
  // }
  // findFirstOnduplicateNumber();

  return (
    <div className="space-y-4">
      {/* Description */}
      {description && (
        <div>
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
            توضیحات
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed">{description}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Budget */}
        {budget && (
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <DollarSign className="w-4 h-4 text-[#2745d1]" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                محدوده بودجه
              </p>
              <p className="text-sm font-bold text-slate-800">
                {formatBudget(budget)}
              </p>
            </div>
          </div>
        )}

        {/* ✅ تاریخ رویداد - جدید */}
        {detail?.eventDate && (
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4 text-rose-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                تاریخ رویداد
              </p>
              <p className="text-sm font-bold text-slate-800">{detail.eventDate}</p>
            </div>
          </div>
        )}

        {/* ✅ بازه زمانی رویداد - جدید */}
        {timeRange && (
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-indigo-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                ساعت رویداد
              </p>
              <p className="text-sm font-bold text-slate-800">{timeRange}</p>
            </div>
          </div>
        )}

        {/* Category */}
        {category && (
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
              <Tag className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                دسته‌بندی
              </p>
              <p className="text-sm font-bold text-slate-800">{category}</p>
            </div>
          </div>
        )}

        {/* تاریخ ثبت درخواست */}
        {createdAt && (
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4 text-orange-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                تاریخ ثبت درخواست
              </p>
              <p className="text-sm font-bold text-slate-800">
                {new Date(createdAt).toLocaleDateString('fa-IR')}
              </p>
            </div>
          </div>
        )}

        {/* With */}
        {withName && (
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
              <User className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                طرف مقابل
              </p>
              <p className="text-sm font-bold text-slate-800">{withName}</p>
            </div>
          </div>
        )}
      </div>

      {/* Detail Fields */}
      {detail && (
        <div className="border-t border-slate-100 pt-4 mt-2">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            اطلاعات تکمیلی
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Event Type */}
            {detail.eventType && (
              <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-400">نوع رویداد:</span>
                <span className="font-medium text-slate-700">{detail.eventType}</span>
              </div>
            )}

            {/* Guests */}
            {detail.guestsCount && (
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400">تعداد مهمانان:</span>
                <span className="font-medium text-slate-700">{detail.guestsCount} نفر</span>
              </div>
            )}

            {/* Age Ranges */}
            {detail.ageRanges && detail.ageRanges.length > 0 && (
              <div className="flex items-center gap-2 text-sm col-span-full">
                <span className="text-slate-400">رده سنی:</span>
                <div className="flex flex-wrap gap-1">
                  {detail.ageRanges.map((range, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-blue-50 text-[#2745d1] rounded-full text-xs font-medium"
                    >
                      {range}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Address */}
            {(detail.address || detail.city || detail.district) && (
              <div className="flex items-start gap-2 text-sm col-span-full">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <span className="text-slate-400">آدرس:</span>
                <span className="font-medium text-slate-700">
                  {[detail.city, detail.district, detail.address]
                    .filter(Boolean)
                    .join('، ')}
                </span>
              </div>
            )}

            {/* Offered Price */}
            {detail.offeredPrice && (
              <div className="flex items-center gap-2 text-sm col-span-full">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-slate-400">قیمت پیشنهادی:</span>
                <span className="font-bold text-green-600">
                  {detail.offeredPrice.toLocaleString()} {currency}
                </span>
              </div>
            )}

            {/* Notes */}
            {detail.notes && (
              <div className="flex items-start gap-2 text-sm col-span-full">
                <MessageSquare className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <span className="text-slate-400">توضیحات:</span>
                <span className="font-medium text-slate-700">{detail.notes}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(RequestDetailContent);