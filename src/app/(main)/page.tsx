// src/app/page.tsx
import HeroShowcase from '../../features/landing/components/HeroShowcase';
import { PromotionalBanner } from '../../features/promotional';
import { ArtistCategories } from '../../features/artist-categories-home';
import { ArtistsGrid } from '../../features/artists-grid';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroShowcase />
      <PromotionalBanner />
      <ArtistsGrid />
      <ArtistCategories />
    </main>
  );
}