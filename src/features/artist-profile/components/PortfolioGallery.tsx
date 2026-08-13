// src/features/artist-profile/components/PortfolioGallery.tsx
'use client';

import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../shared/ui/tabs';
import { Play, X, Image as ImageIcon, Video } from 'lucide-react';
import { IPortfolioGalleryProps } from '../types/artist-profile.types';

const PortfolioGallery: React.FC<IPortfolioGalleryProps> = ({ portfolio }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const hasImages = portfolio.images.length > 0;
  const hasVideos = portfolio.videos.length > 0;

  const openLightbox = (url: string) => {
    setLightboxImage(url);
    setLightboxOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">نمونه کارها</h2>
      </div>

      <Tabs defaultValue="images" className="w-full">
        <TabsList className="bg-slate-50 p-1 rounded-xl h-auto inline-flex mb-6 w-full">
          <TabsTrigger
            value="images"
            className="flex-1 rounded-lg py-2 text-xs font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <ImageIcon className="w-4 h-4 ml-1.5" />
            تصاویر ({portfolio.images.length})
          </TabsTrigger>
          <TabsTrigger
            value="videos"
            className="flex-1 rounded-lg py-2 text-xs font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <Video className="w-4 h-4 ml-1.5" />
            ویدیوها ({portfolio.videos.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="images" className="mt-0 focus-visible:outline-none">
          {hasImages ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* Main Featured Image */}
              <div
                className="col-span-2 row-span-2 relative aspect-square md:aspect-auto md:h-full rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(portfolio.images[0].url)}
              >
                <img
                  src={portfolio.images[0].url}
                  alt={portfolio.images[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Other Images */}
              {portfolio.images.slice(1, 5).map((image) => (
                <div
                  key={image.id}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(image.url)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 text-sm text-center py-10">
              هنوز تصویری برای این هنرمند ثبت نشده است.
            </p>
          )}
        </TabsContent>

        <TabsContent value="videos" className="mt-0 focus-visible:outline-none">
          {hasVideos ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {portfolio.videos.map((video) => (
                <div
                  key={video.id}
                  className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer border border-slate-100"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 left-2 flex justify-between items-end text-white text-[10px]">
                    <span className="font-medium truncate max-w-[70%]">{video.title}</span>
                    <span className="bg-black/60 px-1.5 py-0.5 rounded">{video.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 text-sm text-center py-10">
              هنوز ویدیویی برای این هنرمند ثبت نشده است.
            </p>
          )}
        </TabsContent>
      </Tabs>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button className="absolute top-4 left-4 text-white hover:bg-white/10 p-2 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightboxImage}
              alt="Portfolio"
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default memo(PortfolioGallery);