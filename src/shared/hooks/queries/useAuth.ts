'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { authService } from '../../../shared/services/auth/auth.service';
import {
  ILoginRequest,
  IRegisterRequest,
} from '../../../shared/services/auth/auth.types';
import { useToast } from '../../../shared/hooks/use-toast';
import {  ROLE_ROUTES } from '../../../shared/constants/roles';

const getDashboardPath = (role: number): string => {
  return ROLE_ROUTES[role] || '/';
};

export const useLogin = () => {
  const router = useRouter();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: ILoginRequest) => authService.login(credentials),
    onSuccess: (data) => {

      document.cookie = `accessToken=${data.accessToken}; path=/; max-age=${data.expiresIn}; SameSite=Lax; ${process.env.NODE_ENV === 'production' ? 'Secure;' : ''}`;

      queryClient.setQueryData(['user'], data.user);

      toast({
        title: '✅ ورود موفق',
        description: 'به پنل کاربری خود خوش آمدید.',
      });

      const dashboardPath = getDashboardPath(data.user.role);
      router.push(dashboardPath);
    },
    onError: (error: any) => {
      toast({
        title: '❌ خطا در ورود',
        description: error?.response?.data?.message || 'مشکلی در ورود رخ داد.',
        variant: 'destructive',
      });
    },
  });
};

export const useRegister = () => {
  const router = useRouter();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: IRegisterRequest) => authService.register(data),
    onSuccess: (data) => {
      toast({
        title: '✅ ثبت‌نام موفق',
        description: 'حساب کاربری شما با موفقیت ایجاد شد.',
      });
      router.push(`/auth/login/employer`);
    },
    onError: (error: any) => {
      toast({
        title: '❌ خطا در ثبت‌نام',
        description: error?.response?.data?.message || 'مشکلی در ثبت‌نام رخ داد.',
        variant: 'destructive',
      });
    },
  });
};

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      document.cookie =
        'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
      queryClient.clear();
      router.push('/auth/role');
    },
  });
};