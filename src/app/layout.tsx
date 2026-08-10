import type { Metadata } from 'next';
import './globals.css';
import { QueryProvider } from '../shared/providers/QueryProvider';

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
    <html lang="fa" dir="rtl">
      <body className="antialiased bg-[#fdfbf7]">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}