// src/app/page.tsx
import HeroShowcase from '../features/landing/components/HeroShowcase';
import { PromotionalBanner } from '../features/promotional';
import { ArtistCategories } from '../features/artist-categories-home';
export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroShowcase />
      <PromotionalBanner />
      <ArtistCategories />
    </main>
  );
}