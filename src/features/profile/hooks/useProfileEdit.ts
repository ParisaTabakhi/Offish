'use client';

import { useState, useCallback } from 'react';
import { IUserProfile, EditMode } from '../types/profile.types';

type ProfileChanges = Partial<IUserProfile>;

export const useProfileEdit = (
  initialUser: IUserProfile,
  onSave?: (data: ProfileChanges) => void
) => {
  const [mode, setMode] = useState<EditMode>('view');
  const [editedUser, setEditedUser] = useState<IUserProfile>(initialUser);
  const [isSaving, setIsSaving] = useState(false);

  const handleEdit = useCallback(() => {
    setEditedUser(initialUser);
    setMode('edit');
  }, [initialUser]);

  const handleChange = useCallback((field: keyof IUserProfile, value: any) => {
    setEditedUser((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSave = useCallback(async () => {
    setIsSaving(true);
    try {
      const changes: ProfileChanges = {};
      
      (Object.keys(editedUser) as Array<keyof IUserProfile>).forEach((key) => {
        const editedValue = editedUser[key];
        const initialValue = initialUser[key];
        
        // مقایسه با JSON.stringify برای آرایه‌ها و اشیاء
        if (JSON.stringify(editedValue) !== JSON.stringify(initialValue)) {
          // استفاده از as any برای رفع خطای TypeScript
          (changes as any)[key] = editedValue;
        }
      });

      if (Object.keys(changes).length > 0) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        onSave?.(changes);
      }
      setMode('view');
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setIsSaving(false);
    }
  }, [editedUser, initialUser, onSave]);

  const handleCancel = useCallback(() => {
    setEditedUser(initialUser);
    setMode('view');
  }, [initialUser]);

  return {
    mode,
    editedUser,
    isSaving,
    handleEdit,
    handleChange,
    handleSave,
    handleCancel,
  };
};