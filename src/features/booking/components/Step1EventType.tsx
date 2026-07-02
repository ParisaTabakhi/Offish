// src/features/booking/components/Step1EventType.tsx
'use client';

import React, { useState, memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { Search, Sparkles } from 'lucide-react';
import { EVENT_TYPES } from '../data/booking.data';

const Step1EventType: React.FC = () => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedValue = watch('eventType');
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredEventTypes = EVENT_TYPES.filter((event) =>
    event.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (eventType: typeof EVENT_TYPES[0]) => {
    setValue('eventType', eventType.value, { shouldValidate: true });
    setSearchTerm(eventType.label);
    setIsOpen(false);
  };

  const selectedEvent = EVENT_TYPES.find((e) => e.value === selectedValue);

  return (
    <div className="space-y-6">
      <div className="relative group">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          جستجوی نوع رویداد <span className="text-[#ff6b35]">*</span>
        </label>
        <div className="relative">
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <Search
              className={`w-5 h-5 transition-colors ${
                isOpen ? 'text-[#2745d1]' : 'text-gray-400'
              }`}
            />
          </div>
          <input
            type="text"
            value={searchTerm || (selectedEvent ? selectedEvent.label : '')}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="مثلا: جشن تولد، عروسی..."
            className={`w-full pr-12 pl-4 py-4 border rounded-xl focus:ring-4 focus:ring-blue-50 focus:outline-none transition-all text-right bg-gray-50 focus:bg-white text-gray-800 placeholder:text-gray-400 shadow-sm
              ${
                errors.eventType
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-200 focus:border-[#2745d1]'
              }
            `}
          />
        </div>
        {errors.eventType && (
          <p className="text-red-500 text-xs mt-1">{errors.eventType.message as string}</p>
        )}

        {/* Dropdown Results */}
        {isOpen && (
          <div className="absolute z-20 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl max-h-72 overflow-y-auto custom-scrollbar animate-in fade-in slide-in-from-top-2">
            {filteredEventTypes.length > 0 ? (
              filteredEventTypes.map((event) => (
                <div
                  key={event.value}
                  onClick={() => handleSelect(event)}
                  className={`px-5 py-4 cursor-pointer hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-b-0 flex items-center justify-between group/item ${
                    selectedValue === event.value ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl filter grayscale group-hover/item:grayscale-0 transition-all">
                      {event.icon}
                    </span>
                    <div className="flex flex-col">
                      <span
                        className={`font-bold ${
                          selectedValue === event.value ? 'text-[#2745d1]' : 'text-gray-700'
                        }`}
                      >
                        {event.label}
                      </span>
                      <span className="text-xs text-gray-400 mt-0.5">
                        {event.description}
                      </span>
                    </div>
                  </div>
                  {selectedValue === event.value && (
                    <Sparkles className="w-4 h-4 text-[#ff6b35]" />
                  )}
                </div>
              ))
            ) : (
              <div className="px-4 py-6 text-gray-500 text-center flex flex-col items-center gap-2">
                <Search className="w-8 h-8 text-gray-300" />
                <p>نتیجه‌ای یافت نشد</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Quick Selection Chips */}
      {!isOpen && !selectedEvent && (
        <div className="pt-2">
          <p className="text-xs text-gray-400 mb-3 font-medium">پیشنهادات محبوب:</p>
          <div className="flex flex-wrap gap-2">
            {EVENT_TYPES.slice(0, 4).map((type) => (
              <button
                type="button"
                key={type.value}
                onClick={() => handleSelect(type)}
                className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-[#2745d1] hover:text-[#2745d1] hover:shadow-sm transition-all"
              >
                {type.icon} {type.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Selected Confirmation Card */}
      {selectedValue && !isOpen && (
        <div className="p-5 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl flex items-center gap-4 animate-in fade-in zoom-in-95">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-2xl border border-blue-50">
            {selectedEvent?.icon}
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">رویداد انتخاب شده:</p>
            <p className="text-lg font-bold text-[#2745d1]">{selectedEvent?.label}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Step1EventType);