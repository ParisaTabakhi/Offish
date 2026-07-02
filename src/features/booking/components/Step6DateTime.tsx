// src/features/booking/components/Step6DateTime.tsx
'use client';

import React, { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { Calendar, Clock } from 'lucide-react';

const Step6DateTime: React.FC = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const eventDate = watch('eventDate');
  const startTime = watch('startTime');
  const endTime = watch('endTime');

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="space-y-6">
      {/* Date Selection */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          تاریخ برگزاری <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="date"
            {...register('eventDate')}
            min={today}
            className={`w-full pr-12 pl-4 py-3 border-2 rounded-lg focus:outline-none transition-colors text-right
              ${
                errors.eventDate
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:border-orange-500'
              }
            `}
          />
        </div>
        {errors.eventDate && (
          <p className="text-red-500 text-xs mt-1">{errors.eventDate.message as string}</p>
        )}
      </div>

      {/* Time Selection */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            ساعت شروع <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Clock className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="time"
              {...register('startTime')}
              className={`w-full pr-12 pl-4 py-3 border-2 rounded-lg focus:outline-none transition-colors text-right
                ${
                  errors.startTime
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-orange-500'
                }
              `}
            />
          </div>
          {errors.startTime && (
            <p className="text-red-500 text-xs mt-1">{errors.startTime.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            ساعت پایان
          </label>
          <div className="relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Clock className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="time"
              {...register('endTime')}
              className="w-full pr-12 pl-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-right"
            />
          </div>
        </div>
      </div>

      {/* Duration Display */}
      {eventDate && startTime && (
        <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
          <p className="text-sm text-green-800">
            <span className="font-semibold">زمان برگزاری:</span>
            <br />
            تاریخ: {new Date(eventDate).toLocaleDateString('fa-IR')}
            <br />
            ساعت شروع: {startTime}
            {endTime && ` - ساعت پایان: ${endTime}`}
          </p>
        </div>
      )}

      {/* Additional Notes */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          توضیحات تکمیلی
        </label>
        <textarea
          {...register('notes')}
          rows={4}
          placeholder="توضیحات اضافی در مورد رویداد..."
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors resize-none text-right"
        />
      </div>
    </div>
  );
};

export default memo(Step6DateTime);