// src/app/page.tsx
import HeroShowcase from '../features/landing/components/HeroShowcase';
import { PromotionalBanner } from '../features/promotional';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroShowcase />
      <PromotionalBanner />
    </main>
  );
}