import type { Metadata } from 'next';
import Section from '@/components/Section';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Combien coûte un développement web sur mesure en 2026 ?',
  description:
    'Découvrez les tarifs réels du développement web sur mesure en 2026 : site vitrine, application web, SaaS. Fourchettes de prix, facteurs de coût et conseils pour optimiser votre budget.',
  alternates: { canonical: '/blog/combien-coute-developpement-web-sur-mesure' },
};

export default function Page() {
  return (
    <Section>
      <article className="container max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="hero-badge">Guide tarifaire</span>
            <span className="text-sm text-[var(--text-tertiary)]">Lecture : 12 min</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Combien coûte un{' '}
            <span className="text-gradient">développement web sur mesure</span> en 2026 ?
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Le budget d&apos;un projet web sur mesure varie considérablement selon sa complexité.
            Dans cet article, nous détaillons les fourchettes de prix réalistes pour chaque type
            de projet, les facteurs qui influencent le coût final, et les clés pour maximiser
            votre retour sur investissement.
          </p>
        </div>

        {/* Introduction */}
        <div className="prose-custom">
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            La question du prix est souvent la première que se posent les dirigeants lorsqu&apos;ils
            envisagent de faire développer une application ou un site web sur mesure. Et c&apos;est
            parfaitement légitime : un développement web représente un investissement stratégique
            pour votre entreprise. Pourtant, obtenir une réponse claire reste difficile. Les
            devis varient du simple au décuple d&apos;un prestataire à l&apos;autre, et les grilles
            tarifaires sont rarement transparentes.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            Chez HEXAIT, nous croyons à la transparence totale sur les coûts. Cet article vous
            donne les fourchettes de prix réelles du marché en 2026, basées sur notre expérience
            et sur l&apos;observation du secteur parisien et français.
          </p>
        </div>

        {/* Section 1 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Les fourchettes de prix par type de projet
        </h2>

        <h3 className="text-xl font-semibold mt-8 mb-4">
          Site vitrine et site corporate : 3 000 à 8 000 euros
        </h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Un site vitrine sur mesure comprend généralement entre 5 et 15 pages, un design
          personnalisé, une intégration responsive et une optimisation SEO de base. Ce type de
          projet convient aux entreprises qui souhaitent une présence en ligne professionnelle
          sans fonctionnalités complexes.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Dans cette fourchette, vous obtenez un site performant, optimisé pour les moteurs de
          recherche, avec un design unique qui reflète votre identité de marque. Le délai de
          réalisation se situe entre 2 et 6 semaines selon le nombre de pages et la complexité
          du design.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Attention : en dessous de 3 000 euros, vous êtes généralement sur du template
          personnalisé et non du véritable sur-mesure. Ce n&apos;est pas forcément un problème,
          mais il faut en avoir conscience.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">
          Application web métier : 15 000 à 50 000 euros
        </h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Une application web métier inclut des fonctionnalités spécifiques à votre activité :
          gestion de clients, tableau de bord analytique, workflow automatisé, portail
          collaboratif. On parle ici d&apos;un outil qui remplace des processus manuels ou des
          tableurs Excel par une solution intégrée et efficace.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Le coût dépend fortement du nombre de fonctionnalités, de la complexité des règles
          métier et du niveau d&apos;intégration avec vos systèmes existants (ERP, CRM, API
          tierces). Un back-office de gestion simple se situe autour de 15 000 euros, tandis
          qu&apos;une plateforme complète avec rôles utilisateurs, notifications en temps réel et
          tableaux de bord avancés se rapproche des 40 000 à 50 000 euros.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Le délai de réalisation se situe entre 2 et 5 mois. Chez HEXAIT, nous livrons
          généralement un premier prototype fonctionnel sous 7 jours, ce qui permet de valider
          rapidement la direction avant d&apos;investir davantage.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">
          Plateforme SaaS complète : 40 000 à 150 000 euros et plus
        </h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Un SaaS (Software as a Service) est un produit logiciel complet destiné à être
          commercialisé auprès de multiples clients. Il requiert une architecture scalable, un
          système d&apos;authentification robuste, un module de facturation et d&apos;abonnement, une
          gestion multi-tenant, et bien souvent une API publique.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Le coût de développement d&apos;un SaaS sur mesure est naturellement plus élevé car il
          s&apos;agit d&apos;un produit complet avec des exigences de qualité, de sécurité et de
          performance élevées. Un MVP (produit minimum viable) fonctionnel se situe entre
          40 000 et 70 000 euros, tandis qu&apos;une plateforme mature avec toutes les
          fonctionnalités se rapproche ou dépasse les 150 000 euros.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Toutefois, un SaaS n&apos;a pas besoin d&apos;être livré en une seule fois. Une approche
          itérative — MVP puis évolutions successives — permet d&apos;étaler l&apos;investissement
          et de valider le marché avant de s&apos;engager sur des budgets importants.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Les facteurs qui influencent le coût de développement
        </h2>

        <h3 className="text-xl font-semibold mt-8 mb-4">La complexité fonctionnelle</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          C&apos;est le facteur numéro un. Plus votre application intègre de fonctionnalités
          complexes — paiement en ligne, intégrations API, temps réel, algorithmes de
          recommandation, gestion de droits avancée — plus le coût augmente. Chaque
          fonctionnalité doit être conçue, développée, testée et maintenue. C&apos;est pourquoi
          nous recommandons toujours de prioriser les fonctionnalités essentielles pour la
          première version, puis d&apos;itérer ensuite.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Le niveau de design UX/UI</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Un design sur mesure avec des animations fluides, des micro-interactions et un
          parcours utilisateur finement travaillé coûte naturellement plus cher qu&apos;un design
          épuré basé sur un système de composants existant. Un bon design n&apos;est pas un luxe :
          c&apos;est ce qui fait la différence entre un outil que les utilisateurs adoptent et un
          outil qu&apos;ils abandonnent. Comptez entre 3 000 et 15 000 euros pour la phase de
          design selon l&apos;ambition.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Les intégrations tierces</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Connecter votre application à un CRM (Salesforce, HubSpot), un ERP, un système de
          paiement (Stripe, GoCardless) ou des APIs métier représente un coût supplémentaire.
          Chaque intégration nécessite un développement spécifique, des tests et une
          maintenance continue. Comptez entre 2 000 et 10 000 euros par intégration selon sa
          complexité.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Les exigences de sécurité et conformité</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Si votre application traite des données sensibles (données de santé, données
          financières, données personnelles soumises au RGPD), les exigences de sécurité sont
          plus élevées. Audit de sécurité, chiffrement, gestion fine des accès,
          journalisation : ces éléments ajoutent entre 5 000 et 20 000 euros au budget selon
          le niveau de conformité requis.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">La localisation du prestataire</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Le tarif journalier moyen d&apos;un développeur senior en France se situe entre 500 et
          900 euros HT par jour en 2026. Les agences parisiennes facturent généralement entre
          600 et 1 200 euros HT par jour selon leur positionnement. En offshore, les tarifs
          descendent à 200-400 euros par jour, mais les coûts cachés (communication, qualité,
          retours) peuvent annuler l&apos;économie apparente. Chez HEXAIT, nous pratiquons des
          tarifs compétitifs pour une équipe 100 % basée à Paris, avec un interlocuteur senior
          dédié sur chaque projet.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Développement sur mesure vs templates vs no-code : quelle différence de coût ?
        </h2>

        <div className="card p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Templates et thèmes (500 à 3 000 euros)</h3>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Les solutions basées sur des templates (WordPress, Webflow) sont les plus
            économiques à court terme. Elles conviennent pour un site vitrine simple ou un
            blog. En revanche, dès que vous avez besoin de fonctionnalités spécifiques ou
            d&apos;un design vraiment unique, les limitations apparaissent rapidement. Les coûts
            de personnalisation avancée peuvent dépasser ceux d&apos;un développement sur mesure.
          </p>
        </div>

        <div className="card p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Plateformes no-code (2 000 à 15 000 euros)</h3>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Les outils no-code comme Bubble, Softr ou Glide permettent de créer des
            applications fonctionnelles sans écrire de code. C&apos;est une excellente option pour
            valider un concept rapidement. Mais la scalabilité, la performance et la
            maintenabilité à long terme posent des limites sérieuses. Le coût de migration
            vers une solution sur mesure peut représenter 80 à 100 % du coût d&apos;un
            développement from scratch.
          </p>
        </div>

        <div className="card p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">
            Développement sur mesure (3 000 à 150 000+ euros)
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Le développement sur mesure offre une liberté totale : architecture adaptée à vos
            besoins, performances optimales, évolutivité sans plafond, propriété intellectuelle
            complète. Le coût initial est plus élevé, mais le coût total de possession (TCO)
            sur 3 à 5 ans est souvent inférieur car vous évitez les limitations, les
            migrations coûteuses et les abonnements mensuels qui s&apos;accumulent.
          </p>
        </div>

        {/* Section 4 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Quand investir dans un développement web sur mesure ?
        </h2>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Le développement sur mesure n&apos;est pas toujours la meilleure option. Voici les
          situations où il se justifie pleinement :
        </p>

        <ul className="space-y-3 mb-6">
          <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">1.</span>
            <span>
              <strong className="text-white">Votre processus métier est unique.</strong> Si
              aucune solution standard ne correspond à votre façon de travailler, le sur-mesure
              est la seule voie pour automatiser efficacement.
            </span>
          </li>
          <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">2.</span>
            <span>
              <strong className="text-white">Vous avez validé votre marché.</strong> Si votre
              MVP no-code a prouvé la demande et que vous atteignez ses limites, il est temps
              de passer au sur-mesure pour scaler.
            </span>
          </li>
          <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">3.</span>
            <span>
              <strong className="text-white">La performance est critique.</strong> E-commerce
              à fort trafic, application temps réel, plateforme avec des milliers
              d&apos;utilisateurs simultanés : le sur-mesure offre des performances que les
              solutions génériques ne peuvent égaler.
            </span>
          </li>
          <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">4.</span>
            <span>
              <strong className="text-white">La sécurité est une priorité.</strong> Données
              sensibles, conformité réglementaire, secteur financier ou santé : le sur-mesure
              permet un contrôle total sur la sécurité.
            </span>
          </li>
          <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">5.</span>
            <span>
              <strong className="text-white">Vous souhaitez un avantage concurrentiel.</strong>{' '}
              Un outil métier unique peut devenir un véritable atout stratégique qui vous
              différencie de vos concurrents.
            </span>
          </li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Comment maximiser le ROI de votre investissement
        </h2>

        <h3 className="text-xl font-semibold mt-8 mb-4">Adoptez une approche MVP</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Ne cherchez pas à tout développer dès la première version. Identifiez les
          fonctionnalités essentielles qui apportent le plus de valeur, lancez une première
          version, recueillez les retours utilisateurs, puis itérez. Cette approche réduit le
          risque financier et garantit que chaque euro investi génère de la valeur. Un MVP
          bien conçu peut être opérationnel en 4 à 8 semaines pour 15 000 à 30 000 euros.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Investissez dans la qualité du code</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Un code bien architecturé coûte peut-être 10 à 20 % de plus à développer
          initialement, mais il réduit drastiquement les coûts de maintenance et
          d&apos;évolution. À l&apos;inverse, un code bâclé génère une dette technique qui explose
          les coûts à moyen terme. Chez HEXAIT, chaque ligne de code est revue et testée
          avant mise en production.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Prévoyez un budget de maintenance</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Un projet web n&apos;est jamais terminé. Mises à jour de sécurité, corrections de
          bugs, évolutions fonctionnelles : prévoyez un budget annuel de maintenance
          équivalent à 15 à 25 % du coût initial de développement. Ce budget garantit la
          pérennité et la sécurité de votre investissement dans le temps.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Mesurez le retour sur investissement</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Un développement web sur mesure doit être évalué comme un investissement, pas comme
          une dépense. Identifiez les métriques clés : temps gagné par vos équipes, réduction
          des erreurs manuelles, augmentation du chiffre d&apos;affaires, satisfaction client.
          Un outil métier qui fait gagner 2 heures par jour à 5 collaborateurs représente une
          économie de plus de 50 000 euros par an en coût salarial. Le ROI d&apos;un
          développement à 30 000 euros est alors atteint en moins de 8 mois.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Comment obtenir un devis fiable
        </h2>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Pour obtenir un devis précis et fiable, voici nos recommandations :
        </p>

        <ul className="space-y-3 mb-6">
          <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">&bull;</span>
            <span>
              <strong className="text-white">Rédigez un cahier des charges</strong>, même
              sommaire. Listez les fonctionnalités souhaitées, les utilisateurs cibles et vos
              contraintes techniques.
            </span>
          </li>
          <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">&bull;</span>
            <span>
              <strong className="text-white">Consultez au moins 3 prestataires</strong> pour
              comparer les approches et les tarifs. Méfiez-vous des devis anormalement bas
              comme des devis excessifs.
            </span>
          </li>
          <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">&bull;</span>
            <span>
              <strong className="text-white">Demandez un découpage en phases</strong> avec des
              livrables intermédiaires. Cela réduit le risque et vous donne de la visibilité
              sur l&apos;avancement.
            </span>
          </li>
          <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">&bull;</span>
            <span>
              <strong className="text-white">Vérifiez ce qui est inclus</strong> : hébergement,
              maintenance, formation, support post-livraison. Ces postes représentent souvent
              15 à 30 % du budget total.
            </span>
          </li>
        </ul>

        {/* CTA Section */}
        <div className="card p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Besoin d&apos;un devis pour votre projet web ?
          </h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-xl mx-auto">
            Chez HEXAIT, nous proposons un cadrage technique gratuit pour évaluer précisément
            le budget de votre projet. Interlocuteur senior dédié, transparence totale sur les
            coûts, proposition détaillée sous 48 heures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-cta">
              Demander un devis gratuit
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
