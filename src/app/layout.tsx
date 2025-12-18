import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CineFlow | Suite IA pour Monteurs Vidéo",
    template: "%s | CineFlow",
  },
  description:
    "CineFlow révolutionne le montage vidéo avec RoughCut Bot et LocalMind. Automatisez le dérushage, organisez vos assets et gagnez 80% de temps.",
  keywords: [
    "montage vidéo",
    "IA",
    "intelligence artificielle",
    "RoughCut",
    "LocalMind",
    "dérushage automatique",
    "gestion assets vidéo",
  ],
  authors: [{ name: "CineFlow" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://cineflow.io",
    siteName: "CineFlow",
    title: "CineFlow | Suite IA pour Monteurs Vidéo",
    description:
      "Révolutionnez votre workflow de montage vidéo avec l'IA. RoughCut Bot + LocalMind.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CineFlow | Suite IA pour Monteurs Vidéo",
    description:
      "Révolutionnez votre workflow de montage vidéo avec l'IA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-text-primary`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
