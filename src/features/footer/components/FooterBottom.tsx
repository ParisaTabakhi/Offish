// src/features/footer/components/FooterBottom.tsx
'use client';

import React, { memo } from 'react';

interface IFooterBottomProps {
  text: string;
  credit: string;
}

const FooterBottom: React.FC<IFooterBottomProps> = ({ text, credit }) => {
  return (
    <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
      <p>{text}</p>
      <p>{credit}</p>
    </div>
  );
};

export default memo(FooterBottom);