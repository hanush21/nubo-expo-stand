export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      services: "Servicios",
      process: "Proceso",
      projects: "Proyectos",
      about: "Nosotros",
      contact: "Contacto",
      cta: "Solicitar presupuesto",
    },
    hero: {
      badge: "Exhibition & Stand Solutions",
      title: "Diseño y montaje de stands para ferias y eventos profesionales",
      subtitle:
        "Planificamos, producimos e instalamos su stand garantizando ejecución profesional, cumplimiento de plazos y un único interlocutor durante todo el proyecto.",
      ctaPrimary: "Solicitar presupuesto",
      ctaSecondary: "Ver proyectos",
    },
    services: {
      tag: "Qué hacemos",
      title: "Servicios integrales para stands de ferias y eventos",
      intro:
        "Cubrimos todas las fases del proyecto para garantizar un stand funcional, atractivo y correctamente ejecutado. Un único interlocutor coordina todo el proceso.",
      items: [
        {
          title: "Diseño de stands",
          description:
            "Desarrollamos el concepto creativo del stand adaptado a su identidad de marca y a los objetivos del evento.",
        },
        {
          title: "Desarrollo técnico",
          description:
            "Convertimos el diseño en un proyecto viable: normativas feriales, materiales y condicionantes del espacio.",
        },
        {
          title: "Producción y fabricación",
          description:
            "Fabricamos estructuras, mobiliario y elementos gráficos con acabados profesionales y control de calidad.",
        },
        {
          title: "Logística y coordinación",
          description:
            "Gestionamos el transporte y planificación para una ejecución eficiente, a nivel nacional e internacional.",
        },
        {
          title: "Montaje y desmontaje",
          description:
            "Instalación completa del stand con personal especializado y cumplimiento estricto de los plazos feriales.",
        },
        {
          title: "Equipamiento audiovisual",
          description:
            "Alquiler de pantallas, televisores y elementos audiovisuales para complementar su espacio expositivo.",
        },
      ],
    },
    process: {
      tag: "Metodología",
      title: "Cómo trabajamos",
      intro:
        "Seguimos una metodología clara y estructurada que nos permite mantener el control en todo momento y garantizar un resultado coherente con lo planificado.",
      steps: [
        {
          title: "Análisis del proyecto",
          description:
            "Definimos junto al cliente los objetivos, espacio, normativa y requisitos del evento para sentar unas bases sólidas.",
        },
        {
          title: "Diseño y desarrollo técnico",
          description:
            "Creamos la propuesta creativa y desarrollamos todos los aspectos técnicos para garantizar su viabilidad.",
        },
        {
          title: "Producción y fabricación",
          description:
            "Fabricamos todos los elementos del stand con controles de calidad en cada fase del proceso.",
        },
        {
          title: "Montaje en feria",
          description:
            "Instalamos el stand en el recinto ferial con personal especializado, cumpliendo tiempos y normativa.",
        },
        {
          title: "Desmontaje y cierre",
          description:
            "Gestionamos el desmontaje completo y el cierre del proyecto, entregando el espacio en condiciones.",
        },
      ],
      label1: "Montaje en feria",
      label2: "Producción a medida",
    },
    projects: {
      tag: "Portfolio",
      title: "Proyectos realizados",
      subtitle:
        "Proyectos de distinta escala y sector, adaptados a cada cliente y evento.",
      items: [
        { title: "RGBlink", event: "ISE Barcelona 2026", type: "Stand tecnológico · LED & AV" },
        { title: "AIDA Imaging", event: "ISE Barcelona 2026", type: "Stand corporativo · Electrónica" },
        { title: "BIOSPAIN 2026", event: "IFEMA Madrid", type: "Stand institucional · Biotech" },
        { title: "Stand tecnológico", event: "ISE 2026", type: "Montaje integral · Displays" },
        { title: "Stand a medida", event: "Feria profesional 2026", type: "Diseño y fabricación propia" },
        { title: "Evento exterior", event: "Evento corporativo 2025", type: "Espacio expositivo outdoor" },
      ],
    },
    about: {
      tag: "Quiénes somos",
      title: "Sobre Nuboexpo",
      p1: "Nuboexpo es una empresa especializada en el diseño, producción y montaje integral de stands para ferias y eventos profesionales. Acompañamos a nuestros clientes en todo el proceso, desde la idea inicial hasta la ejecución en feria.",
      p2: "Nuestra forma de trabajar se basa en la planificación, la organización y el control de cada fase del proyecto. Esto nos permite cumplir plazos y garantizar resultados consistentes en entornos exigentes como el ferial.",
      highlights: [
        "Más de 10 años de experiencia en el sector ferial",
        "Red de colaboradores especializados y de confianza",
        "Un único interlocutor durante todo el proyecto",
        "Operamos a nivel nacional y en Europa",
        "Control de calidad en todas las fases",
        "Cumplimiento estricto de plazos y normativas",
      ],
      cta: "Hablemos de su proyecto",
      badge: "años de experiencia",
    },
    stats: [
      { value: "10+", label: "Años de experiencia", sub: "en el sector ferial" },
      { value: "+50", label: "Proyectos realizados", sub: "de distinta escala" },
      { value: "1", label: "Interlocutor único", sub: "de inicio a fin" },
      { value: "ES · EU", label: "Cobertura", sub: "nacional e internacional" },
    ],
    cta: {
      title: "¿Tiene una feria próximamente?",
      subtitle:
        "Cuéntenos su proyecto y le ayudaremos a desarrollar el stand que mejor represente su marca en el evento.",
      primary: "Solicitar presupuesto",
      secondary: "Escribir por WhatsApp",
    },
    contact: {
      tag: "Contacto",
      title: "Hablemos de su stand",
      intro:
        "Si está preparando su participación en una feria o evento, cuéntenos su proyecto y le asesoraremos sin compromiso.",
      whatsapp: "Contactar por WhatsApp",
      phone: "Teléfono",
      email: "Email",
      location: "Ubicación",
      form: {
        name: "Nombre",
        namePh: "Su nombre",
        company: "Empresa",
        companyPh: "Nombre de la empresa",
        email: "Email",
        emailPh: "correo@empresa.com",
        phone: "Teléfono",
        phonePh: "+34 000 000 000",
        event: "Feria o evento",
        eventPh: "Nombre del evento y fecha aproximada",
        message: "Mensaje",
        messagePh:
          "Cuéntenos sobre su proyecto: tipo de stand, metros aproximados, fecha del evento...",
        submit: "Solicitar presupuesto",
        sending: "Enviando...",
        successTitle: "Mensaje enviado",
        successText:
          "Hemos recibido su consulta. Nos pondremos en contacto en breve.",
        successBack: "Enviar otro mensaje",
        error:
          "Ha ocurrido un error. Por favor inténtelo de nuevo o contáctenos directamente.",
        note: "También puede contactarnos directamente por WhatsApp para una respuesta más rápida.",
      },
    },
    footer: {
      tagline:
        "Diseño, producción y montaje integral de stands para ferias, congresos y eventos profesionales.",
      nav: "Navegación",
      contact: "Contacto",
      copy: "Todos los derechos reservados.",
      sub: "Diseño y montaje de stands para ferias y eventos · Barcelona",
    },
  },

  en: {
    nav: {
      services: "Services",
      process: "Process",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      cta: "Get a quote",
    },
    hero: {
      badge: "Exhibition & Stand Solutions",
      title: "Stand design and installation for professional trade fairs and events",
      subtitle:
        "We plan, produce and install your stand ensuring professional execution, deadline compliance and a single point of contact throughout the entire project.",
      ctaPrimary: "Get a quote",
      ctaSecondary: "View projects",
    },
    services: {
      tag: "What we do",
      title: "Full-service stand solutions for trade fairs and events",
      intro:
        "We cover every phase of the project to deliver a functional, attractive and well-executed stand. A single point of contact coordinates the entire process.",
      items: [
        {
          title: "Stand design",
          description:
            "We develop the creative concept of your stand adapted to your brand identity and event objectives.",
        },
        {
          title: "Technical development",
          description:
            "We turn the design into a viable project: trade fair regulations, materials and space constraints.",
        },
        {
          title: "Production & manufacturing",
          description:
            "We manufacture structures, furniture and graphic elements with professional finishes and quality control.",
        },
        {
          title: "Logistics & coordination",
          description:
            "We manage transport and planning for efficient execution, both nationally and internationally.",
        },
        {
          title: "Installation & dismantling",
          description:
            "Full stand installation by specialised staff with strict compliance to trade fair deadlines.",
        },
        {
          title: "Audiovisual equipment",
          description:
            "Rental of screens, TVs and audiovisual elements to complement your exhibition space.",
        },
      ],
    },
    process: {
      tag: "Methodology",
      title: "How we work",
      intro:
        "We follow a clear and structured methodology that allows us to maintain control at all times and deliver a result consistent with what was planned.",
      steps: [
        {
          title: "Project analysis",
          description:
            "We define together with the client the objectives, space, regulations and event requirements to build a solid foundation.",
        },
        {
          title: "Design & technical development",
          description:
            "We create the creative proposal and develop all technical aspects to ensure its feasibility.",
        },
        {
          title: "Production & manufacturing",
          description:
            "We manufacture all stand elements with quality controls at each phase of the process.",
        },
        {
          title: "Installation at the fair",
          description:
            "We install the stand at the venue with specialist staff, meeting timings and regulations.",
        },
        {
          title: "Dismantling & close",
          description:
            "We manage the full dismantling and project close, handing over the space in proper condition.",
        },
      ],
      label1: "Installation at the fair",
      label2: "Custom production",
    },
    projects: {
      tag: "Portfolio",
      title: "Completed projects",
      subtitle:
        "Projects of different scale and sector, tailored to each client and event.",
      items: [
        { title: "RGBlink", event: "ISE Barcelona 2026", type: "Tech stand · LED & AV" },
        { title: "AIDA Imaging", event: "ISE Barcelona 2026", type: "Corporate stand · Electronics" },
        { title: "BIOSPAIN 2026", event: "IFEMA Madrid", type: "Institutional stand · Biotech" },
        { title: "Tech stand", event: "ISE 2026", type: "Full installation · Displays" },
        { title: "Custom stand", event: "Trade fair 2026", type: "In-house design & manufacturing" },
        { title: "Outdoor event", event: "Corporate event 2025", type: "Outdoor exhibition space" },
      ],
    },
    about: {
      tag: "Who we are",
      title: "About Nuboexpo",
      p1: "Nuboexpo is a company specialised in the integral design, production and installation of stands for trade fairs and professional events. We accompany our clients through the entire process, from the initial idea to execution at the fair.",
      p2: "Our way of working is based on planning, organisation and control of each project phase. This allows us to meet deadlines and guarantee consistent results in demanding environments such as trade fairs.",
      highlights: [
        "Over 10 years of experience in the trade fair industry",
        "Network of specialised and trusted collaborators",
        "A single point of contact throughout the project",
        "Operating nationally and across Europe",
        "Quality control at every phase",
        "Strict compliance with deadlines and regulations",
      ],
      cta: "Let's talk about your project",
      badge: "years of experience",
    },
    stats: [
      { value: "10+", label: "Years of experience", sub: "in the trade fair sector" },
      { value: "+50", label: "Projects completed", sub: "of different scale" },
      { value: "1", label: "Single contact", sub: "from start to finish" },
      { value: "ES · EU", label: "Coverage", sub: "national & international" },
    ],
    cta: {
      title: "Do you have an upcoming trade fair?",
      subtitle:
        "Tell us about your project and we'll help you build the stand that best represents your brand at the event.",
      primary: "Get a quote",
      secondary: "Message on WhatsApp",
    },
    contact: {
      tag: "Contact",
      title: "Let's talk about your stand",
      intro:
        "If you are preparing for a trade fair or event, tell us about your project and we will advise you with no commitment.",
      whatsapp: "Contact via WhatsApp",
      phone: "Phone",
      email: "Email",
      location: "Location",
      form: {
        name: "Name",
        namePh: "Your name",
        company: "Company",
        companyPh: "Company name",
        email: "Email",
        emailPh: "email@company.com",
        phone: "Phone",
        phonePh: "+34 000 000 000",
        event: "Trade fair or event",
        eventPh: "Event name and approximate date",
        message: "Message",
        messagePh:
          "Tell us about your project: type of stand, approximate size, event date...",
        submit: "Get a quote",
        sending: "Sending...",
        successTitle: "Message sent",
        successText:
          "We have received your enquiry. We will get in touch shortly.",
        successBack: "Send another message",
        error:
          "An error occurred. Please try again or contact us directly.",
        note: "You can also contact us directly on WhatsApp for a faster response.",
      },
    },
    footer: {
      tagline:
        "Integral design, production and installation of stands for trade fairs, congresses and professional events.",
      nav: "Navigation",
      contact: "Contact",
      copy: "All rights reserved.",
      sub: "Stand design and installation for trade fairs and events · Barcelona",
    },
  },
} as const;

export type Translations = typeof translations.es;
