// src/features/booking/types/booking.types.ts
import { LucideIcon } from 'lucide-react';

// ============================================
// 1. EVENT TYPE
// ============================================

export interface IEventType {
  value: string;
  label: string;
  icon: string;
  description: string;
}

// ============================================
// 2. ARTIST CATEGORY
// ============================================

export interface ISubcategory {
  value: string;
  label: string;
}

export interface IArtistCategory {
  value: string;
  label: string;
  subcategories: ISubcategory[];
}

// ============================================
// 3. AGE RANGE
// ============================================

export interface IAgeRange {
  value: string;
  label: string;
  range: string;
  icon: string;
}

// ============================================
// 4. CITY & DISTRICT
// ============================================

export interface ICity {
  value: string;
  label: string;
}

export interface IDistricts {
  [key: string]: string[];
}

// ============================================
// 5. FORM DATA
// ============================================

export interface IBookingFormData {
  eventType: string;
  category: string;
  subcategory: string;
  ageRanges: string[];
  numberOfGuests: number;
  city: string;
  district: string;
  address: string;
  eventDate: string;
  startTime: string;
  endTime?: string; // ✅ optional
  notes?: string; // ✅ optional
}

// ============================================
// 6. STEP CONFIG
// ============================================

export interface IStepConfig {
  title: string;
  subtitle: string;
  fields: string[];
}

// ============================================
// 7. COMPONENT PROPS
// ============================================

export interface IProgressBarProps {
  progress: number;
  currentStep: number;
  totalSteps: number;
}

export interface IStepProps {
  onNext?: () => void;
  onPrevious?: () => void;
}