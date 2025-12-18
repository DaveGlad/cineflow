import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description: "Conditions générales de vente des services CineFlow",
};

export default function CGVPage() {
  return (
    <div className="pt-32 pb-20">
      <Container size="small">
        <h1 className="text-4xl font-bold mb-8">Conditions Générales de Vente</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <p className="text-text-secondary text-lg">
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre {SITE_CONFIG.company.name} et ses clients pour la fourniture des services CineFlow Suite.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">1. Objet</h2>
            <p className="text-text-secondary">
              Les présentes CGV ont pour objet de définir les conditions de vente des abonnements aux services CineFlow Suite (RoughCut Bot et LocalMind). Toute souscription implique l&apos;acceptation sans réserve des présentes CGV.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">2. Services proposés</h2>
            <p className="text-text-secondary mb-4">
              {SITE_CONFIG.company.name} propose les services suivants :
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li><strong className="text-text-primary">CineFlow Suite Starter</strong> : accès à RoughCut Bot avec 10h de traitement/mois</li>
              <li><strong className="text-text-primary">CineFlow Suite Pro</strong> : accès à RoughCut Bot et LocalMind avec 50h de traitement/mois</li>
              <li><strong className="text-text-primary">CineFlow Suite Enterprise</strong> : accès illimité avec support dédié (sur devis)</li>
            </ul>
            <p className="text-text-secondary mt-4">
              Les caractéristiques détaillées de chaque offre sont disponibles sur la page <a href="/produits/cineflow-suite" className="text-primary hover:underline">Produits</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">3. Prix</h2>
            <p className="text-text-secondary mb-4">
              Les prix des abonnements sont indiqués en euros (€) et s&apos;entendent hors taxes (HT). La TVA applicable sera ajoutée au moment du paiement selon le taux en vigueur.
            </p>
            <p className="text-text-secondary mb-4">
              Les tarifs en vigueur sont :
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li><strong className="text-text-primary">Starter</strong> : 29€ HT/mois (ou 278€ HT/an, soit -20%)</li>
              <li><strong className="text-text-primary">Pro</strong> : 79€ HT/mois (ou 758€ HT/an, soit -20%)</li>
              <li><strong className="text-text-primary">Enterprise</strong> : sur devis</li>
            </ul>
            <p className="text-text-secondary mt-4">
              {SITE_CONFIG.company.name} se réserve le droit de modifier ses tarifs à tout moment. Les nouveaux tarifs s&apos;appliqueront aux nouvelles souscriptions et aux renouvellements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">4. Commande et paiement</h2>
            <h3 className="text-lg font-semibold mb-2 text-text-primary">4.1 Processus de commande</h3>
            <p className="text-text-secondary mb-4">
              Pour souscrire à un abonnement, le client doit :
            </p>
            <ol className="list-decimal list-inside text-text-secondary space-y-2 mb-4">
              <li>Créer un compte sur le Site</li>
              <li>Sélectionner l&apos;offre souhaitée</li>
              <li>Renseigner ses informations de facturation</li>
              <li>Procéder au paiement</li>
              <li>Accepter les présentes CGV</li>
            </ol>
            
            <h3 className="text-lg font-semibold mb-2 text-text-primary">4.2 Moyens de paiement</h3>
            <p className="text-text-secondary mb-4">
              Les paiements sont effectués par carte bancaire (Visa, Mastercard, American Express) via notre prestataire de paiement sécurisé Stripe.
            </p>
            
            <h3 className="text-lg font-semibold mb-2 text-text-primary">4.3 Facturation</h3>
            <p className="text-text-secondary">
              Une facture est émise à chaque paiement et envoyée par email. Les factures sont également disponibles dans l&apos;espace client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">5. Abonnement et renouvellement</h2>
            <p className="text-text-secondary mb-4">
              Les abonnements sont souscrits pour une durée d&apos;un mois ou d&apos;un an selon l&apos;option choisie.
            </p>
            <p className="text-text-secondary mb-4">
              <strong className="text-text-primary">Renouvellement automatique :</strong> sauf résiliation, l&apos;abonnement est automatiquement renouvelé à son échéance pour une durée identique. Le client sera débité du montant de l&apos;abonnement au début de chaque nouvelle période.
            </p>
            <p className="text-text-secondary">
              Le client peut désactiver le renouvellement automatique à tout moment depuis son espace client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">6. Essai gratuit</h2>
            <p className="text-text-secondary mb-4">
              {SITE_CONFIG.company.name} propose un essai gratuit de 14 jours pour les nouveaux utilisateurs. Pendant cette période, le client bénéficie d&apos;un accès complet aux fonctionnalités du plan Pro.
            </p>
            <p className="text-text-secondary">
              À l&apos;issue de la période d&apos;essai, le client peut choisir de souscrire à un abonnement payant ou de ne pas poursuivre. Aucun paiement n&apos;est requis pour l&apos;essai gratuit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">7. Droit de rétractation</h2>
            <p className="text-text-secondary mb-4">
              Conformément à l&apos;article L.221-18 du Code de la consommation, le client consommateur dispose d&apos;un délai de 14 jours à compter de la souscription pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
            </p>
            <p className="text-text-secondary mb-4">
              Pour exercer ce droit, le client doit notifier sa décision par email à {SITE_CONFIG.email} ou via le formulaire de contact.
            </p>
            <p className="text-text-secondary">
              <strong className="text-text-primary">Exception :</strong> conformément à l&apos;article L.221-28 du Code de la consommation, le droit de rétractation ne peut être exercé si l&apos;exécution du service a commencé, avec l&apos;accord du client, avant la fin du délai de rétractation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">8. Résiliation</h2>
            <h3 className="text-lg font-semibold mb-2 text-text-primary">8.1 Résiliation par le client</h3>
            <p className="text-text-secondary mb-4">
              Le client peut résilier son abonnement à tout moment depuis son espace client. La résiliation prendra effet à la fin de la période d&apos;abonnement en cours. Aucun remboursement prorata temporis ne sera effectué.
            </p>
            
            <h3 className="text-lg font-semibold mb-2 text-text-primary">8.2 Résiliation par {SITE_CONFIG.company.name}</h3>
            <p className="text-text-secondary">
              {SITE_CONFIG.company.name} peut résilier l&apos;abonnement en cas de violation des CGU ou CGV, de défaut de paiement, ou d&apos;utilisation frauduleuse des Services. Dans ce cas, aucun remboursement ne sera effectué.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">9. Garanties</h2>
            <p className="text-text-secondary mb-4">
              {SITE_CONFIG.company.name} garantit que les Services sont conformes à leur description et fonctionnent selon les spécifications indiquées.
            </p>
            <p className="text-text-secondary">
              En cas de dysfonctionnement, le client peut contacter le support technique. {SITE_CONFIG.company.name} s&apos;engage à corriger tout défaut dans un délai raisonnable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">10. Limitation de responsabilité</h2>
            <p className="text-text-secondary mb-4">
              La responsabilité de {SITE_CONFIG.company.name} est limitée au montant des sommes effectivement versées par le client au cours des 12 derniers mois.
            </p>
            <p className="text-text-secondary">
              {SITE_CONFIG.company.name} ne saurait être tenu responsable des dommages indirects, pertes de données, manque à gagner ou préjudice commercial résultant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser les Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">11. Service client</h2>
            <p className="text-text-secondary">
              Pour toute question ou réclamation, le client peut contacter le service client :
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 mt-4">
              <li><strong className="text-text-primary">Email :</strong> {SITE_CONFIG.email}</li>
              <li><strong className="text-text-primary">Formulaire de contact :</strong> <a href="/contact" className="text-primary hover:underline">Page Contact</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">12. Médiation</h2>
            <p className="text-text-secondary mb-4">
              Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, en cas de litige non résolu, le client consommateur peut recourir gratuitement au service de médiation :
            </p>
            <p className="text-text-secondary">
              <strong className="text-text-primary">Médiateur de la consommation :</strong> CM2C - 14 rue Saint Jean - 75017 Paris<br />
              <a href="https://www.cm2c.net" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.cm2c.net</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">13. Droit applicable</h2>
            <p className="text-text-secondary">
              Les présentes CGV sont régies par le droit français. En cas de litige, et après tentative de résolution amiable, les tribunaux de Paris seront seuls compétents.
            </p>
          </section>

          <p className="text-text-muted text-sm pt-8 border-t border-border">
            Dernière mise à jour : Décembre 2024
          </p>
        </div>
      </Container>
    </div>
  );
}
