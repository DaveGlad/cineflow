"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Clapperboard,
  HardDrive,
  ArrowRight,
  Check,
  Star,
  ChevronDown,
  Sparkles,
  Zap,
  Shield,
  Clock,
  Download,
  Upload,
  Wand2,
  Search,
  FolderOpen,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PRICING_PLANS, FEATURES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

const FAQ_ITEMS = [
  {
    question: "Comment fonctionne l'essai gratuit ?",
    answer:
      "Vous bénéficiez de 14 jours d'accès complet à toutes les fonctionnalités du plan Pro. Aucune carte bancaire n'est requise. À la fin de l'essai, vous pouvez choisir le plan qui vous convient ou continuer avec la version gratuite limitée.",
  },
  {
    question: "Mes données restent-elles sur mon ordinateur ?",
    answer:
      "Oui, 100%. CineFlow fonctionne entièrement en local. Vos vidéos et métadonnées ne quittent jamais votre machine. Seules les informations de licence sont vérifiées en ligne.",
  },
  {
    question: "Quels formats vidéo sont supportés ?",
    answer:
      "CineFlow supporte tous les formats professionnels : ProRes, DNxHD, H.264, H.265, RAW (RED, BRAW, ARRIRAW), et bien d'autres. Si votre logiciel de montage peut le lire, CineFlow aussi.",
  },
  {
    question: "Puis-je exporter vers Premiere Pro et DaVinci Resolve ?",
    answer:
      "Absolument ! CineFlow génère des fichiers XML et EDL compatibles avec Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro et Avid Media Composer.",
  },
  {
    question: "Quelle est la différence entre les plans ?",
    answer:
      "Le plan Starter inclut uniquement RoughCut Bot avec 10h de traitement/mois. Le plan Pro ajoute LocalMind, 50h de traitement et le support prioritaire. Le plan Enterprise offre un accès illimité et un support dédié.",
  },
  {
    question: "Comment fonctionne le support ?",
    answer:
      "Le plan Starter inclut le support par email (réponse sous 48h). Le plan Pro bénéficie d'un support prioritaire (réponse sous 24h). Le plan Enterprise dispose d'un support dédié 24/7 avec un account manager.",
  },
];

const WORKFLOW_STEPS = [
  {
    icon: Upload,
    title: "1. Importez vos rushes",
    description: "Glissez-déposez vos fichiers ou sélectionnez un dossier entier.",
  },
  {
    icon: Wand2,
    title: "2. L'IA analyse",
    description: "CineFlow analyse le contenu, la qualité et le contexte de chaque clip.",
  },
  {
    icon: Search,
    title: "3. Décrivez votre vision",
    description: "Utilisez un prompt textuel pour décrire le montage souhaité.",
  },
  {
    icon: Download,
    title: "4. Exportez",
    description: "Récupérez votre timeline dans votre logiciel de montage favori.",
  },
];

