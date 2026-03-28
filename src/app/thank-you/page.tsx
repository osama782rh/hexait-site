import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Merci pour votre demande — HEXAIT',
  description:
    'Votre demande a bien ete recue. Notre equipe vous recontactera sous 24 a 48h.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-16">
      {/* Subtle radial glow behind content */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(600px circle at 50% 40%, var(--accent-glow) 0%, transparent 70%)',
        }}
      />

      <div className="relative text-center max-w-lg mx-auto animate-fade-in">
        {/* Success icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)]">
          <CheckCircle
            size={32}
            className="text-[var(--accent-light)]"
            aria-hidden="true"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold">
          Merci pour votre <span className="text-gradient">demande</span>
        </h1>

        <p className="mt-4 text-lg text-[var(--text-secondary)]">
          Nous avons bien recu votre message. Notre equipe vous recontactera
          sous 24 a 48h.
        </p>

        <p className="mt-3 text-sm text-[var(--text-tertiary)]">
          En attendant, vous pouvez consulter nos services ou nous contacter
          directement.
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <Link href="/" className="btn-cta">
            Retour a l&apos;accueil
          </Link>
          <Link href="/services" className="btn-ghost">
            Voir nos services
          </Link>
        </div>
      </div>

      {/* Google Ads conversion tracking:
       *
       * This page URL (https://www.hexait.fr/thank-you) should be used
       * as the conversion page in Google Ads.
       *
       * Option 1 — URL-based conversion:
       *   In Google Ads, create a conversion action with
       *   "Page load" as the counting method and set the URL
       *   rule to: URL equals https://www.hexait.fr/thank-you
       *
       * Option 2 — gtag event (if using Google Tag Manager):
       *   Add a <Script> tag here or fire gtag('event', 'conversion', { ... })
       *   from a client component after mount.
       */}
    </main>
  );
}
