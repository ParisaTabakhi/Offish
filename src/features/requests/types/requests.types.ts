import { LucideIcon } from 'lucide-react';

// ============================================
// 1. REQUEST STATUS
// ============================================

export type RequestStatus = 'pending' | 'accepted' | 'rejected' | 'completed' | 'cancelled';

export interface IStatusConfig {
  label: string;
  color: string;
  bgColor: string;
  icon: LucideIcon;
}

// ============================================
// 2. REQUEST
// ============================================

export interface IRequest {
  id: string;
  title: string;
  description: string;
  status: RequestStatus;
  createdAt: string;
  updatedAt: string;
  budget: {
    min: number;
    max: number;
  };
  currency: string;
  category: string;
  client?: {
    id: string;
    name: string;
    avatar?: string;
  };
  artist?: {
    id: string;
    name: string;
    avatar?: string;
  };
  detail?: IRequestDetail;
  messages?: number;
  dueDate?: string;
}

// ============================================
// 3. REQUEST TABLE ROW
// ============================================

export interface IRequestTableRow {
  id: string;
  title: string;
  client: string;
  artist: string;
  status: RequestStatus;
  budget: string; 
  budgetMin?: number; 
  budgetMax?: number; 
  date: string;
  category: string;
  detail?: IRequestDetail;
  description?: string;
  currency?: string;
  createdAt?: string;
}

// ============================================
// 4. FILTERS
// ============================================

export interface IRequestFilters {
  status: RequestStatus | 'all';
  search: string;
  sortBy: 'newest' | 'oldest' | 'budget-high' | 'budget-low';
}

// ============================================
// 5. STATS
// ============================================

export interface IRequestStats {
  total: number;
  pending: number;
  accepted: number;
  rejected: number;
  completed: number;
  cancelled: number;
}

// ============================================
// 6. COMPONENT PROPS
// ============================================

export interface IRequestsListProps {
  requests: IRequest[];
  stats: IRequestStats;
  role: 'artist' | 'planner';
  onStatusChange?: (requestId: string, status: RequestStatus) => void;
  onCardClick?: (requestId: string) => void;
  onChatClick?: (requestId: string) => void;
  isLoading?: boolean;
  viewMode?: 'card' | 'table';
}

export interface IRequestCardProps {
  request: IRequest;
  role: 'artist' | 'planner';
  onStatusChange?: (requestId: string, status: RequestStatus) => void;
  onCardClick?: (requestId: string) => void;
  onChatClick?: (requestId: string) => void;
}

export interface IRequestTableRowProps {
  row: IRequestTableRow;
  role: 'artist' | 'planner';
  onRowClick?: (id: string) => void;
  onStatusChange?: (id: string, status: RequestStatus) => void;
  onChatClick?: (id: string) => void;
}

export interface IRequestsTableProps {
  requests: IRequestTableRow[];
  role: 'artist' | 'planner';
  onRowClick?: (id: string) => void;
  onStatusChange?: (id: string, status: RequestStatus) => void;
  onChatClick?: (id: string) => void;
}

export interface IRequestFiltersProps {
  filters: IRequestFilters;
  onFilterChange: (filters: IRequestFilters) => void;
  statusCounts: {
    all: number;
    pending: number;
    accepted: number;
    rejected: number;
    completed: number;
    cancelled: number;
  };
}

export interface IRequestStatsProps {
  stats: IRequestStats;
  role: 'artist' | 'planner';
}

export interface IRequestEmptyStateProps {
  role: 'artist' | 'planner';
  filterApplied: boolean;
  onResetFilters: () => void;
}

export interface IRequestDetail {
  eventType?: string;
  guestsCount?: number;
  ageRanges?: string[];
  address?: string;
  city?: string;
  district?: string;
  startTime?: string;
  endTime?: string;
  eventDate?: string;
  notes?: string;
  offeredPrice?: number;
  customFields?: Record<string, any>;
}