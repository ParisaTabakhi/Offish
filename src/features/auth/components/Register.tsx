'use client';

import React, { memo } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, User, Star, CheckCircle2 , ArrowRight} from 'lucide-react';
import { Input } from '../../../shared/ui/input';
import { Label } from '../../../shared/ui/label';
import { Checkbox } from '../../../shared/ui/checkbox';
import { getAuthTheme, REGISTER_FEATURES } from '../constants/auth.constants';
import { IAuthPageProps } from '../types/auth.types';
import { useAuthForm } from '../hooks/useAuth';

const Register: React.FC<IAuthPageProps> = ({ role }) => {
  const router = useRouter();
  const isArtist = role === 'artist';
  const theme = getAuthTheme(role);
  const features = REGISTER_FEATURES[role] || REGISTER_FEATURES.employer;

  const primaryColor = isArtist ? '#f97316' : '#2745d1';
  const bgGradient = isArtist
    ? 'bg-gradient-to-br from-orange-500 to-amber-500'
    : 'bg-gradient-to-br from-[#2745d1] to-blue-600';

  const {
    showPassword,
    setShowPassword,
    isLoading,
    handleSubmit,
    handleBack,
  } = useAuthForm({ role, type: 'register' });

  return (
    <div className="h-[100dvh] w-full flex bg-slate-50 overflow-hidden">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative overflow-y-auto">
        <button
          onClick={handleBack}
          className="absolute top-6 right-6 text-slate-500 hover:text-slate-900 gap-2 hover:bg-slate-100 px-3 py-2 rounded-lg flex items-center transition-colors z-10"
        >
          <ArrowRight className="w-4 h-4" />
        </button>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md py-10"
        >
          <div className="my-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              شروع همکاری در <span style={{ color: primaryColor }}>آفیش</span>
            </h1>
            <p className="text-slate-500">
              حساب کاربری {isArtist ? 'هنری' : 'کارفرمایی'} خود را در چند دقیقه بسازید
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">نام</Label>
                <Input
                  name="firstName"
                  type="text"
                  className={`input-modern ${theme.ringFocus}`}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">نام خانوادگی</Label>
                <Input
                  name="lastName"
                  type="text"
                  className={`input-modern ${theme.ringFocus}`}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-slate-700 font-medium">شماره موبایل</Label>
              <div className="relative">
                <Input
                  name="mobileNumber"
                  type="tel"
                  className={`input-modern pr-10 ${theme.ringFocus}`}
                  dir="ltr"
                  placeholder="0912..."
                  required
                />
                <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-slate-700 font-medium">آدرس ایمیل</Label>
              <div className="relative">
                <Input
                  name="email"
                  type="email"
                  className={`input-modern pr-10 ${theme.ringFocus}`}
                  dir="ltr"
                  placeholder="name@example.com"
                  required
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-slate-700 font-medium">رمز عبور</Label>
              <div className="relative">
                <Input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  className={`input-modern px-10 ${theme.ringFocus}`}
                  placeholder="حداقل ۸ کاراکتر"
                  dir="ltr"
                  required
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

            <div className="flex items-start gap-3 pt-2">
              <Checkbox
                id="terms"
                name="terms"
                className="mt-1 data-[state=checked]:bg-slate-900 data-[state=checked]:border-slate-900"
                required
              />
              <Label htmlFor="terms" className="text-slate-500 text-sm leading-6 font-normal cursor-pointer">
                تمامی <span className="font-medium text-slate-800 underline">قوانین و مقررات</span> آفیش را مطالعه کرده و می‌پذیرم.
              </Label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{ backgroundColor: primaryColor }}
              className="w-full h-12 rounded-xl text-white font-medium shadow-lg shadow-blue-900/10 hover:shadow-xl hover:opacity-90 transition-all duration-300"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
              ) : (
                'ثبت‌نام رایگان'
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            قبلاً عضو شده‌اید؟{' '}
            <button
              onClick={() => router.push(`/auth/login/${role}`)}
              style={{ color: primaryColor }}
              className="font-bold hover:underline"
            >
              وارد شوید
            </button>
          </p>
        </motion.div>
      </div>

      <div
        className={`hidden lg:flex w-1/2 relative overflow-hidden ${bgGradient} p-12 items-center justify-center`}
      >
        {/* محتوای بصری */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Star className={`w-6 h-6 ${isArtist ? 'text-orange-500' : 'text-[#2745d1]'}`} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">مزایای عضویت</h3>
                <p className="text-white/70 text-sm">چرا باید به آفیش بپیوندید؟</p>
              </div>
            </div>

            <ul className="space-y-4">
              {features.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-3 text-white/90 text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 opacity-80 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default memo(Register);