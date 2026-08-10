'use client';

import React, { useEffect, memo, ReactNode } from 'react';
import { X } from 'lucide-react';
import { cn } from '../lib/cn';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  closeOnBackdrop?: boolean;
}

const Modal: React.FC<IModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
  className = '',
  closeOnBackdrop = true,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => closeOnBackdrop && onClose()}
      />

      {/* Modal */}
      <div
        className={cn(
          'relative bg-white rounded-2xl shadow-2xl w-full max-h-[90vh] flex flex-col',
          sizeClasses[size],
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - فقط در صورتی که title وجود داشته باشد نمایش داده می‌شود */}
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0">
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
              aria-label="بستن"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {!title && (
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-1 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600 z-10"
            aria-label="بستن"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
};

export default memo(Modal);