"use client";

import Image from "next/image";
import { Button } from "@/shared/ui/shadcn/button";
import { ChevronDown, Star } from "lucide-react";
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

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

      {/* Animated orange glow from bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% 100%, rgba(242,101,34,0.28) 0%, transparent 70%)",
          animation: "hero-glow 6s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24 lg:pt-28">
        {/* Social proof badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-5">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} className="text-[#F26522] fill-[#F26522]" />
            ))}
          </div>
          <span className="text-white/80 text-xs font-medium">
            {t.hero.socialProof}
          </span>
        </div>

        {/* Tag */}
        <div className="mb-4">
          <span className="inline-block text-[#F26522] text-xs font-bold tracking-[0.25em] uppercase">
            {t.hero.badge}
          </span>
        </div>

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
            className="bg-[#F26522] hover:bg-[#d4551a] text-white font-bold px-8 h-14 text-base shadow-lg shadow-orange-900/40"
          >
            <a href="#contacto">{t.hero.ctaPrimary}</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white/80 bg-transparent hover:bg-white/10 hover:text-white font-medium px-8 h-14 text-base"
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
