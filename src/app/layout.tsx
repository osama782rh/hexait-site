import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import CardSpotlight from '@/components/CardSpotlight';
import './globals.css';

const SITE_URL = 'https://www.hexait.fr';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'HEXAIT — Agence web & développement logiciel sur mesure à Paris',
    template: '%s | HEXAIT — Studio d\'ingénierie logicielle',
  },
  description:
    "HEXAIT, agence web à Paris spécialisée en développement d'applications web, SaaS et outils métier sur mesure. Création de sites web, développement logiciel, cloud et DevOps pour PME et startups.",
  keywords: [
    'HEXAIT',
    'hexait',
    'hexait.fr',
    'agence web Paris',
    'agence web',
    'développement web Paris',
    'développeur web Paris',
    'création site web Paris',
    'création application web',
    'développement logiciel sur mesure',
    'studio tech Paris',
    'développement SaaS',
    'SaaS sur mesure',
    'application web sur mesure',
    'outil métier sur mesure',
    'développeur freelance Paris',
    'agence développement web',
    'prestataire informatique Paris',
    'société développement web',
    'développement application métier',
    'automatisation process',
    'plateforme web sur mesure',
    'création logiciel',
    'développeur React Paris',
    'développeur Next.js',
    'développeur Node.js Paris',
    'développeur full stack Paris',
    'ingénierie logicielle Paris',
    'audit technique',
    'consulting technique',
    'cloud DevOps',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
  ],
  authors: [{ name: 'HEXAIT', url: SITE_URL }],
  creator: 'HEXAIT',
  publisher: 'HEXAIT',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'HEXAIT',
    title: 'HEXAIT — Agence web & développement logiciel sur mesure à Paris',
    description:
      "Agence web à Paris : développement d'applications web, SaaS, outils métier, APIs et cloud. Devis gratuit, premier prototype en 7 jours.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/images/branding/logo.png`,
        width: 512,
        height: 512,
        alt: 'HEXAIT — Agence web & développement logiciel à Paris',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEXAIT — Agence web & développement logiciel à Paris',
    description:
      "Applications web, SaaS et outils métier sur mesure. Studio d'ingénierie logicielle à Paris.",
    images: [`${SITE_URL}/images/branding/logo.png`],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: SITE_URL,
  },
  other: {
    'theme-color': '#06B6D4',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'HEXAIT',
  alternateName: ['HEXAIT.fr', 'Hexait', 'HexaIT'],
  url: SITE_URL,
  description: "Agence web à Paris — développement d'applications web, SaaS et outils métier sur mesure.",
  publisher: {
    '@type': 'Organization',
    name: 'HEXAIT',
    logo: `${SITE_URL}/images/branding/logo.png`,
  },
  inLanguage: 'fr-FR',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'HEXAIT',
  legalName: 'HEXAIT SASU',
  url: SITE_URL,
  logo: `${SITE_URL}/images/branding/logo.png`,
  image: `${SITE_URL}/images/branding/logo.png`,
  email: 'contact@hexait.fr',
  telephone: '+33184180205',
  foundingDate: '2025',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: '1-10' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: "6 rue d'Armaillé",
    postalCode: '75017',
    addressLocality: 'Paris',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  sameAs: [],
  knowsAbout: [
    'Développement web',
    'Applications SaaS',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'Cloud computing',
    'DevOps',
    'TypeScript',
    'PostgreSQL',
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: 'HEXAIT',
  description:
    "Société d'ingénierie logicielle spécialisée en développement web, SaaS, cloud et sécurité applicative.",
  url: SITE_URL,
  image: `${SITE_URL}/images/branding/logo.png`,
  telephone: '+33184180205',
  email: 'contact@hexait.fr',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: "6 rue d'Armaillé",
    postalCode: '75017',
    addressLocality: 'Paris',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.8783,
    longitude: 2.2919,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Ingénierie logicielle',
  provider: {
    '@type': 'Organization',
    name: 'HEXAIT',
    url: SITE_URL,
  },
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services HEXAIT',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Développement Web & SaaS',
          description:
            'Plateformes métier, back-offices et applications SaaS — React, Next.js, Node.js, Python',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cloud & DevOps',
          description:
            'Infrastructure Azure/AWS, CI/CD, conteneurisation Docker et monitoring en production',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sécurité Applicative',
          description:
            'Audits de code, protection OWASP, authentification robuste et chiffrement des données',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </head>
      <body className="min-h-dvh flex flex-col relative">
        {/* Atmospheric background layers */}
        <div className="bg-grid" aria-hidden="true" />
        <div className="bg-orb bg-orb-1" aria-hidden="true" />
        <div className="bg-orb bg-orb-2" aria-hidden="true" />
        <div className="bg-orb bg-orb-3" aria-hidden="true" />
        <div className="bg-noise" aria-hidden="true" />
        <div className="bg-beam" aria-hidden="true" />
        <CardSpotlight />

        <Navbar />
        <main className="flex-1 relative z-[1]">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
