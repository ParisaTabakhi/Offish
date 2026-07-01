// src/features/navigation/components/NavItem.tsx
'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { INavItemProps } from '../types/navigation.types';

const NavItem: React.FC<INavItemProps> = ({ item, isActive, onClick }) => {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`
        relative font-medium py-2 transition-colors
        ${isActive ? 'text-blue-700' : 'text-gray-600 hover:text-blue-700'}
      `}
    >
      {item.label}
      <span
        className={`
          absolute right-0 -bottom-0.5 h-[2px] bg-blue-700 rounded-full transition-all
          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
        `}
      />
    </Link>
  );
};

export default memo(NavItem);