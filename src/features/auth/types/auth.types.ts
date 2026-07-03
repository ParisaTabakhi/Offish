// src/features/auth/types/auth.types.ts
import { LucideIcon } from 'lucide-react';

// ============================================
// 1. ROLE
// ============================================

export type UserRole = 'employer' | 'artist';

export interface IRole {
  id: UserRole;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  features: string[];
  route: string;
}

// ============================================
// 2. AUTH FORM
// ============================================

export interface IAuthFormData {
  firstName?: string;
  lastName?: string;
  email: string;
  mobile?: string;
  password: string;
  confirmPassword?: string;
  terms?: boolean;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IRegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
  terms: boolean;
}

// ============================================
// 3. THEME
// ============================================

export interface IAuthTheme {
  color: string;
  bgGradient: string;
  subtleBg: string;
  ringFocus: string;
}

// ============================================
// 4. COMPONENT PROPS
// ============================================

export interface IAuthPageProps {
  role: UserRole;
}

export interface IAuthHeaderProps {
  role: UserRole;
  title: string;
  subtitle: string;
  onBack?: () => void;
}

export interface IAuthFormProps {
  role: UserRole;
  type: 'login' | 'register';
  onSubmit: (data: any) => void;
  isLoading: boolean;
}

export interface IAuthVisualProps {
  role: UserRole;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface IAuthFooterProps {
  role: UserRole;
  text: string;
  linkText: string;
  linkHref: string;
}