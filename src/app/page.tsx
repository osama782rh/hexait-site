import type { Metadata } from 'next';
import Home from '@/views/Home';

export const metadata: Metadata = {
  title: 'HEXAIT — Agence web Paris | Développement d\'applications web & SaaS sur mesure',
  description:
    "HEXAIT, agence web à Paris : développement d'applications web, SaaS et outils métier sur mesure pour PME et startups. Création de logiciels, APIs, cloud et DevOps. Premier prototype en 7 jours.",
  alternates: { canonical: '/' },
};

export default function Page() {
  return <Home />;
}
