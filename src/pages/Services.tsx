import { Link } from "react-router-dom";
import Section from "../components/Section";
import {
  Palette, PenTool, LayoutDashboard, Code, Server, Cloud, GitBranch, Rocket,
  Shield, Database, Brain, Gauge, Workflow,
  Users, FileCode2, ShieldCheck, TestTube
} from "lucide-react";
import { useEffect } from "react";
import { asset } from "../helpers/assets";

/** Animations au scroll (zéro dépendance) */
function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-title");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) (e.target as HTMLElement).classList.add("show"); });
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
        <div id="services-hero" className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="reveal">
            <span className="hero-badge">Nos expertises</span>
            <h1 className="hero-title mt-3">
              Développement sur mesure <span className="text-gradient">performant et fiable</span>
            </h1>
            <p className="hero-sub mt-4">
              Du concept au déploiement : applications web modernes, architecture cloud 
              et bonnes pratiques de développement.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-cta">Parler de votre projet</Link>
              <Link to="/projets" className="btn-ghost">Voir nos réalisations</Link>
            </div>
          </div>

          {/* Visuel principal (services) */}
          <div className="card overflow-hidden reveal hover:transform hover:scale-[1.02] transition-all duration-300">
            <div className="aspect-video bg-white/5 ring-1 ring-white/10 rounded-xl overflow-hidden">
              <img
                src={asset("services.jpg")}
                alt="Aperçu de nos services"
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* UX Design */}
      <Section>
        <div id="ux" className="container grid md:grid-cols-2 gap-8 items-start">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <Palette className="text-cyan-300" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-extrabold">UX / UI Design</h2>
            </div>
            <p className="mt-3 text-slate-300">
              Interfaces intuitives et efficaces conçues pour l'expérience utilisateur. 
              Nous privilégions la simplicité et l'accessibilité.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { icon: <PenTool aria-hidden="true" />, title: "Design & Prototypage", items: ["Wireframes", "Maquettes Figma", "Prototypes interactifs"] },
                { icon: <LayoutDashboard aria-hidden="true" />, title: "Design System", items: ["Composants réutilisables", "Guide de style", "Responsive design"] },
              ].map((b, i) => (
                <div key={i} className="card reveal hover:transform hover:-translate-y-1 transition-all duration-300">
                  <div className="text-cyan-300">{b.icon}</div>
                  <h3 className="mt-2 font-bold">{b.title}</h3>
                  <ul className="list-dash mt-2">{b.items.map(x => <li key={x}>{x}</li>)}</ul>
                </div>
              ))}
            </div>

            <details className="card mt-4 hover:bg-white/10 transition-colors">
              <summary className="cursor-pointer font-semibold">Livrables design</summary>
              <ul className="list-dash mt-3">
                <li>Maquettes des écrans principaux</li>
                <li>Prototype interactif testable</li>
                <li>Guide de design et composants</li>
              </ul>
            </details>
          </div>

          <div className="space-y-4">
            <div className="card overflow-hidden reveal hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10">
                <img
                  src={asset("wireframes.jpg")}
                  alt="Wireframes & prototypes"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-sm text-slate-400 mt-2">De l'idée au prototype testable</p>
            </div>
            <div className="card overflow-hidden reveal hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10">
                <img
                  src={asset("design_system.png")}
                  alt="Design system"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-sm text-slate-400 mt-2">Design system cohérent et maintenable</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Développement */}
      <Section>
        <div id="developpement" className="container">
          <div className="flex items-center gap-3">
            <Code className="text-cyan-300" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-extrabold">Développement</h2>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Front-end Moderne",
                icon: <LayoutDashboard aria-hidden="true" />,
                desc: "Applications React/Next.js performantes et accessibles.",
                bullets: ["Next.js/React", "TypeScript", "Performance optimisée"],
                img: asset("front_end.png"),
              },
              {
                title: "Back-end Robuste",
                icon: <Server aria-hidden="true" />,
                desc: "APIs sécurisées et architectures maintenables.",
                bullets: ["Node.js/Python", "APIs REST/GraphQL", "Architecture clean"],
                img: asset("backend.png"),
              },
              {
                title: "Bases de Données",
                icon: <Database aria-hidden="true" />,
                desc: "Modélisation et optimisation des données.",
                bullets: ["PostgreSQL/MongoDB", "Optimisation requêtes", "Migrations"],
                img: asset("data_analytics.jpg"),
              },
            ].map((c) => (
              <article key={c.title} className="card overflow-hidden reveal hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
        <div id="devops" className="container grid md:grid-cols-2 gap-8 items-start">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <GitBranch className="text-cyan-300" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-extrabold">Cloud & DevOps</h2>
            </div>
            <p className="mt-3 text-slate-300">
              Déploiement automatisé, infrastructure scalable et monitoring. 
              Nous assurons la fiabilité de vos applications en production.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="card hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-cyan-300"><Cloud aria-hidden="true" /></div>
                <h3 className="font-bold mt-2">Infrastructure Cloud</h3>
                <ul className="list-dash mt-2">
                  <li>Azure & AWS</li>
                  <li>Docker & déploiement</li>
                  <li>Environnements multiples</li>
                </ul>
              </div>
              <div className="card hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-cyan-300"><Rocket aria-hidden="true" /></div>
                <h3 className="font-bold mt-2">CI/CD & Qualité</h3>
                <ul className="list-dash mt-2">
                  <li>Tests automatisés</li>
                  <li>Déploiement continu</li>
                  <li>Monitoring & logs</li>
                </ul>
              </div>
            </div>

            <details className="card mt-4 hover:bg-white/10 transition-colors">
              <summary className="cursor-pointer font-semibold">Notre approche DevOps</summary>
              <ul className="list-dash mt-3">
                <li>Pipeline de livraison automatisé</li>
                <li>Tests à chaque modification</li>
                <li>Déploiement progressif et sécurisé</li>
              </ul>
            </details>
          </div>

          {/* Schéma CI/CD */}
          <div className="card overflow-hidden reveal hover:transform hover:scale-[1.02] transition-all duration-300">
            <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10">
              <img
                src={asset("cicd.png")}
                alt="Schéma pipeline CI/CD"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-sm text-slate-400 mt-2">
              Automatisation du développement au déploiement
            </p>
          </div>
        </div>
      </Section>

      {/* Sécurité Développement */}
      <Section>
        <div id="securite" className="container">
          <div className="flex items-center gap-3">
            <Shield className="text-cyan-300" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-extrabold">Sécurité Développement</h2>
          </div>
          <p className="mt-2 text-slate-300">
            Bonnes pratiques de sécurité intégrées au processus de développement
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Tests de Sécurité",
                icon: <TestTube aria-hidden="true" />,
                bullets: ["Tests d'injection SQL", "Validation des entrées", "Scan de vulnérabilités"],
                img: asset("identite.jpg"),
              },
              {
                title: "Code Sécurisé",
                icon: <ShieldCheck aria-hidden="true" />,
                bullets: ["Authentification sécurisée","Gestion des permissions", "Chiffrement des données"],
                img: asset("code_donnees.jpg"),
              },
              {
                title: "Monitoring Sécurité",
                icon: <Gauge aria-hidden="true" />,
                bullets: ["Logs de sécurité", "Détection d'anomalies", "Alertes automatiques"],
                img: asset("observabilite.jpg"),
              },
            ].map((c) => (
              <article key={c.title} className="card overflow-hidden reveal hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div className="mt-4">
                  <div className="text-cyan-300">{c.icon}</div>
                  <h3 className="font-bold mt-2">{c.title}</h3>
                  <ul className="list-dash mt-2">{c.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>

          <div className="card mt-6 p-6 reveal hover:bg-white/10 transition-colors">
            <p className="text-sm uppercase tracking-wider text-slate-400">Bonnes pratiques implémentées</p>
            <ul className="list-dash mt-2">
              <li>Validation et sanitisation des données utilisateur</li>
              <li>Authentification sécurisée (JWT, sessions)</li>
              <li>Protection contre les injections et XSS</li>
              <li>Gestion sécurisée des secrets et configurations</li>
              <li>Revue de code et tests de sécurité automatisés</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Data & Analytics */}
      <Section>
        <div id="data" className="container grid md:grid-cols-2 gap-8 items-start">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <Brain className="text-cyan-300" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-extrabold">Data & Analytics</h2>
            </div>
            <p className="mt-3 text-slate-300">
              Applications data-driven avec tableaux de bord et métriques business.
            </p>
            <ul className="list-dash mt-3">
              <li>Bases de données optimisées</li>
              <li>Tableaux de bord métier</li>
              <li>APIs données et reporting</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <Link to="/contact" className="btn-cta">Discuter data</Link>
              <Link to="/projets" className="btn-ghost">Voir un exemple</Link>
            </div>
          </div>
          <div className="card overflow-hidden reveal hover:transform hover:scale-[1.02] transition-all duration-300">
            <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10">
              <img
                src={asset("dashboard.jpg")}
                alt="Dashboards & analytics"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-sm text-slate-400 mt-2">Tableaux de bord métier personnalisés</p>
          </div>
        </div>
      </Section>

      {/* Offres & Engagements */}
      <EngagementModels />

      {/* Garanties améliorées */}
      <EnhancedGuarantees />

      {/* FAQ rapide */}
      <Section>
        <div id="faq" className="container">
          <div className="flex items-center gap-3">
            <Workflow className="text-cyan-300" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-extrabold">Questions Fréquentes</h2>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              {
                q: "Combien de temps pour un MVP ?",
                a: "Environ 4 à 8 semaines selon la complexité. Nous commençons par définir les fonctionnalités essentielles.",
              },
              {
                q: "Pouvez-vous reprendre un projet existant ?",
                a: "Oui, nous pouvons auditer et améliorer votre code existant, ou reprendre le développement.",
              },
              {
                q: "Quelle est votre stack technique ?",
                a: "React/Next.js, Node.js/Python, PostgreSQL/MongoDB, Azure/AWS, Docker. Nous adaptons aux besoins.",
              },
              {
                q: "Proposez-vous de la maintenance ?",
                a: "Oui, nous proposons des formules de maintenance et d'évolution selon vos besoins.",
              },
            ].map((f) => (
              <details key={f.q} className="card p-4 reveal hover:bg-white/10 transition-colors">
                <summary className="font-semibold cursor-pointer hover:text-cyan-300 transition-colors">{f.q}</summary>
                <p className="mt-2 text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA final */}
      <Section>
        <div className="container text-center">
          <div className="card p-10 md:p-12 reveal hover:transform hover:scale-[1.01] transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Un projet en tête ? <span className="text-gradient">Discutons-en</span>
            </h3>
            <p className="mt-3 text-slate-300">
              Devis personnalisé gratuit sous 48h • Expertise technique garantie
            </p>
            <div className="mt-6 flex gap-4 justify-center flex-wrap">
              <Link to="/contact" className="btn-cta">Demander un devis</Link>
              <Link to="/projets" className="btn-ghost">Voir nos réalisations</Link>
              <a href="#top" className="btn-ghost">Retour en haut</a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

/* =========================
   Sections additionnelles
   ========================= */

function EngagementModels() {
  const items = [
    {
      title: "Audit & Conseil",
      duration: "1-2 semaines",
      forWhom: "Projet à définir ou existant",
      deliverables: ["Analyse technique", "Recommandations", "Plan d'action"],
      outcome: "Feuille de route claire",
    },
    {
      title: "Développement MVP",
      duration: "4–8 semaines",
      forWhom: "Lancement rapide",
      deliverables: ["Application fonctionnelle", "Déploiement initial", "Documentation"],
      outcome: "Produit testable en conditions réelles",
    },
    {
      title: "Évolution & Maintenance",
      duration: "Selon besoins",
      forWhom: "Projet existant",
      deliverables: ["Nouvelles fonctionnalités", "Optimisations", "Corrections"],
      outcome: "Application maintenue et améliorée",
    },
  ];

  return (
    <Section>
      <div id="offres" className="container">
        <h2 className="text-2xl md:text-3xl font-extrabold">Nos Offres</h2>
        <p className="mt-2 text-slate-300">
          Des solutions adaptées à chaque étape de votre projet.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {items.map((x) => (
            <article key={x.title} className="card reveal hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="font-bold text-lg">{x.title}</h3>
              <p className="text-slate-400 text-sm">Durée : {x.duration}</p>
              <p className="text-slate-300 text-sm mt-2">Pour : {x.forWhom}</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-3">Livrables</p>
              <ul className="list-dash mt-1">{x.deliverables.map(d => <li key={d}>{d}</li>)}</ul>
              <p className="text-slate-300 text-sm mt-3"><strong>Résultat :</strong> {x.outcome}</p>
              <div className="mt-4">
                <Link to="/contact" className="btn-ghost">En savoir plus</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function EnhancedGuarantees() {
  const guarantees = [
    {
      icon: <GitBranch className="text-cyan-300" />,
      title: "Code propriétaire",
      desc: "Vous restez propriétaire de tout le code source"
    },
    {
      icon: <ShieldCheck className="text-cyan-300" />,
      title: "Qualité de code",
      desc: "Tests automatisés, revues de code et bonnes pratiques"
    },
    {
      icon: <FileCode2 className="text-cyan-300" />,
      title: "Documentation complète",
      desc: "Documentation technique et utilisateur fournie"
    },
    {
      icon: <Users className="text-cyan-300" />,
      title: "Communication régulière",
      desc: "Points d'avancement et transparence sur le projet"
    }
  ];

  return (
    <Section>
      <div id="garanties" className="container">
        <h2 className="text-2xl md:text-3xl font-extrabold">Nos Engagements</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {guarantees.map((g, i) => (
            <div key={i} className="card reveal hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-3">
                {g.icon}
                <div>
                  <h3 className="font-bold text-slate-200">{g.title}</h3>
                  <p className="text-slate-300 text-sm mt-1">{g.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}