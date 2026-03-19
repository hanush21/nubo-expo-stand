"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34632701437"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1dbb57] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      {/* Label — visible on hover (desktop) */}
      <span className="hidden sm:block max-w-0 overflow-hidden group-hover:max-w-[140px] transition-all duration-300 text-sm font-semibold pl-0 group-hover:pl-4 whitespace-nowrap">
        ¿Hablamos?
      </span>
      <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
        <MessageCircle size={26} />
      </div>
    </a>
  );
}
