/**
 * SAGL Portfolio — Objeto Multimedia Interactivo del Hero
 * Sergio Andrés Gómez López — Ingeniería en Multimedia
 * 
 * Transforma el elemento central del Hero en un resumen interactivo
 * del perfil multimedia de Sergio (3D, AR/VR, Diseño, Postproducción, Web),
 * permitiendo explorar cada área con retroalimentación inmediata y navegación directa.
 */

export function initHeroOrbit(canvasId = "hero-orbit-canvas") {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const container = canvas.closest(".hero-orbit-container") || canvas;
  const panel = canvas.closest(".hero-orbit-panel");
  const hudCard = document.getElementById("orbit-hud");
  const hudNum = document.getElementById("orbit-hud-num");
  const hudTitle = document.getElementById("orbit-hud-title");
  const hudDesc = document.getElementById("orbit-hud-desc");
  const hudLink = document.getElementById("orbit-hud-link");
  const coreBtn = document.getElementById("orbit-core-btn");
  const tabBtns = panel ? panel.querySelectorAll(".orbit-tab-btn") : [];
  const portraitFrame = document.querySelector(".hero-portrait-frame");

  // Disciplines Data
  const disciplines = {
    "3D": {
      key: "3D",
      num: "01 / MODELADO 3D",
      title: "3D Modeling & Props",
      desc: "7 Proyectos: Modelado poligonal en Blender y 3ds Max, optimización de malla y exportación para WebAR.",
      link: "work/3d.html",
      cta: "VER TRABAJOS DE 3D →",
      color: "#D86A45"
    },
    "VR / AR": {
      key: "VR / AR",
      num: "04 / REALIDAD AUMENTADA & VR",
      title: "Entornos Inmersivos & AR",
      desc: "3 Proyectos: WebAR para patrimonio en Salazar de las Palmas, Cylinder Targets físicos y arcade VR en Unity.",
      link: "work/vr-ar.html",
      cta: "VER TRABAJOS DE AR & VR →",
      color: "#D7D27A"
    },
    "DISEÑO": {
      key: "DISEÑO",
      num: "02 / DISEÑO GRÁFICO",
      title: "Diseño Vectorial & Numismática",
      desc: "3 Proyectos: Cartas físicas para reconocimiento AR, cono monetario de Colombia y empaque de Cereal Incineroar.",
      link: "work/diseno-grafico.html",
      cta: "VER TRABAJOS DE DISEÑO →",
      color: "#8D8BB8"
    },
    "POST": {
      key: "POST",
      num: "03 / POSTPRODUCCIÓN",
      title: "Motion Graphics & Audiovisual",
      desc: "4 Proyectos: Motion graphics Cowboy Bebop, cortometraje Stop Motion en plastilina y fotografía en B&N.",
      link: "work/postproduccion.html",
      cta: "VER TRABAJOS DE POSTPRODUCCIÓN →",
      color: "#E9E5DA"
    },
    "WEB": {
      key: "WEB",
      num: "05 / DESARROLLO FRONTEND",
      title: "Desarrollo Web & UX/UI",
      desc: "Estructuras semánticas, visores multimedia 3D (<model-viewer>), diseño responsivo y matrices de usuario.",
      link: "about/index.html",
      cta: "VER COMPETENCIAS WEB & UX →",
      color: "#D86A45"
    }
  };

  const disciplineKeys = ["3D", "VR / AR", "DISEÑO", "POST", "WEB"];
  let activeKeyIndex = 0;
  let activeKey = disciplineKeys[activeKeyIndex];

  // High DPI Canvas setup
  let width = 300;
  let height = 300;
  let dpr = window.devicePixelRatio || 1;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width || 300;
    height = rect.height || 300;
    dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }
  resize();
  window.addEventListener("resize", resize);

  // Mouse & interaction state
  const mouse = {
    x: width / 2,
    y: height / 2,
    targetX: width / 2,
    targetY: height / 2,
    isHovered: false,
    photoNearness: 0
  };

  // Orbital Nodes representing the 5 disciplines
  const nodes = [
    { key: "3D", label: "3D", radius: 82, speed: 0.010, angle: 0, size: 13, color: "#D86A45" },
    { key: "VR / AR", label: "AR/VR", radius: 114, speed: -0.007, angle: Math.PI * 0.4, size: 11, color: "#D7D27A" },
    { key: "DISEÑO", label: "DISEÑO", radius: 138, speed: 0.005, angle: Math.PI * 0.8, size: 12, color: "#8D8BB8" },
    { key: "POST", label: "POST", radius: 98, speed: -0.009, angle: Math.PI * 1.3, size: 10, color: "#E9E5DA" },
    { key: "WEB", label: "WEB", radius: 126, speed: 0.008, angle: Math.PI * 1.7, size: 11, color: "#D86A45" }
  ];

  let hoveredNode = null;

  function setActiveDiscipline(key) {
    if (!disciplines[key]) return;
    activeKey = key;
    activeKeyIndex = disciplineKeys.indexOf(key);

    const data = disciplines[key];

    // Update HUD
    if (hudCard && hudTitle && hudDesc && hudLink) {
      hudCard.classList.remove("highlight");
      setTimeout(() => {
        if (hudNum) hudNum.textContent = data.num;
        hudTitle.textContent = data.title;
        hudDesc.textContent = data.desc;
        hudLink.href = data.link;
        hudLink.textContent = data.cta;
        hudCard.classList.add("highlight");
      }, 50);
    }

    // Update Tabs
    tabBtns.forEach((btn) => {
      const isCurrent = btn.getAttribute("data-discipline") === key;
      btn.classList.toggle("active", isCurrent);
      btn.setAttribute("aria-selected", isCurrent ? "true" : "false");
    });
  }

  // Core Click handler: cycles disciplines
  if (coreBtn) {
    coreBtn.addEventListener("click", () => {
      activeKeyIndex = (activeKeyIndex + 1) % disciplineKeys.length;
      setActiveDiscipline(disciplineKeys[activeKeyIndex]);
    });
  }

  // Tabs click handlers
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const disc = btn.getAttribute("data-discipline");
      setActiveDiscipline(disc);
    });
  });

  // Track cursor on canvas container
  container.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.targetX = e.clientX - rect.left;
    mouse.targetY = e.clientY - rect.top;
    mouse.isHovered = true;

    // Check collision with nodes
    const centerX = width / 2;
    const centerY = height / 2;
    let found = null;

    nodes.forEach((node) => {
      const nx = centerX + (mouse.x - centerX) * 0.12 + Math.cos(node.angle) * node.radius;
      const ny = centerY + (mouse.y - centerY) * 0.12 + Math.sin(node.angle) * node.radius;
      const dist = Math.hypot(mouse.targetX - nx, mouse.targetY - ny);
      if (dist < node.size + 14) {
        found = node;
      }
    });

    hoveredNode = found;
    container.style.cursor = found ? "pointer" : "default";
  });

  container.addEventListener("click", () => {
    if (hoveredNode) {
      setActiveDiscipline(hoveredNode.key);
    }
  });

  container.addEventListener("mouseleave", () => {
    mouse.targetX = width / 2;
    mouse.targetY = height / 2;
    mouse.isHovered = false;
    hoveredNode = null;
    container.style.cursor = "default";
  });

  // Subtle photo nearness resonance
  if (portraitFrame) {
    portraitFrame.addEventListener("mousemove", (e) => {
      mouse.photoNearness = 0.5;
    });
    portraitFrame.addEventListener("mouseleave", () => {
      mouse.photoNearness = 0;
    });
  }

  // Ambient orbital dust particles
  const particles = Array.from({ length: 24 }, () => ({
    radius: 35 + Math.random() * 115,
    speed: (Math.random() - 0.5) * 0.006,
    angle: Math.random() * Math.PI * 2,
    size: 1.2 + Math.random() * 2,
    opacity: 0.15 + Math.random() * 0.25
  }));

  let animationFrameId;
  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function render() {
    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;

    // Damped mouse movement
    mouse.x += (mouse.targetX - mouse.x) * 0.06;
    mouse.y += (mouse.targetY - mouse.y) * 0.06;

    const offsetX = (mouse.x - centerX) * (0.12 + mouse.photoNearness * 0.06);
    const offsetY = (mouse.y - centerY) * (0.12 + mouse.photoNearness * 0.06);

    // Draw orbital path guide rings
    [82, 106, 130].forEach((r) => {
      ctx.beginPath();
      ctx.arc(centerX + offsetX * 0.3, centerY + offsetY * 0.3, r, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(233, 229, 218, 0.06)";
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Draw dust particles
    particles.forEach((p) => {
      if (!isReducedMotion) p.angle += p.speed;
      const px = centerX + offsetX * 0.25 + Math.cos(p.angle) * p.radius;
      const py = centerY + offsetY * 0.25 + Math.sin(p.angle) * p.radius;

      ctx.beginPath();
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(233, 229, 218, ${p.opacity})`;
      ctx.fill();
    });

    // Draw nodes
    nodes.forEach((node) => {
      if (!isReducedMotion) node.angle += node.speed;
      const isActive = node.key === activeKey;
      const isHovered = hoveredNode === node;
      const currentRadius = node.radius + (isActive ? 6 : 0) + (isHovered ? 8 : 0);
      const nx = centerX + offsetX + Math.cos(node.angle) * currentRadius;
      const ny = centerY + offsetY + Math.sin(node.angle) * currentRadius;

      // Connecting dashed line to center
      ctx.beginPath();
      ctx.moveTo(centerX + offsetX * 0.5, centerY + offsetY * 0.5);
      ctx.lineTo(nx, ny);
      ctx.strokeStyle = isActive
        ? `${node.color}99`
        : isHovered
        ? "rgba(216, 106, 69, 0.4)"
        : "rgba(233, 229, 218, 0.08)";
      ctx.lineWidth = isActive ? 1.8 : 1;
      ctx.setLineDash([3, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Glow aura on active or hovered node
      if (isActive || isHovered) {
        ctx.beginPath();
        ctx.arc(nx, ny, node.size + (isActive ? 12 : 8), 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}${isActive ? "55" : "33"}`;
        ctx.fill();
      }

      // Node base circle
      ctx.beginPath();
      ctx.arc(nx, ny, isActive ? node.size + 3 : node.size, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.fill();

      // White ring border
      ctx.beginPath();
      ctx.arc(nx, ny, isActive ? node.size + 3 : node.size, 0, Math.PI * 2);
      ctx.strokeStyle = isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.7)";
      ctx.lineWidth = isActive ? 2.5 : 1.2;
      ctx.stroke();

      // Node label
      ctx.font = isActive
        ? "bold 11px 'JetBrains Mono', monospace"
        : "10px 'JetBrains Mono', monospace";
      ctx.fillStyle = isActive ? "#FFFFFF" : "rgba(233, 229, 218, 0.85)";
      ctx.textAlign = "center";
      ctx.fillText(node.label, nx, ny + node.size + 14);
    });

    if (!isReducedMotion) {
      animationFrameId = requestAnimationFrame(render);
    }
  }

  // Initialize active discipline (3D)
  setActiveDiscipline("3D");

  if (!isReducedMotion) {
    render();
  } else {
    render();
  }
}
