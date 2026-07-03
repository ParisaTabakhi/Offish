'use client';

import React, { useState, memo } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Smartphone, Zap, LayoutGrid } from 'lucide-react';
import { Input } from '../../../shared/ui/input';
import { Label } from '../../../shared/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../shared/ui/tabs';
import { useToast } from '../../../shared/hooks/use-toast';
import { getAuthTheme, LOGIN_MESSAGES } from '../constants/auth.constants';
import { IAuthPageProps } from '../types/auth.types';

const Login: React.FC<IAuthPageProps> = ({ role }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email');
  const [isLoading, setIsLoading] = useState(false);

  const isArtist = role === 'artist';
  const theme = getAuthTheme(role);
  const messages = LOGIN_MESSAGES[role] || LOGIN_MESSAGES.employer;
  const Icon = isArtist ? Zap : LayoutGrid;

  const primaryColor = isArtist ? '#f97316' : '#2745d1';
  const bgGradient = isArtist
    ? 'bg-gradient-to-br from-orange-500 to-amber-500'
    : 'bg-gradient-to-br from-[#2745d1] to-blue-600';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: 'پیام سیستم',
        description: 'این یک دموی نمایشی است. اتصال به سرور برقرار نیست.',
      });
    }, 1500);
  };

  const handleBack = () => {
    router.push('/auth/role');
  };

  return (
    <div className="h-[100dvh] w-full flex bg-slate-50 overflow-hidden">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative overflow-y-auto">
        

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="mb-10 text-center lg:text-right">
            <button
          onClick={handleBack}
          className="absolute top-3 right-8 text-slate-500 hover:text-slate-900 gap-2 hover:bg-slate-100 px-3 py-2 rounded-lg flex items-center transition-colors z-10"
        >
          <ArrowRight className="w-4 h-4" />
             بازگشت 
          </button>
            <h1 className="text-3xl font-bold text-slate-900 mb-3">
              ورود به حساب{' '}
              <span style={{ color: primaryColor }}>
                {isArtist ? 'هنری' : 'کاری'}
              </span>
            </h1>
            <p className="text-slate-500">برای مدیریت پروژه‌ها و ارتباطات خود وارد شوید</p>
          </div>

          <Tabs value={loginMethod} onValueChange={setLoginMethod} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-100 p-1 h-auto rounded-xl">
              <TabsTrigger
                value="email"
                className="rounded-lg py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900 text-slate-500"
              >
                ایمیل
              </TabsTrigger>
              <TabsTrigger
                value="mobile"
                className="rounded-lg py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900 text-slate-500"
              >
                موبایل
              </TabsTrigger>
            </TabsList>

            <form onSubmit={handleSubmit} className="space-y-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={loginMethod}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {loginMethod === 'email' ? (
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium">آدرس ایمیل</Label>
                      <div className="relative">
                        <Input
                          type="email"
                          placeholder="example@domain.com"
                          className={`input-modern pr-10 ${theme.ringFocus}`}
                          dir="ltr"
                        />
                        <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium">شماره موبایل</Label>
                      <div className="relative">
                        <Input
                          type="tel"
                          placeholder="0912..."
                          className={`input-modern pr-10 ${theme.ringFocus}`}
                          dir="ltr"
                        />
                        <Smartphone className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-slate-700 font-medium">رمز عبور</Label>
                  <a href="#" className="text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors">
                    رمز را فراموش کرده‌اید؟
                  </a>
                </div>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    className={`input-modern px-10 ${theme.ringFocus}`}
                    placeholder="••••••••"
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

              <button
                type="submit"
                disabled={isLoading}
                style={{ backgroundColor: primaryColor }}
                className="w-full h-12 rounded-xl text-white font-medium shadow-lg shadow-blue-900/10 hover:shadow-xl hover:opacity-90 transition-all duration-300 mt-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                ) : (
                  'ورود به حساب کاربری'
                )}
              </button>
            </form>
          </Tabs>

          <p className="mt-8 text-center text-sm text-slate-500">
            حساب کاربری ندارید؟{' '}
            <button
              onClick={() => router.push(`/auth/register/${role}`)}
              style={{ color: primaryColor }}
              className="font-bold hover:underline"
            >
              ثبت‌نام کنید
            </button>
          </p>
        </motion.div>
      </div>

      <div
        className={`hidden lg:flex w-1/2 relative overflow-hidden ${bgGradient} p-12 items-center justify-center`}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-white/10 rounded-full" />

        <div className="relative z-10 text-center text-white max-w-md">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 relative inline-block"
          >
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl mx-auto">
              <span className="text-4xl font-bold">آ</span>
            </div>
            <div className="absolute -top-4 -right-4 w-2 h-2 bg-white rounded-full opacity-60" />
            <div className="absolute top-1/2 -right-8 w-1.5 h-1.5 bg-white rounded-full opacity-40" />
            <div className="absolute -bottom-2 -left-6 w-3 h-3 bg-white rounded-full opacity-50" />
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold mb-4"
          >
            {messages.title}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/80 leading-relaxed font-light text-lg"
          >
            {messages.description}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default memo(Login);