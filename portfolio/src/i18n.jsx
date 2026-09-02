import { createContext, useContext, useState } from "react";

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
    home: {
      description:
        "Experiencia en desarrollo de software y resolución de problemas complejos, junto con una sólida base en algoritmos, estructuras de datos e inteligencia artificial. Conocimientos que me permiten analizar retos técnicos, plantear soluciones eficientes y desarrollar software robusto y escalable. Mis habilidades de comunicación y colaboración me permiten integrarme eficazmente en equipos de trabajo y contribuir a la consecución de objetivos comunes. Capaz de adaptar conceptos técnicos y explicarlos de forma clara y comprensible según el perfil de la audiencia, facilitando así la coordinación y el intercambio de ideas entre personas con diferentes niveles de conocimiento técnico.",
      viewProjects: "Ver proyectos",
      aboutMe: "Sobre mí",
      selectedWork: "TRABAJOS DESTACADOS",
      introLine1: "Proyectos hechos",
      introHighlight: "hasta ahora.",
      viewAll: "Ver todos los proyectos",
      currentlyLabel: "ACTUALMENTE",
      building: "CONSTRUYENDO",
      buildingTitle: "Fractal Paws",
      buildingDesc: "Mi sueño siempre ha sido poder crear un juego que sea inmersivo, este proyecto en Unity me permite darle vida a esa visión.",
      exploring: "EXPLORANDO",
      exploringTitle: "IA y Neurología (EEG)",
      exploringDesc:
        "Procesamiento y clasificación de ondas cerebrales complejas utilizando arquitecturas de redes neuronales.",
      learning: "APRENDIENDO",
      learningTitle: "Modelado 3D y animación",
      learningDesc:
        "Construcción de geometrías complejas, texturizado y rigging para entornos virtuales optimizados, al igual que su animación y exportación a motores de videojuegos.",
    },
    about: {
      title: "Sobre mí",
      subtitle:
        "Experiencia en desarrollo de software y resolución de problemas complejos, junto con una sólida base en algoritmos, estructuras de datos e inteligencia artificial. Conocimientos que me permiten analizar retos técnicos, plantear soluciones eficientes y desarrollar software robusto y escalable. Mis habilidades de comunicación y colaboración me permiten integrarme eficazmente en equipos de trabajo y contribuir a la consecución de objetivos comunes. Capaz de adaptar conceptos técnicos y explicarlos de forma clara y comprensible según el perfil de la audiencia, facilitando así la coordinación y el intercambio de ideas entre personas con diferentes niveles de conocimiento técnico.",
      introLabel: "INTRODUCCIÓN",
      largeText:
        "¡Hola! Soy Adrián, un estudiante de Ingeniería Informática que disfruta convirtiendo ideas en software funcional.",
      text1:
        "Enfocado en la consecución de objetivos y un entusiasta del sector tecnológico. Durante mis estudios he consolidado mis conocimientos técnicos en la creación de software, arquitectura de hardware y sistemas de inteligencia artificial.",
      text2:
        "Mi objetivo es integrarme en proyectos disruptivos donde pueda aportar valor y continuar mi evolución profesional.",
      experienceLabel: "EXPERIENCIA",
      experience: "Experiencia",
      companies: [
        { name: "Biancas Design", position: "AI development & IT technical support", duration: "2024 — 2026", 
          description: "Desarrollo de soluciones de inteligencia artificial para optimizaciones y soporte técnico informático para empleados." 
        },
      ],
      educationLabel: "EDUCACIÓN",
      education: "Educación",
      university: "Grado en Ingeniería Informática",
      universityName: "Universitat Autònoma de Barcelona · Barcelona",
      universityDesc: "Un programa integral que cubre una amplia gama de temas en informática, incluyendo algoritmos, estructuras de datos, ingeniería de software e inteligencia artificial.",
      exchangeTitle: "Programa de intercambio",
      exchangePlace: "Universidad Keio · Tokio",
      exchangeDesc:
        "Experiencia de intercambio internacional centrada en explorar nuevos entornos académicos y culturales.",
      techStackLabel: "STACK TECNOLÓGICO",
      languagesLabel: "IDIOMAS",
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Catalán", level: "Nativo" },
        { name: "Inglés", level: "C1" },
        { name: "Japonés", level: "N4" },
      ],
    },
    projects: {
      title: "Proyectos",
      all: "Todos",
      repository: "Ver repositorio",
      active: "Activo",
      soon: "Próximamente",
      finished: "Finalizado",
      gallery: "Galería",
      eyebrow: "// ARCHIVO DE PROYECTOS",
      backToProjects: "← VOLVER A PROYECTOS",
      technologies: "TECNOLOGÍAS",
      viewSourceCode: "VER CÓDIGO FUENTE ↗",
      notFoundTitle: "404",
      notFoundText: "Proyecto no encontrado.",
    },
    contact: {
      title: "Contacto",
      text: "¿Tienes alguna idea, proyecto o simplemente quieres hablar? Puedes encontrarme aquí:",
      heading1: "HABLEMOS",
      heading2: "DE ALGO.",
      form: {
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        send: "Enviar",
        sending: "Enviando...",
        success: "¡Mensaje enviado! Te responderé pronto.",
        error: "Algo falló. Prueba de nuevo o escríbeme directamente.",
      },
    },
    notFound: {
      eyebrow: "// ERROR 404",
      title: "NO ENCONTRADO",
      text: "La página que buscas no existe.",
      backHome: "← VOLVER AL INICIO",
    },
    footer: {
      tagline: "Ingeniería Informática · IA · Videojuegos",
      online: "DISPONIBLE",
    },
  },

  ca: {
    nav: {
      home: "Inici",
      about: "Sobre mi",
      projects: "Projectes",
      contact: "Contacte",
    },
    home: {
      description:
        "Experiència en el desenvolupament de programari i en la resolució de problemes complexos, aplicant un enfocament pràctic i orientat a la cerca de solucions eficients en el dia a dia professional. A més, posseeixo una sòlida formació en algorismes, estructures de dades i intel·ligència artificial, coneixements que em permeten afrontar diferents reptes tècnics i desenvolupar solucions robustes i escalables. Les meves habilitats de comunicació i col·laboració em permeten integrar-me eficaçment en equips de treball i contribuir a la consecució d'objectius comuns. Capaç d'adaptar conceptes tècnics i explicar-los de manera clara i comprensible segons el perfil de l'audiència, facilitant així la coordinació i l'intercanvi d'idees entre persones amb diferents nivells de coneixement tècnic.",
      viewProjects: "Veure projectes",
      aboutMe: "Sobre mi",
      selectedWork: "TREBALLS DESTACATS",
      introLine1: "Projectes fets",
      introHighlight: "fins ara.",
      viewAll: "Veure tots els projectes",
      currentlyLabel: "ACTUALMENT",
      building: "CONSTRUINT",
      buildingTitle: "Fractal Paws",
      buildingDesc: "El meu somni sempre ha estat poder crear un joc que sigui immersiu, aquest projecte en Unity em permet donar-li vida a aquesta visió.",
      exploring: "EXPLORANT",
      exploringTitle: "IA i Neurologia (EEG)",
      exploringDesc:
        "Processament i classificació d'ones cerebrals complexes utilitzant arquitectures de xarxes neuronals.",
      learning: "APRENENT",
      learningTitle: "Noves tecnologies",
      learningDesc:
        "Construcció de geometries complexes, texturat i rigging per a entorns virtuals optimitzats, igual que la seva animació i exportació a motors de videojocs.",
    },
    about: {
      title: "Sobre mi",
      subtitle:
        "Experiència en el desenvolupament de programari i en la resolució de problemes complexos en el dia a dia d'un empleat. Sòlida formació en algorismes, estructures de dades i intel·ligència artificial. Les meves habilitats de comunicació i col·laboració em converteixen en un membre valuós de l'equip, capaç de traduir conceptes tècnics a diferents tipus d'audiència.",
      introLabel: "INTRODUCCIÓ",
      largeText:
        "Hola! Soc l'Adrián, un estudiant d'Enginyeria Informàtica que gaudeix convertint idees en programari funcional.",
      text1:
        "Enfocat en la consecució d'objectius i un entusiasta del sector tecnològic. Durant els meus estudis he consolidat els meus coneixements tècnics en la creació de programari, arquitectura de maquinari i sistemes d'intel·ligència artificial.",
      text2:
        "El meu objectiu és integrar-me en projectes disruptius on pugui aportar valor i continuar la meva evolució professional.",
      experienceLabel: "EXPERIÈNCIA",
      experience: "Experiència",
      companies: [
        { name: "Biancas Design", position: "AI development & IT technical support", duration: "2024 — 2026", 
          description: "Desenvolupament de solucions de intel·ligència artificial per a optimitzacions i suport tècnic informàtic per a empleats." 
        },
      ],
      educationLabel: "EDUCACIÓ",
      education: "Educació",
      university: "Grau en Enginyeria Informàtica",
      universityName: "Universitat Autònoma de Barcelona · Barcelona",
      universityDesc: "Un programa integral que cobreix una àmplia gamma de temes en informàtica, incloent-hi algoritmes, estructures de dades, enginyeria de programari i intel·ligència artificial.",
      exchangeTitle: "Programa d'intercanvi",
      exchangePlace: "Universitat Keio · Tòquio",
      exchangeDesc:
        "Experiència d'intercanvi internacional centrada a explorar nous entorns acadèmics i culturals.",
      techStackLabel: "STACK TECNOLÒGIC",
      languagesLabel: "IDIOMES",
      languages: [
        { name: "Espanyol", level: "Natiu" },
        { name: "Català", level: "Natiu" },
        { name: "Anglès", level: "C1" },
        { name: "Japonès", level: "N4" },
      ],
    },
    projects: {
      title: "Projectes",
      all: "Tots",
      repository: "Veure repositori",
      active: "Actiu",
      soon: "Properament",
      finished: "Finalitzat",
      gallery: "Galeria",
      eyebrow: "// ARXIU DE PROJECTES",
      backToProjects: "← TORNAR A PROJECTES",
      technologies: "TECNOLOGIES",
      viewSourceCode: "VEURE CODI FONT ↗",
      notFoundTitle: "404",
      notFoundText: "Projecte no trobat.",
    },
    contact: {
      title: "Contacte",
      text: "Tens alguna idea, projecte o simplement vols parlar? Em pots trobar aquí:",
      heading1: "PARLEM",
      heading2: "D'ALGUNA COSA.",
      form: {
        name: "Nom",
        email: "Correu",
        message: "Missatge",
        send: "Enviar",
        sending: "Enviant...",
        success: "Missatge enviat! Et respondré aviat.",
        error: "Alguna cosa ha fallat. Torna-ho a provar o escriu-me directament.",
      },
    },
    notFound: {
      eyebrow: "// ERROR 404",
      title: "NO TROBAT",
      text: "La pàgina que busques no existeix.",
      backHome: "← TORNAR A L'INICI",
    },
    footer: {
      tagline: "Enginyeria Informàtica · IA · Videojocs",
      online: "DISPONIBLE",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    home: {
      description:
        "Software developer with experience in solving complex problems and a solid foundation in algorithms and artificial intelligence. My communication and collaboration skills allow me to integrate effectively into work teams and contribute to the achievement of common goals. I am able to adapt technical concepts and explain them clearly and comprehensibly based on the audience’s background, thereby facilitating coordination and the exchange of ideas among people with different levels of technical knowledge.",
      viewProjects: "View projects",
      aboutMe: "About me",
      selectedWork: "SELECTED WORK",
      introLine1: "Featured",
      introHighlight: "Projects.",
      viewAll: "View all projects",
      currentlyLabel: "CURRENTLY",
      building: "BUILDING",
      buildingTitle: "Fractal Paws",
      buildingDesc: "My dream has always been to be able to create an immersive game, this project at Unity allows me to give life to this vision.",
      exploring: "EXPLORING",
      exploringTitle: "AI & Neurology (EEG)",
      exploringDesc:
        "Processing and classification of complex brain waves using neural network architectures.",
      learning: "LEARNING",
      learningTitle: "New technologies",
      learningDesc:
        "Construction of complex geometries, textured and rigging for optimized virtual environments, as well as their animation and export to video game engines.",
    },
    about: {
      title: "About me",
      subtitle:
        "Experience in software development and solving complex problems, applying a practical approach focused on finding efficient solutions in my day-to-day professional work. In addition, I have a solid background in algorithms, data structures, and artificial intelligence—knowledge that enables me to tackle various technical challenges and develop robust, scalable solutions. My communication and collaboration skills allow me to integrate effectively into work teams and contribute to the achievement of common goals. I am able to adapt technical concepts and explain them clearly and comprehensibly based on the audience’s background, thereby facilitating coordination and the exchange of ideas among people with varying levels of technical knowledge.",
      introLabel: "INTRODUCTION",
      largeText:
        "Hi! I'm Adrián, a computer engineering student who enjoys turning ideas into working software.",
      text1:
        "I am goal-oriented and passionate about the technology sector. During my studies, I have built up my technical expertise in software development, hardware architecture, and artificial intelligence systems.",
      text2:
        "My goal is to integrate into disruptive projects where I can add value and continue my professional growth.",
      experienceLabel: "EXPERIENCE",
      experience: "Experience",
      companies: [
        { name: "Biancas Design", position: "AI development & IT technical support", duration: "2024 — 2026", 
          description: "Development of artificial intelligence solutions for companyoptimizations and technical support for employees." 
        },
      ],
      educationLabel: "EDUCATION",
      education: "Education",
      university: "Bachelor's Degree in Computer Science",
      universityName: "Universitat Autònoma de Barcelona · Barcelona",
      universityDesc: "A comprehensive program that covers a wide range of topics in computer science, including algorithms, data structures, software engineering, and artificial intelligence.",
      exchangeTitle: "Exchange Program",
      exchangePlace: "Keio University · Tokyo",
      exchangeDesc:
        "International exchange experience focused on exploring new academic and cultural environments.",
      techStackLabel: "TECH STACK",
      languagesLabel: "LANGUAGES",
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "Catalan", level: "Native" },
        { name: "English", level: "C1" },
        { name: "Japanese", level: "N4" },
      ],
    },
    projects: {
      title: "Projects",
      all: "All",
      repository: "View repository",
      active: "Active",
      soon: "Coming soon",
      finished: "Finished",
      gallery: "Gallery",
      eyebrow: "// PROJECT ARCHIVE",
      backToProjects: "← BACK TO PROJECTS",
      technologies: "TECHNOLOGIES",
      viewSourceCode: "VIEW SOURCE CODE ↗",
      notFoundTitle: "404",
      notFoundText: "Project not found.",
    },
    contact: {
      title: "Contact",
      text: "Have an idea, a project, or simply want to talk? You can find me here:",
      heading1: "LET'S BUILD",
      heading2: "SOMETHING.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        sending: "Sending...",
        success: "Message sent! I'll get back to you soon.",
        error: "Something went wrong. Try again or email me directly.",
      },
    },
    notFound: {
      eyebrow: "// ERROR 404",
      title: "NOT FOUND",
      text: "The page you're looking for doesn't exist.",
      backHome: "← BACK HOME",
    },
    footer: {
      tagline: "Computer Science · AI · Games",
      online: "AVAILABLE",
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}

export function localize(obj, language) {
  if (typeof obj === "string") {
    return obj;
  } else if (typeof obj === "object" && obj !== null) {
    return obj[language] || obj["en"] || Object.values(obj)[0];
  }
}