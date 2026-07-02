// src/features/booking/components/BookingPage.tsx
'use client';

import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormProvider } from 'react-hook-form';
import { Sparkles, ArrowRight, ArrowLeft, Calendar } from 'lucide-react';
import { useBookingForm } from '../hooks/useBookingForm';
import ProgressBar from './ProgressBar';
import Step1EventType from './Step1EventType';
import Step2Category from './Step2Category';
import Step3AgeRange from './Step3AgeRange';
import Step4Guests from './Step4Guests';
import Step5Address from './Step5Address';
import Step6DateTime from './Step6DateTime';

// ============================================
// STEP RENDERER
// ============================================

const STEP_COMPONENTS: Record<number, React.FC> = {
  1: Step1EventType,
  2: Step2Category,
  3: Step3AgeRange,
  4: Step4Guests,
  5: Step5Address,
  6: Step6DateTime,
};

// ============================================
// RIGHT SIDE VISUAL
// ============================================

const BookingVisual: React.FC = () => {
const images = [
  '/images/0101.png',
  '/images/124.avif',
  '/images/111.png',
  '/images/125.avif',
];

  return (
    <div className="hidden lg:flex w-1/2 bg-[#f8fafc] relative overflow-hidden flex-col justify-between px-6 py-4">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2745d1]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-2 gap-3 h-full content-center py-2">
        <div className="space-y-3 pt-4">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img alt="Modern concert" className="w-full h-44 object-cover" src={images[0]} />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img alt="Wedding decoration" className="w-full h-32 object-cover" src={images[1]} />
          </div>
        </div>
        <div className="space-y-3 pt-4">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img alt="Conference" className="w-full h-32 object-cover" src={images[2]} />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img alt="Birthday party" className="w-full h-44 object-cover" src={images[3]} />
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-3 bg-white/60 backdrop-blur-xl p-3 rounded-2xl border border-white/50 shadow-sm shrink-0">
        <div className="flex items-start gap-3">
          <div className="bg-orange-100 p-2 rounded-full shrink-0">
            <Calendar className="w-4 h-4 text-[#ff6b35]" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm">تجربه‌ای متفاوت از رزرو</h3>
            <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">
              ما در بازار رویداد با گردآوری بهترین‌های هر حوزه، خیال شما را از بابت کیفیت
              برگزاری مراسم آسوده می‌کنیم.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

const BookingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { form, validateStep, submitForm, STEP_TITLES, STEP_SUBTITLES, TOTAL_STEPS } =
    useBookingForm();

  const handleNext = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid) {
      if (currentStep < TOTAL_STEPS) {
        setCurrentStep(currentStep + 1);
      } else {
        await submitForm();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = (currentStep / TOTAL_STEPS) * 100;
  const StepComponent = STEP_COMPONENTS[currentStep];

  return (
    <div className="h-[100dvh] w-full overflow-hidden flex bg-white">
      {/* Left Side - Form Area */}
      <div className="w-full lg:w-1/2 h-full flex flex-col">
        {/* Top Header - Fixed */}
        <div className="px-6 md:px-8 py-2.5 flex items-center gap-2 bg-white/80 backdrop-blur-md border-b border-gray-100 shrink-0">
          <div className="w-8 h-8 bg-[#2745d1] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-base font-bold text-gray-900 tracking-tight">آفیش</h1>
            <p className="text-[9px] text-gray-500 font-medium">پلتفرم رزرو آنلاین</p>
          </div>
        </div>

        {/* Main Form Container - Full remaining height */}
        <div className="flex-1 min-h-0 flex flex-col px-6 md:px-8 py-4 max-w-2xl mx-auto w-full">
          {/* Progress - Compact */}
          <div className="mb-3 shrink-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-semibold text-[#2745d1] bg-blue-50 px-2 py-0.5 rounded-full">
                مرحله {currentStep} از {TOTAL_STEPS}
              </span>
              <span className="text-[10px] text-gray-400">{Math.round(progress)}% تکمیل شده</span>
            </div>
            <ProgressBar progress={progress} currentStep={currentStep} totalSteps={TOTAL_STEPS} />
          </div>

          {/* Header - Compact */}
          <motion.div
            key="header"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 shrink-0"
          >
            <h2 className="text-xl font-extrabold text-gray-900 mb-0.5">
              {STEP_TITLES[currentStep]}
            </h2>
            <p className="text-xs text-gray-500">{STEP_SUBTITLES[currentStep]}</p>
          </motion.div>

          {/* Form - Scrollable if needed */}
          <div className="flex-1 min-h-0 overflow-y-auto py-1">
            <FormProvider {...form}>
              <form onSubmit={(e) => e.preventDefault()} className="h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                  >
                    <StepComponent />
                  </motion.div>
                </AnimatePresence>
              </form>
            </FormProvider>
          </div>

          {/* Navigation - Fixed at bottom */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 shrink-0">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`text-xs text-gray-500 hover:text-[#2745d1] hover:bg-blue-50 transition-all px-3 py-1.5 rounded-lg ${
                currentStep === 1 ? 'opacity-0 pointer-events-none' : ''
              }`}
            >
              <ArrowRight className="w-3.5 h-3.5 ml-1 inline" />
              مرحله قبل
            </button>

            <button
              onClick={handleNext}
              className="bg-[#2745d1] hover:bg-[#1e3a8a] text-white px-5 py-2.5 text-xs rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all transform hover:-translate-y-0.5 flex items-center"
            >
              {currentStep === TOTAL_STEPS ? 'ثبت نهایی درخواست' : 'ادامه مراحل'}
              <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Visual */}
      <BookingVisual />
    </div>
  );
};

export default memo(BookingPage);