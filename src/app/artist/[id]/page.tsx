import ArtistProfilePage from '../../../features/artist-profile/components/ArtistProfilePage';

interface IArtistPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ArtistPage({ params }: IArtistPageProps) {
  const { id } = await params;
  console.log('📄 صفحه هنرمند با id:', id);
  return <ArtistProfilePage artistId={id} />;
}