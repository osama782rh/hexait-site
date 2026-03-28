import type { Metadata } from 'next';
import Section from '@/components/Section';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  CalendarDays,
  CheckCircle2,
  Cloud,
  Code,
  Database,
  FileText,
  Globe,
  Kanban,
  Layers,
  Link2,
  Radar,
  Search,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'StratGen — Plateforme d\u2019intelligence SEO propulsee par l\u2019IA',
  description:
    'Etude de cas StratGen : outil SEO IA pour strategie SEO automatisee, analyse concurrentielle, calendrier editorial et audit technique. Developpe par HEXAIT.',
  keywords: [
    'outil seo ia',
    'strategie seo automatisee',
    'analyse concurrentielle seo',
    'calendrier editorial seo',
    'plateforme seo',
    'StratGen',
    'HEXAIT',
  ],
  alternates: { canonical: '/projets/stratgen' },
};

export default function Page() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-24 pb-12">
        <div className="mb-8">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-purple-300 transition-colors"
          >
            <ArrowLeft size={16} /> Retour aux projets
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="hero-badge inline-flex items-center gap-2">
              <Brain size={16} /> SaaS &bull; SEO &bull; Intelligence Artificielle
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 leading-tight">
              <span className="text-gradient">StratGen</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-300 font-semibold mt-3">
              Plateforme d&apos;intelligence SEO propuls&eacute;e par l&apos;IA
            </p>
            <p className="text-lg text-[var(--text-secondary)] mt-4 leading-relaxed">
              G&eacute;n&eacute;rez votre premi&egrave;re strat&eacute;gie SEO en quelques minutes.
              StratGen remplace l&apos;intuition par la donn&eacute;e : analyse concurrentielle, d&eacute;tection
              des opportunit&eacute;s de contenu, calendrier &eacute;ditorial IA sur 6&nbsp;mois et audit
              technique automatis&eacute;.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://stratgen.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
              >
                Visiter StratGen <ArrowRight size={16} />
              </a>
              <Link href="/contact" className="btn-ghost">
                Lancer un projet similaire
              </Link>
            </div>
          </div>

          <div className="card overflow-hidden p-0">
            <div className="aspect-video relative bg-gradient-to-br from-purple-500/10 to-indigo-500/10">
              {/* Image: Dashboard principal StratGen avec vue d'ensemble strategie SEO, graphiques de positions et opportunites */}
            </div>
            <div className="p-4">
              <p className="text-sm text-[var(--text-tertiary)]">
                Dashboard StratGen &mdash; Vue strat&eacute;gique avec analyse concurrentielle et opportunit&eacute;s
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CHIFFRES CLES */}
      <Section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '2 400+', label: 'projets analys\u00e9s', icon: <Target size={24} className="text-purple-300" /> },
            { value: '18M+', label: 'mots-cl\u00e9s suivis', icon: <Search size={24} className="text-purple-300" /> },
            { value: '94%', label: 'taux de satisfaction', icon: <Sparkles size={24} className="text-purple-300" /> },
            { value: '29\u20ac', label: '/mois \u00e0 partir de', icon: <TrendingUp size={24} className="text-purple-300" /> },
          ].map((stat) => (
            <div key={stat.label} className="card text-center">
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <p className="text-3xl font-extrabold text-gradient">{stat.value}</p>
              <p className="text-sm text-[var(--text-tertiary)] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTEXTE */}
      <Section className="py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-gradient">Contexte</span>
        </h2>
        <div className="mt-6 space-y-4 text-[var(--text-secondary)] leading-relaxed text-lg">
          <p>
            Le SEO (Search Engine Optimization) est devenu un levier de croissance incontournable pour
            toute entreprise &agrave; pr&eacute;sence digitale. Pourtant, &eacute;laborer une strat&eacute;gie
            SEO efficace reste un processus complexe, chronophage et souvent r&eacute;serv&eacute; aux
            sp&eacute;cialistes exp&eacute;riment&eacute;s.
          </p>
          <p>
            Le march&eacute; des outils SEO est domin&eacute; par quelques acteurs am&eacute;ricains
            (Semrush, Ahrefs, Moz) qui proposent des fonctionnalit&eacute;s puissantes mais fragment&eacute;es :
            il faut jongler entre l&apos;outil de recherche de mots-cl&eacute;s, l&apos;audit technique,
            l&apos;analyse de backlinks et un tableur externe pour planifier le contenu. Le co&ucirc;t
            cumul&eacute; de ces abonnements d&eacute;passe souvent 300&euro;/mois, hors du budget de
            nombreuses PME et freelances.
          </p>
          <p>
            C&apos;est dans ce contexte que <strong>StratGen</strong> a &eacute;t&eacute; con&ccedil;u :
            une plateforme fran&ccedil;aise d&apos;intelligence SEO qui unifie l&apos;analyse, la strat&eacute;gie
            et l&apos;ex&eacute;cution dans un seul outil, pilot&eacute; par l&apos;intelligence artificielle
            pour rendre le SEO accessible &agrave; tous les profils &mdash; du freelance au directeur marketing.
          </p>
        </div>
      </Section>

      {/* PROBLEMATIQUE */}
      <Section className="py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-gradient">Probl&eacute;matique</span>
        </h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <Layers size={24} className="text-red-400" />,
              title: 'Fragmentation des outils',
              desc: 'Les professionnels du SEO utilisent en moyenne 4 \u00e0 6 outils diff\u00e9rents pour couvrir l\u2019ensemble de leurs besoins. Aucune vue unifi\u00e9e, beaucoup de temps perdu en exports et consolidation.',
            },
            {
              icon: <Brain size={24} className="text-red-400" />,
              title: 'Strat\u00e9gie bas\u00e9e sur l\u2019intuition',
              desc: 'Sans donn\u00e9es crois\u00e9es (concurrents, gaps, intent, saisonnalit\u00e9), les d\u00e9cisions \u00e9ditoriales reposent sur l\u2019intuition. R\u00e9sultat : du contenu produit sans ROI mesurable.',
            },
            {
              icon: <CalendarDays size={24} className="text-red-400" />,
              title: 'Planification manuelle',
              desc: 'Les calendriers \u00e9ditoriaux sont g\u00e9r\u00e9s dans des tableurs ou Notion, d\u00e9connect\u00e9s des donn\u00e9es SEO. Aucune priorisation data-driven des sujets \u00e0 traiter.',
            },
            {
              icon: <FileText size={24} className="text-red-400" />,
              title: 'Reporting chronophage',
              desc: 'Pr\u00e9parer un rapport SEO mensuel prend 2 \u00e0 4 heures : extraction de donn\u00e9es, mise en forme, cr\u00e9ation de graphiques, r\u00e9daction de recommandations.',
            },
          ].map((item) => (
            <div key={item.title} className="card">
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] mt-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SOLUTION */}
      <Section className="py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-gradient">Solution</span>
        </h2>
        <div className="mt-6 space-y-4 text-[var(--text-secondary)] leading-relaxed text-lg">
          <p>
            HEXAIT a con&ccedil;u et d&eacute;velopp&eacute; <strong>StratGen</strong> comme une plateforme
            d&apos;intelligence SEO unifi&eacute;e, o&ugrave; chaque fonctionnalit&eacute; alimente les autres.
            Le c&oelig;ur de l&apos;outil est son moteur d&apos;IA strat&eacute;gique qui croise automatiquement
            les donn&eacute;es concurrentielles, les lacunes s&eacute;mantiques, les donn&eacute;es Google
            Search Console et les tendances de recherche pour g&eacute;n&eacute;rer un calendrier &eacute;ditorial
            optimis&eacute; sur 6&nbsp;mois.
          </p>
          <p>
            L&apos;utilisateur commence par renseigner son domaine et ses concurrents. StratGen lance alors une
            analyse compl&egrave;te : positions organiques, trafic estim&eacute;, autorit&eacute; de domaine,
            profil de backlinks, spam score et structure de contenu de chaque concurrent. Le moteur d&apos;IA
            identifie ensuite les opportunit&eacute;s inexploit&eacute;es &mdash; mots-cl&eacute;s &agrave; fort
            potentiel que les concurrents couvrent mais pas l&apos;utilisateur &mdash; et les organise en
            clusters th&eacute;matiques par intention de recherche.
          </p>
          <p>
            &Agrave; partir de cette analyse, StratGen g&eacute;n&egrave;re automatiquement un calendrier
            &eacute;ditorial structur&eacute; : sujets prioritaires, mots-cl&eacute;s cibles, volume de
            recherche, difficult&eacute;, format recommand&eacute; (article, guide, comparatif...) et deadline
            sugg&eacute;r&eacute;e. Le tout est visualisable en vue mois, semaine, Gantt ou Kanban, selon
            les pr&eacute;f&eacute;rences de l&apos;&eacute;quipe.
          </p>
          <p>
            Enfin, StratGen propose un module d&apos;audit SEO technique complet &mdash; balises meta,
            structure HTML, performance, maillage interne &mdash; ainsi qu&apos;un g&eacute;n&eacute;rateur
            de rapports PDF automatis&eacute;s et des espaces de travail collaboratifs avec permissions
            granulaires.
          </p>
        </div>

        <div className="mt-8 card overflow-hidden p-0">
          <div className="aspect-video relative bg-gradient-to-br from-purple-500/10 to-pink-500/10">
            {/* Image: Vue du moteur IA StratGen generant un calendrier editorial a partir de l'analyse concurrentielle */}
          </div>
          <div className="p-4">
            <p className="text-sm text-[var(--text-tertiary)]">
              Moteur IA g&eacute;n&eacute;rant un calendrier &eacute;ditorial &agrave; partir de l&apos;analyse concurrentielle
            </p>
          </div>
        </div>
      </Section>

      {/* FONCTIONNALITES CLES */}
      <Section className="py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Fonctionnalit&eacute;s <span className="text-gradient">cl&eacute;s</span>
        </h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Brain size={24} className="text-purple-300" />,
              title: 'Strat\u00e9gie IA automatis\u00e9e',
              desc: 'Le moteur d\u2019IA croise donn\u00e9es concurrentielles, lacunes s\u00e9mantiques et donn\u00e9es GSC pour g\u00e9n\u00e9rer un calendrier \u00e9ditorial optimis\u00e9 sur 6 mois.',
            },
            {
              icon: <Radar size={24} className="text-purple-300" />,
              title: 'Analyse concurrentielle',
              desc: 'Audit complet des concurrents : contenu, positions, trafic, autorit\u00e9 de domaine, profil de backlinks et spam score. Comparaison multi-concurrents.',
            },
            {
              icon: <Globe size={24} className="text-purple-300" />,
              title: 'Int\u00e9gration Google Search Console',
              desc: 'Connexion directe \u00e0 la GSC pour importer impressions, clics, CTR et positions. Donn\u00e9es r\u00e9elles int\u00e9gr\u00e9es \u00e0 l\u2019analyse strat\u00e9gique.',
            },
            {
              icon: <Target size={24} className="text-purple-300" />,
              title: 'Clustering par intention',
              desc: 'Regroupement automatique des mots-cl\u00e9s par intention de recherche (informationnelle, transactionnelle, navigationnelle) pour une strat\u00e9gie de contenu coh\u00e9rente.',
            },
            {
              icon: <Kanban size={24} className="text-purple-300" />,
              title: 'Calendrier \u00e9ditorial multi-vues',
              desc: 'Planifiez votre contenu en vue mois, semaine, Gantt ou Kanban. Drag & drop, assignation d\u2019\u00e9quipe et deadlines int\u00e9gr\u00e9es.',
            },
            {
              icon: <Search size={24} className="text-purple-300" />,
              title: 'Audit SEO technique',
              desc: 'Analyse automatis\u00e9e : balises meta, titres H1-H6, structure HTML, vitesse de chargement, maillage interne, images et donn\u00e9es structur\u00e9es.',
            },
            {
              icon: <BarChart3 size={24} className="text-purple-300" />,
              title: 'Gap analysis',
              desc: 'D\u00e9tection des opportunit\u00e9s manqu\u00e9es : mots-cl\u00e9s que vos concurrents couvrent mais pas vous, class\u00e9s par potentiel de trafic et difficult\u00e9.',
            },
            {
              icon: <TrendingUp size={24} className="text-purple-300" />,
              title: 'Analytics pr\u00e9dictifs',
              desc: 'Estimations de trafic potentiel pour chaque contenu planifi\u00e9, bas\u00e9es sur le volume de recherche, la difficult\u00e9 et la position vis\u00e9e.',
            },
            {
              icon: <Link2 size={24} className="text-purple-300" />,
              title: 'Profil de backlinks',
              desc: 'Analyse du profil de liens entrants : autorit\u00e9, ancres, liens toxiques et opportunit\u00e9s de link building identifi\u00e9es automatiquement.',
            },
            {
              icon: <FileText size={24} className="text-purple-300" />,
              title: 'Rapports PDF automatis\u00e9s',
              desc: 'G\u00e9n\u00e9ration de rapports SEO complets au format PDF, personnalisables avec votre branding. Envoi programm\u00e9 aux clients.',
            },
            {
              icon: <Users size={24} className="text-purple-300" />,
              title: 'Espaces collaboratifs',
              desc: 'Workspaces par projet avec r\u00f4les et permissions granulaires. Id\u00e9al pour les agences g\u00e9rant plusieurs clients simultan\u00e9ment.',
            },
            {
              icon: <BookOpen size={24} className="text-purple-300" />,
              title: 'Briefs de contenu IA',
              desc: 'Pour chaque sujet du calendrier, StratGen g\u00e9n\u00e8re un brief d\u00e9taill\u00e9 : structure H2/H3, mots-cl\u00e9s \u00e0 int\u00e9grer, longueur cible et sources concurrentes.',
            },
          ].map((feature) => (
            <div key={feature.title} className="card hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="mb-3">{feature.icon}</div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-[var(--text-secondary)] mt-2 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SCREENSHOTS SUPPLEMENTAIRES */}
      <Section className="py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card overflow-hidden p-0">
            <div className="aspect-video relative bg-gradient-to-br from-purple-500/10 to-indigo-500/10">
              {/* Image: Vue Kanban du calendrier editorial StratGen avec cartes de contenu et statuts */}
            </div>
            <div className="p-4">
              <p className="text-sm text-[var(--text-tertiary)]">
                Calendrier &eacute;ditorial en vue Kanban &mdash; Planification et suivi du contenu
              </p>
            </div>
          </div>
          <div className="card overflow-hidden p-0">
            <div className="aspect-video relative bg-gradient-to-br from-indigo-500/10 to-pink-500/10">
              {/* Image: Rapport d'analyse concurrentielle StratGen avec graphiques comparatifs et metriques */}
            </div>
            <div className="p-4">
              <p className="text-sm text-[var(--text-tertiary)]">
                Analyse concurrentielle &mdash; Comparaison multi-domaines et d&eacute;tection d&apos;opportunit&eacute;s
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* STACK TECHNIQUE */}
      <Section className="py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Stack <span className="text-gradient">technique</span>
        </h2>
        <p className="text-[var(--text-secondary)] mt-4 text-lg">
          StratGen repose sur une architecture hybride Next.js / Python, optimis&eacute;e pour le traitement
          massif de donn&eacute;es SEO et l&apos;inf&eacute;rence IA en temps r&eacute;el.
        </p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Globe size={24} className="text-purple-300" />,
              tech: 'Next.js',
              role: 'Frontend React avec App Router, Server Components pour le rendu performant des dashboards et des rapports interactifs.',
            },
            {
              icon: <Zap size={24} className="text-purple-300" />,
              tech: 'TypeScript',
              role: 'Typage strict sur le frontend et les API routes pour la fiabilit\u00e9 des flux de donn\u00e9es complexes entre modules.',
            },
            {
              icon: <Code size={24} className="text-purple-300" />,
              tech: 'Python',
              role: 'Backend d\u2019analyse : crawling, traitement NLP, clustering s\u00e9mantique, inf\u00e9rence IA et pipelines de donn\u00e9es massifs.',
            },
            {
              icon: <Database size={24} className="text-purple-300" />,
              tech: 'PostgreSQL',
              role: 'Base relationnelle pour les projets, mots-cl\u00e9s, positions, contenus et donn\u00e9es historiques avec indexation optimis\u00e9e.',
            },
            {
              icon: <Cloud size={24} className="text-purple-300" />,
              tech: 'Redis',
              role: 'Cache haute performance pour les r\u00e9sultats d\u2019analyse, les sessions utilisateur et les files d\u2019attente de jobs asynchrones.',
            },
            {
              icon: <Shield size={24} className="text-purple-300" />,
              tech: 'S\u00e9curit\u00e9 & conformit\u00e9',
              role: 'Chiffrement des donn\u00e9es, OAuth 2.0 pour GSC, isolation des workspaces et conformit\u00e9 RGPD native.',
            },
          ].map((item) => (
            <div key={item.tech} className="card">
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3 className="font-bold text-lg">{item.tech}</h3>
              </div>
              <p className="text-[var(--text-secondary)] text-sm">{item.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TARIFS */}
      <Section className="py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Mod&egrave;le <span className="text-gradient">tarifaire</span>
        </h2>
        <p className="text-[var(--text-secondary)] text-center mt-4 text-lg max-w-2xl mx-auto">
          Trois formules adapt&eacute;es &agrave; chaque profil SEO. <strong>-30%</strong> pour
          les 100&nbsp;premiers utilisateurs.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Starter',
              price: '29\u20ac',
              period: '/mois',
              desc: 'Pour les freelances SEO',
              features: [
                '3 projets',
                'Analyse concurrentielle (3 concurrents)',
                'Calendrier \u00e9ditorial IA',
                'Audit technique basique',
                'Clustering mots-cl\u00e9s',
              ],
            },
            {
              name: 'Business',
              price: '79\u20ac',
              period: '/mois',
              desc: 'Pour les agences et e-commerces',
              features: [
                'Tout Starter +',
                '15 projets',
                'Concurrents illimit\u00e9s',
                'Int\u00e9gration Google Search Console',
                'Rapports PDF automatis\u00e9s',
                'Gap analysis avanc\u00e9',
                'Backlink profiling',
                'Espaces collaboratifs',
              ],
            },
            {
              name: 'Enterprise',
              price: 'Sur mesure',
              period: '',
              desc: 'Pour les grands comptes',
              features: [
                'Tout Business +',
                'Projets illimit\u00e9s',
                'API acc\u00e8s complet',
                'SSO / SAML',
                'Analytics pr\u00e9dictifs',
                'Account manager d\u00e9di\u00e9',
                'SLA garanti',
                'Onboarding personnalis\u00e9',
              ],
            },
          ].map((plan) => (
            <div key={plan.name} className="card text-center">
              <h3 className="font-bold text-xl">{plan.name}</h3>
              <p className="text-[var(--text-tertiary)] text-sm mt-1">{plan.desc}</p>
              <p className="text-4xl font-extrabold text-gradient mt-4">
                {plan.price}
                {plan.period && (
                  <span className="text-lg text-[var(--text-tertiary)] font-normal">{plan.period}</span>
                )}
              </p>
              <ul className="mt-6 space-y-3 text-left">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle2 size={16} className="text-purple-300 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* RESULTATS */}
      <Section className="py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-gradient">R&eacute;sultats</span>
        </h2>
        <div className="mt-6 space-y-4 text-[var(--text-secondary)] leading-relaxed text-lg">
          <p>
            StratGen a rapidement trouv&eacute; son march&eacute; aupr&egrave;s des professionnels du SEO,
            des agences digitales et des &eacute;quipes marketing de startups SaaS et e-commerces.
            Les m&eacute;triques cl&eacute;s t&eacute;moignent de l&apos;adoption et de la satisfaction
            des utilisateurs :
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { metric: '2 400+', desc: 'Projets SEO analys\u00e9s depuis le lancement, couvrant e-commerce, SaaS, m\u00e9dia et services' },
            { metric: '18M+', desc: 'Mots-cl\u00e9s suivis en continu avec suivi de positions quotidien et alertes de variation' },
            { metric: '94%', desc: 'Taux de satisfaction utilisateur, mesur\u00e9 via NPS et enqu\u00eates trimestrielles' },
            { metric: '-70%', desc: 'R\u00e9duction du temps de cr\u00e9ation d\u2019une strat\u00e9gie SEO compl\u00e8te avec le moteur IA' },
          ].map((r) => (
            <div key={r.metric} className="card text-center">
              <p className="text-3xl font-extrabold text-gradient">{r.metric}</p>
              <p className="text-sm text-[var(--text-tertiary)] mt-2">{r.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 space-y-4 text-[var(--text-secondary)] leading-relaxed text-lg">
          <p>
            Le plus grand facteur de diff&eacute;renciation de StratGen est la g&eacute;n&eacute;ration
            automatis&eacute;e de strat&eacute;gie. L&agrave; o&ugrave; un consultant SEO passe habituellement
            8 &agrave; 15 heures &agrave; analyser la concurrence, identifier les opportunit&eacute;s et
            planifier le contenu, le moteur IA de StratGen produit un livrable &eacute;quivalent en quelques
            minutes. Cela lib&egrave;re du temps pour la cr&eacute;ation de contenu et l&apos;ex&eacute;cution
            &mdash; les activit&eacute;s &agrave; plus forte valeur ajout&eacute;e.
          </p>
          <p>
            Le clustering par intention de recherche a particuli&egrave;rement s&eacute;duit les agences SEO :
            au lieu de traiter les mots-cl&eacute;s individuellement, StratGen les organise en groupes
            th&eacute;matiques coh&eacute;rents, permettant de cr&eacute;er des cocons s&eacute;mantiques
            structur&eacute;s qui maximisent le maillage interne et l&apos;autorit&eacute; topique.
          </p>
          <p>
            Les espaces collaboratifs ont permis aux agences de centraliser la gestion de tous leurs clients
            dans un seul outil, avec des permissions granulaires permettant aux clients de consulter leur
            dashboard sans acc&eacute;der aux donn&eacute;es des autres comptes. Le gain de productivit&eacute;
            rapport&eacute; d&eacute;passe 50% sur la gestion de portefeuille client.
          </p>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="py-16">
        <div className="card p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Vous avez un projet <span className="text-gradient">similaire</span> ?
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            HEXAIT con&ccedil;oit et d&eacute;veloppe des plateformes SaaS data-driven sur mesure &mdash;
            de l&apos;architecture technique &agrave; l&apos;int&eacute;gration IA. Discutons de votre projet.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-cta">
              Discuter de mon projet <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-ghost">
              D&eacute;couvrir nos services
            </Link>
          </div>
          <p className="mt-6 text-sm text-[var(--text-tertiary)]">
            Cadrage technique offert &bull; Proposition sous 48h &bull; Interlocuteur senior d&eacute;di&eacute;
          </p>
        </div>
      </Section>
    </>
  );
}
