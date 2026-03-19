import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuboexpo | Diseño y Montaje de Stands para Ferias y Eventos",
  description:
    "Empresa especializada en diseño, producción y montaje integral de stands para ferias, congresos y eventos profesionales. Servicio completo con un único interlocutor.",
  keywords: [
    "stands para ferias",
    "montaje de stands",
    "diseño de stands",
    "stands eventos",
    "stands Barcelona",
    "producción ferial",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
