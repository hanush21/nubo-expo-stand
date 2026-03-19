"use client";

import Image from "next/image";
import { useLanguage } from "@/shared/lib/language-context";
import { useScrollReveal } from "@/shared/hooks/use-scroll-reveal";

export function Process() {
  const { t } = useLanguage();
  const { ref: stepsRef, isVisible } = useScrollReveal(0.15);
  const { ref: imagesRef, isVisible: imagesVisible } = useScrollReveal(0.15);

  return (
    <section id="proceso" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Steps column */}
          <div ref={stepsRef}>
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="text-[#F26522] text-xs font-bold tracking-[0.2em] uppercase">
                {t.process.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#2B2B2B] mt-2 mb-4 tracking-tight">
                {t.process.title}
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-10">{t.process.intro}</p>
            </div>

            <div className="space-y-0">
              {t.process.steps.map((step, index) => (
                <div key={step.title} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    {/* Step circle */}
                    <div
                      className={`w-10 h-10 rounded-full bg-[#F26522] flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${index * 150 + 200}ms` : "0ms",
                      }}
                    >
                      <span className="text-white text-xs font-black">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Connector line */}
                    {index < t.process.steps.length - 1 && (
                      <div className="w-px flex-1 bg-gray-200 mt-2 min-h-[2rem] overflow-hidden">
                        <div
                          className="w-full bg-[#F26522]/30 origin-top"
                          style={{
                            height: "100%",
                            transform: isVisible ? "scaleY(1)" : "scaleY(0)",
                            transformOrigin: "top",
                            transition: "transform 600ms ease",
                            transitionDelay: isVisible ? `${index * 150 + 400}ms` : "0ms",
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Step text */}
                  <div
                    className={`pb-8 transition-all duration-600 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 150 + 250}ms` : "0ms",
                    }}
                  >
                    <h3 className="text-sm font-bold text-[#2B2B2B] mb-1.5">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images column */}
          <div
            ref={imagesRef}
            className={`flex flex-col gap-4 lg:pt-12 transition-all duration-700 ${
              imagesVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden">
              <Image
                src="/images/process/montaje.jpg"
                alt="Equipo montando stand en feria"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white text-xs font-semibold tracking-widest uppercase bg-[#F26522] px-3 py-1 rounded">
                {t.process.label1}
              </span>
            </div>
            <div
              className={`relative h-52 rounded-xl overflow-hidden transition-all duration-700 ${
                imagesVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: imagesVisible ? "200ms" : "0ms" }}
            >
              <Image
                src="/images/process/fabricacion.jpg"
                alt="Fabricación CNC en taller"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white text-xs font-semibold tracking-widest uppercase bg-[#2B2B2B] px-3 py-1 rounded">
                {t.process.label2}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
