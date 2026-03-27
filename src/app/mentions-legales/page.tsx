import type { Metadata } from 'next';
import Legal from '@/views/Legal';

export const metadata: Metadata = {
  title: 'Mentions légales — HEXAIT SASU',
  description: 'Mentions légales de HEXAIT SASU — informations juridiques, éditeur, hébergement.',
  alternates: { canonical: '/mentions-legales' },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <Legal />;
}
