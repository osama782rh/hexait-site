import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
  const location = useLocation();

  // Reset scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${solid ? "solid" : "transparent"}`}>
      <div className="nav-inner">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.svg" 
            alt="HEXAIT" 
            className="h-7 transition-transform duration-300 group-hover:scale-110" 
          />
          <span className="text-xl font-bold tracking-wide text-slate-100 group-hover:text-cyan-200 transition-colors duration-300">
            HEXAIT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => 
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-cta">
            Demander un devis
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
          onClick={() => setOpen(v => !v)} 
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <div className="container pb-6 pt-4 space-y-3">
          {items.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 px-4 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-400/20 text-cyan-300 font-semibold border-l-4 border-cyan-400"
                    : "text-slate-300 hover:bg-white/10 hover:pl-6"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-cta w-full justify-center mt-4"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </header>
  );
}