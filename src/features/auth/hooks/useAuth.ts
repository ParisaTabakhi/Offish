'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useLogin, useRegister } from '../../../shared/hooks/queries/useAuth';
import { useToast } from '../../../shared/hooks/use-toast';
import { USER_ROLES } from '../../../shared/constants/roles';

interface IUseAuthFormProps {
  role: 'artist' | 'planner';
  type: 'login' | 'register';
}

export const useAuthForm = ({ role, type }: IUseAuthFormProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email');

  const loginMutation = useLogin();
  const registerMutation = useRegister();

  const isLoading = type === 'login' ? loginMutation.isPending : registerMutation.isPending;

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);

      if (type === 'login') {
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        if (!email || !password) {
          toast({
            title: 'خطا',
            description: 'لطفاً تمام فیلدها را پر کنید.',
            variant: 'destructive',
          });
          return;
        }

        loginMutation.mutate({
          email,
          password,
          fcmToken: 'placeholder-token',
        });
      } else {
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const mobileNumber = formData.get('mobileNumber') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const terms = formData.get('terms') === 'on';

        if (!firstName || !lastName || !mobileNumber || !email || !password) {
          toast({
            title: 'خطا',
            description: 'لطفاً تمام فیلدها را پر کنید.',
            variant: 'destructive',
          });
          return;
        }

        if (!terms) {
          toast({
            title: 'خطا',
            description: 'لطفاً قوانین و مقررات را بپذیرید.',
            variant: 'destructive',
          });
          return;
        }

        // ✅ نقش‌ها: 1 = هنرمند, 2 = پلنر
        const roleMap: Record<string, number> = {
          artist: USER_ROLES.ARTIST, // 1
          planner: USER_ROLES.PLANNER, // 2
        };

        registerMutation.mutate({
          fullName: `${firstName} ${lastName}`,
          mobileNumber,
          email,
          password,
          role: roleMap[role] || 0,
          fcmToken: 'placeholder-token',
        });
      }
    },
    [type, role, loginMutation, registerMutation, toast]
  );

  const handleBack = useCallback(() => {
    router.push('/auth/role');
  }, [router]);

  return {
    showPassword,
    setShowPassword,
    loginMethod,
    setLoginMethod,
    isLoading,
    handleSubmit,
    handleBack,
  };
};