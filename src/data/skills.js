/**
 * SAGL Portfolio — Skills and Tooling Data
 * Sergio Andrés Gómez López
 * Vinculación directa e interactiva de cada herramienta con los proyectos reales del catálogo.
 */

export const skillsData = {
  categories: [
    {
      id: "3d-immersive",
      name: "3D & Inmersivo",
      description: "Herramientas de modelado, texturizado e integración para entornos 3D, AR y VR.",
      tools: [
        {
          id: "blender",
          name: "Blender",
          countText: "6 proyectos",
          roleSummary: "Modelado 3D, personajes, armas low poly, optimización de malla y exportación GLB/glTF para WebAR.",
          projectIds: ["lata-gladiador", "lata-impulso", "coliseo", "hoz", "oso-anteo-3d", "skee-ball-vr"],
          svgIcon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="4"/><circle cx="12" cy="14" r="1.5" fill="currentColor"/><path d="M12 10V3"/><path d="M15 11.5L20.5 7"/><path d="M9 11.5L3.5 7"/><path d="M12 3a9 9 0 0 1 9 9"/></svg>`
        },
        {
          id: "unity",
          name: "Unity",
          countText: "5 proyectos",
          roleSummary: "Motor de desarrollo interactivo para experiencias AR con Vuforia y prototipado de entornos VR.",
          projectIds: ["lata-gladiador", "lata-impulso", "juego-ar", "oso-anteo-webar", "skee-ball-vr"],
          svgIcon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/><path d="M12 22V12"/><path d="M21 7l-9 5-9-5"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>`
        },
        {
          id: "vuforia",
          name: "Vuforia Engine",
          countText: "4 proyectos",
          roleSummary: "Configuración y tracking de Cylinder Targets (latas) e Image Targets (cartas de juego y puntos turísticos).",
          projectIds: ["lata-gladiador", "lata-impulso", "juego-ar", "oso-anteo-webar"],
          svgIcon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V3h4"/><path d="M17 3h4v4"/><path d="M21 17v4h-4"/><path d="M7 21H3v-4"/><polygon points="7 8 12 16 17 8" fill="rgba(216,106,69,0.2)"/></svg>`
        },
        {
          id: "3dsmax",
          name: "3ds Max",
          countText: "2 proyectos",
          roleSummary: "Modelado isométrico para micro mundos nórdicos y desarrollo de props geométricos académicos.",
          projectIds: ["microworld", "espada-low-poly"],
          svgIcon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l8-4 8 4v12l-8 4-8-4V6z"/><path d="M4 6l8 6 8-6"/><path d="M12 12v10"/><path d="M7 9l5 4 5-4"/></svg>`
        }
      ]
    },
    {
      id: "graphic-design",
      name: "Diseño Gráfico & Vectorial",
      description: "Diseño de identidad, vectorización de assets, packaging e iconografía.",
      tools: [
        {
          id: "illustrator",
          name: "Adobe Illustrator",
          countText: "4 proyectos",
          roleSummary: "Vectorización de alta precisión para packaging temático, iconografía numismática y assets de motion graphics.",
          projectIds: ["juego-ar", "monedas-colombia", "cereal-incineroar", "cv-postproduccion"],
          svgIcon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 17l4-10 4 10"/><path d="M9.5 13.5h5"/><circle cx="17.5" cy="8.5" r="0.75" fill="currentColor"/></svg>`
        },
        {
          id: "photoshop",
          name: "Adobe Photoshop",
          countText: "2 proyectos",
          roleSummary: "Edición fotográfica digital, tratamiento tonal en blanco y negro y postproducción de series para exposición.",
          projectIds: ["foto-alegria", "retrofuturismo"],
          svgIcon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 17V7h4.5a2.5 2.5 0 0 1 0 5H8"/><path d="M15 13a2 2 0 0 0 2 2c1.1 0 2-.9 2-2s-2-1.5-2-3a2 2 0 0 1 2-2"/></svg>`
        },
        {
          id: "gimp",
          name: "GIMP",
          countText: "Técnico",
          roleSummary: "Edición rasterizada, recorte y ajuste de texturas bajo software libre.",
          projectIds: [],
          svgIcon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 13a4 4 0 0 0 8 0"/><circle cx="9" cy="10" r="1.2" fill="currentColor"/><circle cx="15" cy="10" r="1.2" fill="currentColor"/><path d="M15 14l3 2"/></svg>`
        },
        {
          id: "canva",
          name: "Canva",
          countText: "Técnico",
          roleSummary: "Prototipado rápido de esquemas de presentación y composición visual.",
          projectIds: [],
          svgIcon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5A5 5 0 1 0 16 15"/></svg>`
        }
      ]
    },
    {
      id: "post-production",
      name: "Audiovisual & Motion",
      description: "Edición de video, animación cuadro a cuadro y motion graphics.",
      tools: [
        {
          id: "after-effects",
          name: "After Effects",
          countText: "1 proyecto",
          roleSummary: "Composición de motion graphics, tipografía cinética y animación sincrónica con música.",
          projectIds: ["cv-postproduccion"],
          svgIcon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 17l3-10 3 10"/><path d="M8.2 13.5h3.6"/><path d="M15 13.5h3.5a2 2 0 0 1-2 2 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5c1.2 0 2.2.8 2.5 2"/></svg>`
        },
        {
          id: "davinci",
          name: "DaVinci Resolve",
          countText: "1 proyecto",
          roleSummary: "Montaje, corrección de color y sincronización de audio para cortometrajes de animación tradicional.",
          projectIds: ["stop-motion"],
          svgIcon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="8" r="2.5" fill="rgba(216,106,69,0.3)"/><circle cx="8.5" cy="14.5" r="2.5" fill="rgba(215,210,122,0.3)"/><circle cx="15.5" cy="14.5" r="2.5" fill="rgba(141,139,184,0.3)"/></svg>`
        }
      ]
    },
    {
      id: "web-dev",
      name: "Desarrollo Web & Frontend",
      description: "Construcción de interfaces web semánticas, interactivas y accesibles para visualización multimedia.",
      tools: [
        {
          id: "html-css",
          name: "HTML5 & CSS3",
          countText: "1 proyecto",
          roleSummary: "Estructura semántica, diseño editorial responsivo, animaciones CSS y accesibilidad WCAG.",
          projectIds: ["oso-anteo-webar"],
          svgIcon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>`
        },
        {
          id: "javascript",
          name: "JavaScript Moderno",
          countText: "1 proyecto",
          roleSummary: "Lógica modular, control de visores multimedia (<model-viewer>), eventos de usuario y microinteracciones.",
          projectIds: ["oso-anteo-webar"],
          svgIcon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M10 16.5v-4.5"/><path d="M14 16.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-1.5-3-1-3-3 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5"/></svg>`
        },
        {
          id: "vscode",
          name: "VS Code & GitHub",
          countText: "Entorno",
          roleSummary: "Entorno de desarrollo, control de versiones Git y preparación para despliegue en hosting estático.",
          projectIds: [],
          svgIcon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3a3 3 0 0 0-3 3v.2L9.5 9A3 3 0 0 0 6 7a3 3 0 0 0 0 6 3 3 0 0 0 3.5-2l5.5 2.8V18a3 3 0 1 0 3-3 3 3 0 0 0-3 3"/><circle cx="6" cy="10" r="2" fill="currentColor"/><circle cx="18" cy="4" r="2" fill="currentColor"/><circle cx="18" cy="20" r="2" fill="currentColor"/></svg>`
        }
      ]
    },
    {
      id: "methodologies",
      name: "Metodologías & Áreas Clave",
      description: "Técnicas de análisis, diseño centrado en el usuario y nuevas tecnologías.",
      tools: [
        {
          id: "ux-ui",
          name: "UX / UI Design",
          countText: "1 proyecto",
          roleSummary: "Aplicación de mapas de empatía y matrices DOFA para estructurar experiencias digitales y turísticas orientadas al usuario.",
          projectIds: ["oso-anteo-webar"],
          svgIcon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`
        },
        {
          id: "ovas",
          name: "Creación de OVAs",
          countText: "Formativo",
          roleSummary: "Diseño y estructuración de Objetos Virtuales de Aprendizaje y material educativo interactivo.",
          projectIds: [],
          svgIcon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><polyline points="10 8 14 12 10 16"/></svg>`
        },
        {
          id: "gen-ai",
          name: "IA Generativa",
          countText: "Formativo",
          roleSummary: "Uso y experimentación con herramientas generativas como acelerador de ideación conceptual y referencias visuales.",
          projectIds: [],
          svgIcon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3" fill="rgba(216,106,69,0.3)"/></svg>`
        }
      ]
    }
  ]
};
