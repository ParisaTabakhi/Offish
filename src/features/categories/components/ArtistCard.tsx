'use client';

import React, { memo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useToast } from '../../../shared/hooks/use-toast';
import { IArtist } from '../../../shared/services/artist/artist.types';
import ArtistCardHeader from './ArtistCardHeader';
import ArtistCardAvatar from './ArtistCardAvatar';
import ArtistCardPrice from './ArtistCardPrice';
import ArtistCardInfo from './ArtistCardInfo';
import ArtistCardActions from './ArtistCardActions';

interface IArtistCardProps {
  artist: IArtist;
  index: number;
}

const ArtistCard: React.FC<IArtistCardProps> = ({ artist, index }) => {
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);

  const displayName = artist.fullName || '';
  const displayNickname = artist.nickname || '';
  const displayCategory = artist.category || '';
  const displayCity = artist.city || '';
  const displayRating = artist.rating || 0;
  const displayReviews = artist.reviewsCount || 0;
  const displayProjects = artist.successBooking || 0;
  const displayBaseRate = artist.baseRate || 'توافقی';
  const displayOverview = artist.overview || '';
  const displayImage = artist.pictureProfileUrl || '';

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: 'درخواست رزرو ثبت شد',
      description: `درخواست شما برای ${displayName} ارسال شد.`,
      duration: 3000,
    });
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Link href={`/artist/${artist.id}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          type: 'spring',
          stiffness: 50,
        }}
        viewport={{ once: true }}
        className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl
          hover:shadow-[0_20px_40px_-15px_rgba(66,97,245,0.2)]
          hover:-translate-y-2 transition-all duration-500
          border border-slate-100 flex flex-col h-full cursor-pointer"
      >
        <ArtistCardHeader
          displayImage={displayImage}
          displayName={displayName}
          displayRating={displayRating}
          isLiked={isLiked}
          onLikeClick={handleLikeClick}
        />

        <div className="px-6 pb-6 flex-grow flex flex-col relative">
          <div className="absolute -top-6 right-6 left-6 z-20 flex justify-between">
            <ArtistCardAvatar
              displayImage={displayImage}
              displayName={displayName}
            />
            <ArtistCardPrice displayBaseRate={displayBaseRate} />
          </div>

          <ArtistCardInfo
            displayName={displayName}
            displayNickname={displayNickname}
            displayCategory={displayCategory}
            displayRating={displayRating}
            displayOverview={displayOverview}
            displayCity={displayCity}
            displayProjects={displayProjects}
            displayReviews={displayReviews}
          />

          <ArtistCardActions onBookClick={handleBookClick} />
        </div>
      </motion.div>
    </Link>
  );
};

export default memo(ArtistCard);