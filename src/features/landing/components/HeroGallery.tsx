'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { IHeroGalleryImage } from '../types/hero.types';
import { DEFAULT_GALLERY_IMAGES, HERO_CONFIG } from '../data/hero.constants';

// Props interface
interface IHeroGalleryProps {
  images?: IHeroGalleryImage[];
}

// Sub-components
const FeaturedImage: React.FC<{ image: IHeroGalleryImage }> = memo(({ image }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group"
  >
    <div className="absolute bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
    <div className="absolute inset-0 bg-[#FFD166] rounded-[2rem] rotate-6 w-[106%] opacity-20"></div>
    <div className="absolute inset-0 bg-[#2745d1] rounded-[2rem] rotate-4 right-[-20px] w-[105%] opacity-10"></div>
    
    <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
    </div>
    
    {image.badge && (
      <div className="absolute bottom-4 right-4 z-20 text-white">
        <div className="bg-orange-500/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold mb-1 w-fit">
          {image.badge}
        </div>
        {image.title && (
          <div className="font-bold text-xl">{image.title}</div>
        )}
      </div>
    )}
  </motion.div>
));

const SecondaryImage: React.FC<{ 
  image: IHeroGalleryImage; 
  index: number; 
  isLast: boolean 
}> = memo(({ image, index, isLast }) => (
  <motion.div
    initial={{ opacity: 0, x: index === 0 ? 20 : -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
    className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden shadow-lg border-4 border-white group bg-slate-800"
  >
    <img
      src={image.src}
      alt={image.alt}
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90"
    />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
    
    {isLast && (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
          <ArrowLeft className="w-5 h-5 -rotate-45" />
        </div>
      </div>
    )}
  </motion.div>
));

const ArtistsBadge: React.FC = memo(() => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 0.8, type: "spring" }}
    className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 flex items-center gap-3 border border-slate-50 z-30"
  >
    <div className="flex -space-x-3 space-x-reverse">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
          <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Artist ${i}`} />
        </div>
      ))}
    </div>
    <div className="text-xs font-bold text-slate-600">
      <span className="text-[#2745d1] text-base block">{HERO_CONFIG.artistsCount}</span>
      {HERO_CONFIG.artistsLabel}
    </div>
  </motion.div>
));

// Main HeroGallery component
const HeroGallery: React.FC<IHeroGalleryProps> = memo(({ 
  images = DEFAULT_GALLERY_IMAGES 
}) => {
  const featuredImage = images.find(img => img.isFeatured) || images[0];
  const secondaryImages = images.filter(img => !img.isFeatured);

  return (
    <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[80%]">
      {/* Background Blob */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#2745d1]/10 to-orange-100/40 rounded-[3rem] rotate-3 transform scale-105 blur-2xl" />

      {/* Grid Container */}
      <div className="grid grid-cols-2 grid-rows-3 gap-4 h-full w-full p-4">
        <FeaturedImage image={featuredImage} />

        {secondaryImages.map((image, index) => (
          <SecondaryImage
            key={image.id}
            image={image}
            index={index}
            isLast={index === secondaryImages.length - 1}
          />
        ))}
      </div>

      <ArtistsBadge />
    </div>
  );
});

HeroGallery.displayName = 'HeroGallery';

export default HeroGallery;