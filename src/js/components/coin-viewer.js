/**
 * SAGL Portfolio — Coin Explorer Component
 * Sergio Andrés Gómez López — Multimedia Engineer
 * 
 * Selector interactivo de denominaciones y visualización ampliada para las Monedas de Colombia.
 * - 5 denominaciones ($50, $100, $200, $500, $1000)
 * - Transición cinemática corta y fluida entre caras
 * - Integración con Lightbox modal en Cara y Cruz
 * - Navegación por teclado (Flechas ← →, Enter, Espacio, Home, End)
 * - Soporte táctil y accesibilidad completa (ARIA)
 */

import { openLightboxWithItems } from "./lightbox.js";

// Denominaciones por defecto con rutas canónicas relativas a la carpeta work/
const DEFAULT_DENOMINATIONS = [
  {
    value: "50",
    label: "$50",
    cara: "../Recursos/Diseño Grafico/Monedas/Moneda 50 Cara.jpg",
    cruz: "../Recursos/Diseño Grafico/Monedas/Moneda 50 Cruz.jpg"
  },
  {
    value: "100",
    label: "$100",
    cara: "../Recursos/Diseño Grafico/Monedas/Moneda 100 Cara.jpg",
    cruz: "../Recursos/Diseño Grafico/Monedas/Moneda 100 Cruz.jpg"
  },
  {
    value: "200",
    label: "$200",
    cara: "../Recursos/Diseño Grafico/Monedas/Moneda 200 Cara.jpg",
    cruz: "../Recursos/Diseño Grafico/Monedas/Moneda 200 Cruz.jpg"
  },
  {
    value: "500",
    label: "$500",
    cara: "../Recursos/Diseño Grafico/Monedas/Moneda 500 Cara.png",
    cruz: "../Recursos/Diseño Grafico/Monedas/Moneda 500 Cruz.png"
  },
  {
    value: "1000",
    label: "$1000",
    cara: "../Recursos/Diseño Grafico/Monedas/Moneda 1000 Cara.png",
    cruz: "../Recursos/Diseño Grafico/Monedas/Moneda 1000 Cruz.png"
  }
];

/**
 * Normaliza las rutas de las imágenes para asegurar que apunten correctamente
 * desde la ubicación de la página HTML actual.
 */
function normalizeAssetPath(path) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("/") || path.startsWith("./") || path.startsWith("../")) {
    return path;
  }
  return "../" + path;
}

/**
 * Inicializa el visor interactivo de monedas.
 * @param {Object} [coinData] - Objeto con array denominations.
 */
