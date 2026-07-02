// src/features/booking/components/Step5Address.tsx
'use client';

import React, { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { MapPin, ChevronDown } from 'lucide-react';
import { CITIES, DISTRICTS } from '../data/booking.data';

const Step5Address: React.FC = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const selectedCity = watch('city');
  const selectedCityDistricts = selectedCity ? DISTRICTS[selectedCity] || [] : [];
  const selectedDistrict = watch('district');
  const address = watch('address');

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue('city', e.target.value, { shouldValidate: true });
    setValue('district', '', { shouldValidate: true });
  };

  return (
    <div className="space-y-6">
      {/* City Selection */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          شهر <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            {...register('city')}
            onChange={handleCityChange}
            className={`w-full px-4 py-3 pr-4 pl-12 border-2 rounded-lg focus:outline-none transition-colors appearance-none text-right bg-white
              ${
                errors.city
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:border-orange-500'
              }
            `}
          >
            <option value="">انتخاب شهر...</option>
            {CITIES.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
        {errors.city && (
          <p className="text-red-500 text-xs mt-1">{errors.city.message as string}</p>
        )}
      </div>

      {/* District Selection */}
      {selectedCityDistricts.length > 0 && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            منطقه / محله <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              {...register('district')}
              className={`w-full px-4 py-3 pr-4 pl-12 border-2 rounded-lg focus:outline-none transition-colors appearance-none text-right bg-white
                ${
                  errors.district
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-orange-500'
                }
              `}
            >
              <option value="">انتخاب منطقه...</option>
              {selectedCityDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
          {errors.district && (
            <p className="text-red-500 text-xs mt-1">{errors.district.message as string}</p>
          )}
        </div>
      )}

      {/* Detailed Address */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          آدرس دقیق <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute right-3 top-3 pointer-events-none">
            <MapPin className="w-5 h-5 text-gray-400" />
          </div>
          <textarea
            {...register('address')}
            rows={4}
            placeholder="خیابان، کوچه، پلاک، واحد..."
            className={`w-full pr-12 pl-4 py-3 border-2 rounded-lg focus:outline-none transition-colors resize-none text-right
              ${
                errors.address
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:border-orange-500'
              }
            `}
          />
        </div>
        {errors.address && (
          <p className="text-red-500 text-xs mt-1">{errors.address.message as string}</p>
        )}
      </div>

      {/* Selected Display */}
      {selectedCity && selectedDistrict && address && (
        <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
          <p className="text-sm text-green-800">
            <span className="font-semibold">آدرس کامل:</span>
            <br />
            {CITIES.find((c) => c.value === selectedCity)?.label}، {selectedDistrict}
            <br />
            {address}
          </p>
        </div>
      )}
    </div>
  );
};

export default memo(Step5Address);