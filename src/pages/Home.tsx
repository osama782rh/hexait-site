import { Link } from "react-router-dom";
import {
  ArrowRight, Shield, Server, Code, Rocket, Wrench, Lock, Lightbulb, PenTool,
  Workflow, CheckCircle2, Activity, Calendar, ListChecks, BookOpen, GitBranch, ShieldCheck, KeyRound, FileCode2, Clock,
  Users, Zap, Globe, Cpu
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Section from "../components/Section";
import type { JSX } from "react";
import React from 'react';
import logo from "../assets/logo.png";

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

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setPrefers(mq.matches);
    onChange(); mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);
  return prefers;
}

function useCountUp(
  ref: React.RefObject<HTMLElement | null>,
  end: number,
  opts: { duration?: number; decimals?: number } = {}
) {
  const { duration = 1400, decimals = 0 } = opts;
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    if (prefersReduced) { ref.current.textContent = end.toFixed(decimals); return; }

    let raf = 0, startTs = 0;
    const step = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min(1, (ts - startTs) / duration);
      const eased = 1 - Math.pow(1 - p, 4); // easeOutQuart
      const val = end * eased;
      if (ref.current) ref.current.textContent = (decimals ? val.toFixed(decimals) : Math.round(val).toString());
      if (p < 1) raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) { raf = requestAnimationFrame(step); io.disconnect(); }
    }, { threshold: 0.4 });

    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [ref, end, duration, decimals, prefersReduced]);
}

/** ==== Home Page ==== */
export default function Home() {
  useRevealOnScroll();

  return (
    <>
      {/* HERO vidéo plein écran - Structure optimisée */}
      <div className="video-wrap min-h-screen relative overflow-hidden">
        {/* Video avec fallback optimisé */}
        <video
          className="video-bg absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/services/services.jpg"
          aria-hidden="true"
          onError={(e) => { 
            const target = e.target as HTMLVideoElement;
            target.style.display = 'none';
            // Fallback image de fond
            const fallback = document.createElement('div');
            fallback.className = 'absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 to-navy-darker';
            target.parentNode?.insertBefore(fallback, target);
          }}
        >
          <source src="/images/hero/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay pour meilleure lisibilité */}
        <div className="video-veil absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />

        {/* Contenu principal du hero - Structure corrigée */}
        <section className="hero relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8" aria-labelledby="main-title">
          <div className="container mx-auto max-w-6xl text-center">
            
            {/* Logo marque */}
            <div className="reveal mb-6">
              <img src={logo} alt="HEXAIT" className="h-40 w-auto mx-auto pointer-events-none select-none" />
            </div>

            {/* Titre principal */}
            <h1 id="main-title" className="hero-title reveal-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-6">
              Vos logiciels métier,
              <span className="block text-gradient bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
                conçus pour durer
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="hero-sub text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed reveal reveal-delay-1 mb-8">
              HEXAIT développe les plateformes web, SaaS et outils internes
              qui structurent votre activité — de l'architecture au déploiement.
            </p>

            {/* ACTIONS PRINCIPALES - Zone séparée et claire */}
            <div className="hero-actions reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="btn-cta group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 outline-none"
              >
                Cadrer mon projet
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="btn-ghost group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 outline-none"
              >
                Découvrir nos services
              </Link>
            </div>

            {/* INDICATEURS DE CONFIANCE - Zone séparée avec bon espacement */}
            <div className="hero-trust-indicators reveal reveal-delay-3 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-slate-300">
                <span className="trust-item flex items-center gap-2 px-4 py-3 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                  Vous êtes propriétaire du code
                </span>
                <span className="trust-item flex items-center gap-2 px-4 py-3 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Shield size={18} className="text-emerald-400 flex-shrink-0" />
                  Sécurité intégrée dès la conception
                </span>
                <span className="trust-item flex items-center gap-2 px-4 py-3 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Zap size={18} className="text-emerald-400 flex-shrink-0" />
                  Livraison itérative, pas d'effet tunnel
                </span>
              </div>
            </div>
          </div>

          {/* Indicateur de scroll */}
          <div className="scroll-cue absolute bottom-8 left-1/2 transform -translate-x-1/2" aria-hidden="true">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <span className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </section>
      </div>

      {/* Services clés */}
      <Section className="grid-3">
        {[
          { icon: <Code />, title: "Développement Web & SaaS", desc: "Plateformes métier, back-offices et applications SaaS — React, Next.js, Node.js, Python" },
          { icon: <Server />, title: "Cloud & DevOps", desc: "Infrastructure Azure/AWS, CI/CD, conteneurisation Docker et monitoring en production" },
          { icon: <Shield />, title: "Sécurité Applicative", desc: "Audits de code, protection OWASP, authentification robuste et chiffrement des données sensibles" },
        ].map((s, i) => (
          <div key={i} className={`card reveal reveal-delay-${i}`}>
            <div className="text-cyan-300" aria-hidden="true">{s.icon}</div>
            <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
            <p className="text-slate-300">{s.desc}</p>
          </div>
        ))}
      </Section>

      <TechExpertise />
      <TrustBuilder />
      <StatsPromises />
      <WorkflowSection />
      <Projects />
      <AboutIntro />
      <CallToAction />
    </>
  );
}

