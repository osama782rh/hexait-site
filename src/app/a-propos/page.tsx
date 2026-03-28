import type { Metadata } from 'next';
import About from '@/views/About';

export const metadata: Metadata = {
  title: "À propos de HEXAIT — Studio d'ingénierie logicielle",
  description:
    "HEXAIT, studio d'ingénierie logicielle. Développement web sur mesure, rigueur d'exécution et transparence totale. Code de qualité industrielle.",
  alternates: { canonical: '/a-propos' },
};

export default function Page() {
  return <About />;
}
