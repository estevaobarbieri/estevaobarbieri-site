document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-analytics-event]").forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof window.gtag !== "function") return;

    window.gtag("event", link.dataset.analyticsEvent, {
      link_location: link.dataset.analyticsLocation,
      link_text: link.textContent.trim().replace(/\s+/g, " ")
    });
  });
});

// V2.5 — menu mobile (não interfere nos eventos do GA4 acima)
(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  if (!header || !toggle) return;
  const setOpen = (open) => {
    header.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  };
  toggle.addEventListener("click", () => setOpen(!header.classList.contains("menu-open")));
  document.querySelectorAll("#menu a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
})();
