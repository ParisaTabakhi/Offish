// src/features/navigation/types/navigation.types.ts
import { LucideIcon } from 'lucide-react';
import { AppRoute } from '../../../shared/constants/routes';

// ============================================
// 1. BASE INTERFACES
// ============================================

export interface IBaseComponent {
  className?: string;
}

export interface IBaseMenuItem {
  label: string;
  href: AppRoute;
  icon?: LucideIcon;
}

// ============================================
// 2. NAVIGATION ITEMS
// ============================================


export interface INavItem {
  isActive?: boolean;
  onClick?: () => void;
  label: string;
  href: string;
  icon?: LucideIcon;
}

export interface INavItemProps {
  item: INavItem;
  isActive: boolean;
  onClick?: () => void;
}

// ============================================
// 3. NAVBAR PROPS
// ============================================

export interface INavbarProps extends IBaseComponent {
  menuItems?: INavItem[];
  logoText?: string;
}

// ============================================
// 4. MOBILE MENU
// ============================================

export interface IMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: INavItem[];
}

// ============================================
// 5. DESKTOP NAV
// ============================================

export interface IDesktopNavProps {
  items: INavItem[];
}

// ============================================
// 6. NAV ACTIONS
// ============================================

export interface INavActionsProps {
  onMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}



export interface INavActionsProps {
  onMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

export interface INavbarProps {
  onMenuClick?: () => void;
}

export interface IDashboardButtonProps {
  role?: 'artist' | 'employer';
}