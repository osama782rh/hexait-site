// apps/web/src/pages/Confidentialite.tsx
import { Link } from "react-router-dom";
import { Shield, User, Database, Clock, Eye, Edit, Trash2 } from "lucide-react";
import Section from "../components/Section";

export default function Confidentialite() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-navy to-slate-900 border-b border-white/10">
        <div className="container text-center px-6">
          <span className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-slate-200 border border-white/20 mb-6">
            <Shield size={16} />
            RGPD & Protection des données
          </span>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Politique de <span className="text-gradient">confidentialité</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Transparence, sécurité et respect de vos données personnelles
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Engagement de confidentialité</h2>
            <p className="text-slate-300 mb-4">
              HEXAIT SASU s'engage à protéger et respecter votre vie privée. Cette politique explique 
              comment nous collectons, utilisons et protégeons vos données personnelles conformément 
              au Règlement Général sur la Protection des Données (RGPD).
            </p>
            <p className="text-slate-300">
              En utilisant notre site et nos services, vous acceptez les pratiques décrites dans cette politique.
            </p>
          </div>

          {/* Responsable du traitement */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-3">
              <User className="text-cyan-400" size={20} />
              Responsable du traitement
            </h3>
            <div className="text-slate-300 space-y-2">
              <p><strong>HEXAIT SASU</strong></p>
              <p>20 Rue du Commandant Maurice Lissac, 91250 Tigery, France</p>
              <p>Email : <a href="mailto:contact@hexait.fr" className="text-cyan-300 hover:text-cyan-200">contact@hexait.fr</a></p>
              <p>Téléphone : <a href="tel:+33765668282" className="text-cyan-300 hover:text-cyan-200">+33 7 65 66 82 82</a></p>
              <p>SIRET : 992 031 351 00010</p>
            </div>
          </div>

          {/* Données collectées */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-3">
              <Database className="text-cyan-400" size={20} />
              Données personnelles collectées
            </h3>
            <div className="text-slate-300 space-y-4">
              <p><strong>Via notre formulaire de contact :</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (optionnel)</li>
                <li>Nom de l'entreprise (optionnel)</li>
                <li>Site web (optionnel)</li>
                <li>Détails de votre projet</li>
              </ul>
              
              <p><strong>Données techniques automatiques :</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Adresse IP</li>
                <li>Type de navigateur et appareil</li>
                <li>Pages visitées et durée de visite</li>
                <li>Données de navigation via cookies</li>
              </ul>
            </div>
          </div>

          {/* Finalités */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Finalités du traitement</h3>
            <div className="text-slate-300 space-y-3">
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Répondre à vos demandes de contact et devis</li>
                <li>Vous fournir nos services de développement et conseil</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Respecter nos obligations légales et réglementaires</li>
                <li>Vous envoyer des communications marketing (uniquement avec votre consentement)</li>
              </ul>
            </div>
          </div>

          {/* Base légale */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Base légale du traitement</h3>
            <div className="text-slate-300 space-y-3">
              <p><strong>Exécution d'un contrat :</strong> Pour répondre à votre demande de devis ou prestation</p>
              <p><strong>Consentement :</strong> Pour les communications marketing et certains cookies</p>
              <p><strong>Intérêt légitime :</strong> Pour améliorer nos services et prévenir la fraude</p>
              <p><strong>Obligation légale :</strong> Pour respecter nos obligations comptables et fiscales</p>
            </div>
          </div>

          {/* Durée de conservation */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-3">
              <Clock className="text-cyan-400" size={20} />
              Durée de conservation
            </h3>
            <div className="text-slate-300 space-y-3">
              <p><strong>Données de contact :</strong> 3 ans après le dernier contact</p>
              <p><strong>Données clients :</strong> 5 ans après la fin de la relation contractuelle</p>
              <p><strong>Données prospects :</strong> 3 ans après la collecte</p>
              <p><strong>Cookies :</strong> 13 mois maximum</p>
              <p><strong>Données comptables :</strong> 10 ans (obligation légale)</p>
            </div>
          </div>

          {/* Destinataires */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Destinataires des données</h3>
            <div className="text-slate-300 space-y-3">
              <p>Vos données peuvent être partagées avec :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Notre équipe interne (uniquement pour traiter votre demande)</li>
                <li>Nos sous-traitants (hébergeurs, outils analytics)</li>
                <li>Autorités légales (sur demande légale)</li>
              </ul>
              <p className="text-sm text-slate-400 mt-2">
                Tous nos sous-traitants sont situés dans l'UE et respectent le RGPD.
              </p>
            </div>
          </div>

          {/* Vos droits */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Vos droits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Eye className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Droit d'accès</h4>
                  <p className="text-slate-300 text-sm">Obtenir une copie de vos données</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Edit className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Droit de rectification</h4>
                  <p className="text-slate-300 text-sm">Corriger des données inexactes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Trash2 className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Droit à l'effacement</h4>
                  <p className="text-slate-300 text-sm">Supprimer vos données ("droit à l'oubli")</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Database className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Droit à la portabilité</h4>
                  <p className="text-slate-300 text-sm">Récupérer vos données dans un format structuré</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exercer vos droits */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Exercer vos droits</h3>
            <div className="text-slate-300 space-y-4">
              <p>
                Pour exercer vos droits ou pour toute question concernant la protection de vos données, 
                contactez notre délégué à la protection des données :
              </p>
              
              <div className="bg-white/5 rounded-lg p-4">
                <p className="font-semibold">Osama RAHIM</p>
                <p className="text-sm text-slate-400">Délégué à la Protection des Données</p>
                <a href="mailto:contact@hexait.fr" className="text-cyan-300 hover:text-cyan-200 text-sm">
                  contact@hexait.fr
                </a>
              </div>
              
              <p className="text-sm text-slate-400">
                Nous nous engageons à répondre dans un délai d'un mois. Si vous n'êtes pas satisfait de notre réponse, 
                vous pouvez saisir la <a href="https://www.cnil.fr" className="text-cyan-300 hover:text-cyan-200">CNIL</a>.
              </p>
            </div>
          </div>

          {/* Sécurité */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Mesures de sécurité</h3>
            <div className="text-slate-300 space-y-3">
              <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Chiffrement des données sensibles</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegardes régulières et sécurisées</li>
                <li>Formation de notre personnel à la protection des données</li>
                <li>Revue régulière de nos pratiques de sécurité</li>
              </ul>
            </div>
          </div>

          {/* Mises à jour */}
          <div className="card p-6">
            <h3 className="font-semibold text-lg mb-4">Mises à jour de cette politique</h3>
            <div className="text-slate-300">
              <p>
                Cette politique de confidentialité peut être mise à jour pour refléter les changements 
                dans nos pratiques ou pour des raisons légales. La version la plus récente sera toujours 
                disponible sur cette page.
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Dernière mise à jour : {new Date().getFullYear()}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/cookies" className="btn-ghost">
              Gestion des cookies
            </Link>
            <Link to="/mentions-legales" className="btn-ghost">
              Mentions légales
            </Link>
            <Link to="/contact" className="btn-ghost">
              Nous contacter
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}