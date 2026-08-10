'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from '../../features/navigation';
import Sidebar from '../../features/dashboard/components/sidebar/Sidebar';
import { ARTIST_SIDEBAR_SECTIONS, EMPLOYER_SIDEBAR_SECTIONS } from '../../features/dashboard/config/sidebar.config';
import { useSidebar } from '../../features/dashboard/hooks/useSidebar';
import { cn } from '../../shared/lib/cn';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebar } = useSidebar();

  const isArtist = pathname?.startsWith('/dashboard/artist');
  const sidebarSections = isArtist ? ARTIST_SIDEBAR_SECTIONS : EMPLOYER_SIDEBAR_SECTIONS;

  const handleLogout = () => {
    console.log('خروج از حساب');
  };

  return (
    <div className="min-h-screen bg-[#f8faff] flex flex-col">
      <Navbar onMenuClick={toggleSidebar} />

      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <Sidebar
          sections={sidebarSections}
          isCollapsed={isCollapsed}
          onToggle={toggleSidebar}
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

    </div>
  );
}