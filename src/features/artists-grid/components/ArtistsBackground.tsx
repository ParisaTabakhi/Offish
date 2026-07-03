'use client';

import React, { memo } from 'react';

const ArtistsBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-0 w-full h-[600px] bg-gradient-to-b from-white to-transparent opacity-60" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#4261f5 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#4261f5]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
    </div>
  );
};

export default memo(ArtistsBackground);