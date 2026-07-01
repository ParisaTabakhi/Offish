// src/features/footer/components/FooterSocial.tsx
'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { ISocialLink } from '../types/footer.types';

interface IFooterSocialProps {
  links: ISocialLink[];
}

const FooterSocial: React.FC<IFooterSocialProps> = ({ links }) => {
  return (
    <div className="flex gap-4">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.href}
            aria-label={link.ariaLabel}
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <Icon className="w-5 h-5" />
          </Link>
        );
      })}
    </div>
  );
};

export default memo(FooterSocial);