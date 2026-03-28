'use client';
import Section from "@/components/Section";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { useState } from "react";

const Schema = z.object({
  name: z.string().min(2, "Nom trop court"),
  company: z.string().optional().or(z.literal("")),
  email: z.string().email("Email invalide"),
  phone: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine(
      (v) => !v || /^[+0-9()\s.-]{7,}$/.test(v),
      "Téléphone invalide"
    ),
  projectType: z.enum(
    ["Nouveau produit", "Refonte", "Feature/Module", "Audit/Conseil", "Autre"] as const,
    { message: "Veuillez sélectionner un type de projet" }
  ),
  message: z.string().min(20, "Veuillez décrire votre besoin plus en détail (min. 20 caractères)"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Veuillez accepter la politique de confidentialité"
  }),
  // honeypot
  company_website: z.string().max(0, "Spam détecté"),
});

type FormData = z.infer<typeof Schema>;

export default function Contact() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
    defaultValues: {
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    const payload = { ...data };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Échec de soumission (${response.status})`);
      }

      router.push('/thank-you');
    } catch {
      setSubmitError(
        "Une erreur est survenue lors de l'envoi. Vous pouvez nous joindre directement à contact@hexait.fr."
      );
    }
  };

  return (
    <Section>
      <div className="container grid md:grid-cols-3 gap-8">
        {/* Formulaire */}
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-extrabold">Décrivez votre besoin</h1>
          <p className="text-[var(--text-secondary)] mt-2">
            Nous analysons votre demande et revenons avec un cadrage technique sous 48h ouvrées.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
            {submitError && (
              <div className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {submitError}
              </div>
            )}

            {/* Identité */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-[var(--text-secondary)]">Nom complet *</label>
                <input {...register("name")} placeholder="Jean Dupont" className="field mt-1" />
                {errors.name && <p className="error mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-sm text-[var(--text-secondary)]">Société</label>
                <input {...register("company")} placeholder="Votre société" className="field mt-1" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-[var(--text-secondary)]">Email *</label>
                <input {...register("email")} placeholder="vous@domaine.com" className="field mt-1" />
                {errors.email && <p className="error mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="text-sm text-[var(--text-secondary)]">Téléphone</label>
                <input {...register("phone")} placeholder="+33 6 ..." className="field mt-1" />
                {errors.phone && <p className="error mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            {/* Projet */}
            <div>
              <label className="text-sm text-[var(--text-secondary)]">Type de projet *</label>
              <select {...register("projectType")} className="field mt-1">
                <option value="">— Sélectionner —</option>
                <option value="Nouveau produit">Nouveau produit</option>
                <option value="Refonte">Refonte</option>
                <option value="Feature/Module">Feature / Module</option>
                <option value="Audit/Conseil">Audit / Conseil</option>
                <option value="Autre">Autre</option>
              </select>
              {errors.projectType && <p className="error mt-1">{errors.projectType.message}</p>}
            </div>

            <div>
              <label className="text-sm text-[var(--text-secondary)]">Décrivez votre besoin *</label>
              <textarea
                {...register("message")}
                placeholder="Contexte, objectifs, contraintes..."
                className="field mt-1 h-32"
              />
              {errors.message && <p className="error mt-1">{errors.message.message}</p>}
            </div>

            {/* Consentement + honeypot */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                {...register("consent")}
                className="mt-1 accent-cyan-400"
              />
              <p className="text-sm text-[var(--text-secondary)]">
                J'accepte la <Link href="/politique-confidentialite" className="underline">politique de confidentialité</Link> et le traitement de mes données.
              </p>
            </div>
            {errors.consent && <p className="error -mt-2">{errors.consent.message}</p>}

            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              placeholder="Ne pas remplir"
              {...register("company_website")}
            />

            <button disabled={isSubmitting} className="btn-cta">
              {isSubmitting ? "Envoi…" : "Envoyer"}
            </button>
          </form>
        </div>

        {/* Colonne droite */}
        <aside className="space-y-4">
          <div className="card p-5">
            <h3 className="font-bold text-lg">Nos coordonnées</h3>
            <ul className="mt-3 space-y-2 text-[var(--text-secondary)]">
              <li className="flex items-center gap-2"><Mail size={16} /> contact@hexait.fr</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +33 1 84 18 02 05</li>
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 flex-shrink-0" /> 6 rue d'Armaillé, 75017 Paris</li>
              <li className="flex items-center gap-2"><Clock size={16} /> Lun–Ven • 9h–18h (CET)</li>
            </ul>
          </div>

          <div className="card p-5">
            <h3 className="font-bold text-lg">Questions fréquentes</h3>
            <details className="mt-2">
              <summary className="cursor-pointer">Délais pour un premier retour ?</summary>
              <p className="text-[var(--text-secondary)] mt-1">Sous 24h ouvrées, avec un créneau d'appel proposé.</p>
            </details>
            <details className="mt-2">
              <summary className="cursor-pointer">Faites-vous des NDA ?</summary>
              <p className="text-[var(--text-secondary)] mt-1">Oui, NDA standard possible avant partage d'informations sensibles.</p>
            </details>
            <details className="mt-2">
              <summary className="cursor-pointer">Accompagnez-vous après la mise en prod ?</summary>
              <p className="text-[var(--text-secondary)] mt-1">Oui : TMA, support, SLA et astreintes selon vos besoins.</p>
            </details>
          </div>

          <div className="card p-5">
            <h3 className="font-bold text-lg">RGPD & sécurité</h3>
            <p className="text-[var(--text-secondary)] mt-1">
              Données traitées uniquement pour répondre à votre demande. Vous pouvez exercer vos droits à tout moment.
            </p>
            <p className="text-sm text-[var(--text-tertiary)] mt-2">
              Voir notre <Link href="/politique-confidentialite" className="underline">Politique de confidentialité</Link>.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
