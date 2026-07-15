'use client';

import React, { memo } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/cn';

interface IHamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const HamburgerButton: React.FC<IHamburgerButtonProps> = ({
  isOpen,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300',
        'hover:bg-slate-100 active:scale-95',
        'text-slate-600 hover:text-[#2745d1]',
        className
      )}
      aria-label={isOpen ? 'بستن منو' : 'باز کردن منو'}
    >
      <div className="relative w-5 h-5">
        <span
          className={cn(
            'absolute left-0 h-0.5 bg-current rounded-full transition-all duration-300',
            isOpen ? 'top-2 rotate-45 w-5' : 'top-0 w-5'
          )}
        />
        <span
          className={cn(
            'absolute left-0 top-2 h-0.5 bg-current rounded-full transition-all duration-300',
            isOpen ? 'opacity-0 w-0' : 'w-5'
          )}
        />
        <span
          className={cn(
            'absolute left-0 h-0.5 bg-current rounded-full transition-all duration-300',
            isOpen ? 'bottom-2 -rotate-45 w-5' : 'bottom-0 w-5'
          )}
        />
      </div>
    </button>
  );
};

export default memo(HamburgerButton);