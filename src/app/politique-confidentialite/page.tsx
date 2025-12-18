import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité et protection des données personnelles de CineFlow",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-32 pb-20">
      <Container size="small">
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <p className="text-text-secondary text-lg">
            {SITE_CONFIG.company.name} s&apos;engage à protéger la vie privée des utilisateurs de son site et de ses services. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">1. Responsable du traitement</h2>
            <div className="text-text-secondary space-y-2">
              <p>Le responsable du traitement des données personnelles est :</p>
              <p><strong className="text-text-primary">{SITE_CONFIG.company.name}</strong></p>
              <p>{SITE_CONFIG.company.address}</p>
              <p>Email : {SITE_CONFIG.email}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">2. Données collectées</h2>
            <p className="text-text-secondary mb-4">Nous collectons les données suivantes :</p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li><strong className="text-text-primary">Données d&apos;identification :</strong> nom, prénom, adresse email, entreprise</li>
              <li><strong className="text-text-primary">Données de connexion :</strong> adresse IP, logs de connexion, type de navigateur</li>
              <li><strong className="text-text-primary">Données d&apos;utilisation :</strong> pages visitées, actions effectuées sur le site</li>
              <li><strong className="text-text-primary">Données de paiement :</strong> informations de facturation (traitées par notre prestataire de paiement sécurisé)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">3. Finalités du traitement</h2>
            <p className="text-text-secondary mb-4">Vos données sont collectées pour les finalités suivantes :</p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li>Gestion de votre compte utilisateur et de vos abonnements</li>
              <li>Fourniture et amélioration de nos services</li>
              <li>Communication relative à nos services (support, mises à jour)</li>
              <li>Envoi de newsletters (avec votre consentement)</li>
              <li>Analyse statistique et amélioration de l&apos;expérience utilisateur</li>
              <li>Respect de nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">4. Base légale du traitement</h2>
            <p className="text-text-secondary mb-4">Le traitement de vos données repose sur :</p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li><strong className="text-text-primary">L&apos;exécution du contrat :</strong> pour la fourniture de nos services</li>
              <li><strong className="text-text-primary">Votre consentement :</strong> pour l&apos;envoi de communications marketing</li>
              <li><strong className="text-text-primary">Notre intérêt légitime :</strong> pour l&apos;amélioration de nos services et la sécurité</li>
              <li><strong className="text-text-primary">Nos obligations légales :</strong> pour la conservation des données de facturation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">5. Durée de conservation</h2>
            <p className="text-text-secondary mb-4">Vos données sont conservées pendant :</p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li><strong className="text-text-primary">Données de compte :</strong> pendant la durée de votre abonnement + 3 ans</li>
              <li><strong className="text-text-primary">Données de facturation :</strong> 10 ans (obligation légale)</li>
              <li><strong className="text-text-primary">Données de connexion :</strong> 1 an</li>
              <li><strong className="text-text-primary">Cookies :</strong> 13 mois maximum</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">6. Destinataires des données</h2>
            <p className="text-text-secondary mb-4">Vos données peuvent être transmises à :</p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li>Nos équipes internes (support, technique, commercial)</li>
              <li>Nos sous-traitants techniques (hébergement, paiement, emailing)</li>
              <li>Les autorités compétentes en cas d&apos;obligation légale</li>
            </ul>
            <p className="text-text-secondary mt-4">
              Nous ne vendons jamais vos données personnelles à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">7. Transferts hors UE</h2>
            <p className="text-text-secondary">
              Certains de nos sous-traitants peuvent être situés en dehors de l&apos;Union Européenne. Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place (clauses contractuelles types, certification Privacy Shield, etc.) conformément au RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">8. Vos droits</h2>
            <p className="text-text-secondary mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li><strong className="text-text-primary">Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
              <li><strong className="text-text-primary">Droit de rectification :</strong> corriger vos données inexactes</li>
              <li><strong className="text-text-primary">Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
              <li><strong className="text-text-primary">Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong className="text-text-primary">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong className="text-text-primary">Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong className="text-text-primary">Droit de retrait du consentement :</strong> retirer votre consentement à tout moment</li>
            </ul>
            <p className="text-text-secondary mt-4">
              Pour exercer ces droits, contactez-nous à : <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">{SITE_CONFIG.email}</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">9. Sécurité</h2>
            <p className="text-text-secondary">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Ces mesures incluent le chiffrement SSL, l&apos;authentification sécurisée et des audits de sécurité réguliers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">10. Réclamation</h2>
            <p className="text-text-secondary">
              Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous avez le droit d&apos;introduire une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) : <a href="https://www.cnil.fr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">11. Modifications</h2>
            <p className="text-text-secondary">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications entreront en vigueur dès leur publication sur cette page. Nous vous encourageons à consulter régulièrement cette page.
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
