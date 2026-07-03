// src/features/auth/components/AuthPage.tsx
'use client';

import React, { memo } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { getAuthTheme } from '../constants/auth.constants';
import { IAuthPageProps } from '../types/auth.types';
import AuthHeader from './AuthHeader';
import AuthForm from './AuthForm';
import AuthFooter from './AuthFooter';
import AuthVisual from './AuthVisual';

interface IAuthPageComponentProps extends IAuthPageProps {
  type: 'login' | 'register';
  title: string;
  subtitle: string;
  visualTitle: string;
  visualDescription: string;
  visualIcon: any;
  footerText: string;
  footerLinkText: string;
  footerLinkHref: string;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const AuthPage: React.FC<IAuthPageComponentProps> = ({
  role,
  type,
  title,
  subtitle,
  visualTitle,
  visualDescription,
  visualIcon,
  footerText,
  footerLinkText,
  footerLinkHref,
  onSubmit,
  isLoading,
}) => {
  const router = useRouter();
  const theme = getAuthTheme(role);

  const handleBack = () => {
    router.push('/auth/role');
  };

  return (
    <div className="min-h-screen w-full flex bg-slate-50">
      {/* Left Side: Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative overflow-y-auto">
        <AuthHeader
          role={role}
          title={title}
          subtitle={subtitle}
          onBack={handleBack}
        />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md py-10"
        >
          <AuthForm
            role={role}
            type={type}
            onSubmit={onSubmit}
            isLoading={isLoading}
          />

          <AuthFooter
            role={role}
            text={footerText}
            linkText={footerLinkText}
            linkHref={footerLinkHref}
          />
        </motion.div>
      </div>

      {/* Right Side: Visual Section */}
      <AuthVisual
        role={role}
        title={visualTitle}
        description={visualDescription}
        icon={visualIcon}
      />
    </div>
  );
};

export default memo(AuthPage);