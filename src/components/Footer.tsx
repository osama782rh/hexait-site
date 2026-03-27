import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const logo = "/images/branding/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border-t" role="contentinfo">
      <div className="footer-inner">
        {/* Col 1 — Branding + Contact */}
        <div className="space-y-3">
          <Link href="/" className="inline-block">
            <img
              src={logo}
              alt="HEXAIT"
              className="h-20 w-auto pointer-events-none select-none opacity-90"
              loading="lazy"
            />
          </Link>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
            Studio d&apos;ingénierie logicielle — applications web, SaaS et automatisations sur mesure.
          </p>

          <ul className="space-y-2.5">
            <li className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
              <span>Paris, France</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Mail size={15} className="flex-shrink-0" style={{ color: 'var(--accent)' }} />
              <a href="mailto:contact@hexait.fr" className="link-underline" style={{ color: 'var(--text-secondary)' }}>
                contact@hexait.fr
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Phone size={15} className="flex-shrink-0" style={{ color: 'var(--accent)' }} />
              <a href="tel:+33184180205" className="link-underline" style={{ color: 'var(--text-secondary)' }}>
                +33 1 84 18 02 05
              </a>
            </li>
          </ul>
        </div>

        {/* Col 2 — Navigation */}
        <div>
          <h4 className="footer-head">Navigation</h4>
          <ul className="space-y-1">
            <li><Link href="/" className="footer-link">Accueil</Link></li>
            <li><Link href="/services" className="footer-link">Services</Link></li>
            <li><Link href="/projets" className="footer-link">Nos réalisations</Link></li>
            <li><Link href="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        {/* Col 3 — Expertises */}
        <div>
          <h4 className="footer-head">Expertises</h4>
          <ul className="space-y-1">
            <li><Link href="/services" className="footer-link">Applications Web</Link></li>
            <li><Link href="/services" className="footer-link">Produits SaaS</Link></li>
            <li><Link href="/services" className="footer-link">APIs &amp; Cloud</Link></li>
            <li><Link href="/services" className="footer-link">Audit technique</Link></li>
          </ul>
        </div>

        {/* Col 4 — Légal */}
        <div>
          <h4 className="footer-head">Légal</h4>
          <ul className="space-y-1">
            <li><Link href="/mentions-legales" className="footer-link">Mentions légales</Link></li>
            <li><Link href="/politique-confidentialite" className="footer-link">Confidentialité</Link></li>
            <li><Link href="/cookies" className="footer-link">Cookies</Link></li>
            <li><Link href="/conditions-generales" className="footer-link">CGV</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
          © {currentYear} HEXAIT SASU — Tous droits réservés
        </p>
        <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
          Conçu avec passion en France
        </p>
      </div>
    </footer>
  );
}
