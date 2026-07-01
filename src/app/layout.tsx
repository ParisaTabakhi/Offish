// src/app/layout.tsx
import type { Metadata } from 'next';
// import { byekan } from '../shared/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'هنرمندان | مرجع تخصصی هنرمندان کشور',
  description: 'پلتفرم تخصصی خدمات رویداد و هنرمندان',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" >
      <body className="antialiased bg-[#fdfbf7]">{children}</body>
    </html>
  );
}