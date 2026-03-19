"use client";

import { Pencil, Settings, Hammer, Truck, Wrench, Monitor, Droplets, Download } from "lucide-react";
import { useLanguage } from "@/shared/lib/language-context";
import { useScrollReveal } from "@/shared/hooks/use-scroll-reveal";

const CATALOG_URL = "https://drive.google.com/drive/folders/TU_ENLACE_AQUI";

const icons = [Pencil, Settings, Hammer, Truck, Wrench, Monitor, Droplets];

function ServiceCard({
  service,
  index,
  Icon,
}: {
  service: { title: string; description: string };
  index: number;
  Icon: React.ElementType;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
      className={`bg-white rounded-xl p-7 border border-gray-100 hover:border-[#F26522]/30 hover:shadow-md transition-all duration-500 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
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
}

export function Services() {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.2);

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`max-w-2xl mb-14 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-[#F26522] text-xs font-bold tracking-[0.2em] uppercase">
            {t.services.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2B2B2B] mt-2 mb-4 tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">{t.services.intro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              Icon={icons[index]}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#2B2B2B] hover:bg-[#F26522] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors duration-300"
          >
            <Download size={16} />
            {t.services.catalog}
          </a>
        </div>
      </div>
    </section>
  );
}
