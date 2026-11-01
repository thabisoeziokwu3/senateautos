import { Unbounded, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/site';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Curtain from '@/components/Curtain';
import Spot from '@/components/Spot';
import { WhatsApp } from '@/components/Bits';

const head = Unbounded({ subsets: ['latin'], variable: '--font-head', display: 'swap', weight: ['300', '500'] });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });
const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Senate Autos | Car Sourcing & Car Broker in Abuja, Nigeria', template: '%s | Senate Autos' },
  description: 'Senate Autos is a verified-dealership car broker in Abuja, Nigeria. We source brand new, Nigerian used, tokunbo and luxury cars, plus car rentals and automotive content creation.',
  keywords: ['car dealership Abuja', 'car broker Nigeria', 'car sourcing Nigeria', 'buy tokunbo cars Abuja', 'luxury cars Abuja', 'exotic cars Nigeria', 'car rentals Abuja', 'Nigerian used cars', 'brand new cars Nigeria', 'automotive content creator Nigeria', 'Senate Autos'],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: SITE.name, locale: 'en_NG', url: '/', title: 'Senate Autos | Car Sourcing & Car Broker in Abuja', description: 'Verified dealerships. Premium vehicles. Sourced for you across Nigeria.', images: [{ url: '/images/flyer.jpeg', width: 900, height: 1350, alt: 'Senate Autos luxury car brokerage' }] },
  twitter: { card: 'summary_large_image', title: 'Senate Autos | Car Broker in Abuja', images: ['/images/flyer.jpeg'] },
  robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large', 'max-snippet': -1 } },
  icons: { icon: '/logo.jpeg', apple: '/logo.jpeg' },
};

export const viewport = { themeColor: '#030304', width: 'device-width', initialScale: 1 };

const ld = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': ['AutomotiveBusiness', 'LocalBusiness'], '@id': `${SITE.url}/#business`, name: SITE.name, url: SITE.url, logo: `${SITE.url}/logo.jpeg`, image: `${SITE.url}/images/flyer.jpeg`, email: SITE.email, telephone: SITE.phone, slogan: SITE.tagline,
      description: 'Car broker sourcing new, Nigerian used, foreign used and luxury vehicles through verified dealerships across Nigeria, mainly Abuja.',
      address: { '@type': 'PostalAddress', addressLocality: 'Abuja', addressCountry: 'NG' }, areaServed: [{ '@type': 'City', name: 'Abuja' }, { '@type': 'Country', name: 'Nigeria' }], sameAs: [`https://www.snapchat.com/add/${SITE.snapchat}`] },
    { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { '@id': `${SITE.url}/#business` } },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-NG" suppressHydrationWarning className={`${head.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <script dangerouslySetInnerHTML={{ __html: "try{if(!sessionStorage.getItem('sa'))document.documentElement.dataset.intro='1'}catch(e){}" }} />
        <a className="skipnav" href="#main">Skip to content</a>
        <Curtain /><Spot /><Nav />{children}<Footer /><WhatsApp />
      </body>
    </html>
  );
}
