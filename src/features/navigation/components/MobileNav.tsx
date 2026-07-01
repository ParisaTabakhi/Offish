// src/features/navigation/components/MobileNav.tsx
'use client';

import React, { memo, useEffect } from 'react';
import Link from 'next/link';
import { CalendarPlus, LogIn } from 'lucide-react';
import { IMobileMenuProps } from '../types/navigation.types';
import { NAV_CONFIG } from '../data/navigation.config';
import { ROUTES } from '../../../shared/constants/routes';

// ============================================
// SUB-COMPONENTS
// ============================================

const MobileMenuItem: React.FC<{
  item: { label: string; href: string };
  onClose: () => void;
}> = ({ item, onClose }) => (
  <Link
    href={item.href}
    onClick={onClose}
    className="text-gray-700 text-lg py-3 hover:bg-blue-50 rounded-lg px-2 font-medium"
  >
    {item.label}
  </Link>
);

const MobileActions: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="flex flex-col gap-3 pt-5 border-t border-gray-100 mt-2">
    <Link
      href={ROUTES.BOOKING}
      onClick={onClose}
      className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-base font-semibold shadow-md flex justify-center items-center gap-2 transition-colors active:scale-[0.98]"
    >
      <CalendarPlus size={18} className="text-white" />
      {NAV_CONFIG.bookingLabel}
    </Link>

    <Link
      href={ROUTES.AUTH}
      onClick={onClose}
      className="py-3 rounded-xl border border-blue-200 bg-white text-blue-700 text-base font-semibold hover:bg-blue-50 transition-all shadow-sm active:scale-[0.98] flex justify-center items-center gap-2"
    >
      <LogIn size={18} className="text-blue-700" />
      {NAV_CONFIG.authLabel}
    </Link>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

const MobileNav: React.FC<IMobileMenuProps> = ({ isOpen, onClose, items }) => {
  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-[68px] left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-5 flex flex-col gap-2 animate-slideDown">
      {items.map((item) => (
        <MobileMenuItem key={item.href} item={item} onClose={onClose} />
      ))}
      <MobileActions onClose={onClose} />
    </div>
  );
};

export default memo(MobileNav);