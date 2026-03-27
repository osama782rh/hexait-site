'use client';
import Link from "next/link";
import {
  ArrowRight, Code, Rocket, Wrench, Shield, Lightbulb,
  CheckCircle2, Clock, Zap, MessageSquare, AlertTriangle,
  FileSpreadsheet, Puzzle, Timer, Send, Search, Cloud
} from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import { Star } from "lucide-react";
import React from 'react';

/* ─── Hooks ─── */
function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("show");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useTimelineFill(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const container = ref.current;
    const fill = container.querySelector<HTMLElement>('.timeline-track-fill');
    const dots = container.querySelectorAll<HTMLElement>('.timeline-dot');
    if (!fill) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        /* Animate fill and dots sequentially */
        fill.style.width = '100%';
        dots.forEach((dot, i) => {
          setTimeout(() => dot.classList.add('active'), 300 + i * 350);
        });
        io.disconnect();
      });
    }, { threshold: 0.3 });
    io.observe(container);
    return () => io.disconnect();
  }, [ref]);
}


function useCountUp(
  ref: React.RefObject<HTMLElement | null>,
  end: number,
  opts: { duration?: number; decimals?: number } = {}
) {
  const { duration = 1400, decimals = 0 } = opts;
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    let raf = 0, startTs = 0;
    const step = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min(1, (ts - startTs) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      el.textContent = decimals ? (end * eased).toFixed(decimals) : Math.round(end * eased).toString();
      if (p < 1) raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) { raf = requestAnimationFrame(step); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [ref, end, duration, decimals]);
}


/* ════════════════════════════════════════
   HOME — Narrative scroll
   ════════════════════════════════════════ */
export default function Home() {
  useRevealOnScroll();
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <RealisationsSection />
      <StackSection />
      <StatsSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
}


/* ─────────────────────────────────────
   1. HERO — Cinematic entrance sequence
   ───────────────────────────────────── */