export function initCoinViewer(coinData) {
  const container = document.querySelector(".coin-explorer");
  if (!container) return;

  // Si no se reciben datos válidos, se emplean las denominaciones por defecto
  const rawDenoms = (coinData && Array.isArray(coinData.denominations) && coinData.denominations.length > 0)
    ? coinData.denominations
    : DEFAULT_DENOMINATIONS;

  // Normalizar estructura y rutas
  const denominations = rawDenoms.map((d) => ({
    value: String(d.value),
    label: d.label || `$${d.value}`,
    cara: normalizeAssetPath(d.cara),
    cruz: normalizeAssetPath(d.cruz)
  }));

  const navBtns = Array.from(container.querySelectorAll(".coin-nav-btn"));
  const caraImg = container.querySelector("#coin-cara-img");
  const cruzImg = container.querySelector("#coin-cruz-img");
  const coinDisplay = container.querySelector(".coin-display");
  const denominationTitle = container.querySelector("#coin-denom-title");

  // Pre-carga inmediata de todas las imágenes para transiciones instantáneas
  denominations.forEach((d) => {
    const imgCara = new Image();
    imgCara.src = d.cara;
    const imgCruz = new Image();
    imgCruz.src = d.cruz;
  });

  // Construcción de la galería de elementos para el visor Lightbox
  const allCoinItems = [];
  denominations.forEach((denom) => {
    allCoinItems.push({
      src: denom.cara,
      title: `Moneda de ${denom.label} — Cara (Propuesta Numismática)`,
      alt: `Moneda de ${denom.label} - Cara`
    });
    allCoinItems.push({
      src: denom.cruz,
      title: `Moneda de ${denom.label} — Cruz (Propuesta Numismática)`,
      alt: `Moneda de ${denom.label} - Cruz`
    });
  });

  let currentVal = "50";
  let transitionTimeout = null;

  /**
   * Cambia la denominación activa y actualiza simultáneamente UI, ARIA e imágenes.
   * @param {string|number} targetVal - Valor de la denominación a activar.
   */
  function switchDenomination(targetVal) {
    const valStr = String(targetVal).trim();
    const denom = denominations.find((d) => d.value === valStr || Number(d.value) === Number(valStr));
    
    if (!denom) {
      console.warn("SAGL CoinViewer: Denominación no encontrada para el valor:", targetVal);
      return;
    }

    currentVal = denom.value;

    // 1. Actualizar estado visual de los botones y atributos ARIA
    navBtns.forEach((btn) => {
      const btnVal = String(btn.getAttribute("data-val") || btn.dataset.val).trim();
      const isActive = (btnVal === denom.value || Number(btnVal) === Number(denom.value));

      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
      btn.setAttribute("tabindex", isActive ? "0" : "-1");
    });

    // 2. Actualizar atributo aria-labelledby del panel
    if (coinDisplay) {
      const activeBtn = navBtns.find(btn => btn.classList.contains("active"));
      if (activeBtn && activeBtn.id) {
        coinDisplay.setAttribute("aria-labelledby", activeBtn.id);
      } else {
        coinDisplay.setAttribute("aria-labelledby", `coin-tab-${denom.value}`);
      }
    }

    // 3. Actualizar texto de título de denominación
    if (denominationTitle) {
      const labelText = denom.label.startsWith("$") ? denom.label : `$${denom.label}`;
      denominationTitle.textContent = `Denominación: ${labelText} Pesos Colombianos`;
    }

    // 4. Cancelar transición previa si existe para no bloquear clics rápidos
    if (transitionTimeout) {
      clearTimeout(transitionTimeout);
      transitionTimeout = null;
    }

    // 5. Aplicar animación de transición y actualizar imágenes
    if (coinDisplay && caraImg && cruzImg) {
      coinDisplay.classList.add("coin-transitioning");

      transitionTimeout = setTimeout(() => {
        // Actualizar Cara
        caraImg.src = denom.cara;
        caraImg.alt = `Moneda de ${denom.label} - Cara`;
        caraImg.setAttribute("data-src", denom.cara);
        caraImg.setAttribute("data-title", `Moneda de ${denom.label} — Cara`);

        // Actualizar Cruz
        cruzImg.src = denom.cruz;
        cruzImg.alt = `Moneda de ${denom.label} - Cruz`;
        cruzImg.setAttribute("data-src", denom.cruz);
        cruzImg.setAttribute("data-title", `Moneda de ${denom.label} — Cruz`);

        // Finalizar clase de transición suavemente
        requestAnimationFrame(() => {
          coinDisplay.classList.remove("coin-transitioning");
        });
        transitionTimeout = null;
      }, 120);
    } else {
      // Fallback directo si no hay contenedor de display
      if (caraImg) caraImg.src = denom.cara;
      if (cruzImg) cruzImg.src = denom.cruz;
    }
  }

  // Manejadores de eventos Click y Teclado en los botones de denominación
  navBtns.forEach((btn, idx) => {
    // Evento de click para mouse y touch
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const val = btn.getAttribute("data-val") || btn.dataset.val;
      switchDenomination(val);
    });

    // Navegación accesible por teclado
    btn.addEventListener("keydown", (e) => {
      let targetIdx = null;
      if (e.key === "ArrowRight") {
        targetIdx = (idx + 1) % navBtns.length;
      } else if (e.key === "ArrowLeft") {
        targetIdx = (idx - 1 + navBtns.length) % navBtns.length;
      } else if (e.key === "Home") {
        targetIdx = 0;
      } else if (e.key === "End") {
        targetIdx = navBtns.length - 1;
      }

      if (targetIdx !== null) {
        e.preventDefault();
        navBtns[targetIdx].focus();
        const val = navBtns[targetIdx].getAttribute("data-val") || navBtns[targetIdx].dataset.val;
        switchDenomination(val);
      }
    });
  });

  // Visor Lightbox directo al hacer click en Cara o Cruz
  const openCaraLightbox = () => {
    const currentDenom = denominations.find(d => d.value === currentVal || Number(d.value) === Number(currentVal));
    if (!currentDenom) return;
    const idx = allCoinItems.findIndex(item => item.src === currentDenom.cara);
    openLightboxWithItems(allCoinItems, idx >= 0 ? idx : 0);
  };

  const openCruzLightbox = () => {
    const currentDenom = denominations.find(d => d.value === currentVal || Number(d.value) === Number(currentVal));
    if (!currentDenom) return;
    const idx = allCoinItems.findIndex(item => item.src === currentDenom.cruz);
    openLightboxWithItems(allCoinItems, idx >= 0 ? idx : 1);
  };

  const caraSide = container.querySelector(".coin-side:first-child");
  const cruzSide = container.querySelector(".coin-side:last-child");

  if (caraSide) {
    caraSide.setAttribute("tabindex", "0");
    caraSide.setAttribute("role", "button");
    caraSide.setAttribute("aria-label", "Ampliar cara de la moneda seleccionada");
    caraSide.addEventListener("click", openCaraLightbox);
    caraSide.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCaraLightbox();
      }
    });
  }

  if (cruzSide) {
    cruzSide.setAttribute("tabindex", "0");
    cruzSide.setAttribute("role", "button");
    cruzSide.setAttribute("aria-label", "Ampliar cruz de la moneda seleccionada");
    cruzSide.addEventListener("click", openCruzLightbox);
    cruzSide.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCruzLightbox();
      }
    });
  }

  // Comprobar y asegurar estado inicial en $50
  const initialActiveBtn = navBtns.find(b => b.classList.contains("active")) || navBtns[0];
  if (initialActiveBtn) {
    const initVal = initialActiveBtn.getAttribute("data-val") || initialActiveBtn.dataset.val || "50";
    switchDenomination(initVal);
  }
}

// Auto-inicialización global si la ventana está disponible
if (typeof window !== "undefined") {
  window.initCoinViewer = initCoinViewer;
}
