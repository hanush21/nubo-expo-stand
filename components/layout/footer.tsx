"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/shared/lib/language-context";

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#servicios", label: t.nav.services },
    { href: "#proceso", label: t.nav.process },
    { href: "#proyectos", label: t.nav.projects },
    { href: "#nosotros", label: t.nav.about },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <footer className="bg-[#2B2B2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-black tracking-tight">
                NUBO<span className="text-[#F26522]">EXPO</span>
              </span>
              <p className="text-xs text-white/50 tracking-widest uppercase mt-0.5">
                Exhibition & Stand Solutions
              </p>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.facebook.com/nuboexpo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#F26522] transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nuboexpo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#F26522] transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/nuboexpo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#F26522] transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">
              {t.footer.nav}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#F26522] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[#F26522] mt-0.5 flex-shrink-0" />
                <a href="tel:+34632701437" className="text-sm text-white/70 hover:text-white transition-colors">
                  +34 632 70 14 37
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#F26522] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@nuboexpo.com" className="text-sm text-white/70 hover:text-white transition-colors">
                  info@nuboexpo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#F26522] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">Barcelona, España</span>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-white/40">
            <p>© {new Date().getFullYear()} Nuboexpo. {t.footer.copy}</p>
            <span className="hidden sm:inline text-white/20">·</span>
            <a href="/aviso-legal" className="hover:text-white/70 transition-colors">Aviso legal · Privacidad · Cookies</a>
          </div>
          <p className="text-xs text-white/25">
            Powered by{" "}
            <span className="text-white/40 font-medium">La tienda del emprendedor</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
