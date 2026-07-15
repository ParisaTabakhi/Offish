'use client';

import { useState, useMemo } from 'react';
import { IRequest, IRequestFilters, IRequestTableRow } from '../types/requests.types';

export const useRequestFilters = (requests: IRequest[]) => {
  const [filters, setFilters] = useState<IRequestFilters>({
    status: 'all',
    search: '',
    sortBy: 'newest',
  });

  const filteredRequests = useMemo(() => {
    let result = [...requests];

    if (filters.status !== 'all') {
      result = result.filter((req) => req.status === filters.status);
    }

    if (filters.search.trim()) {
      const search = filters.search.trim().toLowerCase();
      result = result.filter(
        (req) =>
          req.title.toLowerCase().includes(search) ||
          req.description.toLowerCase().includes(search) ||
          req.category.toLowerCase().includes(search)
      );
    }

    switch (filters.sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case 'budget-high':
        result.sort((a, b) => b.budget - a.budget);
        break;
      case 'budget-low':
        result.sort((a, b) => a.budget - b.budget);
        break;
    }

    return result;
  }, [requests, filters]);

  const tableData = useMemo((): IRequestTableRow[] => {
    return filteredRequests.map((req) => ({
      id: req.id,
      title: req.title,
      client: req.client?.name || 'نامشخص',
      artist: req.artist?.name || 'نامشخص',
      status: req.status,
      budget: `${req.budget.toLocaleString()} ${req.currency}`,
      date: new Date(req.createdAt).toLocaleDateString('fa-IR'),
      category: req.category,
    }));
  }, [filteredRequests]);

  const resetFilters = () => {
    setFilters({ status: 'all', search: '', sortBy: 'newest' });
  };

  const statusCounts = useMemo(() => {
    const counts = {
      all: requests.length,
      pending: 0,
      accepted: 0,
      rejected: 0,
      completed: 0,
      cancelled: 0,
    };

    requests.forEach((req) => {
      if (req.status in counts) {
        counts[req.status as keyof typeof counts]++;
      }
    });

    return counts;
  }, [requests]);

  return {
    filters,
    setFilters,
    filteredRequests,
    tableData,
    resetFilters,
    statusCounts,
  };
};