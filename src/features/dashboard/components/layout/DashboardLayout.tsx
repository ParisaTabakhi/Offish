'use client';

import React, { useState, memo } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '../../../../shared/lib/cn';
import { ISidebarSection } from '../../types/sidebar.types';
import Sidebar from '../sidebar/Sidebar';
import DashboardHeader from './DashboardHeader';

interface IDashboardLayoutProps {
  children: React.ReactNode;
  sidebarSections: ISidebarSection[];
  title?: string;
  userName?: string;
  userRole?: string;
}

const DashboardLayout: React.FC<IDashboardLayoutProps> = ({
  children,
  sidebarSections,
  title = 'داشبورد',
  userName = 'کاربر',
  userRole = 'کاربر',
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  const handleLogout = () => {
    console.log('خروج از حساب');
  };

  return (
    <div className="min-h-screen bg-[#f8faff]">
      <Sidebar
        sections={sidebarSections}
        isCollapsed={isCollapsed}
        onToggle={handleToggle}
        activePath={pathname || undefined}
        onLogout={handleLogout}
      />

      <div
        className={cn(
          'transition-all duration-300 min-h-screen flex flex-col',
          isCollapsed ? 'mr-[72px]' : 'mr-[260px]'
        )}
      >
        <DashboardHeader
          title={title}
          onMenuClick={handleToggle}
          userName={userName}
          userRole={userRole}
        />

        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
};

export default memo(DashboardLayout);