/**
 * SAGL Portfolio — 3D Model Viewer Loader
 * Integración y control de visores 3D interactivos (<model-viewer>) con carga bajo demanda,
 * controles de cámara, zoom, pantalla completa y gestión de memoria.
 */

export function init3DViewers() {
  const containers = document.querySelectorAll(".model-viewer-wrapper");
  if (!containers.length) return;

  containers.forEach((wrapper) => {
    const viewer = wrapper.querySelector("model-viewer");
    const fullscreenBtn = wrapper.querySelector(".model-fullscreen-btn");
    const lazyBtn = wrapper.querySelector(".load-3d-btn");
    const lazyOverlay = wrapper.querySelector(".model-lazy-overlay");
    const controlsHint = wrapper.querySelector(".model-controls-hint");

    if (viewer) {
      // Configuration defaults
      viewer.setAttribute("camera-controls", "");
      viewer.setAttribute("touch-action", "pan-y");
      viewer.setAttribute("shadow-intensity", "1");
      viewer.setAttribute("exposure", "1.05");

      // Handle successful model load
      viewer.addEventListener("load", () => {
        if (controlsHint) {
          controlsHint.style.opacity = "1";
        }
        if (lazyOverlay) {
          lazyOverlay.style.display = "none";
        }
      });

      // Handle viewer load error
      viewer.addEventListener("error", (e) => {
        console.warn("Model viewer load error:", e);
        if (controlsHint) {
          controlsHint.innerHTML = "<span style='color:var(--accent-coral);'>Modelo disponible para visualización 3D local.</span>";
        }
        if (lazyBtn) {
          lazyBtn.textContent = "Reintentar carga 3D";
          lazyBtn.disabled = false;
        }
      });
    }

    // Fullscreen support
    if (fullscreenBtn && viewer) {
      fullscreenBtn.addEventListener("click", () => {
        if (viewer.requestFullscreen) {
          viewer.requestFullscreen();
        } else if (viewer.webkitRequestFullscreen) {
          viewer.webkitRequestFullscreen();
        }
      });
    }

    // Lazy load explicit button for heavy models (e.g. Coliseo 318MB)
    if (lazyBtn && viewer && lazyOverlay) {
      lazyBtn.addEventListener("click", () => {
        const src = lazyBtn.getAttribute("data-src");
        if (src) {
          lazyBtn.innerHTML = "<span class='spinner-dot'></span> Cargando geometría 3D (~318 MB)...";
          lazyBtn.disabled = true;
          viewer.setAttribute("src", src);

          viewer.addEventListener("load", () => {
            lazyOverlay.style.display = "none";
          }, { once: true });

          viewer.addEventListener("error", () => {
            lazyBtn.textContent = "Error al cargar modelo. Reintentar";
            lazyBtn.disabled = false;
          }, { once: true });
        }
      });
    }
  });
}
