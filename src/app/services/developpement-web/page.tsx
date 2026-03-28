import type { Metadata } from 'next';
import Section from '@/components/Section';
import InlineForm from '@/components/InlineForm';
import Link from 'next/link';
import {
  Code, Monitor, Smartphone, Gauge, Accessibility, Layers,
  Search, PenTool, Rocket, Settings, CheckCircle, ArrowRight,
  Globe, Zap, Shield, Server,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Developpement Web sur mesure -- Applications & Sites web | HEXAIT',
  description:
    'Developpement web sur mesure : creation d&apos;applications web, sites vitrine, SPAs, PWAs et dashboards. React, Next.js, TypeScript, Node.js. Devis gratuit.',
  alternates: { canonical: '/services/developpement-web' },
  openGraph: {
    title: 'Developpement Web sur mesure -- Applications & Sites web | HEXAIT',
    description:
      'Developpement web sur mesure : creation d&apos;applications web performantes avec React, Next.js, TypeScript et Node.js.',
  },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <span className="hero-badge">Developpement Web</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
            <span className="text-gradient">Developpement web sur mesure</span>
          </h1>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Chez HEXAIT, nous concevons des applications web performantes, accessibles et
            evolutives. De la creation d&apos;application web simple au portail metier complexe,
            notre equipe transforme vos besoins en solutions numeriques concretes.
          </p>
          <div className="mt-6 flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-cta">Discuter de votre projet</Link>
            <Link href="/services" className="btn-ghost">Tous nos services</Link>
          </div>
        </div>
      </Section>

      {/* Ce que nous developpons */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Layers className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Ce que nous developpons</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Notre expertise en developpement web sur mesure couvre un large spectre de projets.
          Chaque solution est concue sur mesure pour repondre precisement aux enjeux de votre activite.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Monitor aria-hidden="true" />,
              title: 'Sites vitrine & corporate',
              desc: 'Sites institutionnels rapides, optimises pour le referencement naturel et la conversion. Nous privilegions des architectures statiques (SSG) pour des temps de chargement minimaux et une excellente indexation Google.',
            },
            {
              icon: <Code aria-hidden="true" />,
              title: 'Single Page Applications (SPA)',
              desc: 'Applications monopage reactives et fluides qui offrent une experience utilisateur comparable a une application native. Navigation instantanee, gestion d&apos;etat avancee et interactions en temps reel.',
            },
            {
              icon: <Smartphone aria-hidden="true" />,
              title: 'Progressive Web Apps (PWA)',
              desc: 'Applications web installables, fonctionnant hors ligne grace aux service workers. Notifications push, synchronisation en arriere-plan et acces depuis l&apos;ecran d&apos;accueil sans passer par les stores.',
            },
            {
              icon: <Layers aria-hidden="true" />,
              title: 'Dashboards & back-offices',
              desc: 'Interfaces d&apos;administration complexes avec visualisation de donnees, tableaux de bord temps reel, gestion des utilisateurs et reporting avance. Vos equipes pilotent leur activite efficacement.',
            },
            {
              icon: <Globe aria-hidden="true" />,
              title: 'Portails metier',
              desc: 'Plateformes sur mesure connectant vos clients, partenaires et collaborateurs. Espaces securises, workflows personnalises et integration avec vos outils existants (CRM, ERP, APIs tierces).',
            },
            {
              icon: <Server aria-hidden="true" />,
              title: 'APIs & microservices',
              desc: 'Backends robustes en Node.js ou Python qui exposent des APIs REST ou GraphQL. Architecture modulaire permettant une scalabilite horizontale et une maintenance simplifiee.',
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

      {/* Pourquoi le sur mesure ? */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Settings className="text-[var(--accent-light)]" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-extrabold">
                Pourquoi choisir le developpement sur mesure ?
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] mt-3">
              Les templates et CMS generiques imposent des limites qui freinent votre croissance.
              Un developpement web sur mesure vous offre une liberte totale pour creer exactement
              ce dont votre entreprise a besoin, sans compromis.
            </p>
            <ul className="mt-4 space-y-3">
              {[
                'Performance optimale : aucun code superflu, chaque octet compte.',
                'Evolutivite : votre application grandit avec votre activite sans refonte majeure.',
                'Securite renforcee : pas de plugins tiers vulnerables, code auditable.',
                'Experience utilisateur unique : interfaces concues autour de vos utilisateurs.',
                'Integration fluide : connexion native avec vos outils existants.',
                'Propriete totale : vous etes proprietaire du code source a 100 %.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="text-[var(--accent-light)] mt-0.5 shrink-0" size={18} aria-hidden="true" />
                  <span className="text-[var(--text-secondary)] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="font-bold text-lg">Templates vs. Sur mesure</h3>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm font-semibold text-[var(--text-tertiary)]">Template / CMS</p>
                <ul className="text-sm text-[var(--text-secondary)] mt-1 space-y-1">
                  <li>- Rapidite de mise en ligne initiale</li>
                  <li>- Limites de personnalisation rapidement atteintes</li>
                  <li>- Dependance aux mises a jour du theme ou des plugins</li>
                  <li>- Performances souvent mediocres</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gradient">Developpement sur mesure</p>
                <ul className="text-sm text-[var(--text-secondary)] mt-1 space-y-1">
                  <li>+ Code optimise et performant des le depart</li>
                  <li>+ Fonctionnalites exactement adaptees a vos besoins</li>
                  <li>+ Aucune dependance a un ecosysteme tiers</li>
                  <li>+ Maintenabilite et evolutivite a long terme</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Stack technique */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Zap className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Notre stack technique</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Nous utilisons des technologies modernes, eprouvees et maintenues par des communautes actives.
          Chaque choix technique est justifie par les besoins concrets de votre projet.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { category: 'Front-end', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
            { category: 'Back-end', items: ['Node.js', 'Python', 'Express', 'NestJS'] },
            { category: 'Bases de donnees', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM'] },
            { category: 'Infrastructure', items: ['Docker', 'Azure', 'AWS', 'Vercel'] },
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

      {/* Notre processus */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Rocket className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Notre processus de developpement</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Un processus structure et transparent, de la premiere idee a la mise en production.
          Chaque phase est validee avec vous avant de passer a la suivante.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              icon: <Search aria-hidden="true" />,
              title: 'Decouverte & cadrage',
              desc: 'Analyse de vos objectifs, de vos contraintes et de votre existant. Nous definissons ensemble le perimetre fonctionnel, les priorites et les criteres de succes du projet.',
            },
            {
              step: '02',
              icon: <PenTool aria-hidden="true" />,
              title: 'Conception & design',
              desc: 'Wireframes, maquettes et prototypes interactifs. L&apos;architecture technique est concue pour la performance et la maintenabilite. Rien n&apos;est code sans validation prealable.',
            },
            {
              step: '03',
              icon: <Code aria-hidden="true" />,
              title: 'Developpement iteratif',
              desc: 'Sprints courts avec livraisons regulieres. Vous suivez l&apos;avancement en temps reel et pouvez tester chaque fonctionnalite au fil de l&apos;eau. Tests automatises a chaque etape.',
            },
            {
              step: '04',
              icon: <Rocket aria-hidden="true" />,
              title: 'Deploiement & suivi',
              desc: 'Mise en production progressive avec monitoring en place. Formation de vos equipes, documentation complete et accompagnement post-lancement pour garantir une adoption reussie.',
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

      {/* Performance, responsive et accessibilite */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Gauge className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Performance, responsive design et accessibilite
          </h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Trois piliers fondamentaux que nous integrons nativement dans chaque projet de
          creation d&apos;application web. Ce ne sont pas des options, mais des standards.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <Gauge className="text-[var(--accent-light)]" aria-hidden="true" />
            <h3 className="font-bold mt-3">Optimisation des performances</h3>
            <p className="text-[var(--text-secondary)] text-sm mt-2">
              Chaque milliseconde compte. Nous optimisons le rendu serveur (SSR/SSG), la taille des
              bundles JavaScript, le chargement paresseux des images et le cache HTTP. Nos applications
              visent systematiquement un score Lighthouse superieur a 90 sur les quatre criteres.
              Le code-splitting, le tree-shaking et la compression Brotli sont appliques par defaut.
            </p>
          </div>
          <div className="card">
            <Smartphone className="text-[var(--accent-light)]" aria-hidden="true" />
            <h3 className="font-bold mt-3">Responsive design</h3>
            <p className="text-[var(--text-secondary)] text-sm mt-2">
              Plus de 60 % du trafic web provient de terminaux mobiles. Nos interfaces s&apos;adaptent
              fluidement a toutes les tailles d&apos;ecran grace a une approche mobile-first. Nous
              testons sur de vrais appareils et optimisons les interactions tactiles. Les mises en
              page utilisent des systemes de grille flexibles et des composants adaptatifs.
            </p>
          </div>
          <div className="card">
            <Accessibility className="text-[var(--accent-light)]" aria-hidden="true" />
            <h3 className="font-bold mt-3">Accessibilite (WCAG)</h3>
            <p className="text-[var(--text-secondary)] text-sm mt-2">
              Nous concevons des interfaces utilisables par tous, y compris les personnes en situation
              de handicap. Navigation au clavier, compatibilite lecteur d&apos;ecran, contrastes conformes
              aux normes WCAG 2.1 AA. L&apos;accessibilite est un droit, pas une fonctionnalite
              optionnelle, et c&apos;est aussi un levier SEO non negligeable.
            </p>
          </div>
        </div>
      </Section>

      {/* Exemples de realisations */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Shield className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Cas d&apos;usage concrets</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Voici le type de projets que nous realisons en developpement web sur mesure.
          Chaque projet est unique, mais certains schemas reviennent regulierement.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Plateforme de gestion interne',
              desc: 'Un back-office centralisant la gestion des clients, des contrats et de la facturation. Tableaux de bord avec indicateurs cles, export de rapports PDF et gestion fine des droits d&apos;acces par role.',
            },
            {
              title: 'Application de prise de rendez-vous',
              desc: 'Interface de reservation en temps reel avec calendrier interactif, rappels automatiques par email et SMS, paiement en ligne et gestion multi-praticiens. Synchronisation avec Google Calendar.',
            },
            {
              title: 'Portail client pour ESN',
              desc: 'Espace securise permettant aux clients d&apos;une ESN de suivre l&apos;avancement de leurs projets, de consulter les rapports d&apos;activite et de communiquer avec leur equipe dediee.',
            },
            {
              title: 'Marketplace B2B',
              desc: 'Plateforme de mise en relation entre fournisseurs et acheteurs avec systeme de devis, comparaison de produits, gestion de catalogues et paiement securise.',
            },
          ].map((example) => (
            <article key={example.title} className="card">
              <h3 className="font-bold">{example.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm mt-2">{example.desc}</p>
            </article>
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
            { href: '/services/developpement-saas', label: 'Developpement SaaS' },
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

      {/* Formulaire inline */}
      <InlineForm />
    </>
  );
}
