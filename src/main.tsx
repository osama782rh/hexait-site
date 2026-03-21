import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Link, createBrowserRouter, RouterProvider, useRouteError } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./index.css";

// Lazy-loaded pages (code-splitting)
const CHUNK_RELOAD_KEY = "hexait:chunk-reload-once";

function lazyWithRetry<T extends React.ComponentType<unknown>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    try {
      const mod = await factory();
      sessionStorage.removeItem(CHUNK_RELOAD_KEY);
      return mod;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const isChunkError = message.includes("Failed to fetch dynamically imported module");

      if (isChunkError && !sessionStorage.getItem(CHUNK_RELOAD_KEY)) {
        sessionStorage.setItem(CHUNK_RELOAD_KEY, "1");
        window.location.reload();
        return new Promise<never>(() => {});
      }

      throw error;
    }
  });
}

const Services = lazyWithRetry(() => import("./pages/Services"));
const Projects = lazyWithRetry(() => import("./pages/Projects"));
const Contact = lazyWithRetry(() => import("./pages/Contact"));
const About = lazyWithRetry(() => import("./pages/About"));
const Blog = lazyWithRetry(() => import("./pages/Blog"));
const Legal = lazyWithRetry(() => import("./pages/Legal"));
const Confidentialite = lazyWithRetry(() => import("./pages/Confidentialite"));
const ConditionsGenerales = lazyWithRetry(() => import("./pages/ConditionsGenerales"));
const Cookies = lazyWithRetry(() => import("./pages/Cookies"));

function RouteErrorFallback() {
  const error = useRouteError();
  const message = error instanceof Error ? error.message : "Une erreur inattendue est survenue.";

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="card max-w-xl w-full text-center">
        <h1 className="text-2xl md:text-3xl font-extrabold">Erreur de chargement</h1>
        <p className="mt-3 text-slate-300">{message}</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button className="btn-cta" onClick={() => window.location.reload()}>
            Recharger
          </button>
          <Link to="/" className="btn-ghost">
            Retour a l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function LazyPage({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <RouteErrorFallback />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/a-propos", element: <LazyPage><About /></LazyPage> },
      { path: "/services", element: <LazyPage><Services /></LazyPage> },
      { path: "/projets", element: <LazyPage><Projects /></LazyPage> },
      { path: "/contact", element: <LazyPage><Contact /></LazyPage> },

      // Pages légales
      { path: "/mentions-legales", element: <LazyPage><Legal /></LazyPage> },
      { path: "/politique-confidentialite", element: <LazyPage><Confidentialite /></LazyPage> },
      { path: "/cookies", element: <LazyPage><Cookies /></LazyPage> },
      { path: "/conditions-generales", element: <LazyPage><ConditionsGenerales /></LazyPage> },

      // Pages ressources
      { path: "/blog", element: <LazyPage><Blog /></LazyPage> },

      // Sous-routes services
      { path: "/services/developpement", element: <LazyPage><Services /></LazyPage> },
      { path: "/services/cloud", element: <LazyPage><Services /></LazyPage> },
      { path: "/services/securite", element: <LazyPage><Services /></LazyPage> },
      { path: "/services/ia", element: <LazyPage><Services /></LazyPage> },
      { path: "/services/conseil", element: <LazyPage><Services /></LazyPage> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
