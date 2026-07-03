// src/features/booking/hooks/useBookingForm.ts
'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useToast } from '../../../shared/hooks/use-toast';
import { IBookingFormData } from '../types/booking.types';

// ============================================
// 1. VALIDATION SCHEMA
// ============================================

const bookingSchema = yup.object({
  eventType: yup.string().required('لطفاً نوع رویداد را انتخاب کنید'),
  category: yup.string().required('لطفاً دسته‌بندی را انتخاب کنید'),
  subcategory: yup.string().required('لطفاً زیردسته را انتخاب کنید'),
  ageRanges: yup
    .array()
    .of(yup.string())
    .min(1, 'لطفاً حداقل یک رده سنی را انتخاب کنید')
    .required('انتخاب رده سنی الزامی است'),
  numberOfGuests: yup
    .number()
    .min(1, 'حداقل ۱ مهمان الزامی است')
    .required('تعداد مهمانان الزامی است'),
  city: yup.string().required('انتخاب شهر الزامی است'),
  district: yup.string().required('انتخاب منطقه الزامی است'),
  address: yup.string().required('آدرس دقیق الزامی است'),
  eventDate: yup.string().required('تاریخ برگزاری الزامی است'),
  startTime: yup.string().required('ساعت شروع الزامی است'),
  endTime: yup.string().nullable().default(''),
  notes: yup.string().nullable().default(''),
});

// ============================================
// 2. STEP FIELDS CONFIG
// ============================================

const STEP_FIELDS: Record<number, (keyof IBookingFormData)[]> = {
  1: ['eventType'],
  2: ['category', 'subcategory'],
  3: ['ageRanges'],
  4: ['numberOfGuests'],
  5: ['city', 'district', 'address'],
  6: ['eventDate', 'startTime'],
};

const STEP_TITLES: Record<number, string> = {
  1: 'چه رویدادی در پیش دارید؟',
  2: 'انتخاب هنرمندان و خدمات',
  3: 'رده سنی مخاطبان',
  4: 'تعداد مهمانان',
  5: 'محل برگزاری',
  6: 'زمان‌بندی مراسم',
};

const STEP_SUBTITLES: Record<number, string> = {
  1: 'برای شروع، نوع مراسم خود را انتخاب کنید',
  2: 'دسته‌بندی مورد نظر خود را مشخص کنید',
  3: 'مخاطبان اصلی برنامه چه کسانی هستند؟',
  4: 'تخمین شما از تعداد حاضرین چقدر است؟',
  5: 'آدرس دقیق محل برگزاری را وارد کنید',
  6: 'تاریخ و ساعت دقیق را تعیین کنید',
};

// ============================================
// 3. HOOK
// ============================================

export function useBookingForm() {
  const { toast } = useToast();

  const form = useForm<IBookingFormData>({
    resolver: yupResolver(bookingSchema) as any,
    mode: 'onChange',
    defaultValues: {
      eventType: '',
      category: '',
      subcategory: '',
      ageRanges: [],
      numberOfGuests: 50,
      city: '',
      district: '',
      address: '',
      eventDate: '',
      startTime: '',
      endTime: '',
      notes: '',
    },
  });

  const validateStep = async (step: number): Promise<boolean> => {
    const fieldsToValidate = STEP_FIELDS[step] || [];
    const result = await form.trigger(fieldsToValidate as any);

    if (!result) {
      const errors = form.formState.errors;
      const firstErrorField = fieldsToValidate.find((field) => errors[field]);
      if (firstErrorField) {
        toast({
          title: 'خطا',
          description: errors[firstErrorField]?.message || 'لطفاً فیلدهای مورد نیاز را تکمیل کنید',
          variant: 'destructive',
        });
      }
    }

    return result;
  };

  const submitForm = async (): Promise<void> => {
    const isValid = await form.trigger();
    if (isValid) {
      const data = form.getValues();

      // Save to localStorage
      try {
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        const newBooking = {
          id: Date.now(),
          ...data,
          createdAt: new Date().toISOString(),
        };
        bookings.push(newBooking);
        localStorage.setItem('bookings', JSON.stringify(bookings));

        toast({
          title: '✅ رزرو با موفقیت ثبت شد!',
          description: 'درخواست شما ثبت شد و به زودی با شما تماس خواهیم گرفت.',
        });

        // Reset form after 2 seconds
        setTimeout(() => {
          form.reset();
          window.location.href = '/';
        }, 2000);
      } catch (error) {
        toast({
          title: 'خطا',
          description: 'مشکلی در ثبت رزرو رخ داد. لطفاً دوباره تلاش کنید.',
          variant: 'destructive',
        });
      }
    }
  };

  return {
    form,
    validateStep,
    submitForm,
    STEP_TITLES,
    STEP_SUBTITLES,
    TOTAL_STEPS: 6,
    setValue: form.setValue,
  };
}