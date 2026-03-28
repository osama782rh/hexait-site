import type { Metadata } from 'next';
import Section from '@/components/Section';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Clock,
  CreditCard,
  FileText,
  Globe,
  MessageCircle,
  PenTool,
  Receipt,
  Send,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  CheckCircle2,
  BarChart3,
  Database,
  Cloud,
  Shield,
  Settings,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Welyx — Plateforme SaaS de gestion pour artisans et independants',
  description:
    'Etude de cas Welyx : logiciel de gestion artisan avec facturation automatique IA, generation de devis par WhatsApp, relances automatiques et paiements Stripe. Developpe par HEXAIT.',
  keywords: [
    'logiciel gestion artisan',
    'facturation automatique IA',
    'devis artisan automatique',
    'logiciel facturation independant',
    'SaaS gestion PME',
    'Welyx',
    'HEXAIT',
  ],
  alternates: { canonical: '/projets/welyx' },
};

export default function Page() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-24 pb-12">
        <div className="mb-8">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--accent-light)] transition-colors"
          >
            <ArrowLeft size={16} /> Retour aux projets
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="hero-badge inline-flex items-center gap-2">
              <Brain size={16} /> IA &bull; SaaS &bull; Automatisation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 leading-tight">
              <span className="text-gradient">Welyx</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--accent-light)] font-semibold mt-3">
              Plateforme SaaS de gestion assist&eacute;e par IA pour artisans et ind&eacute;pendants
            </p>
            <p className="text-lg text-[var(--text-secondary)] mt-4 leading-relaxed">
              Cr&eacute;ez un devis en 30&nbsp;secondes au lieu de 15&nbsp;minutes. Welyx est la plateforme
              tout-en-un qui automatise la gestion quotidienne des artisans, freelances et PME
              gr&acirc;ce &agrave; l&apos;intelligence artificielle.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://welyx.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
              >
                Visiter Welyx <ArrowRight size={16} />
              </a>
              <Link href="/contact" className="btn-ghost">
                Lancer un projet similaire
              </Link>
            </div>
          </div>

          <div className="card overflow-hidden p-0">
            <div className="aspect-video relative bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
              {/* Image: Capture d'ecran du dashboard principal Welyx avec KPI, graphiques CA et liste de factures */}
            </div>
            <div className="p-4">
              <p className="text-sm text-[var(--text-tertiary)]">
                Dashboard principal Welyx &mdash; Vue d&apos;ensemble de l&apos;activit&eacute; en temps r&eacute;el
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CHIFFRES CLES */}
      <Section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '30s', label: 'pour cr\u00e9er un devis', icon: <Clock size={24} className="text-[var(--accent-light)]" /> },
            { value: '98%', label: 'taux de recouvrement', icon: <TrendingUp size={24} className="text-[var(--accent-light)]" /> },
            { value: '3', label: 'formules tarifaires', icon: <CreditCard size={24} className="text-[var(--accent-light)]" /> },
            { value: '9\u20ac', label: '/mois \u00e0 partir de', icon: <Sparkles size={24} className="text-[var(--accent-light)]" /> },
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
            En France, plus de 3,5&nbsp;millions d&apos;artisans et de micro-entrepreneurs g&egrave;rent
            quotidiennement devis, factures, relances clients et suivi de paiements. La grande majorit&eacute;
            utilise encore des tableurs, voire du papier, pour r&eacute;aliser ces t&acirc;ches. R&eacute;sultat :
            des heures perdues chaque semaine en administratif, des erreurs de saisie fr&eacute;quentes et
            un taux d&apos;impay&eacute;s qui p&egrave;se directement sur la tr&eacute;sorerie.
          </p>
          <p>
            Le march&eacute; des logiciels de gestion pour ind&eacute;pendants propose d&eacute;j&agrave;
            plusieurs solutions, mais celles-ci restent souvent complexes, surdimensionn&eacute;es pour un
            artisan solo, ou trop rigides pour s&apos;adapter &agrave; la diversit&eacute; des m&eacute;tiers
            manuels &mdash; plomberie, &eacute;lectricit&eacute;, ma&ccedil;onnerie, menuiserie, peinture,
            carrelage, etc.
          </p>
          <p>
            C&apos;est dans ce contexte qu&apos;est n&eacute; le projet <strong>Welyx</strong> : offrir une
            plateforme SaaS con&ccedil;ue sp&eacute;cifiquement pour les artisans et les ind&eacute;pendants,
            capable de r&eacute;duire drastiquement le temps consacr&eacute; &agrave; la gestion
            administrative gr&acirc;ce &agrave; l&apos;intelligence artificielle.
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
              icon: <FileText size={24} className="text-red-400" />,
              title: 'Cr\u00e9ation de devis chronophage',
              desc: 'Un artisan passe en moyenne 15 \u00e0 30 minutes par devis, souvent en fin de journ\u00e9e apr\u00e8s le chantier. La cr\u00e9ation est fastidieuse, propice aux erreurs et souvent repouss\u00e9e.',
            },
            {
              icon: <Receipt size={24} className="text-red-400" />,
              title: 'Impay\u00e9s et manque de suivi',
              desc: 'Sans syst\u00e8me de relance automatique, les factures impay\u00e9es s\u2019accumulent. Le taux d\u2019impay\u00e9s moyen dans le BTP d\u00e9passe 5%, mettant en p\u00e9ril la tr\u00e9sorerie.',
            },
            {
              icon: <Users size={24} className="text-red-400" />,
              title: 'Gestion client \u00e9parpill\u00e9e',
              desc: 'Contacts dans le t\u00e9l\u00e9phone, historique sur papier, devis envoy\u00e9s par e-mail : aucune centralisation, aucun suivi structur\u00e9 de la relation client.',
            },
            {
              icon: <Settings size={24} className="text-red-400" />,
              title: 'Outils existants inadapt\u00e9s',
              desc: 'Les logiciels g\u00e9n\u00e9ralistes (ERP, CRM) sont trop complexes. Les solutions simplifi\u00e9es manquent de fonctionnalit\u00e9s cl\u00e9s comme la signature \u00e9lectronique ou le paiement int\u00e9gr\u00e9.',
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
            HEXAIT a con&ccedil;u et d&eacute;velopp&eacute; <strong>Welyx</strong> comme une plateforme SaaS
            tout-en-un, centr&eacute;e sur la simplicit&eacute; d&apos;usage et l&apos;automatisation par
            l&apos;IA. L&apos;objectif principal : permettre &agrave; un artisan de cr&eacute;er un devis en
            30&nbsp;secondes, directement depuis son t&eacute;l&eacute;phone ou via WhatsApp, en d&eacute;crivant
            simplement les travaux r&eacute;alis&eacute;s en langage naturel.
          </p>
          <p>
            L&apos;assistant IA de Welyx analyse la description du chantier, identifie les postes de travail,
            applique les tarifs du catalogue personnel de l&apos;artisan et g&eacute;n&egrave;re automatiquement
            un devis professionnel conforme aux normes l&eacute;gales. L&apos;artisan n&apos;a plus qu&apos;&agrave;
            v&eacute;rifier et envoyer &mdash; en un clic.
          </p>
          <p>
            Au-del&agrave; de la g&eacute;n&eacute;ration de devis, Welyx prend en charge l&apos;ensemble du
            cycle de vie commercial : signature &eacute;lectronique, conversion devis-facture, envoi automatique,
            relances programm&eacute;es &agrave; J+7, J+15 et J+30, et encaissement en ligne via Stripe.
            Le tout pilot&eacute; depuis un tableau de bord temps r&eacute;el qui centralise chiffre
            d&apos;affaires, impay&eacute;s, clients et activit&eacute;.
          </p>
        </div>

        <div className="mt-8 card overflow-hidden p-0">
          <div className="aspect-video relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
            {/* Image: Capture d'ecran de l'assistant IA Welyx generant un devis a partir d'une description en langage naturel */}
          </div>
          <div className="p-4">
            <p className="text-sm text-[var(--text-tertiary)]">
              L&apos;assistant IA transforme une description en langage naturel en devis professionnel
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
              icon: <Brain size={24} className="text-[var(--accent-light)]" />,
              title: 'Assistant IA de g\u00e9n\u00e9ration',
              desc: 'D\u00e9crivez les travaux en langage naturel. L\u2019IA analyse, structure et g\u00e9n\u00e8re un devis professionnel complet avec TVA, conditions et mentions l\u00e9gales.',
            },
            {
              icon: <MessageCircle size={24} className="text-[var(--accent-light)]" />,
              title: 'Int\u00e9gration WhatsApp',
              desc: 'Cr\u00e9ez et envoyez des devis directement depuis WhatsApp. Dictez ou tapez la description, Welyx s\u2019occupe du reste. Id\u00e9al sur chantier.',
            },
            {
              icon: <PenTool size={24} className="text-[var(--accent-light)]" />,
              title: 'Signature \u00e9lectronique',
              desc: 'Vos clients signent leurs devis en ligne, depuis n\u2019importe quel appareil. Valeur juridique, tra\u00e7abilit\u00e9 compl\u00e8te et conversion acc\u00e9l\u00e9r\u00e9e.',
            },
            {
              icon: <Send size={24} className="text-[var(--accent-light)]" />,
              title: 'Relances automatiques',
              desc: 'Programmation de relances \u00e0 J+7, J+15 et J+30 pour les factures impay\u00e9es. Ton professionnel, personnalisable, 98% de taux de recouvrement.',
            },
            {
              icon: <BarChart3 size={24} className="text-[var(--accent-light)]" />,
              title: 'Tableau de bord temps r\u00e9el',
              desc: 'Chiffre d\u2019affaires, impay\u00e9s, devis en attente, clients actifs : toute votre activit\u00e9 en un coup d\u2019\u0153il avec des graphiques interactifs.',
            },
            {
              icon: <CreditCard size={24} className="text-[var(--accent-light)]" />,
              title: 'Paiements Stripe int\u00e9gr\u00e9s',
              desc: 'Encaissez par carte bancaire, virement ou lien de paiement. Rapprochement automatique avec les factures \u00e9mises.',
            },
            {
              icon: <Smartphone size={24} className="text-[var(--accent-light)]" />,
              title: 'Catalogue produits',
              desc: 'Cr\u00e9ez votre catalogue de prestations avec tarifs, unit\u00e9s et descriptions. L\u2019IA s\u2019en sert pour g\u00e9n\u00e9rer des devis pr\u00e9cis.',
            },
            {
              icon: <FileText size={24} className="text-[var(--accent-light)]" />,
              title: 'Export comptable',
              desc: 'Exportez vos donn\u00e9es au format compatible avec votre comptable : CSV, PDF r\u00e9capitulatif, ventilation TVA. Simplifiez votre d\u00e9claration.',
            },
            {
              icon: <Users size={24} className="text-[var(--accent-light)]" />,
              title: 'Gestion clients (CRM)',
              desc: 'Fiches clients compl\u00e8tes avec historique des devis, factures, paiements et communications. Recherche et filtrage avanc\u00e9s.',
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
            <div className="aspect-video relative bg-gradient-to-br from-cyan-500/10 to-indigo-500/10">
              {/* Image: Interface de creation de devis Welyx avec champs pre-remplis par l'IA */}
            </div>
            <div className="p-4">
              <p className="text-sm text-[var(--text-tertiary)]">
                Interface de cr&eacute;ation de devis avec champs pr&eacute;-remplis par l&apos;IA
              </p>
            </div>
          </div>
          <div className="card overflow-hidden p-0">
            <div className="aspect-video relative bg-gradient-to-br from-purple-500/10 to-cyan-500/10">
              {/* Image: Vue mobile de Welyx avec notification de paiement recu et liste des factures */}
            </div>
            <div className="p-4">
              <p className="text-sm text-[var(--text-tertiary)]">
                Vue mobile &mdash; Notification de paiement re&ccedil;u et suivi des factures
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
          Welyx repose sur une architecture moderne, performante et s&eacute;curis&eacute;e, con&ccedil;ue
          pour &eacute;voluer avec la croissance de la base utilisateurs.
        </p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Globe size={24} className="text-[var(--accent-light)]" />,
              tech: 'Next.js',
              role: 'Framework fullstack pour le frontend et les API routes. SSR pour le SEO, ISR pour les performances.',
            },
            {
              icon: <Zap size={24} className="text-[var(--accent-light)]" />,
              tech: 'TypeScript',
              role: 'Typage statique sur l\u2019ensemble de la codebase pour une fiabilit\u00e9 maximale et un refactoring en confiance.',
            },
            {
              icon: <Database size={24} className="text-[var(--accent-light)]" />,
              tech: 'PostgreSQL',
              role: 'Base de donn\u00e9es relationnelle robuste pour les factures, clients, paiements et historiques transactionnels.',
            },
            {
              icon: <CreditCard size={24} className="text-[var(--accent-light)]" />,
              tech: 'Stripe',
              role: 'Gestion des paiements en ligne, abonnements SaaS, liens de paiement et rapprochement automatique.',
            },
            {
              icon: <Cloud size={24} className="text-[var(--accent-light)]" />,
              tech: 'Azure',
              role: 'H\u00e9bergement cloud, CDN, stockage de fichiers et services d\u2019IA pour le traitement du langage naturel.',
            },
            {
              icon: <Shield size={24} className="text-[var(--accent-light)]" />,
              tech: 'S\u00e9curit\u00e9',
              role: 'Chiffrement AES-256, authentification JWT, conformit\u00e9 RGPD et audits de s\u00e9curit\u00e9 r\u00e9guliers.',
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
          Trois formules adapt&eacute;es &agrave; chaque profil, de l&apos;artisan solo &agrave; la PME en croissance.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Starter',
              price: '9\u20ac',
              period: '/mois',
              desc: 'Pour les artisans solo',
              features: ['G\u00e9n\u00e9ration IA de devis', 'Facturation', 'Catalogue produits', 'Export PDF'],
            },
            {
              name: 'Pro',
              price: '19\u20ac',
              period: '/mois',
              desc: 'Pour les ind\u00e9pendants actifs',
              features: [
                'Tout Starter +',
                'Relances automatiques',
                'Signature \u00e9lectronique',
                'Paiements Stripe',
                'Int\u00e9gration WhatsApp',
              ],
            },
            {
              name: 'Business',
              price: '39\u20ac',
              period: '/mois',
              desc: 'Pour les PME',
              features: [
                'Tout Pro +',
                'Multi-utilisateurs',
                'Export comptable',
                'Dashboard avanc\u00e9',
                'Support prioritaire',
                'API acc\u00e8s',
              ],
            },
          ].map((plan) => (
            <div key={plan.name} className="card text-center">
              <h3 className="font-bold text-xl">{plan.name}</h3>
              <p className="text-[var(--text-tertiary)] text-sm mt-1">{plan.desc}</p>
              <p className="text-4xl font-extrabold text-gradient mt-4">
                {plan.price}
                <span className="text-lg text-[var(--text-tertiary)] font-normal">{plan.period}</span>
              </p>
              <ul className="mt-6 space-y-3 text-left">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle2 size={16} className="text-[var(--accent-light)] shrink-0" />
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
            Depuis son lancement, Welyx a transform&eacute; le quotidien de centaines d&apos;artisans et
            d&apos;ind&eacute;pendants en France. Les r&eacute;sultats mesur&eacute;s confirment l&apos;impact
            concret de la solution :
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { metric: '30 secondes', desc: 'Temps moyen de cr\u00e9ation d\u2019un devis contre 15-30 minutes auparavant' },
            { metric: '98%', desc: 'Taux de recouvrement gr\u00e2ce aux relances automatiques \u00e0 J+7, J+15, J+30' },
            { metric: '-80%', desc: 'R\u00e9duction du temps administratif hebdomadaire pour les utilisateurs' },
            { metric: '+45%', desc: 'Augmentation du taux de conversion devis-facture avec la signature \u00e9lectronique' },
          ].map((r) => (
            <div key={r.metric} className="card text-center">
              <p className="text-3xl font-extrabold text-gradient">{r.metric}</p>
              <p className="text-sm text-[var(--text-tertiary)] mt-2">{r.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 space-y-4 text-[var(--text-secondary)] leading-relaxed text-lg">
          <p>
            L&apos;int&eacute;gration WhatsApp a particuli&egrave;rement s&eacute;duit les artisans sur le
            terrain : la possibilit&eacute; de dicter une description de chantier et de recevoir un devis
            professionnel en retour a supprim&eacute; la barri&egrave;re entre le terrain et la gestion
            administrative. Plusieurs utilisateurs rapportent avoir r&eacute;cup&eacute;r&eacute; plus
            d&apos;une heure par jour de temps productif.
          </p>
          <p>
            Le syst&egrave;me de relances automatiques a eu un impact mesurable sur la tr&eacute;sorerie :
            le taux d&apos;impay&eacute;s a chut&eacute; de plus de 60% chez les utilisateurs actifs,
            lib&eacute;rant une tr&eacute;sorerie pr&eacute;cieuse pour investir dans leur activit&eacute;.
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
            HEXAIT con&ccedil;oit et d&eacute;veloppe des plateformes SaaS sur mesure &mdash; de la
            strat&eacute;gie produit au d&eacute;ploiement en production. Parlons de votre projet.
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
