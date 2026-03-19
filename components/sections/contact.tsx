"use client";

import { useState } from "react";
import { Button } from "@/shared/ui/shadcn/button";
import { Input } from "@/shared/ui/shadcn/input";
import { Mail, Phone, MapPin, MessageCircle, CheckCircle } from "lucide-react";
import { useLanguage } from "@/shared/lib/language-context";
import { useScrollReveal } from "@/shared/hooks/use-scroll-reveal";

const WHATSAPP_NUMBER = "34632701437";

export function Contact() {
  const { t } = useLanguage();
  const f = t.contact.form;
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal(0.15);
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal(0.15);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement)?.value ?? "";

    const nombre = get("nombre");
    const empresa = get("empresa");
    const email = get("email");
    const telefono = get("telefono");
    const mensaje = get("mensaje");

    const text = [
      `Hola, me pongo en contacto desde vuestra web.`,
      ``,
      `*Nombre:* ${nombre}`,
      `*Empresa:* ${empresa}`,
      `*Email:* ${email}`,
      telefono ? `*Teléfono:* ${telefono}` : null,
      ``,
      `*Mensaje:*`,
      mensaje,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setStatus("sent");
    form.reset();
  }

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: info */}
          <div
            ref={leftRef}
            className={`lg:col-span-2 transition-all duration-700 ${
              leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="text-[#F26522] text-xs font-bold tracking-[0.2em] uppercase">
              {t.contact.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#2B2B2B] mt-2 mb-4 tracking-tight">
              {t.contact.title}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">{t.contact.intro}</p>

            <div className="space-y-5">
              {[
                {
                  icon: Phone,
                  label: t.contact.phone,
                  content: (
                    <>
                      <a href="tel:+34632701437" className="text-sm font-medium text-[#2B2B2B] hover:text-[#F26522] transition-colors block">
                        +34 632 701 437
                      </a>
                    
                    </>
                  ),
                },
                {
                  icon: Mail,
                  label: t.contact.email,
                  content: (
                    <a href="mailto:nuboexpo@gmail.com" className="text-sm font-medium text-[#2B2B2B] hover:text-[#F26522] transition-colors">
                      nuboexpo@gmail.com
                    </a>
                  ),
                },
                {
                  icon: MapPin,
                  label: t.contact.location,
                  content: <span className="text-sm font-medium text-[#2B2B2B]">Barcelona, España</span>,
                },
              ].map(({ icon: Icon, label, content }, i) => (
                <div
                  key={label}
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: leftVisible ? `${i * 100 + 200}ms` : "0ms" }}
                >
                  <div className="w-10 h-10 bg-[#F26522]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#F26522]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{label}</p>
                    {content}
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/34688408815"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1dbb57] transition-colors text-white rounded-lg px-5 py-3 w-fit mt-2"
              >
                <MessageCircle size={18} />
                <span className="text-sm font-semibold">{t.contact.whatsapp}</span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div
            ref={rightRef}
            className={`lg:col-span-3 transition-all duration-700 ${
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: rightVisible ? "150ms" : "0ms" }}
          >
            <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-gray-100">
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  {/* Animated success icon */}
                  <div
                    className="w-16 h-16 bg-[#F26522]/10 rounded-full flex items-center justify-center mb-4"
                    style={{ animation: "count-in 0.5s ease forwards" }}
                  >
                    <CheckCircle size={36} className="text-[#F26522]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2B2B2B] mb-2">{f.successTitle}</h3>
                  <p className="text-gray-500 text-sm max-w-xs">{f.successText}</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm text-[#F26522] hover:underline"
                  >
                    {f.successBack}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        {f.name} *
                      </label>
                      <Input id="nombre" name="nombre" placeholder={f.namePh} required className="h-11 border-gray-200" />
                    </div>
                    <div>
                      <label htmlFor="empresa" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        {f.company} *
                      </label>
                      <Input id="empresa" name="empresa" placeholder={f.companyPh} required className="h-11 border-gray-200" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        {f.email} *
                      </label>
                      <Input id="email" name="email" type="email" placeholder={f.emailPh} required className="h-11 border-gray-200" />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        {f.phone}
                      </label>
                      <Input id="telefono" name="telefono" type="tel" placeholder={f.phonePh} className="h-11 border-gray-200" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      {f.message} *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      placeholder={f.messagePh}
                      required
                      className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:border-transparent resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#1dbb57] text-white font-bold h-12 text-base gap-2 group"
                  >
                    <MessageCircle
                      size={17}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />
                    Enviar por WhatsApp
                  </Button>

                  <p className="text-xs text-gray-400 text-center">{f.note}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
