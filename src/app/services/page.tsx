import type { Metadata } from 'next';
import Services from '@/views/Services';

export const metadata: Metadata = {
  title: 'Services de développement web & logiciel sur mesure — HEXAIT',
  description:
    'Applications web, SaaS, APIs, cloud et audit technique. HEXAIT développe vos outils métier sur mesure avec React, Next.js, Node.js et Python. Devis gratuit.',
  alternates: { canonical: '/services' },
};

export default function Page() {
  return <Services />;
}
