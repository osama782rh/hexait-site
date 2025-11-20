// apps/web/src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// IMPORTE LES NOUVELLES PAGES LÉGALES
import Legal from "./pages/Legal";
import Confidentialite from "./pages/Confidentialite";
import ConditionsGenerales from "./pages/ConditionsGenerales";
import Cookies from "./pages/Cookies";


// IMPORTE LES NOUVELLES PAGES RESSOURCES
import Blog from "./pages/Blog";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/a-propos", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/projets", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
      
      // PAGES LÉGALES
      { path: "/mentions-legales", element: <Legal /> },
      { path: "/politique-confidentialite", element: <Confidentialite /> },
      { path: "/cookies", element: <Cookies /> },
      { path: "/conditions-generales", element: <ConditionsGenerales /> },

      
      // PAGES RESSOURCES - CORRIGÉ : utilise les bonnes pages
      { path: "/blog", element: <Blog /> },
      
      // Routes pour les sous-pages (redirections)
      { path: "/services/developpement", element: <Services /> },
      { path: "/services/cloud", element: <Services /> },
      { path: "/services/securite", element: <Services /> },
      { path: "/services/ia", element: <Services /> },
      { path: "/services/conseil", element: <Services /> },
      
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);