import type { Metadata } from 'next';
import { Navbar } from '../../features/navigation';
import { Footer } from '../../features/footer';
import '../../shared/styles/animations.css';
import '../globals.css';

export const metadata: Metadata = {
  title: 'هنرمندان | مرجع تخصصی هنرمندان کشور',
  description: 'پلتفرم تخصصی خدمات رویداد و هنرمندان',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased bg-[#fdfbf7]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}