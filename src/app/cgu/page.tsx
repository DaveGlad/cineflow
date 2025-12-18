import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
  description: "Conditions générales d'utilisation du site et des services CineFlow",
};

export default function CGUPage() {
  return (
    <div className="pt-32 pb-20">
      <Container size="small">
        <h1 className="text-4xl font-bold mb-8">Conditions Générales d&apos;Utilisation</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <p className="text-text-secondary text-lg">
            Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et l&apos;utilisation du site web et des services proposés par {SITE_CONFIG.company.name}.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">1. Objet</h2>
            <p className="text-text-secondary">
              Les présentes CGU ont pour objet de définir les conditions d&apos;accès et d&apos;utilisation du site {SITE_CONFIG.url} et des services CineFlow Suite (RoughCut Bot et LocalMind). En accédant au site ou en utilisant nos services, vous acceptez sans réserve les présentes CGU.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">2. Définitions</h2>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li><strong className="text-text-primary">&quot;Site&quot;</strong> : désigne le site web accessible à l&apos;adresse {SITE_CONFIG.url}</li>
              <li><strong className="text-text-primary">&quot;Services&quot;</strong> : désigne l&apos;ensemble des fonctionnalités proposées par CineFlow Suite</li>
              <li><strong className="text-text-primary">&quot;Utilisateur&quot;</strong> : désigne toute personne accédant au Site ou utilisant les Services</li>
              <li><strong className="text-text-primary">&quot;Compte&quot;</strong> : désigne l&apos;espace personnel de l&apos;Utilisateur sur le Site</li>
              <li><strong className="text-text-primary">&quot;Contenu&quot;</strong> : désigne tout élément publié sur le Site (textes, images, vidéos, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">3. Accès au Site et aux Services</h2>
            <p className="text-text-secondary mb-4">
              L&apos;accès au Site est gratuit. Certains Services nécessitent la création d&apos;un Compte et la souscription à un abonnement payant.
            </p>
            <p className="text-text-secondary mb-4">
              Pour créer un Compte, l&apos;Utilisateur doit :
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li>Être une personne physique majeure ou une personne morale</li>
              <li>Fournir des informations exactes et complètes</li>
              <li>Maintenir la confidentialité de ses identifiants de connexion</li>
              <li>Accepter les présentes CGU et la Politique de Confidentialité</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">4. Utilisation des Services</h2>
            <p className="text-text-secondary mb-4">
              L&apos;Utilisateur s&apos;engage à utiliser les Services conformément à leur destination et aux présentes CGU. Il est notamment interdit de :
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li>Utiliser les Services à des fins illégales ou non autorisées</li>
              <li>Tenter de contourner les mesures de sécurité du Site</li>
              <li>Copier, modifier ou distribuer le logiciel sans autorisation</li>
              <li>Utiliser les Services pour traiter des contenus illicites</li>
              <li>Partager ses identifiants de connexion avec des tiers</li>
              <li>Revendre ou sous-licencier l&apos;accès aux Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">5. Propriété intellectuelle</h2>
            <p className="text-text-secondary mb-4">
              L&apos;ensemble des éléments du Site et des Services (logiciels, textes, images, logos, etc.) sont la propriété exclusive de {SITE_CONFIG.company.name} et sont protégés par les lois relatives à la propriété intellectuelle.
            </p>
            <p className="text-text-secondary mb-4">
              L&apos;Utilisateur bénéficie d&apos;une licence d&apos;utilisation personnelle, non exclusive et non transférable des Services, dans le cadre de son abonnement.
            </p>
            <p className="text-text-secondary">
              L&apos;Utilisateur conserve l&apos;intégralité des droits sur les contenus qu&apos;il traite via les Services. {SITE_CONFIG.company.name} n&apos;acquiert aucun droit sur ces contenus.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">6. Données personnelles</h2>
            <p className="text-text-secondary">
              Le traitement des données personnelles est régi par notre <a href="/politique-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</a>, qui fait partie intégrante des présentes CGU.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">7. Responsabilités</h2>
            <h3 className="text-lg font-semibold mb-2 text-text-primary">7.1 Responsabilité de {SITE_CONFIG.company.name}</h3>
            <p className="text-text-secondary mb-4">
              {SITE_CONFIG.company.name} s&apos;engage à fournir les Services avec diligence et selon les règles de l&apos;art. Toutefois, {SITE_CONFIG.company.name} ne saurait être tenu responsable :
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
              <li>Des interruptions temporaires des Services pour maintenance</li>
              <li>Des dommages résultant d&apos;une utilisation non conforme des Services</li>
              <li>Des contenus traités par l&apos;Utilisateur via les Services</li>
              <li>De la perte de données due à une défaillance technique</li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-2 text-text-primary">7.2 Responsabilité de l&apos;Utilisateur</h3>
            <p className="text-text-secondary">
              L&apos;Utilisateur est seul responsable de l&apos;utilisation qu&apos;il fait des Services et des contenus qu&apos;il traite. Il garantit {SITE_CONFIG.company.name} contre toute réclamation de tiers liée à son utilisation des Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">8. Disponibilité des Services</h2>
            <p className="text-text-secondary">
              {SITE_CONFIG.company.name} s&apos;efforce d&apos;assurer la disponibilité des Services 24h/24 et 7j/7. Toutefois, les Services peuvent être temporairement interrompus pour des opérations de maintenance, de mise à jour ou en cas de force majeure. {SITE_CONFIG.company.name} ne garantit pas une disponibilité ininterrompue des Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">9. Modification des CGU</h2>
            <p className="text-text-secondary">
              {SITE_CONFIG.company.name} se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entreront en vigueur dès leur publication sur le Site. L&apos;Utilisateur sera informé des modifications substantielles par email. La poursuite de l&apos;utilisation des Services après modification vaut acceptation des nouvelles CGU.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">10. Résiliation</h2>
            <p className="text-text-secondary mb-4">
              L&apos;Utilisateur peut résilier son Compte à tout moment depuis les paramètres de son compte ou en contactant le support.
            </p>
            <p className="text-text-secondary">
              {SITE_CONFIG.company.name} peut suspendre ou résilier l&apos;accès aux Services en cas de violation des présentes CGU, sans préavis ni indemnité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">11. Droit applicable et juridiction</h2>
            <p className="text-text-secondary mb-4">
              Les présentes CGU sont régies par le droit français.
            </p>
            <p className="text-text-secondary">
              En cas de litige, les parties s&apos;efforceront de trouver une solution amiable. À défaut, les tribunaux de Paris seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">12. Contact</h2>
            <p className="text-text-secondary">
              Pour toute question relative aux présentes CGU, contactez-nous à : <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">{SITE_CONFIG.email}</a>
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
