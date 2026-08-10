'use client';

import { ProfilePage, useProfileData, useProfileEdit } from '../../../features/profile';
import { useToast } from '../../../shared/hooks/use-toast';

export default function ArtistDashboardPage() {
  const { toast } = useToast();
  const { user, stats, activities, isLoading } = useProfileData({
    role: 'artist',
  });

  const {
    mode,
    editedUser,
    isSaving,
    handleEdit,
    handleChange,
    handleSave,
    handleCancel,
  } = useProfileEdit(user!, (changes) => {
    toast({
      title: '✅ پروفایل به‌روز شد',
      description: 'تغییرات با موفقیت ذخیره شد.',
    });
    console.log('Changes saved:', changes);
  });

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

  const displayUser = mode === 'edit' ? editedUser : user;

  return (
    <ProfilePage
      user={displayUser}
      stats={stats}
      activities={activities}
      isLoading={isLoading || isSaving}
      mode={mode}
      onEdit={handleEdit}
      onSave={handleSave}
      onCancel={handleCancel}
      onChange={handleChange}
      onViewAllActivities={handleViewAllActivities}
      onActivityClick={handleActivityClick}
    />
  );
}