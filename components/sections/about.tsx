"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "@/shared/ui/shadcn/button";
import { useLanguage } from "@/shared/lib/language-context";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Images */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/about/equipo.jpg"
                alt="Equipo Nuboexpo trabajando en fabricación"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-8 w-48 sm:w-56 h-36 sm:h-44 rounded-xl overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/images/about/taller.jpg"
                alt="Taller e infraestructura Nuboexpo"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 bg-[#F26522] text-white rounded-xl px-4 py-3 shadow-lg">
              <span className="text-2xl font-black leading-none">10+</span>
              <p className="text-xs font-medium mt-0.5 text-white/90">{t.about.badge}</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-[#F26522] text-xs font-bold tracking-[0.2em] uppercase">
              {t.about.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#2B2B2B] mt-2 mb-5 tracking-tight">
              {t.about.title}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-4">{t.about.p1}</p>
            <p className="text-base text-gray-600 leading-relaxed mb-8">{t.about.p2}</p>

            <ul className="space-y-2.5 mb-8">
              {t.about.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={17} className="text-[#F26522] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="bg-[#F26522] hover:bg-[#d4551a] text-white font-bold">
              <a href="#contacto">{t.about.cta}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
