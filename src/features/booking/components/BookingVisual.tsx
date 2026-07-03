// src/features/booking/components/BookingVisual.tsx
'use client';

import React, { memo } from 'react';
import { Calendar } from 'lucide-react';

const IMAGES = [
  'https://picsum.photos/seed/concert/600/400',
  'https://picsum.photos/seed/wedding/600/400',
  'https://picsum.photos/seed/conference/600/400',
  'https://picsum.photos/seed/party/600/400',
];

const BookingVisual: React.FC = () => {
  return (
    <div className="hidden lg:flex w-1/2 bg-[#f8fafc] relative overflow-hidden flex-col justify-between px-6 py-4">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2745d1]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Image Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-3 h-full content-center py-2">
        <div className="space-y-3 pt-4">
          <ImageCard src={IMAGES[0]} alt="Modern concert" className="h-44" />
          <ImageCard src={IMAGES[1]} alt="Wedding decoration" className="h-32" />
        </div>
        <div className="space-y-3 pt-4">
          <ImageCard src={IMAGES[2]} alt="Conference" className="h-32" />
          <ImageCard src={IMAGES[3]} alt="Birthday party" className="h-44" />
        </div>
      </div>

      {/* Bottom Card */}
      <div className="relative z-10 mt-3 bg-white/60 backdrop-blur-xl p-3 rounded-2xl border border-white/50 shadow-sm shrink-0">
        <div className="flex items-start gap-3">
          <div className="bg-orange-100 p-2 rounded-full shrink-0">
            <Calendar className="w-4 h-4 text-[#ff6b35]" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm">تجربه‌ای متفاوت از رزرو</h3>
            <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">
              ما در بازار رویداد با گردآوری بهترین‌های هر حوزه، خیال شما را از بابت کیفیت
              برگزاری مراسم آسوده می‌کنیم.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// Sub-component: ImageCard
// ============================================

interface IImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageCard: React.FC<IImageCardProps> = ({ src, alt, className = '' }) => (
  <div className={`rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 ${className}`}>
    <img alt={alt} className="w-full h-full object-cover" src={src} />
  </div>
);

export default memo(BookingVisual);