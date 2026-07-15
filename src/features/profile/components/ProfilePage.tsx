'use client';

import React, { memo } from 'react';
import { IProfilePageProps } from '../types/profile.types';
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';
import ProfileBio from './ProfileBio';
import ProfileContact from './ProfileContact';
import ProfileActivity from './ProfileActivity';
import ProfileSkeleton from './ProfileSkeleton';

const ProfilePage: React.FC<IProfilePageProps> = ({
  user,
  stats,
  activities,
  isLoading = false,
  mode = 'view',
  onEdit,
  onSave,
  onCancel,
  onChange,
  onViewAllActivities,
  onActivityClick,
}) => {
  if (isLoading) {
    return <ProfileSkeleton />;
  }

  return (
    <div className="space-y-6 py-3 px-6">
      <ProfileHeader
        user={user}
        mode={mode}
        onEdit={onEdit}
        onSave={onSave}
        onCancel={onCancel}
        onChange={onChange}
      />

      <ProfileStats stats={stats} role={user.role} />

      <div className="grid grid-cols-1 lg:grid-cols-3  gap-6">
        <div className="lg:col-span-2">
          <ProfileBio user={user} mode={mode} onChange={onChange} />
        </div>
        <div className="lg:col-span-1">
          <ProfileContact user={user} mode={mode} onChange={onChange} />
        </div>
      </div>

      <ProfileActivity
        activities={activities}
        onViewAll={onViewAllActivities}
        onItemClick={onActivityClick}
      />
    </div>
  );
};

export default memo(ProfilePage);