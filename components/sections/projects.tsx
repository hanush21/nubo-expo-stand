"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/shared/ui/shadcn/dialog";
import { X, ZoomIn } from "lucide-react";
import { useLanguage } from "@/shared/lib/language-context";

const images = [
  "/images/projects/rgblink.jpg",
  "/images/projects/aida.jpg",
  "/images/projects/biospain.jpg",
  "/images/projects/stand-tech.jpg",
  "/images/projects/stand-white.jpg",
  "/images/projects/outdoor.jpg",
];

export function Projects() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const projects = t.projects.items.map((item, i) => ({
    ...item,
    image: images[i],
  }));

  const selected = selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <section id="proyectos" className="py-20 lg:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[#F26522] text-xs font-bold tracking-[0.2em] uppercase">
              {t.projects.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#2B2B2B] mt-2 tracking-tight">
              {t.projects.title}
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-xs sm:text-right">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-offset-2 text-left"
            >
              <Image
                src={project.image}
                alt={`${project.title} – ${project.event}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[#F26522] text-xs font-bold tracking-widest uppercase mb-1">
                  {project.event}
                </span>
                <h3 className="text-white font-bold text-base">{project.title}</h3>
                <p className="text-white/70 text-xs mt-1">{project.type}</p>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={16} className="text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-[#2B2B2B] border-0">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            aria-label="Cerrar"
          >
            <X size={16} />
          </button>
          {selected && (
            <>
              <div className="relative aspect-video w-full">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-6 py-5">
                <span className="text-[#F26522] text-xs font-bold tracking-widest uppercase">
                  {selected.event}
                </span>
                <h3 className="text-white font-bold text-xl mt-1">{selected.title}</h3>
                <p className="text-white/50 text-sm mt-1">{selected.type}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
