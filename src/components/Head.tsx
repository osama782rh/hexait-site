// components/Head.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Head({ title, description }: {
  title: string;
  description: string;
}) {
  const location = useLocation();

  useEffect(() => {
    document.title = `${title} | HEXAIT`;
    
    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + location.pathname);

    // Google Analytics - Vérifie si le script existe déjà
    const existingGtag = document.querySelector('script[src*="googletagmanager"]');
    if (!existingGtag) {
      // Premier script asynchrone
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-EQF45NJRHS';
      document.head.appendChild(script1);

      // Deuxième script pour la configuration
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-EQF45NJRHS');
      `;
      document.head.appendChild(script2);
    }
  }, [title, description, location]);

  return null;
}