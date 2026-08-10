'use client';

import React, { memo } from 'react';

interface IArtistCardAvatarProps {
  displayImage: string;
  displayName: string;
}

const ArtistCardAvatar: React.FC<IArtistCardAvatarProps> = ({
  displayImage,
  displayName,
}) => {
  return (
    <div className="relative">
      <div className="w-20 h-20 rounded-2xl p-1 bg-white shadow-lg">
        {displayImage ? (
          <img
            src={displayImage}
            alt={displayName}
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#2745d1] to-[#4a6cf7] flex items-center justify-center text-white text-2xl font-bold">
            {displayName.charAt(0)}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(ArtistCardAvatar);