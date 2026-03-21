// apps/web/src/App.tsx
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "./components/Head";
import CookieBanner from "./components/CookieBanner";

function getPageMeta(pathname: string) {
  if (pathname === "/") {
    return {
      title: "Accueil",
      description:
        "HEXAIT — studio d'ingénierie logicielle. Développement de plateformes web, SaaS et outils métier. Architecture, déploiement, sécurité.",
    };
  }
  if (pathname.startsWith("/services")) {
    return {
      title: "Services",
      description:
        "UX/UI, développement full-stack, cloud & DevOps, sécurité applicative — de l'audit au déploiement en production.",
    };
  }
  if (pathname === "/projets") {
    return {
      title: "Projets",
      description:
        "Découvrez nos réalisations: produits SaaS, plateformes web et solutions métier conçues sur mesure.",
    };
  }
  if (pathname === "/contact") {
    return {
      title: "Contact",
      description:
        "Décrivez votre besoin technique. Cadrage offert, proposition sous 48h ouvrées, interlocuteur senior dédié.",
    };
  }
  if (pathname === "/a-propos") {
    return {
      title: "À propos",
      description:
        "HEXAIT — studio d'ingénierie fondé par un développeur senior. Rigueur d'exécution, code de qualité industrielle, transparence totale.",
    };
  }
  if (pathname === "/blog") {
    return {
      title: "Blog",
      description:
        "Articles techniques et retours d'expérience sur le développement logiciel, le cloud, la sécurité et l'IA.",
    };
  }

  return {
    title: "HEXAIT",
    description: "Société d'ingénierie informatique spécialisée en développement, cloud et sécurité.",
  };
}

export default function App() {
  const location = useLocation();
  const meta = getPageMeta(location.pathname);

  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100 flex flex-col">
      <Head title={meta.title} description={meta.description} />
      <Navbar />
      <main className="flex-1">
        <Outlet />  
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
