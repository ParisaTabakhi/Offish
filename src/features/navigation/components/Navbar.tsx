// src/features/navigation/components/Navbar.tsx
'use client';

import React, { memo } from 'react';
import { useMobileMenu } from '../hooks/useMobileMenu';
import { NAV_ITEMS, NAV_CONFIG } from '../data/navigation.config';
import { INavbarProps } from '../types/navigation.types';
import NavLogo from './NavLogo';
import DesktopNav from './DesktopNav';
import NavActions from './NavActions';
import MobileNav from './MobileNav';

// ============================================
// MAIN COMPONENT
// ============================================

const Navbar: React.FC<INavbarProps> = ({
  menuItems = NAV_ITEMS,
  logoText = NAV_CONFIG.logoText,
  className = '',
}) => {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <>
      <header
        dir="rtl"
        className={`
          w-full backdrop-blur-sm bg-white/70 border-b border-gray-100 
          fixed top-0 z-50 transition-all ${className}
        `}
        style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)' }}
      >
        <div className="mx-auto max-w-9xl px-4 md:px-8 lg:px-12 py-3 flex items-center justify-between h-[68px]">
          {/* Logo */}
          <NavLogo text={logoText} />

          {/* Desktop Navigation */}
          <DesktopNav items={menuItems} />

          {/* Actions (Buttons + Mobile Toggle) */}
          <NavActions onMenuToggle={toggleMenu} isMobileMenuOpen={isOpen} />
        </div>

        {/* Mobile Navigation */}
        <MobileNav isOpen={isOpen} onClose={closeMenu} items={menuItems} />
      </header>

      {/* Spacer to prevent content from hiding behind navbar */}
      <div className="h-[68px]" />
    </>
  );
};

export default memo(Navbar);