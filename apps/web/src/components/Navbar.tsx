import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/projets", label: "Projets" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${solid ? "solid" : "transparent"}`}>
      <div className="nav-inner">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="HEXAIT" className="h-7" />
          <span className="font-display font-extrabold tracking-wide">HEXAIT</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {items.map(i => (
            <NavLink key={i.to} to={i.to}
              className={({ isActive }) => `${isActive ? "nav-link nav-link-active" : "nav-link"}`}>
              {i.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-cta">Demander un devis</Link>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Menu">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden container pb-4 space-y-2">
          {items.map(i => (
            <NavLink key={i.to} to={i.to} onClick={() => setOpen(false)} className="block py-2 nav-link">
              {i.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}
                className="btn-cta w-full justify-center">Demander un devis</Link>
        </div>
      )}
    </header>
  );
}
