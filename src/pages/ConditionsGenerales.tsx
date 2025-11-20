// apps/web/src/pages/ConditionsGenerales.tsx
import { Link } from "react-router-dom";
import { FileText, Clock, Shield, Euro, AlertTriangle, Mail } from "lucide-react";
import Section from "../components/Section";

export default function ConditionsGenerales() {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-navy to-slate-900 border-b border-white/10">
        <div className="container text-center px-6">
          <span className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-slate-200 border border-white/20 mb-6">
            <FileText size={16} />
            Conditions générales
          </span>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Conditions <span className="text-gradient">générales</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Cadre contractuel de nos prestations de services informatiques
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Avertissement important */}
          <div className="card p-6 mb-8 bg-amber-500/10 border border-amber-500/20">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-amber-400 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-amber-300">Important</h3>
                <p className="text-slate-300">
                  Ces conditions générales constituent le cadre contractuel de toutes nos prestations. 
                  Elles sont complétées par les conditions particulières de chaque devis.
                </p>
              </div>
            </div>
          </div>

          {/* Article 1 - Objet */}
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Article 1 - Objet</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Les présentes conditions générales ont pour objet de définir les conditions dans lesquelles 
                <strong> HEXAIT SASU</strong> (ci-après "le Prestataire") fournit ses services de conception, 
                développement, intégration, maintenance et exploitation de solutions informatiques à ses clients 
                (ci-après "le Client").
              </p>
              <p>
                Toute commande de prestation implique l'acceptation sans réserve des présentes conditions générales.
              </p>
            </div>
          </div>

          {/* Article 2 - Devis et commande */}
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Article 2 - Devis et commande</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                <strong>2.1.</strong> Toute prestation fait l'objet d'un devis détaillé précisant :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>La description détaillée des prestations</li>
                <li>Les délais de réalisation</li>
                <li>Le prix et les modalités de paiement</li>
                <li>Les livrables attendus</li>
                <li>Les hypothèses et contraintes techniques</li>
              </ul>
              
              <p>
                <strong>2.2.</strong> Le devis est valable 30 jours à compter de sa date d'émission.
              </p>
              
              <p>
                <strong>2.3.</strong> La commande est considérée comme ferme et définitive à réception du devis signé 
                et du premier acompte selon les conditions financières stipulées.
              </p>
            </div>
          </div>

          {/* Article 3 - Prix et modalités de paiement */}
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Euro className="text-cyan-400" size={24} />
              Article 3 - Prix et modalités de paiement
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                <strong>3.1.</strong> Les prix sont indiqués en euros hors taxes. La TVA est applicable au taux en vigueur.
              </p>
              
              <p>
                <strong>3.2.</strong> <strong>Modalités de paiement standards :</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>40%</strong> à la commande</li>
                <li><strong>40%</strong> à la livraison de la version de démonstration</li>
                <li><strong>20%</strong> à la mise en production</li>
              </ul>
              
              <p>
                <strong>3.3.</strong> Tout retard de paiement entraîne de plein droit :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>L'exigibilité immédiate des sommes restant dues</li>
                <li>L'application d'intérêts de retard au taux légal</li>
                <li>Une indemnité forfaitaire de 40€ pour frais de recouvrement</li>
                <li>La suspension immédiate des prestations en cours</li>
              </ul>
              
              <p>
                <strong>3.4.</strong> En cas de projet en régie, la facturation est établie mensuellement sur la base 
                des temps validés par le Client.
              </p>
            </div>
          </div>

          {/* Article 4 - Délais de réalisation */}
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Clock className="text-cyan-400" size={24} />
              Article 4 - Délais de réalisation
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                <strong>4.1.</strong> Les délais de réalisation sont indiqués à titre indicatif et peuvent être 
                affectés par :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Les retards dans la fourniture des éléments par le Client</li>
                <li>Les modifications fonctionnelles demandées en cours de projet</li>
                <li>Les contraintes techniques imprévues</li>
                <li>Les cas de force majeure</li>
              </ul>
              
              <p>
                <strong>4.2.</strong> Le Prestataire s'engage à informer le Client de tout retard prévisible 
                et à proposer un calendrier révisé.
              </p>
            </div>
          </div>

          {/* Article 5 - Propriété intellectuelle */}
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Article 5 - Propriété intellectuelle</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                <strong>5.1.</strong> Le Prestataire conserve la propriété des outils, méthodes, bibliothèques 
                et frameworks utilisés pour réaliser la prestation.
              </p>
              
              <p>
                <strong>5.2.</strong> Le Client devient propriétaire du code source spécifiquement développé 
                pour son projet après règlement intégral de la prestation.
              </p>
              
              <p>
                <strong>5.3.</strong> Les droits d'usage des logiciels tiers (licences) restent soumis aux 
                conditions de leurs éditeurs respectifs.
              </p>
              
              <p>
                <strong>5.4.</strong> Le Prestataire se réserve le droit de mentionner le projet dans sa 
                communication commerciale, sauf clause de confidentialité expresse.
              </p>
            </div>
          </div>

          {/* Article 6 - Obligations du Client */}
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Article 6 - Obligations du Client</h2>
            <div className="text-slate-300 space-y-4">
              <p>Le Client s'engage à :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fournir en temps utile tous les éléments nécessaires à la réalisation de la prestation</li>
                <li>Désigner un interlocuteur unique habilité à prendre des décisions</li>
                <li>Valider les livrables dans un délai raisonnable (7 jours ouvrés maximum)</li>
                <li>Respecter les échéances de paiement</li>
                <li>Collaborer de manière constructive avec le Prestataire</li>
              </ul>
            </div>
          </div>

          {/* Article 7 - Garanties et responsabilités */}
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="text-cyan-400" size={24} />
              Article 7 - Garanties et responsabilités
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                <strong>7.1.</strong> Le Prestataire garantit la conformité de ses prestations aux spécifications 
                techniques du devis.
              </p>
              
              <p>
                <strong>7.2.</strong> La garantie couvre les défauts de conception et de réalisation pour une 
                durée de 3 mois après la mise en production.
              </p>
              
              <p>
                <strong>7.3.</strong> Sont exclus de la garantie :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Les modifications apportées par le Client ou un tiers</li>
                <li>L'utilisation non conforme aux spécifications</li>
                <li>Les problèmes liés à l'infrastructure ou aux services tiers</li>
                <li>L'usure normale du logiciel</li>
              </ul>
              
              <p>
                <strong>7.4.</strong> La responsabilité du Prestataire est limitée au montant HT de la prestation 
                ayant causé le dommage.
              </p>
            </div>
          </div>

          {/* Article 8 - Confidentialité */}
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Article 8 - Confidentialité</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Chaque partie s'engage à conserver confidentielle toute information relative à l'autre partie 
                dont elle aurait eu connaissance dans le cadre de l'exécution de la prestation.
              </p>
              <p>
                Cette obligation de confidentialité survit à la fin de la relation contractuelle pour une 
                durée de 3 ans.
              </p>
            </div>
          </div>

          {/* Article 9 - Résiliation */}
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Article 9 - Résiliation</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                <strong>9.1.</strong> En cas de manquement grave d'une partie à ses obligations, l'autre partie 
                peut résilier le contrat après mise en demeure restée sans effet pendant 15 jours.
              </p>
              
              <p>
                <strong>9.2.</strong> En cas de résiliation à l'initiative du Client, celui-ci devra régler :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Les prestations déjà réalisées</li>
                <li>Les frais engagés pour la partie non réalisée (dans la limite de 30% du montant restant)</li>
              </ul>
            </div>
          </div>

          {/* Article 10 - Litiges */}
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Article 10 - Litiges</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                <strong>10.1.</strong> En cas de litige, les parties s'engagent à rechercher une solution amiable 
                avant toute action judiciaire.
              </p>
              
              <p>
                <strong>10.2.</strong> À défaut de solution amiable dans un délai d'1 mois, les tribunaux 
                français seront seuls compétents.
              </p>
              
              <p>
                <strong>10.3.</strong> Le droit applicable est le droit français.
              </p>
            </div>
          </div>

          {/* Acceptation */}
          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-6">Acceptation des conditions</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                L'acceptation du devis par le Client vaut acceptation sans réserve des présentes conditions générales.
              </p>
              
              <div className="bg-white/5 rounded-lg p-4 mt-4">
                <h3 className="font-semibold mb-2">Pour toute question :</h3>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Mail size={16} />
                  <a href="mailto:contact@hexait.fr" className="text-cyan-300 hover:text-cyan-200">
                    contact@hexait.fr
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/mentions-legales" className="btn-ghost">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="btn-ghost">
              Politique de confidentialité
            </Link>
            <Link to="/contact" className="btn-ghost">
              Nous contacter
            </Link>
          </div>

          {/* Mise à jour */}
          <div className="mt-8 text-center text-slate-400 text-sm">
            <p>Version en vigueur au : {new Date().toLocaleDateString('fr-FR')}</p>
            <p className="mt-2 text-xs">
              © {currentYear} HEXAIT SASU - Tous droits réservés
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}