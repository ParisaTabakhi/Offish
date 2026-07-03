// src/features/auth/components/AuthFooter.tsx
'use client';

import React, { memo } from 'react';
import { useRouter } from 'next/navigation';
import { IAuthFooterProps } from '../types/auth.types';

const AuthFooter: React.FC<IAuthFooterProps> = ({
  role,
  text,
  linkText,
  linkHref,
}) => {
  const router = useRouter();
  const theme = {
    color: role === 'artist' ? '#f97316' : '#2745d1',
  };

  return (
    <p className="mt-8 text-center text-sm text-slate-500">
      {text}{' '}
      <button
        onClick={() => router.push(linkHref)}
        style={{ color: theme.color }}
        className="font-bold hover:underline"
      >
        {linkText}
      </button>
    </p>
  );
};

export default memo(AuthFooter);