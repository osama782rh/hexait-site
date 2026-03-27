import type { Metadata } from 'next';
import Projects from '@/views/Projects';

export const metadata: Metadata = {
  title: 'Nos réalisations — Applications web & SaaS développées par HEXAIT',
  description:
    'Découvrez les applications web et SaaS développées par HEXAIT : Welyx, Oview, StratGen. Plateformes en production, utilisées par de vrais utilisateurs.',
  alternates: { canonical: '/projets' },
};

export default function Page() {
  return <Projects />;
}
