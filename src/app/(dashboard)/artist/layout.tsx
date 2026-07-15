'use client';

import DashboardLayout from '../../../features/dashboard/components/layout/DashboardLayout';
import { ARTIST_SIDEBAR_SECTIONS } from '../../../features/dashboard/config/sidebar.config';

export default function ArtistDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout
      sidebarSections={ARTIST_SIDEBAR_SECTIONS}
      title="داشبورد هنرمند"
      userName="رضا رضایی"
      userRole="هنرمند"
    >
      {children}
    </DashboardLayout>
  );
}