'use client';

import React, { memo } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '../../../../shared/lib/cn';
import { Navbar } from '../../../../features/navigation';
import { Footer } from '../../../../features/footer';
import { ISidebarSection } from '../../types/sidebar.types';
import Sidebar from '../sidebar/Sidebar';
import { useSidebar } from '../../hooks/useSidebar';

interface IMainLayoutProps {
  children: React.ReactNode;
  sidebarSections: ISidebarSection[];
  showSidebar?: boolean;
}

const MainLayout: React.FC<IMainLayoutProps> = ({
  children,
  sidebarSections,
  showSidebar = true,
}) => {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebar } = useSidebar();

  const handleLogout = () => {
    console.log('خروج از حساب');
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] flex flex-col">
      <Navbar onMenuClick={showSidebar ? toggleSidebar : undefined} />

      <div className="flex flex-1 relative">
        {showSidebar && (
          <Sidebar
            sections={sidebarSections}
            isCollapsed={isCollapsed}
            onToggle={toggleSidebar}
            activePath={pathname || undefined}
            onLogout={handleLogout}
          />
        )}

        <div
          className={cn(
            'flex-1 transition-all duration-300',
            showSidebar && (isCollapsed ? 'mr-[72px]' : 'mr-[260px]')
          )}
        >
          <main className="pt-4 md:pt-6">{children}</main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default memo(MainLayout);