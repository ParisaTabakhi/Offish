// src/features/footer/components/Footer.tsx
'use client';

import React, { memo } from 'react';
import {
  SOCIAL_LINKS,
  LINKS_GROUPS,
  CONTACT_INFO,
  FOOTER_CONFIG,
} from '../data/footer.config';
import { IFooterProps } from '../types/footer.types';
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterBottom from './FooterBottom';

// ============================================
// MAIN COMPONENT
// ============================================

const Footer: React.FC<IFooterProps> = ({
  brandName = FOOTER_CONFIG.brandName,
  brandDescription = FOOTER_CONFIG.brandDescription,
  socialLinks = SOCIAL_LINKS,
  linksGroups = LINKS_GROUPS,
  contactInfo = CONTACT_INFO,
  bottomText = FOOTER_CONFIG.bottomText,
  bottomCredit = FOOTER_CONFIG.bottomCredit,
  className = '',
}) => {
  return (
    <footer
      className={`
        bg-slate-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 
        border-t border-slate-800 ${className}
      `}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <FooterBrand
            name={brandName}
            description={brandDescription}
            socialLinks={socialLinks}
          />

          {/* Links Groups */}
          {linksGroups.map((group) => (
            <FooterLinks key={group.title} groups={[group]} />
          ))}

          {/* Contact Column */}
          <FooterContact contacts={contactInfo} />
        </div>

        {/* Bottom Section */}
        <FooterBottom text={bottomText} credit={bottomCredit} />
      </div>
    </footer>
  );
};

export default memo(Footer);