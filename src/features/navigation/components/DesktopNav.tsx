// src/features/navigation/components/DesktopNav.tsx
'use client';

import React, { memo } from 'react';
import { usePathname } from 'next/navigation';
import NavItem from './NavItem';
import { IDesktopNavProps } from '../types/navigation.types';

const DesktopNav: React.FC<IDesktopNavProps> = ({ items }) => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-10">
      {items.map((item) => (
        <NavItem
          key={item.href}
          item={item}
          isActive={pathname === item.href}
        />
      ))}
    </nav>
  );
};

export default memo(DesktopNav);