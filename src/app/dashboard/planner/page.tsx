'use client';

import { ProfilePage, useProfileData } from '../../../features/profile';
import { useToast } from '../../../shared/hooks/use-toast';

export default function EmployerDashboardPage() {
  const { toast } = useToast();
  const { user, stats, activities, isLoading } = useProfileData({
    role: 'planner',
  });

  const handleEdit = () => {
    toast({
      title: 'ویرایش پروفایل',
      description: 'صفحه ویرایش پروفایل باز خواهد شد.',
    });
  };

  const handleViewAllActivities = () => {
    toast({
      title: 'مشاهده همه فعالیت‌ها',
      description: 'صفحه کامل فعالیت‌ها باز خواهد شد.',
    });
  };

  const handleActivityClick = (id: string) => {
    toast({
      title: 'مشاهده فعالیت',
      description: `فعالیت ${id} انتخاب شد.`,
    });
  };

  if (!user || !stats) {
    return null;
  }

  return (
    <ProfilePage
      user={user}
      stats={stats}
      activities={activities}
      isLoading={isLoading}
      onEdit={handleEdit}
      onViewAllActivities={handleViewAllActivities}
      onActivityClick={handleActivityClick}
    />
  );
}