function HeroSection() {
  return (
    <div className="video-wrap relative overflow-hidden">
      <video
        className="video-bg"
        autoPlay muted loop playsInline preload="metadata"
        poster="/images/services/services.jpg"
        aria-hidden="true"
        onError={(e) => { (e.target as HTMLVideoElement).style.display = 'none'; }}
      >
        <source src="/images/hero/hero.mp4" type="video/mp4" />
      </video>
      <div className="video-veil" />

      <section className="relative z-10 pt-[15vh] sm:pt-[18vh] pb-12 sm:pb-20" aria-labelledby="main-title">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="hero-seq-badge mb-8">
            <span className="hero-badge">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Studio d&apos;ingénierie logicielle
            </span>
          </div>

          <h1 id="main-title" className="font-display text-hero font-extrabold mb-6">
            <span className="hero-seq-line-1 block">L&apos;excellence technique</span>
            <span className="hero-seq-line-2 block text-gradient mt-1">au service de votre business.</span>
          </h1>

          <p className="hero-seq-sub text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
            Applications SaaS, plateformes métier et outils sur mesure —
            nous développons les logiciels qui font tourner votre business.
          </p>

          <div className="hero-seq-cta flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-cta group px-8 py-4 text-base">
              Discuter de votre projet
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/projets" className="btn-ghost group px-8 py-4 text-base">
              Nos réalisations
            </Link>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="hero-seq-visual pt-10 border-t border-[var(--border)] mt-14">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
              <span className="trust-item">
                <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                Vous êtes propriétaire du code
              </span>
              <span className="trust-item">
                <Clock size={16} className="text-emerald-400 flex-shrink-0" />
                Premier prototype en 7 jours
              </span>
              <span className="trust-item">
                <Zap size={16} className="text-emerald-400 flex-shrink-0" />
                Interlocuteur technique unique
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


/* ─────────────────────────────────────
   2. LE PROBLÈME
   ───────────────────────────────────── */
function ProblemSection() {
  const pains = [
    {
      icon: <FileSpreadsheet size={22} />,
      title: "Votre outil métier, c'est un Google Sheet qui craque",
      desc: "Formules cassées, fichiers dupliqués, zéro traçabilité. Vous savez que ça ne tiendra pas à l'échelle.",
    },
    {
      icon: <AlertTriangle size={22} />,
      title: "Votre dernier prestataire a livré en retard… et buggé",
      desc: "Promesses non tenues, effet tunnel, livrable inutilisable. Vous hésitez à relancer un projet tech.",
    },
    {
      icon: <Lightbulb size={22} />,
      title: "Vous avez une idée de SaaS mais pas d'équipe tech",
      desc: "Le concept est là, le marché aussi. Il vous manque un partenaire technique pour transformer l'idée en produit.",
    },
    {
      icon: <Timer size={22} />,
      title: "Vos process sont manuels et vous perdez des heures",
      desc: "Copier-coller entre 3 logiciels, reporting bricolé, doubles saisies. Votre équipe mérite mieux.",
    },
  ];

  return (
    <section className="home-section">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <span className="section-label reveal">// 01 — LE PROBLÈME</span>
          <h2 className="font-display text-display-lg font-extrabold reveal">
            Vous méritez mieux qu&apos;un prestataire
            <span className="text-gradient"> qui disparaît</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {pains.map((p, i) => (
            <div key={i} className={`card flex gap-5 reveal reveal-delay-${i}`}>
              <div className="step-num flex-shrink-0 mt-0.5" style={{ background: 'rgba(251,146,60,0.08)', borderColor: 'rgba(251,146,60,0.2)', color: '#fb923c' }}>
                {p.icon}
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────
   3. SERVICES — Premium product cards
   ───────────────────────────────────── */
function ServicesSection() {
  const services = [
    {
      num: "01",
      icon: <Code size={24} />,
      title: "Applications web sur mesure",
      desc: "Plateformes métier, back-offices et portails clients — des apps pensées pour votre workflow, pas l'inverse.",
      tags: ["React", "Next.js", "TypeScript", "Node.js"],
    },
    {
      num: "02",
      icon: <Rocket size={24} />,
      title: "Développement SaaS",
      desc: "De l'idée au MVP, puis du MVP au produit. Architecture multi-tenant, billing, onboarding — on gère tout le cycle.",
      tags: ["PostgreSQL", "Stripe", "Auth", "CI/CD"],
    },
    {
      num: "03",
      icon: <Cloud size={24} />,
      title: "APIs & architectures cloud",
      desc: "APIs REST/GraphQL robustes, microservices, intégrations tierces. Votre stack, connectée et scalable.",
      tags: ["Python", "Docker", "Azure", "AWS"],
    },
    {
      num: "04",
      icon: <Search size={24} />,
      title: "Consulting technique & audit",
      desc: "Audit de code, choix d'architecture, revue de sécurité. Un regard senior sur votre projet avant de foncer.",
      tags: ["Audit", "OWASP", "Architecture", "DevOps"],
    },
  ];

  return (
    <section className="home-section">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="section-divider mb-20" />

        <div className="text-center mb-14">
          <span className="section-label reveal">// 02 — SERVICES</span>
          <h2 className="font-display text-display-lg font-extrabold reveal">
            Ce qu&apos;on <span className="text-gradient">construit</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto reveal reveal-delay-1" style={{ color: 'var(--text-secondary)' }}>
            Quatre expertises, maîtrisées de A à Z. Pas de catalogue à rallonge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div key={i} className={`card card-accent-line group reveal reveal-delay-${i % 2}`}>
              <span className="mono text-5xl font-extrabold absolute top-5 right-6" style={{ color: 'rgba(6,182,212,0.06)' }}>
                {s.num}
              </span>

              <div className="flex items-start gap-4">
                <div className="step-num mt-0.5">{s.icon}</div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <Link href="/services" className="btn-ghost inline-flex items-center gap-2">
            Détail complet de nos services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────
   4. PROCESS — Timeline with scroll-fill
   ───────────────────────────────────── */
function ProcessSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  useTimelineFill(timelineRef);

  const steps = [
    {
      num: "01",
      icon: <MessageSquare size={18} />,
      title: "Discovery",
      duration: "1 semaine",
      desc: "On échange sur votre besoin. Vous recevez un cadrage technique clair — pas un devis au doigt mouillé.",
    },
    {
      num: "02",
      icon: <Lightbulb size={18} />,
      title: "Prototypage",
      duration: "1–2 semaines",
      desc: "Maquettes et prototype cliquable. Vous voyez votre produit avant la première ligne de code.",
    },
    {
      num: "03",
      icon: <Code size={18} />,
      title: "Développement",
      duration: "4–8 semaines",
      desc: "Sprints de 2 semaines. Démo à chaque fin de sprint — zéro effet tunnel.",
    },
    {
      num: "04",
      icon: <Rocket size={18} />,
      title: "Livraison & suivi",
      duration: "continu",
      desc: "Déploiement, formation et support. Garantie corrective incluse.",
    },
  ];

  return (
    <section className="home-section">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="section-divider mb-20" />

        <div className="text-center mb-16">
          <span className="section-label reveal">// 03 — MÉTHODE</span>
          <h2 className="font-display text-display-lg font-extrabold reveal">
            Notre <span className="text-gradient">méthode</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto reveal reveal-delay-1" style={{ color: 'var(--text-secondary)' }}>
            Un process clair, des jalons réguliers, zéro surprise.
            <br />
            <span className="text-emerald-400 font-semibold">Délai moyen : 6 à 12 semaines.</span>
          </p>
        </div>

        <div className="timeline reveal" ref={timelineRef}>
          <div className="timeline-track">
            <div className="timeline-track-fill" />
          </div>

          {steps.map((s, i) => (
            <div key={i} className="timeline-step">
              <div className="timeline-dot">{s.num}</div>
              <h3 className="font-display text-base font-bold text-white">{s.title}</h3>
              <span className="mono text-xs" style={{ color: 'var(--text-tertiary)' }}>{s.duration}</span>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────
   5. NOS RÉALISATIONS — Case study cards
   ───────────────────────────────────── */
function RealisationsSection() {
  const projects = [
    {
      title: "Welyx",
      category: "SaaS",
      img: "/images/projects/welyx/dashboard.png",
      desc: "Plateforme de gestion assistée par IA pour indépendants. Devis, factures et pilotage d'activité — automatisés.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      link: "/projets#welyx",
    },
    {
      title: "Oview",
      category: "Application web",
      img: "/images/projects/oview/tdb_vue.png",
      desc: "Solution tout-en-un pour la restauration : menu digital, commandes, paiements et analytics en temps réel.",
      stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "/projets#oview",
    },
    {
      title: "StratGen",
      category: "SaaS",
      img: "/images/projects/stratgen/dashboard.png",
      desc: "Pilotage SEO collaboratif propulsé par l'IA. Audit, calendrier éditorial et dashboards.",
      stack: ["Next.js", "Python", "PostgreSQL", "Redis"],
      link: "/projets#stratgen",
    },
  ];

  return (
    <section className="home-section">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="section-divider mb-20" />

        <div className="text-center mb-14">
          <span className="section-label reveal">// 04 — NOS RÉALISATIONS</span>
          <h2 className="font-display text-display-lg font-extrabold reveal">
            Ce qu&apos;on a <span className="text-gradient">déjà construit</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto reveal reveal-delay-1" style={{ color: 'var(--text-secondary)' }}>
            Des produits en production, utilisés par de vrais utilisateurs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Link
              key={p.title}
              href={p.link}
              aria-label={`Voir le projet ${p.title}`}
              className={`block card group overflow-hidden reveal reveal-delay-${i}`}
            >
              <div className="aspect-video rounded-xl overflow-hidden bg-[var(--bg-tertiary)] ring-1 ring-[var(--border)]">
                <img
                  src={p.img} alt={p.title} loading="lazy" decoding="async"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                />
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display font-bold text-lg text-white">{p.title}</h3>
                  <span className="tag">{p.category}</span>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded" style={{ background: 'var(--bg-card)', color: 'var(--text-tertiary)', border: '1px solid var(--border)' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium group-hover:gap-3 transition-all" style={{ color: 'var(--accent-light)' }}>
                  Voir le projet <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* "Votre projet ici ?" card */}
        <div className="mt-5 reveal">
          <Link
            href="/contact"
            className="block card group text-center py-12"
            style={{ borderStyle: 'dashed', borderColor: 'var(--accent-border)' }}
          >
            <p className="font-display text-lg font-bold text-white">Votre projet ici ?</p>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              Décrivez votre besoin — on revient avec un cadrage technique.
            </p>
            <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium group-hover:gap-3 transition-all" style={{ color: 'var(--accent-light)' }}>
              Discuter de votre projet <ArrowRight size={14} />
            </span>
          </Link>
        </div>

        <div className="mt-10 text-center reveal">
          <Link href="/projets" className="btn-ghost inline-flex items-center gap-2">
            Toutes nos réalisations <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────
   6. STACK TECHNIQUE — Marquee
   ───────────────────────────────────── */
function StackSection() {
  const row1 = ["React", "Next.js", "TypeScript", "Node.js", "Python", "GraphQL"];
  const row2 = ["PostgreSQL", "MongoDB", "Redis", "Docker", "Azure", "AWS"];

  const renderRow = (techs: string[], reverse = false) => {
    const doubled = [...techs, ...techs];
    return (
      <div className="marquee-wrap">
        <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
          {doubled.map((name, i) => (
            <div key={i} className="marquee-item">
              <img
                src={`/images/stack/${name.toLowerCase().replace('.', '').replace(' ', '')}.png`}
                alt=""
                aria-hidden="true"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              {name}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="home-section">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="section-divider mb-20" />

        <div className="text-center mb-14">
          <span className="section-label reveal">// 05 — TECHNOLOGIES</span>
          <h2 className="font-display text-display-lg font-extrabold reveal">
            Notre <span className="text-gradient">stack</span>
          </h2>
        </div>
      </div>

      {/* Marquee — full width, no container */}
      <div className="space-y-4 reveal">
        {renderRow(row1)}
        {renderRow(row2, true)}
      </div>
    </section>
  );
}


/* ─────────────────────────────────────
   7. CHIFFRES CLÉS — Animated counters
   ───────────────────────────────────── */
function StatsSection() {
  const r1 = useRef<HTMLSpanElement>(null);
  const r2 = useRef<HTMLSpanElement>(null);
  const r3 = useRef<HTMLSpanElement>(null);
  const r4 = useRef<HTMLSpanElement>(null);

  useCountUp(r1, 6);
  useCountUp(r2, 3);
  useCountUp(r3, 24);
  useCountUp(r4, 100);

  const stats = [
    { ref: r1, suffix: "", label: "Produits livrés en production" },
    { ref: r2, suffix: "", label: "Plateformes SaaS en service" },
    { ref: r3, suffix: "h", label: "Délai max de première réponse" },
    { ref: r4, suffix: "%", label: "Code source livré au client" },
  ];

  return (
    <section className="home-section">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="section-divider mb-20" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className={`text-center reveal reveal-delay-${i}`}>
              <div className="text-4xl md:text-5xl font-extrabold" style={{ color: 'var(--accent-light)' }}>
                <span ref={s.ref}>0</span><span className="text-gradient">{s.suffix}</span>
              </div>
              <p className="mt-3 text-sm" style={{ color: 'var(--text-tertiary)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────
   8. TÉMOIGNAGES — Trustpilot style
   ───────────────────────────────────── */
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sophie Marchand",
      role: "Directrice Générale",
      company: "PME Services — Paris",
      /* TODO: remplacer par la vraie photo */
      avatar: null,
      initials: "SM",
      rating: 5,
      text: "Notre ancien prestataire nous avait laissés avec une app inutilisable. HEXAIT a repris le projet, audité le code, et reconstruit ce qui devait l'être. En 2 mois on avait une plateforme stable. La transparence à chaque étape, c'est ce qui fait la différence.",
    },
    {
      name: "Thomas Lefèvre",
      role: "CTO",
      company: "Startup SaaS — Lyon",
      avatar: null,
      initials: "TL",
      rating: 5,
      text: "J'avais besoin de renfort sur un projet complexe — pipeline data + IA + interface utilisateur. HEXAIT a su s'intégrer dans notre stack existante sans tout casser. Code propre, bien documenté, livrables dans les temps. Je recommande.",
    },
    {
      name: "Amira Benali",
      role: "Fondatrice",
      company: "E-commerce — Île-de-France",
      avatar: null,
      initials: "AB",
      rating: 5,
      text: "J'avais contacté 4 prestataires. HEXAIT est le seul qui m'a posé les bonnes questions sur mon business avant de parler technique. Le cadrage initial m'a évité de développer des fonctionnalités inutiles. Budget respecté, délais tenus.",
    },
    {
      name: "Mehdi Rousseau",
      role: "Gérant",
      company: "Cabinet de conseil — Paris",
      avatar: null,
      initials: "MR",
      rating: 5,
      text: "On gérait tout sur Excel et ça devenait ingérable. HEXAIT nous a construit un outil métier sur mesure en 8 semaines. Mon équipe a gagné 2h par jour. Et surtout, on est propriétaires du code — pas enfermés chez un éditeur.",
    },
  ];

  const Stars = ({ count }: { count: number }) => (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#22D3EE" stroke="#22D3EE" />
      ))}
    </div>
  );

  return (
    <section className="home-section">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="section-divider mb-20" />

        <div className="text-center mb-14">
          <span className="section-label reveal">// 07 — TÉMOIGNAGES</span>
          <h2 className="font-display text-display-lg font-extrabold reveal">
            Ce que disent <span className="text-gradient">nos clients</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto reveal reveal-delay-1" style={{ color: 'var(--text-secondary)' }}>
            Retours vérifiés de nos clients sur leurs projets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className={`card reveal reveal-delay-${i % 2}`}>
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                  style={{
                    background: 'var(--accent-muted)',
                    border: '1px solid var(--accent-border)',
                    color: 'var(--accent-light)',
                  }}
                >
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    t.initials
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                        {t.role} — {t.company}
                      </p>
                    </div>
                    <Stars count={t.rating} />
                  </div>

                  {/* Quote */}
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────
   9. CTA FINAL — Formulaire inline
   ───────────────────────────────────── */
function FinalCTASection() {
  const [sent, setSent] = useState(false);
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
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
    if (endpoint) {
      try { await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); } catch { /* noop */ }
    }
    setSent(true);
    setSending(false);
  }, []);

  return (
    <section className="cta-section">
      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left — copy */}
          <div className="reveal">
            <span className="section-label">// 08 — CONTACT</span>
            <h2 className="font-display text-display-lg font-extrabold">
              Prêt à construire
              <span className="block text-gradient mt-1">quelque chose ?</span>
            </h2>
            <p className="mt-5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Premier échange gratuit — on discute de vos besoins, sans engagement.
              Retour concret sous 24h.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Cadrage technique offert",
                "Proposition chiffrée sous 48h",
                "Interlocuteur senior du début à la fin",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 card p-4 inline-flex items-center gap-3">
              <Clock size={18} style={{ color: 'var(--accent)' }} />
              <div>
                <p className="text-sm font-semibold text-white">Disponibilité</p>
                <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Lun–Ven · 9h–18h CET · Réponse sous 24h</p>
              </div>
            </div>
          </div>

          {/* Right — inline form */}
          <div className="card p-8 reveal reveal-delay-1">
            {sent ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4" style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}>
                  <CheckCircle2 size={28} className="text-emerald-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Message envoyé</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  On revient vers vous sous 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-lg font-bold text-white">Contact rapide</h3>
                <div>
                  <label htmlFor="cta-name" className="text-sm" style={{ color: 'var(--text-secondary)' }}>Nom *</label>
                  <input id="cta-name" name="name" required placeholder="Jean Dupont" className="field mt-1.5" />
                </div>
                <div>
                  <label htmlFor="cta-email" className="text-sm" style={{ color: 'var(--text-secondary)' }}>Email *</label>
                  <input id="cta-email" name="email" type="email" required placeholder="vous@domaine.com" className="field mt-1.5" />
                </div>
                <div>
                  <label htmlFor="cta-message" className="text-sm" style={{ color: 'var(--text-secondary)' }}>Décrivez votre besoin *</label>
                  <textarea
                    id="cta-message" name="message" required rows={4}
                    placeholder="Ex: J'ai besoin d'une application pour gérer les devis de mon équipe de 15 personnes..."
                    className="field mt-1.5"
                  />
                </div>
                <button type="submit" disabled={sending} className="btn-cta w-full justify-center gap-2 text-base">
                  {sending ? "Envoi..." : (<>Envoyer <Send size={16} /></>)}
                </button>
                <p className="text-xs text-center" style={{ color: 'var(--text-tertiary)' }}>
                  Pas de spam. Vos données restent confidentielles.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
