'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const logo = "/images/branding/logo.png";

const items = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/projets", label: "Nos réalisations" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();

  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  useEffect(() => {
    const t = setTimeout(() => setOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest('.mobile-panel') && !t.closest('button[aria-label="Menu"]')) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`navbar ${solid ? "solid" : "transparent"}`}>
      <div className="nav-inner">
        {/* Logo — left */}
        <Link href="/" className="flex-shrink-0 group">
          <img
            src={logo}
            alt="HEXAIT"
            className="h-20 w-auto transition-opacity duration-300 group-hover:opacity-80 pointer-events-none select-none"
          />
        </Link>

        {/* Links — center */}
        <nav className="hidden md:flex items-center gap-6">
          {items.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : (pathname ?? "").startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA — right */}
        <div className="hidden md:block flex-shrink-0">
          <Link href="/contact" className="btn-cta text-sm px-6 py-2.5">
            Discuter d&apos;un projet
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 transition-colors duration-200"
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile panel */}
      <div className={`mobile-panel ${open ? "open" : ""} md:hidden`}>
        {items.map(item => {
          const isActive = item.href === "/" ? pathname === "/" : (pathname ?? "").startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setTimeout(() => setOpen(false), 100)}
              className={`mobile-nav-link text-2xl font-bold py-3 ${
                isActive
                  ? "text-[var(--accent-light)]"
                  : "text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/contact"
          onClick={() => setTimeout(() => setOpen(false), 100)}
          className="mobile-nav-link btn-cta mt-6 text-base px-8 py-3"
        >
          Discuter d&apos;un projet
        </Link>
      </div>
    </header>
  );
}
