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
                <a href="tel:+34688408815" className="text-sm text-white/70 hover:text-white transition-colors">
                  +34 688 408 815
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#F26522] mt-0.5 flex-shrink-0" />
                <a href="mailto:nuboexpo@gmail.com" className="text-sm text-white/70 hover:text-white transition-colors">
                  nuboexpo@gmail.com
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
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Nuboexpo. {t.footer.copy}
          </p>
          <p className="text-xs text-white/30">{t.footer.sub}</p>
        </div>
      </div>
    </footer>
  );
}
