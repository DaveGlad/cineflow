import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site CineFlow",
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-32 pb-20">
      <Container size="small">
        <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">1. Éditeur du site</h2>
            <div className="text-text-secondary space-y-2">
              <p><strong className="text-text-primary">Raison sociale :</strong> {SITE_CONFIG.company.name}</p>
              <p><strong className="text-text-primary">Forme juridique :</strong> Société par Actions Simplifiée (SAS)</p>
              <p><strong className="text-text-primary">Capital social :</strong> {SITE_CONFIG.company.capital}</p>
              <p><strong className="text-text-primary">Siège social :</strong> {SITE_CONFIG.company.address}</p>
              <p><strong className="text-text-primary">SIRET :</strong> {SITE_CONFIG.company.siret}</p>
              <p><strong className="text-text-primary">RCS :</strong> {SITE_CONFIG.company.rcs}</p>
              <p><strong className="text-text-primary">N° TVA intracommunautaire :</strong> {SITE_CONFIG.company.tva}</p>
              <p><strong className="text-text-primary">Email :</strong> {SITE_CONFIG.email}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">2. Directeur de la publication</h2>
            <p className="text-text-secondary">
              Le directeur de la publication est {SITE_CONFIG.company.director}, en qualité de Président de {SITE_CONFIG.company.name}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">3. Hébergement</h2>
            <div className="text-text-secondary space-y-2">
              <p><strong className="text-text-primary">Hébergeur :</strong> Vercel Inc.</p>
              <p><strong className="text-text-primary">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
              <p><strong className="text-text-primary">Site web :</strong> <a href="https://vercel.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://vercel.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">4. Propriété intellectuelle</h2>
            <p className="text-text-secondary mb-4">
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) est la propriété exclusive de {SITE_CONFIG.company.name} ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p className="text-text-secondary mb-4">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de {SITE_CONFIG.company.name}.
            </p>
            <p className="text-text-secondary">
              Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">5. Crédits</h2>
            <div className="text-text-secondary space-y-2">
              <p><strong className="text-text-primary">Conception et développement :</strong> {SITE_CONFIG.company.name}</p>
              <p><strong className="text-text-primary">Icônes :</strong> Lucide Icons (lucide.dev)</p>
              <p><strong className="text-text-primary">Typographies :</strong> Inter, JetBrains Mono (Google Fonts)</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">6. Données personnelles</h2>
            <p className="text-text-secondary">
              Pour toute information concernant le traitement de vos données personnelles, veuillez consulter notre <a href="/politique-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">7. Cookies</h2>
            <p className="text-text-secondary">
              Pour toute information concernant l&apos;utilisation des cookies sur ce site, veuillez consulter notre <a href="/politique-cookies" className="text-primary hover:underline">Politique Cookies</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">8. Loi applicable</h2>
            <p className="text-text-secondary">
              Les présentes mentions légales sont régies par la loi française. En cas de litige, les tribunaux français seront seuls compétents.
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
