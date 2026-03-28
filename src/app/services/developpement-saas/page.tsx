import type { Metadata } from 'next';
import Section from '@/components/Section';
import Link from 'next/link';
import {
  Cloud, Users, CreditCard, Lock, Layers, Rocket, TrendingUp,
  Database, Settings, Server, ArrowRight, CheckCircle,
  BarChart3, Shield, Zap, GitBranch, Globe,
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Developpement SaaS sur mesure -- De l'idee au produit | HEXAIT",
  description:
    "Developpement SaaS sur mesure : architecture multi-tenant, facturation integree, authentification, scalabilite. De l'idee au MVP puis a la croissance. HEXAIT.",
  alternates: { canonical: '/services/developpement-saas' },
  openGraph: {
    title: "Developpement SaaS sur mesure -- De l'idee au produit | HEXAIT",
    description:
      "Creer un SaaS avec HEXAIT : MVP en 4-8 semaines, architecture scalable, multi-tenant, billing automatise.",
  },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <span className="hero-badge">Developpement SaaS</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
            <span className="text-gradient">Developpement SaaS sur mesure</span>
            <br />De l&apos;idee au produit
          </h1>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Vous souhaitez creer un SaaS ? HEXAIT vous accompagne de la conception a la mise
            sur le marche. Architecture multi-tenant, gestion des abonnements, authentification
            securisee et infrastructure scalable -- nous construisons des produits SaaS
            prets a grandir avec votre base d&apos;utilisateurs.
          </p>
          <div className="mt-6 flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-cta">Lancer mon SaaS</Link>
            <Link href="/services" className="btn-ghost">Tous nos services</Link>
          </div>
        </div>
      </Section>

      {/* Qu&apos;est-ce qu&apos;un SaaS */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Cloud className="text-[var(--accent-light)]" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-extrabold">Qu&apos;est-ce qu&apos;un SaaS ?</h2>
            </div>
            <p className="text-[var(--text-secondary)] mt-3">
              Le Software as a Service (SaaS) est un modele de distribution logicielle ou
              l&apos;application est hebergee dans le cloud et accessible via un navigateur web.
              Les utilisateurs paient un abonnement mensuel ou annuel plutot que d&apos;acheter
              une licence perpetuelle.
            </p>
            <p className="text-[var(--text-secondary)] mt-3">
              Ce modele offre des avantages majeurs : revenus recurrents et previsibles pour l&apos;editeur,
              mises a jour automatiques pour les utilisateurs, cout d&apos;entree reduit et accessibilite
              depuis n&apos;importe quel appareil. Des outils comme Slack, Notion ou Stripe sont des
              exemples celebres de SaaS qui ont revolutionne leurs marches respectifs.
            </p>
            <p className="text-[var(--text-secondary)] mt-3">
              Creer un SaaS necessite une expertise specifique en architecture logicielle, en gestion
              de l&apos;isolation des donnees entre clients (multi-tenancy) et en infrastructure cloud
              capable de supporter une montee en charge progressive.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold text-lg">Les avantages du modele SaaS</h3>
            <ul className="mt-4 space-y-3">
              {[
                'Revenus recurrents (MRR/ARR) previsibles',
                'Scalabilite : ajoutez des utilisateurs sans friction',
                'Mises a jour centralisees pour tous vos clients',
                'Cout d&apos;acquisition client (CAC) optimisable',
                'Donnees centralisees et analyses en temps reel',
                'Time-to-value rapide pour vos utilisateurs',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="text-[var(--accent-light)] mt-0.5 shrink-0" size={18} aria-hidden="true" />
                  <span className="text-[var(--text-secondary)] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Notre expertise SaaS */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Settings className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Notre expertise SaaS</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Le developpement SaaS sur mesure exige une maitrise de composants techniques specifiques.
          Nous avons l&apos;experience concrete de chacun d&apos;entre eux.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Users aria-hidden="true" />,
              title: 'Architecture multi-tenant',
              desc: 'Isolation logique ou physique des donnees entre clients. Chaque organisation dispose de son espace securise tout en partageant la meme infrastructure. Nous implementons des strategies de tenancy adaptees a votre modele : base de donnees partagee avec discrimination par tenant, schemas separes ou instances dediees.',
            },
            {
              icon: <CreditCard aria-hidden="true" />,
              title: 'Facturation & abonnements',
              desc: 'Integration Stripe ou equivalent pour la gestion complete du cycle de facturation : abonnements mensuels et annuels, periodes d&apos;essai, upgrades, downgrades, prorating, factures automatiques et gestion des impayees. Portail client en libre-service pour la gestion du compte.',
            },
            {
              icon: <Lock aria-hidden="true" />,
              title: 'Authentification & autorisations',
              desc: 'Systeme d&apos;authentification robuste avec SSO (SAML, OAuth2), MFA, gestion des roles et permissions granulaires. Chaque utilisateur n&apos;accede qu&apos;aux ressources autorisees. Support des invitations d&apos;equipe et gestion des organisations.',
            },
            {
              icon: <TrendingUp aria-hidden="true" />,
              title: 'Scalabilite horizontale',
              desc: 'Architecture concue pour supporter 10 comme 10 000 utilisateurs sans rearchitecture. Load balancing, mise en cache intelligente (Redis), queues de traitement asynchrone et auto-scaling. Votre infrastructure s&apos;adapte automatiquement a la demande.',
            },
            {
              icon: <BarChart3 aria-hidden="true" />,
              title: 'Analytics & metriques',
              desc: 'Tableaux de bord embarques pour vos utilisateurs et metriques internes pour votre equipe produit. Suivi de l&apos;engagement, taux de churn, usage des fonctionnalites et indicateurs metier personnalises pour piloter votre croissance.',
            },
            {
              icon: <Shield aria-hidden="true" />,
              title: 'Securite & conformite',
              desc: 'Chiffrement des donnees au repos et en transit, gestion securisee des secrets, journalisation des acces et conformite RGPD. Nous implementons les bonnes pratiques de securite des le premier jour de developpement.',
            },
          ].map((item) => (
            <article key={item.title} className="card">
              <div className="text-[var(--accent-light)]">{item.icon}</div>
              <h3 className="font-bold mt-2 text-lg">{item.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm mt-2">{item.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Approche MVP */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Rocket className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">L&apos;approche MVP : lancer vite, iterer souvent</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Creer un SaaS ne signifie pas construire toutes les fonctionnalites en une fois.
          Notre approche privilegiee : livrer un MVP (Minimum Viable Product) en 4 a 8 semaines,
          puis iterer en fonction des retours de vos premiers utilisateurs.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: 'Phase 1',
              title: 'MVP -- 4 a 8 semaines',
              items: [
                'Fonctionnalites coeur identifiees',
                'Architecture scalable des le depart',
                'Authentification et gestion des comptes',
                'Deploiement et monitoring',
                'Premiers beta-testeurs',
              ],
            },
            {
              step: 'Phase 2',
              title: 'Croissance -- 2 a 4 mois',
              items: [
                'Iterations basees sur les feedbacks',
                'Integration du billing (Stripe)',
                'Onboarding automatise',
                'Premieres optimisations de performance',
                'Enrichissement fonctionnel',
              ],
            },
            {
              step: 'Phase 3',
              title: 'Scale -- en continu',
              items: [
                'Optimisation de l&apos;infrastructure',
                'Analytics avancees et A/B testing',
                'API publique et integrations tierces',
                'Internationalisation (i18n)',
                'Equipe et processus de support',
              ],
            },
          ].map((phase) => (
            <div key={phase.step} className="card">
              <span className="text-sm font-semibold text-gradient">{phase.step}</span>
              <h3 className="font-bold mt-2 text-lg">{phase.title}</h3>
              <ul className="mt-3 space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="text-[var(--accent-light)] mt-0.5 shrink-0" size={16} aria-hidden="true" />
                    <span className="text-[var(--text-secondary)] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Stack technique */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Zap className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Stack technique SaaS</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Des technologies choisies pour leur fiabilite, leur performance et leur ecosysteme.
          Chaque brique est selectionnee en fonction de votre contexte metier.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { category: 'Front-end', items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand / Redux'] },
            { category: 'Back-end', items: ['Node.js / NestJS', 'Python / FastAPI', 'GraphQL / REST', 'WebSockets'] },
            { category: 'Donnees', items: ['PostgreSQL', 'Redis (cache)', 'Prisma ORM', 'Elasticsearch'] },
            { category: 'Infrastructure', items: ['Docker', 'Azure / AWS', 'CI/CD (GitHub Actions)', 'Monitoring (Grafana)'] },
          ].map((stack) => (
            <div key={stack.category} className="card">
              <h3 className="font-bold text-sm uppercase tracking-wider text-[var(--accent-light)]">
                {stack.category}
              </h3>
              <ul className="mt-3 space-y-1">
                {stack.items.map((item) => (
                  <li key={item} className="text-[var(--text-secondary)] text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Modeles de pricing SaaS */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <CreditCard className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Modeles de tarification SaaS</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Nous implementons le modele de pricing adapte a votre strategie commerciale.
          Chaque modele est configurable et evolutif.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Freemium', desc: 'Offre gratuite limitee pour attirer des utilisateurs, avec conversion vers des plans payants pour debloquer des fonctionnalites avancees.' },
            { title: 'Par paliers', desc: 'Plans Starter, Pro, Enterprise avec des seuils de fonctionnalites et de quotas differents. Le modele le plus repandu.' },
            { title: 'A l&apos;usage', desc: 'Facturation basee sur la consommation reelle (nombre de transactions, d&apos;appels API ou de stockage). Flexibilite maximale.' },
            { title: 'Par siege', desc: 'Tarification par utilisateur actif, adaptee aux outils collaboratifs. Encourage l&apos;adoption au sein des equipes.' },
          ].map((model) => (
            <div key={model.title} className="card">
              <h3 className="font-bold">{model.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm mt-2">{model.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projets de reference */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Globe className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Projets SaaS realises par HEXAIT</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Decouvrez des exemples concrets de produits SaaS que nous avons concu et developpe.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <article className="card">
            <h3 className="font-bold text-lg">Welyx -- SaaS de gestion pour professionnels</h3>
            <p className="text-[var(--text-secondary)] text-sm mt-2">
              Welyx est une plateforme SaaS complete concue pour les professionnels du bien-etre et
              de la sante. Le produit integre la gestion de rendez-vous en ligne, la facturation
              automatisee, le suivi des dossiers clients et un portail de reservation pour les
              patients. Architecture multi-tenant avec isolation des donnees par etablissement,
              paiement en ligne via Stripe et notifications automatiques.
            </p>
            <Link href="/projets" className="text-[var(--accent-light)] text-sm mt-3 inline-flex items-center gap-1 hover:underline">
              Voir le projet <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </article>
          <article className="card">
            <h3 className="font-bold text-lg">Oview -- Plateforme d&apos;analytics</h3>
            <p className="text-[var(--text-secondary)] text-sm mt-2">
              Oview est un outil SaaS de monitoring et d&apos;analytics developpe par HEXAIT.
              La plateforme centralise les indicateurs cles de performance de vos applications
              et services. Dashboards personnalisables en temps reel, alertes configurables,
              rapports automatiques et integration avec les principaux outils du marche.
              Concu pour supporter des volumes de donnees importants grace a une architecture
              evenementielle et du traitement asynchrone.
            </p>
            <Link href="/projets" className="text-[var(--accent-light)] text-sm mt-3 inline-flex items-center gap-1 hover:underline">
              Voir le projet <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </article>
        </div>
      </Section>

      {/* Infrastructure & considerations */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Server className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Infrastructure et considerations techniques</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-6">
          Un SaaS repose sur une infrastructure fiable et capable d&apos;absorber la croissance.
          Voici les sujets cles que nous adressons systematiquement.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: <Database aria-hidden="true" />, title: 'Haute disponibilite', desc: 'Replication de bases de donnees, failover automatique et deploiements zero-downtime pour garantir un uptime superieur a 99,9 %.' },
            { icon: <GitBranch aria-hidden="true" />, title: 'CI/CD automatise', desc: 'Pipeline de deploiement continu : chaque commit est teste, valide et deploye automatiquement en environnement de staging puis de production.' },
            { icon: <Shield aria-hidden="true" />, title: 'Sauvegardes et reprise', desc: 'Sauvegardes automatiques quotidiennes, plan de reprise d&apos;activite (PRA) documente et teste regulierement.' },
            { icon: <TrendingUp aria-hidden="true" />, title: 'Optimisation des couts', desc: 'Dimensionnement adapte a votre trafic reel avec auto-scaling. Pas de sur-provisionnement inutile en phase de demarrage.' },
          ].map((item) => (
            <div key={item.title} className="card flex items-start gap-3">
              <div className="text-[var(--accent-light)] shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Liens vers autres services */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
          Services complementaires
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/services/developpement-web', label: 'Developpement Web' },
            { href: '/services/cloud-devops', label: 'Cloud & DevOps' },
            { href: '/services/audit-technique', label: 'Audit Technique' },
            { href: '/services/ux-ui-design', label: 'UX/UI Design' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="card text-center hover:border-[var(--accent-light)] transition-colors group">
              <span className="font-semibold group-hover:text-[var(--accent-light)] transition-colors">{link.label}</span>
              <ArrowRight className="mx-auto mt-2 text-[var(--text-tertiary)] group-hover:text-[var(--accent-light)] transition-colors" size={18} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <Section>
        <div className="text-center">
          <div className="card p-10 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Pret a <span className="text-gradient">creer votre SaaS</span> ?
            </h2>
            <p className="mt-3 text-[var(--text-secondary)] max-w-xl mx-auto">
              Cadrage technique offert. Nous analysons votre idee, definissons le perimetre
              de votre MVP et vous proposons une feuille de route concrete sous 48 heures.
            </p>
            <div className="mt-6 flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn-cta">Lancer mon projet SaaS</Link>
              <Link href="/projets" className="btn-ghost">Voir nos realisations</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
