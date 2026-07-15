'use client';

import React, { memo, useState } from 'react';
import { Plus, X } from 'lucide-react';
import { IProfileBioProps } from '../types/profile.types';

const ProfileBio: React.FC<IProfileBioProps> = ({ user, mode, onChange }) => {
  const isEdit = mode === 'edit';
  const isArtist = user.role === 'artist';
  const items = isArtist ? user.specialties : user.industries;
  const label = isArtist ? 'تخصص‌ها' : 'حوزه‌های همکاری';
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim()) {
      const field = isArtist ? 'specialties' : 'industries';
      const currentItems = isArtist ? user.specialties || [] : user.industries || [];
      onChange?.(field, [...currentItems, newItem.trim()]);
      setNewItem('');
    }
  };

  const handleRemoveItem = (index: number) => {
    const field = isArtist ? 'specialties' : 'industries';
    const currentItems = isArtist ? user.specialties || [] : user.industries || [];
    const newItems = currentItems.filter((_, i) => i !== index);
    onChange?.(field, newItems);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full">
      <h2 className="text-lg font-bold text-slate-900 mb-3">درباره من</h2>

      {isEdit ? (
        <textarea
          value={user.bio}
          onChange={(e) => onChange?.('bio', e.target.value)}
          className="w-full px-3 py-2 bg-blue-50/50 border-2 border-blue-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2745d1]/30 focus:border-[#2745d1] transition-all resize-none"
          rows={4}
          placeholder="درباره خودت بنویس..."
        />
      ) : (
        <p className="text-slate-600 leading-relaxed text-sm">{user.bio}</p>
      )}

      <div className="mt-5">
        <h3 className="text-sm font-bold text-slate-700 mb-2.5">{label}</h3>

        {isEdit ? (
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {items?.map((item, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-[#2745d1] rounded-full text-xs font-medium border border-blue-100"
                >
                  {item}
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="hover:text-red-500 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="افزودن جدید..."
                className="flex-1 px-3 py-1.5 bg-blue-50/50 border-2 border-blue-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2745d1]/30 focus:border-[#2745d1] transition-all"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddItem();
                  }
                }}
              />
              <button
                onClick={handleAddItem}
                className="px-3 py-1.5 bg-[#2745d1] text-white rounded-lg text-sm font-medium hover:bg-[#1a34b0] transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {items?.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-blue-50 text-[#2745d1] rounded-full text-xs font-medium border border-blue-100"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(ProfileBio);