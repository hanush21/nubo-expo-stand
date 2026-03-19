"use client";

import { useState, useEffect } from "react";
import { Button } from "@/shared/ui/shadcn/button";
import { useLanguage } from "@/shared/lib/language-context";
import { ArrowRight } from "lucide-react";

export function FloatingCta() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.75);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Button
        asChild
        className="bg-[#2B2B2B] hover:bg-[#F26522] text-white font-bold shadow-xl h-11 px-5 text-sm rounded-full gap-2 group transition-colors duration-300"
      >
        <a href="#contacto">
          {t.hero.ctaPrimary}
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </a>
      </Button>
    </div>
  );
}
