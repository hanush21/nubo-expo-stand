"use client";

import { useState } from "react";
import { Button } from "@/shared/ui/shadcn/button";
import { Input } from "@/shared/ui/shadcn/input";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/shared/lib/language-context";

// ⚠️ Reemplaza YOUR_FORM_ID con tu ID de Formspree (formspree.io)
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

export function Contact() {
  const { t } = useLanguage();
  const f = t.contact.form;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: info */}
          <div className="lg:col-span-2">
            <span className="text-[#F26522] text-xs font-bold tracking-[0.2em] uppercase">
              {t.contact.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#2B2B2B] mt-2 mb-4 tracking-tight">
              {t.contact.title}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">{t.contact.intro}</p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F26522]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[#F26522]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                    {t.contact.phone}
                  </p>
                  <a href="tel:+34688408815" className="text-sm font-medium text-[#2B2B2B] hover:text-[#F26522] transition-colors block">
                    +34 688 408 815
                  </a>
                  <a href="tel:+34666893146" className="text-sm font-medium text-[#2B2B2B] hover:text-[#F26522] transition-colors block">
                    +34 666 893 146
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F26522]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[#F26522]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                    {t.contact.email}
                  </p>
                  <a href="mailto:nuboexpo@gmail.com" className="text-sm font-medium text-[#2B2B2B] hover:text-[#F26522] transition-colors">
                    nuboexpo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F26522]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#F26522]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                    {t.contact.location}
                  </p>
                  <span className="text-sm font-medium text-[#2B2B2B]">Barcelona, España</span>
                </div>
              </div>

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
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-gray-100">
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-[#F26522] mb-4" />
                  <h3 className="text-xl font-bold text-[#2B2B2B] mb-2">{f.successTitle}</h3>
                  <p className="text-gray-500 text-sm">{f.successText}</p>
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
                    <label htmlFor="evento" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      {f.event}
                    </label>
                    <Input id="evento" name="evento" placeholder={f.eventPh} className="h-11 border-gray-200" />
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

                  {status === "error" && (
                    <p className="text-sm text-red-500">{f.error}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-[#F26522] hover:bg-[#d4551a] text-white font-bold h-12 text-base gap-2"
                  >
                    <Send size={16} />
                    {status === "sending" ? f.sending : f.submit}
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
