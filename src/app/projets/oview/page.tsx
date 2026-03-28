import type { Metadata } from 'next';
import Section from '@/components/Section';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ChefHat,
  Clock,
  Cloud,
  CreditCard,
  Database,
  Globe,
  LayoutDashboard,
  MonitorSmartphone,
  Package,
  QrCode,
  Receipt,
  Shield,
  ShoppingBag,
  Smartphone,
  Star,
  TrendingUp,
  Truck,
  Users,
  UtensilsCrossed,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Oview — Plateforme de digitalisation pour la restauration',
  description:
    'Etude de cas Oview : logiciel restaurant tout-en-un avec menu digital QR code, commande en ligne, ecran cuisine KDS, paiements et analytics. Developpe par HEXAIT.',
  keywords: [
    'logiciel restaurant',
    'menu digital QR code',
    'commande en ligne restaurant',
    'ecran cuisine KDS',
    'gestion restaurant',
    'Oview',
    'HEXAIT',
  ],
  alternates: { canonical: '/projets/oview' },
};

export default function Page() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-24 pb-12">
        <div className="mb-8">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-green-300 transition-colors"
          >
            <ArrowLeft size={16} /> Retour aux projets
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="hero-badge inline-flex items-center gap-2">
              <UtensilsCrossed size={16} /> SaaS &bull; Restauration &bull; Digitalisation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 leading-tight">
              <span className="text-gradient">Oview</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-300 font-semibold mt-3">
              Plateforme de digitalisation tout-en-un pour la restauration
            </p>
            <p className="text-lg text-[var(--text-secondary)] mt-4 leading-relaxed">
              Op&eacute;rationnel en 30&nbsp;minutes, +18% de ticket moyen, z&eacute;ro commission.
              Oview transforme chaque restaurant en &eacute;tablissement connect&eacute; &mdash; du menu
              digital QR&nbsp;code &agrave; l&apos;analyse de performance, en passant par la commande
              en ligne et l&apos;&eacute;cran cuisine.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://oview.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
              >
                Visiter Oview <ArrowRight size={16} />
              </a>
              <Link href="/contact" className="btn-ghost">
                Lancer un projet similaire
              </Link>
            </div>
          </div>

          <div className="card overflow-hidden p-0">
            <div className="aspect-video relative bg-gradient-to-br from-green-500/10 to-blue-500/10">
              {/* Image: Dashboard principal Oview avec vues commandes, CA du jour et notifications en temps reel */}
            </div>
            <div className="p-4">
              <p className="text-sm text-[var(--text-tertiary)]">
                Dashboard Oview &mdash; Pilotage du restaurant en temps r&eacute;el
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CHIFFRES CLES */}
      <Section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '30 min', label: 'pour \u00eatre op\u00e9rationnel', icon: <Clock size={24} className="text-green-300" /> },
            { value: '+18%', label: 'ticket moyen', icon: <TrendingUp size={24} className="text-green-300" /> },
            { value: '0%', label: 'commission sur transactions', icon: <CreditCard size={24} className="text-green-300" /> },
            { value: '29\u20ac', label: '/mois \u00e0 partir de', icon: <Star size={24} className="text-green-300" /> },
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
            Le secteur de la restauration en France repr&eacute;sente plus de 200&nbsp;000 &eacute;tablissements
            et g&eacute;n&egrave;re pr&egrave;s de 60&nbsp;milliards d&apos;euros de chiffre d&apos;affaires annuel.
            Pourtant, la digitalisation reste largement incompl&egrave;te : la plupart des restaurants fonctionnent
            encore avec des cartes papier, des prises de commande manuelles et des processus de gestion fragment&eacute;s
            entre plusieurs outils non connect&eacute;s.
          </p>
          <p>
            La pand&eacute;mie de COVID-19 a acc&eacute;l&eacute;r&eacute; la prise de conscience : les restaurants
            qui avaient d&eacute;j&agrave; digitalis&eacute; leurs op&eacute;rations ont mieux r&eacute;sist&eacute;.
            Mais les solutions existantes pr&eacute;sentent des d&eacute;fauts majeurs &mdash; commissions &eacute;lev&eacute;es
            sur chaque transaction (jusqu&apos;&agrave; 30% pour certaines plateformes de livraison), interfaces complexes,
            co&ucirc;ts d&apos;installation prohibitifs et manque d&apos;int&eacute;gration entre les diff&eacute;rents outils.
          </p>
          <p>
            C&apos;est pour r&eacute;pondre &agrave; ces lacunes que le projet <strong>Oview</strong> a &eacute;t&eacute;
            lanc&eacute; : cr&eacute;er une plateforme unifi&eacute;e, sans commission, qui couvre l&apos;int&eacute;gralit&eacute;
            des besoins num&eacute;riques d&apos;un restaurant &mdash; de la carte digitale au reporting financier.
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
              icon: <Receipt size={24} className="text-red-400" />,
              title: 'Commissions pr\u00e9datrices',
              desc: 'Les plateformes de livraison pr\u00e9l\u00e8vent 15 \u00e0 30% par commande. Sur des marges d\u00e9j\u00e0 faibles en restauration (3-10%), cela asphyxie les restaurateurs.',
            },
            {
              icon: <MonitorSmartphone size={24} className="text-red-400" />,
              title: 'Fragmentation des outils',
              desc: 'Caisse, commandes en ligne, r\u00e9servations, gestion des stocks, comptabilit\u00e9 : chaque besoin n\u00e9cessite un outil diff\u00e9rent, sans passerelle entre eux.',
            },
            {
              icon: <Clock size={24} className="text-red-400" />,
              title: 'Perte de temps op\u00e9rationnelle',
              desc: 'Saisie manuelle des commandes, erreurs de transmission en cuisine, gestion papier des stocks \u2014 autant de sources d\u2019inefficacit\u00e9 qui p\u00e8sent sur le service.',
            },
            {
              icon: <BarChart3 size={24} className="text-red-400" />,
              title: 'Manque de visibilit\u00e9',
              desc: 'Sans analytics centralis\u00e9s, les restaurateurs pilotent \u00e0 l\u2019aveugle : pas de vue claire sur les plats les plus rentables, les heures de pointe ou le panier moyen.',
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
            HEXAIT a architecur&eacute; et d&eacute;velopp&eacute; <strong>Oview</strong> comme une plateforme SaaS
            modulaire, con&ccedil;ue pour &ecirc;tre d&eacute;ploy&eacute;e en 30&nbsp;minutes dans n&apos;importe
            quel type de restaurant &mdash; bistrot, gastronomique, fast-food, dark kitchen ou cha&icirc;ne
            multi-sites.
          </p>
          <p>
            Le c&oelig;ur de la solution repose sur un menu digital accessible via QR&nbsp;code, modifiable en
            temps r&eacute;el par le restaurateur. Les clients scannent, consultent la carte avec allergies
            et prix &agrave; jour, commandent et paient directement depuis leur t&eacute;l&eacute;phone.
            La commande arrive instantan&eacute;ment sur l&apos;&eacute;cran cuisine (KDS) sans intervention
            humaine, &eacute;liminant les erreurs de transmission.
          </p>
          <p>
            Pour la vente &agrave; emporter, Oview int&egrave;gre un module Click&nbsp;&amp;&nbsp;Collect
            permettant aux clients de commander en ligne et r&eacute;cup&eacute;rer sur place. Le syst&egrave;me
            g&egrave;re automatiquement les cr&eacute;neaux de retrait, les notifications client et la
            pr&eacute;paration en cuisine.
          </p>
          <p>
            L&apos;ensemble est pilot&eacute; depuis un tableau de bord analytique en temps r&eacute;el : chiffre
            d&apos;affaires, panier moyen, plats les plus command&eacute;s, heures de pointe, gestion des stocks
            et planning du personnel. Le mod&egrave;le &eacute;conomique d&apos;Oview repose uniquement sur
            l&apos;abonnement mensuel &mdash; <strong>z&eacute;ro commission</strong> sur les transactions.
          </p>
        </div>

        <div className="mt-8 card overflow-hidden p-0">
          <div className="aspect-video relative bg-gradient-to-br from-green-500/10 to-emerald-500/10">
            {/* Image: Parcours client complet Oview : scan QR code -> menu digital -> commande -> paiement -> ecran cuisine */}
          </div>
          <div className="p-4">
            <p className="text-sm text-[var(--text-tertiary)]">
              Parcours client int&eacute;gral &mdash; Du scan QR&nbsp;code &agrave; la pr&eacute;paration en cuisine
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
              icon: <QrCode size={24} className="text-green-300" />,
              title: 'Menu digital QR code',
              desc: 'Carte interactive accessible par QR code. Modification en temps r\u00e9el des plats, prix, photos et allerg\u00e8nes. Multilingue et responsive.',
            },
            {
              icon: <ShoppingBag size={24} className="text-green-300" />,
              title: 'Commande en ligne',
              desc: 'Commande sur place (scan & order) et \u00e0 emporter (Click & Collect). Interface fluide, personnalisation des plats et panier intelligent.',
            },
            {
              icon: <ChefHat size={24} className="text-green-300" />,
              title: '\u00c9cran cuisine (KDS)',
              desc: '\u00c9cran de gestion des commandes en cuisine. Affichage en temps r\u00e9el, gestion des priorit\u00e9s, timer de pr\u00e9paration et validation par poste.',
            },
            {
              icon: <CreditCard size={24} className="text-green-300" />,
              title: 'Paiements multi-modes',
              desc: 'CB, Apple Pay, Google Pay, titres-restaurant. Paiement s\u00e9curis\u00e9 via Stripe, z\u00e9ro commission Oview. Pourboire digital int\u00e9gr\u00e9.',
            },
            {
              icon: <BarChart3 size={24} className="text-green-300" />,
              title: 'Analytics & reporting',
              desc: 'Tableau de bord en temps r\u00e9el : CA, panier moyen, plats populaires, heures de pointe. Export PDF et int\u00e9gration comptable.',
            },
            {
              icon: <Package size={24} className="text-green-300" />,
              title: 'Gestion des stocks',
              desc: 'Suivi des stocks en temps r\u00e9el. Alertes de rupture, mouvements automatis\u00e9s \u00e0 chaque commande, co\u00fbt mati\u00e8re par plat.',
            },
            {
              icon: <CalendarDays size={24} className="text-green-300" />,
              title: 'R\u00e9servations',
              desc: 'Syst\u00e8me de r\u00e9servation en ligne avec confirmation automatique, gestion des cr\u00e9neaux et rappels SMS/e-mail aux clients.',
            },
            {
              icon: <Users size={24} className="text-green-300" />,
              title: 'Planning du personnel',
              desc: 'Gestion des plannings, des r\u00f4les et des disponibilit\u00e9s. Vue hebdomadaire, export et notifications d\u2019\u00e9quipe.',
            },
            {
              icon: <Truck size={24} className="text-green-300" />,
              title: 'Int\u00e9grations tierces',
              desc: 'Connexion native avec UberEats, Deliveroo, Sage et QuickBooks. Centralisation de toutes les commandes dans une interface unique.',
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
            <div className="aspect-video relative bg-gradient-to-br from-green-500/10 to-teal-500/10">
              {/* Image: Menu digital Oview sur smartphone avec categories de plats, photos et allergenes */}
            </div>
            <div className="p-4">
              <p className="text-sm text-[var(--text-tertiary)]">
                Menu digital sur smartphone &mdash; Cat&eacute;gories, photos et allerg&egrave;nes
              </p>
            </div>
          </div>
          <div className="card overflow-hidden p-0">
            <div className="aspect-video relative bg-gradient-to-br from-emerald-500/10 to-blue-500/10">
              {/* Image: Ecran cuisine KDS avec commandes en cours, timers et statuts de preparation */}
            </div>
            <div className="p-4">
              <p className="text-sm text-[var(--text-tertiary)]">
                &Eacute;cran cuisine (KDS) &mdash; Commandes en temps r&eacute;el et gestion des priorit&eacute;s
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
          Oview repose sur une architecture cloud-native con&ccedil;ue pour la performance en temps r&eacute;el
          et la scalabilit&eacute; multi-restaurants.
        </p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Globe size={24} className="text-green-300" />,
              tech: 'Next.js',
              role: 'Framework fullstack avec App Router, Server Components pour le SEO des pages publiques et API routes pour le backend.',
            },
            {
              icon: <Zap size={24} className="text-green-300" />,
              tech: 'TypeScript',
              role: 'Typage strict end-to-end pour garantir la fiabilit\u00e9 des flux de commande et de paiement critiques.',
            },
            {
              icon: <Database size={24} className="text-green-300" />,
              tech: 'PostgreSQL',
              role: 'Base relationnelle pour les commandes, stocks, r\u00e9servations et donn\u00e9es transactionnelles avec int\u00e9grit\u00e9 ACID.',
            },
            {
              icon: <CreditCard size={24} className="text-green-300" />,
              tech: 'Stripe',
              role: 'Infrastructure de paiement s\u00e9curis\u00e9e : CB, Apple Pay, Google Pay, titres-restaurant et pourboires digitaux.',
            },
            {
              icon: <Cloud size={24} className="text-green-300" />,
              tech: 'Vercel',
              role: 'D\u00e9ploiement edge-first avec CDN mondial pour des temps de chargement optimaux sur les menus QR code.',
            },
            {
              icon: <Shield size={24} className="text-green-300" />,
              tech: 'Temps r\u00e9el',
              role: 'WebSockets pour la synchronisation instantan\u00e9e entre l\u2019application client, le KDS cuisine et le dashboard manager.',
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
          Trois formules sans commission, adapt&eacute;es &agrave; chaque taille de restaurant.
          Z&eacute;ro frais cach&eacute;s, z&eacute;ro engagement de dur&eacute;e.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Start',
              price: '29\u20ac',
              period: '/mois',
              desc: 'Pour d\u00e9marrer la digitalisation',
              features: [
                'Menu digital QR code',
                'Commande sur place',
                'Paiements int\u00e9gr\u00e9s',
                'Dashboard basique',
                'Z\u00e9ro commission',
              ],
            },
            {
              name: 'Smart',
              price: '59\u20ac',
              period: '/mois',
              desc: 'Pour les restaurants actifs',
              features: [
                'Tout Start +',
                'Click & Collect',
                '\u00c9cran cuisine (KDS)',
                'Gestion des stocks',
                'R\u00e9servations en ligne',
                'Analytics avanc\u00e9s',
              ],
            },
            {
              name: 'Elite',
              price: '99\u20ac',
              period: '/mois',
              desc: 'Pour les multi-sites',
              features: [
                'Tout Smart +',
                'Multi-restaurants',
                'Int\u00e9grations UberEats & Deliveroo',
                'Planning personnel',
                'Export comptable Sage/QB',
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
                    <CheckCircle2 size={16} className="text-green-300 shrink-0" />
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
            Oview est pr&eacute;vu pour un lancement commercial en 2026. Les r&eacute;sultats ci-dessous sont
            issus de la phase de b&ecirc;ta-test men&eacute;e aupr&egrave;s de restaurants partenaires
            en r&eacute;gion parisienne.
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { metric: '30 min', desc: 'Temps moyen de d\u00e9ploiement complet pour un restaurant, de l\u2019inscription \u00e0 la premi\u00e8re commande' },
            { metric: '+18%', desc: 'Augmentation moyenne du ticket gr\u00e2ce \u00e0 la commande digitale et aux suggestions intelligentes' },
            { metric: '0%', desc: 'Commission sur les transactions \u2014 le restaurateur conserve 100% de son chiffre d\u2019affaires' },
            { metric: '-40%', desc: 'R\u00e9duction des erreurs de commande gr\u00e2ce \u00e0 la transmission directe vers l\u2019\u00e9cran cuisine' },
          ].map((r) => (
            <div key={r.metric} className="card text-center">
              <p className="text-3xl font-extrabold text-gradient">{r.metric}</p>
              <p className="text-sm text-[var(--text-tertiary)] mt-2">{r.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 space-y-4 text-[var(--text-secondary)] leading-relaxed text-lg">
          <p>
            L&apos;impact le plus significatif observ&eacute; en b&ecirc;ta concerne le ticket moyen :
            l&apos;interface digitale facilite la d&eacute;couverte de l&apos;ensemble de la carte, affiche
            des photos apaisantes et propose des suggestions d&apos;accompagnement &mdash; un levier de
            vente additionnelle que le service en salle ne peut pas toujours activer, surtout en p&eacute;riode
            de rush.
          </p>
          <p>
            C&ocirc;t&eacute; cuisine, le KDS a transform&eacute; le flux de travail : les commandes arrivent
            structur&eacute;es par poste (entr&eacute;es, plats, desserts), avec un timer de pr&eacute;paration
            qui optimise la cadence. Les chefs partenaires rapportent une meilleure fluidit&eacute; de service,
            m&ecirc;me aux heures de pointe.
          </p>
          <p>
            Enfin, le mod&egrave;le sans commission a convaincu les restaurateurs les plus sceptiques : &agrave;
            59&euro;/mois, le retour sur investissement est atteint d&egrave;s les premi&egrave;res commandes
            digitales gr&acirc;ce &agrave; l&apos;augmentation du panier moyen et &agrave; la r&eacute;duction
            des erreurs.
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
            HEXAIT con&ccedil;oit et d&eacute;veloppe des plateformes SaaS sur mesure pour la restauration,
            le retail et les services. Parlons de votre vision.
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
