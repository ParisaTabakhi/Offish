'use client';

import React, { memo } from 'react';
import { Info } from 'lucide-react';
import Accordion from '../../../shared/components/Accordion';
import RequestDetailContent from './RequestDetailContent';
import { IRequest } from '../types/requests.types';

interface IRequestDetailAccordionProps {
  request: IRequest;
  role: 'artist' | 'planner';
}

const RequestDetailAccordion: React.FC<IRequestDetailAccordionProps> = ({
  request,
  role,
}) => {
  const otherParty = role === 'artist' ? request.client : request.artist;

  return (
    <Accordion
      title="جزئیات کامل درخواست"
      icon={<Info className="w-4 h-4" />}
      className="mt-3"
      titleClassName="bg-slate-50/50 hover:bg-slate-100"
    >
      <RequestDetailContent
        detail={request.detail}
        description={request.description}
        budget={request.budget}
        currency={request.currency}
        category={request.category}
        createdAt={request.createdAt}
        withName={otherParty?.name}
      />
    </Accordion>
  );
};

export default memo(RequestDetailAccordion);