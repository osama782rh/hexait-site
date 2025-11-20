             // apps/web/src/pages/About.tsx
import { Link } from "react-router-dom";
import { 
  Code, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Target,
  Award,
  Clock,
  MapPin,
  Mail,
  Phone,
  ArrowRight
} from "lucide-react";
import Section from "../components/Section";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-navy to-slate-900 border-b border-white/10">
        <div className="container text-center px-6">
          <span className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-slate-200 border border-white/20 mb-6">
            <Award size={16} />
            Société d'ingénierie informatique
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Expertise technique,
            <span className="block text-gradient bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              vision artisanale
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            HEXAIT allie excellence technique et approche sur-mesure pour transformer 
            vos idées en produits digitaux performants et sécurisés.
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Notre <span className="text-gradient">histoire</span>
            </h2>
            <div className="space-y-4 text-slate-300">
              <p>
                Fondée en 2025 par un ingénieur passionné par les technologies cloud et le développement de solutions, 
                HEXAIT est née d'une conviction simple : l'excellence technique doit servir des solutions concrètes et accessibles.
              </p>
              <p>
                Notre nom "HEXAIT" symbolise l'hexagone français et l'IT (Technologies de l'Information), 
                représentant notre ancrage local et notre expertise globale dans le numérique.
              </p>
              <p>
                Nous croyons en une approche <strong>artisanale du développement</strong> : chaque projet est unique, 
                mérite une attention particulière et des solutions sur-mesure.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Target size={20} className="text-cyan-400" />
                Notre mission
              </h3>
              <p className="text-slate-300">
                Concevoir et livrer des produits digitaux <strong>fiables, performants et sécurisés</strong> qui 
                accélèrent la croissance de nos clients, avec une exigence technique d'excellence.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center p-6">
              <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="text-cyan-400" size={24} />
              </div>
              <h4 className="font-bold mb-2">Développement</h4>
              <p className="text-slate-300 text-sm">Applications web & mobiles sur-mesure</p>
            </div>
            
            <div className="card text-center p-6">
              <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-cyan-400" size={24} />
              </div>
              <h4 className="font-bold mb-2">Cloud & DevOps</h4>
              <p className="text-slate-300 text-sm">Infrastructures scalables et automatisées</p>
            </div>
            
            <div className="card text-center p-6">
              <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-cyan-400" size={24} />
              </div>
              <h4 className="font-bold mb-2">Cybersécurité</h4>
              <p className="text-slate-300 text-sm">Protection et bonnes pratiques</p>
            </div>
            
            <div className="card text-center p-6">
              <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-cyan-400" size={24} />
              </div>
              <h4 className="font-bold mb-2">Conseil</h4>
              <p className="text-slate-300 text-sm">Expertise technique et stratégique</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Nos Valeurs */}
      <Section className="bg-white/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Nos <span className="text-gradient">valeurs</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Les principes qui guident chaque décision et chaque ligne de code
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center p-6">
            <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="text-cyan-400" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Transparence radicale</h3>
            <p className="text-slate-300">
              Code propriétaire, roadmap partagée, risques identifiés. 
              Nous croyons que la confiance se construit sur la transparence.
            </p>
          </div>
          
          <div className="card text-center p-6">
            <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="text-cyan-400" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Excellence technique</h3>
            <p className="text-slate-300">
              Revues de code systématiques, tests automatisés, architectures robustes. 
              Chaque détail compte.
            </p>
          </div>
          
          <div className="card text-center p-6">
            <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="text-cyan-400" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Approche artisanale</h3>
            <p className="text-slate-300">
              Pas de solutions génériques. Chaque projet est unique et mérite 
              une solution pensée spécifiquement.
            </p>
          </div>
        </div>
      </Section>

      {/* Notre Approche */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Notre <span className="text-gradient">approche</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Focus sur les objectifs métier</h4>
                  <p className="text-slate-300">
                    Nous ne livrons pas du code, nous livrons des solutions qui résolvent 
                    des problèmes business concrets.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Communication transparente</h4>
                  <p className="text-slate-300">
                    Démonstrations hebdomadaires, reporting régulier, accès au board projet. 
                    Vous savez toujours où nous en sommes.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Sécurité by design</h4>
                  <p className="text-slate-300">
                    La sécurité n'est pas une fonctionnalité optionnelle. Elle est intégrée 
                    dès la conception de l'architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card p-8">
            <h3 className="font-bold text-2xl mb-6">Pourquoi nous choisir ?</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span><strong>Expertise full-stack</strong> : une vision complète de votre projet</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span><strong>Flexibilité</strong> : adapté aux startups comme aux entreprises établies</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span><strong>Transparence</strong> : pas de surprises, que des engagements tenus</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span><strong>Réactivité</strong> : réponse sous 24h, démos hebdomadaires</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Informations Légales */}
      <Section className="bg-white/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Informations <span className="text-gradient">légales</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card p-6">
            <h3 className="font-bold text-lg mb-4">HEXAIT SASU</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>20 Rue du Commandant Maurice Lissac<br />91250 Tigery, France</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-cyan-400 flex-shrink-0" />
                <a href="mailto:contact@hexait.fr" className="hover:text-cyan-200 transition-colors">
                  contact@hexait.fr
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-cyan-400 flex-shrink-0" />
                <a href="tel:+33765668282" className="hover:text-cyan-200 transition-colors">
                  +33 7 65 66 82 82
                </a>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <h3 className="font-bold text-lg mb-4">Informations juridiques</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p><strong>SIRET :</strong> 992 031 351 000 16</p>
              <p><strong>RCS :</strong> Evry 992 031 351</p>
              <p><strong>Capital social :</strong> 5 000 €</p>
              <p><strong>Forme juridique :</strong> SASU</p>
              <p><strong>Date d'immatriculation :</strong> 10/10/2025</p>
              <p><strong>TVA :</strong> FR 11 992031351</p>
              <p><strong>Activité :</strong> Conseil en systèmes et logiciels informatiques</p>
              <p><strong>Code NAF :</strong> 6201Z</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Prêt à <span className="text-gradient">donner vie</span> à votre projet ?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Discutons de vos besoins et voyons comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-cta text-lg px-8 py-4 font-semibold">
              Discuter de mon projet <ArrowRight size={20} />
            </Link>
            <Link to="/services" className="btn-ghost text-lg px-8 py-4">
              Découvrir nos services
            </Link>
          </div>
          
          <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-slate-400">
            <div>
              <div className="font-semibold text-cyan-300">24h</div>
              <div>Réponse garantie</div>
            </div>
            <div>
              <div className="font-semibold text-cyan-300">100%</div>
              <div>Code propriétaire</div>
            </div>
            <div>
              <div className="font-semibold text-cyan-300">0€</div>
              <div>Audit initial</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}