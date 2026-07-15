'use client';

import React, { memo, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '../../../../shared/lib/cn';
import { ISidebarProps } from '../../types/sidebar.types';
import SidebarHeader from './SidebarHeader';
import SidebarItem from './SidebarItem';
import SidebarFooter from './SidebarFooter';

const Sidebar: React.FC<ISidebarProps> = ({
  sections,
  isCollapsed,
  onToggle,
  activePath: propActivePath,
  onLogout,
  className = '',
}) => {
  const pathname = usePathname();
  const activePath = propActivePath || pathname;

  const activeSections = useMemo(() => {
    return sections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => !item.disabled),
      }))
      .filter((section) => section.items.length > 0);
  }, [sections]);

  return (
    <>
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden"
          onClick={onToggle}
        />
      )}

      <aside
        className={cn(
          'fixed right-0 top-0 h-full transition-all duration-300 z-[99] flex flex-col shadow-2xl',
          'bg-gradient-to-b from-[#1a2a6c] via-[#1e3a8a] to-[#2745d1]',
          isCollapsed ? 'w-[72px]' : 'w-[260px]',
          className
        )}
      >
        <SidebarHeader isCollapsed={isCollapsed} onToggle={onToggle} />

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {activeSections.map((section) => (
            <div key={section.id} className="space-y-0.5">
              {section.items.map((item) => (
                <SidebarItem
                  key={item.id}
                  item={item}
                  isCollapsed={isCollapsed}
                  isActive={activePath === item.href || activePath?.startsWith(item.href + '/')}
                />
              ))}
            </div>
          ))}
        </nav>

        <SidebarFooter isCollapsed={isCollapsed} onLogout={onLogout} />
      </aside>
    </>
  );
};

export default memo(Sidebar);