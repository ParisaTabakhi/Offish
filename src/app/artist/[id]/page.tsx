import ArtistProfilePage from '../../../features/artist-profile/components/ArtistProfilePage';

interface IArtistPageProps {
  params: {
    id: string;
  };
}

export default function ArtistPage({ params }: IArtistPageProps) {
  console.log('📄 صفحه هنرمند با id:', params.id);
  return <ArtistProfilePage artistId={params.id} />;
}