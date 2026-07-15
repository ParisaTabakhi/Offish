'use client';

import React, { useState, memo, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '../../../../shared/lib/cn';
import { ISidebarSection } from '../../types/sidebar.types';
import Sidebar from '../sidebar/Sidebar';
import { Navbar } from '../../../../features/navigation';
import { Footer } from '../../../../features/footer';

interface IDashboardWrapperProps {
  children: React.ReactNode;
  sidebarSections: ISidebarSection[];
  userRole?: string;
  userName?: string;
}

const DashboardWrapper: React.FC<IDashboardWrapperProps> = ({
  children,
  sidebarSections,
  userRole = 'کاربر',
  userName = 'کاربر',
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  const handleLogout = () => {
    // TODO: پیاده‌سازی خروج
    console.log('خروج از حساب');
  };

  // بستن سایدبار در موبایل
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8faff] flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <Sidebar
          sections={sidebarSections}
          isCollapsed={isCollapsed}
          onToggle={handleToggle}
          activePath={pathname || undefined}
          onLogout={handleLogout}
        />

        {/* Main Content */}
        <div
          className={cn(
            'flex-1 transition-all duration-300',
            isCollapsed ? 'mr-[72px]' : 'mr-[260px]'
          )}
        >
          <main className="p-4 md:p-6">{children}</main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default memo(DashboardWrapper);