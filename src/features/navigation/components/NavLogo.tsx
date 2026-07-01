// src/features/navigation/components/NavLogo.tsx
'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { ROUTES } from '../../../shared/constants/routes';

interface INavLogoProps {
  text: string;
}

const NavLogo: React.FC<INavLogoProps> = ({ text }) => {
  return (
    <Link
      href={ROUTES.HOME}
      className="text-3xl font-extrabold text-blue-800 select-none tracking-tight cursor-pointer hover:opacity-90 transition-opacity duration-200"
    >
      {text}
    </Link>
  );
};

export default memo(NavLogo);