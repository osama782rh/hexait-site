// apps/web/src/pages/Home.tsx
import { Link } from "react-router-dom";
import {
  ArrowRight, Shield, Server, Code, Rocket, Wrench, Lock,
  Lightbulb, PenTool, Workflow, Github, Linkedin, Mail, Phone, MapPin,
  Calendar, ListChecks, CheckCircle2, Activity
} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import Section from "../components/Section";

/** ==== Hooks d'animations (zéro dépendance) ==== */
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

function useCountUp(ref: React.RefObject<HTMLElement>, end: number, duration = 1400) {
  useEffect(() => {
    if (!ref.current) return;
    let start = 0;
    let raf = 0;
    let startTs = 0;
    const step = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min(1, (ts - startTs) / duration);
      const eased = 1 - Math.pow(1 - p, 4); // easeOutQuart
      const val = Math.floor(eased * end);
      if (ref.current) ref.current.textContent = val.toString();
      if (p < 1) raf = requestAnimationFrame(step);
    };

    // déclenche quand visible
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && start === 0) {
          start = 1;
          raf = requestAnimationFrame(step);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });

    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [ref, end, duration]);
}

/** ==== Home Page ==== */
export default function Home() {
  useRevealOnScroll();

  return (
    <>
      {/* HERO vidéo plein écran */}
      <div className="video-wrap min-h-screen">
        <video
          className="video-bg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="video-veil" />

        <section className="hero">
          <span className="hero-badge reveal">
            <img src="/logo.svg" alt="" className="h-4" />
            HEXAIT • Studio d’ingénierie
          </span>

          <h1 className="hero-title reveal-title">
            Produits web, cloud & IA
            <span className="block text-gradient">de l’idée au déploiement</span>
          </h1>

          <p className="hero-sub mx-auto reveal reveal-delay-1">
            Conception, développement, CI/CD, sécurité et performance. Nous livrons des
            expériences fiables et scalables – au-delà d’une simple stack.
          </p>

          <div className="hero-actions reveal reveal-delay-2">
            <Link to="/contact" className="btn-cta">
              Demander un devis <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn-ghost">
              Voir les services
            </Link>
          </div>

          <div className="scroll-cue"><span /></div>
        </section>
      </div>

      {/* Services clés */}
      <Section className="grid-3">
        {[
          { icon: <Code />, title: "Développement", desc: "Front (React/Next), Back (Node/Nest, Python/FastAPI), GraphQL/REST" },
          { icon: <Server />, title: "Cloud & DevOps", desc: "Azure, Docker/K8s, CI/CD (GitHub Actions, Azure DevOps)" },
          { icon: <Shield />, title: "Sécurité", desc: "Audit, durcissement, secrets, SSO, bonnes pratiques OWASP" },
        ].map((s, i) => (
          <div key={i} className={`card reveal reveal-delay-${i}`}>
            <div className="text-cyan-300">{s.icon}</div>
            <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
            <p className="text-slate-300">{s.desc}</p>
          </div>
        ))}
      </Section>

      {/* Logos Clients */}
      <Section>
        <div className="container text-center">
          <p className="text-sm uppercase tracking-widest text-slate-400">Ils nous font confiance</p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center">
            {["acme", "polaris", "aurora", "zephyr", "vertex", "nova"].map((n) => (
              <img
                key={n}
                src={`/logos/${n}.svg`} /* place des svg dans /public/logos/ */
                alt={n}
                className="h-8 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Stats animées */}
      <Stats />

      {/* Workflow */}
      <WorkflowSection />

      {/* Projets récents */}
      <Projects />

      {/* Témoignages */}
      <Testimonials />

      {/* CTA final */}
      <CallToAction />
    </>
  );
}

/** ==== Sections supplémentaires ==== */

function Stats() {
  const ref1 = useRef<HTMLSpanElement>(null);
  const ref2 = useRef<HTMLSpanElement>(null);
  const ref3 = useRef<HTMLSpanElement>(null);
  useCountUp(ref1, 25);
  useCountUp(ref2, 99);
  useCountUp(ref3, 3);

  return (
    <Section>
      <div className="container grid md:grid-cols-3 gap-6">
        <div className="card text-center reveal">
          <div className="text-4xl font-extrabold"><span ref={ref1}>0</span>+</div>
          <p className="text-slate-300 mt-1">projets livrés</p>
        </div>
        <div className="card text-center reveal reveal-delay-1">
          <div className="text-4xl font-extrabold"><span ref={ref2}>0</span>%</div>
          <p className="text-slate-300 mt-1">SLA & satisfaction</p>
        </div>
        <div className="card text-center reveal reveal-delay-2">
          <div className="text-4xl font-extrabold"><span ref={ref3}>0</span></div>
          <p className="text-slate-300 mt-1">pays couverts</p>
        </div>
      </div>
    </Section>
  );
}
// ➜ Dans le haut de Home.tsx, complète les imports lucide-react avec :
// import { Calendar, ClipboardList, CheckCircle2, Activity } from "lucide-react";

function WorkflowSection() {
  type Step = {
    icon: JSX.Element;
    title: string;
    duration: string;
    deliverables: string[];
    result: string;
  };

  const steps: Step[] = [
    {
      icon: <Lightbulb />,
      title: "1) Discovery & objectifs",
      duration: "2–3 jours",
      deliverables: ["Kick-off", "Backlog initial", "KPI & contraintes"],
      result: "Vision claire, priorités alignées, risques identifiés.",
    },
    {
      icon: <ListChecks />,
      title: "2) Architecture & plan",
      duration: "3–5 jours",
      deliverables: ["Schéma d’archi", "Design de données", "Plan sécu & coûts"],
      result: "Base technique robuste, trajectoire chiffrée et sécurisée.",
    },

    {
      icon: <PenTool />,
      title: "3) Design sprint",
      duration: "1 semaine",
      deliverables: ["Wireframes", "Prototype cliquable", "Feedbacks utilisateurs"],
      result: "Expérience validée, itérations rapides avant dev.",
    },
    {
      icon: <Wrench />,
      title: "4) Build itératif",
      duration: "2–6 semaines",
      deliverables: ["Sprints courts", "Revue de code", "Story Done/DoD"],
      result: "Valeur livrée en continu, dette maîtrisée.",
    },
    {
      icon: <Lock />,
      title: "5) Sécurité & QA",
      duration: "en parallèle",
      deliverables: ["Tests e2e/charge", "OWASP checks", "Secrets/SSO"],
      result: "Confiance, conformité et résilience.",
    },
    {
      icon: <Rocket />,
      title: "6) Go-live & run",
      duration: "2–4 jours",
      deliverables: ["CI/CD & rollback", "Monitoring & alerting", "Handover & docs"],
      result: "Mise en prod sereine, équipe autonome.",
    },
  ];

  const pillars = [
    { icon: <Calendar size={16} />, text: "Sprints hebdo, demo chaque fin de sprint" },
    { icon: <Activity size={16} />, text: "KPIs: LCP, erreurs, latence API, coûts cloud" },
    { icon: <CheckCircle2 size={16} />, text: "Definition of Done claire (tests/QA/doc)" },
  ];

  return (
    <Section>
      <div className="container">
        <div className="flex items-center gap-3">
          <Workflow className="text-cyan-300" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Notre méthode</h2>
        </div>

        {/* Piliers de delivery */}
        <ul className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
          {pillars.map((p, i) => (
            <li key={i} className="inline-flex items-center gap-2 bg-white/5 ring-1 ring-white/10 rounded-full px-3 py-1 reveal">
              {p.icon} {p.text}
            </li>
          ))}
        </ul>

        {/* Timeline des étapes */}
        <div className="mt-8 grid md:grid-cols-3 gap-6 timeline">
          {steps.map((s, i) => (
            <article key={s.title} className={`card reveal reveal-delay-${i % 3}`}>
              <div className="flex items-center justify-between">
                <div className="text-cyan-300">{s.icon}</div>
                <span className="text-xs text-slate-400">{s.duration}</span>
              </div>

              <h3 className="mt-3 font-bold">{s.title}</h3>

              <div className="mt-3 space-y-2">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Livrables</p>
                  <ul className="mt-1 list-dash">
                    {s.deliverables.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Résultat</p>
                  <p className="text-slate-300 text-sm">{s.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bandeau engagement */}
        <div className="mt-8 card p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 reveal">
          <p className="text-slate-200">
            🔁 Itération rapide • 🔒 Security-first • 🚀 CI/CD • 📈 Mesure continue
          </p>
          <div className="flex gap-3">
            <Link to="/services" className="btn-ghost">Voir le détail</Link>
            <Link to="/contact" className="btn-cta">Démarrer un audit</Link>
          </div>
        </div>
      </div>
    </Section>
  );
}


function Projects() {
  const items = [
    {
      title: "Plateforme B2B",
      img: "/projects/p1.jpg",
      desc: "Refonte React + API GraphQL, CI/CD Azure, perf LCP -42%.",
      link: "/projets#b2b",
    },
    {
      title: "SaaS Analytics",
      img: "/projects/p2.jpg",
      desc: "Dashboard Next.js, auth SSO, ingestion temps réel.",
      link: "/projets#saas",
    },
    {
      title: "E-commerce Headless",
      img: "/projects/p3.jpg",
      desc: "Front Next + back composable, A/B testing, Core Web Vitals.",
      link: "/projets#ecom",
    },
  ];
  return (
    <Section>
      <div className="container">
        <div className="flex items-center gap-3">
          <Rocket className="text-cyan-300" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Projets récents</h2>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <article key={p.title} className={`card overflow-hidden reveal reveal-delay-${i}`}>
              <div className="aspect-video rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition" />
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="text-slate-300 text-sm">{p.desc}</p>
                <Link to={p.link} className="inline-flex items-center gap-2 mt-3 text-cyan-300 hover:text-cyan-200">
                  Voir le projet <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Testimonials() {
  const data = [
    {
      quote: "HEXAIT a sécurisé notre infra et accéléré nos déploiements. Time-to-market divisé par 2.",
      author: "Lina M., CTO — Polaris",
    },
    {
      quote: "Exécution propre, communication claire. On a atteint nos KPI sans dérive de planning.",
      author: "Jonas R., Product — Aurora",
    },
    {
      quote: "Une refonte Next.js impeccable. Perf et SEO en forte hausse dès le premier mois.",
      author: "Nadia S., Marketing — Vertex",
    },
  ];
  return (
    <Section>
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center">Ils parlent de nous</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {data.map((t, i) => (
            <figure key={i} className={`card reveal reveal-delay-${i}`}>
              <blockquote className="text-slate-200">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-400">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CallToAction() {
  return (
    <>
      <Section>
        <div className="container text-center">
          <div className="card p-10 md:p-12 reveal">
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Vous avez un projet ? <span className="text-gradient">Parlons-en</span>
            </h3>
            <p className="mt-3 text-slate-300">
              Audit gratuit de 30 minutes pour identifier vos leviers de performance et de sécurité.
            </p>
            <div className="mt-6 flex gap-4 justify-center">
              <Link to="/contact" className="btn-cta">Prendre RDV</Link>
              <Link to="/services" className="btn-ghost">Voir nos offres</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}