'use client';

import React, { memo } from 'react';
import Modal from '../../../shared/components/Modal';
import RequestDetailContent from './RequestDetailContent';
import { IRequestTableRow } from '../types/requests.types';

interface IRequestDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  request: IRequestTableRow | null;
  role: 'artist' | 'planner';
}

const RequestDetailModal: React.FC<IRequestDetailModalProps> = ({
  isOpen,
  onClose,
  request,
  role,
}) => {
  if (!request) return null;

  const otherPartyName = role === 'artist' ? request.client : request.artist;

  const parseBudget = (budgetStr: string): { min: number; max: number } => {
    const cleaned = budgetStr.replace(/[^0-9-]/g, '');
    const parts = cleaned.split('-').filter(Boolean);
    
    if (parts.length === 2) {
      const min = parseInt(parts[0]) || 0;
      const max = parseInt(parts[1]) || 0;
      return { min, max: max > min ? max : min };
    }
    const value = parseInt(parts[0]) || 0;
    return { min: value, max: value };
  };

  const budget = request.budgetMin !== undefined && request.budgetMax !== undefined
    ? { min: request.budgetMin, max: request.budgetMax }
    : parseBudget(request.budget);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={request.title}
      size="lg"
    >
      <RequestDetailContent
        detail={request.detail}
        description={request.description}
        budget={budget}
        currency={request.currency || 'تومان'}
        category={request.category}
        createdAt={request.createdAt}
        withName={otherPartyName}
      />
    </Modal>
  );
};

export default memo(RequestDetailModal);