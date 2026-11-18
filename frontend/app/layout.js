import './globals.css';
import Providers from '@/components/Providers';
import { personalInfo } from '@/data/portfolio';

const siteUrl = 'https://vikasgupta37.github.io/Portfolio/';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: `${personalInfo.name} — ${personalInfo.shortTitle}`,
  description: personalInfo.headline,
  applicationName: `${personalInfo.name} Portfolio`,
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: `${personalInfo.name} — ${personalInfo.shortTitle}`,
    description: personalInfo.headline,
    siteName: `${personalInfo.name} Portfolio`,
  },
  twitter: {
    card: 'summary',
    title: `${personalInfo.name} — ${personalInfo.shortTitle}`,
    description: personalInfo.headline,
  },
  alternates: { canonical: siteUrl },
};

export const viewport = {
  themeColor: '#080b12',
  colorScheme: 'dark light',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
