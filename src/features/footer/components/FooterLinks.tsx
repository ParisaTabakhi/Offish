// src/features/footer/components/FooterLinks.tsx
'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { IFooterLinksGroup } from '../types/footer.types';

interface IFooterLinksProps {
  groups: IFooterLinksGroup[];
}

const FooterLinks: React.FC<IFooterLinksProps> = ({ groups }) => {
  return (
    <>
      {groups.map((group) => (
        <div key={group.title}>
          <h4 className="text-lg font-bold mb-6 text-blue-400">{group.title}</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            {group.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default memo(FooterLinks);