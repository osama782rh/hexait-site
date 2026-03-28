import type { Metadata } from 'next';
import Section from '@/components/Section';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Comment choisir son agence web à Paris en 2026 : guide complet',
  description:
    'Guide complet pour choisir la bonne agence web à Paris : critères techniques, questions à poser, red flags à éviter, comparatif freelance vs agence vs ESN.',
  alternates: { canonical: '/blog/comment-choisir-agence-web-paris' },
};

export default function Page() {
  return (
    <Section>
      <article className="container max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="hero-badge">Guide pratique</span>
            <span className="text-sm text-[var(--text-tertiary)]">Lecture : 13 min</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Comment choisir son{' '}
            <span className="text-gradient">agence web à Paris</span> en 2026 : guide complet
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Paris compte des centaines d&apos;agences web, de studios techniques et de
            freelances. Comment identifier le bon partenaire pour votre projet ? Voici les
            critères objectifs, les bonnes questions à poser et les signaux d&apos;alarme à
            repérer.
          </p>
        </div>

        {/* Introduction */}
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Choisir une agence web est une décision qui engage votre entreprise sur plusieurs
          mois, voire plusieurs années. Un mauvais choix se traduit par des retards, des
          surcoûts, un produit qui ne correspond pas à vos attentes, et parfois la nécessité
          de tout recommencer. À l&apos;inverse, un bon partenaire technique transforme votre
          vision en un produit concret, dans les délais et le budget convenus.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Ce guide vous donne les clés pour faire un choix éclairé parmi les prestataires
          web parisiens. Que vous cherchiez à développer un site web, une application métier
          ou un SaaS, les critères de sélection restent fondamentalement les mêmes.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Les 7 critères essentiels pour évaluer une agence web
        </h2>

        <h3 className="text-xl font-semibold mt-8 mb-4">1. La qualité du portfolio et des références</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Le portfolio est votre premier indicateur de compétence. Mais ne vous arrêtez pas
          à l&apos;apparence visuelle des projets présentés. Demandez des détails concrets :
          quel était le brief initial ? Quels défis techniques ont été résolus ? Quels ont
          été les délais et le budget réels ? Les meilleures agences acceptent de mettre
          leurs clients en relation directe pour des retours d&apos;expérience. Si une agence
          refuse de fournir des références vérifiables, c&apos;est un signal d&apos;alarme.
          Vérifiez également que les projets du portfolio sont encore en ligne et fonctionnels
          — un portfolio rempli de liens morts en dit long sur la qualité du suivi.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">2. L&apos;expertise technique réelle</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Une agence web compétente maîtrise les technologies modernes et sait justifier ses
          choix techniques. En 2026, une stack technique solide pour le développement web
          inclut React ou Next.js pour le front-end, Node.js ou Python pour le back-end, et
          PostgreSQL ou MongoDB pour la base de données. Mais au-delà de la stack, ce qui
          compte, c&apos;est la capacité de l&apos;agence à choisir les bonnes technologies pour
          votre projet spécifique. Méfiez-vous des agences qui utilisent la même stack pour
          tous les projets sans se poser de questions, comme de celles qui collectionnent les
          technologies à la mode sans les maîtriser.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">3. La transparence sur les processus</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Comment l&apos;agence gère-t-elle ses projets ? Un processus clair et documenté est
          le signe d&apos;une agence mature. Demandez : quelle méthodologie de gestion de
          projet utilisez-vous (agile, cycle en V, hybride) ? À quelle fréquence aurons-nous
          des points d&apos;avancement ? Comment sont gérés les changements de périmètre ?
          Quel outil de suivi utilisez-vous ? Une agence sérieuse a des réponses précises à
          ces questions et peut vous montrer concrètement comment se déroule un projet chez
          elle.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">4. La communication et la réactivité</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          La qualité de la communication est aussi importante que la qualité technique. Lors
          de vos premiers échanges, évaluez la réactivité de l&apos;agence : combien de temps
          met-elle à répondre à vos messages ? Les réponses sont-elles claires et
          complètes ? L&apos;interlocuteur comprend-il votre métier et vos enjeux ? Un bon
          partenaire technique traduit votre langage métier en solutions techniques, et
          inversement. Si les premiers échanges sont laborieux, le projet le sera aussi.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">5. La transparence tarifaire</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Une agence de confiance est transparente sur ses tarifs. Elle communique clairement
          son taux journalier moyen (TJM), détaille ses devis poste par poste et explique ce
          qui est inclus et ce qui ne l&apos;est pas. Méfiez-vous des devis opaques qui
          regroupent tout dans un forfait global sans détail. Demandez également comment sont
          facturés les changements de périmètre, les correctifs post-livraison et la
          maintenance. Chez HEXAIT, chaque devis inclut un découpage détaillé par
          fonctionnalité, avec un nombre de jours estimé et un TJM clair.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">6. L&apos;accompagnement post-livraison</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Un projet web ne s&apos;arrête pas à la mise en production. Mises à jour de sécurité,
          corrections de bugs, évolutions fonctionnelles, monitoring : l&apos;accompagnement
          post-livraison est crucial. Vérifiez que l&apos;agence propose un contrat de
          maintenance clair, avec des niveaux de service définis (SLA) et des délais
          d&apos;intervention garantis. Demandez aussi ce qui se passe si vous souhaitez
          changer de prestataire : aurez-vous accès au code source ? La documentation
          technique est-elle fournie ?
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">7. La culture technique et l&apos;innovation</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Les meilleures agences web investissent dans la veille technologique et le partage
          de connaissances. Un blog technique actif, des contributions open source, des
          participations à des conférences : ces éléments témoignent d&apos;une équipe passionnée
          qui se tient à jour. À l&apos;inverse, une agence qui utilise encore des technologies
          obsolètes ou qui ne publie aucun contenu technique devrait vous alerter sur sa
          capacité à livrer un produit moderne et performant.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Les red flags : signaux d&apos;alarme à ne pas ignorer
        </h2>

        <div className="card p-6 mb-6">
          <ul className="space-y-4">
            <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
              <span className="text-red-400 font-bold">&bull;</span>
              <span>
                <strong className="text-white">Devis anormalement bas.</strong> Si un devis est
                50 % en dessous des autres, c&apos;est rarement une bonne affaire. Le
                prestataire sous-estime le travail (et vous facturera des extras) ou utilise
                des raccourcis techniques qui coûteront cher à long terme.
              </span>
            </li>
            <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
              <span className="text-red-400 font-bold">&bull;</span>
              <span>
                <strong className="text-white">Pas de contrat ni de cahier des charges.</strong>{' '}
                Un prestataire qui commence sans spécifications écrites est une source garantie
                de malentendus et de conflits.
              </span>
            </li>
            <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
              <span className="text-red-400 font-bold">&bull;</span>
              <span>
                <strong className="text-white">Aucune méthodologie de gestion de projet.</strong>{' '}
                Si l&apos;agence ne peut pas vous expliquer comment elle gère ses projets, vos
                chances de livraison dans les délais sont faibles.
              </span>
            </li>
            <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
              <span className="text-red-400 font-bold">&bull;</span>
              <span>
                <strong className="text-white">Code source non livré.</strong> Vous devez être
                propriétaire du code source à la fin du projet. Si le prestataire refuse de
                le transmettre ou veut vous facturer un supplément pour cela, fuyez.
              </span>
            </li>
            <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
              <span className="text-red-400 font-bold">&bull;</span>
              <span>
                <strong className="text-white">Sous-traitance non déclarée.</strong> Certaines
                agences vendent des projets qu&apos;elles sous-traitent intégralement en
                offshore. Ce n&apos;est pas un problème en soi, mais vous devez le savoir et le
                prix doit refléter cette réalité.
              </span>
            </li>
            <li className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
              <span className="text-red-400 font-bold">&bull;</span>
              <span>
                <strong className="text-white">Promesses irréalistes.</strong> Une agence qui
                promet de développer une application complexe en 2 semaines pour 5 000 euros
                ne tient pas ses promesses. La qualité a un prix.
              </span>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Freelance, agence ou ESN : quel type de prestataire choisir ?
        </h2>

        <h3 className="text-xl font-semibold mt-8 mb-4">Le développeur freelance (TJM : 400-800 euros)</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Le freelance est idéal pour des projets bien définis avec un périmètre limité. Ses
          avantages : coût généralement inférieur, relation directe sans intermédiaire,
          flexibilité. Ses limites : disponibilité variable (un freelance malade ou en
          vacances peut bloquer votre projet), compétences concentrées sur un domaine
          (front-end ou back-end rarement les deux au même niveau), et absence de backup
          en cas de problème. Pour un site vitrine ou une fonctionnalité spécifique, le
          freelance est souvent le meilleur choix.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">L&apos;agence web ou le studio technique (TJM : 600-1 200 euros)</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          L&apos;agence offre une équipe pluridisciplinaire : développeurs front-end et
          back-end, designers UX/UI, chef de projet. Cette complémentarité est essentielle
          pour les projets complexes. L&apos;agence assure la continuité du service même si un
          membre de l&apos;équipe est indisponible. Le coût est plus élevé mais reflète la
          valeur ajoutée de la coordination, de la gestion de projet et de l&apos;expertise
          collective. Pour une application web métier ou un SaaS, l&apos;agence est
          généralement le choix le plus pertinent.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">L&apos;ESN ou SSII (TJM : 500-1 000 euros)</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Les ESN (Entreprises de Services du Numérique) proposent de la régie ou du forfait
          avec des équipes plus larges. Elles conviennent aux grands projets nécessitant
          plusieurs développeurs sur une longue durée. En revanche, le turnover est souvent
          élevé, la qualité des profils variable, et les marges intermédiaires gonflent les
          coûts. Pour les PME et startups, les ESN sont rarement le choix optimal sauf pour
          des besoins très spécifiques (expertise réglementaire, secteur bancaire, etc.).
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Les 10 questions à poser lors du premier rendez-vous
        </h2>

        <div className="space-y-4 mb-6">
          <p className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">1.</span>
            <span>Quelles technologies utilisez-vous et pourquoi ces choix pour mon projet ?</span>
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">2.</span>
            <span>Qui seront les personnes qui travailleront concrètement sur mon projet ?</span>
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">3.</span>
            <span>Pouvez-vous me montrer un projet similaire au mien que vous avez réalisé ?</span>
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">4.</span>
            <span>Comment gérez-vous les changements de périmètre en cours de projet ?</span>
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">5.</span>
            <span>Quel est votre processus de test et de contrôle qualité ?</span>
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">6.</span>
            <span>Serai-je propriétaire du code source et de la documentation technique ?</span>
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">7.</span>
            <span>Que se passe-t-il si je souhaite changer de prestataire après la livraison ?</span>
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">8.</span>
            <span>Comment facturez-vous : forfait, régie ou hybride ?</span>
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">9.</span>
            <span>Quel est votre délai moyen de livraison pour un projet similaire ?</span>
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
            <span className="text-cyan-400 font-bold">10.</span>
            <span>Proposez-vous un accompagnement post-livraison et à quelles conditions ?</span>
          </p>
        </div>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Les réponses à ces questions vous permettront de distinguer rapidement les
          prestataires sérieux de ceux qui improvisent. Un bon prestataire répond avec
          précision, donne des exemples concrets et n&apos;élude aucune question.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          L&apos;importance de l&apos;expertise technique réelle
        </h2>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Dans un marché saturé d&apos;agences web à Paris, l&apos;expertise technique réelle
          fait la différence entre un projet qui aboutit et un projet qui échoue. Trop
          d&apos;agences se positionnent comme des généralistes qui savent tout faire, alors
          que la réalité est souvent différente.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Vérifiez que les développeurs qui travailleront sur votre projet ont une expérience
          concrète avec les technologies proposées. Demandez des exemples de défis techniques
          qu&apos;ils ont résolus. Un développeur senior devrait pouvoir expliquer clairement
          les avantages et les limites de la stack technique choisie.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Chez HEXAIT, chaque projet est piloté par un développeur senior avec une expertise
          confirmée en React, Next.js, Node.js et Python. Nous ne sous-traitons pas et
          nous ne mettons pas de profils juniors sur des postes seniors. Cette rigueur
          technique est notre engagement premier.
        </p>

        {/* CTA Section */}
        <div className="card p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Vous cherchez une agence web à Paris ?
          </h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-xl mx-auto">
            HEXAIT est un studio d&apos;ingénierie logicielle basé à Paris 17e. Cadrage
            technique gratuit, interlocuteur senior dédié, transparence totale. Discutons de
            votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-cta">
              Prendre rendez-vous
            </Link>
            <Link href="/services" className="btn-ghost">
              Nos services
            </Link>
          </div>
        </div>
      </article>
    </Section>
  );
}
