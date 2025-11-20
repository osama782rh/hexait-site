import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      console.log("Inscription newsletter:", email);
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      {/* Corps principal du footer */}
      <div className="footer-inner !py-14">
        {/* Col 1 – Branding & coordonnées */}
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="/logo.svg" 
              alt="HEXAIT - Société d'ingénierie informatique" 
              className="h-12 w-12"
              loading="lazy"
            />
            <span className="font-display font-extrabold tracking-wide text-xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              HEXAIT
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Société d'ingénierie informatique experte en développement, cloud et DevOps.
          </p>

          <ul className="mt-6 space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>91250 Tigery, France</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-cyan-400 flex-shrink-0" />
              <a href="mailto:contact@hexait.fr" className="hover:text-cyan-200 transition-colors">
                contact@hexait.fr
              </a>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-4">
            <a 
              href="https://github.com/hexait-studio" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Voir nos projets open source sur GitHub"
              className="p-2 bg-slate-700 rounded-lg hover:bg-cyan-600 transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/company/hexait" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Suivre notre actualité sur LinkedIn"
              className="p-2 bg-slate-700 rounded-lg hover:bg-cyan-600 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* CONTENEUR DE GRILLE pour Expertises, Technologies, Ressources et Légal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Col 2 – Services détaillés */}
          <div className="h-full">
            <h4 className="footer-head">Expertises</h4>
            <ul className="footer-list">
              <li><Link to="/services/developpement" className="footer-link">Développement Web</Link></li>
              <li><Link to="/services/cloud" className="footer-link">Cloud & DevOps</Link></li>
              <li><Link to="/services/securite" className="footer-link">Sécurité Applicative</Link></li>
              <li><Link to="/services/conseil" className="footer-link">Conseil Technique</Link></li>
            </ul>
          </div>

          {/* Col 3 – Technologies */}
          <div className="h-full">
            <h4 className="footer-head">Technologies</h4>
            <ul className="footer-list">
              <li className="tech-item">React / Next.js / TypeScript</li>
              <li className="tech-item">Node.js / Python</li>
              <li className="tech-item">Azure / Docker</li>
              <li className="tech-item">PostgreSQL / MongoDB</li>
            </ul>
          </div>

          {/* Col 4 – Ressources */}
          <div className="h-full">
            <h4 className="footer-head">Ressources</h4>
            <ul className="footer-list">
              <li><Link to="/blog" className="footer-link">Blog technique</Link></li>
              <li><Link to="/projets" className="footer-link">Nos projets</Link></li>
              <li><Link to="/a-propos" className="footer-link">À propos</Link></li>
            </ul>
          </div>

          {/* Col 5 – Légal */}
          <div className="h-full">
            <h4 className="footer-head">Légal</h4>
            <ul className="footer-list">
              <li><Link to="/mentions-legales" className="footer-link">Mentions légales</Link></li>
              <li><Link to="/politique-confidentialite" className="footer-link">Politique de confidentialité</Link></li>
              <li><Link to="/cookies" className="footer-link">Gestion des cookies</Link></li>
              <li><Link to="/conditions-generales" className="footer-link">Conditions générales</Link></li>
            </ul>
          </div>
        </div>
        {/* FIN DU CONTENEUR DE GRILLE */}

        {/* Col 6 – Newsletter améliorée */}
        <div className="max-w-sm">
          <h4 className="footer-head">Restez informé</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Recevez nos insights techniques et bonnes pratiques de développement.
          </p>
          
          {isSubscribed ? (
            <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
              ✅ Merci ! Vous êtes maintenant inscrit à notre newsletter.
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="mt-4 space-y-3">
              <div className="relative">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="field flex-1 pl-3 pr-10"
                  placeholder="votre@email.com"
                  aria-label="Votre adresse email"
                  required
                />
                <Mail size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              </div>
              <button 
                type="submit"
                className="btn-cta w-full justify-center"
              >
                S'abonner à la newsletter
              </button>
            </form>
          )}

          <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <h5 className="text-sm text-cyan-300 font-semibold">🕒 Horaires d'ouverture</h5>
            </div>
            <p className="text-slate-400 text-sm">Lun - Ven : 9h - 18h (CET)</p>
            <p className="text-slate-500 text-xs mt-1">Réponse sous 24h</p>
          </div>
        </div>
      </div>

      {/* Barre des engagements améliorée */}
      <div className="container py-8 border-t border-white/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: "⚡", text: "Développement", desc: "Applications modernes" },
            { icon: "☁️", text: "Cloud & DevOps", desc: "Infrastructure scalable" },
            { icon: "🔒", text: "Sécurité", desc: "Code sécurisé" },
            { icon: "🚀", text: "Performance", desc: "Applications optimisées" }
          ].map((item, index) => (
            <div key={index} className="card py-4 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="font-semibold text-cyan-300">{item.text}</div>
              <div className="text-xs text-slate-400 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bas de page avec mentions légales complètes */}
      <div className="container py-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {[
              { name: 'Accueil', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'Projets', path: '/projets' },
              { name: 'À propos', path: '/a-propos' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path}
                  className="text-slate-400 hover:text-cyan-200 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="text-slate-500 text-sm text-center md:text-right">
            <p>© {currentYear} HEXAIT SASU — Capital 5 000 € — RCS Evry 992 031 351</p>
            <p className="text-xs mt-1">SIRET 992 031 351 00010 — TVA Intracom FRXX992031351</p>
          </div>
        </div>
      </div>
    </footer>
  );
}