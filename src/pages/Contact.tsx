// apps/web/src/pages/Contact.tsx
import Section from "../components/Section";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Clock, ShieldCheck, Upload } from "lucide-react";
import { useState } from "react";

/** ==== Schéma Zod (corrigé) ==== */
const Schema = z.object({
  // Identité
  name: z.string().min(2, "Nom trop court"),
  company: z.string().min(2, "Société trop courte").optional().or(z.literal("")),
  email: z.string().email("Email invalide"),
  phone: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine(
      (v) => !v || /^[+0-9()\s.-]{7,}$/.test(v),
      "Téléphone invalide"
    ),
  website: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine((v) => !v || /^https?:\/\/.+/i.test(v), "URL invalide (https://)"),

  // Projet - CORRIGÉ : utilisation de z.enum avec la syntaxe correcte
    projectType: z.enum(["Nouveau produit", "Refonte", "Feature/Module", "Audit/Conseil", "Autre"] as const, "Choisis un type de projet"),
    
    services: z
      .array(
        z.enum(["UX/UI", "Front-end", "Back-end", "Cloud/DevOps", "Sécurité", "Data/Analytics"] as const)
      )
      .min(1, "Sélectionne au moins un service"),
    
    // CORRIGÉ : budget avec syntaxe valide
    budget: z.enum(["<5k€", "5–15k€", "15–40k€", "40–80k€", "80k€+"] as const, "Sélectionne un budget"),
    
    // CORRIGÉ : timeline avec syntaxe valide
    timeline: z.enum(["ASAP (<1 mois)", "1–2 mois", "2–3 mois", "3+ mois"] as const, "Sélectionne un délai"),

  // Message & pièces jointes
  message: z.string().min(20, "Explique-nous un peu plus ton besoin (min 20 caractères)"),
  files: z.any().optional(), // géré côté serveur

  // Légal / anti-spam - CORRIGÉ : z.literal avec validation booléenne
  consent: z.boolean().refine((val) => val === true, {
    message: "Tu dois accepter la politique de confidentialité"
  }),
  
  // honeypot (doit rester vide)
  company_website: z.string().max(0, "Spam détecté"),
});

type FormData = z.infer<typeof Schema>;

