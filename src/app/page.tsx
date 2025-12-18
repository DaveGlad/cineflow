"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Play,
  Sparkles,
  Zap,
  Clock,
  HardDrive,
  Search,
  Clapperboard,
  ArrowRight,
  Check,
  Star,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { VideoHero } from "@/components/video/VideoHero";
import { FEATURES, TESTIMONIALS, PRICING_PLANS } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)]" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/videos/AI_Video_Editing_Simulation_Generated.mp4" type="video/mp4" />
          </video>
        </div>

        <Container className="relative z-20 pt-32 pb-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="primary" className="mb-6">
                <Sparkles className="w-3 h-3 mr-1" />
                Révolutionnez votre workflow
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Le montage vidéo
              <br />
              <span className="gradient-text">propulsé par l&apos;IA</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
            >
              Gagnez 80% de temps sur le dérushage. CineFlow analyse, trie et
              organise vos rushes automatiquement pour que vous puissiez vous
              concentrer sur la créativité.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/produits">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Découvrir les produits
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Demander une démo
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-16 flex items-center justify-center gap-8 text-text-muted text-sm"
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>Essai gratuit 14 jours</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>Sans carte bancaire</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>Support inclus</span>
              </div>
            </motion.div>
          </motion.div>
        </Container>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-text-muted flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-text-muted" />
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <Section background="surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="accent" className="mb-4">
              Le problème
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              80% de votre temps perdu en tâches répétitives
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Les monteurs professionnels passent la majorité de leur temps à
              des tâches qui pourraient être automatisées.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Dérushage interminable",
                description:
                  "Des heures à visionner des rushes pour trouver les bonnes prises.",
                stat: "40h",
                statLabel: "par projet en moyenne",
              },
              {
                icon: Search,
                title: "Assets introuvables",
                description:
                  "Impossible de retrouver ce clip parfait dans vos téraoctets de fichiers.",
                stat: "2h",
                statLabel: "perdues par jour",
              },
              {
                icon: Zap,
                title: "Créativité bridée",
                description:
                  "Trop de temps sur l'organisation, pas assez sur le montage créatif.",
                stat: "20%",
                statLabel: "du temps réellement créatif",
              },
            ].map((item, index) => (
              <Card key={index} variant="bordered" glow>
                <CardContent>
                  <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-error" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-secondary mb-4">{item.description}</p>
                  <div className="pt-4 border-t border-border">
                    <span className="text-3xl font-bold text-error">
                      {item.stat}
                    </span>
                    <span className="text-text-muted text-sm ml-2">
                      {item.statLabel}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Solutions Section */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="primary" className="mb-4">
              La solution
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Deux outils IA révolutionnaires
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              CineFlow Suite combine deux technologies complémentaires pour
              transformer votre workflow de montage.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card
                  variant="gradient"
                  className="h-full p-8 border border-border hover:border-primary/50 transition-colors"
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

                  <ul className="space-y-3">
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

                  <div className="mt-8">
                    <Link href="/produits/cineflow-suite">
                      <Button
                        variant="outline"
                        rightIcon={<ChevronRight className="w-4 h-4" />}
                      >
                        En savoir plus
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Video Demo Section */}
      <Section background="surface">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="accent" className="mb-4">
                Voir en action
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                30 secondes pour comprendre la révolution
              </h2>
              <p className="text-text-secondary mb-6">
                Découvrez comment CineFlow transforme des heures de rushes en
                une timeline narrative prête à monter, en quelques minutes
                seulement.
              </p>
              <ul className="space-y-4">
                {[
                  "Import de vos rushes en un clic",
                  "Analyse IA automatique du contenu",
                  "Génération de timeline par prompt",
                  "Export vers votre logiciel favori",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        {i + 1}
                      </span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-surface">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/videos/demo-poster.jpg"
                >
                  <source src="/videos/cineflow_promo_hd.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Pricing Preview Section */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              Tarifs
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Un plan pour chaque créateur
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Commencez gratuitement et évoluez selon vos besoins. Tous les
              plans incluent un essai gratuit de 14 jours.
            </p>
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
                    plan.popular
                      ? "border-2 border-primary glow-primary"
                      : ""
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
                            {formatPrice(plan.price)}
                          </span>
                          <span className="text-text-muted">/{plan.period}</span>
                        </>
                      ) : (
                        <span className="text-2xl font-bold">Sur devis</span>
                      )}
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.slice(0, 5).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                          <span className="text-sm text-text-secondary">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/produits/cineflow-suite">
                      <Button
                        variant={plan.popular ? "primary" : "secondary"}
                        className="w-full"
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section background="surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="accent" className="mb-4">
              Témoignages
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ils ont transformé leur workflow
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Des centaines de créateurs font confiance à CineFlow pour gagner
              du temps et se concentrer sur leur créativité.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="bordered" className="h-full">
                  <CardContent>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-warning fill-warning"
                        />
                      ))}
                    </div>
                    <p className="text-text-secondary mb-6 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">{testimonial.name}</p>
                        <p className="text-text-muted text-xs">
                          {testimonial.role} • {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section>
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
                Prêt à révolutionner votre montage ?
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                Rejoignez des centaines de créateurs qui ont déjà transformé
                leur workflow avec CineFlow. Essai gratuit de 14 jours, sans
                engagement.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/produits">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                  >
                    Commencer gratuitement
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white border-white/30 hover:bg-white/10"
                  >
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
