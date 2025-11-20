// apps/web/src/pages/Legal.tsx
import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin, Globe, FileText } from "lucide-react";
import Section from "../components/Section";

export default function Legal() {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-navy to-slate-900 border-b border-white/10">
        <div className="container text-center px-6">
          <span className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-slate-200 border border-white/20 mb-6">
            <Shield size={16} />
            Informations légales
          </span>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Mentions <span className="text-gradient">légales</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Conformité RGPD • Transparence • Protection des données
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Informations de l'éditeur */}
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FileText className="text-cyan-400" size={24} />
              Éditeur du site
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-4">HEXAIT SASU</h3>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>20 Rue du Commandant Maurice Lissac<br />91250 Tigery, France</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-cyan-400 flex-shrink-0" />
                    <a href="mailto:contact@hexait.fr" className="hover:text-cyan-200 transition-colors">
                      contact@hexait.fr
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-cyan-400 flex-shrink-0" />
                    <a href="tel:+33765668282" className="hover:text-cyan-200 transition-colors">
                      +33 7 65 66 82 82
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Informations juridiques</h3>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p><strong>SIRET :</strong> 992 031 351 000 16</p>
                  <p><strong>RCS :</strong> Evry 992 031 351</p>
                  <p><strong>Capital social :</strong> 5 000 €</p>
                  <p><strong>Forme juridique :</strong> SASU</p>
                  <p><strong>Date d'immatriculation :</strong> 10/10/2025</p>
                  <p><strong>Code NAF/APE :</strong> 6201Z</p>
                  <p><strong>N° TVA Intracom :</strong> FR11992031351</p>
                </div>
              </div>
            </div>
          </div>

          {/* Directeur de la publication */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Directeur de la publication</h3>
            <p className="text-slate-300">
              <strong>Osama RAHIM</strong>, Président de HEXAIT SASU
            </p>
          </div>

            {/* Hébergement */}
            <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-3">
                <Globe className="text-cyan-400" size={20} />
                Hébergement
            </h3>
            <div className="text-slate-300 space-y-2">
                <p><strong>Hébergeur :</strong> LWS (Ligne Web Services)</p>
                <p><strong>Adresse :</strong> 10 Rue de Penthièvre, 75008 Paris</p>
                <p><strong>Téléphone :</strong> +33 1 77 62 30 03</p>
                <p><strong>Site web :</strong> <a href="https://www.lws.fr" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">www.lws.fr</a></p>
                <p><strong>Email :</strong> <a href="mailto:support@lws.fr" className="text-cyan-300 hover:text-cyan-200">support@lws.fr</a></p>
            </div>
            
            {/* Informations supplémentaires sur LWS */}
            <div className="mt-4 p-4 bg-white/5 rounded-lg">
                <h4 className="font-semibold mb-2 text-sm">À propos de LWS :</h4>
                <p className="text-slate-400 text-sm">
                LWS est une société créée en 1999 et spécialisée dans l'hébergement de sites internet ainsi que dans l'enregistrement de noms de domaine.
                </p>
            </div>
            </div>

          {/* Propriété intellectuelle */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Propriété intellectuelle</h3>
            <div className="text-slate-300 space-y-4">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
                documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
              <p>
                Les marques et logos contenus dans ce site sont des marques déposées. Toute reproduction, 
                utilisation ou modification de ces marques et logos sans l'autorisation préalable de HEXAIT 
                est strictement interdite.
              </p>
            </div>
          </div>

          {/* Protection des données personnelles */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-3">
              <Shield className="text-cyan-400" size={20} />
              Protection des données personnelles
            </h3>
            <div className="text-slate-300 space-y-4">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique 
                et Libertés, vous disposez d'un droit d'accès, de rectification, de modification et de suppression 
                des données qui vous concernent.
              </p>
              <p>
                Vous pouvez exercer ce droit en nous contactant à l'adresse : 
                <a href="mailto:contact@hexait.fr" className="text-cyan-300 hover:text-cyan-200 ml-1">
                  contact@hexait.fr
                </a>
              </p>
              <p>
                Les informations recueillies font l'objet d'un traitement informatique destiné à répondre à vos 
                demandes d'information. Le destinataire des données est HEXAIT SASU.
              </p>
              <p>
                Conformément à la loi "informatique et libertés" du 6 janvier 1978 modifiée, vous bénéficiez 
                d'un droit d'accès et de rectification aux informations qui vous concernent.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Politique relative aux cookies</h3>
            <div className="text-slate-300 space-y-4">
              <p>
                Un cookie est un fichier texte déposé sur votre ordinateur lors de la visite d'un site ou de 
                la consultation d'une publicité. Il a pour but de collecter des informations relatives à votre 
                navigation et de vous adresser des services adaptés à votre terminal.
              </p>
              <p>
                Ce site utilise des cookies pour :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Établir des statistiques de fréquentation</li>
                <li>Adapter la présentation du site aux préférences d'affichage de votre terminal</li>
                <li>Permettre l'accès à des espaces réservés et personnels</li>
              </ul>
              <p>
                Vous pouvez vous opposer à l'enregistrement de cookies en configurant votre navigateur. 
                Cette opposition peut toutefois empêcher le bon fonctionnement du site.
              </p>
            </div>
          </div>

          {/* Responsabilité */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Limitation de responsabilité</h3>
            <div className="text-slate-300 space-y-4">
              <p>
                HEXAIT SASU met tout en œuvre pour offrir aux utilisateurs des informations et/ou outils 
                disponibles et vérifiés, mais ne saurait être tenue pour responsable des erreurs, d'une 
                absence de disponibilité des informations et/ou de la présence de virus sur son site.
              </p>
              <p>
                Les informations fournies le sont à titre indicatif et ne sauraient dispenser l'utilisateur 
                d'une analyse complémentaire et personnalisée.
              </p>
              <p>
                HEXAIT SASU ne pourra être tenue responsable de l'interprétation des informations et des 
                conseils contenus sur le présent site, ni des conséquences de leur utilisation.
              </p>
            </div>
          </div>

          {/* Liens hypertextes */}
          <div className="card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Liens hypertextes</h3>
            <div className="text-slate-300 space-y-4">
              <p>
                La création de liens hypertextes vers le site <strong>hexait.fr</strong> est soumise à 
                l'autorisation préalable du directeur de la publication.
              </p>
              <p>
                HEXAIT SASU décline toute responsabilité concernant le contenu des sites vers lesquels 
                des liens hypertextes pourraient renvoyer depuis son site.
              </p>
            </div>
          </div>

          {/* Droit applicable */}
          <div className="card p-6">
            <h3 className="font-semibold text-lg mb-4">Droit applicable</h3>
            <div className="text-slate-300 space-y-4">
              <p>
                L'ensemble du présent site relève de la législation française en vigueur, tant en ce qui 
                concerne les règles de fond que les règles de forme.
              </p>
              <p>
                En cas de litige, et après l'échec de toute tentative de recherche d'une solution amiable, 
                les tribunaux français seront seuls compétents pour connaître de ce litige.
              </p>
            </div>
          </div>

          {/* Mise à jour */}
          <div className="mt-8 text-center text-slate-400 text-sm">
            <p>Dernière mise à jour : {currentYear}</p>
            <p className="mt-2">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter à 
              <a href="mailto:contact@hexait.fr" className="text-cyan-300 hover:text-cyan-200 ml-1">
                contact@hexait.fr
              </a>
            </p>
          </div>

          {/* Navigation vers autres pages légales */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/politique-confidentialite" className="btn-ghost">
              Politique de confidentialité
            </Link>
            <Link to="/conditions-generales" className="btn-ghost">
              Conditions générales
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