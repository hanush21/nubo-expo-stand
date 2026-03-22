import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LanguageProvider } from "@/shared/lib/language-context";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | Nuboexpo",
  description: "Aviso legal y política de privacidad de Nuboexpo.",
};

export default function AvisoLegal() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">

          <h1 className="text-3xl font-black text-[#2B2B2B] mb-2 tracking-tight">Aviso Legal</h1>
          <p className="text-sm text-gray-400 mb-10">Última actualización: marzo 2026</p>

          <section className="mb-10">
            <p className="text-gray-600 leading-relaxed">
              En cumplimiento con el deber de información recogido en la Ley 34/2002, de 11 de julio, de Servicios
              de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li><span className="font-semibold text-[#2B2B2B]">Titular:</span> Nuboexpo</li>
              <li><span className="font-semibold text-[#2B2B2B]">Correo electrónico:</span>{" "}
                <a href="mailto:info@nuboexpo.com" className="text-[#F26522] hover:underline">info@nuboexpo.com</a>
              </li>
              <li><span className="font-semibold text-[#2B2B2B]">Actividad:</span> Diseño, producción y montaje de stands para ferias y eventos profesionales</li>
            </ul>
          </section>

          <section className="mb-10">
            <p className="text-gray-600 leading-relaxed">
              El presente sitio web tiene como finalidad ofrecer información sobre los servicios de la empresa.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              El acceso y uso de este sitio web atribuye la condición de usuario, implicando la aceptación de las
              condiciones aquí reflejadas.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              El titular no se hace responsable del uso indebido de los contenidos de la web por parte de los usuarios.
            </p>
          </section>

          <div className="border-t border-gray-100 pt-10 mb-10">
            <h2 className="text-xl font-bold text-[#2B2B2B] mb-4">Política de Privacidad</h2>
            <p className="text-gray-600 leading-relaxed">
              En Nuboexpo tratamos la información que nos facilitan las personas interesadas con el fin de atender
              solicitudes de información y prestar nuestros servicios.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Los datos personales proporcionados se conservarán mientras exista una relación comercial o durante el
              tiempo necesario para cumplir con las obligaciones legales.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              No se cederán datos a terceros salvo obligación legal.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              El usuario tiene derecho a obtener confirmación sobre si en Nuboexpo estamos tratando sus datos
              personales, así como a acceder, rectificar o suprimir sus datos, entre otros derechos.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Puede ejercer sus derechos enviando un correo a:{" "}
              <a href="mailto:info@nuboexpo.com" className="text-[#F26522] hover:underline">info@nuboexpo.com</a>
            </p>
          </div>

          <div className="border-t border-gray-100 pt-10">
            <h2 className="text-xl font-bold text-[#2B2B2B] mb-4">Política de Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Este sitio web utiliza cookies para mejorar la experiencia del usuario. Las cookies son pequeños
              archivos que se almacenan en el dispositivo del usuario y permiten reconocer su navegador.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              El usuario puede configurar su navegador para rechazar el uso de cookies, aunque esto podría afectar
              al funcionamiento de la web.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Al navegar por este sitio web, el usuario acepta el uso de cookies.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </LanguageProvider>
  );
}
