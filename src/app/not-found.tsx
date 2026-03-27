import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-8xl font-extrabold" style={{ color: 'var(--accent-border)' }}>404</p>
      <h1 className="mt-4 text-2xl font-bold text-white">Page introuvable</h1>
      <p className="mt-2 max-w-md" style={{ color: 'var(--text-tertiary)' }}>
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="btn-cta inline-flex items-center gap-2">
          <Home size={16} /> Retour à l&apos;accueil
        </Link>
        <Link href="/contact" className="btn-ghost inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Nous contacter
        </Link>
      </div>
    </div>
  );
}
