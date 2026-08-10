'use client';

import React, { useState, memo, useEffect } from 'react';
import { X, Send, DollarSign, Sparkles } from 'lucide-react';
import { cn } from '../../../shared/lib/cn';
import PriceInput from './PriceInput';

interface IPriceOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (price: number) => void;
  requestTitle: string;
  currentBudget?: {
    min: number;
    max: number;
  };
  currency?: string;
  isLoading?: boolean;
}

const PriceOfferModal: React.FC<IPriceOfferModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  requestTitle,
  currentBudget,
  currency = 'تومان',
  isLoading = false,
}) => {
  const [price, setPrice] = useState(currentBudget?.min || 0);

  useEffect(() => {
    if (isOpen) {
      setPrice(currentBudget?.min || 0);
    }
  }, [isOpen, currentBudget]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (price > 0) {
      onConfirm(price);
    }
  };

  const suggestedPrices = currentBudget
    ? [
        currentBudget.min,
        Math.round((currentBudget.min + currentBudget.max) / 2),
        currentBudget.max,
      ]
    : [];

  const handleSelectSuggestedPrice = (p: number) => {
    setPrice(p);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 left-3 p-1 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2745d1] to-[#4a6cf7] flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-200">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">تعیین قیمت پیشنهادی</h3>
          <p className="text-sm text-slate-500 mt-1">
            برای درخواست <span className="font-medium text-slate-700">{requestTitle}</span>
          </p>
        </div>

        {currentBudget && (
          <div className="bg-slate-50 rounded-xl p-3 mb-4 text-center">
            <p className="text-xs text-slate-400">محدوده بودجه اعلام‌شده</p>
            <p className="text-sm font-bold text-slate-800">
              {currentBudget.min.toLocaleString()} - {currentBudget.max.toLocaleString()} {currency}
            </p>
          </div>
        )}

        <div className="flex justify-center mb-6">
          <PriceInput
            value={price}
            onChange={setPrice}
            min={0}
            max={100000000}
            step={500000}
          />
        </div>

        {suggestedPrices.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="text-[10px] text-slate-400 flex items-center">پیشنهادی:</span>
            {suggestedPrices.map((p, i) => {
              const isSelected = price === p;
              return (
                <button
                  key={i}
                  onClick={() => handleSelectSuggestedPrice(p)}
                  className={cn(
                    'px-3 py-1 text-xs font-medium rounded-lg transition-all duration-200 border',
                    isSelected
                      ? 'bg-[#2745d1] text-white border-[#2745d1] shadow-sm shadow-blue-200'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200 hover:border-slate-300'
                  )}
                >
                  {p.toLocaleString()}
                </button>
              );
            })}
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
          >
            انصراف
          </button>
          <button
            onClick={handleConfirm}
            disabled={isLoading || price <= 0}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#2745d1] to-[#4a6cf7] text-white rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Send className="w-4 h-4" />
                ارسال قیمت
                <Sparkles className="w-3 h-3 text-white/60" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(PriceOfferModal);