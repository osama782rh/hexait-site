'use client';

import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function InlineForm() {
  const router = useRouter();
  const [sending, setSending] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch { /* noop */ }
    router.push('/thank-you');
  }, [router]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="card p-8 md:p-10 max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Parlons de <span className="text-gradient">votre projet</span>
          </h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            Cadrage technique offert. Retour sous 48h.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="inline-name" className="text-sm" style={{ color: 'var(--text-secondary)' }}>Nom *</label>
              <input id="inline-name" name="name" required placeholder="Jean Dupont" className="field mt-1" />
            </div>
            <div>
              <label htmlFor="inline-email" className="text-sm" style={{ color: 'var(--text-secondary)' }}>Email *</label>
              <input id="inline-email" name="email" type="email" required placeholder="vous@domaine.com" className="field mt-1" />
            </div>
          </div>
          <div>
            <label htmlFor="inline-message" className="text-sm" style={{ color: 'var(--text-secondary)' }}>Décrivez votre besoin *</label>
            <textarea
              id="inline-message" name="message" required rows={3}
              placeholder="Ex: J'ai besoin d'une application pour gérer les devis de mon équipe..."
              className="field mt-1"
            />
          </div>
          <button type="submit" disabled={sending} className="btn-cta w-full justify-center gap-2 text-base">
            {sending ? 'Envoi...' : (<>Envoyer <Send size={16} /></>)}
          </button>
          <div className="flex items-center justify-center gap-4 text-xs" style={{ color: 'var(--text-tertiary)' }}>
            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-400" /> Réponse sous 48h</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-400" /> Cadrage offert</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-400" /> Sans engagement</span>
          </div>
        </form>
      </div>
    </section>
  );
}
