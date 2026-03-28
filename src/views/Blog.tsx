'use client';
import Link from "next/link";
import { useState } from 'react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedTech, setSelectedTech] = useState('Tous');
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const articles = [
    // FRONTEND
    {
      id: 1,
      title: "Angular vs React vs Vue 2024 : Le guide ultime pour choisir",
      excerpt: "Comparatif complet des 3 frameworks frontend : performances, courbe d'apprentissage et écosystème.",
      category: "Frontend",
      readTime: "12 min",
      date: "2024-01-20",
      technologies: ["Angular", "React", "Vue.js", "TypeScript", "JavaScript"],
      level: "Intermédiaire",
      projectType: "Comparatif Technique",
      fullContent: `
        <h2>Le paysage frontend en 2024</h2>
        <p>Choisir entre Angular, React et Vue est une décision stratégique qui impacte la maintenabilité à long terme.</p>
        
        <h2>Angular : L'framework enterprise</h2>
        <p><strong>Avantages :</strong> Structure solide, TypeScript natif, tout-en-un</p>
        <p><strong>Inconvénients :</strong> Courbe d'apprentissage raide, verbosité</p>
        <p><strong>Cas d'usage :</strong> Applications enterprise complexes, équipes larges</p>
        
        <h2>React : La flexibilité</h2>
        <p><strong>Avantages :</strong> Écosystème immense, flexibilité, communauté active</p>
        <p><strong>Inconvénients :</strong> Trop de choix, dépendances externes</p>
        <p><strong>Cas d'usage :</strong> Startups, applications dynamiques, équipes agiles</p>
        
        <h2>Vue.js : Le juste milieu</h2>
        <p><strong>Avantages :</strong> Courbe d'apprentissage douce, documentation excellente</p>
        <p><strong>Inconvénients :</strong> Écosystème plus petit, moins d'opportunités enterprise</p>
        <p><strong>Cas d'usage :</strong> Petites/moyennes applications, équipes petites</p>
        
        <h2>Notre recommandation</h2>
        <p><strong>React</strong> pour la flexibilité et l'emploi, <strong>Angular</strong> pour l'enterprise, <strong>Vue</strong> pour les projets rapides.</p>
      `
    },
    {
      id: 2,
      title: "Next.js 14 : Server Components et optimisation SEO avancée",
      excerpt: "Guide pratique pour migrer vers Next.js 14 et exploiter les nouvelles fonctionnalités.",
      category: "Frontend",
      readTime: "10 min",
      date: "2024-01-18",
      technologies: ["Next.js", "React", "TypeScript", "Node.js"],
      level: "Avancé",
      projectType: "Migration",
      fullContent: `
        <h2>Les nouveautés Next.js 14</h2>
        <p>Server Components, Streaming, Partial Prerendering : révolution pour le SEO et les performances.</p>
        
        <h2>Server Components en pratique</h2>
        <p>Réduction du bundle client de 40-60%, données fraîches sans API, meilleur SEO.</p>
        <pre><code>// Avant : Client Component
export default function UserProfile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUser().then(setUser);
  }, []);
  return <div>{user?.name}</div>;
}

// Après : Server Component
export default async function UserProfile() {
  const user = await fetchUser();
  return <div>{user.name}</div>;
}</code></pre>
        
        <h2>Migration depuis React traditionnel</h2>
        <p>Étapes progressives : app router, server components, optimisation images.</p>
        
        <h2>Résultats mesurés</h2>
        <p>LCP amélioré de 45%, FCP de 60%, meilleur scoring Core Web Vitals.</p>
      `
    },

    // BACKEND
    {
      id: 3,
      title: "Python FastAPI vs Node.js : Benchmark pour APIs modernes",
      excerpt: "Comparatif technique sur le débit, la consommation mémoire et la maintenabilité.",
      category: "Backend",
      readTime: "14 min",
      date: "2024-01-16",
      technologies: ["Python", "FastAPI", "Node.js", "TypeScript", "Docker"],
      level: "Avancé",
      projectType: "Benchmark",
      fullContent: `
        <h2>Contexte du benchmark</h2>
        <p>Test sur API REST avec 1000 requêtes simultanées, base PostgreSQL, environnement Docker identique.</p>
        
        <h2>Résultats performances</h2>
        <p><strong>FastAPI (Python) :</strong> 3200 req/s, consommation mémoire: 120MB</p>
        <p><strong>Node.js Express :</strong> 2800 req/s, consommation mémoire: 80MB</p>
        <p><strong>Node.js Fastify :</strong> 3500 req/s, consommation mémoire: 75MB</p>
        
        <h2>Développement experience</h2>
        <p><strong>FastAPI :</strong> Documentation auto, validation types Python, async/await natif</p>
        <p><strong>Node.js :</strong> Écosystème NPM, JavaScript universel, déploiement facile</p>
        
        <h2>Recommandation</h2>
        <p><strong>FastAPI</strong> pour les APIs complexes avec beaucoup de logique métier, <strong>Node.js</strong> pour les applications temps réel.</p>
      `
    },
    {
      id: 4,
      title: "Java Spring Boot vs C# .NET : Le duel enterprise 2024",
      excerpt: "Analyse pour applications critiques : performances, écosystème et coût total.",
      category: "Backend",
      readTime: "16 min",
      date: "2024-01-14",
      technologies: ["Java", "Spring Boot", "C#", ".NET", "Docker", "PostgreSQL"],
      level: "Expert",
      projectType: "Comparatif Technique",
      fullContent: `
        <h2>Le marché enterprise français</h2>
        <p>Java dominant dans la finance, .NET en forte croissance dans les services publics.</p>
        
        <h2>Performances techniques</h2>
        <p><strong>Spring Boot :</strong> Maturité, écosystème open-source immense, JVM optimisée</p>
        <p><strong>.NET 8 :</strong> Performances excellentes, compilation native, meilleur en Windows</p>
        
        <h2>Écosystème et emploi</h2>
        <p><strong>Java :</strong> 65% des offres enterprise, salaires élevés, stabilité</p>
        <p><strong>.NET :</strong> Croissance de 40% en 2023, forte demande C#</p>
        
        <h2>Coût total de possession</h2>
        <p>Java : coûts maintenance plus élevés mais stabilité, .NET : licences mais productivité</p>
        
        <h2>Notre avis</h2>
        <p>Les deux excellents choix. Java pour la stabilité, .NET pour l'innovation et performances.</p>
      `
    },

    // MOBILE
    {
      id: 5,
      title: "Flutter vs React Native 2024 : Le guide de choix définitif",
      excerpt: "Analyse complète pour startups et entreprises : performances, écosystème, maintenabilité.",
      category: "Mobile",
      readTime: "15 min",
      date: "2024-01-12",
      technologies: ["Flutter", "React Native", "Dart", "TypeScript", "Firebase"],
      level: "Avancé",
      projectType: "Comparatif Technique",
      fullContent: `
        <h2>Introduction</h2>
        <p>Le choix entre Flutter et React Native impacte la vélocité, les coûts et la qualité utilisateur.</p>
        
        <h2>Performances réelles</h2>
        <p><strong>Flutter :</strong> 60 FPS stables, compilation native via Dart, performances proches du natif</p>
        <p><strong>React Native :</strong> 50-55 FPS, bridge JavaScript, dépendances natives</p>
        
        <h2>Développement experience</h2>
        <p><strong>Flutter :</strong> Hot reload excellent, widgets riches, documentation complète</p>
        <p><strong>React Native :</strong> Réutilisation compétences React, écosystème NPM immense</p>
        
        <h2>Marché de l'emploi</h2>
        <p><strong>React Native :</strong> 3x plus d'offres, salaires +15% en moyenne</p>
        <p><strong>Flutter :</strong> Croissance rapide, forte demande startups</p>
        
        <h2>Recommandation finale</h2>
        <p><strong>React Native</strong> pour maximiser l'emploi, <strong>Flutter</strong> pour les performances critiques.</p>
      `
    },
    {
      id: 6,
      title: "Développement natif : SwiftUI vs Kotlin pour applications critiques",
      excerpt: "Quand choisir le natif malgré la complexité : performances, accès API spécifiques.",
      category: "Mobile",
      readTime: "11 min",
      date: "2024-01-10",
      technologies: ["SwiftUI", "Kotlin", "Android", "iOS", "Xcode"],
      level: "Intermédiaire",
      projectType: "Guide Pratique",
      fullContent: `
        <h2>Quand choisir le natif ?</h2>
        <p>Applications critiques, performances maximales, accès hardware complet, design système natif.</p>
        
        <h2>SwiftUI : La révolution Apple</h2>
        <p>Déclaratif, live preview, intégration écosystème Apple, seulement iOS 13+</p>
        <pre><code>struct ContentView: View {
    var body: some View {
        VStack {
            Text("Hello SwiftUI")
                .font(.title)
            Button("Action") { }
                .buttonStyle(.bordered)
        }
    }
}</code></pre>
        
        <h2>Kotlin : Le moderne Android</h2>
        <p>Null safety, coroutines, compatibilité Java, Compose pour le UI moderne</p>
        
        <h2>Coûts et délais</h2>
        <p>2 codebases séparés, temps de développement ×2, maintenance complexe mais qualité supérieure.</p>
        
        <h2>Notre conseil</h2>
        <p>Natif seulement pour applications critiques avec budget important. Cross-platform sinon.</p>
      `
    },

    // CLOUD & DEVOPS
    {
      id: 7,
      title: "Terraform vs Azure Bicep : Infrastructure as Code en 2024",
      excerpt: "Guide complet pour choisir entre solution multi-cloud et spécifique Azure.",
      category: "Cloud & DevOps",
      readTime: "13 min",
      date: "2024-01-08",
      technologies: ["Terraform", "Azure", "Bicep", "DevOps", "Docker"],
      level: "Avancé",
      projectType: "Comparatif Technique",
      fullContent: `
        <h2>Infrastructure as Code (IaC) obligatoire</h2>
        <p>Reproductibilité, versioning, audit, sécurité : l'IaC n'est plus optionnel.</p>
        
        <h2>Terraform : Le leader multi-cloud</h2>
        <p><strong>Avantages :</strong> Multi-cloud, communauté massive, modules réutilisables</p>
        <p><strong>Inconvénients :</strong> State management, courbe d'apprentissage</p>
        <pre><code>resource "azurerm_app_service" "example" {
  name                = "example-app-service"
  location            = azurerm_resource_group.example.location
  resource_group_name = azurerm_resource_group.example.name
  app_service_plan_id = azurerm_app_service_plan.example.id
}</code></pre>
        
        <h2>Azure Bicep : Le natif Microsoft</h2>
        <p><strong>Avantages :</strong> Intégration Azure parfaite, syntaxe simple, pas de state</p>
        <p><strong>Inconvénients :</strong> Lock-in Azure, communauté plus petite</p>
        
        <h2>Recommandation</h2>
        <p><strong>Terraform</strong> pour multi-cloud ou écosystème complexe, <strong>Bicep</strong> pour projets 100% Azure simples.</p>
      `
    },
    {
      id: 8,
      title: "CI/CD Azure DevOps : Pipeline professionnel pour applications critiques",
      excerpt: "Mise en place complète avec tests automatisés, sécurité et déploiement blue-green.",
      category: "Cloud & DevOps",
      readTime: "18 min",
      date: "2024-01-06",
      technologies: ["Azure", "DevOps", "Docker", "Kubernetes", "Terraform"],
      level: "Expert",
      projectType: "Guide Pratique",
      fullContent: `
        <h2>Architecture du pipeline</h2>
        <p>Build → Test → Scan sécurité → Build image → Déploiement staging → Validation → Production</p>
        
        <h2>Configuration Azure Pipeline</h2>
        <pre><code>trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

stages:
- stage: Build
  jobs:
  - job: BuildAndTest
    steps:
    - task: NodeTool@0
      inputs:
        versionSpec: '18.x'
    - script: |
        npm install
        npm run build
        npm test
    - task: Docker@2
      inputs:
        containerRegistry: 'my-registry'
        repository: 'my-app'
        command: 'buildAndPush'
        Dockerfile: '**/Dockerfile'</code></pre>
        
        <h2>Tests automatisés</h2>
        <p>Unit tests, integration tests, e2e tests, security scanning avec Snyk/Trivy</p>
        
        <h2>Déploiement blue-green</h2>
        <p>Zéro downtime, rollback automatique, monitoring avec Azure Monitor</p>
        
        <h2>Coûts et ROI</h2>
        <p>Investissement initial 2-3 semaines, réduction incidents production de 80%.</p>
      `
    },

    // SECURITE (pour développeurs)
    {
      id: 9,
      title: "Sécurité pour développeurs : Les 10 erreurs qui piratent vos apps",
      excerpt: "Guide pratique pour éviter les vulnérabilités courantes sans être expert sécurité.",
      category: "Sécurité",
      readTime: "12 min",
      date: "2024-01-04",
      technologies: ["Node.js", "Python", "PostgreSQL", "JWT", "OAuth"],
      level: "Intermédiaire",
      projectType: "Guide Pratique",
      fullContent: `
        <h2>Introduction</h2>
        <p>80% des failles de sécurité sont dues à des erreurs de développement simples à corriger.</p>
        
        <h2>Les 10 erreurs mortelles</h2>
        
        <h3>1. Injection NoSQL (MongoDB)</h3>
        <pre><code>// DANGEREUX
const user = await User.findOne({ 
  email: req.body.email, 
  password: req.body.password 
});

// SÉCURISÉ
const user = await User.findOne({ 
  email: { $eq: req.body.email }, 
  password: { $eq: req.body.password } 
});</code></pre>
        
        <h3>2. JWT non vérifié</h3>
        <p>Toujours vérifier la signature et l'expiration</p>
        
        <h3>3. Secrets dans le code</h3>
        <p>Utiliser Azure Key Vault, AWS Secrets Manager ou variables d'environnement</p>
        
        <h3>4. CORS trop permissif</h3>
        <pre><code>// Mauvaise pratique
app.use(cors());

// Bonne pratique
app.use(cors({
  origin: ['https://mondomaine.com'],
  credentials: true
}));</code></pre>
        
        <h2>Checklist de sécurité</h2>
        <p>Validation input, sanitization, HTTPS obligatoire, headers sécurité, logs sensibles masqués</p>
      `
    },

    // AI/ML
    {
      id: 10,
      title: "TensorFlow vs PyTorch 2024 : Le guide pour développeurs",
      excerpt: "Comparatif pratique pour intégrer l'IA dans vos applications sans être data scientist.",
      category: "AI/ML",
      readTime: "14 min",
      date: "2024-01-02",
      technologies: ["TensorFlow", "PyTorch", "Python", "FastAPI", "Docker"],
      level: "Intermédiaire",
      projectType: "Comparatif Technique",
      fullContent: `
        <h2>IA pour développeurs classiques</h2>
        <p>Intégration de modèles pré-entraînés, fine-tuning, déploiement en production.</p>
        
        <h2>TensorFlow : La production</h2>
        <p><strong>Forces :</strong> Déploiement, TensorFlow Serving, TensorFlow Lite mobile</p>
        <p><strong>Faiblesses :</strong> Verbosité, debugging complexe</p>
        <pre><code>import tensorflow as tf

# Chargement modèle pré-entraîné
model = tf.keras.applications.MobileNetV2()
predictions = model.predict(image_batch)</code></pre>
        
        <h2>PyTorch : La recherche et prototyping</h2>
        <p><strong>Forces :</strong> Pythonic, debugging facile, communauté recherche</p>
        <p><strong>Faiblesses :</strong> Déploiement moins mature</p>
        
        <h2>Notre recommandation</h2>
        <p><strong>TensorFlow</strong> pour la production, <strong>PyTorch</strong> pour la R&D et prototypes.</p>
        
        <h2>Architecture type</h2>
        <p>FastAPI + TensorFlow Serving + Docker + Azure Kubernetes Service</p>
      `
    },
    {
      id: 11,
      title: "Unity vs Unreal : Développement jeux et applications 3D",
      excerpt: "Guide pour choisir entre les deux moteurs pour jeux, simulations et applications enterprise.",
      category: "Game Dev",
      readTime: "11 min",
      date: "2023-12-30",
      technologies: ["Unity", "Unreal", "C#", "C++", "3D"],
      level: "Intermédiaire",
      projectType: "Comparatif Technique",
      fullContent: `
        <h2>Landscape des moteurs 3D</h2>
        <p>Unity et Unreal dominent le marché, chacun avec ses forces spécifiques.</p>
        
        <h2>Unity : La flexibilité</h2>
        <p><strong>Avantages :</strong> C# accessible, assets store immense, multiplateforme facile</p>
        <p><strong>Inconvénients :</strong> Graphismes moins poussés, performances limitées</p>
        <p><strong>Prix :</strong> Gratuit jusqu'à 100K$ de revenus</p>
        
        <h2>Unreal Engine 5 : Le next-gen</h2>
        <p><strong>Avantages :</strong> Graphismes photoréalistes, Lumen/Nanite, Blueprints visual scripting</p>
        <p><strong>Inconvénients :</strong> C++ complexe, build lourd, learning curve raide</p>
        <p><strong>Prix :</strong> 5% royalties après 1M$</p>
        
        <h2>Cas d'usage recommandés</h2>
        <p><strong>Unity :</strong> Mobile, AR/VR, prototypes rapides, applications enterprise 3D</p>
        <p><strong>Unreal :</strong> Jeux AAA, archviz, films, simulations haute fidélité</p>
        
        <h2>Marché de l'emploi</h2>
        <p><strong>Unity :</strong> 60% des offres mobile/AR, salaires 45-65K€</p>
        <p><strong>Unreal :</strong> 40% des offres AAA, salaires 50-80K€</p>
      `
    },
    {
      id: 12,
      title: "C et C++ 2024 : Quand les langages systèmes ont encore tout pour eux",
      excerpt: "Analyse des use cases modernes pour ces langages dans un monde dominé par le web.",
      category: "Backend",
      readTime: "10 min",
      date: "2023-12-28",
      technologies: ["C", "C++", "Rust", "Python", "Docker"],
      level: "Expert",
      projectType: "Analyse Technique",
      fullContent: `
        <h2>Le renouveau de C/C++</h2>
        <p>Contrairement aux idées reçues, C et C++ connaissent une renaissance avec l'IoT, les performances et la sécurité.</p>
        
        <h2>Use cases modernes</h2>
        <p><strong>C :</strong> Systèmes embarqués, noyaux OS, drivers, protocoles réseaux</p>
        <p><strong>C++ :</strong> Moteurs jeux, applications financières, logiciels scientifiques, browsers</p>
        
        <h2>Performances imbattables</h2>
        <p>Comparaison traitement image 4K : C++ 16ms vs Python 1200ms vs Node.js 800ms</p>
        
        <h2>Écosystème 2024</h2>
        <p>C++20/23 modernes, CMake, Conan, vcpkg, intégration avec Python via pybind11</p>
        
        <h2>Alternatives modernes</h2>
        <p><strong>Rust :</strong> Sécurité mémoire, performances C++, adoption croissante</p>
        <p><strong>Go :</strong> Simplicité, concurrence, compilation rapide</p>
        
        <h2>Notre avis</h2>
        <p>C/C++ restent incontournables pour les performances critiques. Rust pour les nouveaux projets systèmes.</p>
      `
    }
  ];

  const categories = ['Tous', 'Frontend', 'Backend', 'Mobile', 'Cloud & DevOps', 'Sécurité', 'AI/ML', 'Game Dev'];
  
  const allTechnologies = [
    'Tous', 'React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript',
    'Node.js', 'Python', 'Java', 'C#', '.NET', 'Spring Boot', 'FastAPI', 'C', 'C++', 'Go',
    'Flutter', 'React Native', 'SwiftUI', 'Kotlin', 'Android', 'iOS', 'Dart',
    'Azure', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'DevOps', 'GitHub Actions',
    'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL',
    'TensorFlow', 'PyTorch', 'Firebase',
    'JWT', 'OAuth', 'Unity', 'Unreal'
  ];

  // Filtrage fonctionnel CORRIGÉ
  const filteredArticles = articles.filter(article => {
    const categoryMatch = selectedCategory === 'Tous' || article.category === selectedCategory;
    const techMatch = selectedTech === 'Tous' || article.technologies.includes(selectedTech);
    return categoryMatch && techMatch;
  });

  const getProjectTypeColor = (type: string) => {
    const colors = {
      'Comparatif Technique': 'from-cyan-500 to-blue-500',
      'Migration': 'from-orange-500 to-red-500',
      'Benchmark': 'from-pink-500 to-rose-500',
      'Guide Pratique': 'from-green-500 to-teal-500',
      'Architecture': 'from-purple-500 to-blue-500',
      'Analyse Technique': 'from-emerald-500 to-green-500'
    };
    return colors[type as keyof typeof colors] || 'from-gray-500 to-gray-700';
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container py-16">
        {/* En-tête professionnel */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Blog d'ingénierie
            </span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Analyses techniques, benchmarks et retours d'expérience — du frontend
            aux systèmes distribués, en passant par le cloud et la sécurité.
          </p>
        </div>

        {/* Articles SEO approfondis */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Guides approfondis</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { href: '/blog/combien-coute-developpement-web-sur-mesure', title: 'Combien coûte un développement web sur mesure en 2026 ?', excerpt: 'Budgets réalistes par type de projet, facteurs de coût et comparatif avec les solutions no-code.', readTime: '15 min' },
              { href: '/blog/saas-sur-mesure-vs-no-code', title: 'SaaS sur mesure vs No-Code : quel choix pour votre startup ?', excerpt: 'Comparatif honnête : quand le no-code suffit, quand le sur-mesure devient indispensable.', readTime: '12 min' },
              { href: '/blog/comment-choisir-agence-web-paris', title: 'Comment choisir son agence web à Paris en 2026', excerpt: 'Critères d\u2019évaluation, red flags, questions à poser et comparatif freelance vs agence vs ESN.', readTime: '14 min' },
              { href: '/blog/pourquoi-choisir-nextjs', title: 'Pourquoi choisir Next.js pour votre application web ?', excerpt: 'SSR, SSG, Server Components : les avantages concrets de Next.js pour le SEO et la performance.', readTime: '12 min' },
              { href: '/blog/etapes-projet-developpement-logiciel', title: 'Les 7 étapes clés d\u2019un projet de développement logiciel', excerpt: 'Du cadrage au déploiement : livrables, durées et conseils pratiques pour chaque phase.', readTime: '13 min' },
              { href: '/blog/automatiser-gestion-entreprise-ia', title: 'Comment l\u2019IA peut automatiser la gestion de votre entreprise', excerpt: 'Cas concrets : facturation, analyse de données, chatbots, prédiction. ROI et mise en place.', readTime: '14 min' },
            ].map(article => (
              <Link
                key={article.href}
                href={article.href}
                className="group bg-[var(--bg-tertiary)]/30 backdrop-blur-sm rounded-xl border border-[var(--border)] hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 p-6 block"
              >
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-[var(--accent-light)] rounded-full text-sm font-medium mb-3">
                  Guide complet
                </span>
                <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--accent-light)] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <span className="text-sm text-[var(--text-tertiary)]">⏱️ {article.readTime} de lecture</span>
              </Link>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-white">Fiches techniques</h2>

        {/* Filtres fonctionnels */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 p-6 bg-[var(--bg-tertiary)]/50 rounded-2xl border border-[var(--border)]">
          <div className="flex-1">
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              📁 Catégorie
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-[var(--border-hover)] text-[var(--text-secondary)] hover:bg-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex-1">
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              🛠️ Technologie
            </label>
            <select 
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="w-full px-4 py-2 bg-[var(--border-hover)] border border-slate-600 rounded-lg text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {allTechnologies.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Statistiques de filtrage */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <div className="text-[var(--text-tertiary)] mb-4 sm:mb-0">
            {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} 
            {selectedCategory !== 'Tous' && ` • ${selectedCategory}`}
            {selectedTech !== 'Tous' && ` • ${selectedTech}`}
          </div>
          <div className="text-sm text-[var(--text-tertiary)] text-center sm:text-right">
            Guides pratiques • Code de production • Expertises réelles
          </div>
        </div>

        {/* Grille d'articles */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <article 
              key={article.id}
              className="group bg-[var(--bg-tertiary)]/30 backdrop-blur-sm rounded-xl border border-[var(--border)] hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 overflow-hidden"
            >
              <div className="p-6">
                {/* En-tête article */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-[var(--accent-light)] rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      article.level === 'Expert' ? 'bg-red-500/20 text-red-300' :
                      article.level === 'Avancé' ? 'bg-orange-500/20 text-orange-300' :
                      'bg-green-500/20 text-green-300'
                    }`}>
                      {article.level}
                    </span>
                  </div>
                </div>

                {/* Type de projet */}
                <div className={`inline-block px-3 py-1 rounded-lg text-xs font-bold text-white bg-gradient-to-r ${getProjectTypeColor(article.projectType)} mb-4`}>
                  {article.projectType}
                </div>

                {/* Titre et extrait */}
                <h3 className="font-bold text-xl mb-3 group-hover:text-[var(--accent-light)] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {article.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-[var(--border-hover)]/50 text-[var(--text-secondary)] rounded text-xs border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Métriques */}
                <div className="flex justify-between items-center text-sm text-[var(--text-tertiary)] border-t border-[var(--border)]/50 pt-4">
                  <div className="flex items-center gap-4">
                    <span>⏱️ {article.readTime}</span>
                    <span>📅 {article.date}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedArticle(article)}
                    className="text-[var(--accent)] hover:text-[var(--accent-light)] font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1"
                  >
                    Lire <span>→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-[var(--text-secondary)] mb-2">Aucun article trouvé</h3>
            <p className="text-[var(--text-tertiary)]">Essayez de modifier vos critères de filtrage</p>
          </div>
        )}

        {/* CTA professionnel */}
        <div className="text-center mt-20 p-12 bg-[var(--bg-tertiary)]/30 rounded-2xl border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4 text-white">Un projet technique à structurer ?</h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Vous avez identifié la bonne stack — il vous faut l'équipe pour l'implémenter.
            Décrivez votre besoin, nous revenons avec une proposition technique.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
            href="/contact"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors shadow-lg shadow-cyan-500/25 text-center"
            >
            Cadrer mon projet
            </Link>
        </div>
        </div>
        </div>

      {/* MODALE */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[var(--bg-tertiary)] rounded-2xl border border-[var(--border)] max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-[var(--border)] flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">{selectedArticle.title}</h2>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="text-[var(--text-tertiary)] hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              {/* En-tête article dans modale */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-[var(--accent-light)] rounded-full text-sm">
                  {selectedArticle.category}
                </span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  selectedArticle.level === 'Expert' ? 'bg-red-500/20 text-red-300' :
                  selectedArticle.level === 'Avancé' ? 'bg-orange-500/20 text-orange-300' :
                  'bg-green-500/20 text-green-300'
                }`}>
                  {selectedArticle.level}
                </span>
                <span className="px-2 py-1 bg-[var(--border-hover)] text-[var(--text-secondary)] rounded text-xs">
                  ⏱️ {selectedArticle.readTime}
                </span>
              </div>

              {/* Contenu détaillé */}
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedArticle.fullContent }}
              />

              {/* Technologies utilisées */}
              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <h3 className="font-bold text-lg mb-3">🛠️ Technologies abordées</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-[var(--border-hover)] text-[var(--accent-light)] rounded-full text-sm border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-[var(--border)] bg-[var(--bg-tertiary)]/50">
              <div className="flex justify-between items-center">
                <span className="text-[var(--text-tertiary)]">Publié le {selectedArticle.date}</span>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
