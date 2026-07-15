'use client';

import React, { memo } from 'react';
import { cn } from '../../../shared/lib/cn';
import { IEditableFieldProps } from '../types/profile.types';

const EditableField: React.FC<IEditableFieldProps> = ({
  label,
  value,
  field,
  mode,
  onChange,
  type = 'text',
  placeholder = '',
}) => {
  const isEdit = mode === 'edit';

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-slate-500">{label}</label>

      {isEdit ? (
        type === 'textarea' ? (
          <textarea
            value={value}
            onChange={(e) => onChange?.(field, e.target.value)}
            placeholder={placeholder}
            className="w-full px-3 py-2 bg-blue-50/50 border-2 border-blue-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2745d1]/30 focus:border-[#2745d1] transition-all resize-none"
            rows={3}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange?.(field, e.target.value)}
            placeholder={placeholder}
            className={cn(
              'w-full px-3 py-2 bg-blue-50/50 border-2 border-blue-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2745d1]/30 focus:border-[#2745d1] transition-all',
              type === 'tel' && 'font-mono'
            )}
            dir={type === 'tel' || type === 'email' ? 'ltr' : 'rtl'}
          />
        )
      ) : (
        <p className="text-sm text-slate-700">{value || '—'}</p>
      )}
    </div>
  );
};

export default memo(EditableField);