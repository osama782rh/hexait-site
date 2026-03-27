import type { Metadata } from 'next';
import ConditionsGenerales from '@/views/ConditionsGenerales';

export const metadata: Metadata = {
  title: 'Conditions générales de vente — HEXAIT',
  description: 'Conditions générales de prestations de services informatiques — HEXAIT SASU.',
  alternates: { canonical: '/conditions-generales' },
};

export default function Page() {
  return <ConditionsGenerales />;
}
