'use client';

import React, { useState, memo, useEffect } from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '../../../shared/lib/cn';

interface IPriceInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

const PriceInput: React.FC<IPriceInputProps> = ({
  value,
  onChange,
  min = 0,
  max = 100000000,
  step = 500000,
  className = '',
}) => {
  const [inputValue, setInputValue] = useState(value.toString());

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const handleIncrement = () => {
    const newValue = Math.min(value + step, max);
    onChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(value - step, min);
    onChange(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    setInputValue(raw);
    const num = parseInt(raw) || 0;
    if (num >= min && num <= max) {
      onChange(num);
    }
  };

  const handleBlur = () => {
    const num = parseInt(inputValue) || 0;
    const clamped = Math.max(min, Math.min(num, max));
    onChange(clamped);
    setInputValue(clamped.toString());
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <button
        onClick={handleDecrement}
        className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors active:scale-95 disabled:opacity-50"
        disabled={value <= min}
      >
        <Minus className="w-4 h-4 text-slate-400" />
      </button>

      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="w-28 text-center px-2 py-1.5 border-2 border-slate-200 rounded-lg text-sm font-bold text-slate-800 focus:border-[#2745d1] focus:outline-none focus:ring-2 focus:ring-[#2745d1]/20 transition-all"
          placeholder="۰"
        />
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] text-slate-400 whitespace-nowrap">
          تومان
        </span>
      </div>

      <button
        onClick={handleIncrement}
        className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors active:scale-95 disabled:opacity-50"
        disabled={value >= max}
      >
        <Plus className="w-4 h-4 text-slate-400" />
      </button>
    </div>
  );
};

export default memo(PriceInput);