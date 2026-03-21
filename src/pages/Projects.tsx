// Nettoie les imports :
import { Link } from "react-router-dom";
import Section from "../components/Section";
import { 
  ArrowRight, Globe, Brain, 
  Zap, ShoppingCart, Bolt, Users, Workflow, BarChart3,
  GitBranch, Cloud, X
} from "lucide-react";
import { useEffect, useState } from "react";

/** Animations au scroll */
function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-title");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) (e.target as HTMLElement).classList.add("show"); });
    }, { threshold: 0.35 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Hook pour le carousel d'images */
function useImageCarousel(images: string[], interval: number = 3000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return { currentIndex, setCurrentIndex };
}

/** Composant Modal pour l'image agrandie */
function ImageModal({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose 
}: { 
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-4xl max-h-[90vh] mx-4">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 p-2 text-white hover:text-gray-300 transition-colors"
        >
          <X size={24} />
        </button>
        
        {/* Image agrandie */}
        <div className="bg-slate-800 rounded-lg overflow-hidden">
          <img
            src={images[currentIndex]}
            alt="Vue agrandie"
            className="w-full h-full object-contain max-h-[80vh]"
          />
        </div>
        
        {/* Indicateurs */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  useRevealOnScroll();

  return (
    <>
      {/* HERO Projets */}
      <Section>
        <div className="container text-center">
          <span className="hero-badge reveal">Nos réalisations</span>
          <h1 className="hero-title mt-3 reveal-title">
            Ce que nous <span className="text-gradient">avons construit</span>
          </h1>
          <p className="hero-sub mx-auto mt-4 reveal reveal-delay-1">
            Plateformes SaaS, outils métier, e-commerce et solutions d'automatisation —
            chaque projet reflète notre exigence d'exécution.
          </p>
          <div className="hero-actions mt-6 reveal reveal-delay-2">
            <Link to="/contact" className="btn-cta">Lancer votre projet</Link>
            <Link to="/services" className="btn-ghost">Voir nos services</Link>
          </div>
        </div>
      </Section>

      {/* Projet Welyx */}
      <WelyxProject />

      {/* Projet Oview */}
      <OviewProject />

      {/* Projet StratGen */}
      <StratGenProject />

      {/* Projet PosturePro */}
      <PostureProProject />

      {/* Projet SOVOLT Energie */}
      <SovoltProject />

      {/* Projet SynapseFlow */}
      <SynapseFlowProject />

      {/* Projets secondaires */}
      <OtherProjects />

      {/* CTA final */}
      <Section>
        <div className="container text-center">
          <div className="card p-10 md:p-12 reveal hover:transform hover:scale-[1.01] transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Un projet à <span className="text-gradient">concrétiser</span> ?
            </h3>
            <p className="mt-3 text-slate-300">
              Cadrage technique offert • Proposition sous 48h • Interlocuteur senior dédié
            </p>
            <div className="mt-6 flex gap-4 justify-center flex-wrap">
              <Link to="/contact" className="btn-cta">Cadrer mon projet</Link>
              <Link to="/services" className="btn-ghost">Découvrir nos services</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

/* =========================
   Composants des projets
   ========================= */

function WelyxProject() {
  const images = [
    "/images/projects/welyx/dashboard.png",
    "/images/projects/welyx/analytics.png", 
    "/images/projects/welyx/invoices.png",
    "/images/projects/welyx/mobile-view.png"
  ];
  const { currentIndex } = useImageCarousel(images);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Section id="welyx">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-400/10 text-cyan-300 rounded-full text-sm font-medium">
              <Brain size={16} /> IA • SaaS • Automatisation
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-3">Welyx</h2>
            <p className="text-lg text-cyan-300 font-semibold">
              Plateforme de gestion assistée par IA pour indépendants et PME
            </p>
            
            <p className="mt-4 text-slate-300">
              Plateforme SaaS tout-en-un qui automatise la gestion quotidienne des indépendants, 
              artisans et PME avec l'IA générative.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="card hover:transform hover:-translate-y-1 transition-all duration-300">
                <Zap className="text-cyan-300 mb-2" size={20} />
                <h4 className="font-bold text-sm">Génération IA</h4>
                <p className="text-xs text-slate-400 mt-1">Devis et factures automatiques</p>
              </div>
              <div className="card hover:transform hover:-translate-y-1 transition-all duration-300">
                <Cloud className="text-cyan-300 mb-2" size={20} />
                <h4 className="font-bold text-sm">Multi-métiers</h4>
                <p className="text-xs text-slate-400 mt-1">Artisans, freelances, PME</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-bold text-slate-200 mb-3">Stack technique</h4>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "PostgreSQL", "OpenAI", "Stripe", "Azure"].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="btn-ghost opacity-50 cursor-not-allowed" disabled>
                <Globe size={16} /> Accès public indisponible
              </button>
              <Link to="/contact" className="btn-cta">
                Voir une démo <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="reveal">
            <div 
              className="card overflow-hidden p-0 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:border hover:border-white/20"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="aspect-video relative bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                <img
                  src={images[currentIndex]}
                  alt="Welyx - Interface dashboard"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-400">
                  Dashboard, création de devis IA, vue client et application mobile
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <ImageModal
        images={images}
        currentIndex={currentIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

function OviewProject() {
  const images = [
    "/images/projects/oview/landing_page.png",
    "/images/projects/oview/chiffre_affaire_vue.png", 
    "/images/projects/oview/commandes.png",
    "/images/projects/oview/tdb_vue.png"
  ];

  const { currentIndex } = useImageCarousel(images);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Section id="oview">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-400/10 text-green-300 rounded-full text-sm font-medium">
                <Users size={16} /> SaaS • Restauration • Commandes
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold mt-3">Oview</h2>
              <p className="text-lg text-green-300 font-semibold">
                Plateforme SaaS tout-en-un pour la restauration
              </p>

              <p className="mt-4 text-slate-300">
                Solution complète pour restaurants : menu digital (QR code), prise de commande,
                écran cuisine (KDS), gestion des commandes, paiements, reçus,
                réservations, promotions et analytics en temps réel.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="card hover:transform hover:-translate-y-1 transition-all duration-300">
                  <Globe className="text-green-300 mb-2" size={20} />
                  <h4 className="font-bold text-sm">Menu Digital</h4>
                  <p className="text-xs text-slate-400 mt-1">QR code, commandes et paiements</p>
                </div>
                <div className="card hover:transform hover:-translate-y-1 transition-all duration-300">
                  <Zap className="text-green-300 mb-2" size={20} />
                  <h4 className="font-bold text-sm">KDS & Analytics</h4>
                  <p className="text-xs text-slate-400 mt-1">Écran cuisine et tableau de bord</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-bold text-slate-200 mb-3">Stack technique</h4>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Vercel"].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="btn-ghost opacity-50 cursor-not-allowed" disabled>
                  <Globe size={16} /> Accès public indisponible
                </button>
                <Link to="/contact" className="btn-cta">
                  Voir une démo <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          <div className="reveal">
            <div 
              className="card overflow-hidden p-0 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:border hover:border-white/20"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="aspect-video relative bg-gradient-to-br from-green-500/10 to-blue-500/10">
                <img
                  src={images[currentIndex]}
                  alt="Oview - Plateforme restaurant"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-green-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-400">
                  Menu digital, gestion des commandes, KDS et tableau de bord analytics
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <ImageModal
        images={images}
        currentIndex={currentIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

function StratGenProject() {
  const images = [
    "/images/projects/stratgen/landing.png",
    "/images/projects/stratgen/dashboard.png",
    "/images/projects/stratgen/strategy.png",
    "/images/projects/stratgen/calendar.png"
  ];

  const { currentIndex } = useImageCarousel(images);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Section id="stratgen">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-400/10 text-purple-300 rounded-full text-sm font-medium">
              <BarChart3 size={16} /> SaaS • SEO • Intelligence Artificielle
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-3">StratGen</h2>
            <p className="text-lg text-purple-300 font-semibold">
              Pilotage SEO assisté par IA, orienté performance
            </p>

            <p className="mt-4 text-slate-300">
              Solution SaaS de pilotage SEO conçue pour centraliser et automatiser la stratégie
              de contenu à grande échelle. Gestion par espaces de travail, calendriers éditoriaux,
              tableaux de bord en temps réel, collaboration avec permissions granulaires et IA d'analyse
              stratégique pour maximiser la visibilité organique.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="card hover:transform hover:-translate-y-1 transition-all duration-300">
                <Brain className="text-purple-300 mb-2" size={20} />
                <h4 className="font-bold text-sm">IA Stratégique</h4>
                <p className="text-xs text-slate-400 mt-1">Audit concurrentiel et analyse des écarts</p>
              </div>
              <div className="card hover:transform hover:-translate-y-1 transition-all duration-300">
                <Workflow className="text-purple-300 mb-2" size={20} />
                <h4 className="font-bold text-sm">Espaces de travail collaboratifs</h4>
                <p className="text-xs text-slate-400 mt-1">Calendrier éditorial et permissions</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-bold text-slate-200 mb-3">Stack technique</h4>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Python", "Claude", "PostgreSQL", "Redis"].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="btn-ghost opacity-50 cursor-not-allowed" disabled>
                <Globe size={16} /> Accès public indisponible
              </button>
              <Link to="/contact" className="btn-cta">
                Voir une démo <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="reveal">
            <div
              className="card overflow-hidden p-0 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:border hover:border-white/20"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="aspect-video relative bg-gradient-to-br from-purple-500/10 to-indigo-500/10">
                <img
                  src={images[currentIndex]}
                  alt="StratGen - Dashboard SEO"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-purple-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-400">
                  Dashboard SEO, workspaces collaboratifs, audit IA et calendrier éditorial
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <ImageModal
        images={images}
        currentIndex={currentIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

function PostureProProject() {
  const images = [
    "/images/projects/posturepro/home.jpg",
    "/images/projects/posturepro/products.jpg",
    "/images/projects/posturepro/product-detail.jpg",
    "/images/projects/posturepro/checkout.jpg"
  ];
  const { currentIndex } = useImageCarousel(images);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Section id="posturepro">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-400/10 text-orange-300 rounded-full text-sm font-medium">
              <ShoppingCart size={16} /> E-commerce • Dropshipping
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-3">PosturePro</h2>
            <p className="text-lg text-orange-300 font-semibold">
              Matériel ergonomique pour votre bien-être au quotidien
            </p>

            <p className="mt-4 text-slate-300">
              Boutique en ligne spécialisée dans les produits de correction posturale 
              pour bureau, voiture et maison.
            </p>

            <div className="mt-6 space-y-2">
              {[
                "Catalogue produits dynamique",
                "Système de paiement sécurisé", 
                "Gestion des commandes et livraisons",
                "Optimisation SEO et performance"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-slate-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button className="btn-ghost opacity-50 cursor-not-allowed" disabled>
                <Globe size={16} /> Site en maintenance
              </button>
            </div>
          </div>

          <div className="reveal">
            <div 
              className="card overflow-hidden p-0 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:border hover:border-white/20"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="aspect-video relative bg-gradient-to-br from-orange-500/10 to-red-500/10">
                <img
                  src={images[currentIndex]}
                  alt="PosturePro E-commerce"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-400">
                  Pages produit, panier, checkout et gestion des commandes
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <ImageModal
        images={images}
        currentIndex={currentIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

function SovoltProject() {
  const images = [
    "/images/projects/sovolt/home.jpg",
    "/images/projects/sovolt/services.jpg",
    "/images/projects/sovolt/contact.jpg",
    "/images/projects/sovolt/mobile-view.jpg"
  ];
  const { currentIndex } = useImageCarousel(images);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Section>
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 text-yellow-300 rounded-full text-sm font-medium">
              <Bolt size={16} /> Vitrine • Vue.js • Vite
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-3">SOVOLT Energie</h2>
            <p className="text-lg text-yellow-300 font-semibold">
              Site vitrine professionnel pour électricien
            </p>

            <p className="mt-4 text-slate-300">
              Présentation des services d'électricité générale avec formulaire de contact 
              intégré et design responsive optimisé.
            </p>

            <div className="mt-6">
              <h4 className="font-bold text-slate-200 mb-3">Stack technique</h4>
              <div className="flex flex-wrap gap-2">
                {["Vue.js", "JavaScript", "Vite", "CSS3", "Responsive"].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <button className="btn-ghost opacity-50 cursor-not-allowed" disabled>
                <Globe size={16} /> Site client privé
              </button>
            </div>
          </div>

          <div className="reveal">
            <div 
              className="card overflow-hidden p-0 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:border hover:border-white/20"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="aspect-video relative bg-gradient-to-br from-yellow-500/10 to-amber-500/10">
                <img
                  src={images[currentIndex]}
                  alt="SOVOLT Energie Website"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-400">
                  Pages services, présentation entreprise et formulaire de contact
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <ImageModal
        images={images}
        currentIndex={currentIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

function SynapseFlowProject() {
  const images = [
    "/images/projects/synapseflow/dashboard.jpg",
    "/images/projects/synapseflow/workflow.jpg",
    "/images/projects/synapseflow/analytics.jpg",
    "/images/projects/synapseflow/integrations.jpg"
  ];
  const { currentIndex } = useImageCarousel(images);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Section>
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-400/10 text-purple-300 rounded-full text-sm font-medium">
              <Workflow size={16} /> Automation • n8n • Dashboard
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-3">SynapseFlow</h2>
            <p className="text-lg text-purple-300 font-semibold">
              Tableau de bord automatisé de l'écosystème commercial
            </p>

            <p className="mt-4 text-slate-300">
              Solution d'automatisation qui agrège en temps réel toutes les activités 
              et interactions de l'entreprise avec son environnement commercial.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="card hover:transform hover:-translate-y-1 transition-all duration-300">
                <BarChart3 className="text-purple-300 mb-2" size={20} />
                <h4 className="font-bold text-sm">Analytics Temps Réel</h4>
                <p className="text-xs text-slate-400 mt-1">Données unifiées</p>
              </div>
              <div className="card hover:transform hover:-translate-y-1 transition-all duration-300">
                <GitBranch className="text-purple-300 mb-2" size={20} />
                <h4 className="font-bold text-sm">Workflows Automatisés</h4>
                <p className="text-xs text-slate-400 mt-1">n8n & intégrations</p>
              </div>
            </div>

            <div className="mt-6">
              <button className="btn-ghost opacity-50 cursor-not-allowed" disabled>
                <Globe size={16} /> Solution interne
              </button>
            </div>
          </div>

          <div className="reveal">
            <div 
              className="card overflow-hidden p-0 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:border hover:border-white/20"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="aspect-video relative bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                <img
                  src={images[currentIndex]}
                  alt="SynapseFlow Dashboard"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-400">
                  Dashboard unifié, workflows automatisés et analytics commercial
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <ImageModal
        images={images}
        currentIndex={currentIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

function OtherProjects() {
  const projects = [
    {
      title: "Algorithmes de Trading",
      description: "Solutions Python intégrées à TradingView pour l'analyse technique automatisée",
      icon: <BarChart3 className="text-cyan-300" size={20} />,
      status: "Privé",
      tags: ["Python", "TradingView", "Algorithmique"]
    },
    {
      title: "Location de Caftans",
      description: "Plateforme de location de vêtements traditionnels avec réservation en ligne",
      icon: <ShoppingCart className="text-pink-300" size={20} />,
      status: "Privé", 
      tags: ["E-commerce", "Réservation", "Vitrine"]
    },
    {
      title: "Plateforme Dépannage",
      description: "Site vitrine professionnel pour entreprise de dépannage multiservices",
      icon: <Bolt className="text-yellow-300" size={20} />,
      status: "Privé",
      tags: ["Vitrine", "Services", "Responsive"]
    }
  ];

  return (
    <Section>
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center reveal">
          Autres réalisations
        </h2>
        <p className="text-slate-300 text-center mt-2 reveal reveal-delay-1">
          D'autres projets menés dans des domaines variés
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card reveal hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-3">
                {project.icon}
                <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400">
                  {project.status}
                </span>
              </div>
              <h3 className="font-bold mt-3">{project.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
