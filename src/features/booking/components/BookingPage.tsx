// src/features/booking/components/BookingPage.tsx
'use client';

import React, { useState, useEffect, useMemo, memo } from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { FormProvider } from 'react-hook-form';
import { useBookingForm } from '../hooks/useBookingForm';
import { ARTIST_TO_FORM_CATEGORY_MAP } from '../data/booking.data';
import BookingHeader from './BookingHeader';
import BookingProgress from './BookingProgress';
import BookingStepHeader from './BookingStepHeader';
import BookingNavigation from './BookingNavigation';
import BookingVisual from './BookingVisual';
import Step1EventType from './steps/Step1EventType';
import Step2Category from './steps/Step2Category';
import Step3AgeRange from './steps/Step3AgeRange';
import Step4Guests from './steps/Step4Guests';
import Step5Address from './steps/Step5Address';
import Step6DateTime from './steps/Step6DateTime';

// ============================================
// Constants
// ============================================

const TOTAL_STEPS = 6;

const STEP_COMPONENTS: Record<number, React.FC<any>> = {
  1: Step1EventType,
  2: Step2Category,
  3: Step3AgeRange,
  4: Step4Guests,
  5: Step5Address,
  6: Step6DateTime,
};

// ============================================
// Types
// ============================================

interface IPreSelectedArtist {
  id: string;
  name: string;
  category: string;
  formCategory: string;
}

// ============================================
// Main Component
// ============================================

const BookingPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [preSelectedArtist, setPreSelectedArtist] = useState<IPreSelectedArtist | null>(null);

  const { form, validateStep, submitForm, STEP_TITLES, STEP_SUBTITLES, setValue } =
    useBookingForm();

  //  Extract artist info from URL
  useEffect(() => {
    const artistId = searchParams.get('artistId');
    const artistName = searchParams.get('artistName');
    const category = searchParams.get('category');

    if (artistId && artistName && category) {
      const formCategory = ARTIST_TO_FORM_CATEGORY_MAP[category] || '';
      setPreSelectedArtist({ id: artistId, name: artistName, category, formCategory });

      // Auto-fill form fields
      setValue('category', formCategory);
      if (category === 'Singer' || category === 'Musician') {
        setValue('eventType', 'concert');
      } else {
        setValue('eventType', 'other');
      }
    }
  }, [searchParams, setValue]);

  // Handlers
  const handleNext = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    } else if (isValid && currentStep === TOTAL_STEPS) {
      await submitForm();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  //  Derived values
  const progress = (currentStep / TOTAL_STEPS) * 100;
  const StepComponent = STEP_COMPONENTS[currentStep];
  const stepProps = useMemo(
    () =>
      currentStep === 2 && preSelectedArtist?.formCategory
        ? { preSelectedCategory: preSelectedArtist.formCategory }
        : {},
    [currentStep, preSelectedArtist]
  );

  return (
    <div className=" w-full overflow-hidden flex bg-white">
      {/* Left Side - Form Area */}
      <div className="w-full lg:w-1/2  flex flex-col">
        <BookingHeader artistName={preSelectedArtist?.name} />

        <div className="flex-1 min-h-0 flex flex-col px-6 md:px-8 py-4 max-w-2xl mx-auto w-full">
          <BookingProgress
            currentStep={currentStep}
            totalSteps={TOTAL_STEPS}
            progress={progress}
          />

          <BookingStepHeader
            title={STEP_TITLES[currentStep]}
            subtitle={STEP_SUBTITLES[currentStep]}
            artistName={preSelectedArtist?.name}
            artistCategory={preSelectedArtist?.category}
            preSelectedCategory={preSelectedArtist?.formCategory}
            currentStep={currentStep}
          />

          {/* Form */}
          <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-1">
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
                    <StepComponent {...stepProps} />
                  </motion.div>
                </AnimatePresence>
              </form>
            </FormProvider>
          </div>

          <BookingNavigation
            currentStep={currentStep}
            totalSteps={TOTAL_STEPS}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>
      </div>

      {/* Right Side - Visual */}
      <BookingVisual />
    </div>
  );
};

export default memo(BookingPage);