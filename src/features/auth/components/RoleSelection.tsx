'use client';

import React, { useState, memo } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Sparkles, Building2 } from 'lucide-react';
import { ROLES } from '../constants/auth.constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 50,
      damping: 15,
    },
  },
};

const RoleSelection: React.FC = () => {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);

  const handleRoleSelect = (role: string) => {
    router.push(`/auth/login/${role}`);
  };

  return (
    <div className="h-[100dvh] bg-slate-50 relative mb-8 flex flex-col items-center justify-center p-6 overflow-hidden font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(to right, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50/80" />

        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-[10%] w-72 h-72 bg-blue-200/20 rounded-full blur-[80px] mix-blend-multiply"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-[10%] w-96 h-96 bg-orange-200/20 rounded-full blur-[80px] mix-blend-multiply"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl"
      >
        <div className="text-center mb-0 relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-slate-500 text-xs font-medium mb-4"
          >
            <Sparkles className="w-3 h-3 text-[#2745d1]" />
            <span>پلتفرم رزرو آنلاین</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            به دنیای{' '}
            <span className="relative inline-block text-[#2745d1]">
              آفیش
              <svg
                className="absolute w-full h-3 -bottom-1 right-0 text-blue-200 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>{' '}
            خوش آمدید
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto text-balance">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 px-4">
          {ROLES.map((role) => {
            const Icon = role.icon;

            return (
              <motion.div
                key={role.id}
                variants={cardVariants}
                onMouseEnter={() => setHovered(role.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleRoleSelect(role.id)}
                className="group relative h-full cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    role.id === 'employer' ? 'from-[#2745d1] to-blue-600' : 'from-orange-500 to-amber-500'
                  } rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl transform group-hover:scale-[1.02]`}
                />
                <div className="relative h-full bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-lg shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 flex flex-col items-start overflow-hidden group-hover:-translate-y-1">
                  <Building2
                    className={`absolute -bottom-8 -left-8 w-48 h-48 ${
                      role.id === 'employer'
                        ? 'text-slate-50 group-hover:text-blue-50/20'
                        : 'text-slate-50 group-hover:text-orange-50/20'
                    } transition-colors duration-500 -rotate-12`}
                  />

                  <div
                    className={`w-16 h-16 rounded-2xl ${
                      role.id === 'employer' ? 'bg-blue-50' : 'bg-orange-50'
                    } flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner`}
                  >
                    <Icon
                      className={`w-8 h-8 ${
                        role.id === 'employer' ? 'text-[#2745d1]' : 'text-orange-500'
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-2xl font-bold text-slate-900 mb-2 ${
                      role.id === 'employer'
                        ? 'group-hover:text-[#2745d1]'
                        : 'group-hover:text-orange-500'
                    } transition-colors`}
                  >
                    {role.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                    {role.description}
                  </p>

                  <div className="space-y-3 mb-4 w-full relative z-10">
                    {role.features.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                        <div
                          className={`w-5 h-5 rounded-full ${
                            role.id === 'employer' ? 'bg-blue-50' : 'bg-orange-50'
                          } flex items-center justify-center flex-shrink-0`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              role.id === 'employer' ? 'text-[#2745d1]' : 'text-orange-500'
                            }`}
                          />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto w-full pt-4 border-t border-slate-50 relative z-10">
                    <div
                      className={`flex items-center justify-between ${
                        role.id === 'employer' ? 'text-[#2745d1]' : 'text-orange-500'
                      } font-bold group-hover:translate-x-1 transition-transform`}
                    >
                      <span>
                        {role.id === 'employer' ? 'ورود به پنل کارفرما' : 'ورود به پنل هنرمندان'}
                      </span>
                      <ArrowLeft className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

     
    </div>
  );
};

export default memo(RoleSelection);