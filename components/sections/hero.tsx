"use client";

import Image from "next/image";
import { Button } from "@/shared/ui/shadcn/button";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/shared/lib/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center">
      <Image
        src="/images/hero.jpg"
        alt="Stand para ferias profesionales – Nuboexpo"
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24 lg:pt-28">
        <span className="inline-block text-[#F26522] text-xs font-bold tracking-[0.25em] uppercase mb-6">
          {t.hero.badge}
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.1] mb-6 tracking-tight">
          {t.hero.title}
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#F26522] hover:bg-[#d4551a] text-white font-bold px-8 h-14 text-base shadow-lg shadow-orange-900/30"
          >
            <a href="#contacto">{t.hero.ctaPrimary}</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/60 text-white bg-white/10 hover:bg-white hover:text-[#2B2B2B] font-semibold px-8 h-14 text-base backdrop-blur-sm"
          >
            <a href="#proyectos">{t.hero.ctaSecondary}</a>
          </Button>
        </div>
      </div>

      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll hacia abajo"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
