import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setSolid(scrollY > 24);
      setScrolled(scrollY > 100);
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${solid ? "solid" : "transparent"} ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        {/* Logo avec animation améliorée */}
        <Link to="/" className="flex items-center gap-3 group logo-container">
          <div className="relative">
            <img 
              src="/logo.svg" 
              alt="HEXAIT" 
              className="h-7 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" 
            />
            <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-cyan-300 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </div>
          <span className="text-xl font-bold tracking-wide text-slate-100 group-hover:text-cyan-200 transition-all duration-300 relative">
            HEXAIT
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-300 group-hover:w-full transition-all duration-500"></span>
          </span>
        </Link>

        {/* Desktop Navigation avec indicateur actif amélioré */}
        <nav className="hidden md:flex items-center gap-6">
          {items.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => 
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </NavLink>
          ))}
          <Link 
            to="/contact" 
            className="btn-cta flex items-center gap-2 group"
          >
            <span>Demander un devis</span>
            <Sparkles className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </nav>

        {/* Mobile Menu Button amélioré */}
        <button 
          className="md:hidden p-3 rounded-xl hover:bg-cyan-500/20 transition-all duration-300 group relative overflow-hidden"
          onClick={() => setOpen(v => !v)} 
          aria-label="Menu"
        >
          <div className="relative z-10">
            {open ? (
              <X className="w-6 h-6 text-cyan-300 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="w-6 h-6 text-slate-300 transition-transform duration-300 group-hover:scale-110" />
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-135deg from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
        </button>
      </div>

      {/* Mobile Menu avec animations améliorées */}
      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <div className="container pb-8 pt-6 space-y-2">
          {items.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? "bg-gradient-135deg from-cyan-500/20 to-blue-500/20 text-cyan-300 font-semibold border-l-4 border-cyan-400 shadow-lg"
                    : "text-slate-300 hover:bg-white/10 hover:translate-x-2"
                }`
              }
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-cta w-full justify-center mt-6 py-4 flex items-center gap-2 transform hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4" />
            <span>Demander un devis</span>
          </Link>
        </div>
      </div>
    </header>
  );
}