import type { Metadata } from 'next';
import Section from '@/components/Section';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Les 7 étapes clés d\u2019un projet de développement logiciel réussi',
  description:
    'Guide complet des 7 étapes d\u2019un projet de développement logiciel : cadrage, spécifications, design UX/UI, développement, tests, déploiement et maintenance. Livrables et durées détaillés.',
  alternates: { canonical: '/blog/etapes-projet-developpement-logiciel' },
};

export default function Page() {
  return (
    <Section>
      <article className="container max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="hero-badge">Méthodologie</span>
            <span className="text-sm text-[var(--text-tertiary)]">Lecture : 15 min</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Les 7 <span className="text-gradient">étapes clés</span> d&apos;un projet de
            développement logiciel réussi
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            De l&apos;idée initiale à la mise en production, un projet de développement
            logiciel suit un processus structuré. Voici les 7 étapes essentielles, avec pour
            chacune les livrables attendus, la durée typique et nos conseils pratiques.
          </p>
        </div>

        {/* Introduction */}
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Un projet de développement logiciel réussi ne repose pas uniquement sur la qualité
          du code. Il dépend avant tout de la rigueur du processus qui encadre sa réalisation.
          Trop de projets échouent non pas à cause de limitations techniques, mais parce que
          les étapes préparatoires ont été bâclées, les spécifications étaient floues ou la
          communication entre les parties prenantes était insuffisante.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Chez HEXAIT, chaque projet suit un processus éprouvé en 7 étapes. Ce processus
          n&apos;est pas rigide — il s&apos;adapte à la taille et à la complexité du projet — mais
          chaque étape apporte une valeur essentielle. Les ignorer revient à construire une
          maison sans fondations.
        </p>

        {/* Étape 1 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Étape 1 : Cadrage et discovery
        </h2>

        <div className="card p-4 mb-6 flex flex-wrap gap-4">
          <span className="text-sm text-[var(--text-tertiary)]">Durée : 1 à 2 semaines</span>
          <span className="text-sm text-[var(--text-tertiary)]">Livrables : note de cadrage, user stories</span>
        </div>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          La phase de cadrage est le fondement de tout projet réussi. Son objectif est de
          comprendre en profondeur votre besoin, votre contexte métier et vos contraintes
          avant d&apos;écrire la moindre ligne de code.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Concrètement, cette phase comprend des ateliers de découverte avec les parties
          prenantes du projet : fondateurs, responsables métier, utilisateurs finaux. On y
          définit les objectifs du projet, les profils d&apos;utilisateurs cibles, les
          fonctionnalités prioritaires et les contraintes techniques ou réglementaires.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Le livrable principal est une note de cadrage qui synthétise la vision du produit,
          les user stories (récits utilisateurs) prioritaires et un macro-planning. Ce
          document constitue la base de travail pour toutes les étapes suivantes.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          <strong className="text-white">Conseil :</strong> Investissez du temps dans cette
          phase. Une heure passée en cadrage en économise dix en développement. Les projets
          qui échouent sont presque toujours ceux dont le cadrage a été insuffisant. Chez
          HEXAIT, cette phase de cadrage technique est offerte pour chaque nouveau projet.
        </p>

        {/* Étape 2 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Étape 2 : Spécifications fonctionnelles et techniques
        </h2>

        <div className="card p-4 mb-6 flex flex-wrap gap-4">
          <span className="text-sm text-[var(--text-tertiary)]">Durée : 1 à 3 semaines</span>
          <span className="text-sm text-[var(--text-tertiary)]">Livrables : SFD, SFT, architecture technique</span>
        </div>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Les spécifications transforment les besoins identifiés lors du cadrage en un document
          précis et actionnable. Le cahier des charges fonctionnel (ou Spécifications
          Fonctionnelles Détaillées, SFD) décrit ce que le logiciel doit faire : chaque
          fonctionnalité, chaque écran, chaque règle de gestion, chaque cas d&apos;erreur.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Les spécifications techniques (SFT) décrivent comment le logiciel sera construit :
          choix des technologies (React, Next.js, Node.js, Python), architecture système
          (monolithique, microservices, serverless), modèle de données, stratégie
          d&apos;hébergement et de déploiement. Ce document inclut également les choix en
          matière de sécurité, de performance et de scalabilité.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          <strong className="text-white">Conseil :</strong> Les spécifications ne doivent pas
          être un roman de 200 pages que personne ne lit. Elles doivent être concises,
          claires et illustrées de schémas et de wireframes. Un bon document de
          spécifications tient en 20 à 40 pages pour un projet de taille moyenne.
        </p>

        {/* Étape 3 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Étape 3 : Design UX/UI
        </h2>

        <div className="card p-4 mb-6 flex flex-wrap gap-4">
          <span className="text-sm text-[var(--text-tertiary)]">Durée : 2 à 4 semaines</span>
          <span className="text-sm text-[var(--text-tertiary)]">Livrables : wireframes, maquettes, prototype interactif</span>
        </div>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          La phase de design transforme les spécifications en interfaces visuelles concrètes.
          Elle commence par des wireframes — des maquettes en fil de fer qui définissent la
          structure et la hiérarchie de chaque écran sans se préoccuper de l&apos;esthétique.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Les wireframes validés sont ensuite transformés en maquettes haute fidélité (UI
          design) qui intègrent la charte graphique, la typographie, les couleurs et les
          composants visuels. Un prototype interactif permet de tester le parcours utilisateur
          avant le début du développement.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          L&apos;UX design (User Experience) ne se limite pas à l&apos;esthétique. C&apos;est la
          science de rendre une interface intuitive, efficace et agréable. Un bon UX design
          réduit le temps de formation des utilisateurs, diminue les erreurs de saisie et
          augmente le taux d&apos;adoption de l&apos;outil.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          <strong className="text-white">Conseil :</strong> Impliquez les futurs utilisateurs
          dans la validation des maquettes. Organisez des sessions de test utilisateur sur le
          prototype interactif. Corriger un problème d&apos;ergonomie au stade du design coûte
          10 fois moins cher qu&apos;après le développement.
        </p>

        {/* Étape 4 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Étape 4 : Développement
        </h2>

        <div className="card p-4 mb-6 flex flex-wrap gap-4">
          <span className="text-sm text-[var(--text-tertiary)]">Durée : 4 à 16 semaines</span>
          <span className="text-sm text-[var(--text-tertiary)]">Livrables : code source, API, base de données</span>
        </div>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          C&apos;est la phase la plus longue et la plus visible du projet. Le développement
          transforme les maquettes et les spécifications en un logiciel fonctionnel. Il se
          déroule généralement en sprints de 1 à 2 semaines, avec une démonstration à la fin
          de chaque sprint pour valider l&apos;avancement.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Un développement de qualité repose sur plusieurs piliers. La revue de code
          systématique : chaque ligne de code est relue par un pair avant d&apos;être intégrée.
          Les tests automatisés : unitaires, d&apos;intégration et end-to-end, qui garantissent
          que les nouvelles fonctionnalités ne cassent pas les existantes. L&apos;intégration
          continue (CI) : chaque modification est automatiquement compilée, testée et
          validée.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          La communication pendant la phase de développement est cruciale. Des points
          réguliers (quotidiens ou bihebdomadaires selon la taille du projet) permettent
          d&apos;identifier et de résoudre les blocages rapidement. Un outil de suivi de
          projet (Jira, Linear, GitHub Projects) offre de la visibilité sur l&apos;avancement
          en temps réel.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          <strong className="text-white">Conseil :</strong> Résistez à la tentation d&apos;ajouter
          des fonctionnalités en cours de route (scope creep). Chaque ajout non planifié
          allonge les délais et augmente le budget. Notez les idées nouvelles pour les
          intégrer dans une version ultérieure.
        </p>

        {/* Étape 5 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Étape 5 : Tests et assurance qualité
        </h2>

        <div className="card p-4 mb-6 flex flex-wrap gap-4">
          <span className="text-sm text-[var(--text-tertiary)]">Durée : 1 à 3 semaines</span>
          <span className="text-sm text-[var(--text-tertiary)]">Livrables : rapport de tests, liste de correctifs</span>
        </div>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          La phase de tests ne se résume pas à vérifier que le logiciel fonctionne. Elle
          englobe plusieurs niveaux de validation complémentaires. Les tests fonctionnels
          vérifient que chaque fonctionnalité se comporte conformément aux spécifications.
          Les tests de performance mesurent les temps de réponse sous charge et identifient
          les goulots d&apos;étranglement.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Les tests de sécurité identifient les vulnérabilités potentielles : injections
          SQL, failles XSS, problèmes d&apos;authentification, exposition de données sensibles.
          Les tests de compatibilité vérifient le fonctionnement sur différents navigateurs,
          appareils et résolutions d&apos;écran. Les tests d&apos;acceptation utilisateur (UAT)
          impliquent les utilisateurs finaux pour valider que le logiciel répond à leurs
          besoins réels.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          <strong className="text-white">Conseil :</strong> Ne réduisez jamais la phase de tests
          pour respecter un planning. Un bug en production coûte 10 à 100 fois plus cher à
          corriger qu&apos;un bug détecté en phase de test. Chez HEXAIT, les tests sont intégrés
          tout au long du développement, pas seulement à la fin.
        </p>

        {/* Étape 6 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Étape 6 : Déploiement et mise en production
        </h2>

        <div className="card p-4 mb-6 flex flex-wrap gap-4">
          <span className="text-sm text-[var(--text-tertiary)]">Durée : 1 à 5 jours</span>
          <span className="text-sm text-[var(--text-tertiary)]">Livrables : application en production, documentation de déploiement</span>
        </div>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Le déploiement est le moment où votre logiciel devient accessible à ses
          utilisateurs. Un déploiement réussi ne s&apos;improvise pas : il suit un processus
          rigoureux et documenté. L&apos;infrastructure de production est configurée et
          sécurisée à l&apos;avance. Un environnement de staging (pré-production) permet de
          valider le déploiement dans des conditions identiques à la production avant
          l&apos;ouverture au public.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Le déploiement inclut la mise en place du monitoring (surveillance des performances,
          des erreurs et de la disponibilité), des sauvegardes automatiques, des alertes en
          cas d&apos;incident, et d&apos;un plan de rollback (retour en arrière) en cas de
          problème critique.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Un pipeline CI/CD (Continuous Integration / Continuous Deployment) automatise le
          processus de déploiement. Chaque mise à jour est testée automatiquement, validée et
          déployée sans intervention manuelle, réduisant les risques d&apos;erreur humaine.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          <strong className="text-white">Conseil :</strong> Planifiez le déploiement initial en
          dehors des heures de pointe. Prévoyez une période de surveillance accrue dans les
          48 heures suivant la mise en production. Communiquez clairement le plan de
          déploiement à toutes les parties prenantes.
        </p>

        {/* Étape 7 */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Étape 7 : Maintenance et évolution
        </h2>

        <div className="card p-4 mb-6 flex flex-wrap gap-4">
          <span className="text-sm text-[var(--text-tertiary)]">Durée : continue</span>
          <span className="text-sm text-[var(--text-tertiary)]">Livrables : correctifs, mises à jour, nouvelles fonctionnalités</span>
        </div>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          La mise en production n&apos;est pas la fin du projet, c&apos;est le début de sa vie.
          La maintenance englobe plusieurs activités essentielles à la pérennité du logiciel.
          La maintenance corrective corrige les bugs détectés en production. La maintenance
          préventive met à jour les dépendances, les frameworks et les systèmes
          d&apos;exploitation pour maintenir la sécurité et la compatibilité.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          La maintenance évolutive ajoute de nouvelles fonctionnalités en réponse aux retours
          utilisateurs et à l&apos;évolution de votre activité. C&apos;est là que la qualité du
          code initial prend toute son importance : un code bien architecturé permet
          d&apos;ajouter des fonctionnalités rapidement et à moindre coût. Un code technique
          de mauvaise qualité rend chaque évolution plus longue et plus risquée.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          <strong className="text-white">Conseil :</strong> Prévoyez un budget de maintenance
          dès le départ, représentant 15 à 25 % du coût initial de développement par an. Ce
          budget couvre les mises à jour de sécurité, les corrections de bugs et les petites
          évolutions. Les évolutions majeures font l&apos;objet de devis séparés.
        </p>

        {/* Conclusion */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          En résumé : les clés d&apos;un projet réussi
        </h2>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Un projet de développement logiciel réussi repose sur trois piliers :
          un cadrage rigoureux, une exécution disciplinée et une communication transparente.
          Chaque étape du processus contribue au succès final. Raccourcir ou sauter une étape
          peut sembler économiser du temps à court terme, mais génère presque toujours des
          surcoûts et des retards à moyen terme.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Le choix du bon partenaire technique est également déterminant. Un prestataire qui
          suit un processus structuré, qui communique de manière transparente et qui
          s&apos;engage sur des livrables concrets est votre meilleur atout pour transformer
          votre vision en un produit logiciel de qualité.
        </p>

        {/* CTA Section */}
        <div className="card p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Un projet de développement en tête ?
          </h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-xl mx-auto">
            HEXAIT accompagne chaque projet avec un processus éprouvé et un interlocuteur
            senior dédié. Du cadrage à la mise en production, nous assurons la qualité à
            chaque étape. Premier cadrage technique offert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-cta">
              Démarrer mon projet
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
