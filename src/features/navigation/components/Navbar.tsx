'use client';

import React, { memo, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ROUTES } from '../../../shared/constants/routes';
import { NAV_ITEMS, NAV_CONFIG } from '../data/navigation.config';
import { useNavbarMode } from '../hooks/useNavbarMode';
import NavActions from './NavActions';
import { cn } from '../../../shared/lib/cn';

interface INavbarProps {
  onMenuClick?: () => void;
}

const Navbar: React.FC<INavbarProps> = ({ onMenuClick }) => {
  const pathname = usePathname();
  const mode = useNavbarMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (onMenuClick) {
      onMenuClick();
    }
  };

  const isDashboard = mode === 'dashboard';

  return (
    <>
      <header
        dir="rtl"
        className={cn(
          'w-full backdrop-blur-md border-b fixed top-0 z-50 transition-all duration-300',
          isDashboard
            ? 'bg-white/80 border-slate-100'
            : 'bg-white/60 border-gray-100'
        )}
        style={{ 
          boxShadow: isDashboard 
            ? '0 1px 2px rgba(0,0,0,0.03)' 
            : '0 1px 3px rgba(0,0,0,0.04)' 
        }}
      >
        <div className="mx-auto max-w-9xl px-4 md:px-8 lg:px-12 py-2.5 flex items-center justify-between h-[60px]">
          {/* Logo */}
          <Link
            href={ROUTES.HOME}
            className={cn(
              'text-2xl font-extrabold select-none tracking-tight cursor-pointer hover:opacity-70 transition-opacity duration-200',
              isDashboard ? 'text-slate-800' : 'text-blue-800',
              isDashboard ? 'mr-0' : 'mr-8'
            )}
          >
            {NAV_CONFIG.logoText}
          </Link>

          {/* Navigation */}
          {!isDashboard && (
            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={`nav-${item.href}-${index}`} // ✅ کلید یکتا با index
                  href={item.href}
                  className={`relative font-medium py-1.5 text-sm transition-colors ${
                    pathname === item.href
                      ? 'text-blue-700'
                      : 'text-slate-600 hover:text-blue-700'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute right-0 -bottom-0.5 h-[1.5px] bg-blue-700 rounded-full transition-all ${
                      pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>
          )}

          {/* Actions */}
          <NavActions
            onMenuToggle={handleMenuToggle}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[60px]" />
    </>
  );
};

export default memo(Navbar);