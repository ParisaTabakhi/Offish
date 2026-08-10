import {
  Clock,
  CheckCircle,
  XCircle,
  Check,
  Ban,
  MessageSquare,
  Calendar,
  DollarSign,
  Tag,
} from 'lucide-react';
import { IStatusConfig, RequestStatus } from '../types/requests.types';

export const STATUS_CONFIG: Record<RequestStatus, IStatusConfig> = {
  pending: {
    label: 'در انتظار',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 border-yellow-200',
    icon: Clock,
  },
  accepted: {
    label: 'تایید شده',
    color: 'text-green-600',
    bgColor: 'bg-green-50 border-green-200',
    icon: CheckCircle,
  },
  rejected: {
    label: 'رد شده',
    color: 'text-red-600',
    bgColor: 'bg-red-50 border-red-200',
    icon: XCircle,
  },
  completed: {
    label: 'تکمیل شده',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 border-blue-200',
    icon: Check,
  },
  cancelled: {
    label: 'لغو شده',
    color: 'text-gray-500',
    bgColor: 'bg-gray-50 border-gray-200',
    icon: Ban,
  },
};

export const STATUS_OPTIONS = [
  { value: 'all', label: 'همه' },
  { value: 'pending', label: 'در انتظار' },
  { value: 'accepted', label: 'تایید شده' },
  { value: 'rejected', label: 'رد شده' },
  { value: 'completed', label: 'تکمیل شده' },
  { value: 'cancelled', label: 'لغو شده' },
];

export const SORT_OPTIONS = [
  { value: 'newest', label: 'جدیدترین' },
  { value: 'oldest', label: 'قدیمی‌ترین' },
  { value: 'budget-high', label: 'بیشترین بودجه' },
  { value: 'budget-low', label: 'کمترین بودجه' },
];

export const REQUEST_LABELS = {
  artist: {
    title: 'درخواست‌های دریافتی',
    emptyTitle: 'هیچ درخواستی دریافت نشده است',
    emptyDescription: 'هنوز پلنری برای شما درخواست ارسال نکرده است.',
    stats: {
      total: 'مجموع درخواست‌ها',
      pending: 'در انتظار تایید',
      accepted: 'تایید شده',
      rejected: 'رد شده',
      completed: 'تکمیل شده',
    },
    otherParty: 'برگزار کننده',
  },
  planner: {
    title: 'درخواست‌های ارسال‌شده',
    emptyTitle: 'هیچ درخواستی ارسال نشده است',
    emptyDescription: 'شما هنوز درخواستی برای هنرمندان ارسال نکرده‌اید.',
    stats: {
      total: 'مجموع درخواست‌ها',
      pending: 'در انتظار پاسخ',
      accepted: 'تایید شده',
      rejected: 'رد شده',
      completed: 'تکمیل شده',
    },
    otherParty: 'هنرمند',
  },
};