# SAGL — Multimedia Portfolio
### Sergio Andrés Gómez López &middot; Multimedia Engineer

Portafolio web personal e interactivo de **Sergio Andrés Gómez López (SAGL)**, estudiante de Ingeniería en Multimedia en búsqueda de **prácticas profesionales**.

Diseñado bajo una estética editorial y minimalista (inspirada en la filosofía de composición de Lynn Fisher) combinada con microinteracciones y elementos reactivos (inspirados en la filosofía interactiva de Josh Comeau), manteniendo una identidad técnica y visual propia.

---

## 🚀 Características Principales

- **Identidad SAGL & Navegación Global:** Wordmark interactivo en la esquina superior izquierda que actúa como ancla global de retorno al Home en todas las páginas.
- **Elemento Orbital Distintivo:** Canvas interactivo en portada con simulación de gravedad y física suave que reacciona a la posición del cursor y al tacto, representando las cinco áreas de especialidad (3D, AR/VR, Diseño Gráfico, Postproducción y Web).
- **Visores 3D Nativos:** Integración con Google `<model-viewer>` para interactuar, rotar, hacer zoom y visualizar en pantalla completa los modelos `.glb` reales (`Lata Gladiador.glb`, `Lata Impulso.glb`, `Coliseo.glb`, `Hoz.glb`, `OsoAnteo.glb`).
- **Gestión Inteligente de Recursos Pesados:** Carga bajo demanda (*lazy load on-demand*) para modelos pesados (como `Coliseo.glb` ~318MB) evitando saturar la memoria inicial del navegador.
- **Colección Numismática Interactiva:** Selector interactivo de las 5 denominaciones de Monedas de Colombia ($50, $100, $200, $500, $1000) con alternancia Cara / Cruz y ampliación en Lightbox.
- **Galería Lightbox Accesible:** Visor de imágenes modal a pantalla completa con navegación por teclado (flechas $\leftarrow$ $\rightarrow$, Escape) y soporte táctil.
- **Visor de PDF Técnico:** Visualización embebida y descarga del despliegue vectorial del empaque de Cereal Incineroar.
- **Matriz Interactiva de Habilidades (About):** Al hacer click en cualquier herramienta técnica (Blender, Unity, Vuforia, Illustrator, After Effects, DaVinci, etc.), el sistema despliega su contexto y lista los proyectos reales del catálogo donde fue utilizada.
- **100% Estático & Accesible:** Sin backend innecesario, compatible con lectores de pantalla, soporte para `prefers-reduced-motion` y preparado para despliegue inmediato en GitHub Pages, Netlify o Vercel.

---

## 📁 Estructura del Proyecto

```text
Portafolio Sergio G/
├── index.html                   # Portada / Home con hero orbital interactivo
├── work/
│   ├── index.html               # Directorio general editorial (01 3D, 02 Diseño, 03 Post, 04 VR/AR)
│   ├── 3d.html                  # Categoría 3D (Lata Gladiador, Lata Impulso, Coliseo, Hoz, Oso Anteo, MicroWorld, Espada)
│   ├── diseno-grafico.html      # Categoría Diseño Gráfico (Juego AR, Monedas Colombianas, Cereal Incineroar)
│   ├── postproduccion.html      # Categoría Postproducción (Video CV Cowboy Bebop, Foto Alegría, Retrofuturismo, Stop Motion)
│   └── vr-ar.html               # Categoría VR & AR (Oso Anteo WebAR Salazar, Skee-Ball VR Arcade, Lata Gladiador AR)
├── about/
│   └── index.html               # Perfil, formación, experiencia institucional y matriz interactiva de Herramientas → Proyectos
├── contact/
│   └── index.html               # Contacto directo, estado de prácticas profesionales y CV
├── src/
│   ├── css/
│   │   ├── variables.css        # Paleta (fondo #171513, crema #E9E5DA, terracota #D86A45, oliva #D7D27A, violeta #8D8BB8)
│   │   ├── base.css             # Reset, tipografía editorial, textura de grano digital sutil y reglas de accesibilidad
│   │   ├── components.css       # Header, wordmark SAGL, botones, cards editoriales, visores multimedia y footer
│   │   ├── lightbox.css         # Visor modal de galerías con zoom y teclado
│   │   └── pages.css            # Layouts específicos de Home, Work, About y Contact
│   ├── data/
│   │   ├── profile.js           # Datos verificados del perfil de Sergio Andrés Gómez López
│   │   ├── projects.js          # Catálogo desacoplado de proyectos, metadatos y rutas de assets
│   │   └── skills.js            # Mapeo bidireccional entre herramientas y proyectos
│   └── js/
│       ├── main.js              # Controlador global (navegación, header scroll, toast y menú móvil)
│       └── components/
│           ├── hero-orbit.js    # Canvas interactivo orbital para Home
│           ├── model-viewer-loader.js # Cargador diferido de Google <model-viewer>
│           ├── lightbox.js      # Visor modal accesible para imágenes
│           ├── coin-viewer.js   # Selector interactivo de monedas colombianas
│           └── skill-filter.js  # Conector interactivo de herramientas a proyectos en About
└── Recursos/                    # Fuente oficial de assets multimedia
    ├── 3D/
    ├── Diseño Grafico/
    ├── PostProduccion/
    └── VR y AR/
```

---

## 🛠️ Cómo Visualizar en Local

No se requiere ningún paso de compilación ni instalación de dependencias externas. Puedes abrirlo directamente con cualquiera de las siguientes opciones:

### Opción 1: Con extensión Live Server (VS Code)
1. Abre la carpeta `Portafolio Sergio G` en Visual Studio Code.
2. Haz click derecho en `index.html` y selecciona **Open with Live Server**.

### Opción 2: Con cualquier servidor web estático (Python / Node / PHP / etc.)
```bash
# Con Python
python -m http.server 8000

# Con npx serve
npx serve .
```
Luego abre en tu navegador `http://localhost:8000`.

---

## 🌐 Despliegue en GitHub Pages

1. Inicializa el repositorio Git en la raíz:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SAGL Multimedia Portfolio"
   ```
2. Crea un repositorio en GitHub y sube tu código:
   ```bash
   git branch -M main
   git remote add origin https://github.com/tu-usuario/portafolio-sagl.git
   git push -u origin main
   ```
3. En la configuración de tu repositorio en GitHub (**Settings > Pages**):
   - En **Source**, selecciona `Deploy from a branch`.
   - En **Branch**, selecciona `main` y la carpeta `/ (root)`.
   - Guarda los cambios. Tu portafolio estará online en `https://tu-usuario.github.io/portafolio-sagl/`.

---

## 👨‍💻 Autoría y Créditos
- **Propietario del Portafolio:** Sergio Andrés Gómez López (SAGL)
- **Disciplina:** Ingeniería en Multimedia
- **Contacto:** [sergiogomez.multimedia@gmail.com](mailto:sergiogomez.multimedia@gmail.com)
