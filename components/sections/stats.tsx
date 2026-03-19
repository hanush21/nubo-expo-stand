"use client";

import { useLanguage } from "@/shared/lib/language-context";

export function Stats() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#2B2B2B] py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {t.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${
                index < t.stats.length - 1 ? "lg:border-r lg:border-white/10" : ""
              }`}
            >
              <div className="text-3xl lg:text-4xl font-black text-[#F26522] mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mb-0.5">{stat.label}</div>
              <div className="text-xs text-white/40">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
