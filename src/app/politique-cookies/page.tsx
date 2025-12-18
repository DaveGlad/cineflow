import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique Cookies",
  description: "Politique d'utilisation des cookies sur le site CineFlow",
};

export default function PolitiqueCookiesPage() {
  return (
    <div className="pt-32 pb-20">
      <Container size="small">
        <h1 className="text-4xl font-bold mb-8">Politique Cookies</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <p className="text-text-secondary text-lg">
            Cette politique explique comment {SITE_CONFIG.company.name} utilise les cookies et technologies similaires sur son site web.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
            <p className="text-text-secondary">
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d&apos;un site web. Il permet au site de mémoriser des informations sur votre visite, comme votre langue préférée et d&apos;autres paramètres, afin de faciliter votre prochaine visite et de rendre le site plus utile pour vous.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">2. Types de cookies utilisés</h2>
            
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-surface border border-border">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Cookies essentiels</h3>
                <p className="text-text-secondary text-sm mb-3">
                  Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés.
                </p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-text-muted">Nom</th>
                      <th className="text-left py-2 text-text-muted">Finalité</th>
                      <th className="text-left py-2 text-text-muted">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-b border-border/50">
                      <td className="py-2">session_id</td>
                      <td className="py-2">Gestion de la session utilisateur</td>
                      <td className="py-2">Session</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">csrf_token</td>
                      <td className="py-2">Protection contre les attaques CSRF</td>
                      <td className="py-2">Session</td>
                    </tr>
                    <tr>
                      <td className="py-2">cookie_consent</td>
                      <td className="py-2">Mémorisation de vos préférences cookies</td>
                      <td className="py-2">12 mois</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-lg bg-surface border border-border">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Cookies analytiques</h3>
                <p className="text-text-secondary text-sm mb-3">
                  Ces cookies nous permettent de mesurer l&apos;audience et d&apos;améliorer notre site.
                </p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-text-muted">Nom</th>
                      <th className="text-left py-2 text-text-muted">Finalité</th>
                      <th className="text-left py-2 text-text-muted">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-b border-border/50">
                      <td className="py-2">_ga</td>
                      <td className="py-2">Google Analytics - Identification des visiteurs</td>
                      <td className="py-2">13 mois</td>
                    </tr>
                    <tr>
                      <td className="py-2">_gid</td>
                      <td className="py-2">Google Analytics - Identification des sessions</td>
                      <td className="py-2">24 heures</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-lg bg-surface border border-border">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Cookies marketing</h3>
                <p className="text-text-secondary text-sm mb-3">
                  Ces cookies sont utilisés pour vous proposer des publicités pertinentes.
                </p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-text-muted">Nom</th>
                      <th className="text-left py-2 text-text-muted">Finalité</th>
                      <th className="text-left py-2 text-text-muted">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-b border-border/50">
                      <td className="py-2">_fbp</td>
                      <td className="py-2">Facebook Pixel - Suivi des conversions</td>
                      <td className="py-2">3 mois</td>
                    </tr>
                    <tr>
                      <td className="py-2">li_sugr</td>
                      <td className="py-2">LinkedIn - Suivi des conversions</td>
                      <td className="py-2">3 mois</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">3. Gestion de vos préférences</h2>
            <p className="text-text-secondary mb-4">
              Vous pouvez à tout moment modifier vos préférences en matière de cookies :
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li><strong className="text-text-primary">Via notre bandeau cookies :</strong> cliquez sur &quot;Gérer les cookies&quot; en bas de page</li>
              <li><strong className="text-text-primary">Via votre navigateur :</strong> paramétrez les cookies dans les options de votre navigateur</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">4. Comment désactiver les cookies ?</h2>
            <p className="text-text-secondary mb-4">
              Vous pouvez configurer votre navigateur pour refuser les cookies :
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
            <p className="text-text-secondary mt-4">
              Attention : la désactivation de certains cookies peut affecter votre expérience de navigation sur notre site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">5. Durée de conservation</h2>
            <p className="text-text-secondary">
              Conformément à la réglementation, les cookies ont une durée de vie maximale de 13 mois. Au-delà, votre consentement sera à nouveau sollicité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">6. Modifications</h2>
            <p className="text-text-secondary">
              Nous nous réservons le droit de modifier cette politique cookies à tout moment. Les modifications entreront en vigueur dès leur publication sur cette page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">7. Contact</h2>
            <p className="text-text-secondary">
              Pour toute question concernant notre utilisation des cookies, contactez-nous à : <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">{SITE_CONFIG.email}</a>
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
