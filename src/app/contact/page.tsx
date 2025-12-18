"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SITE_CONFIG, CONTACT_SUBJECTS } from "@/lib/constants";

const contactSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  company: z.string().optional(),
  subject: z.string().min(1, "Veuillez sélectionner un sujet"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  rgpdConsent: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter la politique de confidentialité",
  }),
  newsletter: z.boolean().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      rgpdConsent: false,
      newsletter: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

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
              Contact
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Parlons de votre projet
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Une question, une demande de démo ou un projet spécifique ? Notre
              équipe est là pour vous accompagner.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
              
              <div className="space-y-6">
                <Card variant="bordered" className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-text-secondary hover:text-primary transition-colors"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card variant="bordered" className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Adresse</p>
                      <p className="text-text-secondary">
                        {SITE_CONFIG.company.address}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card variant="bordered" className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Téléphone</p>
                      <p className="text-text-secondary">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <h3 className="font-bold mb-2">Besoin d&apos;une réponse rapide ?</h3>
                <p className="text-text-secondary text-sm mb-4">
                  Notre équipe répond généralement sous 24h ouvrées. Pour les
                  urgences, privilégiez le téléphone.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span>Disponible du lundi au vendredi, 9h-18h</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card variant="bordered" className="p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-text-secondary mb-6">
                      Merci pour votre message. Notre équipe vous répondra dans
                      les plus brefs délais.
                    </p>
                    <Button
                      variant="secondary"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Envoyer un autre message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input
                        label="Prénom"
                        placeholder="Jean"
                        required
                        error={errors.firstName?.message}
                        {...register("firstName")}
                      />
                      <Input
                        label="Nom"
                        placeholder="Dupont"
                        required
                        error={errors.lastName?.message}
                        {...register("lastName")}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input
                        label="Email"
                        type="email"
                        placeholder="jean.dupont@example.com"
                        required
                        error={errors.email?.message}
                        {...register("email")}
                      />
                      <Input
                        label="Entreprise"
                        placeholder="Votre entreprise (optionnel)"
                        error={errors.company?.message}
                        {...register("company")}
                      />
                    </div>

                    <Select
                      label="Sujet"
                      placeholder="Sélectionnez un sujet"
                      options={CONTACT_SUBJECTS}
                      required
                      error={errors.subject?.message}
                      {...register("subject")}
                    />

                    <Textarea
                      label="Message"
                      placeholder="Décrivez votre demande en détail..."
                      required
                      error={errors.message?.message}
                      {...register("message")}
                    />

                    <div className="space-y-4 pt-4 border-t border-border">
                      <Checkbox
                        label={
                          <span>
                            J&apos;accepte que mes données soient traitées conformément
                            à la{" "}
                            <a
                              href="/politique-confidentialite"
                              className="text-primary hover:underline"
                              target="_blank"
                            >
                              politique de confidentialité
                            </a>{" "}
                            de CineFlow. Ces données seront utilisées uniquement
                            pour répondre à ma demande et ne seront pas
                            transmises à des tiers. Je dispose d&apos;un droit
                            d&apos;accès, de rectification et de suppression de mes
                            données. <span className="text-error">*</span>
                          </span>
                        }
                        error={errors.rgpdConsent?.message}
                        {...register("rgpdConsent")}
                      />

                      <Checkbox
                        label="Je souhaite recevoir la newsletter CineFlow avec des conseils et actualités sur le montage vidéo (optionnel)"
                        {...register("newsletter")}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                      isLoading={isSubmitting}
                      rightIcon={<Send className="w-5 h-5" />}
                    >
                      Envoyer le message
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}
