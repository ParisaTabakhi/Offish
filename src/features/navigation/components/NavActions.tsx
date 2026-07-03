// src/features/navigation/components/NavActions.tsx
'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { Bell, Menu, X, CalendarPlus, LogIn } from 'lucide-react';
import { INavActionsProps } from '../types/navigation.types';
import { NAV_CONFIG } from '../data/navigation.config';
import { ROUTES } from '../../../shared/constants/routes';

// ============================================
// SUB-COMPONENTS
// ============================================

const BookingButton: React.FC = () => (
  <Link
    href='/booking'
    className="hidden md:flex bg-blue-600 text-white font-semibold px-6 py-2.5 items-center gap-1.5 rounded-md text-sm animate-border-glow hover:bg-blue-700 transition-all duration-300 ease-out hover:-translate-y-0.5 active:animate-button-press group"
    aria-label={NAV_CONFIG.ariaLabels.booking}
  >
    <CalendarPlus
      size={18}
      className="text-white transition-transform duration-300 ease-out group-hover:scale-[1.1]"
    />
    <span className="transition-transform duration-300 ease-out group-hover:scale-[1.03]">
      {NAV_CONFIG.bookingLabel}
    </span>
  </Link>
);

const AuthButton: React.FC = () => (
  <Link
    href="/auth/role"
    className="hidden md:flex text-blue-600 font-semibold px-4 py-2.5 items-center gap-1.5 rounded-md text-sm bg-blue-50/50 border-2 border-blue-100 hover:bg-blue-50 transition-all duration-200 active:scale-[0.98]"
    aria-label={NAV_CONFIG.ariaLabels.auth}
  >
    <LogIn size={18} className="text-blue-600" />
    {NAV_CONFIG.authLabel}
  </Link>
);

const NotificationsButton: React.FC = () => (
  <button
    className="relative hidden md:flex items-center justify-center w-10 h-10 rounded-lg border-2 border-blue-100 text-gray-700 bg-gray-50 hover:bg-gray-100 transition-all duration-200 active:scale-90"
    aria-label={NAV_CONFIG.ariaLabels.notifications}
  >
    <Bell size={20} className="text-gray-500" />
    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-lg border-2 border-white" />
  </button>
);

interface IMobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenuButton: React.FC<IMobileMenuButtonProps> = ({ isOpen, onToggle }) => (
  <button
    className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-all shadow-sm active:scale-95"
    onClick={onToggle}
    aria-label={isOpen ? NAV_CONFIG.ariaLabels.closeMenu : NAV_CONFIG.ariaLabels.menu}
  >
    {isOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
  </button>
);

// ============================================
// MAIN COMPONENT
// ============================================

const NavActions: React.FC<INavActionsProps> = ({ onMenuToggle, isMobileMenuOpen }) => {
  return (
    <div className="flex items-center gap-0 lg:gap-4">
      <BookingButton />
      <AuthButton />
      <NotificationsButton />
      <MobileMenuButton isOpen={isMobileMenuOpen} onToggle={onMenuToggle} />
    </div>
  );
};

export default memo(NavActions);