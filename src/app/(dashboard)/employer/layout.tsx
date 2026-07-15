'use client';

import DashboardLayout from '../../../features/dashboard/components/layout/DashboardLayout';
import { EMPLOYER_SIDEBAR_SECTIONS } from '../../../features/dashboard/config/sidebar.config';

export default function EmployerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout
      sidebarSections={EMPLOYER_SIDEBAR_SECTIONS}
      title="داشبورد کارفرما"
      userName="کارفرما"
      userRole="کارفرما"
    >
      {children}
    </DashboardLayout>
  );
}