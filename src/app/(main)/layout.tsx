'use client';

import MainLayout from '../../features/dashboard/components/layout/MainLayout';
import { ARTIST_SIDEBAR_SECTIONS } from '../../features/dashboard/config/sidebar.config';

export default function MainLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout sidebarSections={ARTIST_SIDEBAR_SECTIONS} showSidebar={true}>
      {children}
    </MainLayout>
  );
}