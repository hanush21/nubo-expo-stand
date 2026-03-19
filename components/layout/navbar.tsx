"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/shadcn/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/shared/lib/language-context";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "#servicios", label: t.nav.services },
    { href: "#proceso", label: t.nav.process },
    { href: "#proyectos", label: t.nav.projects },
    { href: "#nosotros", label: t.nav.about },
    { href: "#contacto", label: t.nav.contact },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="#inicio" className="flex-shrink-0">
            <Image
              src="/images/logo/logo-white.png"
              alt="Nuboexpo – Exhibition & Stand Solutions"
              width={280}
              height={170}
              className="h-16 lg:h-36 w-auto"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#2B2B2B] hover:text-[#F26522] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: lang toggle + CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex items-center border border-gray-200 rounded-full p-1 gap-0.5">
              <button
                onClick={() => setLang("es")}
                className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-200 ${
                  lang === "es"
                    ? "bg-[#F26522] text-white shadow-sm"
                    : "text-gray-400 hover:text-[#2B2B2B]"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-200 ${
                  lang === "en"
                    ? "bg-[#F26522] text-white shadow-sm"
                    : "text-gray-400 hover:text-[#2B2B2B]"
                }`}
              >
                EN
              </button>
            </div>

            <Button
              asChild
              className="hidden lg:flex bg-[#F26522] hover:bg-[#d4551a] text-white font-semibold"
            >
              <a href="#contacto">{t.nav.cta}</a>
            </Button>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-[#2B2B2B] hover:text-[#F26522] transition-colors"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-[#2B2B2B] py-3 border-b border-gray-50 hover:text-[#F26522] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <Button
                asChild
                className="w-full bg-[#F26522] hover:bg-[#d4551a] text-white font-semibold"
              >
                <a href="#contacto" onClick={() => setOpen(false)}>
                  {t.nav.cta}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
