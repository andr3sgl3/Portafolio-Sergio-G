/**
 * SAGL Portfolio — Central Projects Catalog
 * Sergio Andrés Gómez López
 * Contiene únicamente los datos reales y assets verificados del proyecto.
 */

export const projects = [
  // ==========================================
  // CATEGORÍA 01 — 3D
  // ==========================================
  {
    id: "lata-gladiador",
    number: "01",
    title: "Lata Gladiador",
    category: "3D",
    categorySlug: "3d",
    role: "ROL: INDIVIDUAL",
    roleType: "individual",
    summary: "Integración de modelado 3D y Realidad Aumentada sobre un target cilíndrico real.",
    description: "Proyecto individual de Realidad Aumentada donde una lata física es reconocida mediante un Cylinder Target en Vuforia. Al detectarse, el modelo 3D desarrollado en Blender sustituye visualmente la lata e inicia una animación interactiva dentro de Unity.",
    tools: ["Blender", "Unity", "Vuforia"],
    mediaType: "3d-and-video",
    primaryAsset: {
      type: "glb",
      path: "Recursos/3D/Latas/Lata Gladiador.glb",
      poster: "",
      alt: "Modelo 3D interactivo de Lata Gladiador"
    },
    additionalAssets: [
      {
        type: "video",
        path: "Recursos/VR y AR/Lata Gladiador.mp4",
        title: "Demostración de Realidad Aumentada (Target Cilíndrico)",
        poster: ""
      }
    ],
    highlights: [
      "Target cilíndrico (Cylinder Target) configurado con Vuforia",
      "Modelado de lata y adaptación de textura en Blender",
      "Control de eventos y animación en Unity"
    ]
  },
  {
    id: "lata-impulso",
    number: "02",
    title: "Lata Impulso",
    category: "3D",
    categorySlug: "3d",
    role: "ROL: INDIVIDUAL",
    roleType: "individual",
    summary: "Diseño y modelado 3D para experiencia de marca imaginaria en Realidad Aumentada.",
    description: "Proyecto individual centrado en la creación de una marca imaginaria y su correspondiente experiencia de Realidad Aumentada. El sistema detecta el target específico y despliega la animación 3D de la lata interactiva.",
    tools: ["Blender", "Unity", "Vuforia"],
    mediaType: "3d",
    primaryAsset: {
      type: "glb",
      path: "Recursos/3D/Latas/Lata Impulso.glb",
      poster: "",
      alt: "Modelo 3D interactivo de Lata Impulso"
    },
    additionalAssets: [],
    highlights: [
      "Creación de concepto visual y modelado en Blender",
      "Integración de target y lógica interactiva en Unity con Vuforia"
    ]
  },
  {
    id: "coliseo",
    number: "03",
    title: "Coliseo",
    category: "3D",
    categorySlug: "3d",
    role: "ROL: INDIVIDUAL",
    roleType: "individual",
    summary: "Modelo 3D low poly inspirado en una representación basada en la película Gladiador.",
    description: "Proyecto individual de modelado arquitectónico low poly inspirado en la estética cinematográfica de Gladiador. Desarrollado con optimización de geometría y poligonaje para entornos interactivos en tiempo real.",
    tools: ["Blender"],
    mediaType: "3d",
    isHeavyModel: true,
    fileSizeNotice: "~318 MB",
    primaryAsset: {
      type: "glb",
      path: "Recursos/3D/Coliseo.glb",
      poster: "",
      alt: "Modelo 3D interactivo del Coliseo Low Poly"
    },
    additionalAssets: [],
    highlights: [
      "Modelado de gradas, arcos y estructura perimetral",
      "Optimización de malla para visualización en tiempo real"
    ]
  },
  {
    id: "hoz",
    number: "04",
    title: "Hoz",
    category: "3D",
    categorySlug: "3d",
    role: "ROL: INDIVIDUAL",
    roleType: "individual",
    summary: "Modelo 3D de una hoz medieval con detalle geométrico desarrollado en Blender.",
    description: "Proyecto individual de modelado 3D de arma blanca (hoz) realizado en Blender. Enfocado en la silueta, curvatura de la hoja metálica, agarre de mango y preparación de geometría.",
    tools: ["Blender"],
    mediaType: "3d",
    primaryAsset: {
      type: "glb",
      path: "Recursos/3D/Hoz.glb",
      poster: "",
      alt: "Modelo 3D interactivo de Hoz"
    },
    additionalAssets: [],
    highlights: [
      "Modelado de hoja curva y detalles de empuñadura",
      "Geometría limpia y optimizada en Blender"
    ]
  },
  {
    id: "oso-anteo-3d",
    number: "05",
    title: "Oso Anteo",
    category: "3D",
    categorySlug: "3d",
    role: "ROL: PROYECTO EN EQUIPO",
    roleType: "team",
    summary: "Modelado, texturizado y preparación de personaje guía 3D para experiencia de WebAR turística.",
    description: "Proyecto desarrollado en equipo universitario para la Secretaría de Turismo de Norte de Santander. Anteo es un oso diseñado como personaje guía interactivo para una experiencia turística en Realidad Aumentada sobre Salazar de las Palmas.",
    tools: ["Blender", "Unity", "Vuforia", "WebAR"],
    mediaType: "3d",
    crossLink: {
      text: "Ver experiencia WebAR completa de Salazar de las Palmas →",
      slug: "vr-ar",
      projectId: "oso-anteo-webar"
    },
    primaryAsset: {
      type: "glb",
      path: "Recursos/3D/OsoAnteo.glb",
      poster: "",
      alt: "Modelo 3D interactivo del Oso Anteo"
    },
    additionalAssets: [],
    highlights: [
      "Diseño de personaje carismático como guía cultural",
      "Modelado y texturizado optimizado para WebAR en dispositivos móviles",
      "Proyecto colaborativo con impacto en turismo regional"
    ]
  },
  {
    id: "microworld",
    number: "06",
    title: "MicroWorld",
    category: "3D",
    categorySlug: "3d",
    role: "ROL: INDIVIDUAL",
    roleType: "individual",
    summary: "Micro mundo isométrico inspirado en diseño nórdico y pequeñas aldeas vikingas.",
    description: "Trabajo académico parcial desarrollado en 3ds Max. Representa un micro mundo nórdico compuesto por cabañas de madera, masas de agua, formaciones montañosas y una ambientación estilizada con inspiración vikinga.",
    tools: ["3ds Max"],
    mediaType: "gallery",
    primaryAsset: {
      type: "image",
      path: "Recursos/3D/Render MicroWorld.jpg",
      alt: "Render 1 MicroWorld estilo nórdico"
    },
    additionalAssets: [
      {
        type: "image",
        path: "Recursos/3D/Render MicroWorld2.jpg",
        alt: "Render 2 MicroWorld perspectiva secundaria",
        title: "Perspectiva detallada de cabañas y entorno"
      }
    ],
    highlights: [
      "Composición de escenario modular isométrico en 3ds Max",
      "Iluminación y renderizado de entorno nórdico con agua y cabañas"
    ]
  },
  {
    id: "espada-low-poly",
    number: "07",
    title: "Espada Low Poly",
    category: "3D",
    categorySlug: "3d",
    role: "ROL: INDIVIDUAL",
    roleType: "individual",
    summary: "Modelado 3D de espada a partir de diseño base desarrollado en 3ds Max.",
    description: "Trabajo académico parcial consistente en la interpretación y modelado 3D en 3ds Max a partir de una referencia de diseño recibida. Enfoque en proporciones de la hoja, guarda y empuñadura.",
    tools: ["3ds Max"],
    mediaType: "technical-file",
    primaryAsset: {
      type: "file",
      path: "Recursos/3D/Espada Low Poly.max",
      fileName: "Espada Low Poly.max",
      fileType: "Autodesk 3ds Max Scene File"
    },
    additionalAssets: [],
    highlights: [
      "Traducción de boceto de diseño a geometría 3D en 3ds Max",
      "Malla poligonal y estructura de modelado académico"
    ]
  },

  // ==========================================
  // CATEGORÍA 02 — DISEÑO GRÁFICO
  // ==========================================
  {
    id: "juego-ar",
    number: "01",
    title: "Juego de Estrategia AR",
    category: "DISEÑO GRÁFICO",
    categorySlug: "diseno-grafico",
    role: "ROL: PROYECTO EN EQUIPO",
    roleType: "team",
    summary: "Juego de mesa físico de estrategia continental combinado con Realidad Aumentada y cartas target.",
    description: "Juego de estrategia continental desarrollado en equipo en Unity, inspirado conceptualmente en las mecánicas de Risk. El mapa se concentra en el continente americano (Norteamérica, Centroamérica y Sudamérica). Al escanear el tablero físico aparece el mapa interactivo en 3D, mientras que las cartas físicas funcionan como targets de Vuforia para ejecutar acciones de ataque, movimiento y reclutamiento con gestión de turnos y oro.",
    tools: ["Unity", "Vuforia", "Illustrator"],
    mediaType: "gallery",
    primaryAsset: {
      type: "image",
      path: "Recursos/Diseño Grafico/JuegoAR/Tablero.jpg.jpeg",
      alt: "Tablero físico del Juego de Estrategia AR"
    },
    additionalAssets: [
      {
        type: "image",
        path: "Recursos/Diseño Grafico/JuegoAR/CartaAtacar.png",
        alt: "Carta de Acción: Atacar (Target Vuforia)",
        title: "Carta de Acción — Atacar"
      },
      {
        type: "image",
        path: "Recursos/Diseño Grafico/JuegoAR/CartaMover.png",
        alt: "Carta de Acción: Mover (Target Vuforia)",
        title: "Carta de Acción — Mover"
      },
      {
        type: "image",
        path: "Recursos/Diseño Grafico/JuegoAR/CartaReclutar.png",
        alt: "Carta de Acción: Reclutar (Target Vuforia)",
        title: "Carta de Acción — Reclutar"
      }
    ],
    highlights: [
      "Hibridación de juego de mesa físico con capas de interacción AR",
      "Diseño de cartas con patrones optimizados para reconocimiento de Vuforia",
      "Mecánicas de oro, reclutamiento y conquista territorial sobre América"
    ]
  },
  {
    id: "monedas-colombia",
    number: "02",
    title: "Propuesta Numismática: Monedas de Colombia",
    category: "DISEÑO GRÁFICO",
    categorySlug: "diseno-grafico",
    role: "ROL: COLABORACIÓN",
    roleType: "collaboration",
    summary: "Colección de rediseño gráfico para las denominaciones de monedas de Colombia.",
    description: "Proyecto colaborativo desarrollado en Adobe Illustrator que propone una alternativa gráfica contemporánea para las 5 denominaciones del cono monetario colombiano ($50, $100, $200, $500 y $1000), diseñando tanto las caras como las cruces con una identidad visual homogénea.",
    tools: ["Illustrator"],
    mediaType: "coin-collection",
    primaryAsset: {
      type: "coin-collection",
      denominations: [
        {
          value: "50",
          label: "$50",
          cara: "Recursos/Diseño Grafico/Monedas/Moneda 50 Cara.jpg",
          cruz: "Recursos/Diseño Grafico/Monedas/Moneda 50 Cruz.jpg"
        },
        {
          value: "100",
          label: "$100",
          cara: "Recursos/Diseño Grafico/Monedas/Moneda 100 Cara.jpg",
          cruz: "Recursos/Diseño Grafico/Monedas/Moneda 100 Cruz.jpg"
        },
        {
          value: "200",
          label: "$200",
          cara: "Recursos/Diseño Grafico/Monedas/Moneda 200 Cara.jpg",
          cruz: "Recursos/Diseño Grafico/Monedas/Moneda 200 Cruz.jpg"
        },
        {
          value: "500",
          label: "$500",
          cara: "Recursos/Diseño Grafico/Monedas/Moneda 500 Cara.png",
          cruz: "Recursos/Diseño Grafico/Monedas/Moneda 500 Cruz.png"
        },
        {
          value: "1000",
          label: "$1000",
          cara: "Recursos/Diseño Grafico/Monedas/Moneda 1000 Cara.png",
          cruz: "Recursos/Diseño Grafico/Monedas/Moneda 1000 Cruz.png"
        }
      ]
    },
    additionalAssets: [],
    highlights: [
      "Vectorización e iconografía geométrica en Illustrator",
      "5 denominaciones completas con diseño de cara y cruz",
      "Estructura modular con selector interactivo de valor monetario"
    ]
  },
  {
    id: "cereal-incineroar",
    number: "03",
    title: "Cereal Incineroar — Diseño de Empaque",
    category: "DISEÑO GRÁFICO",
    categorySlug: "diseno-grafico",
    role: "ROL: INDIVIDUAL",
    roleType: "individual",
    summary: "Diseño y vectorización de packaging editorial temático inspirado en Incineroar.",
    description: "Trabajo académico parcial centrado en el diseño y despliegue técnico de un empaque de cereal inspirado en la temática de Pokémon (Incineroar). El arte principal, troquel y elementos gráficos fueron vectorizados desde cero por Sergio en Adobe Illustrator.",
    tools: ["Illustrator"],
    mediaType: "pdf",
    primaryAsset: {
      type: "pdf",
      path: "Recursos/Diseño Grafico/Cereal Incineroar Parcial.pdf",
      title: "Despliegue de Empaque — Cereal Incineroar (PDF)"
    },
    additionalAssets: [],
    highlights: [
      "Vectorización integral del personaje e identidad del empaque",
      "Composición de caras laterales, frontal, trasera e información nutricional ficticia temática",
      "Documento técnico completo disponible para previsualización directa"
    ]
  },

  // ==========================================
  // CATEGORÍA 03 — POSTPRODUCCIÓN
  // ==========================================
  {
    id: "cv-postproduccion",
    number: "01",
    title: "Video CV: Cowboy Bebop Tribute",
    category: "POSTPRODUCCIÓN",
    categorySlug: "postproduccion",
    role: "ROL: INDIVIDUAL",
    roleType: "individual",
    summary: "Pieza audiovisual y de motion graphics inspirada en la apertura estilística de Cowboy Bebop.",
    description: "Proyecto audiovisual individual diseñado como una pieza dinámica de motion graphics. Basado en la estética icónica de Cowboy Bebop, integrando composiciones de siluetas, tipografía cinética y animación donde todo el material gráfico fue vectorizado por Sergio.",
    tools: ["After Effects", "Illustrator"],
    mediaType: "video",
    fileSizeNotice: "~88 MB",
    primaryAsset: {
      type: "video",
      path: "Recursos/PostProduccion/CV Postproduccion.mp4",
      title: "CV Postproducción — Cowboy Bebop Style"
    },
    additionalAssets: [],
    highlights: [
      "Animación de ritmo sincrónico con música y cortes visuales en After Effects",
      "Vectorización completa de personajes y elementos de escena en Illustrator",
      "Composición de color de alto contraste rojo/negro y tipografía dinámica"
    ]
  },
  {
    id: "foto-alegria",
    number: "02",
    title: "Emoción: Alegría en Blanco y Negro",
    category: "POSTPRODUCCIÓN",
    categorySlug: "postproduccion",
    role: "ROL: PROYECTO EN EQUIPO",
    roleType: "team",
    summary: "Fotografía de retrato en blanco y negro orientada a la expresión emotiva genuina.",
    description: "Proyecto de fotografía y edición en equipo enfocado en la representación visual de una emoción humana específica (Alegría). Se utilizó una dirección de iluminación de retrato y un compañero de universidad como modelo, concluyendo con edición tonal y de contraste en Adobe Photoshop.",
    tools: ["Photoshop"],
    mediaType: "image",
    primaryAsset: {
      type: "image",
      path: "Recursos/PostProduccion/Foto Alegria.jpg",
      alt: "Fotografía artística en blanco y negro representando la emoción Alegría"
    },
    additionalAssets: [],
    highlights: [
      "Dirección fotográfica de expresión gestual espontánea",
      "Gradación de contraste y curvas tonales en Photoshop para estética monocromática"
    ]
  },
  {
    id: "retrofuturismo",
    number: "03",
    title: "Retrofuturismo — Serie Fotográfica",
    category: "POSTPRODUCCIÓN",
    categorySlug: "postproduccion",
    role: "ROL: PROYECTO EN EQUIPO",
    roleType: "team",
    summary: "Exploración fotográfica y tratamiento conceptual de visiones pasadas sobre el porvenir.",
    description: "Proyecto fotográfico en equipo presentado en showroom. La serie investiga la visión retrofuturista —cómo las generaciones pasadas imaginaban el futuro— a través de composición escénica, iluminación calculada y postproducción digital en Photoshop.",
    tools: ["Photoshop"],
    mediaType: "gallery",
    primaryAsset: {
      type: "image",
      path: "Recursos/PostProduccion/Imagen RetroFuturista.JPG",
      alt: "Composición 1 de la serie fotográfica Retrofuturismo"
    },
    additionalAssets: [
      {
        type: "image",
        path: "Recursos/PostProduccion/Imagen RetroFuturista2.JPG",
        alt: "Composición 2 de la serie fotográfica Retrofuturismo",
        title: "Pieza secundaria de la serie Retrofuturismo"
      }
    ],
    highlights: [
      "Diseño de arte conceptual y ambientación lumínica",
      "Edición y corrección de color para exposición en showroom fotográfico"
    ]
  },
  {
    id: "stop-motion",
    number: "04",
    title: "Desventuras de Nieve — Stop Motion",
    category: "POSTPRODUCCIÓN",
    categorySlug: "postproduccion",
    role: "ROL: COLABORACIÓN",
    roleType: "collaboration",
    summary: "Cortometraje animado cuadro a cuadro con personajes y escenografía en plastilina.",
    description: "Proyecto de animación tradicional Stop Motion creado en colaboración. Cuenta una historia original sobre un desafortunado muñeco de nieve de plastilina que atraviesa una serie de cómicos e imprevistos accidentes. Incluye captura física, sincronización de tiempos y postproducción de video y audio.",
    tools: ["DaVinci Resolve"],
    mediaType: "video",
    fileSizeNotice: "~15 MB",
    primaryAsset: {
      type: "video",
      path: "Recursos/PostProduccion/Stop Motion.mp4",
      title: "Cortometraje Stop Motion de Plastilina"
    },
    additionalAssets: [],
    highlights: [
      "Modelado físico manual de personajes y entorno en plastilina",
      "Captura cuadro por cuadro y ritmo de animación tradicional",
      "Montaje, diseño sonoro y corrección en DaVinci Resolve"
    ]
  },

  // ==========================================
  // CATEGORÍA 04 — VR & AR
  // ==========================================
  {
    id: "oso-anteo-webar",
    number: "01",
    title: "Oso Anteo — WebAR Salazar de las Palmas",
    category: "VR & AR",
    categorySlug: "vr-ar",
    role: "ROL: PROYECTO EN EQUIPO",
    roleType: "team",
    summary: "Guía interactivo en WebAR y experiencia turística regional para Norte de Santander.",
    description: "Proyecto institucional y universitario en equipo vinculado con la Secretaría de Turismo y la Gobernación de Norte de Santander. La plataforma web permite a los turistas acceder a información cultural y activar la experiencia de Realidad Aumentada escaneando cuatro Image Targets representativos del municipio de Salazar de las Palmas (Los 7 Chorros, La Iglesia, La Pista de Patinaje y La Plaza Principal). Al escanearlos, el oso Anteo aparece en 3D ofreciendo narración interactiva.",
    tools: ["WebAR", "Vuforia", "Unity", "Blender"],
    mediaType: "webar-suite",
    primaryAsset: {
      type: "video",
      path: "Recursos/VR y AR/OsoAnteo/SalazarOso.mp4",
      title: "Demostración de la experiencia de Realidad Aumentada en sitio"
    },
    modelAsset: {
      type: "glb",
      path: "Recursos/3D/OsoAnteo.glb",
      alt: "Modelo 3D interactivo del personaje Anteo"
    },
    additionalAssets: [
      {
        type: "image",
        path: "Recursos/VR y AR/OsoAnteo/Salazar1.png",
        alt: "Captura 1 interfaz web turística de Salazar de las Palmas",
        title: "Interfaz Web — Salazar de las Palmas"
      },
      {
        type: "image",
        path: "Recursos/VR y AR/OsoAnteo/Salazar2.png",
        alt: "Captura 2 vista de información patrimonial",
        title: "Información Patrimonial y Cultural"
      },
      {
        type: "image",
        path: "Recursos/VR y AR/OsoAnteo/Salazar3.png",
        alt: "Captura 3 activación de módulo AR",
        title: "Módulo de Activación de Realidad Aumentada"
      }
    ],
    targets: [
      {
        name: "Los 7 Chorros",
        path: "Recursos/VR y AR/OsoAnteo/Target7chorros.jpg.jpeg"
      },
      {
        name: "Iglesia de Salazar",
        path: "Recursos/VR y AR/OsoAnteo/TargetIglesia.png"
      },
      {
        name: "Pista de Patinaje",
        path: "Recursos/VR y AR/OsoAnteo/TargetPatinaje.png"
      },
      {
        name: "Plaza Principal",
        path: "Recursos/VR y AR/OsoAnteo/TargetPlaza.png"
      }
    ],
    highlights: [
      "4 Image Targets configurados para reconocimiento visual en el municipio",
      "Modelado 3D y optimización del personaje Anteo para WebAR",
      "Desarrollo frontend web e integración con metodologías UX (mapas de empatía)"
    ]
  },
  {
    id: "skee-ball-vr",
    number: "02",
    title: "Skee-Ball VR Arcade Machine",
    category: "VR & AR",
    categorySlug: "vr-ar",
    role: "ROL: COLABORACIÓN",
    roleType: "collaboration",
    summary: "Modelado, texturizado e integración interactiva de una máquina arcade para Realidad Virtual.",
    description: "Parte de un entorno VR temático de salón arcade desarrollado en grupo. La responsabilidad específica de Sergio junto con un compañero consistió en el modelado 3D, texturizado realista y programación de física/funcionalidad de la clásica máquina Skee-Ball para permitir el lanzamiento de bolas y conteo de puntaje en Realidad Virtual dentro de Unity.",
    tools: ["Unity", "Blender"],
    mediaType: "gallery",
    primaryAsset: {
      type: "image",
      path: "Recursos/VR y AR/Skee-Ball/Cap1.jpeg",
      alt: "Máquina Skee-Ball 3D en el entorno VR arcade"
    },
    additionalAssets: [
      {
        type: "image",
        path: "Recursos/VR y AR/Skee-Ball/Captura2.jpeg",
        alt: "Vista lateral y estructura de rampa Skee-Ball",
        title: "Estructura de rampa y marcadores"
      },
      {
        type: "image",
        path: "Recursos/VR y AR/Skee-Ball/Captura3.jpeg",
        alt: "Vista en perspectiva del salón arcade",
        title: "Integración en el salón Arcade VR"
      },
      {
        type: "image",
        path: "Recursos/VR y AR/Skee-Ball/Captura4.jpeg",
        alt: "Detalle de los aros de puntuación y física de impacto",
        title: "Aros de puntuación y zona de juego"
      },
      {
        type: "image",
        path: "Recursos/VR y AR/Skee-Ball/Captura5.jpeg",
        alt: "Vista de inmersión en primera persona para visor VR",
        title: "Perspectiva del usuario en Realidad Virtual"
      }
    ],
    highlights: [
      "Modelado de precisión de la máquina arcade y aros concéntricos",
      "Texturizado con materiales envejecidos y paneles iluminados",
      "Pruebas de física e interacción háptica en Unity VR"
    ]
  },
  {
    id: "lata-gladiador-ar",
    number: "03",
    title: "Lata Gladiador AR Target",
    category: "VR & AR",
    categorySlug: "vr-ar",
    role: "ROL: INDIVIDUAL",
    roleType: "individual",
    summary: "Experiencia de reconocimiento volumétrico y tracking cilíndrico en Realidad Aumentada.",
    description: "Implementación técnica en Vuforia y Unity de un Cylinder Target. El software identifica la curvatura física de la lata y ancla el modelo 3D con animación en tiempo real.",
    tools: ["Vuforia", "Unity", "Blender"],
    mediaType: "video",
    crossLink: {
      text: "Ver modelo 3D interactivo en la sección 3D →",
      slug: "3d",
      projectId: "lata-gladiador"
    },
    primaryAsset: {
      type: "video",
      path: "Recursos/VR y AR/Lata Gladiador.mp4",
      title: "Demostración de Reconocimiento Cilíndrico AR"
    },
    additionalAssets: [],
    highlights: [
      "Tracking estable sobre superficie metálica cilíndrica",
      "Reemplazo visual e inicio de animación en Unity"
    ]
  }
];

