'use client';

import React, { useState, memo, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/cn';

interface IAccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  icon?: ReactNode;
}

const Accordion: React.FC<IAccordionProps> = ({
  title,
  children,
  defaultOpen = false,
  className = '',
  titleClassName = '',
  contentClassName = '',
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className={cn('border border-slate-200 rounded-xl overflow-hidden', className)}>
      <button
        onClick={toggle}
        className={cn(
          'w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 transition-colors',
          titleClassName
        )}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-slate-500">{icon}</span>}
          <span className="text-sm font-medium text-slate-700">{title}</span>
        </div>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-slate-400 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <div
        className={cn(
          'transition-all duration-300 ease-in-out overflow-hidden',
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className={cn('px-4 py-3 bg-white', contentClassName)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default memo(Accordion);