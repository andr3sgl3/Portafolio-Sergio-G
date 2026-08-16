/**
 * SAGL Portfolio — Interactive Skill Filter & Software Tooling Engine
 * Sergio Andrés Gómez López — Ingeniería en Multimedia
 * 
 * Implementa:
 * 1. Iconografía vectorial dedicada para cada software.
 * 2. Micro-interacción de hover / transformación "reloj de arena" (300-700ms).
 * 3. Revelación fluida de proyectos vinculados al posar el cursor o enfocar.
 * 4. Navegación y selección accesible por click, teclado y toque táctil móvil.
 */

import { projects } from "../data/projects.js";
import { skillsData } from "../data/skills.js";

export function initSkillFilter() {
  const toolCards = document.querySelectorAll(".tool-interactive-card");
  const panel = document.querySelector(".tool-context-panel");
  if (!toolCards.length || !panel) return;

  const panelTitle = panel.querySelector(".tool-panel-name");
  const panelDesc = panel.querySelector(".tool-panel-desc");
  const panelProjectsList = panel.querySelector(".tool-linked-projects");

  // Hourglass SVG template for the morphing transformation
  const hourglassSVG = `
    <svg viewBox="0 0 32 32" class="hourglass-svg" aria-hidden="true">
      <path class="hg-glass" d="M9 5h14v2l-5 6 5 6v2H9v-2l5-6-5-6V5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path class="hg-top-sand" d="M12 7h8l-3 4h-2z" fill="currentColor"/>
      <line class="hg-sand-stream" x1="16" y1="13" x2="16" y2="19" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/>
      <path class="hg-bottom-sand" d="M11 20h10l-2 3h-6z" fill="currentColor"/>
    </svg>
  `;

  // Hydrate each card with its SVG logo, hourglass morph container, and projects reveal list
  toolCards.forEach((card) => {
    const toolId = card.getAttribute("data-tool-id");
    
    // Find tool in skillsData
    let foundTool = null;
    for (const cat of skillsData.categories) {
      const t = cat.tools.find((item) => item.id === toolId);
      if (t) {
        foundTool = t;
        break;
      }
    }

    if (!foundTool) return;

    // Get real projects for this tool
    const relatedProjects = [];
    if (foundTool.projectIds && foundTool.projectIds.length > 0) {
      foundTool.projectIds.forEach((pid) => {
        const proj = projects.find((p) => p.id === pid);
        if (proj && !relatedProjects.some(rp => rp.id === proj.id)) {
          relatedProjects.push(proj);
        }
      });
    }

    // Build the visual elements inside the card if not already built
    if (!card.querySelector(".tool-visual-identity")) {
      const head = card.querySelector(".tool-card-head");
      const desc = card.querySelector(".tool-card-desc");
      
      const visualIdentity = document.createElement("div");
      visualIdentity.className = "tool-visual-identity";
      visualIdentity.innerHTML = `
        <div class="tool-logo-badge" title="${foundTool.name}">
          <div class="tool-logo-icon">${foundTool.svgIcon || ""}</div>
          <div class="tool-hourglass-morph">${hourglassSVG}</div>
        </div>
        <div class="tool-header-meta">
          <span class="tool-card-name">${foundTool.name}</span>
          <span class="tool-project-count">${foundTool.countText || `${relatedProjects.length} proyectos`}</span>
        </div>
      `;

      if (head) {
        head.replaceWith(visualIdentity);
      } else {
        card.insertBefore(visualIdentity, card.firstChild);
      }

      // Build revealed projects list
      const revealContainer = document.createElement("div");
      revealContainer.className = "tool-projects-reveal";
      revealContainer.setAttribute("aria-hidden", "true");

      if (relatedProjects.length > 0) {
        let listHTML = `<span class="reveal-eyebrow">Trabajos con ${foundTool.name}:</span><ul class="reveal-list">`;
        relatedProjects.forEach((proj) => {
          listHTML += `<li><span class="reveal-arrow">→</span> <span class="reveal-pname">${proj.title}</span></li>`;
        });
        listHTML += `</ul><span class="reveal-cta">Ver en catálogo &rarr;</span>`;
        revealContainer.innerHTML = listHTML;
      } else {
        revealContainer.innerHTML = `
          <span class="reveal-eyebrow">Área formativa:</span>
          <p class="reveal-empty-desc">${foundTool.roleSummary}</p>
        `;
      }

      card.appendChild(revealContainer);
    }

    // Selection handler
    const handleSelect = (e) => {
      // Update card states & aria
      toolCards.forEach((c) => {
        c.classList.remove("selected");
        c.setAttribute("aria-selected", "false");
      });
      card.classList.add("selected");
      card.setAttribute("aria-selected", "true");

      // Populate context panel with animation
      panel.classList.remove("active");
      
      setTimeout(() => {
        panelTitle.innerHTML = `
          <span class="panel-icon-wrap">${foundTool.svgIcon || ""}</span>
          <span>${foundTool.name}</span>
        `;
        panelDesc.textContent = foundTool.roleSummary;

        // Populate linked projects
        panelProjectsList.innerHTML = "";
        if (relatedProjects.length > 0) {
          relatedProjects.forEach((proj) => {
            const pill = document.createElement("a");
            pill.className = "tool-project-pill";
            pill.href = `../work/${proj.categorySlug}.html#${proj.id}`;
            pill.innerHTML = `
              <span class="pill-title">${proj.title}</span>
              <span class="pill-category">(${proj.category})</span>
              <span class="pill-arrow">→</span>
            `;
            panelProjectsList.appendChild(pill);
          });
        } else {
          const emptyMsg = document.createElement("div");
          emptyMsg.className = "tool-panel-empty-notice";
          emptyMsg.innerHTML = `<p>Herramienta utilizada en formación académica técnica, prototipado y desarrollo continuo transversal.</p>`;
          panelProjectsList.appendChild(emptyMsg);
        }

        panel.classList.add("active");
        
        // Only scroll if triggered by direct user click/key
        if (e && (e.type === "click" || e.type === "keydown")) {
          panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 80);
    };

    // Events
    card.addEventListener("click", handleSelect);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSelect(e);
      }
    });
  });

  // Automatically select the first tool (Blender) on initial load to show meaningful content
  const firstCard = toolCards[0];
  if (firstCard && !panel.classList.contains("active")) {
    firstCard.click();
  }
}
