/**
 * SAGL Portfolio — Accessible Lightbox Component
 * Visualizador modal accesible para galerías, targets y capturas a tamaño completo.
 * Soporta navegación por teclado (Escape, Flechas ← →), swipe táctil y selector de colecciones.
 */

let activeGallery = [];
let currentIndex = 0;
let lightboxEl = null;

export function initLightbox() {
  createLightboxDOM();
  bindGalleryTriggers();
}

function createLightboxDOM() {
  if (document.querySelector(".sagl-lightbox")) return;

  const lb = document.createElement("div");
  lb.className = "sagl-lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-label", "Visor de imágenes ampliado");
  lb.innerHTML = `
    <div class="lightbox-header">
      <div class="lightbox-title-wrap">
        <span class="lightbox-counter" id="lb-counter">1 / 1</span>
        <h3 class="lightbox-title" id="lb-title">Imagen</h3>
      </div>
      <button class="lightbox-close-btn" id="lb-close" aria-label="Cerrar visor ampliado (Escape)">✕</button>
    </div>
    
    <button class="lightbox-nav-btn lightbox-prev-btn" id="lb-prev" aria-label="Imagen anterior (Flecha izquierda)">‹</button>
    
    <div class="lightbox-body" id="lb-body">
      <img id="lb-img" src="" alt="Vista ampliada" />
    </div>
    
    <button class="lightbox-nav-btn lightbox-next-btn" id="lb-next" aria-label="Siguiente imagen (Flecha derecha)">›</button>
    
    <div class="lightbox-footer">
      <span>Navega con las flechas del teclado ← → o presiona ESC para cerrar</span>
    </div>
  `;

  document.body.appendChild(lb);
  lightboxEl = lb;

  // Event listeners
  document.getElementById("lb-close").addEventListener("click", closeLightbox);
  document.getElementById("lb-prev").addEventListener("click", (e) => { e.stopPropagation(); prevImage(); });
  document.getElementById("lb-next").addEventListener("click", (e) => { e.stopPropagation(); nextImage(); });

  // Close on backdrop click (clicking outside the image)
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.id === "lb-body") {
      closeLightbox();
    }
  });

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (!lightboxEl || !lightboxEl.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  });

  // Touch swipe gestures
  let touchStartX = 0;
  let touchEndX = 0;

  lb.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lb.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        prevImage();
      } else {
        nextImage();
      }
    }
  }, { passive: true });
}

function bindGalleryTriggers() {
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-lightbox]");
    if (!trigger) return;

    e.preventDefault();
    const groupName = trigger.getAttribute("data-lightbox-group") || "default";
    const groupTriggers = Array.from(document.querySelectorAll(`[data-lightbox][data-lightbox-group="${groupName}"]`));

    activeGallery = groupTriggers.map((el) => {
      const imgChild = el.querySelector("img");
      const src = el.getAttribute("data-src") || el.getAttribute("src") || el.getAttribute("href") || (imgChild ? imgChild.src : "");
      const title = el.getAttribute("data-title") || el.getAttribute("alt") || (imgChild ? imgChild.alt : "Imagen del portafolio");
      return { src, title, alt: title };
    });

    const clickedSrc = trigger.getAttribute("data-src") || trigger.getAttribute("src") || trigger.getAttribute("href") || (trigger.querySelector("img") ? trigger.querySelector("img").src : "");
    currentIndex = activeGallery.findIndex((item) => item.src === clickedSrc);
    if (currentIndex === -1) currentIndex = 0;

    openLightbox();
  });
}

export function openLightboxWithItems(items, initialIndex = 0) {
  if (!items || !items.length) return;
  createLightboxDOM();
  activeGallery = items;
  currentIndex = initialIndex >= 0 && initialIndex < items.length ? initialIndex : 0;
  openLightbox();
}

function openLightbox() {
  if (!activeGallery.length || !lightboxEl) return;
  updateLightboxContent();
  lightboxEl.classList.add("active");
  document.body.style.overflow = "hidden";
}

export function closeLightbox() {
  if (!lightboxEl) return;
  lightboxEl.classList.remove("active");
  document.body.style.overflow = "";
}

function prevImage() {
  if (activeGallery.length <= 1) return;
  currentIndex = (currentIndex - 1 + activeGallery.length) % activeGallery.length;
  updateLightboxContent();
}

function nextImage() {
  if (activeGallery.length <= 1) return;
  currentIndex = (currentIndex + 1) % activeGallery.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = activeGallery[currentIndex];
  if (!item) return;

  const imgEl = document.getElementById("lb-img");
  const titleEl = document.getElementById("lb-title");
  const counterEl = document.getElementById("lb-counter");
  const prevBtn = document.getElementById("lb-prev");
  const nextBtn = document.getElementById("lb-next");

  imgEl.src = item.src;
  imgEl.alt = item.alt || "Imagen ampliada";
  titleEl.textContent = item.title || "Imagen";
  counterEl.textContent = `${currentIndex + 1} / ${activeGallery.length}`;

  if (activeGallery.length <= 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
  }
}
