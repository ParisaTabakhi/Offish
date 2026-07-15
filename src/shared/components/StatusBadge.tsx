'use client';

import React, { memo } from 'react';
import { cn } from '../lib/cn';
import { STATUS_CONFIG } from '../../features/requests/constants/requests.constants';
import { RequestStatus } from '../../features/requests/types/requests.types';

interface IStatusBadgeProps {
  status: RequestStatus;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const StatusBadge: React.FC<IStatusBadgeProps> = ({
  status,
  size = 'md',
  className = '',
}) => {
  const config = STATUS_CONFIG[status];
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[10px] gap-1',
    md: 'px-2.5 py-1 text-xs gap-1.5',
    lg: 'px-3 py-1.5 text-sm gap-2',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium border',
        config.bgColor,
        config.color,
        sizeClasses[size],
        className
      )}
    >
      <Icon className={cn(
        'shrink-0',
        size === 'sm' && 'w-3 h-3',
        size === 'md' && 'w-3.5 h-3.5',
        size === 'lg' && 'w-4 h-4'
      )} />
      {config.label}
    </span>
  );
};

export default memo(StatusBadge);