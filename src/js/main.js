/**
 * SAGL Portfolio — Main Controller
 * Sergio Andrés Gómez López — Multimedia Engineer
 */

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMobileNav();
  initToast();
});

/**
 * Header scroll state & SAGL micro-interaction
 */
function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const drawer = document.querySelector(".mobile-drawer");
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = drawer.classList.toggle("open");
    toggleBtn.classList.toggle("open", isOpen);
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Close when clicking nav links
  const links = drawer.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
      toggleBtn.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

/**
 * Simple Accessible Toast Notification System
 */
let toastTimeout;
export function showToast(message, duration = 3000) {
  let toast = document.getElementById("sagl-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "sagl-toast";
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #1e1b19;
      color: #E9E5DA;
      border: 1px solid #D86A45;
      padding: 12px 20px;
      border-radius: 8px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.875rem;
      box-shadow: 0 8px 24px rgba(0,0,0,0.5);
      z-index: 2000;
      opacity: 0;
      transform: translateY(12px);
      transition: all 250ms ease;
      pointer-events: none;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(12px)";
  }, duration);
}

function initToast() {
  // Global copy to clipboard handler
  document.addEventListener("click", (e) => {
    const copyBtn = e.target.closest("[data-copy]");
    if (copyBtn) {
      const textToCopy = copyBtn.getAttribute("data-copy");
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`¡Copiado al portapapeles: ${textToCopy}!`);
        }).catch(() => {
          showToast("Error al copiar al portapapeles.");
        });
      }
    }
  });
}
