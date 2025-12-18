"use client";

import Link from "next/link";
import { Play, Twitter, Linkedin, Youtube, Mail } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, LEGAL_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-bold text-text-primary">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-text-secondary text-sm mb-6">
              {SITE_CONFIG.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-4">Légal</h4>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="text-text-muted text-sm">
                {SITE_CONFIG.company.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} {SITE_CONFIG.company.name}. Tous droits réservés.
          </p>
          <p className="text-text-muted text-sm">
            Fait avec ❤️ pour les créateurs vidéo
          </p>
        </div>
      </div>
    </footer>
  );
}
