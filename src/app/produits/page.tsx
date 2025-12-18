"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Play,
  Clapperboard,
  HardDrive,
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  Shield,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FEATURES } from "@/lib/constants";

export default function ProduitsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="primary" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              Nos Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Des outils IA conçus pour les{" "}
              <span className="gradient-text">créateurs vidéo</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              CineFlow Suite réunit deux technologies révolutionnaires pour
              transformer votre workflow de montage et vous faire gagner un
              temps précieux.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Main Product Card */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card
              variant="gradient"
              className="p-8 lg:p-12 border border-border relative overflow-hidden"
              hover={false}
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge variant="accent" className="mb-4">
                    Produit phare
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    CineFlow Suite
                  </h2>
                  <p className="text-text-secondary mb-6 text-lg">
                    La suite complète qui combine RoughCut Bot et LocalMind pour
                    une expérience de montage sans friction. Automatisez le
                    dérushage, organisez vos assets et concentrez-vous sur la
                    créativité.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Clock, text: "Gagnez 80% de temps" },
                      { icon: Zap, text: "Analyse IA en temps réel" },
                      { icon: Shield, text: "100% local et sécurisé" },
                      { icon: Sparkles, text: "Interface intuitive" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/produits/cineflow-suite">
                      <Button
                        size="lg"
                        rightIcon={<ArrowRight className="w-5 h-5" />}
                      >
                        Voir les détails
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="secondary" size="lg">
                        Demander une démo
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-surface">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary/30 transition-colors">
                          <Play className="w-8 h-8 text-primary ml-1" />
                        </div>
                        <p className="text-text-muted text-sm">
                          Voir la démo produit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Modules Section */}
      <Section background="surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Deux modules complémentaires
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Chaque module peut être utilisé indépendamment ou en synergie pour
              une productivité maximale.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  variant="bordered"
                  className="h-full p-8"
                  glow
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                      {feature.id === "roughcut" ? (
                        <Clapperboard className="w-7 h-7 text-white" />
                      ) : (
                        <HardDrive className="w-7 h-7 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{feature.title}</h3>
                      <p className="text-primary text-sm">{feature.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-text-secondary mb-6">
                    {feature.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-success" />
                        </div>
                        <span className="text-text-secondary text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/produits/cineflow-suite">
                    <Button variant="outline" className="w-full">
                      En savoir plus
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Comparison Section */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              Comparaison
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pourquoi choisir CineFlow ?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Découvrez ce qui nous différencie de la concurrence.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-medium text-text-muted">
                    Fonctionnalité
                  </th>
                  <th className="text-center py-4 px-4">
                    <span className="gradient-text font-bold">CineFlow</span>
                  </th>
                  <th className="text-center py-4 px-4 text-text-muted">
                    Timebolt
                  </th>
                  <th className="text-center py-4 px-4 text-text-muted">
                    Gling
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Suppression des silences",
                    cineflow: true,
                    timebolt: true,
                    gling: true,
                  },
                  {
                    feature: "Analyse narrative IA",
                    cineflow: true,
                    timebolt: false,
                    gling: false,
                  },
                  {
                    feature: "Génération timeline par prompt",
                    cineflow: true,
                    timebolt: false,
                    gling: false,
                  },
                  {
                    feature: "Gestion assets locale",
                    cineflow: true,
                    timebolt: false,
                    gling: false,
                  },
                  {
                    feature: "Recherche par contenu vidéo",
                    cineflow: true,
                    timebolt: false,
                    gling: false,
                  },
                  {
                    feature: "100% hors ligne",
                    cineflow: true,
                    timebolt: false,
                    gling: false,
                  },
                  {
                    feature: "Export Premiere/DaVinci",
                    cineflow: true,
                    timebolt: true,
                    gling: true,
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.cineflow ? (
                        <Check className="w-5 h-5 text-success mx-auto" />
                      ) : (
                        <span className="text-text-muted">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.timebolt ? (
                        <Check className="w-5 h-5 text-text-muted mx-auto" />
                      ) : (
                        <span className="text-text-muted">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.gling ? (
                        <Check className="w-5 h-5 text-text-muted mx-auto" />
                      ) : (
                        <span className="text-text-muted">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="surface">
        <Container size="small">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Prêt à transformer votre workflow ?
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-8">
              Essayez CineFlow gratuitement pendant 14 jours. Sans engagement,
              sans carte bancaire.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/produits/cineflow-suite">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Voir les tarifs
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
