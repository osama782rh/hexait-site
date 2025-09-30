// apps/web/src/pages/Services.tsx
import { Link } from "react-router-dom";
import Section from "../components/Section";
import {
  Palette, PenTool, LayoutDashboard, Code, Server, Cloud, GitBranch, Rocket,
  Shield, KeyRound, Lock, Database, Brain, Gauge, BarChart3, Workflow
} from "lucide-react";
import { useEffect } from "react";

/** Animations au scroll (zéro dépendance) */
function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-title");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) (e.target as HTMLElement).classList.add("show");
      });
    }, { threshold: 0.35 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Services() {
  useRevealOnScroll();

  return (
    <>
      {/* HERO Services */}
      <Section>
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="reveal">
            <span className="hero-badge">Nos expertises</span>
            <h1 className="hero-title mt-3">
              Construire des produits utiles, beaux et <span className="text-gradient">scalables</span>
            </h1>
            <p className="hero-sub mt-4">
              De l’idée au run : UX design, développement front/back, pipelines CI/CD,
              sécurité “by design” et performances mesurées.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-cta">Parler de votre projet</Link>
              <Link to="/projets" className="btn-ghost">Voir nos cas concrets</Link>
            </div>
          </div>

          {/* Visuel principal (services) */}
          <div className="card overflow-hidden reveal">
            <div className="aspect-video bg-white/5 ring-1 ring-white/10 rounded-xl overflow-hidden">
              <img src="/services.jpg" alt="Aperçu de nos services"
                   className="w-full h-full object-cover opacity-90" />
            </div>
          </div>
        </div>
      </Section>

      {/* UX Design */}
      <Section>
        <div className="container grid md:grid-cols-2 gap-8 items-start">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <Palette className="text-cyan-300" />
              <h2 className="text-2xl md:text-3xl font-extrabold">UX / UI Design</h2>
            </div>
            <p className="mt-3 text-slate-300">
              Comprendre l’utilisateur, prototyper vite, tester tôt. Nous livrons des interfaces
              sobres, accessibles et efficaces.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { icon: <PenTool />, title: "Ateliers & recherche", items: ["Personas", "Parcours", "Jobs-to-be-done"] },
                { icon: <LayoutDashboard />, title: "Wireframes & prototypes", items: ["Figma", "Design tokens", "UI Kit"] },
              ].map((b, i) => (
                <div key={i} className="card reveal">
                  <div className="text-cyan-300">{b.icon}</div>
                  <h3 className="mt-2 font-bold">{b.title}</h3>
                  <ul className="list-dash mt-2">{b.items.map(x => <li key={x}>{x}</li>)}</ul>
                </div>
              ))}
            </div>

            <details className="card mt-4">
              <summary className="cursor-pointer font-semibold">Livrables UX (exemple sprint 1)</summary>
              <ul className="list-dash mt-3">
                <li>Backlog priorisé & KPI UX</li>
                <li>Wireframes clés + prototype cliquable</li>
                <li>Design system initial (typographies, couleurs, composants)</li>
              </ul>
            </details>
          </div>

          <div className="space-y-4">
            <div className="card overflow-hidden reveal">
              <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10">
                <img src="/wireframes.jpg" alt="Wireframes & prototypes"
                     className="w-full h-full object-cover" />
              </div>
              <p className="text-sm text-slate-400 mt-2">Wireframes → prototype testable (Figma).</p>
            </div>
            <div className="card overflow-hidden reveal">
              <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10">
                <img src="/design_system.png" alt="Design system"
                     className="w-full h-full object-cover" />
              </div>
              <p className="text-sm text-slate-400 mt-2">Design system & tokens pour une UI cohérente.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Développement */}
      <Section>
        <div className="container">
          <div className="flex items-center gap-3">
            <Code className="text-cyan-300" />
            <h2 className="text-2xl md:text-3xl font-extrabold">Développement</h2>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Front-end",
                icon: <LayoutDashboard />,
                desc: "React/Next, performance Web Vitals, SEO technique.",
                bullets: ["SSR/SSG", "A11y (WCAG)", "Design system"],
                img: "/front_end.png",
              },
              {
                title: "Back-end",
                icon: <Server />,
                desc: "API robustes, observabilité et sécurité intégrée.",
                bullets: ["Node/Nest", "Python/FastAPI", "GraphQL/REST"],
                img: "/backend.png",
              },
              {
                title: "Data & Analytics",
                icon: <Database />,
                desc: "Pipelines de données, dashboards, instrumentation.",
                bullets: ["ETL/ELT", "Metrics & logs", "Alerting"],
                img: "/data_analytics.jpg",
              },
            ].map((c) => (
              <article key={c.title} className="card overflow-hidden reveal">
                <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                </div>
                <div className="mt-4">
                  <div className="text-cyan-300">{c.icon}</div>
                  <h3 className="font-bold mt-2">{c.title}</h3>
                  <p className="text-slate-300 text-sm">{c.desc}</p>
                  <ul className="list-dash mt-2">{c.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Cloud & DevOps (CI/CD) */}
      <Section>
        <div className="container grid md:grid-cols-2 gap-8 items-start">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <GitBranch className="text-cyan-300" />
              <h2 className="text-2xl md:text-3xl font-extrabold">Cloud & DevOps — CI/CD</h2>
            </div>
            <p className="mt-3 text-slate-300">
              Pipelines fiables, infra code, déploiements répétables. Nous mettons la vélocité
              au service de la qualité (et pas l’inverse).
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="card">
                <div className="text-cyan-300"><Cloud /></div>
                <h3 className="font-bold mt-2">Infra as Code</h3>
                <ul className="list-dash mt-2">
                  <li>Azure, Terraform</li>
                  <li>Docker, K8s</li>
                  <li>Envs & secrets</li>
                </ul>
              </div>
              <div className="card">
                <div className="text-cyan-300"><Rocket /></div>
                <h3 className="font-bold mt-2">CI/CD</h3>
                <ul className="list-dash mt-2">
                  <li>GitHub Actions</li>
                  <li>Azure DevOps</li>
                  <li>Preview apps</li>
                </ul>
              </div>
            </div>

            <details className="card mt-4">
              <summary className="cursor-pointer font-semibold">Livrables DevOps</summary>
              <ul className="list-dash mt-3">
                <li>Pipeline build/test/lint + quality gate</li>
                <li>Déploiement Blue/Green ou Canary</li>
                <li>Monitoring, logs centralisés, alertes</li>
              </ul>
            </details>
          </div>

          {/* Schéma CI/CD */}
          <div className="card overflow-hidden reveal">
            <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10">
              <img src="/cicd.png" alt="Schéma pipeline CI/CD"
                   className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-slate-400 mt-2">
              Exemple de pipeline : build → tests → scan → déploiement → vérifs → rollback auto.
            </p>
          </div>
        </div>
      </Section>

      {/* Sécurité */}
      <Section>
        <div className="container">
          <div className="flex items-center gap-3">
            <Shield className="text-cyan-300" />
            <h2 className="text-2xl md:text-3xl font-extrabold">Sécurité “by design”</h2>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Identité & accès",
                icon: <KeyRound />,
                bullets: ["SSO/OIDC", "RBAC/ABAC", "Rotation de secrets"],
                img: "/identite.jpg",
              },
              {
                title: "Code & données",
                icon: <Lock />,
                bullets: ["OWASP Top 10", "Chiffrement au repos/transit", "Backups & politiques"],
                img: "/code_donnees.jpg",
              },
              {
                title: "Observabilité & réponse",
                icon: <Gauge />,
                bullets: ["Audit logs", "Alerting & runbooks", "Tableau de bord risques"],
                img: "/observabilite.jpg",
              },
            ].map((c) => (
              <article key={c.title} className="card overflow-hidden reveal">
                <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                </div>
                <div className="mt-4">
                  <div className="text-cyan-300">{c.icon}</div>
                  <h3 className="font-bold mt-2">{c.title}</h3>
                  <ul className="list-dash mt-2">{c.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>

          <div className="card mt-6 p-6 reveal">
            <p className="text-sm uppercase tracking-wider text-slate-400">Checklist de durcissement</p>
            <ul className="list-dash mt-2">
              <li>Secrets managés (Key Vault) & rotation automatisée</li>
              <li>Headers de sécurité & CSP strictes</li>
              <li>Scans SAST/DAST dans la CI</li>
              <li>Politique de logs, rétention & traçabilité</li>
              <li>Plan de réponse à incident & exercices</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Data & Analytics */}
      <Section>
        <div className="container grid md:grid-cols-2 gap-8 items-start">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <Brain className="text-cyan-300" />
              <h2 className="text-2xl md:text-3xl font-extrabold">Data & Analytics</h2>
            </div>
            <p className="mt-3 text-slate-300">
              De la collecte à la décision : pipelines propres, indicateurs actionnables et
              visualisations claires (sans poudre aux yeux).
            </p>
            <ul className="list-dash mt-3">
              <li>Ingestion & modélisation (ELT/ETL)</li>
              <li>Metrics produits (rétention, activation, NPS)</li>
              <li>Tableaux de bord (produit & ops)</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <Link to="/contact" className="btn-cta">Discuter data</Link>
              <Link to="/projets" className="btn-ghost">Voir un cas</Link>
            </div>
          </div>
          <div className="card overflow-hidden reveal">
            <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10">
              <img src="/dashboard.jpg" alt="Dashboards & analytics"
                   className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-slate-400 mt-2">Instrumentation produit & observabilité.</p>
          </div>
        </div>
      </Section>

      {/* FAQ rapide */}
      <Section>
        <div className="container">
          <div className="flex items-center gap-3">
            <Workflow className="text-cyan-300" />
            <h2 className="text-2xl md:text-3xl font-extrabold">FAQ</h2>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              {
                q: "Combien de temps pour un MVP ?",
                a: "Généralement 3 à 6 semaines selon le scope. On commence par un sprint Discovery pour caler les priorités.",
              },
              {
                q: "Pouvez-vous reprendre un projet existant ?",
                a: "Oui. Audit flash (code+infra), plan de remédiation et trajectoire par étapes vers la stabilité.",
              },
              {
                q: "Mettre en place la CI/CD, c’est complexe ?",
                a: "Pas forcément. Un pipeline simple (build/tests/lint) se met très vite. On étend ensuite (scan, preview, canary).",
              },
              {
                q: "Et après la mise en production ?",
                a: "On documente, on forme, et on peut assurer la TMA/Run avec des engagements clairs (SLA, astreintes).",
              },
            ].map((f) => (
              <details key={f.q} className="card p-4 reveal">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="mt-2 text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA final */}
      <Section>
        <div className="container text-center">
          <div className="card p-10 md:p-12 reveal">
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Prêt à accélérer ? <span className="text-gradient">Planifions un échange</span>
            </h3>
            <p className="mt-3 text-slate-300">
              Nous identifions vos leviers rapides (perf, coûts, sécurité) en 30 minutes.
            </p>
            <div className="mt-6 flex gap-4 justify-center">
              <Link to="/contact" className="btn-cta">Demander un devis</Link>
              <Link to="/projets" className="btn-ghost">Voir nos projets</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
