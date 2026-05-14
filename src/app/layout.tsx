import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://awetree.ca'),
  title: {
    default: 'Awetree - Operating Studio for Service and Technology Ventures',
    template: '%s - Awetree',
  },
  description:
    'Awetree develops and operates specialized service and technology ventures across mechanical systems, construction delivery, healthcare-adjacent facility support, public-sector work, and applied AI.',
  keywords:
    'Awetree, operating studio, public sector bids, mechanical systems, construction delivery, healthcare facilities, applied AI, venture studio',
  openGraph: {
    title: 'Awetree - Operating Studio for Service and Technology Ventures',
    description:
      'A parent operating company for specialized service and technology ventures built for practical execution.',
    url: 'https://awetree.ca',
    siteName: 'Awetree',
    type: 'website',
  },
} satisfies Metadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
