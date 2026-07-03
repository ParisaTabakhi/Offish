'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IArtistsPaginationProps } from '../types/artists-grid.types';

const ArtistsPagination: React.FC<IArtistsPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-20 flex justify-center">
      <div className="bg-white p-2 pr-3 pl-3 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-2 relative z-20">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="h-12 w-12 rounded-xl p-0 hover:bg-slate-50 text-slate-500 disabled:opacity-30 flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex items-center px-2 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`
                relative w-10 h-12 rounded-xl flex flex-col items-center justify-center text-sm font-bold transition-all duration-300 overflow-hidden
                ${
                  currentPage === page
                    ? 'bg-[#4261f5] text-white shadow-lg shadow-[#4261f5]/30 scale-110'
                    : 'bg-transparent text-slate-400 hover:bg-slate-50 hover:text-slate-700'
                }
              `}
            >
              <span>{page.toLocaleString('fa-IR')}</span>
              {currentPage === page && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute bottom-1.5 w-1 h-1 bg-white rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="h-12 w-12 rounded-xl p-0 hover:bg-slate-50 text-slate-500 disabled:opacity-30 flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default memo(ArtistsPagination);