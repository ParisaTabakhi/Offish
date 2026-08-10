'use client';

import React, { memo } from 'react';

interface IArtistCardPriceProps {
  displayBaseRate: string;
}

const ArtistCardPrice: React.FC<IArtistCardPriceProps> = ({ displayBaseRate }) => {
  return (
    <div className="bg-white shadow-md px-3 py-1.5 rounded-xl border max-h-[50px] flex flex-col items-right">
      <span className="text-[10px] text-slate-400 font-bold">نرخ</span>
      <span className="text-sm font-black text-[#4261f5]">
        {displayBaseRate}
      </span>
    </div>
  );
};

export default memo(ArtistCardPrice);