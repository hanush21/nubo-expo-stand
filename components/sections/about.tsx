"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "@/shared/ui/shadcn/button";
import { useLanguage } from "@/shared/lib/language-context";
import { useScrollReveal } from "@/shared/hooks/use-scroll-reveal";

export function About() {
  const { t } = useLanguage();
  const { ref: imagesRef, isVisible: imagesVisible } = useScrollReveal(0.15);
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.15);

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Images */}
          <div
            ref={imagesRef}
            className={`relative order-2 lg:order-1 transition-all duration-700 ${
              imagesVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/projects/rgblink.jpg"
                alt="Stand profesional RGBlink en ISE Barcelona"
                fill
                className="object-cover object-center"
              />
            </div>
            <div
              className={`absolute -bottom-6 -right-4 sm:-right-8 w-48 sm:w-56 h-36 sm:h-44 rounded-xl overflow-hidden border-4 border-white shadow-xl transition-all duration-700 ${
                imagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: imagesVisible ? "200ms" : "0ms" }}
            >
              <Image
                src="/images/projects/aida.jpg"
                alt="Stand corporativo AIDA Imaging en ISE Barcelona"
                fill
                className="object-cover object-center"
              />
            </div>
            <div
              className={`absolute -top-4 -left-4 bg-[#F26522] text-white rounded-xl px-4 py-3 shadow-lg transition-all duration-700 ${
                imagesVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: imagesVisible ? "300ms" : "0ms" }}
            >
              <span className="text-2xl font-black leading-none">10+</span>
              <p className="text-xs font-medium mt-0.5 text-white/90">{t.about.badge}</p>
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className={`order-1 lg:order-2 transition-all duration-700 ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <span className="text-[#F26522] text-xs font-bold tracking-[0.2em] uppercase">
              {t.about.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#2B2B2B] mt-2 mb-5 tracking-tight">
              {t.about.title}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-4">{t.about.p1}</p>
            <p className="text-base text-gray-600 leading-relaxed mb-8">{t.about.p2}</p>

            <ul className="space-y-2.5 mb-8">
              {t.about.highlights.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: contentVisible ? `${i * 80 + 200}ms` : "0ms" }}
                >
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