/** ==== COMPOSANTS SUIVANTS (inchangés mais inclus pour complétude) ==== */

/* Section expertise technique */
function TechExpertise() {
  const expertises = [
    { icon: <Cpu size={20} />, title: "Architecture pensée pour évoluer", desc: "APIs RESTful & GraphQL, microservices, bases relationnelles et NoSQL optimisées" },
    { icon: <Globe size={20} />, title: "Performance mesurable", desc: "Core Web Vitals maîtrisés, SSR/SSG, cache intelligent et CDN — chaque milliseconde compte" },
    { icon: <Users size={20} />, title: "Suivi de projet structuré", desc: "Sprints courts, démos régulières, board projet partagé — vous gardez la visibilité à chaque étape" },
  ];

  const techs = [
    { name: "React", src: "/images/stack/react.png" },
    { name: "Next.js", src: "/images/stack/nextjs.png" },
    { name: "TypeScript", src: "/images/stack/ts.png" },
    { name: "Node.js", src: "/images/stack/node.png" },
    { name: "Python", src: "/images/stack/python.png" },
    { name: "Azure", src: "/images/stack/azure.png" },
    { name: "AWS", src: "/images/stack/aws.png" },
    { name: "Docker", src: "/images/stack/docker.png" },
    { name: "PostgreSQL", src: "/images/stack/postgresql.png" },
    { name: "MongoDB", src: "/images/stack/mongodb.png" },
    { name: "GraphQL", src: "/images/stack/graphql.png" },
    { name: "Redis", src: "/images/stack/redis.png" },
  ];

  return (
    <Section className="bg-white/5">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12 reveal">
          Notre <span className="text-gradient">expertise technique</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {expertises.map((exp, i) => (
            <div key={i} className={`card text-center reveal reveal-delay-${i}`}>
              <div className="flex justify-center">
                <div className="p-3 bg-cyan-400/10 rounded-xl text-cyan-300">
                  {exp.icon}
                </div>
              </div>
              <h3 className="mt-4 text-xl font-bold">{exp.title}</h3>
              <p className="mt-2 text-slate-300">{exp.desc}</p>
            </div>
          ))}
        </div>

        {/* Stack technique élargie */}
        <div className="mt-12 card">
          <h3 className="text-lg font-bold text-center mb-6">Technologies maîtrisées</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techs.map((tech, i) => (
              <div key={i} className="flex flex-col items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="h-8 w-8 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'h-8 w-8 bg-slate-600 rounded flex items-center justify-center text-xs text-white font-bold';
                    fallback.textContent = tech.name.slice(0, 3);
                    target.parentNode?.insertBefore(fallback, target);
                  }}
                />
                <span className="mt-2 text-xs text-slate-400">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* Preuves sans partenaires */
function TrustBuilder() {
  const proofs = [
    { icon: <FileCode2 size={18} />, label: "Propriété intégrale du code", desc: "Chaque ligne livrée vous appartient — avec la documentation technique associée" },
    { icon: <ShieldCheck size={18} />, label: "Standards industriels", desc: "Couverture de tests, revues de code systématiques, intégration continue" },
    { icon: <KeyRound size={18} />, label: "Visibilité permanente", desc: "Accès au board projet, reporting hebdomadaire, zéro zone d'ombre" },
  ];

  return (
    <Section>
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Garanties */}
          <div className="card reveal">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Shield className="text-cyan-300" /> Nos engagements
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Cadrage technique avant tout engagement</li>
              <li>• Code source livré avec documentation</li>
              <li>• Démonstrations à chaque itération</li>
              <li>• Garantie corrective post-livraison incluse</li>
            </ul>
          </div>

          {/* Qualité */}
          <div className="card reveal">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <CheckCircle2 className="text-cyan-300" /> Qualité de code
            </h3>
            <div className="mt-4 space-y-3">
              {[
                "Code propre et maintenable",
                "Tests automatisés",
                "Revues de code systématiques",
                "Documentation technique",
                "Performance optimisée",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={16} className="text-cyan-300 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preuves publiques */}
          <div className="card reveal">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <GitBranch className="text-cyan-300" /> Notre approche
            </h3>
            <div className="mt-3 space-y-3 text-sm">
              {proofs.map(p => (
                <div key={p.label} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-0.5 text-cyan-300">{p.icon}</span>
                  <div>
                    <p className="font-medium">{p.label}</p>
                    <p className="text-slate-400">{p.desc}</p>
                  </div>
                </div>
              ))}
              <div className="pt-2 flex gap-3">
                <Link to="/blog" className="btn-ghost inline-flex items-center gap-2">
                  <BookOpen size={16}/> Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* Stats d'engagement honnêtes */
function StatsPromises() {
  const r1 = useRef<HTMLSpanElement>(null);
  const r2 = useRef<HTMLSpanElement>(null);
  const r3 = useRef<HTMLSpanElement>(null);
  const r4 = useRef<HTMLSpanElement>(null);

  useCountUp(r1, 24);
  useCountUp(r2, 7);
  useCountUp(r3, 14);
  useCountUp(r4, 30);

  const items = [
    { ref: r1, suffix: "h", label: "Réponse à votre demande" },
    { ref: r2, suffix: "j", label: "Premier prototype" },
    { ref: r3, suffix: "j", label: "Cycle de développement" },
    { ref: r4, suffix: "j", label: "Support après livraison" },
  ];

  return (
    <Section className="bg-white/5 border-y border-white/10">
      <div className="container grid md:grid-cols-4 gap-6">
        {items.map((s, i) => (
          <div key={i} className={`text-center reveal reveal-delay-${i}`}>
            <div className="text-4xl font-extrabold text-cyan-300">
              <span ref={s.ref}>0</span>{s.suffix}
            </div>
            <p className="text-slate-300 mt-2 text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function WorkflowSection() {
  type Step = {
    icon: JSX.Element;
    title: string;
    duration: string;
    deliverables: string[];
    result: string;
  };

  const steps: Step[] = [
    { icon: <Lightbulb />, title: "1) Analyse & Objectifs", duration: "2–3 jours", deliverables: ["Échanges approfondis", "Spécifications", "Planification"], result: "Compréhension claire de vos besoins et objectifs." },
    { icon: <ListChecks />, title: "2) Conception & Architecture", duration: "3–5 jours", deliverables: ["Architecture technique", "Design de l'application", "Planning détaillé"], result: "Base solide pour le développement." },
    { icon: <PenTool />, title: "3) Design & Interface", duration: "1 semaine", deliverables: ["Maquettes", "Prototype interactif", "Validation"], result: "Design approuvé et expérience utilisateur définie." },
    { icon: <Wrench />, title: "4) Développement", duration: "2–6 semaines", deliverables: ["Développement itératif", "Tests continus", "Versions de test"], result: "Application fonctionnelle et testée." },
    { icon: <Lock />, title: "5) Sécurité & Qualité", duration: "en continu", deliverables: ["Tests de sécurité", "Optimisations", "Revue de code"], result: "Code sécurisé et de qualité professionnelle." },
    { icon: <Rocket />, title: "6) Livraison & Formation", duration: "2–4 jours", deliverables: ["Déploiement", "Documentation", "Formation"], result: "Application en production et équipe autonome." },
  ];

  const pillars = [
    { icon: <Calendar size={16} />, text: "Points réguliers sur l'avancement" },
    { icon: <Activity size={16} />, text: "Tests qualité à chaque étape" },
    { icon: <CheckCircle2 size={16} />, text: "Validation client à chaque phase" },
  ];

  return (
    <Section>
      <div className="container">
        <div className="flex items-center gap-3">
          <Workflow className="text-cyan-300" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Notre méthode de travail</h2>
        </div>

        <ul className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
          {pillars.map((p, i) => (
            <li key={i} className="inline-flex items-center gap-2 bg-white/5 ring-1 ring-white/10 rounded-full px-3 py-1 reveal">
              {p.icon} {p.text}
            </li>
          ))}
        </ul>

        <div className="mt-8 grid md:grid-cols-3 gap-6 timeline">
          {steps.map((s, i) => (
            <article key={s.title} className={`card reveal reveal-delay-${i % 3}`}>
              <div className="flex items-center justify-between">
                <div className="text-cyan-300" aria-hidden="true">{s.icon}</div>
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

        <div className="mt-8 card p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 reveal">
          <p className="text-slate-200">
            Développement itératif • Sécurité intégrée • Livraison progressive
          </p>
          <div className="flex gap-3">
            <Link to="/services" className="btn-ghost">Voir nos services</Link>
            <Link to="/contact" className="btn-cta">Démarrer un projet</Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  const items = [
    { title: "Welyx — Plateforme SaaS", img: "/images/projects/welyx/dashboard.png", desc: "Gestion assistée par IA pour indépendants et PME : génération de devis, facturation automatique et pilotage d'activité.", link: "/projets#welyx" },
    { title: "Oview — SaaS Restauration", img: "/images/projects/oview/tdb_vue.png", desc: "Solution tout-en-un pour restaurants : menu digital, commandes, écran cuisine, paiements et analytics temps réel.", link: "/projets#oview" },
    { title: "StratGen — Plateforme SEO", img: "/images/projects/stratgen/dashboard.png", desc: "Pilotage SEO collaboratif propulsé par l'IA : audit concurrentiel, calendrier éditorial et dashboards en temps réel.", link: "/projets#stratgen" },
  ];

  return (
    <Section>
      <div className="container">
        <div className="flex items-center gap-3">
          <Rocket className="text-cyan-300" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Nos réalisations</h2>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <Link
              key={p.title}
              to={p.link}
              aria-label={`Voir le projet : ${p.title}`}
              className={`block card overflow-hidden reveal reveal-delay-${i} focus:outline-none focus:ring-2 focus:ring-cyan-400/40`}
            >
              <div className="aspect-video rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="text-slate-300 text-sm">{p.desc}</p>
                <span className="inline-flex items-center gap-2 mt-3 text-cyan-300 hover:text-cyan-200">
                  Voir le projet <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

function AboutIntro() {
  return (
    <Section>
      <div className="container grid md:grid-cols-2 gap-6 items-center">
        <div className="reveal">
          <h2 className="text-2xl md:text-3xl font-extrabold">L'ingénierie logicielle, sans compromis</h2>
          <p className="mt-3 text-slate-300">
            HEXAIT est une société d'ingénierie fondée par un développeur senior.
            Nous concevons des plateformes web et SaaS avec une exigence de qualité industrielle — parce que le code que vous financez doit tenir dans la durée.
          </p>
          <ul className="mt-4 list-dash">
            <li>Maîtrise complète de la chaîne : front-end, back-end, infrastructure</li>
            <li>Code livré documenté, testé et auditable</li>
            <li>Un interlocuteur technique unique, du cadrage à la mise en production</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <Link to="/a-propos" className="btn-ghost">En savoir plus</Link>
            <Link to="/contact" className="btn-cta">Cadrer mon projet</Link>
          </div>
        </div>
        <div className="card reveal">
          <div className="flex items-center gap-3">
            <Clock className="text-cyan-300" /><p className="text-slate-200 font-semibold">Disponibilité</p>
          </div>
          <p className="text-slate-400 mt-1 text-sm">Lun–Ven · 9h–18h CET · premier retour sous 24h ouvrées</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
            <div className="bg-white/5 ring-1 ring-white/10 rounded-xl p-3">
              <p className="font-semibold">Communication</p>
              <p className="text-slate-400">Points réguliers et transparence</p>
            </div>
            <div className="bg-white/5 ring-1 ring-white/10 rounded-xl p-3">
              <p className="font-semibold">Flexibilité</p>
              <p className="text-slate-400">Adaptation à vos contraintes</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function CallToAction() {
  return (
    <Section className="cta-section">
      <div className="cta-container">
        <h3 className="text-3xl md:text-4xl font-extrabold reveal">
          Passez à <span className="text-gradient">l'étape suivante</span>
        </h3>
        <p className="mt-4 text-xl text-slate-300 reveal reveal-delay-1">
          Cadrage technique offert • Proposition sous 48h ouvrées • Interlocuteur technique dédié
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-4 reveal reveal-delay-2">
          <div className="text-center">
            <CheckCircle2 className="mx-auto text-emerald-400 mb-2" size={24} />
            <p className="text-sm text-slate-300">Adapté à votre métier</p>
          </div>
          <div className="text-center">
            <Shield className="mx-auto text-emerald-400 mb-2" size={24} />
            <p className="text-sm text-slate-300">Testé, documenté, auditable</p>
          </div>
          <div className="text-center">
            <Rocket className="mx-auto text-emerald-400 mb-2" size={24} />
            <p className="text-sm text-slate-300">Délais tenus, pas de rallonge</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center reveal reveal-delay-3">
          <Link 
            to="/contact" 
            className="btn-cta text-lg px-8 py-4 font-semibold outline-none transition-all"
          >
            Cadrer mon projet
          </Link>
          <Link 
            to="/services" 
            className="btn-ghost text-lg px-8 py-4 outline-none transition-all"
          >
            Découvrir nos services
          </Link>
        </div>

        <p className="mt-6 text-sm text-slate-400 reveal reveal-delay-4">
          Sans engagement • Cadrage technique inclus • Réponse sous 24h ouvrées
        </p>
      </div>
    </Section>
  );
}
