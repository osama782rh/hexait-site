import type { Metadata } from 'next';
import Contact from '@/views/Contact';

export const metadata: Metadata = {
  title: 'Contact — Discutez de votre projet web avec HEXAIT',
  description:
    'Contactez HEXAIT pour votre projet de développement web ou SaaS. Cadrage technique offert, proposition sous 48h, interlocuteur senior dédié. Paris, France.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return <Contact />;
}
