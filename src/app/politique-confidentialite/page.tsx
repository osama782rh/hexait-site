import type { Metadata } from 'next';
import Confidentialite from '@/views/Confidentialite';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — HEXAIT',
  description: 'Politique de confidentialité et protection des données personnelles — HEXAIT SASU.',
  alternates: { canonical: '/politique-confidentialite' },
};

export default function Page() {
  return <Confidentialite />;
}
