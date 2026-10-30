/* ============================================================
   KILLER CAMPUS — interactions de démonstration
   Aucune dépendance externe. Aucune donnée réelle.
   ============================================================ */
(function () {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  /* ---------- Navigation mobile publique ---------- */
  const menuToggle = $("[data-menu-toggle]");
  const mobileNav = $("[data-mobile-nav]");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!open));
      mobileNav.classList.toggle("is-open", !open);
    });
  }

  /* ---------- Drawer de l'espace connecté ---------- */
  const sidebar = $("[data-sidebar]");
  const sidebarToggle = $("[data-sidebar-toggle]");
  const sidebarClose = $("[data-sidebar-close]");
  const scrim = $("[data-sidebar-scrim]");

  const setSidebar = (open) => {
    if (!sidebar) return;
    sidebar.classList.toggle("is-open", open);
    if (scrim) scrim.hidden = !open;
    if (sidebarToggle) sidebarToggle.setAttribute("aria-expanded", String(open));
  };

  sidebarToggle?.addEventListener("click", () => setSidebar(true));
  sidebarClose?.addEventListener("click", () => setSidebar(false));
  scrim?.addEventListener("click", () => setSidebar(false));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setSidebar(false);
  });

  /* ---------- Afficher / masquer le mot de passe ---------- */
  $$("[data-password-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.getElementById(button.getAttribute("aria-controls"));
      if (!input) return;
      const visible = input.type === "text";
      input.type = visible ? "password" : "text";
      button.setAttribute("aria-pressed", String(!visible));
      button.setAttribute("aria-label", visible ? "Afficher le mot de passe" : "Masquer le mot de passe");
      const icon = $(".icon", button);
      if (icon) icon.style.opacity = visible ? "1" : "0.55";
    });
  });

  /* ---------- Onglets et filtres de démonstration ---------- */
  $$("[data-filter-group]").forEach((group) => {
    const chips = $$("[data-filter]", group);
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((item) => item.classList.remove("is-active"));
        chip.classList.add("is-active");
        const value = chip.getAttribute("data-filter");
        const targetSelector = group.getAttribute("data-filter-target");
        if (!targetSelector) return;
        const cards = $$(targetSelector);
        cards.forEach((card) => {
          const values = (card.getAttribute("data-category") || "").split(/\s+/);
          const matches = value === "all" || values.includes(value);
          card.hidden = !matches;
        });
      });
    });
  });

  /* ---------- Actions simulées ---------- */
  const toast = $("[data-toast]");
  let toastTimer;

  const showToast = (message) => {
    if (!toast) return;
    const label = $("[data-toast-message]", toast);
    if (label) label.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
  };

  $$("[data-demo-action]").forEach((element) => {
    const eventName = element.tagName === "FORM" ? "submit" : "click";
    element.addEventListener(eventName, (event) => {
      event.preventDefault();
      showToast(element.getAttribute("data-demo-action") || "Action simulée — maquette de démonstration.");
    });
  });

  /* ---------- Année du footer ---------- */
  $$("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();
