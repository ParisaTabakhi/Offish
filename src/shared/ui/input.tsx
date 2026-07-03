// src/shared/ui/input.tsx
'use client';

import * as React from 'react';
import { cn } from '../lib/cn';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  inputSize?: 'sm' | 'md' | 'lg';
  error?: boolean;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, inputSize = 'md', error, icon, ...props }, ref) => {
    const sizeClasses = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-11 px-4 text-sm',
      lg: 'h-14 px-5 text-base',
    };

    const baseStyles =
      'w-full rounded-xl bg-white/80 backdrop-blur-sm border-2 transition-all duration-300 ' +
      'placeholder:text-slate-400 placeholder:font-light ' +
      'focus:outline-none focus:ring-4 focus:ring-opacity-20 ' +
      'disabled:cursor-not-allowed disabled:opacity-50 ' +
      'shadow-sm hover:shadow-md ' +
      'text-slate-800 font-medium';

    const stateStyles = error
      ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200 bg-rose-50/50'
      : 'border-slate-200 focus:border-[#2745d1] focus:ring-[#2745d1]/20 hover:border-slate-300';

    const paddingStyles = icon ? 'pl-11' : '';

    return (
      <div className="relative w-full group">
        {icon && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-colors duration-300 group-focus-within:text-[#2745d1]">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            baseStyles,
            sizeClasses[inputSize],
            stateStyles,
            paddingStyles,
            'text-right',
            'placeholder:transition-all placeholder:duration-300',
            'focus:placeholder:opacity-60',
            className
          )}
          ref={ref}
          {...props}
        />
        <div className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2745d1] to-blue-400 transition-all duration-300 group-focus-within:w-1/2" />
        <div className="absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-gradient-to-l from-[#2745d1] to-blue-400 transition-all duration-300 group-focus-within:w-1/2" />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };