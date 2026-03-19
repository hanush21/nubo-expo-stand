import { LanguageProvider } from "@/shared/lib/language-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { Stats } from "@/components/sections/stats";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Contact } from "@/components/sections/contact";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { FloatingCta } from "@/components/ui/floating-cta";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Projects />
        <About />
        <Stats />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <FloatingCta />
    </LanguageProvider>
  );
}
