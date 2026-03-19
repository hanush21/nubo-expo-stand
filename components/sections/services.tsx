"use client";

import { Pencil, Settings, Hammer, Truck, Wrench, Monitor } from "lucide-react";
import { useLanguage } from "@/shared/lib/language-context";

const icons = [Pencil, Settings, Hammer, Truck, Wrench, Monitor];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-[#F26522] text-xs font-bold tracking-[0.2em] uppercase">
            {t.services.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2B2B2B] mt-2 mb-4 tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">{t.services.intro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-7 border border-gray-100 hover:border-[#F26522]/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-[#F26522]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#F26522] transition-colors duration-300">
                  <Icon
                    size={20}
                    className="text-[#F26522] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-base font-bold text-[#2B2B2B] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
