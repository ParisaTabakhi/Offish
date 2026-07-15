'use client';

import React, { memo } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { IProfileContactProps } from '../types/profile.types';
import EditableField from './EditableField';

const ProfileContact: React.FC<IProfileContactProps> = ({ user, mode, onChange }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full">
      <h2 className="text-lg font-bold text-slate-900 mb-4">اطلاعات تماس</h2>

      <div className="space-y-4">
        <div className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
            <Mail className="w-4 h-4 text-[#2745d1]" />
          </div>
          <div className="flex-1">
            <EditableField
              label="ایمیل"
              value={user.email}
              field="email"
              mode={mode}
              onChange={onChange}
              type="email"
              placeholder="example@email.com"
            />
          </div>
        </div>

        <div className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
            <Phone className="w-4 h-4 text-[#2745d1]" />
          </div>
          <div className="flex-1">
            <EditableField
              label="شماره تماس"
              value={user.phone}
              field="phone"
              mode={mode}
              onChange={onChange}
              type="tel"
              placeholder="0912 345 6789"
            />
          </div>
        </div>

        <div className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-4 h-4 text-[#2745d1]" />
          </div>
          <div className="flex-1">
            <EditableField
              label="آدرس"
              value={`${user.city}، ${user.province}`}
              field="city"
              mode={mode}
              onChange={onChange}
              placeholder="شهر، استان"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProfileContact);