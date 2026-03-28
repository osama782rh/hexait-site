import type { Metadata } from 'next';
import Section from '@/components/Section';
import InlineForm from '@/components/InlineForm';
import Link from 'next/link';
import {
  Palette, PenTool, Layers, Users, Accessibility, Smartphone,
  ArrowRight, CheckCircle, Eye, Layout, MousePointer,
  FileText, Figma, Repeat, Lightbulb, Target,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'UX/UI Design -- Interfaces intuitives et design systeme | HEXAIT',
  description:
    'UX UI design : recherche utilisateur, wireframes, prototypes Figma, design system et accessibilite WCAG. Interfaces intuitives pour vos applications web. HEXAIT.',
  alternates: { canonical: '/services/ux-ui-design' },
  openGraph: {
    title: 'UX/UI Design -- Interfaces intuitives et design systeme | HEXAIT',
    description:
      'Design d&apos;interface application web : UX research, wireframes, prototypes interactifs, design system et accessibilite.',
  },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <span className="hero-badge">UX/UI Design</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
            <span className="text-gradient">Interfaces intuitives</span> et design systeme
          </h1>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Le design d&apos;interface application ne se limite pas a l&apos;esthetique. Chez HEXAIT,
            nous concevons des experiences utilisateur fondees sur la recherche, les tests et
            l&apos;iteration. Nos interfaces sont pensees pour etre comprises immediatement,
            accessibles a tous et coherentes sur chaque ecran. UX UI design au service
            de vos applications web et metier.
          </p>
          <div className="mt-6 flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-cta">Discuter de votre design</Link>
            <Link href="/services" className="btn-ghost">Tous nos services</Link>
          </div>
        </div>
      </Section>

      {/* Notre approche design */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Lightbulb className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Notre approche du design</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Nous suivons un processus de design centre utilisateur (User-Centered Design) qui
          place les besoins reels de vos utilisateurs au coeur de chaque decision. Pas de
          design pour le design : chaque element d&apos;interface sert un objectif fonctionnel.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              icon: <Users aria-hidden="true" />,
              title: 'Recherche utilisateur',
              desc: 'Entretiens, questionnaires, analyse des parcours existants et benchmarking concurrentiel. Nous identifions les besoins reels, les frustrations et les attentes de vos utilisateurs cibles avant de dessiner le moindre ecran.',
            },
            {
              step: '02',
              icon: <PenTool aria-hidden="true" />,
              title: 'Wireframes',
              desc: 'Schemas structurels de chaque ecran, sans habillage visuel, pour valider l&apos;architecture de l&apos;information et les parcours utilisateur. Iteration rapide et validation avec votre equipe avant de passer au design visuel.',
            },
            {
              step: '03',
              icon: <Palette aria-hidden="true" />,
              title: 'Prototypes interactifs',
              desc: 'Maquettes haute fidelite dans Figma avec interactions navigables. Vos parties prenantes testent le produit comme s&apos;il etait reel, avant meme qu&apos;une seule ligne de code ne soit ecrite. Gain de temps et reduction des risques.',
            },
            {
              step: '04',
              icon: <Layers aria-hidden="true" />,
              title: 'Design system',
              desc: 'Bibliotheque de composants reutilisables, guide typographique, palette de couleurs et regles d&apos;espacement. Le design system garantit la coherence visuelle sur toutes les pages et accelere le developpement des futures fonctionnalites.',
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

      {/* UX Research en detail */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Eye className="text-[var(--accent-light)]" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-extrabold">UX Research : comprendre avant de designer</h2>
            </div>
            <p className="text-[var(--text-secondary)] mt-3">
              La recherche utilisateur est le fondement de tout bon design. Sans comprendre
              qui sont vos utilisateurs, quels problemes ils cherchent a resoudre et dans
              quel contexte ils utilisent votre application, le design reste un exercice
              esthetique deconnecte de la realite.
            </p>
            <p className="text-[var(--text-secondary)] mt-3">
              Nos methodes de recherche s&apos;adaptent a votre budget et a vos contraintes.
              Pour un MVP, quelques entretiens et un benchmark suffisent a orienter les
              decisions de design. Pour un produit mature, nous realisons des etudes plus
              approfondies avec tests d&apos;utilisabilite, tri de cartes et analyses quantitatives.
            </p>
            <p className="text-[var(--text-secondary)] mt-3">
              L&apos;objectif est toujours le meme : prendre des decisions de design fondees sur
              des donnees plutot que sur des intuitions. Le design d&apos;interface application
              qui convertit est celui qui repond aux vrais besoins de ses utilisateurs.
            </p>
          </div>
          <div className="space-y-4">
            <div className="card">
              <h3 className="font-bold">Methodes qualitatives</h3>
              <ul className="mt-3 space-y-2">
                {[
                  'Entretiens utilisateurs individuels',
                  'Tests d&apos;utilisabilite (moderes et non moderes)',
                  'Observation contextuelle (shadowing)',
                  'Tri de cartes (card sorting)',
                  'Audit UX de l&apos;existant',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle size={14} className="text-[var(--accent-light)] mt-0.5 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold">Methodes quantitatives</h3>
              <ul className="mt-3 space-y-2">
                {[
                  'Questionnaires en ligne (SUS, NPS)',
                  'Analyse des donnees analytics',
                  'Heatmaps et enregistrements de sessions',
                  'A/B testing',
                  'Benchmarking concurrentiel',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle size={14} className="text-[var(--accent-light)] mt-0.5 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Figma et outils */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Figma className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Nos outils de design</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Nous travaillons principalement avec Figma, l&apos;outil de design collaboratif de
          reference. Toute votre equipe peut suivre l&apos;avancement, commenter et valider
          les maquettes en temps reel, sans installer de logiciel.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <Figma className="text-[var(--accent-light)]" aria-hidden="true" />
            <h3 className="font-bold mt-3">Figma</h3>
            <p className="text-[var(--text-secondary)] text-sm mt-2">
              Notre outil principal pour la creation de wireframes, maquettes haute fidelite
              et prototypes interactifs. La collaboration en temps reel permet a votre equipe
              de commenter directement sur les maquettes. Les composants Figma sont structures
              pour faciliter le passage au developpement : nomenclature coherente, variantes
              documentees et specifications exportables.
            </p>
          </div>
          <div className="card">
            <MousePointer className="text-[var(--accent-light)]" aria-hidden="true" />
            <h3 className="font-bold mt-3">Prototypage interactif</h3>
            <p className="text-[var(--text-secondary)] text-sm mt-2">
              Les prototypes Figma reproduisent les interactions reelles : navigation entre
              ecrans, animations de transition, etats interactifs (hover, focus, erreur) et
              flux complets (inscription, paiement, onboarding). Vos testeurs naviguent dans
              le prototype comme dans l&apos;application finale, ce qui permet de valider
              l&apos;experience avant le developpement.
            </p>
          </div>
          <div className="card">
            <Layout className="text-[var(--accent-light)]" aria-hidden="true" />
            <h3 className="font-bold mt-3">Dev-ready handoff</h3>
            <p className="text-[var(--text-secondary)] text-sm mt-2">
              Les fichiers Figma sont organises pour un passage fluide au developpement :
              specifications CSS exportees, tokens de design documentes (couleurs, espacements,
              typographies), composants nommes selon les conventions du code et assets
              exportables en SVG/PNG. Les developpeurs n&apos;ont plus a deviner les espacements
              ou les couleurs.
            </p>
          </div>
        </div>
      </Section>

      {/* Design System */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Layers className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Design System</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Un design system est bien plus qu&apos;une bibliotheque de composants. C&apos;est un
          langage visuel partage entre designers et developpeurs qui garantit la coherence,
          accelere la production et facilite la maintenance de votre application.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-bold text-lg">Ce que contient un design system</h3>
            <ul className="mt-3 space-y-2">
              {[
                'Tokens de design : couleurs, typographies, espacements, ombres, rayons de bordure',
                'Composants atomiques : boutons, champs de formulaire, badges, avatars, icones',
                'Composants moleculaires : cartes, en-tetes, menus de navigation, modales',
                'Templates de pages : layouts de dashboard, pages de formulaire, ecrans d&apos;erreur',
                'Documentation : regles d&apos;utilisation, guidelines de redaction, do&apos;s and dont&apos;s',
                'Patterns d&apos;interaction : feedback utilisateur, chargement, etats vides, erreurs',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle size={14} className="text-[var(--accent-light)] mt-0.5 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 className="font-bold text-lg">Les benefices concrets</h3>
            <ul className="mt-3 space-y-2">
              {[
                'Coherence visuelle sur l&apos;ensemble de l&apos;application',
                'Developpement accelere : les composants sont reutilisables',
                'Onboarding simplifie pour les nouveaux membres de l&apos;equipe',
                'Maintenance facilitee : un changement se propage automatiquement',
                'Communication fluide entre designers et developpeurs',
                'Scalabilite : ajoutez des pages sans reinventer la roue',
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

      {/* Responsive design */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Smartphone className="text-[var(--accent-light)]" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-extrabold">Responsive design</h2>
            </div>
            <p className="text-[var(--text-secondary)] mt-3">
              Chaque interface que nous concevons s&apos;adapte fluidement a toutes les tailles
              d&apos;ecran : smartphones, tablettes, ordinateurs portables et grands ecrans.
              Nous adoptons une approche mobile-first qui garantit une experience optimale
              sur les terminaux les plus contraints, puis enrichissons progressivement
              l&apos;interface pour les ecrans plus grands.
            </p>
            <p className="text-[var(--text-secondary)] mt-3">
              Le responsive design ne se limite pas a &laquo; faire rentrer le contenu &raquo;
              sur un petit ecran. Nous repensons les parcours utilisateur pour chaque contexte
              d&apos;utilisation : navigation simplifiee sur mobile, mise en avant des actions
              principales, gestion intelligente des tableaux de donnees et adaptation des
              interactions (tactile vs. souris).
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold text-lg mb-4">Points de rupture</h3>
            <div className="space-y-3">
              {[
                { size: 'Mobile', range: '< 640px', desc: 'Navigation en hamburger, colonnes empilees, actions principales visibles' },
                { size: 'Tablette', range: '640px - 1024px', desc: 'Grille a 2 colonnes, sidebar retractable, interactions mixtes' },
                { size: 'Desktop', range: '1024px - 1280px', desc: 'Layout complet, sidebar permanente, menus deployes' },
                { size: 'Grand ecran', range: '> 1280px', desc: 'Conteneur centre, espacement genereux, multi-panneaux' },
              ].map((bp) => (
                <div key={bp.size}>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">{bp.size}</span>
                    <span className="text-xs text-[var(--accent-light)]">{bp.range}</span>
                  </div>
                  <p className="text-xs text-[var(--text-tertiary)] mt-0.5">{bp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Accessibilite */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Accessibility className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Accessibilite (WCAG)</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          L&apos;accessibilite numerique n&apos;est pas une option. En France, le RGAA impose aux
          services publics et a de nombreuses entreprises de rendre leurs interfaces accessibles.
          Au-dela de l&apos;obligation legale, une interface accessible touche un public plus large
          et ameliore l&apos;experience pour tous les utilisateurs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Eye aria-hidden="true" />,
              title: 'Contrastes et lisibilite',
              desc: 'Ratios de contraste conformes WCAG 2.1 AA (minimum 4.5:1 pour le texte courant). Tailles de police adequates, hierarchie visuelle claire et couleur jamais utilisee comme seul vecteur d&apos;information.',
            },
            {
              icon: <Target aria-hidden="true" />,
              title: 'Navigation au clavier',
              desc: 'Tous les elements interactifs sont atteignables et activables au clavier. Ordre de tabulation logique, indicateurs de focus visibles et raccourcis clavier pour les actions frequentes.',
            },
            {
              icon: <FileText aria-hidden="true" />,
              title: 'Lecteurs d&apos;ecran',
              desc: 'Structure semantique (headings, landmarks, labels) compatible avec les technologies d&apos;assistance. Textes alternatifs pour les elements visuels, annonces dynamiques pour les changements de contenu.',
            },
            {
              icon: <Repeat aria-hidden="true" />,
              title: 'Formulaires accessibles',
              desc: 'Labels associes aux champs, messages d&apos;erreur clairs et localises, suggestions de correction et validation en temps reel. Les formulaires sont utilisables sans souris et avec un lecteur d&apos;ecran.',
            },
            {
              icon: <Smartphone aria-hidden="true" />,
              title: 'Zones tactiles',
              desc: 'Tailles de cibles tactiles suffisantes (minimum 44x44px) pour eviter les erreurs de clic sur mobile. Espacement adequat entre les elements interactifs.',
            },
            {
              icon: <Lightbulb aria-hidden="true" />,
              title: 'Tests d&apos;accessibilite',
              desc: 'Audits automatises (axe, Lighthouse) et manuels (navigation clavier, lecteur d&apos;ecran). Nous testons avec de vrais outils d&apos;assistance pour garantir une experience concrete et non juste conforme sur le papier.',
            },
          ].map((item) => (
            <article key={item.title} className="card">
              <div className="text-[var(--accent-light)]">{item.icon}</div>
              <h3 className="font-bold mt-2">{item.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm mt-2">{item.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Collaboration design / dev */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Repeat className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Collaboration design & developpement</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Chez HEXAIT, designers et developpeurs travaillent main dans la main. Cette proximite
          evite les allers-retours inutiles et garantit que le produit final respecte fidelement
          le design concu.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Revues de design conjointes',
              desc: 'Designers et developpeurs participent ensemble aux revues de maquettes. Les contraintes techniques sont identifiees en amont, et les solutions sont trouvees collaborativement. Pas de mauvaises surprises lors de l&apos;integration.',
            },
            {
              title: 'Tokens de design partages',
              desc: 'Les tokens de design (couleurs, espacements, typographies) sont definis une seule fois et utilises a la fois dans Figma et dans le code (CSS variables, Tailwind config). Un changement de couleur dans le design system se propage automatiquement.',
            },
            {
              title: 'Composants aligns',
              desc: 'Chaque composant Figma a son equivalent en code React. La nomenclature est identique, les variantes sont les memes et les proprietes correspondent. Le designer et le developpeur parlent le meme langage.',
            },
            {
              title: 'Iteration continue',
              desc: 'Le design n&apos;est pas un livrable fige. Nous iterons en continu en fonction des retours utilisateurs, des contraintes techniques decouvertes en cours de route et des evolutions du produit.',
            },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Livrables */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <FileText className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Nos livrables design</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-6">
          A chaque phase du projet, vous recevez des livrables concrets, utilisables et valides
          par votre equipe.
        </p>

        <div className="card p-6">
          <ul className="grid md:grid-cols-2 gap-3">
            {[
              'Compte-rendu de recherche utilisateur avec personas',
              'Wireframes annotes de tous les ecrans principaux',
              'Maquettes haute fidelite dans Figma (desktop + mobile)',
              'Prototype interactif testable via un lien de partage',
              'Design system complet (composants, tokens, documentation)',
              'Guide de style et charte graphique numerique',
              'Specifications pour le developpement (handoff)',
              'Rapport d&apos;audit d&apos;accessibilite (si applicable)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle className="text-[var(--accent-light)] mt-0.5 shrink-0" size={16} aria-hidden="true" />
                <span className="text-[var(--text-secondary)] text-sm">{item}</span>
              </li>
            ))}
          </ul>
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
            { href: '/services/developpement-saas', label: 'Developpement SaaS' },
            { href: '/services/cloud-devops', label: 'Cloud & DevOps' },
            { href: '/services/audit-technique', label: 'Audit Technique' },
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
