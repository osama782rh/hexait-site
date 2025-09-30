// haut du fichier
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

// signature + return (⚠️ parenthèse sur la même ligne que return)
export default function Footer() {
  return (
    <footer className="footer">
      {/* Bandeau supérieur : pitch + CTA */}
      <div className="container py-12 md:py-16">
        <div className="card p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Un besoin produit, cloud ou sécurité ?
            </h3>
            <p className="text-slate-300 mt-2 max-w-2xl">
              Audit gratuit de 30 minutes pour identifier vos leviers rapides (perf, coûts, sécurité, CX).
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/contact" className="btn-cta">Prendre RDV</Link>
            <Link to="/services" className="btn-ghost">Voir nos offres</Link>
          </div>
        </div>
      </div>

      {/* Corps principal du footer */}
      <div className="footer-inner !py-14">
        {/* Col 1 – Branding & coordonnées */}
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="HEXAIT" className="h-12" /> {/* h-8 -> h-12 */}
            <span className="font-display font-extrabold tracking-wide text-xl">HEXAIT</span>
          </div>
          <p className="mt-3 text-slate-400">
            Studio d’ingénierie logicielle. Produits web, cloud & IA performants, sécurisés et maintenables.
          </p>

          <ul className="mt-4 space-y-2 text-slate-300">
            <li className="flex items-center gap-2"><MapPin size={16}/> Paris, France</li>
            <li className="flex items-center gap-2"><Mail size={16}/> contact@hexait.dev</li>
            <li className="flex items-center gap-2"><Phone size={16}/> +33 6 12 34 56 78</li>
          </ul>

          <div className="mt-4 flex items-center gap-3 text-slate-300">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-cyan-200"><Github /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-cyan-200"><Linkedin /></a>
          </div>
        </div>

        {/* Col 2 – Services détaillés */}
        <div>
          <h4 className="footer-head">Services</h4>
          <ul className="footer-list">
            <li><Link to="/services#developpement">Apps web & mobiles</Link></li>
            <li><Link to="/services#cloud">Cloud & DevOps (Azure, K8s)</Link></li>
            <li><Link to="/services#securite">Sécurité & audits (OWASP, SSO)</Link></li>
            <li><Link to="/services#data">Data & IA (ETL, embeddings)</Link></li>
            <li><Link to="/services#conseil">Conseil, coaching & TMA</Link></li>
          </ul>
        </div>

        {/* Col 3 – Technologies */}
        <div>
          <h4 className="footer-head">Technologies</h4>
          <ul className="footer-list">
            <li>React / Next.js, Vite, Tailwind</li>
            <li>Node/Nest, Python/FastAPI</li>
            <li>GraphQL, REST, WebSockets</li>
            <li>Docker, Kubernetes, GitHub Actions</li>
            <li>Azure, Terraform, Monitoring</li>
          </ul>
        </div>

        {/* Col 4 – Ressources */}
        <div>
          <h4 className="footer-head">Ressources</h4>
          <ul className="footer-list">
            <li><Link to="/blog">Blog & études de cas</Link></li>
            <li><Link to="/docs">Docs & guides</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/projets">Projets</Link></li>
            <li><Link to="/carriere">Carrières</Link></li>
          </ul>
        </div>

        {/* Col 5 – Légal */}
        <div>
          <h4 className="footer-head">Légal</h4>
          <ul className="footer-list">
            <li><Link to="/mentions-legales">Mentions légales</Link></li>
            <li><Link to="/confidentialite">Politique de confidentialité</Link></li>
            <li><Link to="/cookies">Gestion des cookies</Link></li>
            <li><Link to="/cgv">CGV</Link></li>
            <li><Link to="/dpo">DPO & RGPD</Link></li>
          </ul>
        </div>

        {/* Col 6 – Newsletter + horaires */}
        <div className="max-w-sm">
          <h4 className="footer-head">Newsletter</h4>
          <p className="text-slate-400">Des insights techniques utiles, 1 fois par mois.</p>
          <form className="mt-3 flex gap-2">
            <input className="field flex-1" placeholder="Votre email" aria-label="Votre email" />
            <button className="btn-cta">S’abonner</button>
          </form>

          <div className="mt-5">
            <h5 className="text-sm text-slate-300 font-semibold">Horaires</h5>
            <p className="text-slate-400 text-sm mt-1">Lun–Ven : 9h–18h (CET)</p>
          </div>
        </div>
      </div>

      {/* Barre intermédiaire : badges / engagements */}
      <div className="container py-8 border-t border-white/10">
        <div className="grid md:grid-cols-4 gap-4 text-slate-300 text-sm">
          <div className="card py-4 text-center">⏱️ SLA 99%</div>
          <div className="card py-4 text-center">🔒 Security-first</div>
          <div className="card py-4 text-center">🚀 CI/CD prêt-prod</div>
          <div className="card py-4 text-center">📈 Perf Web Vitals</div>
        </div>
      </div>

      {/* Bas de page : sitemap mini + copyright */}
      <div className="container py-8 text-xs text-slate-500">
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projets">Projets</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/confidentialite">Confidentialité</Link></li>
            <li><Link to="/mentions-legales">Mentions</Link></li>
            <li><Link to="/cgv">CGV</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
          </ul>
          <p className="text-right">© {new Date().getFullYear()} HEXAIT — Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}