// src/features/auth/components/AuthForm.tsx
'use client';

import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, Smartphone, User } from 'lucide-react';
import { Input } from '../../../shared/ui/input';
import { Label } from '../../../shared/ui/label';
import { Checkbox } from '../../../shared/ui/checkbox';
import { IAuthFormProps } from '../types/auth.types';

const AuthForm: React.FC<IAuthFormProps> = ({
  role,
  type,
  onSubmit,
  isLoading,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [loginMethod, setLoginMethod] = React.useState('email');

  const isRegister = type === 'register';
  const theme = {
    color: role === 'artist' ? '#f97316' : '#2745d1',
    ringFocus: role === 'artist' ? 'focus-visible:ring-orange-500' : 'focus-visible:ring-[#2745d1]',
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {isRegister && (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-slate-700 font-medium">نام</Label>
            <Input type="text" className={`input-modern ${theme.ringFocus}`} />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-700 font-medium">نام خانوادگی</Label>
            <Input type="text" className={`input-modern ${theme.ringFocus}`} />
          </div>
        </div>
      )}

      {isRegister && (
        <div className="space-y-2">
          <Label className="text-slate-700 font-medium">شماره موبایل</Label>
          <div className="relative">
            <Input
              type="tel"
              className={`input-modern pr-10 ${theme.ringFocus}`}
              dir="ltr"
              placeholder="0912..."
            />
            <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label className="text-slate-700 font-medium">
          {loginMethod === 'email' ? 'آدرس ایمیل' : 'شماره موبایل'}
        </Label>
        <div className="relative">
          <Input
            type={loginMethod === 'email' ? 'email' : 'tel'}
            className={`input-modern pr-10 ${theme.ringFocus}`}
            dir="ltr"
            placeholder={loginMethod === 'email' ? 'name@example.com' : '0912...'}
          />
          {loginMethod === 'email' ? (
            <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          ) : (
            <Smartphone className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          )}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label className="text-slate-700 font-medium">رمز عبور</Label>
          {!isRegister && (
            <a href="#" className="text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors">
              رمز را فراموش کرده‌اید؟
            </a>
          )}
        </div>
        <div className="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            className={`input-modern px-10 ${theme.ringFocus}`}
            placeholder="حداقل ۸ کاراکتر"
            dir="ltr"
          />
          <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {isRegister && (
        <div className="flex items-start gap-3 pt-2">
          <Checkbox id="terms" className="mt-1 data-[state=checked]:bg-slate-900 data-[state=checked]:border-slate-900" />
          <Label htmlFor="terms" className="text-slate-500 text-sm leading-6 font-normal cursor-pointer">
            تمامی <span className="font-medium text-slate-800 underline">قوانین و مقررات</span> آفیش را مطالعه کرده و می‌پذیرم.
          </Label>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        style={{ backgroundColor: theme.color }}
        className="w-full h-12 rounded-xl text-white font-medium shadow-lg shadow-blue-900/10 hover:shadow-xl hover:opacity-90 transition-all duration-300 mt-2"
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
        ) : (
          isRegister ? 'ثبت‌نام رایگان' : 'ورود به حساب کاربری'
        )}
      </button>
    </form>
  );
};

export default memo(AuthForm);