import type { Metadata } from 'next';
import Section from '@/components/Section';
import Link from 'next/link';
import {
  Search, Shield, Gauge, FileText, Bug, AlertTriangle,
  ArrowRight, CheckCircle, Code, Server, Lock,
  Eye, ClipboardList, Zap, Users, GitBranch,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Audit Technique & Securite -- Analyse de votre code et infrastructure | HEXAIT',
  description:
    'Audit technique de site web et audit de code source a Paris. Analyse de la qualite du code, securite, performance, architecture et dependances. Rapport detaille et plan d&apos;action. HEXAIT.',
  alternates: { canonical: '/services/audit-technique' },
  openGraph: {
    title: 'Audit Technique & Securite -- Analyse de votre code et infrastructure | HEXAIT',
    description:
      'Audit technique complet : code, securite, performance, architecture. Rapport detaille avec plan d&apos;action priorise.',
  },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <span className="hero-badge">Audit Technique</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
            <span className="text-gradient">Audit technique</span> & securite
          </h1>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Votre application presente des lenteurs ? Votre code source devient difficile a
            maintenir ? Vous suspectez des vulnerabilites de securite ? HEXAIT realise un
            audit technique complet de votre site web, de votre code source et de votre
            infrastructure pour identifier les problemes et vous fournir un plan d&apos;action
            concret et priorise.
          </p>
          <div className="mt-6 flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-cta">Demander un audit</Link>
            <Link href="/services" className="btn-ghost">Tous nos services</Link>
          </div>
        </div>
      </Section>

      {/* Ce que nous auditons */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Search className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Ce que nous auditons</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Notre audit technique couvre six dimensions essentielles de votre application.
          Chaque axe est analyse en profondeur avec des outils specialises et une revue
          manuelle par un developpeur senior.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Code aria-hidden="true" />,
              title: 'Qualite du code',
              desc: 'Analyse statique du code source : complexite cyclomatique, duplication, respect des conventions, couverture de tests et dette technique. Nous evaluons la lisibilite, la maintenabilite et la coherence architecturale de votre codebase. Un code propre et bien structure est la base d&apos;une application perenne.',
            },
            {
              icon: <Shield aria-hidden="true" />,
              title: 'Vulnerabilites de securite',
              desc: 'Identification des failles de securite selon le referentiel OWASP Top 10 : injections SQL, XSS, CSRF, mauvaise gestion de l&apos;authentification, exposition de donnees sensibles et configurations non securisees. Nous scannons egalement les dependances pour detecter les packages compromis.',
            },
            {
              icon: <Gauge aria-hidden="true" />,
              title: 'Performance',
              desc: 'Analyse des temps de chargement (Core Web Vitals), de la taille des bundles, du rendu serveur, de l&apos;optimisation des requetes base de donnees et de la strategie de cache. Chaque milliseconde gagnee ameliore l&apos;experience utilisateur et le referencement naturel.',
            },
            {
              icon: <Server aria-hidden="true" />,
              title: 'Architecture',
              desc: 'Evaluation de l&apos;architecture technique : separation des responsabilites, couplage entre modules, scalabilite, gestion des erreurs et resilience. Nous verifions que l&apos;architecture supporte la croissance prevue et facilite l&apos;ajout de nouvelles fonctionnalites.',
            },
            {
              icon: <Bug aria-hidden="true" />,
              title: 'Dependances',
              desc: 'Inventaire et analyse de toutes les dependances tierces : versions obsoletes, vulnerabilites connues (CVE), licences incompatibles et alternatives plus legeres. Les dependances non maintenues representent un risque technique et securitaire majeur.',
            },
            {
              icon: <GitBranch aria-hidden="true" />,
              title: 'Pratiques DevOps',
              desc: 'Evaluation de votre pipeline CI/CD, de la gestion des environnements, de la strategie de branching, de la couverture de tests automatises et des processus de deploiement. Nous identifions les goulets d&apos;etranglement dans votre chaine de livraison.',
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

      {/* OWASP Top 10 */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="text-[var(--accent-light)]" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-extrabold">Focus : OWASP Top 10</h2>
            </div>
            <p className="text-[var(--text-secondary)] mt-3">
              L&apos;OWASP Top 10 est le referentiel mondial des risques de securite les plus
              critiques pour les applications web. Notre audit de securite couvre
              systematiquement chacun de ces vecteurs d&apos;attaque pour garantir que votre
              application n&apos;est pas exposee aux menaces les plus courantes.
            </p>
            <p className="text-[var(--text-secondary)] mt-3">
              Au-dela de la simple detection, nous vous expliquons chaque vulnerabilite en
              termes clairs, evaluons son impact reel sur votre activite et vous proposons
              des correctifs priorises par niveau de risque. L&apos;objectif n&apos;est pas de
              produire un rapport alarmiste, mais un document actionnable qui permet a votre
              equipe de corriger les failles efficacement.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold text-lg mb-4">Les 10 risques majeurs</h3>
            <ol className="space-y-2">
              {[
                'Broken Access Control',
                'Cryptographic Failures',
                'Injection (SQL, NoSQL, OS)',
                'Insecure Design',
                'Security Misconfiguration',
                'Vulnerable Components',
                'Authentication Failures',
                'Data Integrity Failures',
                'Logging & Monitoring Failures',
                'Server-Side Request Forgery (SSRF)',
              ].map((item, i) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="text-[var(--accent-light)] font-bold shrink-0 w-6 text-right">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[var(--text-secondary)]">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Methodologie */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <ClipboardList className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Notre methodologie d&apos;audit</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Un processus structure et rigoureux pour un audit technique complet et exploitable.
          Nous combinons outils automatises et revue manuelle par un expert senior.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              icon: <Eye aria-hidden="true" />,
              title: 'Cadrage & acces',
              desc: 'Definition du perimetre de l&apos;audit avec votre equipe. Acces au code source (repository Git), aux environnements de staging et a la documentation existante. Identification des objectifs prioritaires et des contraintes.',
            },
            {
              step: '02',
              icon: <Search aria-hidden="true" />,
              title: 'Analyse automatisee',
              desc: 'Execution d&apos;outils d&apos;analyse statique (SonarQube, ESLint), de scan de securite (OWASP ZAP, Snyk), de tests de performance (Lighthouse, k6) et d&apos;audit des dependances. Collecte de metriques objectives.',
            },
            {
              step: '03',
              icon: <Code aria-hidden="true" />,
              title: 'Revue manuelle',
              desc: 'Un developpeur senior parcourt le code source module par module. Il evalue l&apos;architecture, les patterns utilises, la gestion des erreurs, la logique metier et les points de fragilite. Cette etape revele ce que les outils ne detectent pas.',
            },
            {
              step: '04',
              icon: <FileText aria-hidden="true" />,
              title: 'Rapport & restitution',
              desc: 'Rapport detaille avec classification des problemes par severite (critique, majeur, mineur, suggestion). Plan d&apos;action priorise et chiffre en effort. Restitution orale avec votre equipe pour repondre a vos questions.',
            },
          ].map((phase) => (
            <article key={phase.step} className="card">
              <span className="text-3xl font-extrabold text-gradient">{phase.step}</span>
              <div className="text-[var(--accent-light)] mt-3">{phase.icon}</div>
              <h3 className="font-bold mt-2">{phase.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm mt-2">{phase.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Livrables */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <FileText className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Nos livrables</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          A l&apos;issue de l&apos;audit technique, vous recevez des livrables concrets et
          exploitables par votre equipe technique comme par votre direction.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-bold text-lg">Rapport technique detaille</h3>
            <p className="text-[var(--text-secondary)] text-sm mt-2">
              Document exhaustif couvrant chaque dimension de l&apos;audit. Pour chaque point
              identifie : description du probleme, localisation dans le code, impact potentiel,
              niveau de severite et recommandation de correction avec des exemples de code
              concrets. Le rapport inclut egalement des metriques comparatives et des
              graphiques de synthese.
            </p>
            <ul className="mt-3 space-y-2">
              {[
                'Synthese executive (pour la direction)',
                'Analyse detaillee par dimension',
                'Captures d&apos;ecran et extraits de code annotes',
                'Metriques et scores (Lighthouse, SonarQube)',
                'Matrice des risques',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle size={14} className="text-[var(--accent-light)] mt-0.5 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 className="font-bold text-lg">Plan d&apos;action priorise</h3>
            <p className="text-[var(--text-secondary)] text-sm mt-2">
              Feuille de route concrète pour remedier aux problemes identifies. Chaque action
              est classee par priorite (critique, haute, moyenne, basse) et estimee en effort
              (jours/homme). Le plan distingue les quick wins implementables immediatement des
              chantiers de fond necessitant une planification.
            </p>
            <ul className="mt-3 space-y-2">
              {[
                'Actions classees par severite et effort',
                'Quick wins vs. chantiers structurels',
                'Estimation de charge pour chaque action',
                'Dependances entre actions identifiees',
                'Indicateurs de succes mesurables',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle size={14} className="text-[var(--accent-light)] mt-0.5 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Qui a besoin d&apos;un audit ? */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Users className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Qui a besoin d&apos;un audit technique ?</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Un audit technique de site web ou d&apos;application est pertinent dans de nombreuses
          situations. Voici les cas les plus frequents rencontres chez nos clients.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: <Zap aria-hidden="true" />,
              title: 'Votre application ralentit',
              desc: 'Les temps de chargement augmentent, les utilisateurs se plaignent, votre taux de rebond explose. Un audit de performance identifie les goulots d&apos;etranglement et propose des optimisations concretes.',
            },
            {
              icon: <Lock aria-hidden="true" />,
              title: 'Vous suspectez des failles de securite',
              desc: 'Avant de subir un incident, faites auditer votre application. L&apos;audit de securite identifie les vulnerabilites avant que des acteurs malveillants ne les exploitent.',
            },
            {
              icon: <Code aria-hidden="true" />,
              title: 'Le code devient difficile a maintenir',
              desc: 'Chaque modification genere des bugs, les delais de livraison s&apos;allongent et votre equipe perd en productivite. L&apos;audit identifie la dette technique accumulee et propose un plan de refactoring.',
            },
            {
              icon: <Users aria-hidden="true" />,
              title: 'Vous reprenez un projet existant',
              desc: 'Avant de reprendre le developpement d&apos;une application existante, un audit dresse un etat des lieux objectif de la qualite du code et de l&apos;architecture. Indispensable pour estimer les couts de reprise.',
            },
            {
              icon: <GitBranch aria-hidden="true" />,
              title: 'Vous preparez une levee de fonds',
              desc: 'Les investisseurs mandatent regulierement des audits de code source (due diligence technique). Un audit pre-levee vous permet d&apos;anticiper les questions et de corriger les points faibles en amont.',
            },
            {
              icon: <Server aria-hidden="true" />,
              title: 'Votre infrastructure cloud coute trop cher',
              desc: 'Votre facture cloud augmente sans que le trafic ne le justifie. L&apos;audit identifie les ressources surdimensionnees, les services inutilises et les optimisations possibles.',
            },
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

      {/* Outils utilises */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Zap className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Outils et technologies d&apos;audit</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-6">
          Nous combinons des outils de reference pour une couverture d&apos;analyse maximale.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { category: 'Qualite de code', items: ['SonarQube', 'ESLint / Prettier', 'CodeClimate', 'TypeScript strict'] },
            { category: 'Securite', items: ['OWASP ZAP', 'Snyk', 'npm audit', 'Dependabot'] },
            { category: 'Performance', items: ['Lighthouse', 'WebPageTest', 'k6 (load testing)', 'Chrome DevTools'] },
            { category: 'Infrastructure', items: ['Terraform scan', 'Docker Bench', 'Cloud cost tools', 'Prometheus'] },
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

      {/* Liens vers autres services */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
          Nos autres expertises
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/services/developpement-web', label: 'Developpement Web' },
            { href: '/services/developpement-saas', label: 'Developpement SaaS' },
            { href: '/services/cloud-devops', label: 'Cloud & DevOps' },
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
              Besoin d&apos;un <span className="text-gradient">audit technique</span> ?
            </h2>
            <p className="mt-3 text-[var(--text-secondary)] max-w-xl mx-auto">
              Premieres conclusions sous une semaine. Nous analysons votre code et votre
              infrastructure, puis vous remettons un rapport detaille avec un plan d&apos;action
              priorise. Devis gratuit sous 24 heures.
            </p>
            <div className="mt-6 flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn-cta">Demander un audit</Link>
              <Link href="/projets" className="btn-ghost">Voir nos realisations</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
