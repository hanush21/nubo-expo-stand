"use client";

import { Button } from "@/shared/ui/shadcn/button";
import { useLanguage } from "@/shared/lib/language-context";
import { useScrollReveal } from "@/shared/hooks/use-scroll-reveal";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CtaBanner() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="bg-[#F26522] py-16 lg:py-20 relative overflow-hidden">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-white/70 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          {t.cta.subtitle}
        </p>
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-8 tracking-tight leading-[1.1]">
          {t.cta.title}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-[#F26522] hover:bg-gray-50 font-bold px-8 h-14 text-base shadow-lg gap-2 group"
          >
            <a href="#contacto">
              {t.cta.primary}
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/50 text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-14 text-base gap-2"
          >
            <a href="https://wa.me/34688408815" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} />
              {t.cta.secondary}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
