import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./index.css";

// Lazy-loaded pages (code-splitting)
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Legal = lazy(() => import("./pages/Legal"));
const Confidentialite = lazy(() => import("./pages/Confidentialite"));
const ConditionsGenerales = lazy(() => import("./pages/ConditionsGenerales"));
const Cookies = lazy(() => import("./pages/Cookies"));

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
