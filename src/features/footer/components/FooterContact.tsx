// src/features/footer/components/FooterContact.tsx
'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { IContactInfo } from '../types/footer.types';

interface IFooterContactProps {
  contacts: IContactInfo[];
}

const FooterContact: React.FC<IFooterContactProps> = ({ contacts }) => {
  return (
    <div>
      <h4 className="text-lg font-bold mb-6 text-blue-400">تماس با ما</h4>
      <ul className="space-y-4 text-slate-400 text-sm">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <li key={index} className="flex items-start gap-3">
              <Icon className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              {contact.href ? (
                <Link
                  href={contact.href}
                  className={`hover:text-white transition-colors ${
                    contact.isRtl ? 'text-right' : 'text-left'
                  }`}
                  dir={contact.isRtl ? 'rtl' : 'ltr'}
                >
                  {contact.value}
                </Link>
              ) : (
                <span className={contact.isRtl ? 'text-right' : 'text-left'}>
                  {contact.value}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(FooterContact);