// src/app/artist/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import ArtistProfilePage from '../../../features/artist-profile/components/ArtistProfilePage';

export default function ArtistPage() {
  const params = useParams();
  const id = params?.id as string;

  if (!id) {
    return <div>در حال بارگذاری...</div>;
  }

  return <ArtistProfilePage artistId={id} />;
}