export default function CineFlowSuitePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="primary" className="mb-6">
              <Star className="w-3 h-3 mr-1" />
              Produit phare
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              CineFlow Suite
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
              La suite complète pour automatiser votre workflow de montage vidéo.
              RoughCut Bot + LocalMind réunis dans une seule solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Essai gratuit 14 jours
              </Button>
              <Button variant="secondary" size="lg">
                <Play className="w-5 h-5 mr-2" />
                Voir la démo
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Video Demo Section */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-surface">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary/30 transition-colors"
                  >
                    <Play className="w-10 h-10 text-primary ml-1" />
                  </motion.div>
                  <p className="text-text-muted">
                    Découvrez CineFlow Suite en action
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl" />
          </motion.div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section background="surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="accent" className="mb-4">
              Comment ça marche
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              4 étapes pour révolutionner votre montage
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Un workflow simplifié pour passer de rushes bruts à une timeline
              prête à monter en quelques minutes.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="bordered" className="h-full text-center p-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features Deep Dive */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="primary" className="mb-4">
              Fonctionnalités
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Deux modules, une puissance décuplée
            </h2>
          </motion.div>

          <div className="space-y-16">
            {/* RoughCut Bot */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Clapperboard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">RoughCut Bot</h3>
                    <p className="text-primary text-sm">Assistant IA de Premier Montage</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-6">
                  Fini les heures de dérushage. RoughCut Bot analyse vos rushes,
                  comprend le contexte narratif et génère automatiquement une
                  première timeline basée sur vos instructions.
                </p>
                <ul className="space-y-3">
                  {[
                    "Analyse de la mise au point et de l'exposition",
                    "Détection des expressions faciales et émotions",
                    "Identification des moments clés (action, dialogue)",
                    "Suppression automatique des ratés et faux départs",
                    "Génération de timeline par prompt textuel",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success mt-0.5 shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <Card variant="bordered" className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border">
                      <Wand2 className="w-5 h-5 text-primary" />
                      <span className="text-sm text-text-secondary">
                        &quot;Crée un montage dynamique avec les meilleurs moments de l&apos;interview&quot;
                      </span>
                    </div>
                    <div className="h-32 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
                      <div className="flex gap-1">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-16 rounded bg-primary/30"
                            style={{ height: `${Math.random() * 40 + 20}px` }}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-text-muted text-center">
                      Timeline générée automatiquement
                    </p>
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* LocalMind */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1 relative">
                <Card variant="bordered" className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border">
                      <Search className="w-5 h-5 text-accent" />
                      <span className="text-sm text-text-secondary">
                        &quot;coucher de soleil sur la plage&quot;
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="aspect-video rounded bg-gradient-to-br from-accent/20 to-primary/20"
                        />
                      ))}
                    </div>
                    <p className="text-xs text-text-muted text-center">
                      12 résultats trouvés en 0.3s
                    </p>
                  </div>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <HardDrive className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">LocalMind</h3>
                    <p className="text-accent text-sm">Gestion d&apos;Assets Locale</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-6">
                  Retrouvez n&apos;importe quel clip dans vos téraoctets de fichiers
                  en quelques secondes. LocalMind indexe vos disques localement
                  sans jamais envoyer vos données dans le cloud.
                </p>
                <ul className="space-y-3">
                  {[
                    "Indexation IA de tous vos disques",
                    "Recherche par description textuelle",
                    "Support des disques externes et NAS",
                    "Métadonnées automatiques (lieu, date, contenu)",
                    "Fonctionne 100% hors ligne",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success mt-0.5 shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Pricing Section */}
      <Section background="surface" id="pricing">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4">
              Tarifs
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Choisissez votre plan
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-8">
              Tous les plans incluent un essai gratuit de 14 jours. Sans
              engagement, annulez à tout moment.
            </p>

            <div className="inline-flex items-center gap-2 p-1 rounded-full bg-surface border border-border">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingPeriod === "monthly"
                    ? "bg-primary text-white"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingPeriod === "yearly"
                    ? "bg-primary text-white"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Annuel
                <span className="ml-1 text-xs text-success">-20%</span>
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  variant={plan.popular ? "gradient" : "bordered"}
                  className={`h-full relative ${
                    plan.popular ? "border-2 border-primary glow-primary" : ""
                  }`}
                  hover={false}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="primary">
                        <Star className="w-3 h-3 mr-1" />
                        Populaire
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-text-muted text-sm mb-4">
                      {plan.description}
                    </p>

                    <div className="mb-6">
                      {plan.price !== null ? (
                        <>
                          <span className="text-4xl font-bold">
                            {formatPrice(
                              billingPeriod === "yearly"
                                ? Math.round(plan.price * 0.8)
                                : plan.price
                            )}
                          </span>
                          <span className="text-text-muted">/{plan.period}</span>
                          {billingPeriod === "yearly" && (
                            <p className="text-success text-sm mt-1">
                              Économisez {formatPrice(Math.round(plan.price * 12 * 0.2))}/an
                            </p>
                          )}
                        </>
                      ) : (
                        <span className="text-2xl font-bold">Sur devis</span>
                      )}
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                          <span className="text-sm text-text-secondary">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={plan.popular ? "primary" : "secondary"}
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Container size="small">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="accent" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Questions fréquentes
            </h2>
          </motion.div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  variant="bordered"
                  className="overflow-hidden"
                  hover={false}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <span className="font-medium pr-4">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-text-muted transition-transform shrink-0 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 text-text-secondary">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section background="surface">
        <Container size="small">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2),transparent_70%)]" />

            <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Commencez votre essai gratuit
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                14 jours d&apos;accès complet à CineFlow Suite. Sans carte bancaire,
                sans engagement.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Démarrer l&apos;essai gratuit
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
