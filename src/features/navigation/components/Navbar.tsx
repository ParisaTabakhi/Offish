'use client';

import React, { memo, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ROUTES } from '../../../shared/constants/routes';
import { NAV_ITEMS, NAV_CONFIG } from '../data/navigation.config';
import HamburgerButton from '../../../shared/components/HamburgerButton';
import NavActions from './NavActions';

interface INavbarProps {
  onMenuClick?: () => void;
}

const Navbar: React.FC<INavbarProps> = ({ onMenuClick }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (onMenuClick) {
      onMenuClick();
    }
  };

  return (
    <header
      dir="rtl"
      className="w-full backdrop-blur-sm bg-white/70 border-b border-gray-100 fixed top-0 z-50 transition-all"
      style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)' }}
    >
      <div className="mx-auto max-w-9xl px-4 md:px-8 lg:px-12 py-3 flex items-center justify-between h-[68px]">
          <Link
            href={ROUTES.HOME}
            className="text-3xl font-extrabold mr-8 text-blue-800 select-none tracking-tight cursor-pointer hover:opacity-90 transition-opacity duration-200"
          >
            {NAV_CONFIG.logoText}
          </Link>
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative font-medium py-2 transition-colors ${
                pathname === item.href
                  ? 'text-blue-700'
                  : 'text-gray-600 hover:text-blue-700'
              }`}
            >
              {item.label}
              <span
                className={`absolute right-0 -bottom-0.5 h-[2px] bg-blue-700 rounded-full transition-all ${
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        <NavActions
          onMenuToggle={handleMenuToggle}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </div>
    </header>
  );
};

export default memo(Navbar);