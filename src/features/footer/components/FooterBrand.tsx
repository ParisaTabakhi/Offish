// src/features/footer/components/FooterBrand.tsx
'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { Music2 } from 'lucide-react';
import FooterSocial from './FooterSocial';
import { ISocialLink } from '../types/footer.types';

interface IFooterBrandProps {
  name: string;
  description: string;
  socialLinks: ISocialLink[];
}

const FooterBrand: React.FC<IFooterBrandProps> = ({
  name,
  description,
  socialLinks,
}) => {
  return (
    <div>
      <Link href="/" className="flex items-center gap-3 mb-6 group">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
          <Music2 className="w-6 h-6 text-white" />
        </div>
        <span className="text-2xl font-bold">{name}</span>
      </Link>

      <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
        {description}
      </p>

      <FooterSocial links={socialLinks} />
    </div>
  );
};

export default memo(FooterBrand);