import { LucideIcon } from 'lucide-react';

export interface ISidebarItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon; // ✅ این تایپ برای آیکون‌ها
  badge?: number;
  disabled?: boolean;
}

export interface ISidebarSection {
  id: string;
  title?: string;
  items: ISidebarItem[];
}

export interface ISidebarProps {
  sections: ISidebarSection[];
  isCollapsed: boolean;
  onToggle: () => void;
  activePath?: string;
  onLogout?: () => void;
  className?: string;
}

export interface ISidebarItemProps {
  item: ISidebarItem;
  isCollapsed: boolean;
  isActive: boolean;
}

export interface ISidebarHeaderProps {
  isCollapsed: boolean;
  onToggle: () => void;
  logoText?: string;
}

export interface ISidebarFooterProps {
  isCollapsed: boolean;
  onLogout?: () => void;
}