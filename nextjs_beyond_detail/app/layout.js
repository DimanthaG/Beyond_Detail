import { DM_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.scss';
import { BUSINESS_INFO } from '@/constants/businessInfo';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-WNHK7NF9J5';

export const metadata = {
  metadataBase: new URL(BUSINESS_INFO.url),
  title: {
    default: 'Car Detailing Scarborough | Same-Day Service | Beyond Detail',
    template: '%s | Beyond Detail',
  },
  description:
    'Professional car detailing, ceramic coating, window tinting & paint correction in Scarborough & Toronto. (647) 689-6109 | beyonddetail.ca',
  keywords: [
    'car detailing scarborough',
    'ceramic coating scarborough',
    'window tinting scarborough',
    'auto detailing scarborough',
    'paint correction scarborough',
  ],
  authors: [{ name: 'Beyond Detail' }],
  openGraph: {
    siteName: 'Beyond Detail',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Beyond Detail - Professional Auto Detailing Scarborough',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.webp'],
  },
  verification: {
    google: 'LvLQT4_GoK6meJl5_dMLK9Xh0-1rMKBNrHUz',
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Scarborough',
    'geo.position': '43.7764;-79.2318',
    ICBM: '43.7764, -79.2318',
    address: '170 Finchdene Square unit 11, Scarborough, ON M1X 1B3, Canada',
    telephone: '+1 (647) 689-6109',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/hero-home.avif" type="image/avif" fetchPriority="high" />
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className={dmSans.variable}>
        <a
          href="#main-content"
          className="skip-to-content"
        >
          Skip to content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
