'use client';

import { usePathname } from 'next/navigation';

export type NavbarMode = 'public' | 'dashboard';

export const useNavbarMode = (): NavbarMode => {
  const pathname = usePathname();

  const isDashboard = pathname?.startsWith('/dashboard/');

  return isDashboard ? 'dashboard' : 'public';
};

export const useIsAuthenticated = (): boolean => {
  return true; 
};