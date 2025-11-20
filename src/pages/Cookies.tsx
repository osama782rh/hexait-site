// apps/web/src/pages/Cookies.tsx
import { Link } from "react-router-dom";
import { Cookie, Settings, BarChart3, Shield } from "lucide-react";
import { useState } from "react";
import Section from "../components/Section";

export default function Cookies() {
  const [analyticsAccepted, setAnalyticsAccepted] = useState<boolean | null>(null);

  const handleAcceptAnalytics = () => {
    setAnalyticsAccepted(true);
    // Ici tu intégreras ton système de gestion des cookies
    localStorage.setItem('cookies-analytics', 'accepted');
  };

  const handleRejectAnalytics = () => {
    setAnalyticsAccepted(false);
    // Ici tu intégreras ton système de gestion des cookies
    localStorage.setItem('cookies-analytics', 'rejected');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-navy to-slate-900 border-b border-white/10">
        <div className="container text-center px-6">
          <span className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-slate-200 border border-white/20 mb-6">
            <Cookie size={16} />
            Gestion des cookies
          </span>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Préférences <span className="text-gradient">cookies</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Contrôlez les cookies utilisés sur notre site
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Qu'est-ce qu'un cookie ?</h2>
            <p className="text-slate-300 mb-4">
              Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. 
              Il permet au site de mémoriser vos actions et préférences sur une période de temps.
            </p>
            <p className="text-slate-300">
              Nous utilisons les cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu.
            </p>
          </div>

          {/* Types de cookies */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-6">Types de cookies utilisés</h3>
            
            <div className="space-y-6">
              {/* Cookies essentiels */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="text-green-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Cookies essentiels</h4>
                  <p className="text-slate-300 mb-2">
                    Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.
                  </p>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• Mémorisation de vos préférences de confidentialité</li>
                    <li>• Sécurité du site et prévention de la fraude</li>
                    <li>• Fonctionnalités de base du site</li>
                  </ul>
                </div>
              </div>

              {/* Cookies analytics */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Cookies analytics</h4>
                  <p className="text-slate-300 mb-2">
                    Nous aident à comprendre comment les visiteurs interagissent avec notre site.
                  </p>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• Analyse du trafic et des performances</li>
                    <li>• Mesure de l'efficacité de notre contenu</li>
                    <li>• Amélioration de l'expérience utilisateur</li>
                  </ul>
                  
                  {analyticsAccepted === null && (
                    <div className="mt-4 flex gap-3">
                      <button 
                        onClick={handleAcceptAnalytics}
                        className="btn-cta text-sm px-4 py-2"
                      >
                        Accepter les analytics
                      </button>
                      <button 
                        onClick={handleRejectAnalytics}
                        className="btn-ghost text-sm px-4 py-2"
                      >
                        Refuser
                      </button>
                    </div>
                  )}
                  
                  {analyticsAccepted !== null && (
                    <div className="mt-4 p-3 bg-white/5 rounded-lg">
                      <p className="text-slate-300 text-sm">
                        {analyticsAccepted 
                          ? "✅ Cookies analytics acceptés" 
                          : "❌ Cookies analytics refusés"
                        }
                      </p>
                      <button 
                        onClick={() => setAnalyticsAccepted(null)}
                        className="text-cyan-300 hover:text-cyan-200 text-xs mt-2"
                      >
                        Modifier mon choix
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Gestion des cookies */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-3">
              <Settings className="text-cyan-400" size={20} />
              Gérer vos préférences
            </h3>
            <div className="text-slate-300 space-y-4">
              <p>
                Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. 
                Vous pouvez supprimer tous les cookies déjà stockés sur votre ordinateur et 
                configurer la plupart des navigateurs pour qu'ils les bloquent.
              </p>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Configurer votre navigateur</h4>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• <strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
                  <li>• <strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies</li>
                  <li>• <strong>Safari :</strong> Préférences → Confidentialité → Cookies</li>
                  <li>• <strong>Edge :</strong> Paramètres → Confidentialité et services → Cookies</li>
                </ul>
              </div>
              
              <p className="text-sm text-slate-400">
                Note : La désactivation des cookies peut affecter le fonctionnement de certains sites web.
              </p>
            </div>
          </div>

          {/* Durée des cookies */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Durée de conservation</h3>
            <div className="text-slate-300 space-y-3">
              <p>Les cookies sont conservés pour des durées variables :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cookies de session :</strong> Supprimés à la fermeture du navigateur</li>
                <li><strong>Cookies persistants :</strong> Conservés jusqu'à 13 mois maximum</li>
                <li><strong>Cookies analytics :</strong> 13 mois maximum</li>
              </ul>
              <p className="text-sm text-slate-400 mt-2">
                Conformément aux recommandations de la CNIL.
              </p>
            </div>
          </div>

          {/* Cookies tiers */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Cookies tiers</h3>
            <div className="text-slate-300 space-y-3">
              <p>
                Certains cookies peuvent être placés par des services tiers que nous utilisons, 
                comme Google Analytics pour analyser le trafic de notre site.
              </p>
              <p className="text-sm text-slate-400">
                Nous nous assurons que nos partenaires respectent le RGPD et offrent des mécanismes 
                de consentement appropriés.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="card p-6">
            <h3 className="font-semibold text-lg mb-4">Questions sur les cookies</h3>
            <div className="text-slate-300">
              <p>
                Si vous avez des questions concernant notre politique relative aux cookies, 
                n'hésitez pas à nous contacter :
              </p>
              <a 
                href="mailto:contact@hexait.fr" 
                className="inline-block mt-3 text-cyan-300 hover:text-cyan-200"
              >
                contact@hexait.fr
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/confidentialite" className="btn-ghost">
              Politique de confidentialité
            </Link>
            <Link to="/mentions-legales" className="btn-ghost">
              Mentions légales
            </Link>
            <Link to="/contact" className="btn-ghost">
              Nous contacter
            </Link>
          </div>

          {/* Mise à jour */}
          <div className="mt-8 text-center text-slate-400 text-sm">
            <p>Dernière mise à jour : {new Date().getFullYear()}</p>
          </div>
        </div>
      </Section>
    </>
  );
}