export default function Contact() {
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
    defaultValues: {
      services: [],
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    // TODO: envoie vers ton API / serverless function / email service
    // Ex: await fetch("/api/contact", { method: "POST", body: formData });
    console.log("Contact form payload:", data);
    setSubmittedData(data);
    // reset(); // décommente si tu veux vider après envoi
  };

  const selectedServices = watch("services", []);

  return (
    <Section>
      <div className="container grid md:grid-cols-3 gap-8">
        {/* ===== Colonne gauche : Formulaire ===== */}
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-extrabold">Parlons de votre projet</h1>
          <p className="text-slate-300 mt-2">
            Remplissez ce formulaire : on revient vers vous sous 24h ouvrées.
          </p>

          {isSubmitSuccessful ? (
            <div className="card mt-6 p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-cyan-300 mt-1" />
                <div>
                  <h2 className="font-bold text-xl">Merci ! Votre demande a bien été envoyée.</h2>
                  <p className="text-slate-300 mt-1">
                    Nous vous répondrons rapidement avec les prochaines étapes.
                  </p>
                  {submittedData && (
                    <ul className="mt-3 text-sm text-slate-400">
                      <li><span className="text-slate-300">Projet :</span> {submittedData.projectType}</li>
                      <li><span className="text-slate-300">Services :</span> {submittedData.services.join(", ")}</li>
                      <li><span className="text-slate-300">Budget :</span> {submittedData.budget}</li>
                      <li><span className="text-slate-300">Délai :</span> {submittedData.timeline}</li>
                    </ul>
                  )}
                  <button 
                    className="btn-ghost mt-4" 
                    onClick={() => { 
                      setSubmittedData(null); 
                      reset(); 
                    }}
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
              {/* Identité */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-300">Nom complet *</label>
                  <input {...register("name")} placeholder="Jean Dupont" className="field mt-1" />
                  {errors.name && <p className="error mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="text-sm text-slate-300">Société</label>
                  <input {...register("company")} placeholder="Votre société" className="field mt-1" />
                  {errors.company && <p className="error mt-1">{errors.company.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-300">Email *</label>
                  <input {...register("email")} placeholder="vous@domaine.com" className="field mt-1" />
                  {errors.email && <p className="error mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="text-sm text-slate-300">Téléphone</label>
                  <input {...register("phone")} placeholder="+33 6 ..." className="field mt-1" />
                  {errors.phone && <p className="error mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-300">Site web</label>
                <input {...register("website")} placeholder="https://…" className="field mt-1" />
                {errors.website && <p className="error mt-1">{errors.website.message}</p>}
              </div>

              {/* Projet */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-300">Type de projet *</label>
                  <select {...register("projectType")} className="field mt-1">
                    <option value="">— Sélectionner —</option>
                    <option value="Nouveau produit">Nouveau produit</option>
                    <option value="Refonte">Refonte</option>
                    <option value="Feature/Module">Feature/Module</option>
                    <option value="Audit/Conseil">Audit/Conseil</option>
                    <option value="Autre">Autre</option>
                  </select>
                  {errors.projectType && <p className="error mt-1">{errors.projectType.message}</p>}
                </div>

                <div>
                  <label className="text-sm text-slate-300">Budget cible *</label>
                  <select {...register("budget")} className="field mt-1">
                    <option value="">— Sélectionner —</option>
                    <option value="<5k€">{`<5k€`}</option>
                    <option value="5–15k€">5–15k€</option>
                    <option value="15–40k€">15–40k€</option>
                    <option value="40–80k€">40–80k€</option>
                    <option value="80k€+">80k€+</option>
                  </select>
                  {errors.budget && <p className="error mt-1">{errors.budget.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-300">Délai souhaité *</label>
                  <select {...register("timeline")} className="field mt-1">
                    <option value="">— Sélectionner —</option>
                    <option value="ASAP (<1 mois)">ASAP (&lt;1 mois)</option>
                    <option value="1–2 mois">1–2 mois</option>
                    <option value="2–3 mois">2–3 mois</option>
                    <option value="3+ mois">3+ mois</option>
                  </select>
                  {errors.timeline && <p className="error mt-1">{errors.timeline.message}</p>}
                </div>

                <div>
                  <label className="text-sm text-slate-300">Services attendus *</label>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {["UX/UI", "Front-end", "Back-end", "Cloud/DevOps", "Sécurité", "Data/Analytics"].map((s) => (
                      <label key={s} className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 ring-1 ring-white/10 rounded-lg px-3 py-2 transition-all duration-200 cursor-pointer hover:bg-white/10 hover:ring-cyan-400/30">
                        <input
                          type="checkbox"
                          value={s}
                          {...register("services")}
                          className="accent-cyan-400"
                        />
                        {s}
                      </label>
                    ))}
                  </div>
                  {errors.services && <p className="error mt-1">{errors.services.message}</p>}
                  {!!selectedServices.length && (
                    <p className="text-xs text-slate-400 mt-1">
                      Sélection : {selectedServices.join(", ")}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-300">Description *</label>
                <textarea
                  {...register("message")}
                  placeholder="Contexte, objectifs, contraintes, KPIs…"
                  className="field mt-1 h-40"
                />
                {errors.message && <p className="error mt-1">{errors.message.message}</p>}
              </div>

              <div>
                <label className="text-sm text-slate-300">Pièces jointes (optionnel)</label>
                <div className="relative">
                  <input 
                    type="file" 
                    multiple 
                    className="field mt-1 w-full cursor-pointer" 
                    {...register("files")} 
                  />
                  <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                </div>
                <p className="text-xs text-slate-500 mt-1">Formats acceptés côté serveur (à configurer) : PDF, PNG, JPG, ZIP…</p>
              </div>

              {/* Consentement + honeypot */}
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  {...register("consent")} 
                  className="mt-1 accent-cyan-400" 
                />
                <p className="text-sm text-slate-300">
                  J'accepte la <a href="/confidentialite" className="underline">politique de confidentialité</a> et le traitement de mes données.
                </p>
              </div>
              {errors.consent && <p className="error -mt-2">{errors.consent.message}</p>}
              
              {/* Honeypot masqué */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                placeholder="Ne pas remplir"
                {...register("company_website")}
              />

              <div className="flex items-center gap-3">
                <button disabled={isSubmitting} className="btn-cta">
                  {isSubmitting ? "Envoi…" : "Envoyer"}
                </button>
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => reset()}
                  disabled={isSubmitting}
                >
                  Réinitialiser
                </button>
              </div>
            </form>
          )}
        </div>

        {/* ===== Colonne droite : Infos / FAQ ===== */}
        <aside className="space-y-4">
          <div className="card p-5">
            <h3 className="font-bold text-lg">Nos coordonnées</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><Mail size={16} /> contact@hexait.fr</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +33 7 65 66 82 82</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> Tigery, France</li>
              <li className="flex items-center gap-2"><Clock size={16} /> Lun–Ven • 9h–18h (CET)</li>
            </ul>
          </div>

          <div className="card p-5">
            <h3 className="font-bold text-lg">Questions fréquentes</h3>
            <details className="mt-2">
              <summary className="cursor-pointer">Délais pour un premier retour ?</summary>
              <p className="text-slate-300 mt-1">Sous 24h ouvrées, avec un créneau d'appel proposé.</p>
            </details>
            <details className="mt-2">
              <summary className="cursor-pointer">Faites-vous des NDA ?</summary>
              <p className="text-slate-300 mt-1">Oui, NDA standard possible avant partage d'informations sensibles.</p>
            </details>
            <details className="mt-2">
              <summary className="cursor-pointer">Accompagnez-vous après la mise en prod ?</summary>
              <p className="text-slate-300 mt-1">Oui : TMA, support, SLA et astreintes selon vos besoins.</p>
            </details>
          </div>

          <div className="card p-5">
            <h3 className="font-bold text-lg">RGPD & sécurité</h3>
            <p className="text-slate-300 mt-1">
              Données traitées uniquement pour répondre à votre demande. Vous pouvez exercer vos droits à tout moment.
            </p>
            <p className="text-sm text-slate-400 mt-2">
              Voir notre <a href="/confidentialite" className="underline">Politique de confidentialité</a>.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}