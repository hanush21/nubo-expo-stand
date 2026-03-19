"use client";

import { Button } from "@/shared/ui/shadcn/button";
import { useLanguage } from "@/shared/lib/language-context";

export function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#F26522] py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
          {t.cta.title}
        </h2>
        <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          {t.cta.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-[#F26522] hover:bg-gray-100 font-bold px-8 h-14 text-base shadow-md"
          >
            <a href="#contacto">{t.cta.primary}</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/60 text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-14 text-base"
          >
            <a href="https://wa.me/34688408815" target="_blank" rel="noopener noreferrer">
              {t.cta.secondary}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
