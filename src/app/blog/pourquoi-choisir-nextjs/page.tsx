import type { Metadata } from 'next';
import Section from '@/components/Section';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pourquoi choisir Next.js pour votre application web en 2026 ?',
  description:
    'Découvrez pourquoi Next.js est le framework de référence pour les applications web en 2026 : SSR, SSG, performance, SEO, écosystème React. Comparatif avec les alternatives.',
  alternates: { canonical: '/blog/pourquoi-choisir-nextjs' },
};

export default function Page() {
  return (
    <Section>
      <article className="container max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="hero-badge">Expertise technique</span>
            <span className="text-sm text-[var(--text-tertiary)]">Lecture : 14 min</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Pourquoi choisir{' '}
            <span className="text-gradient">Next.js</span> pour votre application web en 2026 ?
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Next.js s&apos;est imposé comme le framework de référence pour les applications
            web modernes. Mais est-il le bon choix pour votre projet ? Analyse technique
            approfondie des avantages, des cas d&apos;usage et comparatif avec les alternatives.
          </p>
        </div>

        {/* Introduction */}
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Depuis sa création par Vercel en 2016, Next.js n&apos;a cessé de gagner en
          popularité. En 2026, il est utilisé par des entreprises comme Netflix, TikTok,
          Notion, Hulu et des milliers de startups à travers le monde. Avec l&apos;arrivée des
          Server Components, des Server Actions et de l&apos;architecture App Router, Next.js
          a franchi un cap qui en fait bien plus qu&apos;un simple framework React : c&apos;est
          une plateforme complète pour construire des applications web performantes.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Chez HEXAIT, Next.js est notre framework de prédilection pour le développement
          d&apos;applications web et de plateformes SaaS. Ce site même est construit avec
          Next.js. Dans cet article, nous partageons les raisons techniques qui motivent ce
          choix et les situations où il est le plus pertinent.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Les avantages techniques de Next.js
        </h2>

        <h3 className="text-xl font-semibold mt-8 mb-4">Rendu hybride : SSR, SSG et ISR</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          La force de Next.js réside dans sa flexibilité de rendu. Vous pouvez combiner
          plusieurs stratégies au sein d&apos;une même application. Le Server-Side Rendering
          (SSR) génère le HTML sur le serveur à chaque requête, idéal pour les pages dont le
          contenu change fréquemment. Le Static Site Generation (SSG) pré-génère les pages au
          moment du build, offrant des performances maximales pour le contenu statique.
          L&apos;Incremental Static Regeneration (ISR) combine les deux : les pages sont
          générées statiquement mais se mettent à jour automatiquement après un délai
          configurable. Cette flexibilité permet d&apos;optimiser chaque page individuellement
          selon ses besoins spécifiques en termes de fraîcheur des données et de performance.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Server Components : la révolution du rendu</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Les React Server Components, pleinement intégrés dans Next.js via l&apos;App Router,
          représentent une avancée majeure. Le principe est simple mais puissant : les
          composants qui n&apos;ont pas besoin d&apos;interactivité côté client sont rendus
          uniquement sur le serveur. Résultat : le bundle JavaScript envoyé au navigateur est
          considérablement réduit. Les données sont récupérées directement sur le serveur,
          sans waterfall de requêtes API côté client. L&apos;expérience utilisateur est plus
          rapide et le SEO est nativement optimisé puisque le contenu est disponible dans le
          HTML initial.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Performance et Core Web Vitals</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Next.js est conçu pour obtenir d&apos;excellents scores sur les Core Web Vitals de
          Google. L&apos;optimisation automatique des images via le composant Image, le
          chargement des polices sans layout shift grâce à next/font, le code splitting
          automatique par route, et le prefetching intelligent des liens visibles dans le
          viewport contribuent à des temps de chargement exceptionnels. En pratique, nous
          constatons régulièrement des améliorations de 40 à 60 % du Largest Contentful Paint
          (LCP) lors de migrations vers Next.js, ce qui se traduit directement par un
          meilleur référencement Google et un taux de conversion supérieur.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">SEO natif et optimisation pour les moteurs de recherche</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Le référencement naturel est souvent le talon d&apos;Achille des applications
          JavaScript. Les SPA (Single Page Applications) classiques peinent à être indexées
          correctement car leur contenu est généré côté client. Next.js résout ce problème
          fondamentalement grâce au rendu serveur. Chaque page est servie avec un HTML complet
          que les moteurs de recherche peuvent indexer immédiatement. L&apos;API Metadata de
          Next.js permet de gérer finement les balises title, description, Open Graph et
          structured data de manière déclarative. La génération automatique de sitemaps et le
          support natif de robots.txt complètent l&apos;arsenal SEO.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Developer Experience (DX) exceptionnelle</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          L&apos;expérience développeur est un critère souvent sous-estimé qui impacte
          directement la productivité et donc le coût de développement. Next.js offre un
          rechargement à chaud quasi instantané (Fast Refresh), un système de routing basé
          sur le système de fichiers qui élimine toute configuration manuelle, un support
          natif de TypeScript, des API Routes pour créer des endpoints backend sans serveur
          séparé, et un système de middleware puissant pour la gestion de l&apos;authentification,
          des redirections et du rate limiting. Toutes ces fonctionnalités réduisent
          significativement le temps de développement et donc le budget de votre projet.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Next.js face à ses concurrents : comparatif 2026
        </h2>

        <h3 className="text-xl font-semibold mt-8 mb-4">Next.js vs Vite + React (SPA)</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Vite avec React est excellent pour des applications internes (dashboards, back-offices)
          où le SEO n&apos;est pas un enjeu. Le setup est plus léger et le build plus rapide
          pour les projets simples. En revanche, dès que vous avez besoin de SEO, de rendu
          serveur, d&apos;optimisation d&apos;images ou de routes API, Next.js prend l&apos;avantage.
          Pour un produit destiné au public (SaaS, e-commerce, site corporate), Next.js est
          le choix le plus complet et le plus performant.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Next.js vs Remix</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Remix, racheté par Shopify, est un excellent framework qui met l&apos;accent sur les
          fondamentaux du web (progressive enhancement, formulaires HTML). Sa gestion du
          chargement de données via les loaders est élégante et performante. Cependant,
          l&apos;écosystème de Next.js est considérablement plus large : plus de packages
          compatibles, plus de tutoriels, plus de développeurs formés, plus d&apos;exemples et
          de templates. Pour un projet qui doit scaler en termes d&apos;équipe, la facilité de
          recrutement de développeurs Next.js est un avantage décisif. Remix reste un choix
          solide pour des projets où les standards web sont une priorité absolue.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Next.js vs Nuxt.js (Vue.js)</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Nuxt.js est l&apos;équivalent de Next.js dans l&apos;écosystème Vue.js. C&apos;est un
          framework mature et bien conçu. Le choix entre les deux dépend principalement de
          votre préférence d&apos;écosystème : React ou Vue. Objectivement, React dispose d&apos;un
          écosystème plus large, d&apos;un marché de l&apos;emploi plus favorable et d&apos;un
          investissement en R&D plus important (Meta pour React, Vercel pour Next.js). Nuxt
          reste pertinent si votre équipe a une forte expertise Vue.js ou si votre projet
          nécessite une courbe d&apos;apprentissage plus douce pour des développeurs juniors.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Next.js vs Astro</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Astro est spécialisé dans les sites à contenu statique avec un minimum de
          JavaScript. Son approche island architecture est brillante pour les blogs, les
          sites documentaires et les sites marketing. Si votre projet est principalement
          un site de contenu sans logique applicative complexe, Astro peut être un meilleur
          choix avec des bundles JavaScript quasi nuls. En revanche, dès que vous ajoutez
          de l&apos;interactivité significative, de l&apos;authentification ou des fonctionnalités
          applicatives, Next.js reprend l&apos;avantage grâce à son écosystème React complet.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Les cas d&apos;usage idéaux pour Next.js
        </h2>

        <h3 className="text-xl font-semibold mt-8 mb-4">Applications SaaS</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Next.js est particulièrement adapté au développement de plateformes SaaS. La
          combinaison du rendu serveur pour les pages publiques (landing, pricing, blog) et
          du rendu client pour l&apos;interface applicative (dashboard, paramètres) est naturelle
          avec Next.js. L&apos;authentification est gérée via le middleware, les API Routes
          permettent de créer un backend léger intégré, et le système de layouts partagés
          optimise la navigation au sein de l&apos;application. Chez HEXAIT, la majorité de nos
          projets SaaS sont développés avec Next.js.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Sites e-commerce</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Le e-commerce bénéficie pleinement des capacités de Next.js. Les pages produits
          sont pré-générées (SSG) pour des temps de chargement instantanés, ce qui améliore
          directement le taux de conversion. Le panier et le checkout utilisent le rendu
          client pour une expérience fluide. Les pages de catégories combinent SSG et ISR
          pour rester à jour sans sacrifier la performance. Vercel Commerce et Shopify
          Hydrogen (basé sur Remix mais avec des ponts Next.js) sont des exemples
          d&apos;écosystème mature pour le e-commerce.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Sites corporate et institutionnels</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Pour les sites corporate, Next.js avec un export statique offre le meilleur des
          deux mondes : les performances d&apos;un site statique avec la puissance de React pour
          les éléments interactifs. Le SEO est nativement optimisé, les Core Web Vitals sont
          excellents, et le site peut être hébergé sur un CDN pour des temps de chargement
          minimaux partout dans le monde. C&apos;est exactement l&apos;approche que nous utilisons
          pour le site HEXAIT que vous consultez actuellement.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Portails et applications métier</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Les portails client, les back-offices de gestion et les applications métier
          tirent parti du système de routing imbriqué de Next.js, des layouts partagés et
          du rendu parallèle. La gestion des droits d&apos;accès via le middleware, les API
          Routes pour les opérations CRUD, et l&apos;intégration native avec des bibliothèques
          comme NextAuth pour l&apos;authentification en font un choix naturel pour ce type de
          projet.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Les gains de performance mesurables
        </h2>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Au-delà de la théorie, voici les gains de performance concrets que nous observons
          sur nos projets lors de migrations vers Next.js ou lors de comparaisons avec des
          approches alternatives :
        </p>

        <div className="card p-6 mb-6">
          <ul className="space-y-3">
            <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
              <span className="text-cyan-400 font-bold">&bull;</span>
              <span>
                <strong className="text-white">Largest Contentful Paint (LCP)</strong> :
                amélioration de 40 à 60 % par rapport à une SPA classique. Temps moyen
                observé : 1,2 seconde contre 2,8 secondes.
              </span>
            </li>
            <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
              <span className="text-cyan-400 font-bold">&bull;</span>
              <span>
                <strong className="text-white">First Contentful Paint (FCP)</strong> :
                amélioration de 50 à 70 %. Le contenu significatif est visible en moins de
                0,8 seconde en moyenne.
              </span>
            </li>
            <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
              <span className="text-cyan-400 font-bold">&bull;</span>
              <span>
                <strong className="text-white">Taille du bundle JavaScript</strong> : réduction
                de 30 à 50 % grâce aux Server Components et au code splitting automatique.
              </span>
            </li>
            <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
              <span className="text-cyan-400 font-bold">&bull;</span>
              <span>
                <strong className="text-white">Time to Interactive (TTI)</strong> : réduction de
                35 à 55 %. L&apos;application devient interactive plus rapidement car moins de
                JavaScript doit être téléchargé et exécuté.
              </span>
            </li>
          </ul>
        </div>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Ces gains de performance ont un impact direct et mesurable sur les métriques
          business. Google a documenté qu&apos;une amélioration de 0,1 seconde du temps de
          chargement augmente le taux de conversion de 8 % pour les sites e-commerce.
          Pour un site générant 100 000 euros de chiffre d&apos;affaires mensuel, une
          amélioration de 1,5 seconde du LCP peut représenter des dizaines de milliers
          d&apos;euros de revenus supplémentaires par an.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          L&apos;écosystème Next.js en 2026
        </h2>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          La richesse de l&apos;écosystème Next.js est un avantage stratégique pour votre
          projet. Vous bénéficiez de l&apos;intégralité de l&apos;écosystème React — le plus
          vaste du développement web — plus des outils spécifiques à Next.js :
        </p>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Pour l&apos;authentification, NextAuth (Auth.js) offre une solution clé en main avec
          support OAuth, credentials et magic links. Pour le styling, Tailwind CSS, CSS
          Modules et styled-components sont tous supportés nativement. Pour les bases de
          données, Prisma, Drizzle ORM et les SDKs Supabase s&apos;intègrent parfaitement.
          Pour le paiement, les SDKs Stripe sont optimisés pour Next.js avec des composants
          serveur dédiés.
        </p>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Côté hébergement, Vercel offre une expérience de déploiement native, mais Next.js
          fonctionne tout aussi bien sur AWS, Azure, Google Cloud, Cloudflare ou en
          self-hosted avec Docker. Cette flexibilité d&apos;hébergement évite le vendor lock-in
          et vous laisse le choix de l&apos;infrastructure la plus adaptée à vos besoins et
          votre budget.
        </p>

        {/* CTA Section */}
        <div className="card p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à construire avec Next.js ?
          </h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-xl mx-auto">
            HEXAIT développe des applications web performantes avec Next.js, React et
            Node.js. Discutons de votre projet et de la meilleure approche technique pour
            atteindre vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-cta">
              Lancer mon projet
            </Link>
            <Link href="/services" className="btn-ghost">
              Découvrir nos services
            </Link>
          </div>
        </div>
      </article>
    </Section>
  );
}
