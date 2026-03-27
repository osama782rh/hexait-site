'use client';
// apps/web/src/pages/Cookies.tsx
import Link from "next/link";
import { Cookie, Settings, BarChart3, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import Section from "@/components/Section";

export default function Cookies() {
  const [analyticsAccepted, setAnalyticsAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('cookies-analytics');
    if (stored === 'accepted') setAnalyticsAccepted(true);
    else if (stored === 'rejected') setAnalyticsAccepted(false);
  }, []);

  const handleAcceptAnalytics = () => {
    setAnalyticsAccepted(true);
    localStorage.setItem('cookies-analytics', 'accepted');
    window.location.reload();
  };

  const handleRejectAnalytics = () => {
    setAnalyticsAccepted(false);
    localStorage.setItem('cookies-analytics', 'rejected');
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[40vh] flex items-center justify-center border-b border-[var(--border)]"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(6, 182, 212, 0.06), transparent), var(--bg-primary)' }}
      >
        <div className="container text-center px-6">
          <span className="hero-badge mb-6">
            <Cookie size={16} />
            Gestion des cookies
          </span>

          <h1 className="hero-title mb-6">
            Préférences <span className="text-gradient">cookies</span>
          </h1>
          
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Contrôlez les cookies utilisés sur notre site
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Qu'est-ce qu'un cookie ?</h2>
            <p className="text-[var(--text-secondary)] mb-4">
              Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. 
              Il permet au site de mémoriser vos actions et préférences sur une période de temps.
            </p>
            <p className="text-[var(--text-secondary)]">
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
                  <p className="text-[var(--text-secondary)] mb-2">
                    Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.
                  </p>
                  <ul className="text-sm text-[var(--text-tertiary)] space-y-1">
                    <li>• Mémorisation de vos préférences de confidentialité</li>
                    <li>• Sécurité du site et prévention de la fraude</li>
                    <li>• Fonctionnalités de base du site</li>
                  </ul>
                </div>
              </div>

              {/* Cookies analytics */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="text-[var(--accent)]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Cookies analytics</h4>
                  <p className="text-[var(--text-secondary)] mb-2">
                    Nous aident à comprendre comment les visiteurs interagissent avec notre site.
                  </p>
                  <ul className="text-sm text-[var(--text-tertiary)] space-y-1">
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
                      <p className="text-[var(--text-secondary)] text-sm">
                        {analyticsAccepted 
                          ? "✅ Cookies analytics acceptés" 
                          : "❌ Cookies analytics refusés"
                        }
                      </p>
                      <button 
                        onClick={() => setAnalyticsAccepted(null)}
                        className="text-[var(--accent-light)] hover:text-[var(--accent-light)] text-xs mt-2"
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
              <Settings className="text-[var(--accent)]" size={20} />
              Gérer vos préférences
            </h3>
            <div className="text-[var(--text-secondary)] space-y-4">
              <p>
                Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. 
                Vous pouvez supprimer tous les cookies déjà stockés sur votre ordinateur et 
                configurer la plupart des navigateurs pour qu'ils les bloquent.
              </p>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Configurer votre navigateur</h4>
                <ul className="text-sm text-[var(--text-tertiary)] space-y-1">
                  <li>• <strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
                  <li>• <strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies</li>
                  <li>• <strong>Safari :</strong> Préférences → Confidentialité → Cookies</li>
                  <li>• <strong>Edge :</strong> Paramètres → Confidentialité et services → Cookies</li>
                </ul>
              </div>
              
              <p className="text-sm text-[var(--text-tertiary)]">
                Note : La désactivation des cookies peut affecter le fonctionnement de certains sites web.
              </p>
            </div>
          </div>

          {/* Durée des cookies */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Durée de conservation</h3>
            <div className="text-[var(--text-secondary)] space-y-3">
              <p>Les cookies sont conservés pour des durées variables :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cookies de session :</strong> Supprimés à la fermeture du navigateur</li>
                <li><strong>Cookies persistants :</strong> Conservés jusqu'à 13 mois maximum</li>
                <li><strong>Cookies analytics :</strong> 13 mois maximum</li>
              </ul>
              <p className="text-sm text-[var(--text-tertiary)] mt-2">
                Conformément aux recommandations de la CNIL.
              </p>
            </div>
          </div>

          {/* Cookies tiers */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Cookies tiers</h3>
            <div className="text-[var(--text-secondary)] space-y-3">
              <p>
                Certains cookies peuvent être placés par des services tiers que nous utilisons, 
                comme Google Analytics pour analyser le trafic de notre site.
              </p>
              <p className="text-sm text-[var(--text-tertiary)]">
                Nous nous assurons que nos partenaires respectent le RGPD et offrent des mécanismes 
                de consentement appropriés.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="card p-6">
            <h3 className="font-semibold text-lg mb-4">Questions sur les cookies</h3>
            <div className="text-[var(--text-secondary)]">
              <p>
                Si vous avez des questions concernant notre politique relative aux cookies, 
                n'hésitez pas à nous contacter :
              </p>
              <a 
                href="mailto:contact@hexait.fr" 
                className="inline-block mt-3 text-[var(--accent-light)] hover:text-[var(--accent-light)]"
              >
                contact@hexait.fr
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/confidentialite" className="btn-ghost">
              Politique de confidentialité
            </Link>
            <Link href="/mentions-legales" className="btn-ghost">
              Mentions légales
            </Link>
            <Link href="/contact" className="btn-ghost">
              Nous contacter
            </Link>
          </div>

          {/* Mise à jour */}
          <div className="mt-8 text-center text-[var(--text-tertiary)] text-sm">
            <p>Dernière mise à jour : {new Date().getFullYear()}</p>
          </div>
        </div>
      </Section>
    </>
  );
}