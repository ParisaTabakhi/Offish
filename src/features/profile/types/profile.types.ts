import { RequestStatus } from '../../../features/requests/types/requests.types';

export type UserRole = 'artist' | 'planner';
export type EditMode = 'view' | 'edit';

export interface IProfileStats {
  total: number;
  pending: number;
  accepted: number;
  completed: number;
  rejected: number;
}

export interface IActivityItem {
  id: string;
  title: string;
  type: 'request' | 'project' | 'message';
  status: RequestStatus;
  date: string;
  with: string;
}

export interface IUserProfile {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  phone: string;
  city: string;
  province: string;
  avatar?: string;
  coverImage?: string;
  bio: string;
  verified: boolean;
  rating: number;
  totalProjects: number;
  totalReviews: number;
  specialties?: string[];
  industries?: string[];
  joinedAt: string;
}

// ============================================
// PROPS INTERFACES
// ============================================

export interface IProfileStatsProps {
  stats: IProfileStats;
  role: UserRole;
}

export interface IProfilePageProps {
  user: IUserProfile;
  stats: IProfileStats;
  activities: IActivityItem[];
  isLoading?: boolean;
  mode?: EditMode;
  onEdit?: () => void;
  onSave?: () => void;
  onCancel?: () => void;
  onChange?: (field: keyof IUserProfile, value: any) => void;
  onViewAllActivities?: () => void;
  onActivityClick?: (id: string) => void;
}

export interface IProfileHeaderProps {
  user: IUserProfile;
  mode?: EditMode;
  onEdit?: () => void;
  onSave?: () => void;
  onCancel?: () => void;
  onChange?: (field: keyof IUserProfile, value: any) => void;
}

export interface IProfileBioProps {
  user: IUserProfile;
  mode?: EditMode;
  onChange?: (field: keyof IUserProfile, value: any) => void;
}

export interface IProfileContactProps {
  user: IUserProfile;
  mode?: EditMode;
  onChange?: (field: keyof IUserProfile, value: any) => void;
}

export interface IProfileActivityProps {
  activities: IActivityItem[];
  onViewAll?: () => void;
  onItemClick?: (id: string) => void;
}

export interface IEditableFieldProps {
  label: string;
  value: string;
  field: keyof IUserProfile;
  mode?: EditMode;
  onChange?: (field: keyof IUserProfile, value: any) => void;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
}

export interface IUseProfileEditProps {
  initialUser: IUserProfile;
  onSave?: (data: Partial<IUserProfile>) => void;
}