import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      {/* Corps principal du footer */}
      <div className="footer-inner !py-14">
        {/* Col 1 – Branding & coordonnées */}
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-0">
            <img
              src={logo}
              alt="HEXAIT - Société d'ingénierie informatique"
              className="h-24 w-auto -mb-6 -ml-4 pointer-events-none select-none"
              loading="lazy"
            />
          </div>
          <p className="text-slate-400 leading-relaxed">
            Studio d'ingénierie logicielle — développement web, cloud et sécurité applicative.
          </p>

          <ul className="mt-6 space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>6 rue d'Armaillé, 75017 Paris</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-cyan-400 flex-shrink-0" />
              <a href="mailto:contact@hexait.fr" className="hover:text-cyan-200 transition-colors">
                contact@hexait.fr
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-cyan-400 flex-shrink-0" />
              <a href="tel:+33184180205" className="hover:text-cyan-200 transition-colors">
                +33 1 84 18 02 05
              </a>
            </li>
          </ul>
        </div>

        {/* CONTENEUR DE GRILLE pour Expertises, Ressources et Légal */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Col 2 – Expertises (liens vers /services) */}
          <div className="h-full">
            <h4 className="footer-head">Expertises</h4>
            <ul className="footer-list space-y-1.5">
              <li><Link to="/services" className="footer-link">Développement Web</Link></li>
              <li><Link to="/services" className="footer-link">Cloud &amp; DevOps</Link></li>
              <li><Link to="/services" className="footer-link">Sécurité Applicative</Link></li>
              <li><Link to="/services" className="footer-link">Conseil Technique</Link></li>
            </ul>
          </div>

          {/* Col 3 – Ressources */}
          <div className="h-full">
            <h4 className="footer-head">Ressources</h4>
            <ul className="footer-list space-y-1.5">
              <li><Link to="/blog" className="footer-link">Blog technique</Link></li>
              <li><Link to="/projets" className="footer-link">Nos projets</Link></li>
              <li><Link to="/a-propos" className="footer-link">À propos</Link></li>
            </ul>
          </div>

          {/* Col 4 – Légal */}
          <div className="h-full">
            <h4 className="footer-head">Légal</h4>
            <ul className="footer-list space-y-1.5">
              <li><Link to="/mentions-legales" className="footer-link">Mentions légales</Link></li>
              <li><Link to="/politique-confidentialite" className="footer-link">Politique de confidentialité</Link></li>
              <li><Link to="/cookies" className="footer-link">Gestion des cookies</Link></li>
              <li><Link to="/conditions-generales" className="footer-link">Conditions générales</Link></li>
            </ul>
          </div>
        </div>
        {/* FIN DU CONTENEUR DE GRILLE */}

        {/* Horaires d'ouverture */}
        <div className="max-w-sm">
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <h5 className="text-sm text-cyan-300 font-semibold">Horaires d'ouverture</h5>
            </div>
            <p className="text-slate-400 text-sm">Lun - Ven : 9h - 18h (CET)</p>
            <p className="text-slate-400 text-xs mt-1">Premier retour sous 24h ouvrées</p>
          </div>
        </div>
      </div>

      {/* Bas de page avec mentions légales */}
      <div className="container py-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm text-center md:text-left">
            <p>© {currentYear} HEXAIT SASU — Capital 5 000 € — RCS Evry 992 031 351</p>
            <p className="text-xs mt-1">SIRET 992 031 351 00016 — TVA Intracom FR11992031351</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
