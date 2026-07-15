'use client';

import React, { useState, memo } from 'react';
import { IRequestsListProps } from '../types/requests.types';
import { useRequestFilters } from '../hooks/useRequestFilters';
import { REQUEST_LABELS } from '../constants/requests.constants';
// import RequestStats from './RequestStats';
import RequestFilters from './RequestFilters';
import RequestCard from './RequestCard';
import RequestsTable from './RequestsTable';
import RequestEmptyState from './RequestEmptyState';
import RequestsLoading from './RequestsLoading';
import RequestsViewToggle from './RequestsViewToggle';

const RequestsList: React.FC<IRequestsListProps> = ({
  requests,
  stats,
  role,
  onStatusChange,
  onCardClick,
  onChatClick,
  isLoading = false,
  viewMode: initialViewMode = 'table',
}) => {
  const [viewMode, setViewMode] = useState<'card' | 'table'>(initialViewMode);
  const { filters, setFilters, filteredRequests, tableData, resetFilters, statusCounts } =
    useRequestFilters(requests);

  const labels = REQUEST_LABELS[role];

  if (isLoading) {
    return <RequestsLoading />;
  }

  return (
    <div>
      {/* <RequestStats stats={stats} role={role} /> */}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <RequestFilters
          filters={filters}
          onFilterChange={setFilters}
          statusCounts={statusCounts}
        />

        <RequestsViewToggle viewMode={viewMode} onViewChange={setViewMode} />
      </div>

      {filteredRequests.length === 0 ? (
        <RequestEmptyState
          role={role}
          filterApplied={filters.status !== 'all' || filters.search !== ''}
          onResetFilters={resetFilters}
        />
      ) : viewMode === 'card' ? (
        <div className="space-y-3">
          {filteredRequests.map((request) => (
            <RequestCard
              key={request.id}
              request={request}
              role={role}
              onStatusChange={onStatusChange}
              onCardClick={onCardClick}
              onChatClick={onChatClick}
            />
          ))}
        </div>
      ) : (
        <RequestsTable
          requests={tableData}
          role={role}
          onRowClick={onCardClick}
          onStatusChange={onStatusChange}
          onChatClick={onChatClick}
        />
      )}
    </div>
  );
};

export default memo(RequestsList);