export const categoryMeta = {
  "3d": {
    number: "01",
    title: "3D",
    subtitle: "Modelado Low Poly, Props & Personajes",
    description: "Exploración de modelado poligonal en Blender y 3ds Max, optimización de topología y geometrías preparadas para tiempo real e integración con experiencias de Realidad Aumentada.",
    count: 7,
    featuredId: "lata-gladiador"
  },
  "diseno-grafico": {
    number: "02",
    title: "DISEÑO GRÁFICO",
    subtitle: "Sistemas Visuales, Numismática & Packaging",
    description: "Diseño vectorial en Illustrator, sistemas de cartas lúdicas con funcionalidad de targets AR, rediseño del cono monetario colombiano y diseño de empaques.",
    count: 3,
    featuredId: "juego-ar"
  },
  "postproduccion": {
    number: "03",
    title: "POSTPRODUCCIÓN",
    subtitle: "Motion Graphics, Fotografía & Animación Tradicional",
    description: "Composición audiovisual en After Effects, etalonaje y montaje en DaVinci Resolve, animación cuadro por cuadro en Stop Motion y fotografía conceptual en blanco y negro.",
    count: 4,
    featuredId: "cv-postproduccion"
  },
  "vr-ar": {
    number: "04",
    title: "VR & AR",
    subtitle: "WebAR, Targets Físicos & Entornos Inmersivos",
    description: "Desarrollo de experiencias inmersivas con Vuforia y Unity, plataformas WebAR para patrimonio cultural y modelado funcional de props para salones arcade en Realidad Virtual.",
    count: 3,
    featuredId: "oso-anteo-webar"
  }
};
