'use client';

import { useState, useEffect } from 'react';
import { IUserProfile, IActivityItem, IProfileStats } from '../types/profile.types';
import {
  mockArtistProfile,
  mockPlannerProfile,
  mockArtistStats,
  mockPlannerStats,
  mockArtistActivities,
  mockPlannerActivities,
} from '../data/mock-profile-data';

interface IUseProfileDataProps {
  userId?: string;
  role: 'artist' | 'planner';
}

export const useProfileData = ({ userId, role }: IUseProfileDataProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<IUserProfile | null>(null);
  const [stats, setStats] = useState<IProfileStats | null>(null);
  const [activities, setActivities] = useState<IActivityItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));

      const profile = role === 'artist' ? mockArtistProfile : mockPlannerProfile;
      const statsData = role === 'artist' ? mockArtistStats : mockPlannerStats;
      const activitiesData = role === 'artist' ? mockArtistActivities : mockPlannerActivities;

      setUser(profile);
      setStats(statsData);
      setActivities(activitiesData);
      setIsLoading(false);
    };

    fetchData();
  }, [role, userId]);

  return {
    user,
    stats,
    activities,
    isLoading,
  };
};