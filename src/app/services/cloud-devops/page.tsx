import type { Metadata } from 'next';
import Section from '@/components/Section';
import Link from 'next/link';
import {
  Cloud, GitBranch, Container, Activity, Shield, Server,
  ArrowRight, CheckCircle, Rocket, Settings, Lock,
  BarChart3, Zap, FileCode2, RefreshCw, AlertTriangle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cloud & DevOps -- Infrastructure scalable et CI/CD | HEXAIT',
  description:
    'Services cloud et DevOps a Paris : CI/CD, Docker, Kubernetes, infrastructure as code, monitoring et optimisation des couts. Azure, AWS, GCP. HEXAIT.',
  alternates: { canonical: '/services/cloud-devops' },
  openGraph: {
    title: 'Cloud & DevOps -- Infrastructure scalable et CI/CD | HEXAIT',
    description:
      'Infrastructure cloud scalable, pipelines CI/CD, containerisation et monitoring proactif. HEXAIT, votre partenaire DevOps a Paris.',
  },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <span className="hero-badge">Cloud & DevOps</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
            <span className="text-gradient">Infrastructure cloud</span> scalable et CI/CD
          </h1>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Vos applications meritent une infrastructure fiable, securisee et capable de monter
            en charge. HEXAIT concoit et opere vos environnements cloud avec des pipelines
            d&apos;integration et de deploiement continus. De la containerisation au monitoring,
            nous automatisons tout ce qui peut l&apos;etre.
          </p>
          <div className="mt-6 flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-cta">Auditer mon infrastructure</Link>
            <Link href="/services" className="btn-ghost">Tous nos services</Link>
          </div>
        </div>
      </Section>

      {/* Nos services Cloud & DevOps */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Settings className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Nos services Cloud & DevOps</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Notre offre cloud DevOps couvre l&apos;ensemble du cycle de vie de votre infrastructure,
          de la conception initiale a l&apos;exploitation quotidienne. Chaque service est adaptable
          a la maturite et aux besoins de votre organisation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <GitBranch aria-hidden="true" />,
              title: 'Pipelines CI/CD',
              desc: 'Automatisation complete du cycle de livraison : build, tests, analyse statique, deploiement en staging puis en production. Chaque commit declenche un pipeline qui valide la qualite du code avant toute mise en ligne. GitHub Actions, GitLab CI ou Azure DevOps selon votre ecosysteme.',
            },
            {
              icon: <Container aria-hidden="true" />,
              title: 'Containerisation',
              desc: 'Empaquetage de vos applications dans des conteneurs Docker pour garantir la reproductibilite entre environnements. Images optimisees, multi-stage builds et registres prives. Orchestration avec Docker Compose pour le developpement local et Kubernetes pour la production.',
            },
            {
              icon: <Activity aria-hidden="true" />,
              title: 'Monitoring & observabilite',
              desc: 'Mise en place d&apos;une stack d&apos;observabilite complete : metriques systeme et applicatives (Prometheus/Grafana), logs centralises (ELK Stack ou Loki), tracing distribue (Jaeger). Alertes configurees sur les indicateurs critiques pour reagir avant l&apos;incident.',
            },
            {
              icon: <FileCode2 aria-hidden="true" />,
              title: 'Infrastructure as Code (IaC)',
              desc: 'Votre infrastructure definie en code versionne avec Terraform ou Pulumi. Environnements reproductibles, revue de code sur les changements d&apos;infra, historique complet des modifications et rollback instantane. Fini les configurations manuelles non documentees.',
            },
            {
              icon: <Shield aria-hidden="true" />,
              title: 'Securite infrastructure',
              desc: 'Gestion des secrets (Vault, Azure Key Vault), scan de vulnerabilites des images Docker, politiques reseau et firewalls, chiffrement en transit et au repos. Nous implementons une approche DevSecOps ou la securite est integree a chaque etape du pipeline.',
            },
            {
              icon: <RefreshCw aria-hidden="true" />,
              title: 'Strategies de deploiement',
              desc: 'Deploiement blue-green, canary releases et rolling updates pour des mises en production sans interruption de service. Rollback automatique en cas de regression detectee. Vos utilisateurs ne subissent aucune interruption, meme lors des mises a jour.',
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

      {/* Fournisseurs cloud */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Cloud className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Fournisseurs cloud</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Nous travaillons avec les principaux fournisseurs cloud du marche et vous conseillons
          sur le choix le plus adapte a votre contexte technique, budgetaire et reglementaire.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Microsoft Azure',
              desc: 'Notre expertise principale. Azure App Service, Azure Functions, Azure Container Apps, Azure DevOps, Azure SQL Database et Azure Blob Storage. Ideal pour les entreprises deja dans l&apos;ecosysteme Microsoft et pour les projets necessitant une presence en Europe (datacenters en France).',
              services: ['App Service', 'Container Apps', 'Azure DevOps', 'Azure SQL', 'Blob Storage', 'Key Vault'],
            },
            {
              title: 'Amazon Web Services (AWS)',
              desc: 'L&apos;offre cloud la plus complete du marche. EC2, ECS/EKS, Lambda, RDS, S3 et CloudFront. Parfait pour les projets a forte exigence de scalabilite et pour les architectures serverless avancees.',
              services: ['EC2 / ECS', 'Lambda', 'RDS', 'S3', 'CloudFront', 'ElastiCache'],
            },
            {
              title: 'Google Cloud Platform (GCP)',
              desc: 'Excellant sur les workloads data et machine learning. Cloud Run, GKE, Cloud SQL et BigQuery. Recommande pour les projets avec de forts besoins en analyse de donnees et en intelligence artificielle.',
              services: ['Cloud Run', 'GKE', 'Cloud SQL', 'BigQuery', 'Cloud Functions', 'Cloud Storage'],
            },
          ].map((provider) => (
            <div key={provider.title} className="card">
              <h3 className="font-bold text-lg">{provider.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm mt-2">{provider.desc}</p>
              <h4 className="text-xs uppercase tracking-wider text-[var(--text-tertiary)] mt-4">Services utilises</h4>
              <ul className="mt-2 space-y-1">
                {provider.services.map((s) => (
                  <li key={s} className="text-[var(--text-secondary)] text-sm flex items-center gap-2">
                    <CheckCircle size={14} className="text-[var(--accent-light)] shrink-0" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Docker & Kubernetes */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Container className="text-[var(--accent-light)]" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-extrabold">Docker & Kubernetes</h2>
            </div>
            <p className="text-[var(--text-secondary)] mt-3">
              La containerisation est au coeur de nos pratiques DevOps. Docker garantit que votre
              application se comporte de maniere identique sur le poste du developpeur, en staging
              et en production. Plus de &laquo; ca marche sur ma machine &raquo;.
            </p>
            <p className="text-[var(--text-secondary)] mt-3">
              Pour les projets necessitant une orchestration avancee, nous deploying sur Kubernetes
              (AKS, EKS ou GKE). Gestion automatique du scaling, self-healing des pods, rolling
              updates et gestion declarative de l&apos;infrastructure. Kubernetes est particulierement
              pertinent pour les architectures microservices avec de nombreux services intercommunicants.
            </p>
            <p className="text-[var(--text-secondary)] mt-3">
              Cependant, Kubernetes n&apos;est pas toujours la reponse adaptee. Pour des projets
              de taille moderee, Docker Compose ou des services manages comme Azure Container Apps
              offrent un excellent rapport simplicite/fonctionnalites. Nous vous conseillons
              objectivement sur l&apos;option la plus pertinente.
            </p>
          </div>
          <div className="space-y-4">
            <div className="card">
              <h3 className="font-bold">Docker -- Containerisation</h3>
              <ul className="mt-3 space-y-2">
                {[
                  'Images optimisees (multi-stage builds)',
                  'Docker Compose pour le dev local',
                  'Registres prives (ACR, ECR, GCR)',
                  'Scan de vulnerabilites des images',
                  'Build cache et layer optimization',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle size={14} className="text-[var(--accent-light)] mt-0.5 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold">Kubernetes -- Orchestration</h3>
              <ul className="mt-3 space-y-2">
                {[
                  'Deployments, Services et Ingress',
                  'Horizontal Pod Autoscaler (HPA)',
                  'Helm charts pour les deploiements',
                  'ConfigMaps et Secrets',
                  'Monitoring avec Prometheus/Grafana',
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

      {/* Optimisation des couts */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <BarChart3 className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Optimisation des couts cloud</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          Le cloud peut rapidement devenir couteux sans une gestion rigoureuse. Nous vous aidons
          a maitriser votre facture cloud sans sacrifier la performance ni la fiabilite.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <Zap aria-hidden="true" />,
              title: 'Right-sizing des ressources',
              desc: 'Analyse de la consommation reelle de vos instances et ajustement des tailles. Beaucoup d&apos;entreprises surprovisionnent leurs serveurs par precaution, generant des couts inutiles. Nous dimensionnons au plus juste avec de l&apos;auto-scaling pour les pics.',
            },
            {
              icon: <Server aria-hidden="true" />,
              title: 'Instances reservees et spot',
              desc: 'Utilisation strategique des reserved instances pour les workloads previsibles (jusqu&apos;a 72 % d&apos;economie) et des spot instances pour les taches tolerantes aux interruptions (batch processing, CI/CD).',
            },
            {
              icon: <AlertTriangle aria-hidden="true" />,
              title: 'Alertes budgetaires',
              desc: 'Mise en place d&apos;alertes de couts pour eviter les mauvaises surprises. Dashboards de suivi des depenses par service, par environnement et par equipe. Rapports mensuels d&apos;optimisation.',
            },
            {
              icon: <Lock aria-hidden="true" />,
              title: 'Gouvernance cloud',
              desc: 'Politiques de tagging, gestion des droits d&apos;acces (IAM), nettoyage automatique des ressources orphelines et revue periodique de l&apos;architecture pour eliminer le gaspillage.',
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

      {/* Securite */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <Shield className="text-[var(--accent-light)]" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Securite de l&apos;infrastructure</h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-6">
          La securite est integree a chaque couche de l&apos;infrastructure, pas ajoutee en
          surcouche. Notre approche DevSecOps garantit que les bonnes pratiques de securite
          sont appliquees automatiquement a chaque deploiement.
        </p>

        <div className="card p-6">
          <ul className="grid md:grid-cols-2 gap-3">
            {[
              'Gestion centralisee des secrets (Vault, Key Vault)',
              'Chiffrement TLS en transit, AES-256 au repos',
              'Scan automatique des dependances (Snyk, Dependabot)',
              'Scan de vulnerabilites des images Docker',
              'Politiques reseau (Network Policies, Security Groups)',
              'Authentification et autorisation des services (mTLS)',
              'Journalisation et audit trail de toutes les actions',
              'Plans de sauvegarde et de reprise d&apos;activite (PRA/PCA)',
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
          Nos autres expertises
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/services/developpement-web', label: 'Developpement Web' },
            { href: '/services/developpement-saas', label: 'Developpement SaaS' },
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

      {/* CTA final */}
      <Section>
        <div className="text-center">
          <div className="card p-10 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Optimisez votre <span className="text-gradient">infrastructure cloud</span>
            </h2>
            <p className="mt-3 text-[var(--text-secondary)] max-w-xl mx-auto">
              Audit de votre infrastructure actuelle offert. Nous identifions les axes
              d&apos;amelioration et vous proposons un plan d&apos;action concret sous 48 heures.
            </p>
            <div className="mt-6 flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn-cta">Auditer mon infrastructure</Link>
              <Link href="/projets" className="btn-ghost">Voir nos realisations</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
